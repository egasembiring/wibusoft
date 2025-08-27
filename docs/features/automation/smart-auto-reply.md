# Smart Auto Reply

Sistem balasan otomatis cerdas dengan AI yang dapat memahami konteks dan memberikan respons yang relevan.

|                       Info                        |      |
| :-----------------------------------------------: | :--: |
| <div class="label license nitro">Only Nitro</div> |  ✅  |
|                Menggunakan Prefix                 |  ✅  |
|                 Menggunakan limit                 |  ❌  |
|                    Hanya Owner                    |  ❌  |
|                   Hanya Premium                   |  ✅  |
|                    Hanya Group                    |  ❌  |
|                 Hanya Admin Group                 |  ❌  |
|                Hanya Private Chat                 |  ❌  |
|                       Limit                       |  ∞   |
|                     Cooldown                      |  0   |
|                       Level                       |  0   |

## Command

### #autoreply

Kelola sistem auto reply cerdas.

```
#autoreply [on|off|status|config]
```

### Setup Auto Reply

#### Basic Setup
```
#autoreply setup
```
Wizard setup dengan panduan step-by-step.

#### Quick Enable
```
#autoreply on --mode [smart|simple|hybrid]
```

### Configuration Commands

#### Set Response Mode
```
#autoreply mode [smart|simple|hybrid]
```
- **Smart**: AI-powered responses
- **Simple**: Keyword-based responses  
- **Hybrid**: Kombinasi AI + keyword

#### Set Response Time
```
#autoreply delay [1-60] seconds
```
Delay sebelum bot merespons (untuk terlihat natural).

## Smart Response Modes

### 🧠 **AI Smart Mode**

Bot menggunakan AI untuk memahami context dan memberikan respons yang relevan:

```
User: "Halo, apakah toko masih buka?"
Bot: "Halo! Ya, toko kami masih buka hingga pukul 21:00. 
      Ada yang bisa saya bantu?"

User: "Berapa harga produk A?"  
Bot: "Harga produk A adalah Rp 150.000. 
      Saat ini ada diskon 10% untuk pembelian hari ini!"
```

### 🎯 **Keyword Mode**

Respons berdasarkan keyword matching:

```yaml
Keywords:
  - ["halo", "hai", "hello"] → "Halo! Selamat datang di toko kami."
  - ["harga", "price"] → "Untuk info harga, silakan cek katalog kami."
  - ["lokasi", "alamat"] → "Alamat toko: Jl. Merdeka No. 123, Jakarta"
```

### 🔄 **Hybrid Mode**

Kombinasi AI + keyword untuk akurasi maksimal:
1. Check keyword match dulu
2. Jika tidak match, gunakan AI
3. Fallback ke default response

## Advanced Features

### 🎭 **Personality Settings**

Atur personality bot untuk konsistensi brand:

```
#autoreply personality set
- Tone: Professional, Friendly, Casual, Formal
- Style: Conversational, Direct, Helpful, Sales-oriented
- Language: Indonesian, English, Mixed
- Emoji Usage: None, Light, Moderate, Heavy
```

Contoh personality:
```yaml
Professional_Friendly:
  tone: "Professional but approachable"
  greeting: "Selamat datang! Ada yang bisa kami bantu?"
  closing: "Terima kasih, semoga hari Anda menyenangkan!"
  style: "Helpful and informative"
```

### 🕒 **Time-Based Responses**

Respons yang berbeda berdasarkan waktu:

```yaml
Business_Hours:
  07:00-21:00: "Halo! Tim kami siap membantu Anda."
  21:00-07:00: "Terima kasih menghubungi kami. 
                Kami akan merespons pada jam kerja: 07:00-21:00"

Weekends:
  Saturday: "Halo! Kami buka dengan jam terbatas hari ini."
  Sunday: "Toko tutup hari ini. Kami buka kembali Senin 07:00"
```

### 👤 **Context Awareness**

Bot mengingat konteks percakapan:

```
User: "Saya ingin beli sepatu"
Bot: "Sepatu apa yang Anda cari? Kami punya sneakers, 
     formal, casual, dan olahraga."

User: "Yang ukuran 42"
Bot: "Untuk ukuran 42, kami punya beberapa pilihan sepatu. 
     Mau lihat katalognya?"
```

### 📊 **Lead Qualification**

Otomatis kualifikasi leads berdasarkan respons:

```yaml
High_Intent:
  keywords: ["beli", "order", "pesan", "harga"]
  action: "Tag as hot lead + notify sales team"
  response: "Saya hubungkan Anda dengan tim sales kami"

Medium_Intent:
  keywords: ["info", "tanya", "lihat"]  
  action: "Tag as warm lead + send catalog"
  response: "Ini katalog produk terbaru kami"
```

## Trigger Configuration

### 📝 **Message Triggers**

#### All Messages
```
#autoreply trigger all --exclude [commands|replies|forwards]
```

#### Specific Keywords  
```
#autoreply trigger keyword add "halo,hai,hello"
#autoreply trigger keyword add "info,informasi"
```

#### Message Types
```
#autoreply trigger type [text|image|voice|document|contact]
```

#### Sender Criteria
```
#autoreply trigger sender [all|new|existing|vip]
```

### ⏰ **Time Triggers**

#### Business Hours Only
```
#autoreply schedule business-hours 08:00-17:00 mon-fri
```

#### Timezone Settings
```
#autoreply timezone set Asia/Jakarta
```

