# Deployment Guide - Signal Intelligence Page Fix

## Issue
The Signal Intelligence page was showing a 404 error on GitHub Pages because the 404.html file wasn't being copied to the dist folder during build.

## Solution
Updated `vite.config.ts` to include a build hook that copies `public/404.html` to `dist/404.html` after the build completes.

## Files Modified
1. ✅ `vite.config.ts` - Added closeBundle hook to copy 404.html
2. ✅ `public/404.html` - GitHub Pages SPA redirect handler
3. ✅ `index.html` - SPA redirect receiver script
4. ✅ `src/layouts/parts/Header.tsx` - Signal Intelligence link in dropdown

## How GitHub Pages SPA Routing Works

### The Problem
GitHub Pages serves static files. When a user visits `/signal-intelligence`, GitHub Pages looks for a file at that path and returns 404 if not found.

### The Solution
1. **404.html**: GitHub Pages serves this file for any 404 error
2. **Redirect Script**: 404.html saves the requested URL to sessionStorage and redirects to index.html
3. **Index.html**: Reads sessionStorage and uses React Router to navigate to the correct page

### Build Process
```bash
npm run build
# ✅ Vite builds the app to dist/
# ✅ closeBundle hook copies public/404.html to dist/404.html
# ✅ GitHub Pages deployment includes 404.html
```

## Deployment Steps

### Step 1: Build Locally (Optional - Test First)
```bash
cd ~/reflectivAI-marketing-site
npm run build
# Verify dist/404.html exists
ls -la dist/404.html
```

### Step 2: Commit and Push
```bash
git add -A
git commit -m "Fix GitHub Pages SPA routing - copy 404.html to dist"
git push origin main
```

### Step 3: Wait for GitHub Actions
1. Visit: https://github.com/ReflectivEI/reflectivAI-marketing-site/actions
2. Wait 2-3 minutes for build and deployment
3. Look for green checkmark ✅

### Step 4: Test the Live Site
1. Visit: https://reflectivei.github.io/reflectivAI-marketing-site/signal-intelligence
2. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
3. Verify page loads without 404 error

## Verification Checklist

- [ ] `dist/404.html` exists after build
- [ ] GitHub Actions build succeeds
- [ ] `/signal-intelligence` loads without 404
- [ ] Header "Learn More" dropdown shows Signal Intelligence link
- [ ] Clicking link navigates to Signal Intelligence page
- [ ] Page content displays correctly
- [ ] Direct URL access works: https://reflectivei.github.io/reflectivAI-marketing-site/signal-intelligence

## Troubleshooting

### If 404 Still Appears
1. **Clear browser cache**: Hard refresh (Cmd+Shift+R)
2. **Check GitHub Actions**: Ensure deployment succeeded
3. **Verify 404.html in repo**: Check https://github.com/ReflectivEI/reflectivAI-marketing-site/blob/gh-pages/404.html
4. **Wait longer**: GitHub Pages CDN can take 5-10 minutes to update

### If Build Fails
1. Check vite.config.ts syntax
2. Ensure public/404.html exists
3. Run `npm run build` locally to test

## Technical Details

### Vite Build Hook
```typescript
hooks: {
  closeBundle: () => {
    const src = path.resolve(__dirname, 'public/404.html');
    const dest = path.resolve(__dirname, 'dist/404.html');
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log('✅ Copied 404.html to dist/');
    }
  },
}
```

### 404.html Redirect Logic
```javascript
sessionStorage.redirect = location.href;
```

### index.html Receiver Logic
```javascript
var redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect != location.href) {
  history.replaceState(null, null, redirect);
}
```

## Next Steps
After successful deployment, the Signal Intelligence page will be accessible at:
- https://reflectivei.github.io/reflectivAI-marketing-site/signal-intelligence

All React Router routes will work correctly on GitHub Pages.
