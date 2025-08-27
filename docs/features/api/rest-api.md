# REST API

Comprehensive REST API untuk integrasi bot dengan sistem eksternal dan custom applications.

|                       Info                        |      |
| :-----------------------------------------------: | :--: |
| <div class="label license nitro">Only Nitro</div> |  ✅  |
|                Menggunakan Prefix                 |  ✅  |
|                 Menggunakan limit                 |  ❌  |
|                    Hanya Owner                    |  ✅  |
|                   Hanya Premium                   |  ❌  |
|                    Hanya Group                    |  ❌  |
|                 Hanya Admin Group                 |  ❌  |
|                Hanya Private Chat                 |  ❌  |
|                       Limit                       |  ∞   |
|                     Cooldown                      |  0   |
|                       Level                       |  0   |

## API Management

### #api

Kelola API keys dan settings.

```
#api [create|list|delete|rotate|settings]
```

### Generate API Key

#### Create New API Key
```
#api create --name "Integration_App" --permissions [read|write|admin]
```

Response:
```json
{
  "api_key": "wbs_live_1234567890abcdef",
  "api_secret": "secret_abcdef1234567890",
  "name": "Integration_App", 
  "permissions": ["read", "write"],
  "created_at": "2024-01-15T10:30:00Z",
  "expires_at": "2024-12-31T23:59:59Z"
}
```

#### List API Keys
```
#api list
```

#### Rotate API Key
```
#api rotate --key-id [key_id]
```

## API Endpoints

### Base URL
```
https://api.wibusoft.com/v1/
```

### Authentication

#### Header Authentication
```http
GET /messages
Authorization: Bearer wbs_live_1234567890abcdef
X-API-Secret: secret_abcdef1234567890
Content-Type: application/json
```

#### Query Parameter (Not Recommended)
```http
GET /messages?api_key=wbs_live_1234567890abcdef
```

## Core API Endpoints

### 📱 **Message Operations**

#### Send Message
```http
POST /messages/send
```

Request Body:
```json
{
  "to": "628123456789",
  "type": "text",
  "content": {
    "text": "Hello from API!"
  },
  "options": {
    "delay": 2,
    "quote_message_id": null,
    "disable_preview": false
  }
}
```

Response:
```json
{
  "success": true,
  "message_id": "msg_1234567890",
  "status": "sent",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

#### Send Media Message  
```http
POST /messages/send-media
```

Request Body:
```json
{
  "to": "628123456789",
  "type": "image",
  "media_url": "https://example.com/image.jpg",
  "caption": "Check this out!",
  "options": {
    "compress": true,
    "view_once": false
  }
}
```

#### Get Message Status
```http
GET /messages/{message_id}/status
```

Response:
```json
{
  "message_id": "msg_1234567890",
  "status": "delivered", 
  "delivered_at": "2024-01-15T10:30:05Z",
  "read_at": "2024-01-15T10:31:00Z",
  "recipient": "628123456789"
}
```

#### Message History
```http
GET /messages/history?limit=50&offset=0&chat_id=628123456789
```

### 👥 **Group Operations**

#### Get Group Info
```http
GET /groups/{group_id}
```

Response:
```json
{
  "group_id": "628123456789-1234567890",
  "name": "Test Group",
  "description": "API Test Group",
  "participants_count": 25,
  "admins": ["628111111111", "628222222222"],
  "created_at": "2024-01-01T00:00:00Z",
  "settings": {
    "messages_admin_only": false,
    "edit_group_info_admin_only": true
  }
}
```

#### Add Participant
```http
POST /groups/{group_id}/participants
```

Request Body:
```json
{
  "phone_numbers": ["628123456789", "628987654321"],
  "send_invitation": true
}
```

#### Remove Participant
```http
DELETE /groups/{group_id}/participants/{phone_number}
```

#### Group Settings
```http
PUT /groups/{group_id}/settings
```

Request Body:
```json
{
  "name": "Updated Group Name",
  "description": "Updated description",
  "messages_admin_only": true,
  "edit_group_info_admin_only": true
}
```

### 📊 **Analytics & Stats**

#### Bot Statistics
```http
GET /stats/bot
```

Response:
```json
{
  "messages_sent_today": 1250,
  "messages_received_today": 890,
  "active_chats": 45,
  "total_users": 2340,
  "active_users_7d": 890,
  "uptime_percentage": 99.8,
  "response_time_avg_ms": 245
}
```

#### User Analytics
```http
GET /analytics/users?period=7d&group_by=day
```

Response:
```json
{
  "period": "7d",
  "data": [
    {
      "date": "2024-01-15",
      "new_users": 45,
      "active_users": 234,
      "messages_sent": 1250
    }
  ]
}
```

#### Command Usage
```http
GET /analytics/commands?limit=10
```

Response:
```json
{
  "top_commands": [
    {
      "command": "ai",
      "usage_count": 450,
      "success_rate": 98.2
    },
    {
      "command": "download",
      "usage_count": 320,
      "success_rate": 95.8
    }
  ]
}
```

### 🔧 **Configuration**

#### Get Bot Settings
```http
GET /settings
```

#### Update Settings
```http
PUT /settings
```

Request Body:
```json
{
  "auto_reply": true,
  "welcome_message": "Welcome to our bot!",
  "business_hours": {
    "enabled": true,
    "timezone": "Asia/Jakarta",
    "schedule": {
      "monday": {"start": "09:00", "end": "17:00"},
      "tuesday": {"start": "09:00", "end": "17:00"}
    }
  }
}
```

## Advanced API Features

### 🔄 **Webhooks**

#### Configure Webhook
```
#api webhook set https://your-app.com/webhook
```

#### Webhook Events
```json
{
  "event": "message_received",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "message_id": "msg_1234567890",
    "from": "628123456789",
    "chat_type": "private",
    "message_type": "text",
    "content": {
      "text": "Hello bot!"
    }
  }
}
```

#### Webhook Security
```http
POST /webhook-endpoint
X-Wibusoft-Signature: sha256=abcdef1234567890
X-Wibusoft-Timestamp: 1705312200
```

Verify signature:
```python
import hmac
import hashlib

