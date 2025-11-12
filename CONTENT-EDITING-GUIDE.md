# Content Editing Guide for Sarpino's Pizza Singapore

This guide explains how non-technical users can edit website content using Sanity Studio.

## Accessing Sanity Studio

1. Open your web browser
2. Go to one of these URLs:
   - **Production Studio:** `https://sarpinos-pizza.sanity.studio` (for live content editing)
   - **Local Studio:** `http://localhost:3333` (for developers only)

## Logging In

1. Enter your email address (the one your administrator invited)
2. If this is your first time:
   - Click "Sign up" to create your Sanity account (free)
   - Check your email for the invitation link
   - Complete the signup process
3. Once logged in, you'll see the Sanity Studio dashboard

## Understanding the Dashboard

When you open Sanity Studio, you'll see a well-organized menu:

```
✏️ Edit Your Website
├── 📄 Main Pages
│   ├── 🏠 Homepage Banner
│   └── ℹ️ About Us Page
├── 🎯 Promotions & Offers
├── 📍 Restaurant Locations
├── ⭐ Features & Highlights
└── ⚙️ Website Settings
```

Each icon and emoji helps you quickly identify what you're editing!

## How to Edit Content

### Editing Existing Content

1. **Navigate to the content** you want to edit by clicking on it in the menu
2. **Make your changes** in the form fields
3. **Click "Publish"** button (top right corner)
4. **Wait up to 60 seconds** for changes to appear on the website
5. **Preview your changes** by clicking "Open preview" (Ctrl+Option+O)

**Important:** Changes appear within 60 seconds due to the website's caching system.

### Adding New Items

For sections that allow multiple items (Promotions, Locations, Features):

1. Click on the section name (e.g., "🎯 Promotions & Offers")
2. Click the **"+ Create"** button
3. Fill in all required fields (marked with red asterisk *)
4. Set the **"Active"** toggle to ON to show it on the website
5. Click **"Publish"** to make it live

### Hiding Content Without Deleting

Every promotion, location, and feature has an **"Active"** toggle:
- **Toggle ON** = Visible on website
- **Toggle OFF** = Hidden from website (but not deleted)

This is useful for:
- Temporarily hiding expired promotions
- Seasonal locations
- Features you might want to show again later

## Content Sections Explained

### 🏠 Homepage Banner (Hero Content)

This is the first thing visitors see on your homepage.

**Fields:**
- **Title**: Big headline (keep under 60 characters)
- **Subtitle**: Supporting text (keep under 120 characters)
- **CTA Text**: Button text (e.g., "Order Now", "View Menu")
- **CTA Link**: Where the button goes (e.g., `order`, `locations`)
- **Background Image**: Large hero image (recommended: 1920x1080px)

**Tips:**
- Use compelling, action-oriented language
- Choose high-quality, appetizing images
- Test the button link before publishing

### ℹ️ About Us Page

Tell your company's story and values.

**Fields:**
- **Page Title**: Main heading for the page
- **Introduction**: Opening paragraph (2-3 sentences)
- **Our Story**: Full company history with rich text formatting
  - You can add bold, italics, bullet points, and headings
  - Keep paragraphs short for readability
- **Values**: List of company values (each with title and description)

**Tips:**
- Use the rich text editor toolbar for formatting
- Break up long text with headings
- Keep the tone friendly and authentic

### 🎯 Promotions & Offers

Display current deals and special offers.

**Fields:**
- **Title**: Internal name (not shown on website)
- **Image**: Promotional image (recommended: 800x800px minimum)
- **Alt Text**: Description for accessibility and SEO
- **Link**: Where clicking goes (e.g., `order`, `menu`)
- **Size**: small, medium, or large card
- **Order**: Display order (lower numbers appear first)
- **Active**: Toggle to show/hide

**Tips:**
- Compress images before uploading (max 2MB)
- Always fill in Alt Text for accessibility
- Deactivate expired promotions instead of deleting them

### 📍 Restaurant Locations

Manage all your restaurant locations.

**Fields:**
- **Name**: Location name (e.g., "Orchard Central")
- **Address**: Full street address
- **Region**: East, Central, West, or North
- **Operating Hours**: Text field for hours
- **Phone**: Contact number
- **Order**: Display order within region
- **Active**: Toggle to show/hide

**Tips:**
- Use full, accurate addresses for SEO
- Keep hours updated for holidays
- Order locations by popularity or geography

### ⭐ Features & Highlights

Showcase what makes your restaurant special.

**Fields:**
- **Title**: Feature name (e.g., "Fresh Ingredients")
- **Description**: Brief explanation
- **Icon**: Visual representation
- **Order**: Display order (lower numbers first)
- **Active**: Toggle to show/hide

**Tips:**
- Keep descriptions concise (1-2 sentences)
- Use consistent icon style
- Highlight unique selling points

### ⚙️ Website Settings

Global settings that affect the entire website.

**Fields:**
- **Site Title**: Your website name
- **Logo**: Company logo (recommended: 400x400px PNG with transparency)
- **Phone Number**: Main contact number
- **Email**: Contact email
- **Social Media Links**: Facebook, Instagram, etc.

**Tips:**
- Changes here affect every page
- Use high-resolution logo
- Double-check all contact information

## Working with Images

### Image Requirements

**Homepage Hero:**
- Size: 1920x1080px minimum
- Format: JPG
- Max file size: 2MB

**Promotions:**
- Size: 800x800px minimum
- Format: JPG or PNG
- Max file size: 2MB

**Logo:**
- Size: 400x400px
- Format: PNG with transparent background
- Max file size: 500KB

### Uploading Images

