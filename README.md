# Sarpino's Pizza Singapore Website

A modern, server-side rendered website built with Next.js 16 and Sanity CMS, featuring dynamic content management, promotional content, brand story, and location information.

## Features

- **Server-Side Rendering (SSR)**: Fast initial page loads with SEO optimization
- **Incremental Static Regeneration (ISR)**: Content updates within 60 seconds without rebuilding
- **Content Management**: Sanity CMS for easy content editing without code changes
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Image Optimization**: Automatic image optimization with Next.js Image component
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Modern, utility-first styling

## Technology Stack

### Frontend
- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework
- **React 19**: Latest React features

### Content Management
- **Sanity CMS**: Headless CMS for content management
- **Sanity Studio**: Web-based content editing interface
- **GROQ**: Query language for fetching content

### Hosting & Deployment
- **Vercel**: Optimized Next.js hosting with Edge Network
- **GitHub**: Version control and collaboration
- **Automatic Deployments**: Push to deploy

## Project Structure

```
sarpinos/
├── frontend/                    # Next.js application
│   ├── app/                    # App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── about/page.tsx     # About page
│   │   ├── locations/page.tsx # Locations page
│   │   ├── order/page.tsx     # Order page
│   │   ├── privacy-policy/page.tsx
│   │   └── terms-of-use/page.tsx
│   ├── components/            # React components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Footer.tsx        # Site footer
│   │   └── Mobi2GoEmbed.tsx  # Online ordering widget
│   ├── lib/                   # Utilities
│   │   ├── sanity.client.ts  # Sanity client configuration
│   │   └── sanity.queries.ts # GROQ queries
│   ├── public/                # Static assets
│   │   ├── assets/           # Images, icons, logos
│   │   └── images/           # Additional images
│   ├── .env.local            # Environment variables (not in repo)
│   ├── next.config.ts        # Next.js configuration
│   ├── tailwind.config.ts    # Tailwind CSS configuration
│   └── package.json          # Dependencies
│
├── sanity/                    # Sanity Studio
│   ├── schemaTypes/          # Content models
│   │   ├── siteSettings.ts  # Global settings
│   │   ├── heroContent.ts   # Homepage hero
│   │   ├── aboutPage.ts     # About page content
│   │   ├── promotion.ts     # Promotions
│   │   ├── location.ts      # Locations
│   │   └── feature.ts       # Features
│   ├── actions/              # Custom Sanity actions
│   ├── sanity.config.ts     # Studio configuration
│   └── package.json         # Studio dependencies
│
├── DEPLOYMENT-GUIDE.md        # Deployment instructions
├── SANITY-NEXTJS-CONFIG.md    # Technical configuration
├── CONTENT-EDITING-GUIDE.md   # Content editor guide
├── SANITY-STUDIO-GUIDE.md     # Studio user guide
└── README.md                  # This file
```

## Setup & Installation

### Prerequisites

- Node.js 20+ LTS
- npm (comes with Node.js)
- Git

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment variables file
cp .env.local.example .env.local

# Edit .env.local with your configuration
# (Already configured with Sarpino's project ID)

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Sanity Studio Setup

```bash
# In a separate terminal, navigate to sanity directory
cd sanity

# Install dependencies
npm install

# Start Sanity Studio
npm run dev
```

The studio will be available at `http://localhost:3333`

### Full Development Setup

Run both servers simultaneously for full development experience:

**Terminal 1 (Frontend):**
```bash
cd frontend && npm run dev
```

**Terminal 2 (Sanity Studio):**
```bash
cd sanity && npm run dev
```

## Environment Variables

Create `frontend/.env.local` with:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=o728fifb
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Pages

### Homepage (`/`)
- Dynamic hero section with CTA
- Promotional grid (managed via Sanity)
- Features section
- Complete footer with contact info
- **Revalidation**: 60 seconds

### About (`/about`)
- Company story with rich text
- Values and mission
- Header image
- **Revalidation**: 60 seconds

### Locations (`/locations`)
- Regional location listing
- Contact information for each location
- Operating hours
- **Revalidation**: 60 seconds

### Order (`/order`)
- Embedded Mobi2Go ordering widget
- Static page (no revalidation needed)

### Privacy Policy & Terms (`/privacy-policy`, `/terms-of-use`)
- Static legal pages
- Standard footer/header

## Content Management

### Accessing Sanity Studio

**Production:**
- URL: `https://sarpinos-pizza.sanity.studio`
- Login with your Sanity account

**Local Development:**
- URL: `http://localhost:3333`
- Login with your Sanity account

### Content Types

1. **Site Settings** (Singleton)
   - Logo, site title, global settings

2. **Hero Content** (Singleton)
   - Homepage banner content and images

3. **About Page** (Singleton)
   - Company story, values, introduction