def verify_webhook(payload, signature, secret):
    expected = hmac.new(
        secret.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(f"sha256={expected}", signature)
```

### 📡 **Real-time WebSocket**

#### WebSocket Connection
```javascript
const ws = new WebSocket('wss://api.wibusoft.com/v1/ws');

ws.onopen = function(event) {
    // Authenticate
    ws.send(JSON.stringify({
        type: 'auth',
        token: 'wbs_live_1234567890abcdef'
    }));
};

ws.onmessage = function(event) {
    const data = JSON.parse(event.data);
    console.log('Real-time event:', data);
};
```

#### WebSocket Events
```json
{
  "type": "message_received",
  "data": {
    "from": "628123456789",
    "message": "Hello!",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

### 🔍 **GraphQL API**

#### GraphQL Endpoint
```
https://api.wibusoft.com/v1/graphql
```

#### Query Example
```graphql
query GetChatHistory($chatId: String!, $limit: Int!) {
  messages(chatId: $chatId, limit: $limit) {
    edges {
      node {
        id
        content
        timestamp
        sender {
          phone
          name
        }
        type
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

#### Mutation Example
```graphql
mutation SendMessage($input: SendMessageInput!) {
  sendMessage(input: $input) {
    messageId
    status
    timestamp
    errors {
      field
      message
    }
  }
}
```

## SDK & Libraries

### 🐍 **Python SDK**

#### Installation
```bash
pip install wibusoft-python
```

#### Usage
```python
from wibusoft import WibusoftClient

client = WibusoftClient(
    api_key="wbs_live_1234567890abcdef",
    api_secret="secret_abcdef1234567890"
)

# Send message
response = client.messages.send(
    to="628123456789",
    text="Hello from Python!"
)

# Get bot stats
stats = client.stats.get_bot_stats()
```

### 📱 **Node.js SDK**

#### Installation
```bash
npm install wibusoft-node
```

#### Usage
```javascript
const { WibusoftClient } = require('wibusoft-node');

const client = new WibusoftClient({
    apiKey: 'wbs_live_1234567890abcdef',
    apiSecret: 'secret_abcdef1234567890'
});

// Send message
const message = await client.messages.send({
    to: '628123456789',
    text: 'Hello from Node.js!'
});

// Listen to webhook events
client.webhook.on('message_received', (data) => {
    console.log('New message:', data);
});
```

### 🔧 **PHP SDK**

#### Installation
```bash
composer require wibusoft/wibusoft-php
```

#### Usage
```php
<?php
use Wibusoft\WibusoftClient;

$client = new WibusoftClient([
    'api_key' => 'wbs_live_1234567890abcdef',
    'api_secret' => 'secret_abcdef1234567890'
]);

// Send message
$response = $client->messages->send([
    'to' => '628123456789',
    'text' => 'Hello from PHP!'
]);
```

## Rate Limits

### 📊 **API Rate Limits**

#### Standard Limits
```yaml
rate_limits:
  messages_per_minute: 60
  messages_per_hour: 1000
  messages_per_day: 10000
  
  api_requests_per_minute: 100
  api_requests_per_hour: 5000
  
  webhook_events_per_minute: 200
```

#### Headers
```http
HTTP/1.1 200 OK
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1705312800
X-RateLimit-Window: 60
```

#### Rate Limit Response
```http
HTTP/1.1 429 Too Many Requests
```

```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Try again in 30 seconds.",
    "retry_after": 30
  }
}
```

## Error Handling

### ❌ **Error Codes**

#### Standard HTTP Status Codes
- **200**: OK
- **201**: Created  
- **400**: Bad Request
- **401**: Unauthorized
- **403**: Forbidden
- **404**: Not Found
- **429**: Too Many Requests
- **500**: Internal Server Error

#### Custom Error Responses
```json
{
  "error": {
    "code": "INVALID_PHONE_NUMBER",
    "message": "The phone number format is invalid",
    "field": "to",
    "details": {
      "expected_format": "+62XXXXXXXXX",
      "received": "08123456789"
    }
  }
}
```

### 🔄 **Retry Logic**

#### Exponential Backoff
```python
import time
import random

def api_call_with_retry(func, max_retries=3):
    for attempt in range(max_retries):
        try:
            return func()
        except RateLimitError as e:
            if attempt == max_retries - 1:
                raise
            
            wait_time = (2 ** attempt) + random.uniform(0, 1)
            time.sleep(wait_time)
```

## Security Best Practices

### 🔒 **API Security**

#### Secure API Key Storage
```bash
# Environment variables
export WIBUSOFT_API_KEY="wbs_live_1234567890abcdef"
export WIBUSOFT_API_SECRET="secret_abcdef1234567890"
```

#### IP Whitelisting
```
#api whitelist add 192.168.1.100
#api whitelist add 10.0.0.0/24
```

#### HTTPS Only
All API calls must use HTTPS. HTTP requests will be rejected.

#### Request Signing
```python
import hmac
import hashlib
import time

def sign_request(payload, secret):
    timestamp = str(int(time.time()))
    signature_payload = f"{timestamp}.{payload}"
    
    signature = hmac.new(
        secret.encode(),
        signature_payload.encode(),
        hashlib.sha256
    ).hexdigest()
    
    return {
        'X-Wibusoft-Timestamp': timestamp,
        'X-Wibusoft-Signature': f"sha256={signature}"
    }
```

## Testing & Development

### 🧪 **Sandbox Environment**

#### Sandbox API
```
https://sandbox-api.wibusoft.com/v1/
```

#### Test API Keys
```
API Key: wbs_test_1234567890abcdef
API Secret: test_secret_abcdef1234567890
```

### 📋 **API Documentation**

#### Interactive Documentation
```
https://api.wibusoft.com/docs/
```
- Try API calls directly from browser
- Real-time response examples
- Code generation untuk berbagai languages

#### OpenAPI Specification
```
https://api.wibusoft.com/v1/openapi.json
```

## Enterprise Features

### 🏢 **Enterprise API**

#### Dedicated Infrastructure
- Private API endpoints
- Dedicated rate limits
- SLA guarantees
- Priority support

#### Advanced Security
- mTLS authentication
- Custom IP whitelisting
- VPN integration
- SOC2 compliance

#### Monitoring & Analytics
- Real-time API monitoring
- Custom dashboards
- SLA reporting
- Performance analytics

## Note

:::tip API Best Practices
- Always use HTTPS untuk API calls
- Implement proper error handling dan retry logic
- Store API keys securely (environment variables)
- Monitor rate limits dan usage patterns
- Use webhooks untuk real-time events
:::

:::warning Rate Limits
- Monitor your usage dengan API headers
- Implement exponential backoff untuk retries
- Cache responses when possible
- Use bulk operations untuk efficiency
:::

:::info Getting Started
1. Generate API key dari dashboard
2. Read API documentation thoroughly
3. Start dengan sandbox environment
4. Test dengan small volume dulu
5. Monitor dan optimize based on usage
:::