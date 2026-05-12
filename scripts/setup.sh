#!/usr/bin/env bash
# Setup Script for AR Clothing Zone About Page
# Location: scripts/setup.sh
# Usage: bash scripts/setup.sh

echo "🚀 AR Clothing Zone - Setup Script"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# App URLs
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SHOP_URL=/shop
NEXT_PUBLIC_PRODUCTS_URL=/products
NEXT_PUBLIC_CUSTOM_DESIGN_URL=/custom-design
NEXT_PUBLIC_CONTACT_URL=/contact

# Social Media Links
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/arclothingzone
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/arclothingzone
NEXT_PUBLIC_TIKTOK_URL=https://www.tiktok.com/@arclothingzone

# Contact Information
NEXT_PUBLIC_EMAIL=info@arclothingzone.com
NEXT_PUBLIC_PHONE=+977-1-4123456

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=

# Sentry Error Tracking (Optional)
NEXT_PUBLIC_SENTRY_DSN=
EOF
    echo "✅ Created .env.local"
    echo "⚠️  Update .env.local with your actual URLs"
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "📚 Next steps:"
echo "  1. Update .env.local with your actual URLs"
echo "  2. Run: npm run dev"
echo "  3. Visit: http://localhost:3000/about"
echo ""
echo "📖 Documentation:"
echo "  - Quick Start: QUICK_START.md"
echo "  - Setup Guide: ABOUT_SETUP.md"
echo "  - Improvements: IMPROVEMENTS.md"
echo "  - Component Docs: components/COMPONENT_DOCS.md"
echo ""
