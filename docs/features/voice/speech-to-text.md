# Speech to Text

Konversi pesan suara (voice note) menjadi teks secara otomatis dengan AI.

|                       Info                        |      |
| :-----------------------------------------------: | :--: |
| <div class="label license nitro">Only Nitro</div> |  ❌  |
|                Menggunakan Prefix                 |  ✅  |
|                 Menggunakan limit                 |  ✅  |
|                    Hanya Owner                    |  ❌  |
|                   Hanya Premium                   |  ❌  |
|                    Hanya Group                    |  ❌  |
|                 Hanya Admin Group                 |  ❌  |
|                Hanya Private Chat                 |  ❌  |
|                       Limit                       |  15  |
|                     Cooldown                      | 5000 |
|                       Level                       |  0   |

## Command

### #stt

Konversi voice note menjadi teks.

Usage: Reply voice note dengan caption `#stt`

### #transcribe

Alias untuk speech to text dengan output lebih detail.

Usage: Reply voice note dengan caption `#transcribe`

### Auto Speech-to-Text

Fitur otomatis yang mengkonversi semua voice note tanpa perlu command.

Aktifkan dengan: `#stt auto on`
Matikan dengan: `#stt auto off`

Alias:
- #voicetotext
- #speech2text
- #v2t

## Features

### 🎯 **High Accuracy**
- Akurasi hingga 95% untuk bahasa Indonesia
- Support 50+ bahasa internasional
- Pengenalan aksen dan dialek lokal
- Advanced noise reduction

### 🌍 **Multi-Language Support**
- **Bahasa Indonesia**: Termasuk bahasa daerah
- **English**: US, UK, Australian accent
- **Mandarin**: Simplified & Traditional
- **Japanese**: Hiragana, Katakana, Kanji
- **Arabic**: Modern Standard Arabic
- **Dan 45+ bahasa lainnya**

### ⚙️ **Smart Processing**
- Auto-punctuation insertion
- Speaker identification (multiple speakers)
- Timestamp generation
- Confidence scoring

### 📊 **Advanced Options**
```
#stt --lang [id|en|zh|ja|ar] 
#stt --format [text|srt|vtt]
#stt --speaker [single|multiple]
#stt --timestamps [on|off]
```

## Supported Formats

### 📱 **Input Audio**
- **Voice Notes**: WhatsApp native format
- **Audio Files**: MP3, WAV, AAC, M4A
- **Video Audio**: Extract audio from MP4, AVI
- **Duration**: Maksimal 10 menit per file

### 📄 **Output Formats**
- **Plain Text**: Teks sederhana
- **SRT Subtitles**: Untuk video editing
- **VTT Format**: Web-compatible subtitles
- **JSON**: Structured data dengan timestamps

## Advanced Features

### 👥 **Multi-Speaker Recognition**
```
#stt --speaker multiple
```
Output:
```
[Speaker 1]: Halo, apa kabar?
[Speaker 2]: Baik, terima kasih. Bagaimana dengan Anda?
[Speaker 1]: Alhamdulillah, sehat selalu.
```

### ⏰ **Timestamped Transcription**
```
#stt --timestamps on
```
Output:
```
[00:01] Selamat pagi semua
[00:03] Hari ini kita akan membahas tentang AI
[00:07] Mari kita mulai dengan konsep dasar
```

### 🔍 **Keyword Detection**
Otomatis deteksi dan highlight keyword penting:
- Nama orang dan tempat
- Angka dan tanggal
- Action items dan deadline
- Contact information

### 📈 **Confidence Scoring**
Setiap kata dilengkapi confidence score:
```
"Halo" (95%), "apa" (98%), "kabar" (92%)
```

## Language Detection

### 🤖 **Auto-Detection**
Bot otomatis mendeteksi bahasa yang digunakan:
```
#stt --lang auto
```

### 🌏 **Language Codes**
Gunakan ISO language codes:
- `id`: Bahasa Indonesia
- `en`: English
- `zh`: Chinese (Mandarin)
- `ja`: Japanese
- `ar`: Arabic
- `es`: Spanish
- `fr`: French
- `de`: German
- `pt`: Portuguese
- `ru`: Russian

## Quality Optimization

### 🔧 **Audio Enhancement**
- Automatic gain control
- Noise suppression
- Echo cancellation
- Bandwidth extension

### ✨ **Text Post-Processing**
- Grammar correction
- Capitalization fix
- Number normalization
- Abbreviation expansion

## Integration Features

### 📋 **Auto-Summary**
```
#stt --summary on
```
Menghasilkan ringkasan otomatis dari transcription.

### 📝 **Action Items Extraction**
```
#stt --actions on
```
Ekstrak task dan action items dari percakapan.

### 🏷️ **Keyword Tagging**
```
#stt --tags on
```
Auto-generate tags berdasarkan konten.

## Failed Command

Penyebab error umum:
- **Audio too long**: File lebih dari 10 menit
- **Poor audio quality**: Suara terlalu pelan/noise
- **Unsupported format**: Format audio tidak didukung
- **Language not detected**: Bahasa tidak dapat diidentifikasi
- **Rate limit**: Terlalu banyak request

## Pricing & Limits

### Free Plan
- 50 menit transcription per bulan
- Basic accuracy
- Text output only
- Single language (Indonesian)

### Premium Plan
- 500 menit transcription per bulan
- High accuracy
- Multiple output formats
- 10+ languages
- Speaker identification

### Nitro Plan
- Unlimited transcription
- Maximum accuracy (AI-enhanced)
- All output formats
- 50+ languages
- Advanced features (summary, actions)
- Batch processing

## Tips & Best Practices

### 🎙️ **Recording Quality**
- Gunakan lingkungan yang tenang
- Berbicara dengan jelas dan tidak terlalu cepat
- Hindari background music yang keras
- Posisikan microphone dengan baik

### 📱 **WhatsApp Voice Notes**
- Hold & record untuk quality terbaik
- Avoid recording sambil bergerak
- Test audio volume sebelum send
- Maksimal 10 menit per voice note

### 🌍 **Multi-Language**
- Consistent language per audio file
- Avoid mixing languages dalam satu kalimat
- Specify language jika detection gagal
- Use proper pronunciation

## Note

:::tip Akurasi Terbaik
- Record di tempat yang sunyi
- Berbicara dengan artikulasi yang jelas
- Gunakan headset/microphone berkualitas
- Hindari background noise
:::

:::warning Keterbatasan
- Akurasi dapat menurun pada audio berkualitas rendah
- Bahasa campuran (code-switching) mungkin kurang akurat  
- Slang dan bahasa gaul kadang tidak dikenali
- Audio dengan music background sulit diproses
:::

:::info Privacy
- Audio file di-delete otomatis setelah processing
- Transcription disimpan encrypted
- No human review untuk private conversations
- GDPR compliant data handling
:::