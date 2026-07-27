<?php
namespace App\Http\Controllers;

use App\Models\Donation;
use App\Models\Mustahiq;
use App\Models\ZiswafDistribution;
use App\Models\ZiswafCategory;
use App\Models\Cashbox;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ZiswafController extends Controller
{
    public function donationsIndex(Request $request)
    {
        $query = Donation::with(['category', 'jamaah', 'cashbox'])->orderBy('tanggal', 'desc');
        if ($request->filled('jenis_ziswaf_id')) $query->where('jenis_ziswaf_id', $request->jenis_ziswaf_id);

        return Inertia::render('Ziswaf/Donations/Index', [
            'donations' => $query->paginate(15)->withQueryString(),
            'categories' => ZiswafCategory::all(),
            'cashboxes' => Cashbox::where('is_active', true)->get(),
        ]);
    }

    public function storeDonation(Request $request)
    {
        $validated = $request->validate([
            'jenis_ziswaf_id' => 'required|exists:jenis_ziswafs,id',
            'nama_donatur' => 'nullable|string|max:255',
            'no_hp_donatur' => 'nullable|string|max:20',
            'jumlah' => 'required|numeric|min:0',
            'tanggal' => 'required|date',
            'metode' => 'required|in:tunai,transfer,qris',
            'kas_box_id' => 'required|exists:cashboxes,id',
            'is_anonymous' => 'boolean',
        ]);

        $validated['no_donasi'] = 'DON-' . now()->format('Ymd') . '-' . strtoupper(Str::random(4));
        $validated['created_by'] = Auth::id();

        Donation::create($validated);
        return back()->with('success', 'Donasi berhasil dicatat.');
    }

    public function mustahiqIndex()
    {
        return Inertia::render('Ziswaf/Mustahiq/Index', [
            'mustahiqs' => Mustahiq::orderBy('nama')->paginate(15),
        ]);
    }

    public function storeDistribution(Request $request)
    {
        $validated = $request->validate([
            'mustahik_id' => 'required|exists:mustahiks,id',
            'jenis_ziswaf_id' => 'required|exists:jenis_ziswafs,id',
            'jumlah' => 'required|numeric|min:0',
            'tanggal' => 'required|date',
            'keterangan' => 'nullable|string',
        ]);
        $validated['created_by'] = Auth::id();

        ZiswafDistribution::create($validated);
        return back()->with('success', 'Penyaluran berhasil dicatat.');
    }
}