1. Click on the image field
2. Click "Upload" or drag and drop
3. Select your image file
4. Adjust the hotspot (the circular focus point):
   - Drag it to the most important part of the image
   - This ensures the key area is visible when the image is cropped
5. Fill in **Alt Text** (description for accessibility)
6. Click "Publish"

### Image Best Practices

- ✅ Compress images before uploading (use tools like TinyPNG)
- ✅ Use descriptive Alt Text for every image
- ✅ Choose high-quality, professional photos
- ✅ Ensure images are well-lit and in focus
- ❌ Don't upload huge files (over 2MB)
- ❌ Don't use blurry or pixelated images

## Using the Rich Text Editor

The "Our Story" section on the About page uses a rich text editor with formatting options:

**Available formatting:**
- **Bold**: Highlight important text
- *Italic*: Add emphasis
- Headings: H2, H3, H4 for structure
- Bullet lists: For easy scanning
- Numbered lists: For sequential items
- Links: Add hyperlinks to other pages

**Tips:**
- Use headings to break up long content
- Keep paragraphs short (3-4 sentences max)
- Use bullet points for lists
- Preview your formatting before publishing

## Publishing Workflow

### Before Publishing

✅ **Review your changes:**
- Check spelling and grammar
- Verify all required fields are filled
- Preview images to ensure they display correctly
- Test any links you added

✅ **Use the preview feature:**
- Click "Open preview" (Ctrl+Option+O on Mac)
- Check how it looks on the live website
- Test on mobile if possible

### Publishing Changes

1. Click the **"Publish"** button (top right)
2. Your changes are saved to Sanity
3. Wait **up to 60 seconds** for changes to appear on the website
4. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

### If You Make a Mistake

Don't panic! You have options:

1. **Edit and republish**: Just make the correction and publish again
2. **View history**: Click "..." menu → "Review changes" to see previous versions
3. **Unpublish**: Hide the content from the website
4. **Contact admin**: Your administrator can help restore previous versions

## Keyboard Shortcuts

Speed up your editing with these shortcuts:

- **Ctrl+S** (Cmd+S on Mac): Save draft
- **Ctrl+Alt+P** (Cmd+Option+P): Publish
- **Ctrl+Alt+O** (Cmd+Option+O): Open preview

## Best Practices

### Content Writing

📝 **Keep it clear and concise:**
- Write for your audience
- Use simple, everyday language
- Break up long paragraphs
- Use headings and bullet points

📅 **Keep content fresh:**
- Remove expired promotions promptly
- Update locations and hours regularly
- Refresh hero content seasonally
- Review all content quarterly

🔍 **Think about SEO:**
- Use descriptive Alt Text for images
- Include relevant keywords naturally
- Keep titles and descriptions informative
- Use full addresses for locations

### When to Publish

✅ **Good times to publish:**
- During off-peak hours (late evening)
- After thorough review
- When you have time to check the results
- During normal business days

❌ **Avoid publishing:**
- During peak ordering hours
- Late Friday afternoon
- During major campaigns
- Without reviewing changes first

## Troubleshooting

### My changes aren't showing on the website

**Solutions:**
1. Wait 60 seconds for the cache to refresh
2. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Check that you clicked "Publish" (not just "Save")
4. Verify the "Active" toggle is ON
5. Clear your browser cache
6. Try a different browser or incognito mode

### I can't upload an image

**Solutions:**
1. Check the file size (must be under 2MB)
2. Verify the format (JPG or PNG)
3. Try compressing the image first
4. Check your internet connection
5. Try a different image file

### I accidentally deleted something

**Solutions:**
1. Contact your website administrator immediately
2. They can restore from document history
3. For future: use "Active" toggle instead of deleting

### The preview button isn't working

**Solutions:**
1. Check your internet connection
2. Verify you're logged in to Sanity
3. Try refreshing Sanity Studio
4. Contact your administrator if issue persists

## Getting Help

### Documentation Resources

- **This Guide**: For everyday content editing
- **Sanity Studio Guide**: `SANITY-STUDIO-GUIDE.md` (more detailed)
- **Deployment Guide**: `DEPLOYMENT-GUIDE.md` (for technical users)
- **Official Sanity Docs**: https://www.sanity.io/docs

### Support Contacts

- **For content questions**: Contact your marketing manager
- **For technical issues**: Contact your web administrator
- **For Sanity account issues**: Contact support@sanity.io

## Quick Reference Card

### Publishing Checklist

- [ ] All required fields filled in
- [ ] Spelling and grammar checked
- [ ] Images compressed and optimized
- [ ] Alt Text added to all images
- [ ] Links tested
- [ ] Preview reviewed
- [ ] "Active" toggle is ON
- [ ] Published successfully
- [ ] Changes verified on live site (after 60 seconds)

### Common Tasks

| Task | Location | Action |
|------|----------|--------|
| Update homepage headline | 📄 Main Pages → 🏠 Homepage Banner | Edit Title field |
| Add new promotion | 🎯 Promotions & Offers | Click "+ Create" |
| Hide expired deal | 🎯 Promotions & Offers | Toggle "Active" to OFF |
| Update store hours | 📍 Restaurant Locations | Edit Operating Hours |
| Change company story | 📄 Main Pages → ℹ️ About Us Page | Edit Our Story |
| Update logo | ⚙️ Website Settings | Upload new Logo |

---

**Questions?** Contact your website administrator or refer to the [Sanity Documentation](https://www.sanity.io/docs).

**Last Updated:** November 12, 2025
**Version:** 2.0
**For:** Sarpino's Pizza Singapore (Next.js + Sanity CMS)
