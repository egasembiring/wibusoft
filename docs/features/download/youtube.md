# YouTube Downloader

Advanced YouTube downloader dengan dukungan berbagai format, quality, dan fitur AI-powered.

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
|                       Limit                       |  3   |
|                     Cooldown                      | 10000|
|                       Level                       |  0   |

## Command

### #youtube

Download video atau audio dari YouTube dengan berbagai options.

Format: `#youtube [URL] [options]`

Contoh penggunaan:
- `#youtube https://youtu.be/dQw4w9WgXcQ`
- `#youtube https://youtu.be/dQw4w9WgXcQ --format mp3`
- `#youtube https://youtu.be/dQw4w9WgXcQ --quality 720p --audio-only`

### Format Options

#### Video Download
```
#youtube [URL] --format [mp4|webm|mkv] --quality [144p|240p|360p|480p|720p|1080p|1440p|4k]
```

#### Audio Only
```
#youtube [URL] --audio-only --format [mp3|aac|flac|wav] --bitrate [128|192|256|320]
```

#### Custom Options
```
#youtube [URL] --start 00:01:30 --end 00:03:45 --format mp4
```

Alias:
- #yt
- #ytdl
- #ytmp3
- #ytmp4
- #youtube-dl

## Supported Content

### 🎬 **Video Types**

#### Regular Videos
```yaml
regular_video:
  url_formats:
    - "https://youtube.com/watch?v=VIDEO_ID"
    - "https://youtu.be/VIDEO_ID"
    - "https://m.youtube.com/watch?v=VIDEO_ID"
  
  max_duration: "4 hours"
  quality_options: ["144p", "240p", "360p", "480p", "720p", "1080p", "1440p", "4K"]
  formats: ["MP4", "WebM", "MKV"]
```

#### YouTube Shorts
```yaml
youtube_shorts:
  url_format: "https://youtube.com/shorts/VIDEO_ID"
  max_duration: "60 seconds"
  quality: "up to 1080p"
  features: ["vertical_format", "fast_download"]
```

#### Live Streams & Premieres
```yaml
live_content:
  live_streams: "❌ Not supported while live"
  premieres: "✅ After premiere ends"
  live_recordings: "✅ If available"
  scheduled_content: "✅ Queue for later download"
```

### 🎵 **Audio Extraction**

#### High Quality Audio
```
#youtube [URL] --audio-only --bitrate 320 --format mp3
```

Quality Options:
- **128 kbps**: Standard quality, small file size
- **192 kbps**: Good quality, balanced
- **256 kbps**: High quality
- **320 kbps**: Maximum quality (Premium only)

#### Format Support
- **MP3**: Universal compatibility
- **AAC**: Apple devices optimized
- **FLAC**: Lossless (Nitro only)
- **WAV**: Uncompressed (Nitro only)

## Advanced Features

### ⚡ **Smart Download**

#### Auto-Quality Selection
```
#youtube [URL] --quality auto
```
Otomatis pilih quality terbaik berdasarkan:
- File size vs quality balance
- User's connection speed
- WhatsApp file size limits
- Device compatibility

#### Adaptive Streaming
```yaml
adaptive_download:
  enabled: true
  features:
    - resume_interrupted_downloads
    - smart_retry_on_failure
    - connection_optimization
    - bandwidth_management
```

### 🎞️ **Video Processing**

#### Clip Extraction
```
#youtube [URL] --start 00:01:30 --duration 00:00:30
#youtube [URL] --start 00:01:30 --end 00:02:00
```

#### Multiple Clips
```
#youtube-clips [URL]
Clip 1: 00:01:30-00:02:00 (Intro)
Clip 2: 00:05:15-00:05:45 (Highlights)  
Clip 3: 00:08:20-00:08:50 (Conclusion)
```

#### Video Enhancement
```
#youtube [URL] --enhance
Options:
- noise_reduction: Remove background noise
- stabilization: Video stabilization
- color_correction: Auto color enhancement
- upscaling: AI upscaling (Nitro only)
```

### 📝 **Metadata & Subtitles**

#### Rich Metadata
```yaml
video_metadata:
  title: "Video Title"
  description: "Full video description"
  tags: ["tag1", "tag2", "tag3"]
  category: "Music"
  duration: "00:03:45"
  upload_date: "2024-01-15"
  view_count: 1000000
  like_count: 50000
  channel: "Channel Name"
  thumbnail: "high_quality_thumbnail.jpg"
```

