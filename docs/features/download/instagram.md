# Instagram Downloader

Advanced Instagram downloader dengan dukungan semua format media dan fitur batch download.

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
|                       Limit                       |  5   |
|                     Cooldown                      | 3000 |
|                       Level                       |  0   |

## Command

### #instagram

Download konten Instagram dengan berbagai format dan kualitas.

Format: `#instagram [URL] [options]`

Contoh penggunaan:
- `#instagram https://instagram.com/p/xxxx`
- `#instagram https://instagram.com/reel/xxxx --quality hd`
- `#instagram https://instagram.com/stories/xxxx --format mp4`

### Advanced Options

#### Quality Settings
```
#instagram [URL] --quality [auto|sd|hd|uhd]
```
- **auto**: Otomatis pilih quality terbaik
- **sd**: Standard Definition (480p)
- **hd**: High Definition (720p-1080p) 
- **uhd**: Ultra HD (4K jika tersedia)

#### Format Selection
```
#instagram [URL] --format [original|mp4|jpg|webp]
```
- **original**: Format asli dari Instagram
- **mp4**: Convert video ke MP4
- **jpg**: Convert image ke JPG
- **webp**: Format WebP (file size kecil)

#### Audio Options
```
#instagram [URL] --audio [keep|remove|extract]
```
- **keep**: Pertahankan audio (default)
- **remove**: Hapus audio dari video
- **extract**: Extract audio saja (MP3)

Alias:
- #igdl
- #ig  
- #instadl
- #ighighlight
- #igpost
- #igstory
- #igreels
- #igtv

## Supported Content Types

### 📸 **Posts & Photos**

#### Single Photo Posts
```
URL: https://instagram.com/p/xxxx
Supported: ✅ JPG, PNG, WebP
Max Resolution: Original quality
Features: Metadata extraction, caption
```

#### Multi-Photo Posts (Carousel)
```
URL: https://instagram.com/p/xxxx (carousel)
Supported: ✅ All images in post  
Download: Individual files atau ZIP
Naming: Sequential (img_1.jpg, img_2.jpg)
```

#### Photo with Text Overlay
```
Supported: ✅ Original image quality
Features: OCR text extraction (premium)
Formats: JPG, PNG, WebP
```

### 🎥 **Videos & Reels**

#### Regular Video Posts
```
URL: https://instagram.com/p/xxxx
Supported: ✅ MP4, MOV
Quality: Up to 1080p
Audio: AAC stereo
Duration: No limit
```

#### Instagram Reels
```
URL: https://instagram.com/reel/xxxx  
Supported: ✅ HD video quality
Features: Audio extraction, thumbnail
Formats: MP4, WebM
Special: Remove watermark (premium)
```

#### IGTV Videos
```
URL: https://instagram.com/tv/xxxx
Supported: ✅ Long-form videos
Quality: Original resolution
Features: Chapter detection
Max Duration: 60 minutes
```

### 📱 **Stories & Highlights**

#### Stories
```
URL: https://instagram.com/stories/username/xxxx
Supported: ✅ 24h stories only
Quality: Original (1080x1920)
Features: Auto-download before expire
Batch: Download all stories from user
```

#### Highlights
```
URL: https://instagram.com/s/xxxx  
Supported: ✅ Permanent highlights
Features: Download entire highlight collection
Organization: Grouped by highlight name
Formats: Video (MP4), Photos (JPG)
```

### 🎵 **Audio Content**

#### Reels Audio
```
Extract audio from Reels: ✅
Format: MP3, AAC
Quality: 128kbps - 320kbps
Features: Audio identification, metadata
```

#### Story Audio
```
Voice messages in stories: ✅
Format: AAC, MP3
Duration: Up to 15 seconds
Features: Auto-transcription (premium)
```

## Advanced Features

### 🎯 **Batch Download**

#### Multiple URLs
```
#instagram batch
URL 1: https://instagram.com/p/xxxx
URL 2: https://instagram.com/reel/xxxx  
URL 3: https://instagram.com/stories/xxxx
```
Bot akan download semua URL dan kirim sebagai ZIP file.

#### Profile Download
```
#instagram profile @username --limit 10 --type [posts|reels|stories]
```
Download recent posts dari profile Instagram.

#### Hashtag Download  
```
#instagram hashtag #nature --limit 5 --quality hd
```
Download posts terbaru dari hashtag tertentu.

### 📊 **Metadata Extraction**

#### Post Information
```yaml
post_metadata:
  caption: "Full post caption"
  hashtags: ["#nature", "#photography"]  
  mentions: ["@photographer"]
  location: "Bali, Indonesia"
  posted_at: "2024-01-15T10:30:00Z"
  likes_count: 1234
  comments_count: 56
  author: "@username"
```

#### Media Information
```yaml
media_info:
  resolution: "1080x1080"
  file_size: "2.5 MB"
  duration: "00:00:30" # for videos
  format: "MP4"
  fps: 30 # for videos
  bitrate: "2000 kbps"
```

### 🔍 **Smart Features**

#### Auto-Detection
- Otomatis deteksi content type
- Smart quality selection
- Format optimization untuk WhatsApp
- Duplicate detection

#### Content Analysis
```
#instagram analyze [URL]
```
Analisis konten tanpa download:
- Content type dan specs
- Estimated download time
- File size prediction
- Quality options available

