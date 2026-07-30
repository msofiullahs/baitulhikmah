<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{ $invitation->no_undangan }} - {{ $receiver->nama_penerima }}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Arial', sans-serif; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        .header {
            background: linear-gradient(135deg, {{ $template->warna_tema ?? '#667eea' }} 0%, {{ darkenColor($template->warna_tema ?? '#667eea', 20) }} 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header img {
            width: 80px;
            height: 80px;
            object-fit: contain;
            margin-bottom: 15px;
        }
        .header h1 {
            font-size: 24px;
            margin-bottom: 5px;
        }
        .header p {
            font-size: 14px;
            opacity: 0.9;
        }
        .content {
            padding: 30px;
        }
        .bismillah {
            text-align: center;
            font-size: 20px;
            margin-bottom: 20px;
            color: #333;
        }
        .invitation-title {
            text-align: center;
            font-size: 22px;
            font-weight: bold;
            color: {{ $template->warna_tema ?? '#667eea' }};
            margin-bottom: 10px;
        }
        .invitation-subtitle {
            text-align: center;
            font-size: 16px;
            color: #666;
            margin-bottom: 25px;
        }
        .details {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
        }
        .detail-row {
            display: flex;
            margin-bottom: 12px;
            align-items: flex-start;
        }
        .detail-row:last-child {
            margin-bottom: 0;
        }
        .detail-icon {
            width: 25px;
            font-size: 18px;
            margin-right: 10px;
        }
        .detail-label {
            font-weight: bold;
            min-width: 100px;
            color: #555;
        }
        .detail-value {
            color: #333;
            flex: 1;
        }
        .message {
            text-align: center;
            font-style: italic;
            color: #666;
            margin: 20px 0;
            line-height: 1.6;
        }
        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-top: 2px solid {{ $template->warna_tema ?? '#667eea' }};
        }
        .qr-code {
            width: 100px;
            height: 100px;
            background: #ddd;
            margin: 0 auto 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: #666;
        }
        .note {
            font-size: 12px;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            @if($masjid->logo)
                <img src="{{ public_path('storage/' . $masjid->logo) }}" alt="Logo Masjid">
            @endif
            <h1>{{ $masjid->nama }}</h1>
            <p>{{ $masjid->alamat }}</p>
        </div>
        
        <div class="content">
            <div class="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
            
            <div class="invitation-title">{{ $invitation->judul_acara }}</div>
            <div class="invitation-subtitle">{{ $invitation->deskripsi }}</div>
            
            <div class="details">
                <div class="detail-row">
                    <span class="detail-icon">📅</span>
                    <span class="detail-label">Tanggal</span>
                    <span class="detail-value">{{ $invitation->tanggal_acara->format('d F Y, H:i') }} WIB</span>
                </div>
                <div class="detail-row">
                    <span class="detail-icon">📍</span>
                    <span class="detail-label">Lokasi</span>
                    <span class="detail-value">{{ $invitation->lokasi }}</span>
                </div>
                @if($invitation->pembicara)
                <div class="detail-row">
                    <span class="detail-icon">🎤</span>
                    <span class="detail-label">Pembicara</span>
                    <span class="detail-value">{{ $invitation->pembicara }}</span>
                </div>
                @endif
                @if($invitation->dress_code)
                <div class="detail-row">
                    <span class="detail-icon">👔</span>
                    <span class="detail-label">Dress Code</span>
                    <span class="detail-value">{{ $invitation->dress_code }}</span>
                </div>
                @endif
                @if($invitation->kontak)
                <div class="detail-row">
                    <span class="detail-icon">📞</span>
                    <span class="detail-label">Kontak</span>
                    <span class="detail-value">{{ $invitation->kontak }}</span>
                </div>
                @endif
            </div>
            
            <div class="message">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i<br>
                <strong>{{ $receiver->nama_penerima }}</strong><br>
                berkenan hadir untuk memberikan doa restu.
            </div>
        </div>
        
        <div class="footer">
            <div class="qr-code">QR Code</div>
            <p class="note">Scan QR code untuk konfirmasi kehadiran</p>
            <p class="note" style="margin-top: 10px;">{{ $invitation->no_undangan }}</p>
        </div>
    </div>
</body>
</html>

@php
function darkenColor($hex, $percent) {
    $hex = str_replace('#', '', $hex);
    $r = hexdec(substr($hex, 0, 2));
    $g = hexdec(substr($hex, 2, 2));
    $b = hexdec(substr($hex, 4, 2));
    
    $r = max(0, $r - ($r * $percent / 100));
    $g = max(0, $g - ($g * $percent / 100));
    $b = max(0, $b - ($b * $percent / 100));
    
    return '#' . str_pad(dechex($r), 2, '0', STR_PAD_LEFT) . str_pad(dechex($g), 2, '0', STR_PAD_LEFT) . str_pad(dechex($b), 2, '0', STR_PAD_LEFT);
}
@endphp
