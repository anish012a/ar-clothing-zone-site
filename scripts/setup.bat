@echo off
REM Setup Script for AR Clothing Zone About Page
REM Location: scripts\setup.bat
REM Usage: scripts\setup.bat

title AR Clothing Zone - Setup Script
color 0A
echo.
echo ============================================
echo   AR Clothing Zone - Setup Script
echo ============================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    color 0C
    echo [ERROR] Node.js is not installed.
    echo Please install Node.js 16+ from https://nodejs.org/
    pause
    exit /b 1
)

color 0A
echo [OK] Node.js version:
node --version
echo.
echo [OK] npm version:
npm --version
echo.

REM Check if .env.local exists
if not exist .env.local (
    echo [INFO] Creating .env.local file...
    (
        echo # App URLs
        echo NEXT_PUBLIC_APP_URL=http://localhost:3000
        echo NEXT_PUBLIC_SHOP_URL=/shop
        echo NEXT_PUBLIC_PRODUCTS_URL=/products
        echo NEXT_PUBLIC_CUSTOM_DESIGN_URL=/custom-design
        echo NEXT_PUBLIC_CONTACT_URL=/contact
        echo.
        echo # Social Media Links
        echo NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/arclothingzone
        echo NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/arclothingzone
        echo NEXT_PUBLIC_TIKTOK_URL=https://www.tiktok.com/@arclothingzone
        echo.
        echo # Contact Information
        echo NEXT_PUBLIC_EMAIL=info@arclothingzone.com
        echo NEXT_PUBLIC_PHONE=+977-1-4123456
        echo.
        echo # Google Analytics (Optional)
        echo NEXT_PUBLIC_GA_ID=
        echo.
        echo # Sentry Error Tracking (Optional)
        echo NEXT_PUBLIC_SENTRY_DSN=
    ) > .env.local
    echo [OK] Created .env.local
    echo [WARNING] Update .env.local with your actual URLs
) else (
    echo [OK] .env.local already exists
)

echo.
echo [INFO] Installing dependencies...
call npm install

echo.
color 0A
echo ============================================
echo [OK] Setup complete!
echo ============================================
echo.
echo Next steps:
echo   1. Update .env.local with your actual URLs
echo   2. Run: npm run dev
echo   3. Visit: http://localhost:3000/about
echo.
echo Documentation:
echo   - Quick Start: QUICK_START.md
echo   - Setup Guide: ABOUT_SETUP.md
echo   - Improvements: IMPROVEMENTS.md
echo   - Component Docs: components\COMPONENT_DOCS.md
echo.
pause
