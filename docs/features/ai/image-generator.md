# AI Image Generator

Generate gambar AI menggunakan DALL-E, Midjourney, dan Stable Diffusion.

|                       Info                        |      |
| :-----------------------------------------------: | :--: |
| <div class="label license nitro">Only Nitro</div> |  ✅  |
|                Menggunakan Prefix                 |  ✅  |
|                 Menggunakan limit                 |  ✅  |
|                    Hanya Owner                    |  ❌  |
|                   Hanya Premium                   |  ✅  |
|                    Hanya Group                    |  ❌  |
|                 Hanya Admin Group                 |  ❌  |
|                Hanya Private Chat                 |  ❌  |
|                       Limit                       |  5   |
|                     Cooldown                      | 10000|
|                       Level                       |  0   |

## Command

### #img

Generate gambar berdasarkan deskripsi text.

Format: `#img [deskripsi gambar]`

Contoh penggunaan:
- `#img kucing lucu dengan topi merah`
- `#img pemandangan gunung dengan sunset`
- `#img robot futuristik di kota cyber`

### #dalle

Menggunakan DALL-E 3 untuk hasil terbaik.

Format: `#dalle [deskripsi gambar]`

### #midjourney

Style Midjourney untuk hasil artistic.

Format: `#midjourney [deskripsi gambar] --style [realistic|anime|abstract]`

Alias:
- #generate
- #create
- #art

## Features

### 🎨 **Multiple AI Models**
- **DALL-E 3**: Photorealistic dan detail tinggi
- **Midjourney**: Artistic dan stylized
- **Stable Diffusion**: Customizable dan flexible

### 🖼️ **Image Styles**
- **Photorealistic**: Foto nyata yang detail
- **Anime/Manga**: Style kartun Jepang
- **Digital Art**: Seni digital modern
- **Oil Painting**: Style lukisan klasik
- **Watercolor**: Efek cat air
- **Cyberpunk**: Futuristic sci-fi style

### ⚙️ **Advanced Parameters**
```
#img [prompt] --size [512x512|1024x1024|1024x1792]
#img [prompt] --style [realistic|artistic|anime]
#img [prompt] --quality [standard|hd]
#img [prompt] --model [dalle|midjourney|sd]
```

### 🔧 **Customization Options**
- **Aspect Ratios**: Square, portrait, landscape
- **Art Styles**: 50+ predefined styles
- **Quality Settings**: Standard hingga 4K
- **Batch Generation**: Generate multiple variations

## Advanced Commands

### #img-upscale
Tingkatkan resolusi gambar hasil generate:
```
#img-upscale [reply to image] --scale [2x|4x]
```

### #img-variant
Buat variasi dari gambar existing:
```
#img-variant [reply to image] --count [1-4]
```

### #img-edit
Edit gambar dengan AI:
```
#img-edit [reply to image] [instruction]
```

### #img-style
Ubah style gambar:
```
#img-style [reply to image] [new_style]
```

## Prompt Engineering Tips

### 🎯 **Effective Prompts**
- Gunakan deskripsi yang detail dan spesifik
- Sertakan style, mood, dan lighting
- Sebutkan art medium (photo, painting, digital art)
- Tambahkan artist reference jika perlu

### ✅ **Good Examples**
```
"A majestic golden dragon flying over ancient castle, 
dramatic sunset lighting, digital art style, 
highly detailed, fantasy artwork"

"Portrait of elegant woman in Victorian dress, 
oil painting style, soft lighting, 
in the style of John Singer Sargent"
```

### ❌ **Avoid**
- Prompt terlalu pendek atau ambigu
- Konten yang melanggar guidelines
- Copyright protected characters
- Realistic person faces

## Content Guidelines

### ✅ **Allowed Content**
- Landscapes dan nature scenes
- Abstract dan artistic concepts
- Fantasy creatures dan scenes
- Architecture dan buildings
- Objects dan still life
- Stylized characters (non-realistic)

### ❌ **Prohibited Content**
- Realistic human faces
- Violence atau gore
- Adult/NSFW content
- Copyright protected material
- Illegal activities
- Hate symbols

## Pricing & Limits

### Premium Plan
- 20 generations per hari
- Standard quality (512x512)
- Basic models (DALL-E 2, SD)

### Nitro Plan
- 100 generations per hari
- HD quality (1024x1024)
- All models (DALL-E 3, Midjourney)
- Advanced parameters
- Batch generation

### Enterprise
- Unlimited generations
- 4K quality
- Custom model training
- API access
- Priority processing

## Failed Command

Penyebab error umum:
- **Content violation**: Prompt melanggar guidelines
- **Rate limit**: Terlalu banyak request
- **Model unavailable**: AI service maintenance
- **Prompt too long**: Maksimal 1000 karakter
- **Queue full**: Server overloaded

## Note

:::tip Best Practices
- Eksperimen dengan different styles dan parameters
- Save prompt yang memberikan hasil bagus
- Gunakan negative prompts untuk menghindari element tertentu
- Combine multiple art styles untuk hasil unik
:::

:::warning Quality vs Speed
- HD quality membutuhkan waktu lebih lama (2-5 menit)
- Standard quality lebih cepat (30-60 detik)
- Batch generation menggunakan lebih banyak credit
:::

:::danger Content Policy
- Semua gambar generated disimpan untuk review
- Violation berulang dapat menyebabkan suspension
- Report inappropriate content untuk membantu improve system
:::