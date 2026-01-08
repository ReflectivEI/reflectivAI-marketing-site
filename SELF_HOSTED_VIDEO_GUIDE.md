# Self-Hosted Video Implementation Guide

## Overview
This guide explains how to add, replace, and manage self-hosted videos on your ReflectivAI website. Self-hosting videos gives you complete control over branding, styling, and user experience without third-party logos or restrictions.

---

## Current Implementation

### Location
**Home Page:** `src/pages/index.tsx` (around line 197)

### Video Files Location
```
public/assets/
├── signal-intelligence-demo.mp4     # Primary video file (H.264)
├── signal-intelligence-demo.webm    # Optional fallback (WebM)
└── signal-intelligence-thumbnail.jpg # Video poster/thumbnail
```

### Current Code
```tsx
{/* Signal Intelligence Demo Video - Self-Hosted */}
<div className="mt-8 rounded-lg overflow-hidden shadow-lg bg-black">
  <video 
    controls 
    className="w-full h-auto"
    preload="metadata"
    poster="/assets/signal-intelligence-thumbnail.jpg"
  >
    <source src="/assets/signal-intelligence-demo.mp4" type="video/mp4" />
    <source src="/assets/signal-intelligence-demo.webm" type="video/webm" />
    Your browser does not support the video tag. Please upgrade to a modern browser.
  </video>
</div>
```

---

## How to Add/Replace Videos

### Step 1: Prepare Your Video File

#### Recommended Video Specifications
- **Format:** MP4 (H.264 codec) - best browser compatibility
- **Resolution:** 1920x1080 (1080p) or 1280x720 (720p)
- **Aspect Ratio:** 16:9
- **File Size:** Under 50MB for GitHub (under 100MB recommended for performance)
- **Frame Rate:** 30fps or 60fps
- **Audio:** AAC codec, 128kbps or higher

#### Optional: Create WebM Version (Better Compression)
```bash
# Using FFmpeg to convert MP4 to WebM
ffmpeg -i your-video.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus your-video.webm
```

#### Create a Thumbnail Image
```bash
# Extract thumbnail from video at 5 seconds
ffmpeg -i your-video.mp4 -ss 00:00:05 -vframes 1 thumbnail.jpg
```

Or create a custom thumbnail in any image editor (1920x1080px recommended).

---

### Step 2: Add Video to Your Project

#### Option A: Using Git Command Line

1. **Navigate to your project directory:**
   ```bash
   cd /path/to/reflectivAI-marketing-site
   ```

2. **Copy video files to public/assets/:**
   ```bash
   # Copy video file
   cp ~/Desktop/your-video.mp4 public/assets/signal-intelligence-demo.mp4
   
   # Copy thumbnail (optional but recommended)
   cp ~/Desktop/your-thumbnail.jpg public/assets/signal-intelligence-thumbnail.jpg
   
   # Optional: Copy WebM version for better compression
   cp ~/Desktop/your-video.webm public/assets/signal-intelligence-demo.webm
   ```

3. **Commit and push to GitHub:**
   ```bash
   git add public/assets/signal-intelligence-demo.mp4
   git add public/assets/signal-intelligence-thumbnail.jpg
   git commit -m "Update Signal Intelligence demo video"
   git push origin main
   ```

#### Option B: Using GitHub Web Interface

1. Go to: https://github.com/ReflectivEI/reflectivAI-marketing-site
2. Navigate to: `public/assets/`
3. Click **"Add file" → "Upload files"**
4. Drag and drop your video files
5. Add commit message: "Update Signal Intelligence demo video"
6. Click **"Commit changes"**

---

### Step 3: Update Code (If Changing Filename)

If you use a different filename, update `src/pages/index.tsx`:

```tsx
<video 
  controls 
  className="w-full h-auto"
  preload="metadata"
  poster="/assets/YOUR-THUMBNAIL-NAME.jpg"  // Update this
>
  <source src="/assets/YOUR-VIDEO-NAME.mp4" type="video/mp4" />  // Update this
  <source src="/assets/YOUR-VIDEO-NAME.webm" type="video/webm" /> // Update this
  Your browser does not support the video tag.
</video>
```

---

## Video Player Attributes Explained

### Essential Attributes

