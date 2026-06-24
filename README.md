# Muhammad Ahmad Iqbal — Portfolio

A premium, production-ready developer portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Loader.jsx          # Animated loading screen
│   │   ├── Cursor.jsx          # Custom dual-layer cursor
│   │   ├── ParticleBackground.jsx  # Canvas particle mesh
│   │   ├── Navbar.jsx          # Sticky glassmorphism navbar
│   │   ├── Hero.jsx            # Hero + terminal widget
│   │   ├── About.jsx           # About + who hires me
│   │   ├── Skills.jsx          # Animated skill cards
│   │   ├── ProjectCard.jsx     # Single project card
│   │   ├── Projects.jsx        # Projects grid
│   │   ├── SectionHeader.jsx   # Reusable section heading
│   │   ├── Contact.jsx         # Contact form + info
│   │   └── Footer.jsx          # Clean footer
│   ├── data/
│   │   └── portfolio.js        # ← ALL your content lives here
│   ├── hooks/
│   │   ├── useScrollSpy.js     # Active nav link tracking
│   │   ├── useParticles.js     # Canvas particle animation
│   │   └── useCursor.js        # Custom cursor logic
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + Tailwind
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## ✏️ Customizing Content

**All portfolio content is in one file:** `src/data/portfolio.js`

Edit the following exports:
- `personal` — name, email, links, bio
- `stats` — hero stats row
- `highlights` — about section strengths
- `niches` — who hires you section
- `skillCategories` — skills grid
- `projects` — project cards (add/remove freely)
- `navLinks` — navigation links

## 🎨 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Utility styling |
| Framer Motion | Animations |
| Space Mono | Monospace font (terminal aesthetic) |
| Syne | Display font (headings) |

## ✨ Features

- ⚡ Animated loading screen with progress bar
- 🖱️ Custom dual-layer cursor with magnetic hover
- 🌐 Canvas particle mesh background
- 📍 Scroll-spy active navigation
- 🎞️ Framer Motion scroll-triggered reveals
- 🪟 Glassmorphism sticky navbar
- 💻 Terminal widget in hero
- 📱 Fully responsive (mobile + desktop)
- 🎨 Dark theme with cyan accent palette