#### Holiday Mode
```
#autoreply holiday add "2024-01-01" "Happy New Year! Toko tutup hari ini."
```

## Response Templates

### 📋 **Template Management**

#### Create Template
```
#autoreply template create [name]
Title: Customer Greeting
Content: Halo! Terima kasih sudah menghubungi {{company_name}}. 
         Ada yang bisa kami bantu?
Variables: company_name, customer_name, current_time
```

#### Dynamic Variables
```yaml
Available Variables:
  {{customer_name}} - Nama customer (jika tersimpan)
  {{current_time}} - Waktu saat ini
  {{company_name}} - Nama perusahaan
  {{agent_name}} - Nama agent yang bertugas
  {{business_hours}} - Jam operasional
  {{location}} - Alamat toko
```

### 🔄 **Response Variations**

Mencegah respons yang monoton:

```yaml
Greeting_Variations:
  - "Halo! Ada yang bisa kami bantu?"
  - "Selamat datang! Bagaimana kami bisa membantu?"
  - "Hai! Terima kasih sudah menghubungi kami."
  - "Halo! Senang bisa melayani Anda hari ini."

Random_Selection: true
Weight_Based: false
```

## Smart Features

### 🤖 **AI Learning**

Bot belajar dari interaksi untuk improve responses:

```
Learning Features:
✅ Response effectiveness tracking
✅ Customer satisfaction scoring  
✅ Auto-improvement recommendations
✅ Pattern recognition
✅ Sentiment analysis
```

### 🎯 **Intent Recognition**

Mengenali maksud customer:

```yaml
Common Intents:
  Product_Inquiry: "Tanya tentang produk"
  Price_Check: "Cek harga"
  Order_Status: "Status pesanan"  
  Complaint: "Keluhan/komplain"
  Support: "Butuh bantuan teknis"
  General_Info: "Info umum"
```

### 📞 **Escalation Rules**

Otomatis transfer ke human agent:

```yaml
Auto_Escalate:
  - Complex technical questions
  - Customer complaints  
  - Purchase intent with high value
  - Unresolved after 3 exchanges
  - Negative sentiment detected
```

## Analytics & Reporting

### 📈 **Response Analytics**

```
#autoreply analytics [today|week|month]
```

Metrics yang dilacak:
- Response rate
- Customer satisfaction
- Common keywords
- Peak hours
- Conversion rate

### 📊 **Performance Dashboard**

Real-time monitoring:
- Active conversations
- Response time average
- Success rate
- AI confidence scores
- Customer feedback

## Advanced Configuration

### 🔧 **Response Logic**

#### Conditional Responses
```yaml
If customer_type == "VIP":
  response: "Halo {{customer_name}}, sebagai VIP member..."
  priority: high
  notify: vip-team@company.com

Else if time_of_day == "night":
  response: "Terima kasih menghubungi kami di luar jam kerja..."
  add_to_queue: true
```

#### A/B Testing
```
#autoreply ab-test create
Test_Name: Greeting_Comparison
Version_A: "Halo! Ada yang bisa dibantu?"
Version_B: "Hi! How can we help you today?"
Traffic_Split: 50/50
Duration: 7 days
```

### 🌐 **Multi-Language Support**

```
#autoreply language add [id|en|zh|ar]
#autoreply language auto-detect on
```

Auto-detect bahasa dan respons dalam bahasa yang sama:
```
User: "Hello, do you have iPhone 15?"
Bot: "Hello! Yes, we have iPhone 15 in stock. 
      Which color are you interested in?"

User: "Halo, ada iPhone 15?"  
Bot: "Halo! Ya, iPhone 15 tersedia. 
      Warna apa yang Anda inginkan?"
```

## Integration Features

### 📱 **CRM Integration**

```
#autoreply crm connect [hubspot|salesforce|pipedrive]
```

Benefits:
- Auto-create leads
- Update customer records
- Sync conversation history
- Trigger workflows

### 🛒 **E-commerce Integration**

```
#autoreply ecommerce connect [shopify|woocommerce|tokopedia]
```

Features:
- Product recommendations
- Order status updates
- Inventory checks
- Payment processing

## Failed Command

Penyebab error umum:
- **AI service unavailable**: ChatGPT API down
- **Rate limit exceeded**: Terlalu banyak conversations
- **Invalid template**: Template format salah
- **Configuration error**: Setting tidak valid

## Best Practices

### ✅ **Dos**
- Set personality yang consistent dengan brand
- Use variations untuk avoid repetition
- Monitor analytics regularly
- Test responses dengan real scenarios
- Keep templates up-to-date

### ❌ **Don'ts**  
- Jangan terlalu aggressive dengan sales pitch
- Avoid generic responses yang tidak membantu
- Jangan ignore escalation signals
- Hindari responses yang terlalu panjang
- Jangan lupa update business hours

## Note

:::tip Optimization Tips
- Review dan update templates secara berkala
- Monitor customer feedback untuk improve responses
- Use A/B testing untuk find optimal responses
- Set up proper escalation rules
- Integrate dengan CRM untuk better customer management
:::

:::warning Rate Limits
- Free plan: 100 auto responses per hari
- Premium plan: 1,000 auto responses per hari  
- Nitro plan: Unlimited auto responses
- Enterprise: Custom limits
:::

:::info Privacy & Compliance
- Semua conversations logged untuk quality assurance
- Customer data dijaga sesuai GDPR standards
- Opt-out tersedia untuk customers yang tidak ingin auto-reply
- Audit trail untuk compliance requirements
:::