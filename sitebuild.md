# Sarpino's Pizza Website Build Plan

> Version: 1.0.0
> Last Updated: 2025-10-28
> Project: Static website for Sarpino's Pizza Singapore

## Project Overview

Build a modern, responsive static website for Sarpino's Pizza that showcases their brand, promotions, locations, and provides easy access to online ordering.

## Design System

### Brand Colors
- **Basil Green**: `#4A8B5C` - Primary brand color
- **Tomato Red**: `#E63946` - CTA buttons, accents
- **Pesto Green**: `#2D5A3D` - Dark green for headers
- **Salad Green**: `#A4D65E` - Accent highlights
- **BBQ Red**: `#8B3A3A` - Secondary red

### Typography
- **Primary Font**: Heveleth Regular (headings, buttons)
- **Secondary Font**: System fonts for body text
- Font hierarchy:
  - H1: Heveleth Regular
  - H2 (Headings): Heveleth Regular
  - H3 (Subheadings): Heveleth Regular
  - Body: Sans-serif system font
  - Section Headers: Medium weight
  - Captions: Light weight

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Site Structure

### Navigation Pages
1. **HOME** - Promotional showcase
2. **OUR STORY** - Brand story and values
3. **LOCATIONS** - Store locations with regional filtering
4. **ORDER NOW** - External link to ordering system

## Page-by-Page Specifications

---

### 1. HOME PAGE

**Purpose**: Showcase current promotions and drive conversions to ordering

**Layout Reference**: `WebsiteTemplate/dominospizzasamplepromolayout.png`

#### Header Section
- Logo: Top left with phone number (6636 3636)
- Desktop Navigation: Horizontal nav bar
  - HOME | OUR STORY | LOCATIONS | ORDER NOW
  - Transparent background with hover effects
  - Navigation links change color on hover
- Mobile Navigation: Hamburger menu (top right)
- CTA Button: "ORDER NOW" (Tomato Red)
- Background: Gradient sky with pizza imagery

#### Promotional Grid
- **Layout**: CSS Grid or Flexbox
- **Desktop**: 2-column responsive grid
  - Row 1: 1 large promo (left) + 1 medium promo (right)
  - Row 2: 1 large promo (right) + 1 medium promo (left)
  - Row 3: 3 equal smaller promos
- **Tablet**: 2 columns, stacked
- **Mobile**: Single column stack

#### Promotional Banners
Each banner should include:
- Eye-catching headline
- Pricing/offer details
- Food photography
- "ORDER NOW" button
- Terms and conditions (small text)
- Halal certification badge (bottom right)

**Promotional Images Available** (from `images/Sarpino's Pizza Templates Todd's Edits/`):

1. **50% OFF Pizza Built on Flavour**
   - File: `50off.png`
   - Headline: "50% OFF Pizza BUILT ON FLAVOUR"
   - Subheading: "REAL AUTHENTIC HANDCRAFTED PIZZA"
   - Badge: "FRESH DOUGH MADE DAILY"
   - Background: White wood texture
   - Button: Green "ORDER NOW!"

2. **Me-Time Pizza Deal**
   - File: `MeTime.png`
   - Headline: "ME-TIME PIZZA DEAL"
   - Subheading: "PERSONAL TIME WITH YOUR PERSONAL FAVOURITE"
   - Price: "from $5.50"
   - Special: Includes Coca-Cola (No Sugar)
   - Note: "Takeaway only"
   - Background: Red
   - Button: Salad Green "ORDER NOW!"

3. **Real Pizza Real Flavour No Gimmicks**
   - File: `RealPizza.png`
   - Headline: "REAL PIZZA REAL FLAVOUR NO GIMMICKS"
   - Badge: "FRESH DOUGH MADE DAILY"
   - Background: Pesto Green
   - Button: Tomato Red "ORDER NOW!"
   - Features: Hawaiian pizzas

4. **Whole Lot of Heart**
   - File: `WholeLotofHeart.png`
   - Headline: "OUR PIZZA IS HANDMADE WITH HONEST INGREDIENTS & WITH A WHOLE LOT OF HEART"
   - Stamp: "FRESH DOUGH MADE DAILY"
   - Background: Wood texture
   - Button: Tomato Red "ORDER NOW!"

**Note**: These 4 promotional images will be featured on the homepage grid. Additional promotional banners can be created following the same design style as needed.

#### Footer
- Black background with Basil Green accents
- 3 columns:
  - **Column 1**: Order Now section
    - Phone: 6636 3636
    - Payment methods: Visa, MasterCard, Stripe, Cash on Delivery
  - **Column 2**: Follow Us
    - Social media icons (Instagram, Facebook, Twitter, YouTube)
  - **Column 3**: Site Map
    - HOME, OUR STORY, LOCATIONS, FRANCHISE, ORDER NOW
