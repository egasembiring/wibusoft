# Plugin Development

Comprehensive plugin development framework untuk extending bot functionality dengan custom plugins.

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

### #plugin

Kelola custom plugins dan development environment.

```
#plugin [create|install|uninstall|list|enable|disable|logs]
```

### Plugin Management

#### Create New Plugin
```
#plugin create "Weather Bot" --template basic
```
Membuat plugin boilerplate dengan struktur dasar.

#### Install Plugin
```
#plugin install https://github.com/user/awesome-plugin.git
#plugin install ./local-plugin.zip
```

#### Plugin Marketplace
```
#plugin marketplace search "weather"
#plugin marketplace install "weather-pro-v2"
```

## Plugin Architecture

### 🏗️ **Plugin Structure**

#### Basic Plugin Template
```
my-awesome-plugin/
├── plugin.json          # Plugin metadata
├── index.js             # Main plugin file
├── commands/            # Command definitions
│   ├── main-command.js
│   └── sub-command.js
├── handlers/            # Event handlers
│   ├── message.js
│   └── group.js
├── utils/               # Utility functions
│   └── helpers.js
├── config/              # Configuration files
│   └── settings.json
├── assets/              # Static assets
│   └── images/
├── tests/               # Unit tests
│   └── plugin.test.js
├── docs/                # Documentation
│   └── README.md
└── package.json         # Dependencies
```

#### Plugin Metadata (plugin.json)
```json
{
  "name": "awesome-weather-bot",
  "version": "1.2.0",
  "description": "Advanced weather information plugin",
  "author": "Developer Name",
  "license": "MIT",
  "homepage": "https://github.com/user/awesome-plugin",
  
  "wibusoft": {
    "minVersion": "2.0.0",
    "compatibility": ["premium", "nitro"],
    "permissions": [
      "send_messages",
      "receive_messages", 
      "access_location",
      "external_api"
    ]
  },
  
  "main": "index.js",
  "commands": [
    {
      "name": "weather",
      "aliases": ["cuaca", "weather-info"],
      "description": "Get weather information",
      "usage": "#weather [location]",
      "cooldown": 5000,
      "category": "utility"
    }
  ],
  
  "events": ["message", "group_join", "schedule"],
  "dependencies": {
    "axios": "^1.6.0",
    "moment": "^2.29.0"
  }
}
```

### 🔌 **Plugin API**

#### Core Plugin Class
```javascript
// index.js
const { WibusoftPlugin } = require('wibusoft-sdk');

class WeatherPlugin extends WibusoftPlugin {
  constructor() {
    super();
    this.name = 'weather-bot';
    this.version = '1.2.0';
  }
  
  async onLoad() {
    this.log('Weather plugin loaded successfully!');
    await this.initializeWeatherAPI();
  }
  
  async onUnload() {
    this.log('Weather plugin unloaded');
    this.cleanup();
  }
  
  async initializeWeatherAPI() {
    this.weatherAPI = new WeatherAPI({
      apiKey: this.config.get('weather_api_key'),
      timeout: 10000
    });
  }
}

module.exports = WeatherPlugin;
```

#### Command Handler
```javascript
// commands/weather.js
const { Command } = require('wibusoft-sdk');

class WeatherCommand extends Command {
  constructor() {
    super({
      name: 'weather',
      aliases: ['cuaca', 'weather-info'],
      description: 'Get current weather information',
      usage: '#weather [location]',
      cooldown: 5000,
      category: 'utility'
    });
  }
  
  async execute(message, args) {
    const location = args.join(' ') || 'Jakarta';
    
    try {
      this.sendTyping(message.chatId);
      
      const weather = await this.plugin.weatherAPI.getCurrentWeather(location);
      
      const response = this.formatWeatherResponse(weather);
      
      await this.reply(message, response);
      
    } catch (error) {
      this.handleError(message, error);
    }
  }
  
  formatWeatherResponse(weather) {
    return `🌤️ **Weather in ${weather.location}**\n\n` +
           `🌡️ Temperature: ${weather.temperature}°C\n` +
           `💨 Wind: ${weather.wind.speed} km/h ${weather.wind.direction}\n` +
           `💧 Humidity: ${weather.humidity}%\n` +
           `☁️ Conditions: ${weather.conditions}\n` +
           `🔮 Forecast: ${weather.forecast}`;
  }
}

module.exports = WeatherCommand;
```

