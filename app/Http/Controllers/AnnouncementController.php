<?php
namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AnnouncementController extends Controller
{
    public function index()
    {
        return Inertia::render('Announcements/Index', [
            'announcements' => Announcement::with('creator')->orderBy('created_at', 'desc')->paginate(15),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'isi' => 'required|string',
            'tipe' => 'required|in:umum,urgent,info_sholat',
            'is_running_text' => 'boolean',
            'send_whatsapp' => 'boolean',
            'gambar' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('gambar')) {
            $validated['gambar'] = $request->file('gambar')->store('announcements', 'public');
        }
        $validated['created_by'] = Auth::id();
        $validated['status'] = 'published';
        $validated['published_at'] = now();

        Announcement::create($validated);
        return back()->with('success', 'Pengumuman berhasil dipublikasikan.');
    }

    public function destroy(Announcement $announcement)
    {
        $announcement->delete();
        return back()->with('success', 'Pengumuman berhasil dihapus.');
    }
}