- Bottom bar:
  - Sarpino's logo (footer version)
  - Halal certification badge
  - Terms of Use | Privacy Policy
  - Copyright © 2001-2025 Sarpinos Pte Ltd.
- Contact Us button (teal, bottom right)

---

### 2. OUR STORY PAGE

**Purpose**: Tell Sarpino's brand story and values

**Layout Reference**: `WebsiteTemplate/OurStory.png`

#### Hero Section
- Full-width banner image: Pizza on wooden background with ingredients
- Header with logo, phone, ORDER NOW button, hamburger menu

#### Content Section
- Large "OUR STORY" heading (Tomato Red)
- White/light gray background
- Content organized in paragraphs:
  - Founder's story (Gerry Koutougos)
  - Singapore establishment (2001)
  - Product offerings
  - Quality promise
  - Value proposition

**Content Source**: Use text from `ourstory.md`

#### Footer
Same as Home page footer

---

### 3. LOCATIONS PAGE

**Purpose**: Help customers find nearest Sarpino's location

**Layout Reference**: `WebsiteTemplate/LocationsMain.png`

#### Hero Section
- Full-width banner: Margherita pizza with fresh ingredients
- Same header as other pages

#### Content Section
- Large "LOCATIONS" heading (Tomato Red)
- Accordion-style region filters:
  - **EAST, NORTH EAST** (expandable)
  - **CENTRAL AREAS** (expandable)
- Each region expands to show:
  - Store addresses
  - Phone numbers
  - Operating hours
  - Map integration (future enhancement)

#### Footer
Same as Home page footer

---

### 4. ORDER NOW

**Purpose**: Redirect to external ordering system

**Action**:
- Link to RevelUp ordering system
- External link opens in new tab
- Consider splash page: "Redirecting to our ordering system..."

---

## Technical Implementation

### Technology Stack
- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS Grid/Flexbox
- **Vanilla JavaScript**: Navigation, interactions
- **No Framework**: Pure static HTML/CSS/JS

### File Structure
```
sarpinos/
├── index.html (Home)
├── our-story.html
├── locations.html
├── css/
│   ├── main.css
│   ├── navigation.css
│   ├── footer.css
│   └── responsive.css
├── js/
│   ├── navigation.js
│   └── accordion.js
├── assets/
│   ├── logos/
│   │   ├── sarpinoslogo.png (from WebsiteTemplate/)
│   │   └── sarpinos-footer-logo.png (from WebsiteTemplate/)
│   ├── promos/
│   │   ├── 50off.png (from images/Sarpino's Pizza Templates Todd's Edits/)
│   │   ├── MeTime.png (from images/Sarpino's Pizza Templates Todd's Edits/)
│   │   ├── RealPizza.png (from images/Sarpino's Pizza Templates Todd's Edits/)
│   │   └── WholeLotofHeart.png (from images/Sarpino's Pizza Templates Todd's Edits/)
│   ├── heros/
│   │   └── (hero section backgrounds - to be created)
│   ├── icons/
│   │   ├── visa.png (from WebsiteTemplate/)
│   │   ├── stripe.png (from WebsiteTemplate/)
│   │   ├── logo_halal.png (from WebsiteTemplate/)
│   │   ├── cashondelivery.svg (from WebsiteTemplate/)
│   │   └── (social media icons - to be sourced)
│   └── fonts/
│       └── heveleth/
├── WebsiteTemplate/ (reference files)
└── images/ (source files)
```

### Key Features to Implement

#### 1. Navigation System
- **Desktop**: Transparent horizontal nav
  - Fixed/sticky on scroll
  - Smooth hover effects
  - Active page indicator
- **Mobile**: Hamburger menu
  - Slide-in menu from right
  - Overlay/backdrop
  - Close button
  - Full-page navigation

#### 2. Responsive Grid System
- Mobile-first approach
- Breakpoints:
  - 640px (tablet)
  - 1024px (desktop)
- Flexible promotional grid
- Image optimization for different screens

#### 3. Hover Effects
- Navigation links: Color change
- Buttons: Scale/shadow effects
- Promotional banners: Subtle lift effect
- Social icons: Color fill

#### 4. Accessibility
- Semantic HTML5
- Alt text for all images
- ARIA labels for navigation
- Keyboard navigation support
- Color contrast compliance (WCAG AA)

#### 5. Performance
- Optimized images (WebP with fallbacks)
- Minified CSS/JS
- Lazy loading for images
- Fast load times (<3 seconds)

---

## Assets Needed

### From WebsiteTemplate/
- ✅ **sarpinoslogo.png** - Main logo (header)
- ✅ **sarpinos-footer-logo.png** - Footer logo variation
- ✅ **visa.png** - Payment method icon
- ✅ **stripe.png** - Payment method icon
- ✅ **logo_halal.png** - Halal certification badge
- ✅ **cashondelivery.svg** - Cash payment icon
- ✅ **Header.png** - Design reference
- ✅ **OurStory.png** - Page design reference
- ✅ **LocationsMain.png** - Page design reference
- ✅ **LocationsCentralAreas.png** - Locations expanded view reference
- ✅ **LocationsEastNorthEast.png** - Locations expanded view reference
- ✅ **footerdesign.png** - Footer design reference
- ✅ **colorpalette.png** - Color system reference
- ✅ **fonts.png** - Typography reference
- ✅ **master.png** - Master design reference
- ✅ **RevelupRoutetoOrderPage.png** - Order page routing reference

