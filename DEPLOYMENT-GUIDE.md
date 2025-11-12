# Sarpino's Pizza Singapore - Deployment & Content Management Guide

**Last Updated:** November 12, 2025
**Version:** 2.0
**Stack:** Next.js 16 + Sanity CMS

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture Diagram](#architecture-diagram)
3. [For Non-Technical Users: Managing Content via Sanity](#for-non-technical-users-managing-content-via-sanity)
4. [For Developers: Technical Details](#for-developers-technical-details)
5. [Security & Access Control](#security--access-control)
6. [Going Live: Connecting to sarpinos.com](#going-live-connecting-to-sarpinoscom)
7. [Common Workflows](#common-workflows)
8. [Troubleshooting](#troubleshooting)

---

## Overview

The Sarpino's Pizza Singapore website is built as a modern server-side rendered application with dynamic content management. Here's what that means:

- **Frontend:** Next.js 16 (React framework) with App Router
- **Content Management:** Sanity CMS (cloud-based, accessible via browser)
- **Hosting:** Vercel (optimized for Next.js)
- **Version Control:** GitHub repository
- **Deployment:** Automatic via Vercel when code changes are pushed

**Key Benefits:**
- Content editors can update text, images, promotions, and locations without touching code
- Fast page loads with Incremental Static Regeneration (ISR)
- SEO-optimized with server-side rendering
- Automatic image optimization

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                      LOCAL DEVELOPMENT                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  📁 Frontend Application (/frontend)                                │
│  ├── app/                    # Next.js App Router pages             │
│  │   ├── page.tsx           # Homepage                              │
│  │   ├── about/page.tsx     # About page                            │
│  │   ├── locations/page.tsx # Locations page                        │
│  │   └── order/page.tsx     # Order page                            │
│  ├── lib/                    # Sanity client & queries              │
│  ├── components/             # React components                     │
│  └── public/                 # Static assets                        │
│                                                                       │
│  📁 Sanity Studio (/sanity)                                         │
│  ├── schemaTypes/           # Content models                        │
│  ├── sanity.config.ts       # Studio configuration                 │
│  └── [Runs on port 3333]                                           │
│                                                                       │
│  Developer commands:                                                 │
│  • cd frontend && npm run dev → Next.js dev server (port 3000)     │
│  • cd sanity && npm run dev → Sanity Studio (port 3333)            │
│  • cd frontend && npm run build → Production build                 │
│                                                                       │
└───────────────────────┬─────────────────────────────────────────────┘
                        │
                        │ git push origin main
                        ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         GITHUB                                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  📦 Repository: innovaassolutions/sarpinos                           │
│                                                                       │
│  • Source code version control                                      │
│  • Collaboration between developers                                 │
│  • Triggers automatic deployments                                   │
│                                                                       │
└───────────────────────┬─────────────────────────────────────────────┘
                        │
                        │ Webhook trigger (automatic)
                        ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         VERCEL (Hosting)                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  🚀 Next.js Optimized Hosting Platform                             │
│                                                                       │
│  Automatic deployment process:                                       │
│  1. Detects code changes from GitHub                                │
│  2. Installs dependencies (npm install)                             │
│  3. Builds Next.js application (npm run build)                      │
│  4. Deploys to Edge Network (global CDN)                            │
│  5. Provides SSL certificate                                        │
│  6. Serves optimized pages with ISR                                 │
│                                                                       │
│  Features:                                                           │
│  • Server-side rendering (SSR)                                      │
│  • Incremental Static Regeneration (60s revalidation)              │
│  • Automatic image optimization                                     │
│  • Edge caching for fast global delivery                            │
│                                                                       │
│  Current URL: [Vercel-provided URL]                                 │
│  Custom Domain: sarpinos.com (to be configured)                     │
│                                                                       │
└───────────────────────┬─────────────────────────────────────────────┘
                        │
                        │ API calls during page generation
                        ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    SANITY CMS (Content Management)                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  📝 Cloud-Based Content Management System                           │
│                                                                       │
│  Project: Sarpino's Pizza Singapore                                 │
│  Project ID: o728fifb                                                │
│  Dataset: production                                                │
│                                                                       │
│  Access Methods:                                                     │
│  1. Web Interface: https://sarpinos-pizza.sanity.studio            │
│  2. Management: https://sanity.io/manage/project/o728fifb           │
│                                                                       │
│  Content Types:                                                      │
│  • Site Settings (logo, global settings)                            │
│  • Hero Content (homepage banner)                                   │
│  • About Page (company story & values)                              │
│  • Promotions (promotional cards)                                   │
│  • Locations (restaurant addresses & hours)                         │
│  • Features (feature highlights)                                    │
│                                                                       │
└───────────────────────┬─────────────────────────────────────────────┘
                        │
                        │ Content delivered via CDN API
                        ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    LIVE WEBSITE (sarpinos.com)                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  🌐 Production Website                                              │
│                                                                       │
│  Page Delivery Process:                                              │
│  1. User requests page (e.g., homepage)                             │
│  2. Vercel serves cached static page (if available)                 │
│  3. Every 60 seconds, page regenerates with fresh Sanity data       │
│  4. New visitors get updated content immediately                    │
│  5. Images automatically optimized for device                       │
│                                                                       │
│  ✅ Content updates visible within 60 seconds                        │
│  ✅ Fast page loads from Edge CDN                                    │
│  ✅ SEO-optimized with server-side rendering                         │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

---

## For Non-Technical Users: Managing Content via Sanity

### What is Sanity?

Sanity is a **cloud-based content management system** (CMS) that allows you to update website content through a user-friendly web interface—no coding required. Think of it like a sophisticated dashboard for your website content.

### Accessing Sanity Studio

You can access Sanity in two ways:

#### **Option 1: Web Browser (Recommended for Content Editors)**

1. **Go to your Sanity Studio URL:**
   - Production studio: `https://sarpinos-pizza.sanity.studio`
   - Management dashboard: `https://sanity.io/manage/project/o728fifb`

2. **Log in with your Sanity account:**
   - Use the email address that was granted access
   - You'll need to create a Sanity account if you don't have one (free)

3. **You'll see the content dashboard** organized into sections:
   - **📄 Main Pages**
     - 🏠 Homepage Banner
     - ℹ️ About Us Page
   - **🎯 Promotions & Offers**
   - **📍 Restaurant Locations**
   - **⭐ Features & Highlights**
   - **⚙️ Website Settings**

#### **Option 2: Local Studio (For Developers)**

Developers can run the studio locally:
```bash
cd sanity
npm run dev
```
This opens the studio at `http://localhost:3333`

### How to Update Content

#### **Editing Existing Content**

1. Click on the content type you want to edit (e.g., "Homepage Banner")
2. Make your changes in the form fields
3. Click the **"Publish"** button
4. **Changes appear on the website within 60 seconds** (due to ISR caching)

#### **Adding a New Promotion**

1. Click **"🎯 Promotions & Offers"** in the sidebar
2. Click the **"+ Create"** button
3. Fill in the fields:
   - **Title:** Name of the promotion (for internal reference)
   - **Image:** Upload the promotional image
   - **Alt Text:** Description for accessibility and SEO
   - **Link:** Where clicking the promo should go (e.g., `order`)
   - **Size:** Choose card size (small, medium, large)
   - **Order:** Number to control display order (lower numbers appear first)
   - **Active:** Toggle on to show, off to hide
4. Click **"Publish"**

#### **Adding a New Location**

1. Click **"📍 Restaurant Locations"** in the sidebar
2. Click **"+ Create"**
3. Fill in:
   - **Name:** Restaurant name (e.g., "Orchard Central")
   - **Address:** Full street address
   - **Region:** Select from dropdown (East, Central, West, North)
   - **Operating Hours:** Text field for hours
   - **Phone:** Contact number
   - **Order:** Display order within the region
   - **Active:** Toggle to show/hide
4. Click **"Publish"**

#### **Updating the Homepage Hero Section**

1. Click **"📄 Main Pages"** → **"🏠 Homepage Banner"**
2. Edit:
   - **Title:** Main headline
   - **Subtitle:** Secondary text
   - **CTA Text:** Button text (e.g., "Order Now")
   - **CTA Link:** Button destination (e.g., `order`)
   - **Background Image:** Upload new hero image
3. Click **"Publish"**

#### **Editing the About Us Page**

1. Click **"📄 Main Pages"** → **"ℹ️ About Us Page"**
2. Edit:
   - **Page Title:** Main heading
   - **Introduction:** Opening paragraph
   - **Our Story:** Company history (supports rich text)
   - **Values:** Company values (list format)
3. Click **"Publish"**

### Important Notes for Content Editors

✅ **Changes appear within 60 seconds** - Pages regenerate every minute with new content
✅ **Can't break the site** - Sanity validates your content
✅ **Undo available** - Can revert to previous versions via document history
✅ **Preview available** - Click "Open preview" to see live page (Ctrl+Option+O)
❌ **Don't delete schemas** - Only edit content, not the structure
❌ **Image size matters** - Use high-quality images but compress them first (recommended max 2MB)

### Content Best Practices

**Images:**
- Promotions: 800x800px minimum (square or landscape)
- Hero background: 1920x1080px minimum
- Logo: 400x400px with transparent background
- Format: JPG for photos, PNG for graphics/logos
- Compression: Use tools like TinyPNG before uploading

**Text:**
- Hero title: Keep under 60 characters
- Hero subtitle: Keep under 120 characters
- Promotion titles: 3-5 words max
- Location addresses: Use full, accurate addresses for SEO

**SEO Tips:**
- Always fill in Alt Text for images
- Use descriptive, keyword-rich names
- Keep active content up-to-date (remove expired promotions)
- Test pages on mobile devices

---

## For Developers: Technical Details

### Technology Stack

**Frontend:**
- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Runtime:** Node.js 20+
- **Package Manager:** npm
- **Dependencies:**
  - `@sanity/client` - API client
  - `@sanity/image-url` - Image URL builder
  - `@portabletext/react` - Rich text rendering
  - `next-sanity` - Next.js integration helpers

**CMS:**
- **Platform:** Sanity.io
- **Project ID:** `o728fifb`
- **Dataset:** `production`
- **API Version:** `2024-01-01`
- **Studio:** Sanity v4

**Hosting & Deployment:**
- **Hosting:** Vercel
- **Repository:** GitHub (`innovaassolutions/sarpinos`)
- **Branch:** `main` (auto-deploys)

### Project Structure

```
sarpinos/
├── frontend/                  # Next.js application
│   ├── app/                  # App Router pages
│   │   ├── page.tsx         # Homepage
│   │   ├── about/page.tsx   # About page
│   │   ├── locations/page.tsx
│   │   ├── order/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   └── terms-of-use/page.tsx
│   ├── lib/                 # Utilities
│   │   ├── sanity.client.ts    # Sanity client config
│   │   └── sanity.queries.ts   # GROQ queries
│   ├── components/          # React components
│   ├── public/              # Static assets
│   ├── .env.local           # Environment variables
│   ├── next.config.ts       # Next.js configuration
│   ├── tailwind.config.ts   # Tailwind CSS config
│   └── package.json
│
├── sanity/                  # Sanity Studio (separate app)
│   ├── sanity.config.ts     # Studio configuration
│   ├── schemaTypes/         # Content models
│   │   ├── siteSettings.ts
│   │   ├── heroContent.ts
│   │   ├── aboutPage.ts
│   │   ├── promotion.ts
│   │   ├── location.ts
│   │   └── feature.ts
│   ├── actions/             # Custom actions
│   └── package.json
│
├── DEPLOYMENT-GUIDE.md      # This file
├── SANITY-NEXTJS-CONFIG.md  # Technical configuration guide
└── SANITY-STUDIO-GUIDE.md   # User-friendly editing guide
```

### Key Configuration Files

**frontend/.env.local**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=o728fifb
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**frontend/next.config.ts**
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

export default nextConfig
```

**frontend/lib/sanity.client.ts**
```typescript
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o728fifb',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
})
```

**Example Page with ISR (app/page.tsx)**
```typescript
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

### Content Schema

Located in `sanity/schemaTypes/`:

1. **siteSettings.ts** (Singleton)
   - Logo
   - Site title
   - Phone number
   - Social media links

2. **heroContent.ts** (Singleton)
   - Title, subtitle
   - CTA text and link
   - Background image

3. **aboutPage.ts** (Singleton)
   - Page title
   - Introduction
   - Our story (portable text)
   - Values array

4. **promotion.ts** (Multiple)
   - Title, image, alt text
   - Link, size, order
   - Active toggle

5. **location.ts** (Multiple)
   - Name, address, region
   - Operating hours, phone
   - Order, active toggle

6. **feature.ts** (Multiple)
   - Title, description
   - Icon, order
   - Active toggle

### Development Workflow

**Local Development:**
```bash
# Install dependencies
cd frontend
npm install

# Start Next.js dev server
npm run dev         # Runs on http://localhost:3000

# Build for production
npm run build

# Run production build locally
npm start
```

**Sanity Studio Development:**
```bash
cd sanity
npm install
npm run dev       # Opens at http://localhost:3333
npm run deploy    # Deploy studio to Sanity hosting
```

**Full Development Setup:**
```bash
# Terminal 1: Run Next.js
cd frontend && npm run dev

# Terminal 2: Run Sanity Studio
cd sanity && npm run dev
```

**Deployment:**
```bash
# Make changes to code
# Commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub (triggers automatic Vercel deployment)
git push origin main

# Vercel automatically:
# 1. Pulls latest code
# 2. Runs npm install in frontend/
# 3. Runs npm run build
# 4. Deploys to production
# 5. Updates live site (2-5 minutes)
```

### Build Process

When code is pushed to GitHub, Vercel:

1. Clones the repository
2. Changes to `frontend/` directory
3. Installs dependencies: `npm install`
4. Loads environment variables from Vercel settings
5. Runs build command: `npm run build`
6. Next.js:
   - Fetches content from Sanity
   - Generates static pages
   - Bundles JavaScript and CSS
   - Optimizes images
   - Creates production build in `.next/` folder
7. Deploys to Edge Network
8. Provides deployment URL

### Incremental Static Regeneration (ISR)

Pages are configured with `revalidate = 60`:
- Pages generated at build time
- Cached for 60 seconds
- After 60 seconds, next request triggers regeneration
- New data fetched from Sanity
- Page updated with fresh content
- Subsequent visitors get updated version

This means **content changes appear within 60 seconds** without rebuilding the entire site.

---

## Security & Access Control

### Sanity Access Management

Sanity provides robust security through role-based access control:

#### **User Roles**

1. **Administrator**
   - Full access to all content
   - Can manage users and project settings
   - Can deploy schema changes
   - Can access API keys

2. **Editor**
   - Can create, edit, and publish all content
   - Cannot manage users or settings
   - Cannot access sensitive project settings

3. **Viewer**
   - Read-only access
   - Can view content but not edit

#### **How to Add Users to Sanity**

**Option 1: Via Sanity Management Console**

1. Go to https://sanity.io/manage/project/o728fifb
2. Click **"Team"** in the left sidebar
3. Click **"Invite member"**
4. Enter the user's email address
5. Select their role (Administrator, Editor, or Viewer)
6. Click **"Send invitation"**
7. User receives an email invitation
8. They create a Sanity account (free) and gain access

**Option 2: Via CLI (Developers)**

```bash
cd sanity
npx sanity users invite user@example.com --role editor
```

#### **Best Practices for User Management**

- Give content editors the **Editor** role (not Administrator)
- Limit **Administrator** role to technical leads
- Regularly audit user list and remove inactive users
- Use unique email addresses (no shared accounts)
- Enable two-factor authentication for administrators

### API Security

**Read-Only Public API:**
- The Sanity client uses **CDN mode** (`useCdn: true`)
- Provides read-only access to published content
- No authentication token required for reading
- This is **intentional and secure** - it's how Sanity works

**Write Access:**
- Only authenticated users in Sanity Studio can write/publish
- Requires login via Sanity account
- API write tokens are NOT exposed in client-side code

**Data Security:**
- All API calls use HTTPS encryption
- Content cached on Sanity's CDN for performance
- Draft content never exposed via public API
- Only published content visible on website

### Environment Variables & Secrets

**Current Setup:**
- Project ID (`o728fifb`) is public - this is normal
- Dataset name (`production`) is public - this is normal
- No sensitive API tokens in client-side code

**Vercel Environment Variables:**
Set these in Vercel project settings:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=o728fifb
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=https://sarpinos.com
```

### CORS & Domain Security

Sanity automatically handles CORS:
- By default, allows requests from any domain
- Can be restricted in Sanity project settings

**To restrict API access to your domain:**
1. Go to https://sanity.io/manage/project/o728fifb/settings
2. Click **"API"** settings
3. Under **"CORS Origins"**, add:
   - `https://sarpinos.com`
   - `https://www.sarpinos.com`
   - Your Vercel preview domains
4. Click **"Save"**

### SSL/TLS Certificates

**Vercel provides:**
- Automatic SSL certificates via Let's Encrypt
- HTTPS enforced by default
- Automatic certificate renewal
- Support for custom domains

**Sanity provides:**
- All API calls over HTTPS
- CDN with SSL/TLS encryption
- Secure asset delivery

---

## Going Live: Connecting to sarpinos.com

### Prerequisites

Before connecting the custom domain, ensure you have:

- ✅ Access to the domain registrar where sarpinos.com is registered
- ✅ Vercel account connected to the GitHub repository
- ✅ Website successfully deployed on Vercel (check preview URL)
- ✅ Content published in Sanity and displaying correctly

### Step 1: Configure Domain in Vercel

1. **Log into Vercel:**
   - Go to https://vercel.com
   - Navigate to your project (sarpinos)

2. **Add Custom Domain:**
   - Click on your project
   - Go to **"Settings"** tab
   - Click **"Domains"** in the left sidebar
   - Click **"Add Domain"**
   - Enter: `sarpinos.com`
   - Click **"Add"**

3. **Add www Subdomain (Recommended):**
   - Click **"Add Domain"** again
   - Enter: `www.sarpinos.com`
   - Click **"Add"**
   - Set one as primary (usually `sarpinos.com`)

4. **Get DNS Records:**
   - Vercel will show you the DNS records needed
   - Keep this tab open - you'll need these values

### Step 2: Configure DNS Records

Vercel will provide instructions for DNS configuration. You'll need to add records at your domain registrar:

#### **Recommended Setup: A Record + CNAME**

Add these records at your domain registrar:

| Type | Name | Value           | TTL  |
|------|------|-----------------|------|
| A    | @    | 76.76.21.21     | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

**Note:** Use the exact IP addresses and CNAME targets shown in your Vercel dashboard.

### Step 3: Update DNS at Your Registrar

The process varies by registrar. Common examples:

#### **GoDaddy**

1. Log into GoDaddy account
2. Go to **"My Products"** → **"Domains"**
3. Click **"DNS"** next to sarpinos.com
4. Click **"Add"** to add new records
5. Add the A and CNAME records from Vercel
6. Click **"Save"**

#### **Namecheap**

1. Log into Namecheap
2. Go to **"Domain List"**
3. Click **"Manage"** next to sarpinos.com
4. Go to **"Advanced DNS"** tab
5. Click **"Add New Record"**
6. Add the records from Vercel
7. Click **"Save All Changes"**

#### **Cloudflare**

1. Log into Cloudflare
2. Select sarpinos.com
3. Click **"DNS"** tab
4. Click **"Add record"**
5. Add the records from Vercel
6. **Important:** Set proxy status to **"DNS only"** (gray cloud) initially
7. Click **"Save"**

### Step 4: Verify Domain Connection

1. **Wait for DNS Propagation:**
   - Usually takes 5-30 minutes
   - Can take up to 48 hours in rare cases
   - Check status: https://dnschecker.org/

2. **Check Vercel Dashboard:**
   - Go back to Vercel → Domains
   - Wait for status to show **"Valid Configuration"**
   - Green checkmark when ready

3. **Test the Domain:**
   - Visit `https://sarpinos.com`
   - Verify site loads correctly
   - Test `https://www.sarpinos.com` as well

4. **SSL Certificate:**
   - Vercel automatically provisions SSL
   - Happens within minutes of DNS validation
   - HTTPS works immediately

### Step 5: Update Environment Variables in Vercel

1. Go to Vercel project → **Settings** → **Environment Variables**
2. Update `NEXT_PUBLIC_SITE_URL`:
   - Set to: `https://sarpinos.com`
3. Click **"Save"**
4. **Redeploy** to apply changes

### Step 6: Update Sanity Preview URLs

Once the domain is live, update preview URLs:

1. Open `sanity/sanity.config.ts`
2. Update the `productionUrl` base URL:

```typescript
productionUrl: async (prev, context) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarpinos.com'
  // ... rest of logic
}
```

3. Deploy the updated studio:
```bash
cd sanity
npm run deploy
```

Now editors can preview content on the live site from Sanity Studio.

### Step 7: Final Checks

✅ **Test all pages:**
- Homepage: `https://sarpinos.com`
- About: `https://sarpinos.com/about`
- Locations: `https://sarpinos.com/locations`
- Order: `https://sarpinos.com/order`

✅ **Test content loading:**
- Verify promotions appear
- Check locations list
- Confirm hero content displays

✅ **Test on mobile:**
- Check responsive layout
- Verify navigation works
- Test touch interactions

✅ **Test performance:**
- Use Google PageSpeed Insights: https://pagespeed.web.dev/
- Aim for 90+ score on both mobile and desktop

✅ **SEO checks:**
- View page source, verify meta tags
- Submit sitemap to Google Search Console
- Check structured data

---

## Common Workflows

### For Content Editors

#### **Publishing a New Promotion**

1. Log into Sanity Studio
2. Click **"🎯 Promotions & Offers"** → **"Create"**
3. Upload image, add title and link
4. Set display order and size
5. Toggle **"Active"** to ON
6. Click **"Publish"**
7. Check website within 60 seconds

**Time to appear:** Up to 60 seconds (ISR revalidation)

#### **Updating Operating Hours**

1. Log into Sanity Studio
2. Click **"📍 Restaurant Locations"**
3. Find the location to update
4. Edit **"Operating Hours"** field
5. Click **"Publish"**

**Time to appear:** Up to 60 seconds

#### **Hiding an Expired Promotion**

1. Find the promotion in Sanity
2. Toggle **"Active"** to OFF
3. Click **"Publish"**
4. Promotion disappears from website within 60 seconds

**Don't delete** - just deactivate so you can reuse later

#### **Editing the About Us Page**

1. Click **"📄 Main Pages"** → **"ℹ️ About Us Page"**
2. Edit any section:
   - Introduction
   - Our Story (rich text editor)
   - Values list
3. Click **"Publish"**
4. Changes appear within 60 seconds

### For Developers

#### **Deploying Code Changes**

```bash
# 1. Make changes locally
# 2. Test with dev server
cd frontend
npm run dev

# 3. Build locally to verify
npm run build

# 4. Commit changes
git add .
git commit -m "Description of changes"

# 5. Push to GitHub (triggers Vercel deployment)
git push origin main

# 6. Monitor deployment at vercel.com (2-5 minutes)
# 7. Verify changes on live site
```

#### **Updating Content Schema**

```bash
# 1. Edit schema files in sanity/schemaTypes/
# 2. Test locally
cd sanity
npm run dev

# 3. Deploy schema changes
npm run deploy

# 4. Update queries in frontend/lib/sanity.queries.ts if needed
# 5. Update TypeScript types if needed
# 6. Push code changes
cd ..
git add .
git commit -m "Update content schema"
git push origin main
```

#### **Adding a New Page**

1. Create page file: `frontend/app/new-page/page.tsx`
2. Create GROQ query in `lib/sanity.queries.ts` if needed
3. Add navigation link in components
4. Test locally: `npm run dev`
5. Commit and push to GitHub
6. Vercel automatically deploys

Example new page:
```typescript
// frontend/app/menu/page.tsx
export const revalidate = 60

export default async function MenuPage() {
  // Fetch data from Sanity
  return (
    <main>
      <h1>Menu</h1>
      {/* Content */}
    </main>
  )
}
```

#### **Rolling Back a Deployment**

**In Vercel (Recommended):**
1. Go to **"Deployments"** tab
2. Find previous working deployment
3. Click **"..."** → **"Promote to Production"**
4. Confirm rollback

**Via Git:**
```bash
git revert HEAD
git push origin main
```

#### **Force Revalidation**

To immediately update all pages with new content:

```bash
# In Next.js, add revalidate function
# frontend/app/api/revalidate/route.ts
export async function POST(request: Request) {
  const { revalidatePath } = await import('next/cache')
  revalidatePath('/')
  return Response.json({ revalidated: true })
}
```

Then call: `curl -X POST https://sarpinos.com/api/revalidate`

---

## Troubleshooting

### Content Not Updating

**Symptoms:** Changes in Sanity don't appear on website

**Solutions:**
1. Wait 60 seconds for ISR revalidation
2. Hard refresh browser: `Cmd/Ctrl + Shift + R`
3. Check browser console for errors
4. Verify content is **Published** (not just saved)
5. Check if content is marked **Active**
6. Check Sanity project status: https://status.sanity.io/

### Website Not Loading

**Symptoms:** sarpinos.com returns error or doesn't load

**Solutions:**
1. Check Vercel deployment status
2. Review deployment logs for errors
3. Verify DNS records are correct
4. Check domain registrar DNS settings
5. Wait for DNS propagation (use dnschecker.org)
6. Check Vercel status: https://www.vercel-status.com/

### Build Failures on Vercel

**Symptoms:** Deployment fails with error

**Solutions:**
1. Check Vercel deployment logs (detailed error messages)
2. Test build locally: `cd frontend && npm run build`
3. Verify all environment variables are set in Vercel
4. Check TypeScript errors: `npm run lint`
5. Ensure all dependencies are in package.json
6. Verify Sanity connection works

### Images Not Displaying

**Symptoms:** Broken image icons or missing images

**Solutions:**
1. Verify image was uploaded in Sanity
2. Check image asset is published
3. Verify `next.config.ts` includes Sanity CDN in `remotePatterns`
4. Check browser console for errors
5. Verify image URLs include `cdn.sanity.io` domain
6. Try re-uploading the image

### Mobile Menu Not Working

**Symptoms:** Navigation doesn't work on mobile

**Solutions:**
1. Check browser console for JavaScript errors
2. Test on different mobile devices/browsers
3. Verify responsive CSS is working
4. Clear browser cache
5. Check if JavaScript is enabled

### Slow Page Loads

**Symptoms:** Pages load slowly

**Solutions:**
1. Check image sizes (compress large images)
2. Verify ISR caching is working (check Vercel logs)
3. Use Vercel Analytics to identify bottlenecks
4. Optimize Sanity queries (fetch only needed fields)
5. Check network tab in browser dev tools

### TypeScript Errors

**Symptoms:** Build fails with TypeScript errors

**Solutions:**
1. Run `npm run lint` to see errors
2. Check type definitions for Sanity data
3. Ensure all imports are correct
4. Verify `tsconfig.json` is properly configured
5. Update TypeScript: `npm install -D typescript@latest`

---

## Support & Resources

### Documentation

- **Next.js:** https://nextjs.org/docs
- **Sanity:** https://www.sanity.io/docs
- **Vercel:** https://vercel.com/docs
- **Project Technical Guide:** See `SANITY-NEXTJS-CONFIG.md`
- **Content Editing Guide:** See `SANITY-STUDIO-GUIDE.md`

### Status Pages

- **Sanity:** https://status.sanity.io/
- **Vercel:** https://www.vercel-status.com/
- **GitHub:** https://www.githubstatus.com/

### Project-Specific

- **Repository:** https://github.com/innovaassolutions/sarpinos
- **Sanity Project:** https://sanity.io/manage/project/o728fifb
- **Sanity Studio:** https://sarpinos-pizza.sanity.studio
- **Vercel Dashboard:** https://vercel.com (search for "sarpinos")

### Getting Help

**For Content Questions:**
- Check `SANITY-STUDIO-GUIDE.md`
- Contact your project administrator
- Review Sanity documentation

**For Technical Issues:**
- Check `SANITY-NEXTJS-CONFIG.md`
- Review Vercel deployment logs
- Check browser console for errors
- Contact the development team

---

## Appendix: Quick Reference

### Important URLs

| Resource | URL |
|----------|-----|
| Live Website | https://sarpinos.com (after domain setup) |
| Vercel Preview | [Check Vercel dashboard] |
| Sanity Studio | https://sarpinos-pizza.sanity.studio |
| Sanity Management | https://sanity.io/manage/project/o728fifb |
| GitHub Repository | https://github.com/innovaassolutions/sarpinos |

### Important Commands

```bash
# Frontend Development
cd frontend
npm install              # Install dependencies
npm run dev             # Start dev server (port 3000)
npm run build           # Build for production
npm start               # Run production build locally
npm run lint            # Check for errors

# Sanity Studio
cd sanity
npm install              # Install dependencies
npm run dev             # Run studio locally (port 3333)
npm run build           # Build studio
npm run deploy          # Deploy studio to Sanity hosting

# Git Operations
git status              # Check changed files
git add .               # Stage all changes
git commit -m "msg"     # Commit with message
git push origin main    # Deploy to production
```

### Content Types Overview

| Type | Purpose | Count | Revalidation |
|------|---------|-------|--------------|
| Site Settings | Global settings | 1 (singleton) | 60s |
| Hero Content | Homepage banner | 1 (singleton) | 60s |
| About Page | Company story | 1 (singleton) | 60s |
| Promotions | Promo cards | Multiple | 60s |
| Locations | Restaurant info | Multiple | 60s |
| Features | Feature highlights | Multiple | 60s |

### Environment Variables

```env
# Required in Vercel and .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=o728fifb
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=https://sarpinos.com
```

### DNS Record Templates

**For Apex Domain (sarpinos.com):**
```
Type: A
Name: @
Value: [Vercel IP from dashboard]
TTL: 3600
```

**For www Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

---

**End of Guide**

*Last Updated: November 12, 2025*
*Document Version: 2.0*
*Project: Sarpino's Pizza Singapore*
*Stack: Next.js 16 + Sanity CMS*
