<?php
namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Jamaah;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ActivityController extends Controller
{
    public function index(Request $request)
    {
        $query = Activity::with('creator')->orderBy('tanggal_mulai', 'desc');

        if ($request->filled('status')) $query->where('status', $request->status);

        return Inertia::render('Activities/Index', [
            'activities' => $query->paginate(15)->withQueryString(),
            'filters' => $request->only(['status']),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'kategori' => 'required|string',
            'tanggal_mulai' => 'required|date',
            'tanggal_selesai' => 'nullable|date|after_or_equal:tanggal_mulai',
            'lokasi' => 'required|string|max:255',
            'penanggung_jawab' => 'nullable|string|max:255',
            'anggaran' => 'nullable|numeric|min:0',
            'poster' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('poster')) {
            $validated['poster'] = $request->file('poster')->store('activities', 'public');
        }
        $validated['created_by'] = Auth::id();

        Activity::create($validated);
        return redirect()->route('activities.index')->with('success', 'Kegiatan berhasil ditambahkan.');
    }

    public function update(Request $request, Activity $activity)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'kategori' => 'required|string',
            'tanggal_mulai' => 'required|date',
            'tanggal_selesai' => 'nullable|date',
            'lokasi' => 'required|string|max:255',
            'status' => 'required|in:draft,dijadwalkan,berlangsung,selesai,dibatalkan',
            'poster' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('poster')) {
            if ($activity->poster) \Storage::disk('public')->delete($activity->poster);
            $validated['poster'] = $request->file('poster')->store('activities', 'public');
        }

        $activity->update($validated);
        return redirect()->route('activities.index')->with('success', 'Kegiatan berhasil diperbarui.');
    }

    public function destroy(Activity $activity)
    {
        $activity->delete();
        return redirect()->route('activities.index')->with('success', 'Kegiatan berhasil dihapus.');
    }
}