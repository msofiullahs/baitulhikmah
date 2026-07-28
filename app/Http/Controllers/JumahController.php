<?php
namespace App\Http\Controllers;

use App\Models\Khatib;
use App\Models\JumahSchedule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JumahController extends Controller
{
    public function index()
    {
        return Inertia::render('Jumah/Index', [
            'schedules' => JumahSchedule::with(['khatib', 'imam', 'muadzin'])
                ->orderBy('tanggal_jumat', 'desc')->paginate(15),
            'khatibs' => Khatib::where('is_active', true)->get(['id', 'nama']),
        ]);
    }

    public function storeKhatib(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'gelar' => 'nullable|string|max:50',
            'no_hp' => 'nullable|string|max:20',
            'spesialisasi' => 'nullable|string',
            'tipe' => 'required|in:internal,tamu',
        ]);
        Khatib::create($validated);
        return back()->with('success', 'Data khatib berhasil ditambahkan.');
    }

    public function storeSchedule(Request $request)
    {
        $validated = $request->validate([
            'tanggal_jumat' => 'required|date|unique:jumah_schedules,tanggal_jumat',
            'khatib_id' => 'required|exists:khatibs,id',
            'imam_id' => 'nullable|exists:khatibs,id',
            'muadzin_id' => 'nullable|exists:khatibs,id',
            'tema' => 'nullable|string|max:255',
        ]);
        JumahSchedule::create($validated);
        return back()->with('success', 'Jadwal Jumat berhasil ditambahkan.');
    }

    public function destroySchedule(JumahSchedule $schedule)
    {
        $schedule->delete();
        return back()->with('success', 'Jadwal berhasil dihapus.');
    }
}