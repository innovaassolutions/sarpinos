# Content Import Script

This script will automatically import all existing content from your website into Sanity CMS.

## Setup Instructions

### 1. Get a Sanity API Token

1. Run this command to open your project settings:
   ```bash
   cd /Users/toddabraham/Documents/Coding/Projects/sarpinos/sanity
   npx sanity manage
   ```

2. In the browser that opens:
   - Go to **API** tab
   - Click **Add API token**
   - Name: `Import Script`
   - Permissions: **Editor**
   - Click **Add token**
   - **Copy the token** (you won't see it again!)

### 2. Run the Import Script

```bash
# Set your token as an environment variable
export SANITY_TOKEN="your-token-here"

# Run the import script
npx tsx scripts/import-content.ts
```

## What Gets Imported

- ✅ Site Settings (phone, social links)
- ✅ Hero Content (title, subtitle)
- ✅ 4 Features (Fresh Dough, Authentic Recipes, etc.)
- ✅ 3 Locations (Tampines, Eunos, Dunearn)
- ✅ 4 Promotions (text only - images need manual upload)

## After Import

You'll need to manually upload these images in Sanity Studio:

1. **Hero Background Image**: Upload to Hero Content
2. **Promotion Images**: Upload to each Promotion (from `assets/promos/` folder)
3. **Logos**: Upload to Site Settings (from `images/` and `assets/` folders)
4. **Payment Icons**: Upload to Site Settings
5. **Halal Badge**: Upload to Site Settings

## Troubleshooting

If you get a permissions error, make sure:
- Your token has **Editor** permissions
- You've set the `SANITY_TOKEN` environment variable
- You're running the command from the `sanity/` directory