#### Event Handler
```javascript
// handlers/message.js
const { EventHandler } = require('wibusoft-sdk');

class MessageHandler extends EventHandler {
  constructor() {
    super('message');
  }
  
  async handle(event) {
    const { message, user, chat } = event;
    
    // Auto weather detection
    if (this.containsWeatherQuery(message.text)) {
      await this.suggestWeatherCommand(message);
    }
    
    // Location sharing handler
    if (message.location) {
      await this.handleLocationShare(message);
    }
  }
  
  containsWeatherQuery(text) {
    const weatherKeywords = ['cuaca', 'weather', 'hujan', 'panas', 'dingin'];
    return weatherKeywords.some(keyword => 
      text.toLowerCase().includes(keyword)
    );
  }
  
  async suggestWeatherCommand(message) {
    const suggestion = '🌤️ Ingin tahu cuaca? Coba gunakan `#weather [lokasi]`';
    await this.sendMessage(message.chatId, suggestion);
  }
}

module.exports = MessageHandler;
```

## Advanced Plugin Features

### 🛠️ **Development Tools**

#### Plugin SDK
```javascript
const WibusoftSDK = require('wibusoft-sdk');

// Available SDK modules
const {
  WibusoftPlugin,    // Base plugin class
  Command,           // Command handler
  EventHandler,      // Event system
  Database,          // Database operations
  Cache,             // Caching system
  HTTP,              // HTTP client
  Utils,             // Utility functions
  Logger,            // Logging system
  Config,            // Configuration manager
  Scheduler,         // Task scheduling
  AI,                // AI services integration
  Media              // Media processing
} = WibusoftSDK;
```

#### Development Environment
```
#plugin dev-mode enable
```

Development features:
- Hot reload untuk plugin changes
- Debug logging
- Error stack traces
- Performance monitoring
- Test environment isolation

#### Plugin Testing Framework
```javascript
// tests/weather.test.js
const { PluginTester } = require('wibusoft-sdk/testing');
const WeatherPlugin = require('../index.js');

describe('Weather Plugin', () => {
  let plugin;
  let tester;
  
  beforeEach(() => {
    plugin = new WeatherPlugin();
    tester = new PluginTester(plugin);
  });
  
  test('should respond to weather command', async () => {
    const result = await tester.sendCommand('weather', ['Jakarta']);
    
    expect(result.success).toBe(true);
    expect(result.response).toContain('Weather in Jakarta');
    expect(result.response).toContain('Temperature:');
  });
  
  test('should handle invalid location', async () => {
    const result = await tester.sendCommand('weather', ['InvalidCity123']);
    
    expect(result.success).toBe(false);
    expect(result.error).toContain('Location not found');
  });
});
```

### 🔗 **External Integrations**

#### API Integration Helper
```javascript
const { HTTP, Config } = require('wibusoft-sdk');

class WeatherAPI {
  constructor(config) {
    this.http = new HTTP({
      baseURL: 'https://api.openweathermap.org/data/2.5',
      timeout: 10000,
      headers: {
        'User-Agent': 'WibusoftBot/1.0'
      }
    });
    
    this.apiKey = config.apiKey;
  }
  
  async getCurrentWeather(location) {
    try {
      const response = await this.http.get('/weather', {
        params: {
          q: location,
          appid: this.apiKey,
          units: 'metric'
        }
      });
      
      return this.parseWeatherData(response.data);
      
    } catch (error) {
      throw new Error(`Weather API error: ${error.message}`);
    }
  }
  
  parseWeatherData(data) {
    return {
      location: data.name,
      temperature: Math.round(data.main.temp),
      conditions: data.weather[0].description,
      humidity: data.main.humidity,
      wind: {
        speed: data.wind.speed,
        direction: this.getWindDirection(data.wind.deg)
      },
      forecast: this.generateForecast(data)
    };
  }
}
```

#### Database Integration
```javascript
const { Database } = require('wibusoft-sdk');

class WeatherDatabase {
  constructor() {
    this.db = new Database('weather_plugin');
  }
  
