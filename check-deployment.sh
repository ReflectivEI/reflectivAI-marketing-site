#!/bin/bash

echo "🔍 Checking GitHub Pages deployment status..."
echo ""
echo "Repository: https://github.com/ReflectivEI/reflectivAI-marketing-site"
echo "Live Site: https://reflectivei.github.io/reflectivAI-marketing-site/"
echo "Actions: https://github.com/ReflectivEI/reflectivAI-marketing-site/actions"
echo ""
echo "Checking if site is accessible..."

STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://reflectivei.github.io/reflectivAI-marketing-site/)

if [ "$STATUS" = "200" ]; then
    echo "✅ Site is accessible (HTTP $STATUS)"
    echo ""
    echo "Checking for latest features..."
    
    # Check for Alora
    if curl -s https://reflectivei.github.io/reflectivAI-marketing-site/ | grep -q "Alora"; then
        echo "✅ Alora AI Assistant found"
    else
        echo "⏳ Alora AI Assistant not yet deployed (workflow may still be running)"
    fi
    
    # Check for Platform Showcase
    if curl -s https://reflectivei.github.io/reflectivAI-marketing-site/ | grep -q "Platform Showcase"; then
        echo "✅ Platform Showcase found"
    else
        echo "⏳ Platform Showcase not yet deployed"
    fi
    
    # Check for Animated Stats
    if curl -s https://reflectivei.github.io/reflectivAI-marketing-site/ | grep -q "Accuracy Rate"; then
        echo "✅ Animated Statistics found"
    else
        echo "⏳ Animated Statistics not yet deployed"
    fi
    
else
    echo "❌ Site returned HTTP $STATUS"
fi

echo ""
echo "📊 Deployment typically takes 2-3 minutes after push."
echo "🔄 If features are missing, wait a moment and run this script again."
