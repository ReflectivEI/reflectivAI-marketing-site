# Add Video File and Deploy to GitHub Pages

## CRITICAL: Complete These Steps to Deploy Your Video

Your site now has a self-hosted video player ready, but you need to add the actual video file and deploy. Follow these steps exactly.

---

## Step 1: Download Your Video from Vimeo

1. **Go to your Vimeo video:** https://vimeo.com/1152490995
2. **Click the download button** (usually in the bottom right or under the video)
3. **Select quality:** Choose **1080p** or **720p** (recommended for web)
4. **Save to Desktop** as: `signal-intelligence-demo.mp4`

**Alternative:** If Vimeo doesn't allow download, use a Vimeo downloader tool:
- https://vimeo-downloader.com/
- https://savevideo.me/vimeo-downloader

---

## Step 2: Add Video to Your Project

### Option A: Using Command Line (Recommended)

```bash
# Navigate to your project
cd /path/to/reflectivAI-marketing-site

# Copy video from Desktop to project
cp ~/Desktop/"invideo-ai-1080 Decide What Matters—In the Moment 2026-01-05.mp4" public/assets/signal-intelligence-demo.mp4

# OR if you renamed it:
cp ~/Desktop/signal-intelligence-demo.mp4 public/assets/signal-intelligence-demo.mp4

# Add to git
git add public/assets/signal-intelligence-demo.mp4

# Commit
git commit -m "Add Signal Intelligence demo video"

# Push to GitHub
git push origin main
```

### Option B: Using GitHub Web Interface

1. **Go to:** https://github.com/ReflectivEI/reflectivAI-marketing-site
2. **Navigate to:** `public/assets/` folder
3. **Click:** "Add file" → "Upload files"
4. **Drag and drop** your video file (rename to `signal-intelligence-demo.mp4` first)
5. **Commit message:** "Add Signal Intelligence demo video"
6. **Click:** "Commit changes"

---

## Step 3: Fix GitHub Actions Workflow (CRITICAL)

**Your GitHub Actions workflow still has the OLD broken version.** You must update it manually:

### Quick Method: Copy Complete Fixed Workflow

1. **Go to:** https://github.com/ReflectivEI/reflectivAI-marketing-site/blob/main/.github/workflows/deploy.yml
2. **Click:** Pencil icon (Edit this file)
3. **Delete everything** and paste this complete fixed workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          NODE_ENV: production

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. **Commit message:** "Fix GitHub Actions workflow for deployment"
5. **Click:** "Commit changes"

### Alternative: Manual Edits

If you prefer to edit line by line:

1. **Go to:** https://github.com/ReflectivEI/reflectivAI-marketing-site/blob/main/.github/workflows/deploy.yml
2. **Click:** Pencil icon (Edit)
3. **Find line 34** (around there): `run: NODE_ENV=production npm run build:vite`
4. **Change to:** `run: npm run build`
5. **Add above it:**
   ```yaml
   env:
     NODE_ENV: production
   ```
6. **Find line 48** (around there): `path: './dist/client'`
7. **Change to:** `path: './dist'`
8. **Delete lines 36-42** (the entire "Copy 404.html" step)
9. **Commit changes**

---

## Step 4: Trigger Deployment

### Option A: Automatic (After Workflow Fix)

Once you've fixed the workflow and pushed the video, GitHub Actions will automatically deploy.

### Option B: Manual Trigger

1. **Go to:** https://github.com/ReflectivEI/reflectivAI-marketing-site/actions
2. **Click:** "Deploy to GitHub Pages" workflow
3. **Click:** "Run workflow" button
4. **Select:** `main` branch
5. **Click:** "Run workflow"

---

## Step 5: Verify Deployment

1. **Wait 2-3 minutes** for deployment to complete
2. **Go to:** https://github.com/ReflectivEI/reflectivAI-marketing-site/actions
3. **Check:** Latest workflow run should show green checkmark ✅
4. **Visit your site:** https://reflectivei.github.io/reflectivAI-marketing-site/
5. **Scroll to video section** and verify video plays without Vimeo logo

