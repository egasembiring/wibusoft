# Text to Speech

Konversi teks menjadi suara natural dengan berbagai pilihan voice dan bahasa.

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
|                       Limit                       |  10  |
|                     Cooldown                      | 5000 |
|                       Level                       |  0   |

## Command

### #tts

Konversi teks menjadi voice note.

Format: `#tts [teks yang ingin diubah menjadi suara]`

Contoh penggunaan:
- `#tts Halo, selamat datang di Wibusoft!`
- `#tts Terima kasih sudah menggunakan bot kami`

### Advanced TTS

Format lengkap dengan parameter:
```
#tts [text] --voice [nama_voice] --speed [0.5-2.0] --pitch [0.5-2.0]
```

Contoh:
```
#tts Halo semua --voice sari --speed 1.2 --pitch 1.1
```

Alias:
- #voice
- #speak
- #say
- #texttovoice

## Available Voices

### 🇮🇩 **Indonesian Voices**

#### Female Voices
- **Sari**: Natural, profesional, cocok untuk bisnis
- **Dewi**: Lembut, ramah, cocok untuk greeting
- **Maya**: Energik, ceria, cocok untuk announcement
- **Indira**: Elegant, sophisticated, cocok untuk premium content

#### Male Voices  
- **Budi**: Deep, authoritative, cocok untuk narasi
- **Andi**: Friendly, casual, cocok untuk daily conversation
- **Rahman**: Mature, wise, cocok untuk educational content
- **Fajar**: Young, dynamic, cocok untuk marketing

### 🇺🇸 **English Voices**

#### Female Voices
- **Emma**: British accent, professional
- **Aria**: American accent, friendly
- **Jenny**: Australian accent, casual
- **Olivia**: Canadian accent, warm

#### Male Voices
- **Brian**: British accent, authoritative  
- **Davis**: American accent, confident
- **Russell**: Australian accent, relaxed
- **Matthew**: Canadian accent, trustworthy

### 🌏 **Multi-Language Voices**
- **Mandarin**: Li Wei (M), Xiao Yu (F)
- **Japanese**: Hiroshi (M), Akiko (F)  
- **Korean**: Min Ho (M), So Young (F)
- **Spanish**: Carlos (M), Maria (F)
- **French**: Pierre (M), Camille (F)
- **German**: Hans (M), Greta (F)

## Voice Parameters

### 🎵 **Speed Control**
```
--speed [0.5-2.0]
```
- `0.5`: Very slow (untuk pembelajaran)
- `1.0`: Normal speed (default)
- `1.5`: Fast (untuk summary)
- `2.0`: Very fast (untuk quick info)

### 🎼 **Pitch Control**
```
--pitch [0.5-2.0]
```
- `0.5`: Low pitch (deeper voice)
- `1.0`: Normal pitch (default)
- `1.5`: High pitch (brighter voice)
- `2.0`: Very high pitch (chipmunk effect)

### 🔊 **Volume Control**
```
--volume [0.1-1.0]
```
- `0.1`: Very quiet
- `0.5`: Medium volume
- `1.0`: Full volume (default)

### ⏱️ **Pause Control**
```
--pause [short|medium|long]
```
- `short`: 0.5 detik pause antar kalimat
- `medium`: 1 detik pause (default)
- `long`: 2 detik pause

## Advanced Features

### 📝 **SSML Support**
Speech Synthesis Markup Language untuk kontrol detail:

```xml
#tts-ssml
<speak>
  <p>Selamat datang di <emphasis>Wibusoft</emphasis>!</p>
  <break time="1s"/>
  <p>Kami senang <prosody rate="slow">melayani Anda</prosody>.</p>
</speak>
```

### 🎭 **Voice Emotions**
```
#tts [text] --emotion [happy|sad|excited|angry|calm|nervous]
```

Contoh:
```
#tts Selamat ulang tahun! --emotion excited
#tts Mohon maaf atas ketidaknyamanan ini --emotion sad
```

### 🎪 **Voice Effects**
```
#tts [text] --effect [robot|echo|whisper|radio|telephone]
```

### 🔄 **Batch TTS**
Convert multiple teks sekaligus:
```
#tts-batch
Teks 1: Halo semua
Teks 2: Selamat datang  
Teks 3: Terima kasih
```

## Language Auto-Detection

