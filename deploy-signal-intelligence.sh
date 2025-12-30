#!/bin/bash

# Deploy Signal Intelligence HTML file and header updates

echo "🚀 Deploying Signal Intelligence updates..."

# Check if HTML file exists
if [ ! -f "public/signal-intelligence-learn-more.html" ]; then
    echo "❌ Error: signal-intelligence-learn-more.html not found!"
    exit 1
fi

echo "✅ HTML file found"

# Add the HTML file to git
echo "📦 Adding HTML file to git..."
git add public/signal-intelligence-learn-more.html

# Check git status
echo "📊 Git status:"
git status --short

# Commit if there are changes
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit for HTML file (already committed)"
else
    echo "💾 Committing HTML file..."
    git commit -m "Add Signal Intelligence standalone HTML documentation

- Complete framework documentation in standalone HTML format
- Self-contained with embedded CSS styling
- Includes all 8 core capabilities with metrics
- Professional responsive design
- Accessible from header Learn More dropdown"
fi

# Push to GitHub
echo "🚢 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully deployed to GitHub!"
    echo "🌐 Site will auto-deploy to: https://reflectivei.github.io/reflectivAI-marketing-site/"
    echo "📄 HTML file will be available at: /signal-intelligence-learn-more.html"
else
    echo "❌ Push failed. Please check your git configuration."
    exit 1
fi
