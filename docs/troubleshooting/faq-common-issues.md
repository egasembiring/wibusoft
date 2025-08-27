# FAQ & Common Issues

Comprehensive frequently asked questions dan solusi untuk masalah umum yang ditemui users.

## 🚀 Getting Started

### ❓ **Setup & Configuration**

#### Q: Bagaimana cara pertama kali setup bot?
**A:** Ikuti langkah berikut:
1. Daftar akun di [wibusoft.com](https://wibusoft.com)
2. Login ke dashboard dan klik "Create New Bot"
3. Scan QR code dengan WhatsApp Web
4. Bot siap digunakan dalam 1-2 menit

#### Q: Bot tidak merespons setelah scan QR code?
**A:** Coba langkah troubleshooting ini:
1. **Cek koneksi internet** - Pastikan koneksi stabil
2. **Restart bot** - Klik "Stop Bot" lalu "Start Bot"
3. **Cek WhatsApp Web** - Logout dari semua sesi WhatsApp Web lain
4. **Clear cache** - Hapus cache browser dan scan ulang
5. **Hubungi support** - Jika masih tidak berhasil

#### Q: Apakah bisa menggunakan 1 nomor WhatsApp untuk multiple bots?
**A:** **Tidak**. 1 nomor WhatsApp hanya bisa terhubung ke 1 bot. Untuk multiple bots, Anda perlu nomor WhatsApp yang berbeda.

#### Q: Berapa lama bot bisa online terus menerus?
**A:** Bot bisa online 24/7 selama:
- Akun masih aktif (belum expired)
- Server tidak maintenance
- WhatsApp tidak logout otomatis
- Tidak ada pelanggaran Terms of Service

### ⚙️ **Configuration Issues**

#### Q: Prefix tidak berfungsi, semua pesan direspons?
**A:** Masuk ke **Settings > Bot Configuration**:
1. Set "Response Mode" ke "Prefix Only"
2. Set prefix yang diinginkan (default: `#`)
3. Save settings dan restart bot

#### Q: Bot merespons di group tapi tidak di private chat?
**A:** Cek pengaturan di **Settings > Bot Behavior**:
- Pastikan "Private Chat" enabled
- Cek user tidak di blacklist
- Verify "Admin Only" mode tidak active

#### Q: Commands tidak berfungsi setelah update?
**A:** Possible causes:
1. **Syntax berubah** - Cek documentation untuk syntax terbaru
2. **Permission issue** - Command butuh role admin/premium
3. **Feature deprecated** - Command dihapus atau diganti
4. **Cache issue** - Clear bot cache di dashboard

## 🤖 AI Features

### 🧠 **ChatGPT Integration**

#### Q: AI tidak merespons atau error terus?
**A:** Troubleshooting steps:
1. **Cek quota** - AI features punya limit daily usage
2. **Cek prompt** - Hindari prompt yang melanggar policy
3. **Wait and retry** - Service mungkin temporary overloaded
4. **Check plan** - Pastikan plan support AI features

#### Q: Response AI tidak akurat atau aneh?
**A:** Tips untuk response lebih baik:
1. **Be specific** - Gunakan pertanyaan yang jelas dan detail
2. **Provide context** - Berikan context yang cukup
3. **Use proper language** - Hindari slang atau typo berlebihan
4. **Check prompt settings** - Custom prompt mungkin perlu adjustment

#### Q: Bisakah AI mengingat conversation history?
**A:** Ya, dengan limitations:
- **Memory duration**: 30 menit per user
- **Context length**: Max 10 pesan terakhir
- **Privacy**: Auto-clear untuk data protection
- **Settings**: Bisa adjust di AI Configuration

### 🎨 **Image Generation**

#### Q: Image generation gagal atau tidak muncul?
**A:** Common solutions:
1. **Prompt guidelines** - Avoid prohibited content (NSFW, violence, etc.)
2. **Size limits** - Cek file size tidak melebihi limit plan
3. **Queue full** - Tunggu beberapa menit dan coba lagi
4. **Credit exhausted** - Cek remaining generation credits

#### Q: Hasil gambar tidak sesuai harapan?
**A:** Tips untuk hasil lebih baik:
1. **Detailed prompts** - Gunakan deskripsi yang detail dan spesifik
2. **Art style specification** - Sebutkan style yang diinginkan
3. **Quality settings** - Pilih quality yang sesuai kebutuhan
4. **Negative prompts** - Specify apa yang tidak diinginkan

## 📱 Voice Features

### 🎤 **Speech to Text**

#### Q: Speech recognition tidak akurat?
**A:** Improve accuracy dengan:
1. **Clear audio** - Record di tempat yang tenang
2. **Proper pronunciation** - Berbicara dengan jelas
3. **Language setting** - Set language detection yang tepat
4. **Audio quality** - Gunakan microphone yang baik

#### Q: Voice note tidak bisa diprocess?
**A:** Check these factors:
1. **File format** - Pastikan format didukung (MP3, AAC, WAV)
2. **File size** - Max file size sesuai plan limits
3. **Duration** - Max duration 10 menit
4. **Quality** - Audio terlalu noisy mungkin gagal diprocess

### 🔊 **Text to Speech**

#### Q: Voice output tidak natural atau robotic?
**A:** Optimization tips:
1. **Voice selection** - Coba voice yang berbeda
2. **Punctuation** - Gunakan tanda baca yang tepat
3. **Speed adjustment** - Adjust speed untuk naturalness
4. **SSML tags** - Use SSML untuk kontrol lebih detail

#### Q: Generated voice file tidak bisa diplay?
**A:** Troubleshooting:
1. **Format compatibility** - Cek format support di device
2. **File corruption** - Regenerate jika file corrupt
3. **Size limits** - File mungkin terlalu besar untuk WhatsApp
4. **Network issue** - Slow connection mungkin corrupt download

## 📊 Download Features

### 📺 **YouTube Downloader**

#### Q: "Video tidak bisa didownload" error?
**A:** Possible causes dan solutions:
1. **Copyright protection** - Video protected by copyright
2. **Geo-blocking** - Video tidak available di region Anda
3. **Age restriction** - Video require age verification
4. **Private/Deleted** - Video sudah dihapus atau private
5. **Quality unavailable** - Coba quality yang lebih rendah

#### Q: Download stuck atau sangat lambat?
**A:** Speed optimization:
1. **Server load** - Coba di waktu yang berbeda
2. **Quality selection** - Pilih quality yang lebih rendah
3. **Network connection** - Cek koneksi internet
4. **Concurrent downloads** - Tunggu download lain selesai

### 📸 **Instagram Downloader**

#### Q: Instagram content tidak bisa didownload?
**A:** Common issues:
1. **Private account** - Content dari private account tidak bisa didownload
2. **Stories expired** - Stories hanya tersedia 24 jam
3. **URL format** - Pastikan URL format benar
4. **Content deleted** - Post mungkin sudah dihapus

#### Q: Download Instagram story gagal?
**A:** Story download issues:
1. **Time limit** - Stories expire after 24 hours
2. **Privacy settings** - Account mungkin restrict story downloads
3. **Multiple stories** - Download one by one jika batch fails
4. **Network timing** - Coba beberapa kali jika network slow

## 👥 Group Management

### 🛡️ **Moderation Issues**

#### Q: Anti-spam tidak berfungsi dengan baik?
**A:** Adjustment needed:
1. **Sensitivity settings** - Adjust detection sensitivity
2. **Whitelist users** - Add trusted users to whitelist
3. **Custom rules** - Set specific rules untuk group
4. **Manual review** - Check false positives dan adjust

#### Q: Bot tidak bisa kick/add members?
**A:** Permission requirements:
1. **Bot admin status** - Bot must be group admin
2. **User permissions** - User yang execute command must be admin
3. **WhatsApp limitations** - Some actions have WhatsApp limits
4. **Group settings** - Group settings might restrict actions

### 📊 **Analytics Issues**

#### Q: Group analytics tidak muncul data?
**A:** Data collection issues:
1. **Analytics enabled** - Pastikan analytics feature enabled
2. **Time period** - Data might need time to accumulate
3. **Privacy settings** - Some data might be restricted
4. **Bot permissions** - Bot need proper permissions untuk collect data

## 🔒 Security & Authentication

### 🔐 **2FA Issues**

#### Q: 2FA tidak bisa di-setup?
**A:** Setup troubleshooting:
1. **Time sync** - Pastikan device time accurate
2. **App compatibility** - Use recommended authenticator apps
3. **QR code** - Try manual key entry jika QR scan fails
4. **Network connection** - Stable connection required

#### Q: 2FA code tidak diterima?
**A:** Code verification issues:
1. **Time synchronization** - Sync time di authenticator app
2. **Code expiry** - Use fresh code (codes expire every 30 seconds)
3. **Backup codes** - Use backup codes jika main method fails
4. **Reset 2FA** - Contact support untuk reset jika semua fails

## 💳 Billing & Subscription

### 💰 **Payment Issues**

#### Q: Pembayaran gagal atau tidak terdeteksi?
**A:** Payment troubleshooting:
1. **Bank/Card verification** - Cek dengan bank untuk international transactions
2. **Payment method** - Coba payment method yang berbeda
3. **Transaction timeout** - Wait 5-10 menit untuk processing
4. **Contact support** - Untuk verification manual payment

#### Q: Upgrade plan tidak aktif setelah bayar?
**A:** Activation issues:
1. **Processing time** - Tunggu hingga 1 jam untuk activation
2. **Email confirmation** - Check email untuk confirmation
3. **Account verification** - Complete profile verification
4. **Support ticket** - Contact support dengan bukti payment

### 📊 **Usage Limits**

#### Q: "Quota exceeded" muncul padahal masih awal bulan?
**A:** Quota management:
1. **Plan limits** - Cek actual limits untuk plan Anda
2. **Usage calculation** - Some features count differently
3. **Billing cycle** - Cek tanggal reset billing cycle
4. **Upgrade plan** - Consider upgrade jika butuh more quota

## 🛠️ Technical Issues

### ⚡ **Performance Problems**

#### Q: Bot response sangat lambat?
**A:** Performance optimization:
1. **Server load** - High traffic periods affect performance
2. **Command complexity** - Complex commands take longer
3. **External APIs** - Third-party service delays
4. **Restart bot** - Fresh restart often improves performance

#### Q: Bot sering disconnect atau offline?
**A:** Connection stability:
1. **WhatsApp sessions** - Logout other WhatsApp Web sessions
2. **Network stability** - Ensure stable internet connection
3. **Server maintenance** - Check status page untuk maintenance
4. **Account compliance** - Ensure no Terms of Service violations

### 🐛 **Error Messages**

#### Q: "Internal Server Error" terus muncul?
**A:** Server-side issues:
1. **Temporary issue** - Wait 10-15 minutes dan coba lagi
2. **Service outage** - Check status page or social media
3. **Clear cache** - Clear browser cache dan restart
4. **Contact support** - Report jika persistent

#### Q: "Rate limit exceeded" error?
**A:** Rate limiting solutions:
1. **Slow down** - Wait before sending next command
2. **Batch operations** - Use batch features instead of rapid individual commands
3. **Plan upgrade** - Higher plans have higher rate limits
4. **Optimal timing** - Spread usage throughout the day

## 🔧 Advanced Troubleshooting

### 🛠️ **Debug Mode**

#### Enable Debug Logging
```
#debug enable
```
This will provide detailed logs untuk troubleshooting.

#### Check System Status
```
#status system
```
Comprehensive system health check.

#### Connection Diagnostics
```
#diagnostic connection
```
Test all connection endpoints.

### 📋 **Log Analysis**

#### Access Bot Logs
1. Go to **Dashboard > Logs**
2. Filter by time period
3. Search for specific errors
4. Download logs jika perlu untuk support

#### Common Error Patterns
- **API timeouts**: Network connectivity issues
- **Authentication failures**: Token atau credential issues  
- **Permission denied**: Access control problems
- **Rate limiting**: Too many requests

### 🔄 **Reset & Recovery**

#### Soft Reset
```
#bot restart
```
Restarts bot tanpa losing settings.

#### Hard Reset
```
#bot factory-reset
```
⚠️ **Warning**: This will reset semua settings ke default!

#### Data Recovery
1. **Backup first** - Always backup sebelum major changes
2. **Export settings** - Save current configuration
3. **Recovery mode** - Available di dashboard jika needed

## 📞 Getting Help

### 🆘 **When to Contact Support**

Contact support jika:
- Issue persist after trying troubleshooting steps
- Billing atau payment problems
- Security concerns atau suspected breaches
- Feature requests atau bug reports
- Account termination appeals

### 📧 **How to Contact Support**

#### Support Channels
1. **Live Chat**: Available di dashboard (fastest response)
2. **Email**: support@wibusoft.com (24-48 hours response)
3. **WhatsApp**: +62-XXX-XXXX-XXXX (premium users only)
4. **Community Forum**: [community.wibusoft.com](https://community.wibusoft.com)

#### Information to Include
When contacting support, include:
- **Account email** dan username
- **Bot ID** atau instance name
- **Detailed problem description**
- **Steps already tried**
- **Screenshots** jika applicable
- **Error messages** (exact text)
- **Time when issue occurred**

### 📚 **Self-Help Resources**

#### Documentation
- **User Guide**: Comprehensive feature documentation
- **API Documentation**: For developers
- **Video Tutorials**: Step-by-step guides
- **Community Wiki**: User-contributed guides

#### Community Resources
- **Discord Server**: Real-time help dari community
- **Telegram Group**: Indonesian language support
- **GitHub Issues**: Technical issues dan bug reports
- **YouTube Channel**: Tutorial videos dan updates

### ⏰ **Response Times**

#### Support Response SLA
- **Free Plan**: 48-72 hours
- **Premium Plan**: 24-48 hours
- **Nitro Plan**: 12-24 hours
- **Enterprise Plan**: 2-4 hours

#### Priority Levels
- **Critical**: System down, security issues (2 hours)
- **High**: Major functionality broken (8 hours)
- **Medium**: Moderate impact issues (24 hours)  
- **Low**: Minor issues, feature requests (72 hours)

## ✅ Prevention Tips

### 🛡️ **Best Practices**

#### Account Security
- Enable 2FA immediately
- Use strong, unique passwords
- Regularly review access logs
- Don't share credentials

#### Bot Usage
- Follow rate limits
- Use appropriate commands untuk tasks
- Keep bot updated
- Monitor resource usage

#### Maintenance
- Regular settings backup
- Monitor bot performance
- Update configurations as needed
- Stay informed about updates

### 📈 **Optimization Guidelines**

#### Performance Optimization
- Use batch operations when possible
- Cache frequently used data
- Optimize command usage patterns
- Monitor and adjust based on analytics

#### Cost Optimization
- Choose appropriate plan untuk usage
- Monitor quota usage
- Use free features effectively before upgrading
- Plan usage around billing cycles

## 🔮 **Future Updates**

### 📅 **Roadmap Items**

Upcoming features yang mungkin solve current limitations:
- Enhanced error messaging
- Automatic troubleshooting tools
- Improved performance monitoring
- Better debugging capabilities

### 📢 **Stay Updated**

- **Release Notes**: Check untuk new features dan bug fixes
- **Status Page**: Monitor service health
- **Community Updates**: Join community untuk early insights
- **Beta Testing**: Participate dalam beta programs

---

:::tip Quick Solutions
Untuk most common issues:
1. **Restart bot** - Solves 60% of issues
2. **Check settings** - Verify configuration
3. **Clear cache** - Often fixes random errors
4. **Update browser** - Compatibility issues
5. **Contact support** - When all else fails
:::

:::warning Important Reminders
- Always **backup settings** before major changes
- **Test in small groups** before deploying widely
- **Monitor usage** to avoid hitting limits unexpectedly
- **Keep documentation** updated dengan your customizations
:::

:::info Community Help
Join our community untuk:
- **Faster answers** dari experienced users
- **Share solutions** yang you've discovered
- **Beta access** to new features
- **Networking** dengan other bot operators
:::