#### Subtitle Download
```
#youtube [URL] --subtitles [auto|en|id|es|fr|de|ja|ko|zh]
```

Features:
- Auto-generated subtitles
- Manual subtitles (if available)
- Multiple language support
- SRT format output
- Burned-in subtitles option

#### Chapter Detection
```yaml
chapters:
  - title: "Introduction"
    start_time: "00:00:00"
    end_time: "00:01:30"
  - title: "Main Content"  
    start_time: "00:01:30"
    end_time: "00:08:45"
  - title: "Conclusion"
    start_time: "00:08:45"
    end_time: "00:10:00"
```

## Batch Operations

### 📋 **Playlist Download**

#### Entire Playlist
```
#youtube-playlist https://youtube.com/playlist?list=PLAYLIST_ID
Options:
- --limit 10 (max videos to download)
- --quality 720p
- --format mp4
- --audio-only (extract audio from all videos)
```

#### Selective Download
```
#youtube-playlist-select https://youtube.com/playlist?list=PLAYLIST_ID
Select videos: 1,3,5-8,10
Quality: 720p
Format: mp4
```

### 📺 **Channel Download**

#### Recent Videos
```
#youtube-channel https://youtube.com/@channelname --recent 5
```

#### By Category
```
#youtube-channel https://youtube.com/@channelname --category [uploads|shorts|live|playlists] --limit 10
```

#### Date Range
```
#youtube-channel https://youtube.com/@channelname --from 2024-01-01 --to 2024-01-31
```

### 🔍 **Search & Download**

#### Search Results
```
#youtube-search "machine learning tutorial" --limit 5 --quality 720p
```

#### Advanced Search
```
#youtube-search "programming" --duration [short|medium|long] --upload-date [hour|today|week|month|year] --quality 720p
```

## AI-Powered Features

### 🤖 **Content Analysis**

#### Smart Summary
```
#youtube [URL] --summarize
```
AI-generated summary dari video content menggunakan speech recognition dan NLP.

#### Highlight Detection
```
#youtube [URL] --highlights
```
Otomatis deteksi moment-moment penting dalam video.

#### Topic Extraction
```
#youtube [URL] --topics
```
Extract main topics dan keywords dari video.

### 🎯 **Smart Recommendations**

#### Similar Content
```
#youtube [URL] --similar
```
Suggest video serupa berdasarkan content analysis.

#### Quality Recommendation
```yaml
smart_quality:
  connection_speed: "fast"
  device_type: "mobile"
  storage_available: "2GB"
  recommendation: "720p MP4 (balanced quality/size)"
```

## Premium Features

### 🌟 **Nitro Exclusive**

#### 4K Downloads
```
#youtube [URL] --quality 4k --format mp4
```
Download dalam resolusi 4K (jika tersedia).

#### No Ads Processing
Otomatis skip/remove sponsor segments dan ads.

#### Batch Processing
```yaml
nitro_limits:
  concurrent_downloads: 5
  playlist_size: 200_videos
  daily_downloads: unlimited
  max_file_size: 2GB
```

#### Advanced Audio
```
#youtube [URL] --audio-only --format flac --spatial-audio
```
- Lossless audio formats
- Spatial audio support
- Studio-quality extraction

### 📊 **Analytics Integration**

#### Download Analytics
```
#youtube-analytics
- Most downloaded channels
- Popular video categories  
- Peak download times
- Storage usage trends
```

#### Content Performance
Track which downloads perform best untuk optimization.

## Integration Features

### ☁️ **Cloud Storage**

#### Auto-Upload
```
#youtube-cloud-setup [google-drive|dropbox|onedrive|mega]
```

#### Organized Storage
```yaml
cloud_structure:
  /YouTube_Downloads/
    /Music/
      /Artist_Name/
        /Album_Name/
    /Tutorials/
      /Programming/
      /Cooking/
    /Entertainment/
      /Comedy/
      /Gaming/
```

### 🔄 **Format Conversion**

#### Post-Download Conversion
```
#youtube-convert [downloaded_file] --to [mp3|mp4|gif|webm]
```

#### Automatic Optimization
```yaml
auto_optimization:
  whatsapp_compatible: true
  compress_large_files: true
  mobile_friendly_formats: true
  bandwidth_optimization: true
```

## Quality & Performance

### 📈 **Download Speeds**

