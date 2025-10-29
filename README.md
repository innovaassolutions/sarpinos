# Sarpino's Pizza Singapore Website

A modern, responsive static website for Sarpino's Pizza Singapore featuring promotional content, brand story, and location information.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Navigation**: Horizontal navigation on desktop, hamburger menu on mobile
- **Promotional Grid**: Showcases current deals and special offers
- **Our Story Page**: Brand history and values
- **Locations Page**: Accordion-style location finder with regional filtering
- **Footer**: Complete with social media, payment methods, and site map

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS Grid/Flexbox
- **Vanilla JavaScript**: Navigation and accordion functionality
- **No frameworks**: Pure static HTML/CSS/JS for fast loading

## File Structure

```
sarpinos/
├── index.html              # Home page
├── our-story.html          # Brand story page
├── locations.html          # Locations page
├── css/
│   ├── main.css           # Base styles, typography, utilities
│   ├── navigation.css     # Header and navigation styles
│   └── footer.css         # Footer styles
├── js/
│   ├── navigation.js      # Mobile menu toggle
│   └── accordion.js       # Location accordion functionality
├── assets/
│   ├── logos/             # Brand logos
│   ├── promos/            # Promotional banners
│   ├── icons/             # Payment and social icons
│   └── heros/             # Hero background images
└── README.md
```

## Setup & Installation

1. Clone or download the repository
2. No build process required - it's static HTML!
3. Open `index.html` in your browser or serve via a local server

### Using a Local Server

```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server

# PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## Pages

### Home (`index.html`)
- Hero section with gradient background
- Special offers promotional grid (4 banners)
- "Why Sarpino's?" feature section
- Full footer with contact info

### Our Story (`our-story.html`)
- Brand story hero image
- Detailed company history
- Founder's journey
- Product quality promise

### Locations (`locations.html`)
- Hero banner
- Accordion-style regional filtering
- East/North East region locations
- Central Areas locations
- Contact information for each location

## Brand Guidelines

### Colors
- **Basil Green** (#4A8B5C): Primary brand color
- **Tomato Red** (#E63946): CTA buttons, accents
- **Pesto Green** (#2D5A3D): Dark green for headers
- **Salad Green** (#A4D65E): Accent highlights
- **BBQ Red** (#8B3A3A): Secondary red

### Typography
- **Headers**: Bold, uppercase for impact
- **Body**: System fonts for readability
- **Buttons**: Uppercase, bold weight

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Future Enhancements

- [ ] Google Maps integration for locations
- [ ] Online ordering system integration
- [ ] Menu page with full product catalog
- [ ] Customer testimonials section
- [ ] Newsletter signup
- [ ] Multi-language support (English/Malay/Mandarin)
- [ ] Dark mode toggle
- [ ] Hero background videos

## Assets Credits

- Logo: Sarpino's Pizza
- Promotional Images: Sarpino's Marketing Team
- Icons: SVG inline icons
- Halal Certification: MUIS Singapore

## Contact

For updates or support, contact Sarpino's Pizza Singapore:
- Phone: 6636 3636
- Website: [www.sarpinos.com](https://www.sarpinos.com)

---

© 2001-2025 Sarpinos Pte Ltd. All rights reserved.
