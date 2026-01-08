# GitHub Pages Workflow - FIXED ✅

**Date:** January 8, 2026
**Status:** Ready to Deploy

---

## What Was Broken

1. **Wrong build command**: Used `npm run build:vite` instead of `npm run build`
2. **Wrong output path**: Referenced `dist/client/` but Vite outputs to `dist/`
3. **Unnecessary 404.html copy**: Vite config already handles this via hooks

---

## What Was Fixed

### File: `.github/workflows/deploy.yml`

**Changes:**
1. ✅ Changed build command from `NODE_ENV=production npm run build:vite` → `npm run build`
2. ✅ Changed upload path from `./dist/client` → `./dist`
3. ✅ Simplified verification step (removed manual 404.html copy)

---

## How to Deploy Now

### Option 1: Manual Trigger (Recommended)

1. Go to: **https://github.com/ReflectivEI/reflectivAI-marketing-site/actions/workflows/deploy.yml**
2. Click the **"Run workflow"** button (top right)
3. Select branch: **main**
4. Click **"Run workflow"** (green button)
5. Wait 2-3 minutes for deployment

### Option 2: Push to Main (Automatic)

Any push to the `main` branch will automatically trigger deployment.

---

## What Will Be Deployed

**Commit:** 42fc385fdaeaebb1f018f8f090df0c8e9df862d1

**Changes included:**
- ✅ Framework Explorer relocated to Applied Capabilities page
- ✅ Product Tour shows 2 centered demo cards (AI Coach + Role Play)
- ✅ All unused imports cleaned up
- ✅ Fixed GitHub Actions workflow

---

## Verification

After deployment completes, verify at:
- **Live Site:** https://reflectivei.github.io/reflectivAI-marketing-site/
- **Applied Capabilities:** https://reflectivei.github.io/reflectivAI-marketing-site/applied-capabilities
- **Product Tour:** https://reflectivei.github.io/reflectivAI-marketing-site/demo

---

## Build Process

The workflow now correctly:
1. Checks out code
2. Sets up Node.js 20
3. Installs dependencies with `npm ci`
4. Builds with `npm run build` (which runs `vite build && node bundle.js`)
5. Uploads `dist/` folder to GitHub Pages
6. Deploys to live site

**Total time:** ~2-3 minutes

---

## Troubleshooting

If deployment fails:
1. Check Actions tab: https://github.com/ReflectivEI/reflectivAI-marketing-site/actions
2. Click on the failed workflow run
3. Review error logs
4. Common issues:
   - Missing dependencies (run `npm install` locally first)
   - Build errors (run `npm run build` locally to test)
   - GitHub Pages not enabled (check Settings → Pages)

---

## Next Steps

1. ✅ Workflow is fixed and committed
2. 🔄 **YOU NEED TO:** Manually trigger the workflow or push to main
3. ⏱️ Wait 2-3 minutes for deployment
4. 🎉 Verify changes on live site

**The workflow is ready to go! Just trigger it manually from GitHub Actions.**