#### Speed Optimization
```yaml
performance_features:
  multi_connection_download: true
  resume_capability: true
  smart_routing: true
  cdn_optimization: true
  
average_speeds:
  720p_video: "30-60 seconds"
  1080p_video: "60-120 seconds"  
  4k_video: "5-10 minutes"
  audio_only: "10-30 seconds"
```

#### Progress Tracking
```
🎬 Downloading: Rick Astley - Never Gonna Give You Up
📊 Progress: ████████░░ 80% (2.5MB/3.2MB)
⏱️ ETA: 15 seconds
🔄 Speed: 512 KB/s
```

### 🎚️ **Quality Control**

#### Smart Bitrate
Otomatis adjust bitrate berdasarkan content type:
- Music videos: High audio bitrate priority
- Lectures/Tutorials: Balanced audio/video
- Action videos: High video bitrate priority

#### Compression Options
```
#youtube [URL] --compress [light|medium|heavy]
```
- **Light**: 10-20% size reduction
- **Medium**: 30-50% size reduction
- **Heavy**: 50-70% size reduction

## Error Handling

### ❌ **Common Issues**

#### Content Restrictions
```yaml
restrictions:
  age_restricted: "Requires account verification"
  geo_blocked: "Not available in your region"
  copyright_claim: "Content removed due to copyright"
  private_video: "Video is private or unlisted"
```

#### Technical Issues
```yaml
technical_errors:
  video_too_long: "Maximum 4 hours supported"
  file_too_large: "Maximum 100MB for free users"
  format_unavailable: "Requested format not available"
  network_timeout: "Download interrupted, will retry"
```

### 🔧 **Auto-Resolution**

#### Smart Retry
```yaml
retry_logic:
  network_issues: "Auto-retry with exponential backoff"
  quality_unavailable: "Fallback to next best quality"
  format_error: "Try alternative format"
  timeout: "Resume from last position"
```

#### Alternative Sources
Jika primary source gagal, try alternative methods automatically.

## Best Practices

### ✅ **Optimization Guidelines**

#### Quality Selection
```yaml
recommended_quality:
  mobile_viewing: "480p-720p"
  desktop_viewing: "720p-1080p"
  archival: "highest_available"
  sharing: "720p_compressed"
  
  audio_extraction:
    casual_listening: "128kbps MP3"
    music_collection: "256kbps AAC"
    audiophile: "320kbps FLAC"
```

#### Storage Management
- Delete downloads after 7 days (auto-cleanup)
- Use cloud storage untuk long-term archive
- Compress old files automatically
- Monitor storage usage regularly

### 🚫 **Usage Guidelines**

#### Copyright Compliance
- Download untuk personal use only
- Respect content creator rights
- Don't redistribute copyrighted content
- Follow YouTube Terms of Service

#### Ethical Usage
- Support creators through official channels
- Don't mass-download dari single channel
- Respect age restrictions
- Use downloads responsibly

## Failed Command

Penyebab error umum:
- **Invalid URL**: Format URL tidak valid atau video tidak exists
- **Content blocked**: Age-restricted, geo-blocked, atau private
- **File too large**: Melebihi size limits untuk plan Anda
- **Quality unavailable**: Requested quality tidak tersedia
- **Network issues**: Connection timeout atau server error

## Pricing & Limits

### Free Plan
- 10 downloads per hari
- Maximum 720p quality
- MP4/MP3 formats only
- 50MB file size limit
- No playlist download

### Premium Plan
- 100 downloads per hari  
- Up to 1080p quality
- All standard formats
- 500MB file size limit
- Playlist download (50 videos)
- Basic metadata extraction

### Nitro Plan
- Unlimited downloads
- 4K quality support
- All formats including lossless
- 2GB file size limit
- Unlimited playlist download
- AI-powered features
- Advanced processing
- Cloud integration
- Priority servers

## Note

:::tip Download Tips
- Use specific video URLs untuk better success rate
- Choose appropriate quality berdasarkan usage
- Enable auto-cleanup untuk manage storage
- Use playlist download efficiently
:::

:::warning Content Policy
- Always respect copyright dan creator rights
- Download untuk personal use only
- Don't redistribute content without permission
- Follow platform terms of service
:::

:::info Performance Tips
- Download during off-peak hours untuk better speeds
- Use audio-only untuk music content (smaller files)
- Enable compression untuk mobile viewing
- Monitor your daily limits
:::