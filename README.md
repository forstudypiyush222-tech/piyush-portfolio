# PIYUSH — THE SERIES

A cinematic, streaming-inspired personal portfolio for **Piyush Kumar**: Web Developer, MERN Stack enthusiast, and B.Tech Computer Science and Engineering student at KIIT University.

Every section is an episode, every project is an Original, and the entire experience is designed to play like a series.

> **Disclaimer:** A fictional streaming-platform aesthetic designed purely for creative portfolio presentation. It is not affiliated with or endorsed by Netflix or any commercial streaming service.

---

## ⚡ Tech Stack

- **Core:** React 18.3, TypeScript 5.8
- **Styling:** Tailwind CSS 4.1, Vanilla CSS tokens
- **Animations:** Framer Motion 11.18
- **Smooth Scrolling:** Lenis 1.1
- **Tooling & Build:** Vite 6.3, Sharp 0.34 (image optimization pipeline)

---

## 🚀 Running Locally

Requires **Node.js 18+** and npm.

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production build
```bash
npm run build
npm run preview
```
The optimized production bundle is generated in the `dist/` directory.

### 4. Build responsive image assets
To regenerate the responsive WebP portraits and social share card (`og-image.jpg`):
```bash
npm run images
```

---

## 📁 Repository Structure

```text
├── index.html                   # HTML entry point, SEO metadata, preloaded assets
├── package.json                 # Project dependencies and npm scripts
├── public/
│   ├── favicon.svg              # Stylized 'P' SVG brand icon
│   └── assets/                  # Optimized media assets & downloadable resume
│       ├── Piyush_Kumar_Resume.pdf
│       ├── og-image.jpg         # Social share card
│       ├── portrait-420.webp
│       ├── portrait-720.webp
│       └── portrait-1100.webp
├── scripts/
│   └── build-images.mjs         # Sharp image processing script
└── src/
    ├── main.tsx                 # Application root & MotionConfig
    ├── App.tsx                  # Stage manager (Opening → Profile Selector → Home)
    ├── index.css                # Global design system, theme variables & utilities
    ├── data/
    │   └── portfolio.ts         # Central single source of truth for all content
    ├── hooks/
    │   ├── sectionProgress.ts   # Scroll progress tracking for 'Continue Exploring'
    │   ├── smoothScroll.tsx     # Lenis provider & lock controls
    │   └── useMedia.ts          # Responsive query & pointer detection hooks
    └── components/
        ├── OpeningSequence.tsx  # Cinematic studio card & title sequence
        ├── ProfileSelector.tsx  # 'Who's watching?' profile view switcher
        ├── Navbar.tsx           # Floating navigation & profile menu
        ├── Hero.tsx             # Billboard section with parallax portrait & chips
        ├── PlayIntro.tsx        # Highlight reel overlay
        ├── ContinueWatching.tsx # Interactive progress rail
        ├── About.tsx            # The Pilot (biography & quick facts)
        ├── Seasons.tsx          # My Journey told in 5 Seasons & Episodes
        ├── Originals.tsx        # Horizontal pinned showcase of featured projects
        ├── ProjectCard.tsx      # Project teaser cards with P ORIGINAL branding
        ├── ProjectModal.tsx     # Detailed project modal with Live Demo & GitHub links
        ├── TopPicks.tsx         # Top 10 highlights row
        ├── Skills.tsx           # Skill categories with cross-referenced evidence
        ├── Achievements.tsx     # Academic honors & 10 verified certifications
        ├── ResumeViewer.tsx     # Screenplay resume sheet preview & download
        ├── ResumeModal.tsx      # Full-screen PDF viewer modal
        ├── FinalCTA.tsx         # 'TO BE CONTINUED...' footer & contact links
        ├── Poster.tsx           # Procedural SVG poster art & SeriesMark
        ├── Scene.tsx            # Animated section wrapper
        ├── Rail.tsx             # Horizontal scroll navigation buttons
        └── fx.tsx               # Particle canvas, 3D tilt, magnetic effects
```

---

## 🎬 Featured Originals & Verified Live Demos

1. **Aether — Weather Intelligence Dashboard (2025)**
   - **Repository:** [forstudypiyush222-tech/Weather-App](https://github.com/forstudypiyush222-tech/Weather-App)
   - **Live Demo:** [https://aether-sky.netlify.app/](https://aether-sky.netlify.app/)
   - **Stack:** HTML5, CSS3, Vanilla JavaScript, Chart.js, WeatherAPI, Geolocation API

2. **Piyush Da Dhaba — Food Ordering & Recipe Experience (2025)**
   - **Repository:** [forstudypiyush222-tech/Recipe-Website](https://github.com/forstudypiyush222-tech/Recipe-Website)
   - **Live Demo:** [https://piyushdadhaba.netlify.app/](https://piyushdadhaba.netlify.app/)
   - **Stack:** HTML5, CSS3, Vanilla JavaScript, LocalStorage, Custom Audio/Modal UI

3. **CampusConnect — Campus Event Platform (2026)**
   - **Repository:** [forstudypiyush222-tech/CampusConnect](https://github.com/forstudypiyush222-tech/CampusConnect)
   - **Live Demo:** [https://campus-event-desk.netlify.app/](https://campus-event-desk.netlify.app/)
   - **Stack:** Next.js 14, React 18, TypeScript, Vanilla CSS, React Context, Vitest

---

## 📜 Verified Certifications & Credentials

The portfolio features 10 independently verifiable credentials:
- **Cisco:** HTML Essentials (Credly digital badge)
- **Anthropic:** Claude Code in Action, Introduction to MCP, Building With Claude API, AI Fluency: Framework & Foundations, Model Context Protocol: Advanced Topics (Skilljar certificates)
- **KIIT University:** AI & ML and NLP
- **Pinnacle Lab:** Web Development
- **Mimo:** Python AI Development
- **ICAT:** Common Aptitude Test

---

## ⌨️ Accessibility & Keyboard Shortcuts

- `Escape` or `Enter`: Skip opening sequence / close modal dialogs.
- `Space`: Pause or resume highlight reel in **Play Intro**.
- `Arrow Left` / `Arrow Right`: Navigate previous/next slide in highlight reel.
- `prefers-reduced-motion`: Automatically disables smooth scroll, particles, and 3D tilts, jumping straight to static states.
