<?php

namespace App\Http\Controllers;

use App\Models\Asset;
use App\Models\AssetCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\ErrorCorrectionLevel\ErrorCorrectionLevelHigh;
use Endroid\QrCode\Label\Label;
use Endroid\QrCode\Logo\Logo;
use Endroid\QrCode\RoundBlockSizeMode\RoundBlockSizeModeMargin;
use Endroid\QrCode\Writer\PngWriter;

class AssetController extends Controller
{
    public function index(Request $request)
    {
        $query = Asset::with(['category', 'maintenances'])
            ->orderBy('created_at', 'desc');

        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('kode_aset', 'like', "%{$request->search}%")
                  ->orWhere('nama', 'like', "%{$request->search}%");
            });
        }

        if ($request->filled('kondisi')) {
            $query->where('kondisi', $request->kondisi);
        }

        $assets = $query->paginate(15)->withQueryString();
        $categories = AssetCategory::all(['id', 'nama']);

        $stats = [
            'total_items' => Asset::count(),
            'total_value' => Asset::sum('nilai_sisa'),
            'baik' => Asset::where('kondisi', 'baik')->count(),
            'perlu_perbaikan' => Asset::whereIn('kondisi', ['rusak_ringan', 'rusak_berat'])->count(),
        ];

        return Inertia::render('Assets/Index', [
            'assets' => $assets,
            'categories' => $categories,
            'stats' => $stats,
            'filters' => $request->only(['search', 'kondisi']),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:asset_categories,id',
            'nama' => 'required|string|max:255',
            'merk' => 'nullable|string|max:255',
            'model' => 'nullable|string|max:255',
            'jumlah' => 'required|integer|min:1',
            'tanggal_perolehan' => 'required|date',
            'harga_perolehan' => 'required|numeric|min:0',
            'kondisi' => 'required|in:baik,rusak_ringan,rusak_berat,dihapuskan',
            'lokasi' => 'required|string|max:255',
            'foto' => 'nullable|image|max:2048',
        ]);

        $validated['kode_aset'] = 'AST-' . str_pad(Asset::count() + 1, 4, '0', STR_PAD_LEFT);
        $validated['nilai_sisa'] = $validated['harga_perolehan'];

        if ($request->hasFile('foto')) {
            $validated['foto'] = $request->file('foto')->store('assets', 'public');
        }

        $asset = Asset::create($validated);

        // ✅ Generate QR Code dengan endroid/qr-code
        $this->generateAssetQrCode($asset);

        return redirect()->route('assets.index')->with('success', 'Aset berhasil ditambahkan.');
    }

    /**
     * Generate QR Code untuk aset
     */
    private function generateAssetQrCode(Asset $asset): void
    {
        $qrContent = route('assets.show', $asset); // URL halaman detail aset
        $qrFolder = 'qrcodes';
        $qrFileName = "asset_{$asset->id}.png";
        $qrRelativePath = "{$qrFolder}/{$qrFileName}";

        // Pastikan folder ada
        \Storage::disk('public')->makeDirectory($qrFolder);

        // Build QR Code
        $result = Builder::create()
            ->writer(new PngWriter())
            ->writerOptions([])
            ->data($qrContent)
            ->encoding(new Encoding('UTF-8'))
            ->errorCorrectionLevel(new ErrorCorrectionLevelHigh())
            ->size(300)
            ->margin(10)
            ->roundBlockSizeMode(new RoundBlockSizeModeMargin())
            ->build();

        // Simpan ke storage
        \Storage::disk('public')->put($qrRelativePath, $result->getString());

        // Update path di database
        $asset->update(['qr_code' => $qrRelativePath]);
    }

    public function update(Request $request, Asset $asset)
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:asset_categories,id',
            'nama' => 'required|string|max:255',
            'merk' => 'nullable|string|max:255',
            'model' => 'nullable|string|max:255',
            'jumlah' => 'required|integer|min:1',
            'tanggal_perolehan' => 'required|date',
            'harga_perolehan' => 'required|numeric|min:0',
            'kondisi' => 'required|in:baik,rusak_ringan,rusak_berat,dihapuskan',
            'lokasi' => 'required|string|max:255',
            'foto' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('foto')) {
            if ($asset->foto) \Storage::disk('public')->delete($asset->foto);
            $validated['foto'] = $request->file('foto')->store('assets', 'public');
        }

        $asset->update($validated);

        return redirect()->route('assets.index')->with('success', 'Aset berhasil diperbarui.');
    }

    public function destroy(Asset $asset)
    {
        $asset->delete();
        return redirect()->route('assets.index')->with('success', 'Aset berhasil dihapus.');
    }
}