| Attribute | Purpose | Example |
|-----------|---------|----------|
| `controls` | Shows play/pause, volume, fullscreen buttons | `controls` |
| `preload="metadata"` | Loads video metadata (duration, dimensions) but not full video | `preload="metadata"` |
| `poster="..."` | Thumbnail image shown before video plays | `poster="/assets/thumbnail.jpg"` |
| `className="w-full h-auto"` | Responsive sizing (full width, auto height) | Tailwind classes |

### Optional Attributes You Can Add

| Attribute | Purpose | Example |
|-----------|---------|----------|
| `autoplay` | Starts playing automatically (not recommended) | `autoplay` |
| `muted` | Mutes audio by default (required for autoplay) | `muted` |
| `loop` | Repeats video when finished | `loop` |
| `playsinline` | Plays inline on iOS (not fullscreen) | `playsinline` |
| `width="1920"` | Sets explicit width | `width="1920"` |
| `height="1080"` | Sets explicit height | `height="1080"` |

### Example: Autoplay Background Video
```tsx
<video 
  autoplay 
  muted 
  loop 
  playsinline
  className="w-full h-auto"
>
  <source src="/assets/background-video.mp4" type="video/mp4" />
</video>
```

---

## Adding Videos to Other Pages

### Example: Add Video to AI Coach Page

1. **Open the page file:**
   ```bash
   src/pages/ai-coach.tsx
   ```

2. **Add video component where needed:**
   ```tsx
   <div className="mt-8 rounded-lg overflow-hidden shadow-lg bg-black">
     <video 
       controls 
       className="w-full h-auto"
       preload="metadata"
       poster="/assets/ai-coach-demo-thumbnail.jpg"
     >
       <source src="/assets/ai-coach-demo.mp4" type="video/mp4" />
       Your browser does not support the video tag.
     </video>
   </div>
   ```

3. **Add video files to public/assets/:**
   ```bash
   cp ~/Desktop/ai-coach-video.mp4 public/assets/ai-coach-demo.mp4
   cp ~/Desktop/ai-coach-thumbnail.jpg public/assets/ai-coach-demo-thumbnail.jpg
   ```

4. **Commit and push:**
   ```bash
   git add src/pages/ai-coach.tsx
   git add public/assets/ai-coach-demo.mp4
   git add public/assets/ai-coach-demo-thumbnail.jpg
   git commit -m "Add video to AI Coach page"
   git push origin main
   ```

---

## Styling Customization

### Current Styling
```tsx
<div className="mt-8 rounded-lg overflow-hidden shadow-lg bg-black">
  <video className="w-full h-auto" ... >
```

### Styling Options

#### Change Border Radius
```tsx
<div className="rounded-xl">  {/* Extra large rounded corners */}
<div className="rounded-none"> {/* No rounded corners */}
<div className="rounded-sm">   {/* Small rounded corners */}
```

#### Change Shadow
```tsx
<div className="shadow-2xl">  {/* Extra large shadow */}
<div className="shadow-none"> {/* No shadow */}
<div className="shadow-md">   {/* Medium shadow */}
```

#### Change Spacing
```tsx
<div className="mt-12">  {/* More top margin */}
<div className="mt-4">   {/* Less top margin */}
<div className="my-8">   {/* Margin top and bottom */}
```

#### Add Border
```tsx
<div className="border-2 border-primary">  {/* 2px border in primary color */}
<div className="border-4 border-white">   {/* 4px white border */}
```

#### Limit Width (Center Video)
```tsx
<div className="max-w-4xl mx-auto">  {/* Max width with auto margins */}
  <div className="rounded-lg overflow-hidden shadow-lg bg-black">
    <video ... >
  </div>
</div>
```

---

## Video Optimization Tips

### Compress Video for Web

#### Using FFmpeg (Free, Command Line)
```bash
# Compress MP4 for web (good quality, smaller size)
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4

# Aggressive compression (smaller file, lower quality)
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 96k output.mp4

# Create WebM version (better compression than MP4)
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus output.webm
```

#### Using Online Tools
- **HandBrake** (Free, GUI): https://handbrake.fr/
- **CloudConvert**: https://cloudconvert.com/mp4-converter
- **Clipchamp** (Microsoft): https://clipchamp.com/

### File Size Guidelines

| Duration | Resolution | Target Size | Max Size |
|----------|------------|-------------|----------|
| 30 sec   | 1080p      | 5-10 MB     | 20 MB    |
| 1 min    | 1080p      | 10-20 MB    | 40 MB    |
| 2 min    | 1080p      | 20-40 MB    | 80 MB    |
| 30 sec   | 720p       | 3-6 MB      | 12 MB    |
| 1 min    | 720p       | 6-12 MB     | 25 MB    |

