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
        $category = $request->input('ziswaf_category_id', $request->input('jenis_ziswaf_id'));
        if ($category) {
            $query->where('ziswaf_category_id', $category);
        }
        if ($request->filled('search')) {
            $query->where('nama_donatur', 'like', '%'.$request->input('search').'%');
        }

        return Inertia::render('Ziswaf/Donations/Index', [
            'donations' => $query->paginate(15)->withQueryString(),
            'categories' => ZiswafCategory::all(),
            'filters' => ['search' => $request->input('search'), 'ziswaf_category_id' => $category],
            'cashboxes' => Cashbox::where('is_active', true)->get(),
        ]);
    }

    public function storeDonation(Request $request)
    {
        Donation::create($this->donationData($request) + [
            'no_donasi' => 'DON-'.now()->format('Ymd').'-'.strtoupper(Str::random(12)),
            'created_by' => Auth::id(),
        ]);

        return back()->with('success', 'Donasi berhasil dicatat.');
    }

    public function updateDonation(Request $request, Donation $donation)
    {
        $donation->update($this->donationData($request));

        return back()->with('success', 'Donasi berhasil diperbarui.');
    }

    public function destroyDonation(Donation $donation)
    {
        $donation->delete();

        return back()->with('success', 'Donasi berhasil dihapus.');
    }

    private function donationData(Request $request): array
    {
        $request->mergeIfMissing(['ziswaf_category_id' => $request->input('jenis_ziswaf_id')]);

        return $request->validate([
            'ziswaf_category_id' => 'required|exists:ziswaf_categories,id',
            'nama_donatur' => 'nullable|string|max:255',
            'no_hp_donatur' => 'nullable|string|max:20',
            'jumlah' => 'required|numeric|min:0|max:9999999999999.99',
            'tanggal' => 'required|date',
            'metode' => 'required|in:tunai,transfer,qris',
            'cashbox_id' => 'required|exists:cashboxes,id',
            'is_anonymous' => 'boolean',
            'catatan' => 'nullable|string|max:10000',
        ]);
    }

    public function mustahiqIndex(Request $request)
    {
        $query = Mustahiq::orderBy('nama');
        if ($request->filled('search')) {
            $query->where('nama', 'like', '%'.$request->input('search').'%');
        }
        if ($request->filled('kategori')) {
            $query->where('kategori', $request->input('kategori'));
        }

        return Inertia::render('Ziswaf/Mustahiq/Index', [
            'mustahiqs' => $query->paginate(15)->withQueryString(),
            'counts' => (object) Mustahiq::selectRaw('kategori, COUNT(*) as total')->groupBy('kategori')->pluck('total', 'kategori')->all(),
            'filters' => $request->only('search', 'kategori'),
        ]);
    }

    public function storeMustahiq(Request $request)
    {
        Mustahiq::create($this->mustahiqData($request));

        return back()->with('success', 'Mustahik berhasil ditambahkan.');
    }

    public function updateMustahiq(Request $request, Mustahiq $mustahiq)
    {
        $mustahiq->update($this->mustahiqData($request));

        return back()->with('success', 'Mustahik berhasil diperbarui.');
    }

    public function destroyMustahiq(Mustahiq $mustahiq)
    {
        if ($mustahiq->distributions()->exists()) {
            return back()->with('error', 'Mustahik dengan riwayat penyaluran tidak dapat dihapus.');
        }

        $mustahiq->delete();

        return back()->with('success', 'Mustahik berhasil dihapus.');
    }

    private function mustahiqData(Request $request): array
    {
        return $request->validate([
            'nama' => 'required|string|max:255',
            'kategori' => 'required|in:fakir,miskin,amil,mualaf,riqab,gharimin,fisabilillah,ibnu_sabil',
            'alamat' => 'required|string|max:10000',
            'no_hp' => 'nullable|string|max:20',
            'catatan' => 'nullable|string|max:10000',
            'status' => 'required|in:aktif,tidak_aktif',
        ]);
    }

    public function storeDistribution(Request $request)
    {
        $request->mergeIfMissing([
            'mustahiq_id' => $request->input('mustahik_id'),
            'ziswaf_category_id' => $request->input('jenis_ziswaf_id'),
        ]);
        $validated = $request->validate([
            'mustahiq_id' => 'required|exists:mustahiqs,id',
            'ziswaf_category_id' => 'required|exists:ziswaf_categories,id',
            'jumlah' => 'required|numeric|min:0',
            'tanggal' => 'required|date',
            'keterangan' => 'nullable|string',
        ]);
        $validated['created_by'] = Auth::id();

        ZiswafDistribution::create($validated);
        return back()->with('success', 'Penyaluran berhasil dicatat.');
    }
}