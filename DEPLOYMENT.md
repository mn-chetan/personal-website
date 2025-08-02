# 🚀 GitHub Deployment Guide

## Quick Setup Instructions

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it: `personal-website`
3. Make it **Public** 
4. **DO NOT** initialize with README (we already have one)

### 2. Connect Local Repository to GitHub
```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section on the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Your site will be available at: `https://YOUR_USERNAME.github.io/personal-website`

### 4. Alternative Deployment Options

#### Option A: Vercel (Recommended for Full-Stack)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set build settings:
   - Framework: SvelteKit
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`

#### Option B: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Set build settings:
   - Base Directory: `frontend`
   - Build Command: `npm run build`
   - Publish Directory: `frontend/build`

#### Option C: Full-Stack on Railway/Render
- Deploy both frontend and backend
- Set up environment variables
- Configure database if needed

### 5. Custom Domain (Optional)
Once deployed, you can:
1. Purchase a domain (like `chetanmn.me`)
2. Configure DNS settings
3. Add custom domain in your deployment platform

## 📁 What's Included

✅ **Complete .gitignore** - Excludes node_modules, build files, etc.
✅ **GitHub Actions Workflow** - Automatic deployment to GitHub Pages
✅ **Static Site Configuration** - SvelteKit configured for static export
✅ **Professional README** - Complete documentation
✅ **Clean Codebase** - Removed unnecessary files and images

## 🔧 Next Steps After Deployment

1. **Test the live site** thoroughly
2. **Update contact links** in the Contact component if needed
3. **Add Google Analytics** (optional)
4. **Set up custom domain** (optional)
5. **Add more projects** to the Experience section

Your professional portfolio is now ready for the world! 🌟
