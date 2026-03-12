#!/bin/bash

# One-click startup script for the portfolio project

echo "🚀 Starting Portfolio Local Setup..."

# 1. Check if node_modules exists, if not, install dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 node_modules not found. Installing dependencies..."
    npm install
else
    echo "✅ node_modules found. Skipping install..."
fi

# 2. Start the development server
echo "✨ Starting Next.js development server..."
npm run dev
