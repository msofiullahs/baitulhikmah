<?php

namespace App\Http\Controllers;

use App\Models\InvitationTemplate;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class InvitationTemplateController extends Controller
{
    public function index()
    {
        $templates = InvitationTemplate::orderBy('kategori')->orderBy('nama')->get();

        return Inertia::render('InvitationTemplates/Index', [
            'templates' => $templates,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'kategori' => 'required|string|max:100',
            'deskripsi' => 'nullable|string',
            'warna_tema' => 'nullable|string|max:20',
            'preview_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'file_template' => 'nullable|file|mimes:pdf,doc,docx|max:5120',
            'is_active' => 'boolean',
        ]);

        $validated['is_active'] = $request->has('is_active');

        if ($request->hasFile('preview_image')) {
            $validated['preview_image'] = $request->file('preview_image')->store('templates/invitations/previews', 'public');
        }

        if ($request->hasFile('file_template')) {
            $validated['file_template'] = $request->file('file_template')->store('templates/invitations/files', 'public');
        }

        InvitationTemplate::create($validated);

        return redirect()->route('invitation-templates.index')->with('success', 'Template undangan berhasil ditambahkan.');
    }

    public function update(Request $request, InvitationTemplate $invitationTemplate)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'kategori' => 'required|string|max:100',
            'deskripsi' => 'nullable|string',
            'warna_tema' => 'nullable|string|max:20',
            'preview_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'file_template' => 'nullable|file|mimes:pdf,doc,docx|max:5120',
            'is_active' => 'boolean',
        ]);

        $validated['is_active'] = $request->has('is_active');

        if ($request->hasFile('preview_image')) {
            // Hapus file lama jika ada
            if ($invitationTemplate->preview_image) {
                Storage::disk('public')->delete($invitationTemplate->preview_image);
            }
            $validated['preview_image'] = $request->file('preview_image')->store('templates/invitations/previews', 'public');
        }

        if ($request->hasFile('file_template')) {
            // Hapus file lama jika ada
            if ($invitationTemplate->file_template) {
                Storage::disk('public')->delete($invitationTemplate->file_template);
            }
            $validated['file_template'] = $request->file('file_template')->store('templates/invitations/files', 'public');
        }

        $invitationTemplate->update($validated);

        return redirect()->route('invitation-templates.index')->with('success', 'Template undangan berhasil diperbarui.');
    }

    public function destroy(InvitationTemplate $invitationTemplate)
    {
        // Cek apakah template masih digunakan
        if ($invitationTemplate->invitations()->count() > 0) {
            return back()->with('error', 'Template tidak dapat dihapus karena masih digunakan oleh undangan.');
        }

        // Hapus file terkait
        if ($invitationTemplate->preview_image) {
            Storage::disk('public')->delete($invitationTemplate->preview_image);
        }
        if ($invitationTemplate->file_template) {
            Storage::disk('public')->delete($invitationTemplate->file_template);
        }

        $invitationTemplate->delete();

        return redirect()->route('invitation-templates.index')->with('success', 'Template undangan berhasil dihapus.');
    }

    public function toggleActive(InvitationTemplate $invitationTemplate)
    {
        $invitationTemplate->update([
            'is_active' => !$invitationTemplate->is_active,
        ]);

        return back()->with('success', 'Status template berhasil diubah.');
    }
}
