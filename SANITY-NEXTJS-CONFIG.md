# Sanity + Next.js Configuration Guide

This document explains how Sanity CMS is configured and integrated with the Next.js frontend application.

## Project Structure

```
sarpinos/
├── frontend/              # Next.js 16 application
│   ├── app/              # Next.js App Router pages
│   ├── lib/              # Sanity client and queries
│   │   ├── sanity.client.ts
│   │   └── sanity.queries.ts
│   └── .env.local        # Environment variables
└── sanity/               # Sanity Studio (CMS)
    ├── schemaTypes/      # Content schemas
    └── sanity.config.ts  # Studio configuration
```

## Environment Variables

### Frontend (.env.local)

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=o728fifb
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Site URL (update for production deployment)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Important:**
- Copy `.env.local.example` to `.env.local` for local development
- Update `NEXT_PUBLIC_SITE_URL` for production deployments
- These variables are prefixed with `NEXT_PUBLIC_` to be available in the browser

## Sanity Client Configuration

Located in [frontend/lib/sanity.client.ts](frontend/lib/sanity.client.ts):

```typescript
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o728fifb',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true, // Set to false if you need real-time updates
})
```

**CDN Settings:**
- `useCdn: true` - Faster, cached responses (default)
- `useCdn: false` - Real-time updates, slower but always fresh

## Data Fetching Queries

Located in [frontend/lib/sanity.queries.ts](frontend/lib/sanity.queries.ts):

Available query functions:
- `getSiteSettings()` - Global site configuration
- `getHeroContent()` - Homepage banner content
- `getPromotions()` - Active promotions
- `getLocations()` - Restaurant locations
- `getFeatures()` - Feature highlights
- `getAboutPage()` - About page content

All queries use GROQ (Sanity's query language).

## Content Types (Schemas)

Defined in [sanity/schemaTypes/](sanity/schemaTypes/):

1. **heroContent** - Homepage banner
2. **aboutPage** - About us page content
3. **promotion** - Promotional offers
4. **location** - Restaurant locations
5. **feature** - Feature highlights
6. **siteSettings** - Global site settings

## Page Implementation Pattern

### Static Pages with Revalidation

All content pages use Next.js App Router with ISR (Incremental Static Regeneration):

```typescript
// app/page.tsx
export const revalidate = 60 // Revalidate every 60 seconds

export default async function HomePage() {
  const heroContent = await getHeroContent()
  const promotions = await getPromotions()

  return (
    <main>
      {/* Render content */}
    </main>
  )
}
```

**Revalidation Strategy:**
- Pages are statically generated at build time
- Content refreshes every 60 seconds (1 minute)
- Provides fast page loads with near real-time content updates
- Adjust `revalidate` value based on your needs

## Sanity Studio Configuration

Located in [sanity/sanity.config.ts](sanity/sanity.config.ts):

### Preview URLs

The studio is configured to preview changes in the Next.js application:

```typescript
document: {
  productionUrl: async (prev, context) => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    // Maps document types to Next.js routes
    const {document} = context
    if (document._type === 'heroContent') return `${baseUrl}/`
    if (document._type === 'location') return `${baseUrl}/locations`
    if (document._type === 'aboutPage') return `${baseUrl}/about`
    return `${baseUrl}/`
  },
}
```

## Development Workflow

### 1. Start Sanity Studio

```bash
cd sanity
npm run dev
```

Access at: http://localhost:3333

### 2. Start Next.js Frontend

```bash
cd frontend
npm run dev
```

Access at: http://localhost:3000

### 3. Edit Content

1. Make changes in Sanity Studio
2. Click "Publish"
3. Wait up to 60 seconds (revalidation period)
4. Refresh the Next.js site to see changes

### 4. Force Immediate Updates (Development)

To see changes instantly during development, reduce the revalidate time in pages:

```typescript
export const revalidate = 1 // 1 second for development
```

Or use `revalidate = 0` to disable caching completely.

## Production Deployment

### Vercel Deployment (Recommended)

1. **Set Environment Variables in Vercel:**
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
   - `NEXT_PUBLIC_SITE_URL` (your production domain)

2. **Deploy Sanity Studio:**
   ```bash
   cd sanity
   npm run deploy
   ```
   This creates a hosted studio at `https://your-project.sanity.studio`

3. **Connect via Webhooks (Optional):**
   Set up Sanity webhooks to trigger revalidation immediately on content changes:
   - Go to Sanity Manage → API → Webhooks
   - Add webhook URL: `https://your-site.com/api/revalidate`

### Image Optimization

Next.js is configured to optimize Sanity CDN images:

```typescript
// next.config.ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.sanity.io',
    },
  ],
}
```

This allows using Next.js Image component with Sanity images:

```typescript
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'

<Image
  src={urlFor(image).url()}
  alt="Description"
  width={800}
  height={600}
/>
```

## Troubleshooting

### Build Errors

**Issue:** Build fails with Sanity connection errors

**Solution:**
- Verify `.env.local` exists and contains correct values
- Check Sanity project ID and dataset name
- Ensure Sanity Studio is accessible

### Content Not Updating

**Issue:** Changes in Sanity don't appear on the website

**Solutions:**
- Wait for revalidation period (60 seconds by default)
- Clear Next.js cache: `rm -rf .next` then rebuild
- Check if content is marked as "Published" in Sanity
- Verify the `active` field is set to `true` for promotions/locations/features

### Images Not Loading

**Issue:** Sanity images return 404 or don't display

**Solutions:**
- Verify `next.config.ts` includes Sanity CDN in `remotePatterns`
- Check image URLs include `cdn.sanity.io` domain
- Ensure images are actually uploaded in Sanity Studio

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Content Editing Guide](./SANITY-STUDIO-GUIDE.md) - For non-technical users

## Quick Reference

### Common Commands

```bash
# Frontend
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production build locally

# Sanity Studio
cd sanity
npm run dev          # Start Sanity Studio
npm run build        # Build studio
npm run deploy       # Deploy studio to Sanity's hosting
```

### File Locations

- **Sanity Client**: `frontend/lib/sanity.client.ts`
- **Queries**: `frontend/lib/sanity.queries.ts`
- **Environment**: `frontend/.env.local`
- **Next Config**: `frontend/next.config.ts`
- **Schemas**: `sanity/schemaTypes/`
- **Studio Config**: `sanity/sanity.config.ts`
