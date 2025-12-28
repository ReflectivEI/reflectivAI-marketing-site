#!/bin/bash

# Script to push ReflectivAI Marketing Site to GitHub
# Usage: ./push-to-github.sh YOUR_GITHUB_TOKEN

if [ -z "$1" ]; then
  echo "Error: GitHub token required"
  echo "Usage: ./push-to-github.sh YOUR_GITHUB_TOKEN"
  echo ""
  echo "To create a token:"
  echo "1. Go to https://github.com/settings/tokens"
  echo "2. Click 'Generate new token (classic)'"
  echo "3. Give it 'repo' permissions"
  echo "4. Copy the token and run: ./push-to-github.sh YOUR_TOKEN"
  exit 1
fi

GITHUB_TOKEN=$1
REPO_URL="https://${GITHUB_TOKEN}@github.com/ReflectivEI/reflectivAI-marketing-site.git"

echo "Configuring git..."
git config user.name "ReflectivAI"
git config user.email "info@reflectivai.com"

echo "Setting remote URL with authentication..."
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

echo "Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Success! Your code is now on GitHub:"
  echo "https://github.com/ReflectivEI/reflectivAI-marketing-site"
else
  echo ""
  echo "❌ Push failed. Please check your token and try again."
  exit 1
fi