Bot otomatis mendeteksi bahasa dan memilih voice yang sesuai:

```
#tts Hello everyone --auto-voice
#tts Halo semua --auto-voice  
#tts Konnichiwa minna --auto-voice
```

## Custom Voice Profiles

### 👤 **Personal Voice**
Buat voice profile personal:
```
#tts-profile create [profile_name]
#tts-profile set-voice [profile_name] [voice_name]
#tts-profile set-speed [profile_name] [speed]
#tts-profile use [profile_name] [text]
```

### 🏢 **Brand Voice**
Untuk bisnis dan branding:
```
#brand-voice setup
- Voice: Sari (Professional Indonesian Female)  
- Speed: 1.1 (Slightly faster)
- Pitch: 1.0 (Normal)
- Style: Professional, friendly
```

## Audio Quality Options

### 📞 **Phone Quality** (8kHz)
```
#tts [text] --quality phone
```
- File size kecil
- Cocok untuk notifikasi
- Bandwidth rendah

### 🎵 **Music Quality** (22kHz) 
```
#tts [text] --quality music
```
- Quality standard
- Balance antara size dan quality
- Default setting

### 🎬 **Studio Quality** (44kHz)
```
#tts [text] --quality studio
```
- Quality terbaik
- File size besar
- Untuk content premium

## Smart Features

### 🤖 **Context-Aware TTS**
Bot memahami konteks untuk intonasi yang tepat:
- **Question**: Intonasi naik di akhir
- **Exclamation**: Lebih ekspresif
- **Statement**: Intonasi normal
- **List**: Pause yang tepat antar item

### 📖 **Reading Mode**
```
#tts-read [reply to long text]
```
Optimized untuk membaca teks panjang:
- Auto paragraf detection
- Proper punctuation handling
- Smart pause insertion

### 🎯 **Pronunciation Dictionary**
```
#pronunciation add [word] [pronunciation]
#pronunciation list
#pronunciation remove [word]
```

## Integration Features

### 📱 **Auto-TTS**
```
#auto-tts on
```
Otomatis convert semua teks menjadi voice note.

### 🔄 **Reply-to-Speech**
```
#reply-tts on  
```
Otomatis buat voice reply untuk setiap pesan.

### 📢 **Announcement Mode**
```
#announce [text]
```
Format khusus untuk pengumuman dengan intro music.

## Failed Command

Penyebab error umum:
- **Text too long**: Maksimal 1000 karakter per request
- **Invalid voice**: Nama voice tidak ditemukan
- **Rate limit**: Terlalu banyak request
- **Language not supported**: Bahasa belum didukung
- **SSML syntax error**: Format SSML tidak valid

## Pricing & Limits

### Free Plan
- 30 voice generations per hari
- Basic voices (Sari, Budi)
- Standard quality only
- Text limit: 200 karakter

### Premium Plan  
- 200 voice generations per hari
- All voices available
- Music quality
- Text limit: 500 karakter
- Basic voice effects

### Nitro Plan
- Unlimited generations
- All premium voices
- Studio quality
- Text limit: 1000 karakter  
- All effects dan emotions
- SSML support
- Custom voice profiles

## Use Cases

### 🏢 **Business Applications**
- Customer service announcements
- Product descriptions
- Training materials
- Marketing content

### 📚 **Educational Content**
- Language learning
- Audio books
- Lecture recordings  
- Study materials

### 🎮 **Entertainment**
- Character voices
- Story telling
- Game narration
- Fun conversations

### ♿ **Accessibility**
- Text to speech untuk visual impairment
- Voice assistance
- Reading support
- Communication aid

## Note

:::tip Quality Tips
- Gunakan tanda baca yang tepat untuk intonasi natural
- Hindari singkatan dan acronym yang ambigu
- Test berbagai voice untuk find yang paling cocok
- Adjust speed sesuai target audience
:::

:::warning Limitations
- Pronunciation mungkin tidak sempurna untuk nama proper
- Voice generation membutuhkan waktu 10-30 detik
- File audio maksimal 10 MB (sekitar 5 menit audio)
- Beberapa karakter khusus mungkin tidak ter-pronounce dengan benar
:::

:::info Best Practices
- Preview voice dengan teks pendek dulu
- Save voice profiles untuk konsistensi
- Use emotion dan effects secara moderate
- Consider target audience saat pilih voice
:::