---

## Optional: Create Video Thumbnail

For a better user experience, create a thumbnail image that shows before the video plays:

### Method 1: Extract from Video (Using FFmpeg)

```bash
# Extract frame at 5 seconds
ffmpeg -i public/assets/signal-intelligence-demo.mp4 -ss 00:00:05 -vframes 1 public/assets/signal-intelligence-thumbnail.jpg

# Add to git
git add public/assets/signal-intelligence-thumbnail.jpg
git commit -m "Add video thumbnail"
git push origin main
```

### Method 2: Create Custom Thumbnail

1. **Create image** in Photoshop/Canva (1920x1080px)
2. **Save as:** `signal-intelligence-thumbnail.jpg`
3. **Copy to project:**
   ```bash
   cp ~/Desktop/signal-intelligence-thumbnail.jpg public/assets/
   git add public/assets/signal-intelligence-thumbnail.jpg
   git commit -m "Add video thumbnail"
   git push origin main
   ```

### Method 3: Use Screenshot

1. **Play video** in browser
2. **Pause** at a good frame
3. **Take screenshot** (Cmd+Shift+4 on Mac, Win+Shift+S on Windows)
4. **Save as:** `signal-intelligence-thumbnail.jpg`
5. **Upload to** `public/assets/`

---

## Troubleshooting

### Video File Too Large for GitHub

**Problem:** Git push fails with "file too large" error

**Solution:** Compress the video:

```bash
# Install FFmpeg first (if not installed)
# Mac: brew install ffmpeg
# Windows: Download from https://ffmpeg.org/

# Compress video
ffmpeg -i ~/Desktop/original-video.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k public/assets/signal-intelligence-demo.mp4

# Then commit and push
git add public/assets/signal-intelligence-demo.mp4
git commit -m "Add compressed demo video"
git push origin main
```

### Deployment Fails

**Problem:** GitHub Actions shows red X ❌

**Solution:**
1. Click on the failed workflow run
2. Read error message
3. Common issues:
   - Workflow file syntax error → Use complete workflow from Step 3
   - Build fails → Run `npm run build` locally to test
   - Path issues → Verify `path: './dist'` not `'./dist/client'`

### Video Doesn't Play on Site

**Problem:** Video shows black screen or error

**Solution:**
1. **Check file exists:** Visit `https://reflectivei.github.io/reflectivAI-marketing-site/assets/signal-intelligence-demo.mp4` directly
2. **Check format:** Must be MP4 with H.264 codec
3. **Check filename:** Must be exactly `signal-intelligence-demo.mp4`
4. **Check location:** Must be in `public/assets/` folder

---

## Quick Checklist

- [ ] Downloaded video from Vimeo
- [ ] Renamed to `signal-intelligence-demo.mp4`
- [ ] Copied to `public/assets/` folder
- [ ] Committed and pushed to GitHub
- [ ] Fixed GitHub Actions workflow file
- [ ] Triggered deployment (automatic or manual)
- [ ] Verified deployment succeeded (green checkmark)
- [ ] Visited site and confirmed video plays
- [ ] (Optional) Added thumbnail image

---

## What Happens After Deployment

1. **GitHub Actions runs** (takes 2-3 minutes)
2. **Site builds** with your video included
3. **Deploys to GitHub Pages**
4. **Video is accessible** at: `https://reflectivei.github.io/reflectivAI-marketing-site/assets/signal-intelligence-demo.mp4`
5. **Home page displays** video with native HTML5 player
6. **No Vimeo logo** - completely branded to your site

---

## Need More Help?

Refer to these comprehensive guides:

- **SELF_HOSTED_VIDEO_GUIDE.md** - Complete video management reference
- **MANUAL_FIX_INSTRUCTIONS.md** - Detailed workflow fix instructions
- **DEPLOYMENT.md** - General deployment information

---

**Last Updated:** January 8, 2026
**Status:** Code ready, waiting for video file upload and deployment
**Next Step:** Follow Step 1 above to download and add your video file