#!/bin/bash
GITHUB_TOKEN="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"
REPO_URL="https://${GITHUB_TOKEN}@github.com/ReflectivEI/reflectivAI-marketing-site.git"

echo "Pushing to GitHub..."
git remote set-url origin "$REPO_URL" 2>/dev/null || git remote add origin "$REPO_URL"
git push -u origin main --force

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Success! Changes pushed to GitHub"
  echo "🌐 GitHub Actions will auto-deploy to: https://reflectivei.github.io/reflectivAI-marketing-site/"
  echo "⏱️  Deployment takes 2-3 minutes"
else
  echo "❌ Push failed"
  exit 1
fi
