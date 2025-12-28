# ReflectivAI Marketing Site - Deployment Complete! 🎉

## ✅ Your Site is Live!

**Live URL:** https://reflectivei.github.io/reflectivAI-marketing-site/

**GitHub Repository:** https://github.com/ReflectivEI/reflectivAI-marketing-site

---

## What's Deployed

✅ **Homepage** - Hero section with new image, comparison table, performance analytics, interactive 8 capabilities  
✅ **AI Coach Page** - 10 EI dimensions, coaching cards, EI in practice section with visual  
✅ **Role Play Page** - 9 disease state scenarios across therapeutic areas  
✅ **Branding** - ReflectivAI logo with wordmark in header/footer  
✅ **Responsive Design** - Mobile-friendly across all pages  
✅ **Interactive Elements** - Hover animations, modal dialogs, transitions  

---

## Automatic Deployments

Your site is configured for **automatic deployments**:

- Every push to the `main` branch triggers a new deployment
- GitHub Actions builds and deploys automatically
- Changes go live in 2-3 minutes

**View deployment status:**  
https://github.com/ReflectivEI/reflectivAI-marketing-site/actions

---

## Making Updates

### Option 1: Edit on GitHub (Easiest)
1. Go to your repository
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes and commit
5. Site updates automatically in 2-3 minutes

### Option 2: Clone and Edit Locally
```bash
git clone https://github.com/ReflectivEI/reflectivAI-marketing-site.git
cd reflectivAI-marketing-site

# Make your changes

git add .
git commit -m "Your update message"
git push origin main
```

### Option 3: Download and Re-upload
1. Download: https://xox8z610ws.preview.c24.airoapp.ai/reflectivai-site.tar.gz
2. Extract and make changes
3. Push to GitHub

---

## Key Files to Edit

### Content Pages
- `src/pages/index.tsx` - Homepage
- `src/pages/ai-coach.tsx` - AI Coach page
- `src/pages/role-play.tsx` - Role Play page

### Layout Components
- `src/layouts/parts/Header.tsx` - Site header/navigation
- `src/layouts/parts/Footer.tsx` - Site footer

### Styling
- `src/styles/globals.css` - Global styles and CSS variables
- `tailwind.config.js` - Tailwind configuration

### Images
- `public/assets/` - All images and media files

---

## Custom Domain (Optional)

To use your own domain (e.g., marketing.reflectivai.com):

1. Go to repository Settings → Pages
2. Enter your custom domain
3. Add DNS records:
   - CNAME record: `marketing` → `reflectivei.github.io`
4. Wait for DNS propagation (5-60 minutes)

---

## Alternative Hosting Options

If you want to move to a different platform:

### Vercel
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Set Output Directory: `dist/client`
4. Deploy

### Netlify
1. Go to https://app.netlify.com/start
2. Connect GitHub repository
3. Set Publish directory: `dist/client`
4. Deploy

---

## Build Locally

To test changes before deploying:

```bash
npm install
npm run dev        # Development server at http://localhost:5173
npm run build      # Production build
npm run preview    # Preview production build
```

---

## Support

**Repository Issues:** https://github.com/ReflectivEI/reflectivAI-marketing-site/issues  
**GitHub Actions Logs:** https://github.com/ReflectivEI/reflectivAI-marketing-site/actions  

---

## Deployment Timeline

✅ **Dec 28, 2025 10:04 AM** - Code pushed to GitHub  
✅ **Dec 28, 2025 10:05 AM** - GitHub Pages enabled  
✅ **Dec 28, 2025 10:05 AM** - Deployment workflow triggered  
✅ **Site is now live!**

---

## Security Note

**Important:** The GitHub token used for deployment should be revoked and regenerated periodically for security. Go to https://github.com/settings/tokens to manage your tokens.
