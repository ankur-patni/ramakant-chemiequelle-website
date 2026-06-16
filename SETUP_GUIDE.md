# ASP.NET Core REST API Setup Guide

This guide will help you set up and run the Chemiequelle REST API.

## Quick Start

### 1. Prerequisites
- .NET 8.0 SDK (already installed)
- PostgreSQL 12+ (or Docker)
- Visual Studio Code or Visual Studio

### 2. Database Setup

#### Option A: Using Docker (Recommended)
```bash
cd api
docker-compose up -d
```

This starts:
- PostgreSQL on port 5432 (user: postgres, password: postgres)
- PgAdmin on port 5050 (email: admin@chemiequelle.com, password: admin)

#### Option B: Manual PostgreSQL Setup
1. Install PostgreSQL from https://www.postgresql.org/
2. Create a database:
```sql
CREATE DATABASE chemiequelle_db;
```

### 3. Configure Application Settings

Edit `api/appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=chemiequelle_db;Username=postgres;Password=postgres"
  },
  "JwtSettings": {
    "SecretKey": "your-super-secret-key-change-this-in-production-at-least-32-characters-long",
    "Issuer": "ChemieuelleAPI",
    "Audience": "ChemieuelleClient",
    "ExpirationMinutes": 60
  },
  "SmtpSettings": {
    "Host": "smtp.gmail.com",
    "Port": 587,
    "Username": "your-email@gmail.com",
    "Password": "your-app-password",
    "EnableSsl": true,
    "FromAddress": "noreply@chemiequelle.com",
    "FromName": "Chemiequelle"
  }
}
```

### 4. Install Dependencies

```bash
cd api
dotnet restore
```

### 5. Create Database

```bash
dotnet ef database update
```

### 6. Run the API

```bash
dotnet run
```

The API will start at:
- HTTP: http://localhost:5000
- HTTPS: https://localhost:5001
- Swagger: https://localhost:5001 (displays Swagger UI)

## API Documentation

### Available Endpoints

#### Authentication
- **POST** `/api/auth/login` - Login and get JWT token
  ```json
  {
    "username": "user",
    "password": "password"
  }
  ```

- **POST** `/api/auth/register` - Create new user
  ```json
  {
    "username": "newuser",
    "password": "password"
  }
  ```

- **GET** `/api/auth/{id}` - Get user details (requires JWT token)

#### Health Check
- **GET** `/api/health/check` - Check if API is running
- **GET** `/api/health/secure-check` - Check API with authentication required

### Authentication with JWT

1. Login to get token:
```bash
curl -X POST https://localhost:5001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"user","password":"password"}'
```

2. Use token in subsequent requests:
```bash
curl -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  https://localhost:5001/api/auth/1
```

## Configuration Details

### JWT Settings
- **SecretKey**: Used to sign/verify tokens (must be at least 32 characters in production)
- **Issuer**: Token issuer name (ChemieuelleAPI)
- **Audience**: Token audience (ChemieuelleClient)
- **ExpirationMinutes**: Token validity duration (60 minutes)

### CORS Settings
Default allowed origins:
- http://localhost:3000 (React development)
- http://localhost:5173 (Vite development)
- https://localhost:5173 (Vite HTTPS)

Edit in `Program.cs` to add more origins.

### SMTP Settings
Configure for email sending:
- **Host**: SMTP server address
- **Port**: SMTP port (typically 587 for TLS)
- **Username**: Email account
- **Password**: Email account password (use app-specific password for Gmail)
- **EnableSsl**: Use TLS encryption
- **FromAddress**: Sender email address
- **FromName**: Sender display name

## Database Migrations

### Create a New Migration
```bash
dotnet ef migrations add MigrationName
```

### Apply Migrations
```bash
dotnet ef database update
```

### Revert Last Migration
```bash
dotnet ef migrations remove
```

## Project Structure

```
api/
├── Controllers/              # API endpoints
│   ├── AuthController.cs    # Authentication endpoints
│   └── HealthController.cs  # Health check endpoints
├── Models/                   # Data models
│   ├── User.cs             # User entity
│   └── ApiResponse.cs      # Response models
├── Services/                # Business logic
│   ├── EmailService.cs     # Email sending
│   ├── JwtService.cs       # JWT token generation
│   └── Interfaces/         # Service interfaces
├── Data/                    # Database context
│   └── ApplicationDbContext.cs
├── Validators/             # FluentValidation rules
├── Middleware/             # Custom middleware
├── Properties/             # Launch settings
├── bin/                    # Build output
├── obj/                    # Build objects
├── ChemieuelleApi.csproj  # Project file
├── Program.cs             # Application entry point
├── appsettings.json       # Configuration
├── appsettings.Development.json
├── docker-compose.yml     # Docker Compose file
└── README.md             # Project README
```

## Development Tips

### Logging
- Logs are written to `logs/` directory
- Daily rolling files are created automatically
- Configure log level in `appsettings.json`

### Database Browser
If using Docker, access PgAdmin:
- URL: http://localhost:5050
- Email: admin@chemiequelle.com
- Password: admin

### Adding New Endpoints
1. Create controller in `Controllers/`
2. Add models to `Models/`
3. Add services if needed
4. Use dependency injection in constructor
5. Endpoints automatically appear in Swagger UI

### Adding Authentication to Endpoints
Use the `[Authorize]` attribute:
```csharp
[Authorize]
[HttpGet("{id}")]
public async Task<IActionResult> GetUser(int id)
{
    // Protected endpoint
}
```

## Troubleshooting

### Database Connection Failed
- Ensure PostgreSQL is running
- Check connection string in appsettings.json
- Verify username and password
- If using Docker: `docker-compose up -d`

### JWT Token Invalid
- Ensure SecretKey is the same in config
- Check token hasn't expired
- Verify format: `Authorization: Bearer TOKEN`

### CORS Errors
- Check if frontend URL is in AllowFrontend policy
- Update `Program.cs` line with `WithOrigins()`
- Ensure credentials are allowed if needed

### Port Already in Use
Change ports in `Properties/launchSettings.json`:
```json
"applicationUrl": "https://localhost:5001;http://localhost:5000"
```

### Building Issues
- Run `dotnet clean` then `dotnet build`
- Ensure .NET 8.0 SDK is installed: `dotnet --version`
- Delete `bin/` and `obj/` folders

## Security Checklist

⚠️ **Before Deployment:**
- [ ] Change JWT SecretKey to a strong, random value (at least 32 characters)
- [ ] Update SMTP settings with real credentials
- [ ] Change database password from default
- [ ] Review CORS policy - restrict to your domain
- [ ] Enable HTTPS only
- [ ] Set up proper logging and monitoring
- [ ] Configure environment variables for sensitive data
- [ ] Test all authentication flows
- [ ] Set up database backups

## Environment Variables

For production, use environment variables instead of appsettings.json:

```bash
export ConnectionStrings__DefaultConnection="your-connection-string"
export JwtSettings__SecretKey="your-secret-key"
export SmtpSettings__Password="your-password"
```

Or on Windows:
```powershell
$env:ConnectionStrings__DefaultConnection = "your-connection-string"
$env:JwtSettings__SecretKey = "your-secret-key"
```

## Support

For issues or questions, check:
1. PostgreSQL connection
2. .NET version compatibility
3. Configuration in appsettings.json
4. Application logs in `logs/` folder
5. Swagger documentation at `https://localhost:5001`

## License

This project is part of Chemiequelle.
