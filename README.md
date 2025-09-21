<div align="center">

# Optivize AI Landing

Modern single-page React + Tailwind CSS marketing site showcasing an AI automation & analytics platform.

</div>

## Overview
This project started as an event/summit style template and was streamlined into a focused product landing page. All numbered variant pages and build artifacts were removed for clarity. The codebase now exposes a single, clean landing route composed of modular sections.

## Features
- Hero with layered animated gradients
- Feature grid (About)
- Capability cards (Speakers repurposed)
- Pricing tiers (Schedule repurposed)
- Signup / plan selection form (Registration)
- Infrastructure & trust section (Venue)
- Testimonials + Call‑to‑Action banner
- Sticky responsive Navbar + Footer

## Tech Stack
- React 18
- Tailwind CSS 3 (utility + custom component layers)
- Modern ES Modules / JSX

## Project Structure
```
src/
  components/
    About.js
    CtaBanner.js
    Footer.js
    Hero.js
    Navbar.js
    Registration.js
    Schedule.js
    Speakers.js
    Testimonials.js
    Venue.js
  App.js
  index.js
  index.css
```

## Quick Start
```bash
npm install
npm start
```
Visit: http://localhost:3000

Build production bundle:
```bash
npm run build
```

## Customization Tips
- Colors / branding: edit `tailwind.config.js`
- Global utility & component classes: `src/index.css`
- Section order or presence: adjust JSX in `App.js`
- Background images: place assets in `public/` and reference with `/image-name.ext`

## Housekeeping Performed
- Removed redundant numbered page routes
- Deleted build output from version control
- Added `.gitignore` (ignores build, node_modules, logs, env files)
- Stripped all code comments for a cleaner learning reference

## Deployment
Any static host (Vercel, Netlify, GitHub Pages, S3). Output is generated in `build/` after running the build script.

## License
MIT — use freely for personal or commercial landing pages.

---
Made with focus on clarity and modularity.