**Note:** GitHub has a 100MB file size limit. Keep videos under 50MB for best performance.

---

## Troubleshooting

### Video Not Playing

**Problem:** Video shows black screen or doesn't load

**Solutions:**
1. Check file path is correct: `/assets/video-name.mp4`
2. Verify file exists in `public/assets/` folder
3. Check video format is MP4 with H.264 codec
4. Try opening video file directly: `https://your-site.com/assets/video-name.mp4`
5. Check browser console for errors (F12 → Console tab)

### Video Too Large for GitHub

**Problem:** Git push fails with "file too large" error

**Solutions:**
1. Compress video using FFmpeg (see optimization section)
2. Reduce resolution from 1080p to 720p
3. Use Git LFS (Large File Storage):
   ```bash
   git lfs install
   git lfs track "*.mp4"
   git add .gitattributes
   git add public/assets/video.mp4
   git commit -m "Add video with LFS"
   git push origin main
   ```
4. Host video on external service (Vimeo, YouTube, AWS S3)

### Video Loads Slowly

**Problem:** Video takes too long to start playing

**Solutions:**
1. Compress video to reduce file size
2. Add `preload="metadata"` attribute (already included)
3. Use WebM format alongside MP4 (better compression)
4. Consider using a CDN for large files
5. Add loading indicator:
   ```tsx
   <video 
     controls 
     preload="metadata"
     onLoadStart={() => console.log('Loading...')}
     onCanPlay={() => console.log('Ready to play')}
   >
   ```

### Thumbnail Not Showing

**Problem:** Poster image doesn't display before video plays

**Solutions:**
1. Check poster path is correct: `poster="/assets/thumbnail.jpg"`
2. Verify thumbnail file exists in `public/assets/`
3. Check image format (JPG, PNG, WebP supported)
4. Try absolute URL: `poster="https://your-site.com/assets/thumbnail.jpg"`

---

## Advanced: Multiple Video Formats

For best browser compatibility and performance, provide multiple formats:

```tsx
<video controls className="w-full h-auto" preload="metadata" poster="/assets/thumbnail.jpg">
  {/* WebM - Best compression, modern browsers */}
  <source src="/assets/video.webm" type="video/webm" />
  
  {/* MP4 - Universal compatibility */}
  <source src="/assets/video.mp4" type="video/mp4" />
  
  {/* Fallback message */}
  Your browser does not support the video tag. 
  <a href="/assets/video.mp4">Download the video</a>.
</video>
```

Browsers will automatically choose the first supported format.

---

## Quick Reference: Common Tasks

### Replace Existing Video
```bash
cd /path/to/reflectivAI-marketing-site
cp ~/Desktop/new-video.mp4 public/assets/signal-intelligence-demo.mp4
git add public/assets/signal-intelligence-demo.mp4
git commit -m "Update demo video"
git push origin main
```

### Add New Video to Different Page
```bash
# 1. Copy video file
cp ~/Desktop/video.mp4 public/assets/new-video.mp4

# 2. Edit page file (e.g., src/pages/demo.tsx)
# Add video component code

# 3. Commit and push
git add public/assets/new-video.mp4
git add src/pages/demo.tsx
git commit -m "Add video to demo page"
git push origin main
```

### Change Video Styling
```bash
# Edit src/pages/index.tsx
# Update className attributes in video container div
git add src/pages/index.tsx
git commit -m "Update video styling"
git push origin main
```

---

## Benefits of Self-Hosted Videos

✅ **No Third-Party Branding** - No Vimeo/YouTube logos
✅ **Full Control** - Complete styling and behavior control
✅ **Privacy** - No tracking from video platforms
✅ **Performance** - Served directly from your domain
✅ **Customization** - Match your brand perfectly
✅ **No Restrictions** - No view limits or paywalls
✅ **Offline Capable** - Works with PWA/offline features

---

## Need Help?

If you encounter issues:

1. **Check browser console** (F12 → Console) for error messages
2. **Verify file paths** - all paths should start with `/assets/`
3. **Test video file** - open directly in browser to confirm it works
4. **Check file size** - keep under 50MB for GitHub
5. **Review this guide** - most common issues are covered above

---

**Last Updated:** January 8, 2026
**Current Video:** Signal Intelligence Demo (Home Page)
**Location:** `public/assets/signal-intelligence-demo.mp4`