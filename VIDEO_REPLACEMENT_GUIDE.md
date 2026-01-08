# Video Replacement Guide

**Location:** Home page (`src/pages/index.tsx`), right after "These behaviors are observable, coachable, and measurable."

**Current Status:** Placeholder image embedded (will be replaced with video)

---

## Quick Reference

**File to Edit:** `src/pages/index.tsx`
**Line Numbers:** Around line 197-220
**Section Marker:** Look for comment `/* Video/Image Embed - REPLACE THIS SECTION WHEN YOU HAVE THE VIDEO */`

---

## How to Replace with Your Video

### Step 1: Upload Your Video File

1. Click the **file upload button** (📎) in the Airo chat toolbar
2. Select your video file (MP4, WebM, or MOV format recommended)
3. Wait for upload to complete
4. Copy the URL provided (will look like: `https://img1.wsimg.com/...`)

### Step 2: Tell Airo to Update the Code

Simply say:
> "Replace the video placeholder on the home page with this video: [paste URL]"

Or:
> "Update the home page video with the file I just uploaded"

---

## Manual Code Update (If Needed)

If you prefer to edit the code yourself:

### Current Code (Placeholder Image):
```tsx
<div className="mt-8 rounded-lg overflow-hidden shadow-lg">
  <img 
    src="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/99674842-DA04-42EA-BF6A-CF60A157E5AE_4_5005_c.jpeg"
    alt="Signal Intelligence Framework Demo"
    className="w-full h-auto"
  />
</div>
```

### Replace With (Video):
```tsx
<div className="mt-8 rounded-lg overflow-hidden shadow-lg">
  <video 
    controls 
    className="w-full h-auto"
    poster="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/99674842-DA04-42EA-BF6A-CF60A157E5AE_4_5005_c.jpeg"
  >
    <source src="YOUR_VIDEO_URL_HERE" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
```

**Replace:** `YOUR_VIDEO_URL_HERE` with your actual video URL

---

## Video Options & Customization

### Basic Video (with controls):
```tsx
<video controls className="w-full h-auto">
  <source src="YOUR_VIDEO_URL" type="video/mp4" />
</video>
```

### Autoplay Video (muted, loops):
```tsx
<video 
  autoPlay 
  muted 
  loop 
  playsInline
  className="w-full h-auto"
>
  <source src="YOUR_VIDEO_URL" type="video/mp4" />
</video>
```

### Video with Thumbnail Poster:
```tsx
<video 
  controls 
  poster="THUMBNAIL_IMAGE_URL"
  className="w-full h-auto"
>
  <source src="YOUR_VIDEO_URL" type="video/mp4" />
</video>
```

### Video with Multiple Formats (better browser support):
```tsx
<video controls className="w-full h-auto">
  <source src="YOUR_VIDEO.mp4" type="video/mp4" />
  <source src="YOUR_VIDEO.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>
```

---

## Video Attributes Explained

| Attribute | Description | Example |
|-----------|-------------|----------|
| `controls` | Shows play/pause, volume, timeline controls | `controls` |
| `autoPlay` | Starts playing automatically (must be muted) | `autoPlay` |
| `muted` | Starts with sound off | `muted` |
| `loop` | Repeats video when it ends | `loop` |
| `playsInline` | Plays inline on mobile (doesn't go fullscreen) | `playsInline` |
| `poster` | Thumbnail image shown before video plays | `poster="url"` |
| `preload` | How much to preload: `none`, `metadata`, `auto` | `preload="metadata"` |

---

## Recommended Video Settings

### For Demo/Tutorial Videos:
```tsx
<video 
  controls 
  preload="metadata"
  poster="thumbnail.jpg"
  className="w-full h-auto"
>
  <source src="demo-video.mp4" type="video/mp4" />
</video>
```

### For Background/Ambient Videos:
```tsx
<video 
  autoPlay 
  muted 
  loop 
  playsInline
  className="w-full h-auto"
>
  <source src="background-video.mp4" type="video/mp4" />
</video>
```

---

## File Format Recommendations

**Best Format:** MP4 (H.264 codec)
- ✅ Widest browser support
- ✅ Good compression
- ✅ Works on all devices

**Alternative:** WebM (VP9 codec)
- ✅ Better compression than MP4
- ⚠️ Not supported in Safari (use as fallback)

**Resolution:**
- 1920x1080 (Full HD) - Best quality
- 1280x720 (HD) - Good balance
- 854x480 (SD) - Smaller file size

**File Size:**
- Keep under 10MB for fast loading
- Use video compression tools if needed

---

## Quick Update Workflow

1. **Upload new video** → Get URL
2. **Tell Airo:** "Replace home page video with [URL]"
3. **Verify:** Check preview to see video playing
4. **Iterate:** Repeat as needed

---

## Troubleshooting

### Video Not Playing?
- Check file format (MP4 recommended)
- Verify URL is accessible
- Try adding `type="video/mp4"` to source tag
- Check browser console for errors

### Video Too Large?
- Compress video using tools like HandBrake
- Reduce resolution (720p is usually sufficient)
- Lower bitrate in video settings

### Video Not Responsive?
- Ensure `className="w-full h-auto"` is present
- Check parent container doesn't have fixed width

---

## Example: Complete Update Request

**Say this to Airo:**
> "I just uploaded a new video. Please replace the video on the home page (after 'These behaviors are observable, coachable, and measurable') with this URL: https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/my-new-video.mp4. Make it have controls and use the current image as the poster thumbnail."

**Airo will:**
1. Find the video section in `src/pages/index.tsx`
2. Replace the `<img>` tag with a `<video>` tag
3. Add your video URL
4. Set the current image as the poster
5. Add controls
6. Commit the changes

---

## Current Implementation Details

**File:** `src/pages/index.tsx`
**Section:** Signal Intelligence™ Framework section
**Position:** After the bullet list and "These behaviors are observable, coachable, and measurable." text
**Styling:** 
- Rounded corners (`rounded-lg`)
- Shadow effect (`shadow-lg`)
- Responsive width (`w-full`)
- Auto height (`h-auto`)
- Top margin spacing (`mt-8`)

---

**Need help?** Just upload your video and tell me to update it!
