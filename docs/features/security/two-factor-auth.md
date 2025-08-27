# Two-Factor Authentication (2FA)

Sistem autentikasi dua faktor untuk keamanan ekstra pada akun bot dan fitur-fitur sensitive.

|                       Info                        |      |
| :-----------------------------------------------: | :--: |
| <div class="label license nitro">Only Nitro</div> |  ✅  |
|                Menggunakan Prefix                 |  ✅  |
|                 Menggunakan limit                 |  ❌  |
|                    Hanya Owner                    |  ✅  |
|                   Hanya Premium                   |  ❌  |
|                    Hanya Group                    |  ❌  |
|                 Hanya Admin Group                 |  ❌  |
|                Hanya Private Chat                 |  ✅  |
|                       Limit                       |  ∞   |
|                     Cooldown                      |  0   |
|                       Level                       |  0   |

## Command

### #2fa

Kelola Two-Factor Authentication.

```
#2fa [setup|enable|disable|verify|status|reset]
```

### Setup 2FA

#### Initial Setup
```
#2fa setup
```
Memulai proses setup 2FA dengan QR code untuk authenticator app.

#### Backup Codes
```
#2fa backup-codes generate
```
Generate backup codes untuk recovery jika authenticator tidak tersedia.

## Supported Authenticator Apps

### 📱 **Recommended Apps**

#### Mobile Authenticators
- **Google Authenticator**: Free, reliable, widely supported
- **Microsoft Authenticator**: Push notifications, cloud backup
- **Authy**: Multi-device sync, encrypted backups
- **1Password**: Integrated dengan password manager
- **Bitwarden**: Open source, cross-platform

#### Hardware Authenticators  
- **YubiKey**: Physical security keys
- **Google Titan**: Hardware-based authentication
- **Feitian**: Budget-friendly security keys

### 🔧 **Setup Process**

1. **Generate QR Code**
   ```
   #2fa setup
   ```
   Bot akan mengirim QR code dan setup key

2. **Scan dengan Authenticator App**
   - Buka authenticator app pilihan Anda
   - Scan QR code yang dikirim bot
   - Atau input manual setup key

3. **Verify Setup**
   ```
   #2fa verify [6-digit-code]
   ```
   Input kode 6 digit dari authenticator app

4. **Save Backup Codes**
   ```
   #2fa backup-codes generate
   ```
   Simpan 10 backup codes di tempat aman

## Protected Commands

### 🔐 **High-Security Commands**

Commands yang memerlukan 2FA verification:

#### Bot Configuration
- `#setting bot-config modify`
- `#setting security-level change`
- `#setting api-keys manage`

#### User Management
- `#admin add-owner`
- `#admin remove-admin`  
- `#premium add-lifetime`
- `#ban permanent`

#### Financial Operations
- `#billing change-plan`
- `#payment method-update`
- `#subscription cancel`

#### Data Operations
- `#backup restore`
- `#database reset`
- `#export all-data`

### 🛡️ **2FA Verification Process**

When executing protected command:

1. **Command Initiated**
   ```
   User: #admin add-owner 628123456789
   ```

2. **2FA Challenge**
   ```
   Bot: 🔐 This action requires 2FA verification.
        Please enter your 6-digit code from authenticator app:
   ```

3. **Code Submission**
   ```
   User: 123456
   ```

4. **Verification Result**
   ```
   Bot: ✅ 2FA verification successful!
        Executing command: admin add-owner...
   ```

## Advanced Security Features

### 🕒 **Time-Based Verification**

#### Session Management
```
#2fa session-timeout set [15|30|60|120] minutes
```
Set berapa lama session 2FA valid sebelum perlu verify lagi.

#### Automatic Logout
```
#2fa auto-logout enable --inactive [30|60|120] minutes
```
Auto logout dari session setelah tidak aktif.

### 🌍 **Location-Based Security**

#### Trusted Locations
```
#2fa trusted-location add --name "Office" --radius 100m
#2fa trusted-location add --name "Home" --radius 50m
```
Skip 2FA untuk lokasi yang sudah trusted.

#### Suspicious Location Detection
```yaml
security_alert:
  trigger: "2fa_attempt_from_new_location"
  location: "Jakarta (Previously: Surabaya)"
  action: 
    - require_additional_verification
    - send_security_notification
    - temporary_account_lock
```

### 📱 **Device Management**

#### Trusted Devices
```
#2fa device trust --duration [7|30|90] days
```
Mark device sebagai trusted untuk periode tertentu.

#### Device Fingerprinting
System otomatis track:
- Device model dan OS version
- WhatsApp client version  
- Network information
- Usage patterns

#### Suspicious Device Alert
```yaml
device_alert:
  trigger: "new_device_detected"
  device_info: "Android 14, WhatsApp 2.24.1.78"
  risk_level: "medium"
  action: "require_2fa_verification"
```

## Backup & Recovery

### 🔑 **Backup Codes**