#### Preview Mode
```
#instagram preview [URL]
```
Kirim thumbnail/preview sebelum download full content.

## Premium Features

### 🌟 **Nitro Exclusive**

#### No Watermark
- Remove Instagram watermarks dari Reels
- Clean downloads tanpa branding
- Professional quality output

#### Bulk Operations
```
#instagram bulk-download
- Import dari CSV/TXT file
- Queue management
- Progress tracking
- Scheduled downloads
```

#### Advanced Filters
```
#instagram profile @username --filter
- Date range: 2024-01-01 to 2024-01-31
- Min likes: 1000
- Content type: reels only
- Resolution: HD only
```

#### OCR & AI Features
```
#instagram ocr [image_URL]
```
Extract text dari images menggunakan AI OCR.

```
#instagram describe [image_URL] 
```
AI-generated description dari image content.

## Integration Features

### 🔗 **Cloud Storage**

#### Auto-Upload
```
#instagram cloud-setup [google-drive|dropbox|onedrive]
```
Otomatis upload downloads ke cloud storage.

#### Organized Folders
```yaml
folder_structure:
  /Instagram_Downloads/
    /Posts/
      /2024/
        /January/
    /Reels/  
    /Stories/
    /Highlights/
```

### 📱 **Social Sharing**

#### Cross-Platform Sharing
```
#instagram share [downloaded_content] [platform]
```
Share ke platform lain: TikTok, YouTube, Twitter, etc.

#### Auto-Repost
Setup auto-repost ke akun Instagram lain dengan scheduling.

## Usage Analytics

### 📈 **Download Stats**

#### Personal Analytics
```
#instagram stats
```
- Total downloads this month
- Favorite content types
- Most downloaded accounts
- Storage usage
- Quality preferences

#### Content Performance
```
#instagram trending
```
- Most downloaded posts today
- Trending accounts
- Popular hashtags
- Viral content alerts

## Error Handling

### ❌ **Common Issues**

#### Private Account
```
Error: "This account is private"
Solution: Request access atau use public posts only
```

#### Expired Stories  
```
Error: "Story no longer available"
Solution: Stories expire after 24 hours
```

#### Copyright Protected
```
Error: "Content not available due to copyright"
Solution: Try alternative sources
```

#### Rate Limiting
```
Error: "Instagram rate limit reached"  
Solution: Wait 15-30 minutes before retry
```

### 🔧 **Troubleshooting**

#### URL Format Issues
```yaml
correct_formats:
  posts: "https://www.instagram.com/p/[POST_ID]/"
  reels: "https://www.instagram.com/reel/[REEL_ID]/"
  stories: "https://www.instagram.com/stories/[USERNAME]/[STORY_ID]/"
  highlights: "https://www.instagram.com/s/[HIGHLIGHT_ID]/"

common_mistakes:
  - Missing "www." in URL
  - Using mobile "m.instagram.com" URLs  
  - Shortened URLs (use full URLs)
  - Extra parameters in URL
```

## Best Practices

### ✅ **Optimization Tips**

#### Quality vs Speed
- Use **auto** quality untuk optimal balance
- **SD** quality untuk faster downloads
- **HD** untuk sharing purposes
- **UHD** hanya untuk archival/editing

#### Batch Processing
- Group similar content types
- Process during off-peak hours
- Use ZIP files untuk multiple downloads
- Set realistic limits (max 20 URLs per batch)

#### Storage Management
- Regular cleanup old downloads
- Use cloud storage untuk long-term archive
- Compress large files before storage
- Delete duplicates automatically

### 🚫 **Usage Guidelines**

#### Respect Copyright
- Download hanya untuk personal use
- Jangan redistribute tanpa permission
- Credit original creators
- Follow Instagram Terms of Service

#### Ethical Usage
- Jangan download private content tanpa permission
- Respect content creators' rights
- Use downloads responsibly
- Don't spam download requests

## Failed Command

Penyebab error umum:
- **Invalid URL**: Format URL tidak valid
- **Content unavailable**: Post deleted atau private
- **Network timeout**: Connection issues
- **File too large**: Content melebihi size limit
- **Rate limit**: Terlalu banyak requests

## Pricing & Limits

### Free Plan
- 20 downloads per hari
- SD quality maksimal
- Basic formats only
- No batch download

### Premium Plan  
- 200 downloads per hari
- HD quality tersedia
- All formats supported
- Batch download (5 URLs)
- Basic metadata extraction

### Nitro Plan
- Unlimited downloads
- UHD quality available
- No watermark downloads
- Advanced batch processing (50 URLs)
- Full metadata extraction
- OCR & AI features
- Cloud integration
- Priority processing

## Note

:::tip Download Tips
- Use specific URLs untuk better success rate
- Check content availability sebelum batch download
- Organize downloads dengan proper naming
- Regular cleanup untuk save storage space
:::

:::warning Copyright Notice
- Selalu respect content creator rights
- Download untuk personal use only
- Jangan redistribute content tanpa permission
- Follow platform terms of service
:::

:::info Technical Limitations
- Maximum file size: 100MB per download
- Batch limit: 50 URLs untuk Nitro users
- Stories: Only available for 24 hours
- Private content: Requires account access
:::
