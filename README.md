# Shraddha Bahuguna — Portfolio

A production-ready personal portfolio built with **React + Vite** and CSS Modules.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── App.jsx               # Root component — wires everything
    ├── main.jsx              # React entry point
    ├── data/
    │   └── portfolio.js      # ← Edit your content here
    ├── hooks/
    │   └── index.js          # useScrollSpy, useInView, usePrefersReducedMotion
    ├── styles/
    │   └── globals.css       # Design tokens + global styles
    └── components/
        ├── Navbar.jsx / .module.css
        ├── Hero.jsx / .module.css
        ├── Skills.jsx / .module.css
        ├── Experience.jsx / .module.css
        ├── Projects.jsx / .module.css
        ├── Contact.jsx / .module.css
        └── Footer.jsx / .module.css
```

## Updating Content

All your personal data lives in **`src/data/portfolio.js`**.  
Edit that single file to update your name, bio, experience, skills, projects, and contact info — no other files need to change.

## Deploying to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"
# Also add: "homepage": "https://<your-username>.github.io/<repo-name>"

npm run deploy
```
