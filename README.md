# 🎬 PIYUSH — THE SERIES

<p align="center">
  <a href="https://piyushbuilds.vercel.app/">
    <img src="https://img.shields.io/badge/▶_EXPLORE_MY_PORTFOLIO-PIYUSHBUILDS.VERCEL.APP-E50914?style=for-the-badge&logo=vercel&logoColor=white" alt="Explore my live portfolio" />
  </a>
</p>

<h3 align="center">🍿 A Developer Portfolio, Reimagined as a Cinematic Experience</h3>

<p align="center">
  <b>Every section is an episode. Every project is an Original. Every journey has a next season.</b>
</p>

<p align="center">
  <a href="https://github.com/forstudypiyush222-tech">
    <img src="https://img.shields.io/badge/GitHub-Explore_My_Work-181717?style=flat-square&logo=github" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/piyush-kumar-36a359372/">
    <img src="https://img.shields.io/badge/LinkedIn-Let's_Connect-0A66C2?style=flat-square&logo=linkedin" alt="LinkedIn" />
  </a>
  <a href="mailto:forstudypiyush222@gmail.com">
    <img src="https://img.shields.io/badge/Email-Get_In_Touch-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

---

## 🎥 About the Project

**PIYUSH — THE SERIES** is my personal portfolio, built around a cinematic, streaming-inspired concept.

I'm **Piyush Kumar**, a B.Tech Computer Science and Engineering student at **KIIT University**. This portfolio brings together my projects, technical skills, certifications, and developer journey in an interactive experience.

✨ Not just a portfolio to scroll through—a series to explore.

## 🍿 Features

- 🎬 **Cinematic Opening** — an immersive introduction to the experience.
- 👤 **Profile Selector** — choose how to explore the portfolio.
- 📺 **Interactive Journey** — discover my story through seasons and episodes.
- 🚀 **Featured Originals** — explore projects with detailed views and live demos.
- ⚡ **Motion & Interactions** — animated transitions, smooth scrolling, and interactive visual effects.
- 🏆 **Achievements & Certifications** — explore credentials and milestones.
- 📄 **Résumé Viewer** — preview and access my résumé.
- 📱 **Responsive Media Assets** — optimized portrait images for different display sizes.

## 🌟 Featured Projects

| 🎮 Project | 💡 Description | 🔗 Links |
|---|---|---|
| 🌦️ **Aether** | Weather dashboard featuring forecasts and visual insights. | [Live Demo](https://aether-sky.netlify.app/) · [GitHub](https://github.com/forstudypiyush222-tech/Weather-App) |
| 🍜 **Piyush Da Dhaba** | Food ordering and recipe website. | [Live Demo](https://piyushdadhaba.netlify.app/) · [GitHub](https://github.com/forstudypiyush222-tech/Recipe-Website) |
| 🎓 **CampusConnect** | Platform for campus event discovery and management. | [Live Demo](https://campus-event-desk.netlify.app/) · [GitHub](https://github.com/forstudypiyush222-tech/CampusConnect) |

<p align="center">
  🎬 <b>Discover more details, skills, and projects on the live portfolio.</b><br/><br/>
  <a href="https://piyushbuilds.vercel.app/">
    <img src="https://img.shields.io/badge/START_WATCHING-EXPLORE_THE_PORTFOLIO-E50914?style=for-the-badge&logo=vercel&logoColor=white" alt="Explore the portfolio" />
  </a>
</p>

## ⚡ Tech Stack

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Lenis-Smooth_Scrolling-111111?style=for-the-badge" alt="Lenis" />
  <img src="https://img.shields.io/badge/Sharp-Image_Optimization-99CC00?style=for-the-badge" alt="Sharp" />
</p>

## 🛠️ Run Locally

Want to explore the code or run the portfolio on your machine? Let's go! 💻

**Prerequisites:** Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL displayed in your terminal.

### 📦 Production Build

```bash
npm run build
npm run preview
```

### 🖼️ Regenerate Optimized Images

```bash
npm run images
```

This runs the image optimization script for the portfolio's responsive media assets and social share image.

## 📁 Project Structure

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
        ├── TopPicks.tsx          # Top 10 highlights row
        ├── Skills.tsx            # Skill categories with cross-referenced evidence
        ├── Achievements.tsx      # Academic honors & 10 verified certifications
        ├── ResumeViewer.tsx      # Screenplay resume sheet preview & download
        ├── ResumeModal.tsx       # Full-screen PDF viewer modal
        ├── FinalCTA.tsx          # 'TO BE CONTINUED...' footer & contact links
        ├── Poster.tsx            # Procedural SVG poster art & SeriesMark
        ├── Scene.tsx             # Animated section wrapper
        ├── Rail.tsx              # Horizontal scroll navigation buttons
        └── fx.tsx                # Particle canvas, 3D tilt, magnetic effects
```

## 🤝 Let's Connect

Have an idea, feedback, or an interesting project? Let's connect! 🚀

<p align="center">
  <a href="https://www.linkedin.com/in/piyush-kumar-36a359372/">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/forstudypiyush222-tech">
    <img src="https://img.shields.io/badge/GitHub-Follow_My_Work-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="mailto:forstudypiyush222@gmail.com">
    <img src="https://img.shields.io/badge/Email-Say_Hello-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

---

<p align="center">
  <b>🎞️ Every project is an Original. Every step is another episode.</b><br/><br/>
  <a href="https://piyushbuilds.vercel.app/">
    <img src="https://img.shields.io/badge/NEXT_EPISODE-COMING_SOON-E50914?style=for-the-badge" alt="Next episode coming soon" />
  </a>
  <br/><br/>
  <i>Thanks for stopping by. Keep building. Keep exploring. 🚀</i>
</p>

<sub>Disclaimer: This portfolio uses a fictional streaming-platform aesthetic for creative presentation. It is not affiliated with or endorsed by Netflix or any other commercial streaming service.</sub>