  async saveUserPreferences(userId, preferences) {
    await this.db.collection('user_prefs').update(
      { userId },
      { 
        userId,
        defaultLocation: preferences.location,
        units: preferences.units,
        notifications: preferences.notifications,
        updatedAt: new Date()
      },
      { upsert: true }
    );
  }
  
  async getUserPreferences(userId) {
    return await this.db.collection('user_prefs').findOne({ userId });
  }
  
  async logWeatherRequest(userId, location, timestamp) {
    await this.db.collection('requests').insert({
      userId,
      location,
      timestamp,
      ip: this.getClientIP()
    });
  }
}
```

### 📊 **Plugin Analytics**

#### Usage Tracking
```javascript
const { Analytics } = require('wibusoft-sdk');

class PluginAnalytics {
  constructor() {
    this.analytics = new Analytics('weather_plugin');
  }
  
  trackCommand(commandName, userId, success = true) {
    this.analytics.track('command_executed', {
      command: commandName,
      userId,
      success,
      timestamp: Date.now()
    });
  }
  
  trackAPICall(endpoint, responseTime, success) {
    this.analytics.track('api_call', {
      endpoint,
      responseTime,
      success,
      timestamp: Date.now()
    });
  }
  
  async getUsageStats(period = '30d') {
    return await this.analytics.query({
      event: 'command_executed',
      timeframe: period,
      group_by: 'command'
    });
  }
}
```

## Plugin Marketplace

### 🏪 **Plugin Discovery**

#### Browse Marketplace
```
#plugin marketplace browse --category [utility|entertainment|business|ai|integration]
```

#### Featured Plugins
```yaml
featured_plugins:
  ai_assistant:
    name: "Advanced AI Assistant"
    description: "ChatGPT-powered conversation bot"
    author: "WibusoftTeam"
    rating: 4.8
    downloads: 12500
    
  social_media_manager:
    name: "Social Media Manager"
    description: "Cross-platform posting and scheduling"
    author: "DevStudio"
    rating: 4.6
    downloads: 8900
    
  ecommerce_integration:
    name: "E-Commerce Integration"
    description: "Shopify, WooCommerce, Tokopedia integration"
    author: "CommerceDev"
    rating: 4.7
    downloads: 6700
```

#### Plugin Reviews & Ratings
```
#plugin marketplace review "weather-pro-v2" --rating 5 --comment "Excellent plugin, very accurate!"
```

### 📦 **Plugin Distribution**

#### Publishing Workflow
```bash
# Build plugin package
wibusoft-cli build

# Run tests
wibusoft-cli test

# Validate plugin
wibusoft-cli validate

# Publish to marketplace
wibusoft-cli publish --version 1.2.0 --notes "Added forecast feature"
```

#### Plugin Versioning
```yaml
version_management:
  semantic_versioning: true
  automatic_updates: optional
  breaking_change_notifications: true
  rollback_support: true
  
  update_channels:
    stable: "Production ready releases"
    beta: "Testing releases with new features"
    alpha: "Cutting edge, may have bugs"
```

## Security & Compliance

### 🔒 **Plugin Security**

#### Permission System
```yaml
plugin_permissions:
  send_messages: "Send messages to chats"
  receive_messages: "Receive and process messages"
  access_contacts: "Access user contact information"
  access_location: "Access user location data"
  external_api: "Make external API calls"
  file_system: "Read/write files"
  network: "Network access"
  database: "Database access"
  ai_services: "AI service integration"
  
  dangerous_permissions:
    - admin_privileges
    - system_access
    - user_impersonation
    - billing_access
```

#### Security Scanning
```javascript
// Automatic security checks
const securityChecks = {
  codeScanning: 'Static code analysis for vulnerabilities',
  dependencyCheck: 'Check for known vulnerable dependencies',
  permissionAudit: 'Verify requested permissions are necessary',
  dataHandling: 'Ensure proper data encryption and handling',
  apiSecurity: 'Validate external API integrations'
};
```

#### Sandboxing
```yaml
plugin_sandbox:
  isolated_execution: true
  resource_limits:
    memory: "100MB per plugin"
    cpu: "10% max usage"
    network: "rate limited"
    storage: "50MB max"
    
  restricted_access:
    - no_system_commands
    - no_file_system_root_access
    - no_network_admin_functions
    - no_other_plugin_access