4. **Promotions** (Multiple)
   - Current deals and special offers
   - Can be activated/deactivated

5. **Locations** (Multiple)
   - Restaurant locations by region
   - Hours, contact info

6. **Features** (Multiple)
   - Feature highlights and benefits

### Editing Content

See [CONTENT-EDITING-GUIDE.md](./CONTENT-EDITING-GUIDE.md) for detailed instructions.

**Quick steps:**
1. Log into Sanity Studio
2. Navigate to content type
3. Make changes
4. Click "Publish"
5. Changes appear within 60 seconds on website

## Development Commands

### Frontend

```bash
cd frontend

# Development
npm run dev              # Start dev server (port 3000)
npm run build           # Build for production
npm start               # Run production build
npm run lint            # Check for errors

# Testing
npm test                # Run tests (if configured)
```

### Sanity Studio

```bash
cd sanity

# Development
npm run dev             # Start studio (port 3333)
npm run build           # Build studio
npm run deploy          # Deploy to Sanity hosting
```

## Deployment

### Automatic Deployment (Recommended)

The site is configured for automatic deployment via Vercel:

1. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. Vercel automatically:
   - Detects the push
   - Runs `npm run build` in `frontend/`
   - Deploys to production
   - Updates live site (2-5 minutes)

### Manual Deployment

If needed, you can deploy manually:

```bash
cd frontend
npm run build
# Upload .next/ folder to hosting
```

### Deploying Sanity Studio

```bash
cd sanity
npm run deploy
```

Studio will be available at `https://sarpinos-pizza.sanity.studio`

## Configuration Files

### Next.js Configuration (`frontend/next.config.ts`)

```typescript
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
```

Configures Sanity CDN for image optimization.

### Sanity Configuration (`sanity/sanity.config.ts`)

Configures:
- Project ID and dataset
- Content schemas
- Preview URLs
- Custom actions

### Tailwind Configuration (`frontend/tailwind.config.ts`)

Configures Tailwind CSS 4 with custom theme.

## Brand Guidelines

### Colors

Defined in Tailwind configuration:

- **Basil Green** (#4A8B5C): Primary brand color
- **Tomato Red** (#E63946): CTA buttons, accents
- **Pesto Green** (#2D5A3D): Dark green for headers
- **Salad Green** (#A4D65E): Accent highlights

### Typography

- **System fonts**: Optimized for readability
- **Headers**: Bold, prominent sizing
- **Body**: Clean, readable text

## Performance

### Incremental Static Regeneration (ISR)

Pages are regenerated every 60 seconds:
- First request after 60s triggers regeneration
- New content fetched from Sanity
- Subsequent visitors see updated content
- No full rebuild needed

### Image Optimization

Next.js automatically optimizes images:
- WebP format for modern browsers
- Responsive images for different screen sizes
- Lazy loading for better performance
- CDN delivery from Sanity

### SEO Optimization

- Server-side rendering for search engines
- Meta tags on all pages
- Alt text for images
- Semantic HTML structure

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Documentation

- **[DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)**: Complete deployment instructions
- **[SANITY-NEXTJS-CONFIG.md](./SANITY-NEXTJS-CONFIG.md)**: Technical configuration guide
- **[CONTENT-EDITING-GUIDE.md](./CONTENT-EDITING-GUIDE.md)**: Content editor guide
- **[SANITY-STUDIO-GUIDE.md](./SANITY-STUDIO-GUIDE.md)**: Studio user guide

## Troubleshooting

### Build Errors

```bash
# Clean build
cd frontend
rm -rf .next node_modules
npm install
npm run build
```

### Sanity Connection Issues

Verify environment variables in `.env.local`:
```bash
cd frontend
cat .env.local
```

Ensure project ID is correct: `o728fifb`

### Content Not Updating

1. Wait 60 seconds for ISR revalidation
2. Hard refresh browser (Ctrl+Shift+R)
3. Check content is published in Sanity
4. Verify "Active" toggle is ON

See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for more troubleshooting.

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally
4. Push to GitHub
5. Vercel creates preview deployment
6. Review and merge to main

## Support

For technical support:
- Review documentation in this repository
- Check [Next.js docs](https://nextjs.org/docs)
- Check [Sanity docs](https://www.sanity.io/docs)
- Contact web administrator

For content editing:
- Review [CONTENT-EDITING-GUIDE.md](./CONTENT-EDITING-GUIDE.md)
- Contact your content administrator

## Contact

Sarpino's Pizza Singapore:
- Phone: 6636 3636
- Website: [www.sarpinos.com](https://www.sarpinos.com)

## License

© 2001-2025 Sarpinos Pte Ltd. All rights reserved.

---

**Built with:** Next.js 16, React 19, Sanity CMS, TypeScript, Tailwind CSS 4

**Last Updated:** November 12, 2025
