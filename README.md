# Bilal Raza — Creative Portfolio

A responsive, frontend-only creative portfolio built with React, Vite, React Router and Framer Motion. The interface includes light/dark themes, motion-led section reveals, a searchable/filterable project grid, project detail dialogs, a gallery lightbox, testimonial controls, FAQ accordion, and a contact form that prepares an email in the visitor’s mail app.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ and npm.

1. Install dependencies: `npm install`
2. Start the Vite development server: `npm run dev`
3. Create a production build: `npm run build`
4. Preview the build locally: `npm run preview`

## Project structure

```text
src/
├── data/portfolio.js   # Personal details, work, services and content
├── App.jsx             # Reusable sections, interactions and routes
├── main.jsx            # React entry point
└── styles.css          # Responsive design system and theme tokens
jpgs/                   # Supplied portrait, logo and project artwork
```

The supplied PDFs and JPG/PNG assets are imported from the project root and included in Vite’s production build. Replace the supplied work and profile assets in `jpgs/`, then update the imports and content in `src/data/portfolio.js` to customize the portfolio.

## Customization

- Edit the `person`, `socialLinks`, `projects`, `services`, `skillGroups`, `tools`, `certificates`, `articles`, `testimonials` and `faqs` exports in `src/data/portfolio.js`.
- Update the color tokens in `src/styles.css` under `:root` and `:root[data-theme='dark']`.
- Change the Google Fonts link in `index.html` to use another font pairing if desired.
- The contact form is frontend-only: on submit it opens a prefilled `mailto:` draft and does not store or transmit data. Connect a provider such as EmailJS if direct form delivery is needed.
- Newsletter signup is a local UI demonstration and does not collect or store subscriptions.

## Deploy

### Vercel

Import the repository into Vercel. Vite is detected automatically. Use `npm run build` as the build command and `dist` as the output directory. The included `vercel.json` supports client-side routes.

### Netlify

Import the repository into Netlify. Use `npm run build` as the build command and `dist` as the publish directory. The included `public/_redirects` file handles client-side routes.

## Accessibility and performance

Semantic sections, keyboard-operable controls, visible focus support from native elements, descriptive image text, reduced-motion support, lazy-loaded project images and responsive layouts are included. Keep project image dimensions optimized for best loading performance.