```

### 📋 **Code Review Process**

#### Automated Review
```yaml
automated_checks:
  code_quality: "ESLint, JSHint analysis"
  security_scan: "OWASP vulnerability check"  
  performance_test: "Memory and CPU usage profiling"
  compatibility_test: "Cross-version compatibility"
  documentation_check: "Required documentation present"
```

#### Manual Review
```yaml
manual_review_criteria:
  code_readability: "Clean, well-commented code"
  functionality: "Plugin works as described"
  user_experience: "Intuitive and helpful"
  security_practices: "No obvious security flaws"
  compliance: "Follows plugin guidelines"
```

## Best Practices

### ✅ **Development Guidelines**

#### Code Quality
```javascript
// Good practices example
class ExamplePlugin extends WibusoftPlugin {
  constructor() {
    super();
    this.validateConfig();
    this.initializeLogger();
  }
  
  validateConfig() {
    const required = ['api_key', 'default_location'];
    required.forEach(key => {
      if (!this.config.has(key)) {
        throw new Error(`Missing required config: ${key}`);
      }
    });
  }
  
  async safeAPICall(endpoint, params) {
    try {
      const result = await this.http.get(endpoint, params);
      this.analytics.trackSuccess(endpoint);
      return result;
    } catch (error) {
      this.logger.error(`API call failed: ${error.message}`);
      this.analytics.trackError(endpoint, error);
      throw error;
    }
  }
}
```

#### Error Handling
```javascript
// Comprehensive error handling
async handleCommand(message, args) {
  try {
    await this.processCommand(message, args);
  } catch (error) {
    if (error instanceof ValidationError) {
      await this.sendHelpMessage(message);
    } else if (error instanceof APIError) {
      await this.sendErrorMessage(message, 'Service temporarily unavailable');
    } else {
      this.logger.error('Unexpected error:', error);
      await this.sendErrorMessage(message, 'Something went wrong');
    }
  }
}
```

### 📚 **Documentation Requirements**

#### README Template
```markdown
# Plugin Name

Brief description of what your plugin does.

## Features

- Feature 1
- Feature 2
- Feature 3

## Installation

\`\`\`bash
#plugin install plugin-name
\`\`\`

## Configuration

\`\`\`json
{
  "api_key": "your-api-key",
  "default_option": "value"
}
\`\`\`

## Commands

### #command1
Description of command 1
Usage: `#command1 [args]`

### #command2  
Description of command 2
Usage: `#command2 [args]`

## Support

- GitHub Issues: [link]
- Documentation: [link]
- Contact: email@example.com
```

## Enterprise Plugin Features

### 🏢 **Enterprise Development**

#### Private Plugin Repository
```yaml
enterprise_features:
  private_marketplace: "Internal plugin distribution"
  custom_approval_workflow: "Company-specific review process"  
  centralized_management: "IT admin controls"
  compliance_reporting: "Audit trails and reports"
  
  enterprise_sdk:
    single_sign_on: "Corporate SSO integration"
    ldap_integration: "Directory service integration"
    advanced_permissions: "Role-based access control"
    custom_branding: "Company branding in plugins"
```

#### Plugin Analytics Dashboard
```yaml
enterprise_analytics:
  usage_metrics: "Detailed plugin usage statistics"
  performance_monitoring: "Real-time performance tracking"
  security_alerts: "Security incident notifications"
  compliance_reporting: "Regulatory compliance reports"
  cost_analysis: "Plugin development and maintenance costs"
```

## Failed Command

Penyebab error umum:
- **Plugin compilation error**: Syntax errors in plugin code
- **Missing dependencies**: Required packages not installed
- **Permission denied**: Insufficient permissions for plugin operation
- **API integration failure**: External service integration issues
- **Resource limits exceeded**: Plugin using too much memory/CPU

## Note

:::tip Development Success
- Start dengan simple plugin dan gradually add complexity
- Test thoroughly dengan different scenarios
- Follow security best practices from the beginning
- Document everything for future maintenance
:::

:::warning Security Considerations
- Never hardcode API keys atau sensitive data
- Validate all user inputs thoroughly
- Use proper error handling to prevent information disclosure
- Regular security audits untuk production plugins
:::

:::info Plugin Ecosystem
- Contribute to open source plugins
- Share knowledge dengan community
- Collaborate dengan other developers
- Stay updated dengan latest SDK features
:::