# GitHub Pages Setup Guide

## Current Status
Your site is getting a 404 error because GitHub Pages needs to be enabled in the repository settings.

## Step-by-Step Setup Instructions

### Option 1: Enable GitHub Pages (Recommended)

1. **Navigate to Repository Settings**
   - Go to: https://github.com/ReflectivEI/reflectivAI-marketing-site
   - Click the "Settings" tab (top right, near the gear icon)
   - Scroll down the left sidebar and click "Pages"

2. **Configure Build and Deployment**
   
   You should see a section called "Build and deployment"
   
   Under "Source", you have two options:
   
   **A. GitHub Actions (Recommended - What We Set Up)**
   - Select "GitHub Actions" from the dropdown
   - This will use the workflow file we created (`.github/workflows/deploy.yml`)
   - Click "Save" if there's a save button
   
   **B. Deploy from a branch (Alternative)**
   - Select "Deploy from a branch"
   - Branch: Select "main"
   - Folder: Select "/ (root)"
   - Click "Save"

3. **Wait for Deployment**
   - After enabling, GitHub will automatically deploy
   - Check deployment status: https://github.com/ReflectivEI/reflectivAI-marketing-site/actions
   - Look for a workflow run called "Deploy to GitHub Pages"
   - It should show a green checkmark when complete (takes 2-3 minutes)

4. **Access Your Site**
   - Once deployed, your site will be at:
   - https://reflectivei.github.io/reflectivAI-marketing-site/

---

### Option 2: If You Don't See "Pages" in Settings

This might mean:
- You don't have admin access to the repository
- The repository is private (GitHub Pages requires public repos on free plans)
- GitHub Pages is not available for your account type

**Solutions:**

**A. Check Repository Visibility**
1. Go to repository main page
2. Look for "Public" or "Private" badge near the repository name
3. If it says "Private":
   - Click "Settings" → "General"
   - Scroll to "Danger Zone"
   - Click "Change visibility"
   - Select "Make public"
   - Confirm the change

**B. Request Admin Access**
- Ask the repository owner to:
  - Add you as an admin collaborator
  - Or enable GitHub Pages themselves

---

### Option 3: Alternative Deployment (If GitHub Pages Doesn't Work)

If GitHub Pages isn't available, you can deploy to other platforms:

#### Deploy to Netlify (Free)
1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build settings:
   - Build command: `npm run build:vite`
   - Publish directory: `dist/client`
6. Click "Deploy site"
7. Your site will be live at: `https://[random-name].netlify.app`

#### Deploy to Vercel (Free)
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New" → "Project"
4. Import your repository
5. Framework: Select "Vite"
6. Build settings:
   - Build command: `npm run build:vite`
   - Output directory: `dist/client`
7. Click "Deploy"
8. Your site will be live at: `https://[project-name].vercel.app`

---

## Troubleshooting

### Issue: "I don't see 'Pages' in Settings"
**Cause**: Repository might be private or you lack permissions
**Solution**: Make repository public or request admin access

### Issue: "Workflow runs but site still shows 404"
**Cause**: Base path mismatch or deployment artifact issue
**Solution**: 
1. Check workflow logs for errors
2. Verify the artifact was uploaded
3. Try manual workflow trigger

### Issue: "Assets not loading (CSS/JS 404s)"
**Cause**: Base path configuration issue
**Solution**: Already fixed in latest commit (vite.config.ts uses conditional base path)

---

## Quick Verification Checklist

- [ ] Repository is public
- [ ] You have admin access
- [ ] GitHub Pages is enabled in Settings → Pages
- [ ] Source is set to "GitHub Actions" or "Deploy from a branch"
- [ ] Workflow has run successfully (green checkmark)
- [ ] Site is accessible at https://reflectivei.github.io/reflectivAI-marketing-site/

---

## Need Help?

If you're still stuck:

1. **Check workflow status**: https://github.com/ReflectivEI/reflectivAI-marketing-site/actions
2. **Look for error messages** in the workflow logs
3. **Verify repository is public** (should see "Public" badge)
4. **Try alternative deployment** (Netlify or Vercel) as a backup

---

## Current Repository Info

- **Repository**: https://github.com/ReflectivEI/reflectivAI-marketing-site
- **Expected URL**: https://reflectivei.github.io/reflectivAI-marketing-site/
- **Workflow File**: `.github/workflows/deploy.yml` ✅ (already created)
- **Build Output**: `dist/client` ✅ (configured)
- **Base Path**: `/reflectivAI-marketing-site/` ✅ (configured)
- **.nojekyll**: ✅ (added to prevent Jekyll processing)

Everything is configured correctly on the code side. The only remaining step is enabling GitHub Pages in the repository settings.
