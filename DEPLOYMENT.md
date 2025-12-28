# ReflectivAI Marketing Site - Deployment Guide

## Quick Deploy Options

### Option 1: GitHub Pages (Recommended)

**Step 1: Enable GitHub Pages**
1. Go to https://github.com/ReflectivEI/reflectivAI-marketing-site/settings/pages
2. Under "Source", select "GitHub Actions"
3. The workflow will run automatically

**Step 2: Update Token (Required)**
The current token doesn't have workflow permissions. Create a new one:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Check these permissions:
   - ✅ **repo** (all)
   - ✅ **workflow**
4. Generate and copy the token
5. Run: `./push-to-github.sh YOUR_NEW_TOKEN`

**Your site will be live at:**
```
https://reflectivei.github.io/reflectivAI-marketing-site/
```

---

### Option 2: Vercel (Fastest)

1. Go to https://vercel.com/new
2. Import your GitHub repository: `ReflectivEI/reflectivAI-marketing-site`
3. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist/client`
4. Click "Deploy"

**Your site will be live at:**
```
https://reflectivai-marketing-site.vercel.app
```

---

### Option 3: Netlify

1. Go to https://app.netlify.com/start
2. Connect to GitHub and select `ReflectivEI/reflectivAI-marketing-site`
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist/client`
4. Click "Deploy site"

**Your site will be live at:**
```
https://reflectivai-marketing-site.netlify.app
```

---

### Option 4: Manual Deploy (Any Static Host)

**Build locally:**
```bash
npm install
npm run build
```

**Upload the `dist/client` folder to:**
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Any static hosting service

---

## Recommended: Vercel or Netlify

Both are free, fast, and require zero configuration:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Custom domain support
- ✅ Preview deployments for PRs

**Vercel is recommended** for React/Vite projects.

---

## Current Status

✅ Code pushed to GitHub  
✅ Build configuration ready  
✅ GitHub Actions workflow created  
⏳ Waiting for deployment (choose option above)

---

## Need Help?

If you want me to deploy it for you:
1. **For GitHub Pages**: Provide a token with `repo` + `workflow` permissions
2. **For Vercel/Netlify**: Share your account access or let me guide you through the UI
