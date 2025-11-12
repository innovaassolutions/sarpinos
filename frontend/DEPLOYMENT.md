# Deployment Guide

## ✅ What's Been Completed

Your new Next.js + Sanity website is ready to deploy! Here's what was built:

### Pages Created
- **Home** (`/`) - Dynamic hero, promotions, and features from Sanity
- **About** (`/about`) - Fully dynamic from Sanity (pageTitle, introduction, ourStory, values)
- **Locations** (`/locations`) - Dynamic locations grouped by region
- **Order** (`/order`) - Order page with phone and online ordering

### Key Features
✅ **Hot Content Updates** - ISR with 60-second revalidation
✅ **SEO Optimized** - Metadata for all pages
✅ **Mobile Responsive** - Works perfectly on all devices
✅ **TypeScript** - Full type safety
✅ **Tailwind CSS** - Modern, maintainable styling
✅ **Image Optimization** - Next.js Image component

## 🚀 Deploying to Vercel

### Option 1: Deploy via Git (Recommended)

1. **Push frontend folder to GitHub:**
   ```bash
   cd frontend
   git init
   git add .
   git commit -m "Initial Next.js + Sanity site"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Done!** Your site will be live in ~2 minutes

### Option 2: Deploy via Vercel CLI

```bash
cd frontend
npx vercel
```

Follow the prompts and your site will be deployed.

## 🔄 How Content Updates Work

1. Content editor updates Sanity Studio
2. Changes are saved to Sanity
3. Next.js automatically revalidates within 60 seconds
4. **No rebuild or redeploy needed!**

## 📝 Post-Deployment Checklist

- [ ] Test all pages on live URL
- [ ] Update About Us content in Sanity
- [ ] Verify content changes appear within 60 seconds
- [ ] Test mobile responsiveness
- [ ] Update DNS to point to Vercel (if using custom domain)

## 🔧 Environment Variables

No environment variables needed! The Sanity client is configured with public credentials.

## 📊 Performance

All pages are statically generated at build time and revalidated every 60 seconds:
- Home: `/` (Revalidate: 60s)
- About: `/about` (Revalidate: 60s)
- Locations: `/locations` (Revalidate: 60s)
- Order: `/order` (Static)

## 🆘 Troubleshooting

### Build fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Try building locally first: `npm run build`

### Content not updating
- Check ISR revalidation time (currently 60 seconds)
- Verify Sanity project ID is correct in `lib/sanity.client.ts`
- Check Sanity Studio for published changes

### Images not loading
- Verify `cdn.sanity.io` is in `next.config.ts` remotePatterns
- Check image URLs in Sanity Studio

## 📞 Need Help?

- Next.js Docs: https://nextjs.org/docs
- Sanity Docs: https://www.sanity.io/docs
- Vercel Support: https://vercel.com/support
