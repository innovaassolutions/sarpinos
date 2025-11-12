# Sarpino's Pizza Singapore - Next.js Frontend

Modern Next.js 15 application with full Sanity CMS integration for Sarpino's Pizza Singapore.

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Sanity CMS integration with ISR (Incremental Static Regeneration)
- ✅ Hot content updates (60-second revalidation)
- ✅ Optimized images with Next.js Image
- ✅ SEO-friendly with metadata
- ✅ Responsive design (mobile & desktop)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
frontend/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx       # Root layout with Header/Footer
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── locations/       # Locations page
│   └── order/           # Order page
├── components/          # React components
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/                 # Utilities
│   ├── sanity.client.ts # Sanity client configuration
│   └── sanity.queries.ts # Sanity data queries
└── public/              # Static assets

## Sanity Integration

This app connects to your Sanity project (ID: `o728fifb`) and fetches:
- Hero content
- Promotions
- Features
- About page content
- Locations

### ISR Configuration

Pages automatically revalidate every 60 seconds, meaning:
- Content editors can update Sanity
- Changes appear on the live site within 60 seconds
- No rebuild or redeploy needed!

## Building for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Done! Your site is live with hot content updates

## Environment Variables

No environment variables needed - Sanity client is configured with public credentials.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
