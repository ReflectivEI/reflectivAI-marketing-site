# MANUAL FIX - Copy This File to GitHub

**Problem:** Changes are in Airo but not pushed to GitHub
**Solution:** Manually update the workflow file on GitHub

---

## STEP 1: Go to GitHub and Edit the Workflow File

1. Go to: https://github.com/ReflectivEI/reflectivAI-marketing-site
2. Navigate to: `.github/workflows/deploy.yml`
3. Click the **pencil icon** (Edit this file)

---

## STEP 2: Replace the ENTIRE file with this:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
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

      - name: Verify build output
        run: |
          ls -la dist/
          echo "✅ Build completed successfully"

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

---

## STEP 3: Commit the Changes

1. Scroll to bottom of the edit page
2. Commit message: `fix: correct GitHub Pages workflow - use proper build command and dist path`
3. Click **"Commit changes"**

---

## STEP 4: Trigger the Workflow

1. Go to: https://github.com/ReflectivEI/reflectivAI-marketing-site/actions/workflows/deploy.yml
2. Click **"Run workflow"** button
3. Select branch: **main**
4. Click **"Run workflow"**
5. Wait 2-3 minutes

---

## What Changed?

### OLD (BROKEN):
```yaml
- name: Build
  run: NODE_ENV=production npm run build:vite

- name: Copy 404.html for SPA routing
  run: |
    ls -la dist/
    ls -la dist/client/ || echo "dist/client does not exist yet"
    cp public/404.html dist/client/404.html
    echo "✅ Copied 404.html to dist/client/"
    ls -la dist/client/404.html

- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: './dist/client'
```

### NEW (FIXED):
```yaml
- name: Build
  run: npm run build

- name: Verify build output
  run: |
    ls -la dist/
    echo "✅ Build completed successfully"

- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: './dist'
```

---

## Why It Was Failing:

1. ❌ **Wrong build command**: `npm run build:vite` doesn't exist in package.json
2. ❌ **Wrong output path**: Vite outputs to `dist/`, not `dist/client/`
3. ❌ **Unnecessary step**: 404.html copy already handled by Vite config

---

## After You Fix It:

The workflow will:
1. ✅ Build successfully with `npm run build`
2. ✅ Find the output in `dist/`
3. ✅ Deploy to GitHub Pages
4. ✅ Your site will be live in 2-3 minutes

---

**DO THIS NOW:** Go to GitHub and manually edit the workflow file!
