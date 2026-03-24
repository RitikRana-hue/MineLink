# 🚀 Deployment Guide - MineLink Platform

## ✅ Pre-Deployment Checklist

### 1. **Code Quality**
- ✅ No TypeScript errors
- ✅ No ESLint warnings
- ✅ All components properly typed
- ✅ No console errors in browser

### 2. **Configuration Files**
- ✅ `next.config.ts` - Configured with image optimization
- ✅ `package.json` - All dependencies listed
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `.gitignore` - Excludes node_modules, .next, .env

### 3. **Images & Assets**
- ✅ Unsplash images configured in `next.config.ts`
- ✅ Remote image patterns allowed
- ✅ All images have proper alt text
- ✅ SVG assets in `/public` folder

### 4. **Contact Information**
- ✅ Email: support@nodesio.in
- ✅ Phone: +91 72918-97879
- ✅ Location: Ballabgarh, Faridabad

---

## 🌐 Deployment Options

### Option 1: Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via GitHub**:
   - Push code to GitHub repository
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Deploy via CLI**:
   ```bash
   vercel
   ```

4. **Environment Variables** (if needed):
   - Add in Vercel Dashboard → Settings → Environment Variables

---

### **Option 2: Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Deploy**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

---

### **Option 3: Self-Hosted (VPS/Cloud)

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

3. **Using PM2** (recommended):
   ```bash
   npm install -g pm2
   pm2 start npm --name "minelink" -- start
   pm2 save
   pm2 startup
   ```

4. **Nginx Configuration**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## 📋 Build Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 🔧 Environment Variables (Optional)

Create `.env.local` file if needed:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=support@nodesio.in
NEXT_PUBLIC_CONTACT_PHONE=+91 72918-97879
```

---

## 🎨 Features Included

### **Animations**
- ✅ 360° circular solution carousel
- ✅ Horizontal scrolling tabs
- ✅ Icon rotation on hover
- ✅ Smooth page transitions
- ✅ Framer Motion animations

### **Images**
- ✅ Professional Unsplash mining images
- ✅ Optimized with Next.js Image component
- ✅ Lazy loading enabled
- ✅ Responsive images

### **Design**
- ✅ Dark/Light theme support
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Professional card designs
- ✅ Gradient effects and shadows
- ✅ Accessible navigation

### **Pages**
- ✅ Home (with circular carousel)
- ✅ Platform
- ✅ Solutions (6 solutions with images)
- ✅ About
- ✅ Contact (with form)
- ✅ Individual solution pages

---

## 🔍 Performance Optimization

### **Already Implemented**
- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ CSS optimization
- ✅ Font optimization
- ✅ Lazy loading

### **Additional Recommendations**
1. Enable compression in production
2. Use CDN for static assets
3. Enable caching headers
4. Monitor with analytics tools (Google Analytics, etc.)

---

## 🐛 Troubleshooting

### **Build Fails**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### **Images Not Loading**
- Check `next.config.ts` has correct remote patterns
- Verify Unsplash URLs are accessible
- Check network/firewall settings

### **Styles Not Applied**
- Ensure `globals.css` is imported in `layout.tsx`
- Check Tailwind configuration
- Clear browser cache

---

## 📱 Testing Before Deployment

1. **Local Production Build**:
   ```bash
   npm run build
   npm start
   ```

2. **Test on Different Devices**:
   - Mobile (iOS/Android)
   - Tablet
   - Desktop (Chrome, Firefox, Safari)

3. **Check All Pages**:
   - [ ] Home page loads correctly
   - [ ] Circular carousel rotates smoothly
   - [ ] Tabs scroll horizontally
   - [ ] Navigation works on all pages
   - [ ] Contact form is functional
   - [ ] Images load properly
   - [ ] Dark/Light theme toggle works

4. **Performance Check**:
   - Run Lighthouse audit
   - Check page load speed
   - Verify mobile responsiveness

---

## 🎯 Post-Deployment

1. **Set up monitoring** (optional):
   - Google Analytics
   - Sentry for error tracking
   - Platform-specific analytics

2. **Configure domain**:
   - Point DNS to deployment platform
   - Set up SSL certificate (auto on most platforms)

3. **SEO Optimization**:
   - Add meta tags
   - Create sitemap.xml
   - Add robots.txt
   - Submit to Google Search Console

---

## 📞 Support

For deployment issues:
- Email: support@nodesio.in
- Phone: +91 72918-97879
- Location: Ballabgarh, Faridabad

---

## ✨ Your Website is Ready!

All code is production-ready with:
- ✅ No errors or warnings
- ✅ Optimized performance
- ✅ Professional design
- ✅ Responsive layout
- ✅ Modern animations
- ✅ SEO-friendly structure

**Deploy with confidence!** 🚀