### From images/Sarpino's Pizza Templates Todd's Edits/
- ✅ **50off.png** - Promotional banner
- ✅ **MeTime.png** - Promotional banner
- ✅ **RealPizza.png** - Promotional banner
- ✅ **WholeLotofHeart.png** - Promotional banner

### To Be Created/Sourced
- [ ] Hero background images for each page (gradient sky backgrounds)
- [ ] Social media icons (Instagram, Facebook, Twitter, YouTube)
- [ ] Hamburger menu icon (3 horizontal lines)
- [ ] Contact Us icon
- [ ] Additional promotional banners as needed (2-4 more to fill grid)

### Content
- ✅ Our Story text (from ourstory.md)
- [ ] Promotional offer details
- [ ] Location addresses (East/North East region)
- [ ] Location addresses (Central Areas region)
- [ ] Terms of Use content
- [ ] Privacy Policy content
- [ ] RevelUp ordering system URL

---

## Development Phases

### Phase 1: Foundation Setup
1. Create file structure
2. Set up HTML templates
3. Implement CSS reset and base styles
4. Add typography (Heveleth font)
5. Define color variables

### Phase 2: Navigation & Header
1. Build desktop navigation
2. Implement mobile hamburger menu
3. Add logo and phone number
4. Create ORDER NOW button
5. Make navigation sticky/fixed
6. Add hover effects

### Phase 3: Footer Component
1. Build 3-column layout
2. Add phone number and payment icons
3. Implement social media links
4. Create site map links
5. Add bottom bar with legal links
6. Make footer responsive

### Phase 4: Home Page
1. Create hero section
2. Build promotional grid layout
3. Add promotional banners (placeholders)
4. Implement "ORDER NOW" buttons
5. Make grid responsive
6. Optimize images

### Phase 5: Our Story Page
1. Create hero banner
2. Add story content
3. Style text sections
4. Make page responsive

### Phase 6: Locations Page
1. Create hero banner
2. Build accordion components
3. Add location data
4. Implement expand/collapse functionality
5. Make page responsive

### Phase 7: Polish & Testing
1. Cross-browser testing
2. Mobile responsiveness testing
3. Accessibility audit
4. Performance optimization
5. SEO basics (meta tags)
6. Final content review

### Phase 8: Deployment
1. Set up hosting
2. Configure domain
3. Deploy files
4. Test live site
5. Monitor analytics

---

## Design Principles

### Visual Style
- Clean, modern Italian aesthetic
- Food-forward photography
- Bold typography for offers
- Consistent brand colors
- Plenty of white space

### User Experience
- Clear call-to-actions
- Easy navigation
- Fast page loads
- Mobile-optimized
- Intuitive layouts

### Brand Voice
- Authentic Italian heritage
- Quality-focused
- Family-friendly
- Value-driven
- Customer-centric

---

## Deliverables

### Development
- [ ] Fully responsive website
- [ ] 3 main pages (Home, Our Story, Locations)
- [ ] Mobile hamburger navigation
- [ ] Desktop horizontal navigation
- [ ] Promotional grid system
- [ ] Interactive elements (accordions, hover effects)

### Documentation
- [ ] README.md with setup instructions
- [ ] Code comments
- [ ] Asset attribution
- [ ] Browser compatibility notes

### Assets
- [ ] All optimized images
- [ ] Font files
- [ ] Icons and logos

---

## Future Enhancements (Post-Launch)

- [ ] Google Maps integration on Locations page
- [ ] Online ordering integration (embed RevelUp)
- [ ] Franchise inquiry form
- [ ] Newsletter signup
- [ ] Customer reviews/testimonials
- [ ] Photo gallery
- [ ] Menu page with full product catalog
- [ ] Special promotions countdown timer
- [ ] Multi-language support
- [ ] Dark mode toggle

---

## Success Metrics

- Mobile responsiveness: 100%
- Page load time: < 3 seconds
- Accessibility score: AA compliance
- Cross-browser compatibility: Chrome, Firefox, Safari, Edge
- SEO basics: Meta tags, alt text, semantic HTML

---

## Notes

- Keep promotional banners easy to update (separate image files)
- Maintain consistency with Sarpino's global brand guidelines
- Prioritize mobile experience (majority of pizza orders are mobile)
- Ensure ORDER NOW buttons are prominent on every page
- Consider seasonal promotions (festive themes)

---

*This plan serves as the master reference for building the Sarpino's Pizza static website.*
