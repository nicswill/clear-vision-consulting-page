# Clear Vision Consulting - Leadership Clarity Consultation Microsite

A focused, standalone landing page for Clear Vision Consulting's Leadership Clarity Consultation service. This static microsite is designed for consultation bookings via Formspree and Calendly.

## Overview

This is a single-purpose React application built with Vite for static deployment. It serves as a dedicated consultation booking experience, separate from the main Clear Vision website.

## Features

- **Leadership Clarity Consultation Landing Page** - Focused consultation service overview
- **Consultation Request Form** - Submit to Formspree → Schedule via Calendly
- **Thank You Flow** - Post-submission confirmation page
- **Minimal Navigation** - Logo + link back to main site + contact CTA
- **Responsive Design** - Mobile-friendly modern UI
- **Static Deployment** - Zero backend dependencies

## Form & Booking Integration

### Consultation Requests
- **Formspree Endpoint**: `https://formspree.io/f/mqeywyla`
- **Calendly Booking**: `https://calendly.com/cvadmin-clearvisionleader/30min`
- Flow: Fill form → Submit to Formspree → See success message → Click "Schedule Your Consultation Now" → Opens Calendly

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Formspree** - Form handling (no backend needed)
- **Calendly** - Appointment scheduling

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Ready for static deployment on Vercel, Netlify, or GitHub Pages:

### Vercel
1. Connect GitHub repository
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

## Project Structure

```
src/
  ├── components/
  │   ├── ConsultationForm.tsx    # Consultation form with Formspree + Calendly
  │   ├── ConsultationPage.tsx    # Main consultation landing page
  │   └── ThankYouPage.tsx        # Post-submission thank you page
  ├── App.tsx                     # Root component with simple routing
  └── main.tsx                    # Entry point

public/
  └── cv_logo_.png                # Clear Vision logo
```

## What This Microsite Includes

**Homepage/Default Route:**
- Leadership Clarity Consultation landing page (ConsultationPage component)

**Navigation:**
- Clear Vision logo (links to main site)
- "Main Site" link (back to clearvisionleader.com)
- "Contact Us" CTA button

**Pages:**
- Consultation page (default)
- Thank you page (after form submission)

## What Was Removed

This microsite was refactored from a larger services page to focus solely on consultation bookings.

**Removed:**
- Full services overview page
- Power in the Pause Assessment
- General inquiry form
- Navigation to Small Groups, Clarity Collection, CV Academy, etc.
- All backend/database dependencies
- Supabase integration

**What Remains:**
- Consultation landing page only
- Consultation form → Formspree → Calendly flow
- Minimal navigation (logo + main site link + contact)
- Clear Vision branding

## Environment Variables

None required. This is a fully static site.

## Contact

Clear Vision Consulting:
- **Email**: cvadmin@clearvisionleader.com
- **Phone**: +1 (850) 499-3261
- **Website**: https://clearvisionleader.com

---

Built with clarity. © 2024 Clear Vision Consulting. All rights reserved.