#### Generate Codes
```
#2fa backup-codes generate
```
Generates 10 single-use backup codes:
```
Backup Codes (save securely):
1. ABC123-DEF456
2. GHI789-JKL012  
3. MNO345-PQR678
...
```

#### Use Backup Code
```
#2fa verify backup ABC123-DEF456
```
Use backup code jika authenticator tidak available.

#### Regenerate Codes
```
#2fa backup-codes regenerate --invalidate-old
```
Generate new codes dan invalidate yang lama.

### 🔄 **Account Recovery**

#### Recovery Process
Jika access ke authenticator hilang:

1. **Request Recovery**
   ```
   #2fa recovery request
   ```

2. **Identity Verification**
   - Email verification
   - SMS verification  
   - Security questions
   - Account history verification

3. **Admin Approval**
   Manual review dan approval dari admin team.

4. **Reset 2FA**
   ```
   #2fa reset --confirmed
   ```
   Reset 2FA settings dan setup ulang.

## Security Monitoring

### 📊 **Authentication Logs**

#### View Logs
```
#2fa logs [today|week|month|all]
```

#### Log Information
```yaml
2fa_log_entry:
  timestamp: "2024-01-15 10:30:00"
  action: "2fa_verification_success"
  user: "628123456789"
  location: "Jakarta, Indonesia"
  device: "Android 14"
  ip_address: "xxx.xxx.xxx.xxx"
  method: "authenticator_app"
```

### 🚨 **Security Alerts**

#### Alert Types
- **Failed 2FA attempts** (3+ dalam 5 menit)
- **New device login** dengan 2FA success
- **Backup code usage** 
- **2FA disabled** by user
- **Suspicious location** access

#### Alert Actions
```yaml
security_response:
  failed_attempts_threshold: 5
  actions:
    - temporary_account_lock: 30_minutes
    - notify_owner: immediate
    - require_password_reset: true
    - escalate_to_admin: true
```

### 🔍 **Audit Trail**

Complete audit trail untuk compliance:
- All 2FA setup/disable activities
- Successful dan failed authentication attempts
- Backup code generation dan usage
- Device trust modifications
- Location-based security events

## Integration Features

### 🔗 **External Integrations**

#### SAML SSO Integration
```
#2fa saml configure --provider [okta|azure|google]
```
Integrate dengan enterprise SSO systems.

#### LDAP Integration  
```
#2fa ldap configure --server ldap.company.com
```
Use existing corporate directory.

#### Hardware Security Keys
```
#2fa hardware-key register --type [yubikey|titan|feitian]
```
Support untuk physical security keys.

## Best Practices

### ✅ **Security Best Practices**

#### Strong Setup
- Use reputable authenticator apps
- Enable cloud backup jika tersedia
- Store backup codes di secure location
- Regular review trusted devices

#### Operational Security
- Never share backup codes
- Don't screenshot QR codes
- Use different 2FA codes untuk different services
- Regular security audits

#### Incident Response
- Immediate 2FA reset jika device compromised  
- Review logs untuk suspicious activity
- Update security questions regularly
- Coordinate dengan security team untuk incidents

### 🔒 **Enterprise Features**

#### Centralized Management
```yaml
enterprise_2fa:
  policy_enforcement: mandatory
  allowed_authenticators: 
    - google_authenticator
    - microsoft_authenticator
    - hardware_keys
  
  requirements:
    session_timeout: 30_minutes
    backup_codes: required
    trusted_devices: max_3
    
  compliance:
    audit_logging: enabled
    retention_period: 2_years
    export_format: json
```

## Failed Command

Penyebab error umum:
- **Invalid authenticator code**: Code salah atau expired
- **Backup code already used**: Code sudah pernah digunakan
- **2FA not setup**: Trying to use 2FA sebelum setup
- **Rate limit exceeded**: Terlalu banyak failed attempts
- **Device not recognized**: New device tanpa proper verification

## Pricing & Features

### Premium Plan
- Basic 2FA dengan authenticator apps
- 5 backup codes
- Session timeout 60 minutes
- Basic audit logging

### Nitro Plan  
- Advanced 2FA features
- Hardware security key support
- 10 backup codes  
- Custom session timeouts
- Location-based security
- Detailed audit trail

### Enterprise Plan
- SSO integration
- LDAP integration
- Centralized policy management
- Advanced analytics
- 24/7 security monitoring
- Compliance reporting

## Note

:::tip Setup Recommendations
- Enable 2FA immediately setelah bot setup
- Use multiple backup methods (app + hardware key)
- Keep backup codes di secure physical location
- Test recovery process regularly
:::

:::warning Security Considerations  
- 2FA adds security tapi juga complexity
- Backup codes adalah single point of failure
- Trusted devices dapat menjadi security risk
- Regular review dan audit diperlukan
:::

:::danger Important Reminders
- NEVER share 2FA codes atau backup codes
- Immediately disable 2FA jika device hilang/dicuri
- Report suspicious activity immediately
- Keep authenticator apps updated
:::