# Plan: מובילים טורס - Tours Company Website

## Project Overview

Build a fully responsive, modern Hebrew (RTL) single-page website for מובילים טורס with WhatsApp integration, SEO optimization, smooth scrolling, contact form, and Israeli legal compliance.

## Implementation Steps

### 1. Set up project structure

- Create `index.html`, `styles.scss`, `script.js` using vanilla HTML/SASS/JS
- Compile SASS to CSS for production
- Configure RTL layout (`dir="rtl" lang="he"`)
- Set page title: "מובילים טורס - הסעות אמינות ומקצועיות"

### 2. Build hero with navigation elements

- Implement full-height hero section using `hero-background.jpg`
- Add CSS gradient overlay on hero image
- Display Hebrew headline and subheadline featuring "מובילים טורס"
- Add fixed floating CTA button (`tel:+972559939669` for immediate call)
- Add WhatsApp floating button (bottom-right)
  - Links to `wa.me/972559939669`
  - Pre-filled message: "שלום, אני מעוניין/ת בפרטים נוספים על ההסעות"

### 3. Create main content sections

#### Services Section

- Build 5 services cards
- All using `public/services-photos/services-placeholder-image.jpg`
- Use `public/icons/placeholder-icon.svg` for icons

#### Gallery Section

- 3-image gallery with lightbox/modal functionality
- Images:
  - `public/gallery-photos/1 (1).jpg`
  - `public/gallery-photos/1 (2).jpg`
  - `public/gallery-photos/1 (3).jpg`

#### Value Propositions

- 3 key points that are important to customers
- Include icons and engaging text

#### About Section

- Company information about מובילים טורס
- Professional and welcoming tone

#### Reviews Section

- Single realistic Hebrew review
- 5-star rating display
- Placeholder content (realistic)

#### FAQ Section

- 3 FAQ items
- Accordion-style expand/collapse
- Smooth animations

### 4. Implement contact form and footer

#### Contact Form

- Fields: name, email, phone, message
- Form validation
- Safe `mailto:7ms701@gmail.com` implementation
- Form data compiled into email body

#### Footer

- Slim design
- Contact information:
  - Phone: +972 55-993-9669
  - Email: 7ms701@gmail.com
  - Address: שדרות ירושלים 63 קריית מלאכי
- Include `logo.png`
- Developer credit
- Copyright notice
- Links to legal pages:
  - הצהרת נגישות (Accessibility Declaration)
  - מדיניות פרטיות (Privacy Policy)
  - תנאי שימוש (Terms of Use)

### 5. Add responsive styling and micro-interactions

#### Color Scheme

- Light blue
- White
- Black

#### Responsive Design

- Mobile-first approach
- Breakpoints for mobile/tablet/desktop
- Full responsiveness from mobile to desktop

#### Micro-interactions

- Smooth scrolling (CSS `scroll-behavior` + JS fallback)
- Hover effects on cards and buttons
- Form field animations
- FAQ expand/collapse animations
- Gallery modal/lightbox
- WhatsApp button pulse animation
- Floating CTA phone icon with shake/pulse animation
- Section fade-in on scroll

#### Modern Design Elements

- Clean, contemporary aesthetic
- Good taste in modern interactions
- Subtle transitions and animations

### 6. Add SEO and create legal pages

#### SEO Implementation

- Schema.org markup:
  - LocalBusiness schema
  - Organization schema
  - Service schema
- Include "מובילים טורס" in all markup
- Add actual contact information
- Meta tags (description, keywords)
- Open Graph tags for social sharing

#### Legal Pages (Israeli Compliance)

Create separate HTML pages:

1. `accessibility.html` - הצהרת נגישות (Accessibility Declaration)
2. `privacy.html` - מדיניות פרטיות (Privacy Policy)
3. `terms.html` - תנאי שימוש (Terms of Use)

## Business Information

- **Company Name**: מובילים טורס
- **Phone**: +972 55-993-9669
- **Email**: 7ms701@gmail.com
- **Address**: שדרות ירושלים 63 קריית מלאכי
- **WhatsApp Message**: "שלום, אני מעוניין/ת בפרטים נוספים על ההסעות"

## Available Assets

### Images

- `hero-background.jpg` - Hero section background
- `logo.png` - Company logo
- `public/services-photos/services-placeholder-image.jpg` - Service cards
- `public/icons/placeholder-icon.svg` - Icons for services

### Gallery Photos

- `public/gallery-photos/1 (1).jpg`
- `public/gallery-photos/1 (2).jpg`
- `public/gallery-photos/1 (3).jpg`

## Technical Stack

- **HTML5** - Semantic markup with RTL support
- **SASS/SCSS** - Modern styling with variables, nesting, mixins, flexbox/grid, animations, responsive design
- **Vanilla JavaScript** - Smooth scrolling, form handling, interactions, gallery modal

## Features Summary

✅ Single-page website with no navbar  
✅ Hebrew language (RTL support)  
✅ Modern design with micro-interactions  
✅ Fully responsive (desktop to mobile)  
✅ WhatsApp floating button  
✅ Floating CTA button (immediate call)  
✅ Smooth scroll-to-section  
✅ Schema markup for SEO  
✅ Safe mailto: form implementation  
✅ Israeli legal compliance pages  
✅ Hero section with gradient overlay  
✅ 5 services presentation  
✅ 3-image gallery  
✅ 3 key value propositions  
✅ About section  
✅ Reviews section (1 review)  
✅ 3 FAQs  
✅ Contact form  
✅ Slim footer with legal links
