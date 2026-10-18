/**
 * Central portfolio data — generated from Piyush's resume (Piyush_Kumar_Resume.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Piyush Kumar',
  displayName: 'Piyush Kumar',
  firstName: 'PIYUSH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A PIYUSH ORIGINAL',
  role: 'Web Developer',
  tagline: ['Web Developer', 'MERN Stack', 'C++'],
  intro:
    'A web developer passionate about building interactive digital experiences, modern web applications, and practical solutions. Focused on creating clean interfaces, meaningful functionality, and projects that turn ideas into reality.',
  location: 'Banmankhi,Bihar',
  email: 'forstudypiyush222@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/piyush-kumar-36a359372/',
    github: 'https://github.com/forstudypiyush222-tech',
  },
  resumePdf: '/assets/Piyush_Kumar_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Piyush Kumar',
  },
  interests: ['Full-Stack Development', 'UI/UX Engineering', 'System Design'],
};

export const education = [
  {
    school: 'Kalinga Institute of Industrial Technology',
    place: 'Bhubaneswar, Odisha',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2025 - 2029',
    score: 'CGPA: 8.9',
  },
  {
    school: 'Indian Public School',
    place: 'Purnia, Bihar',
    degree: 'CBSE',
    period: '2022 - 2024',
    score: 'Score 70%',
  },
];

export const experience = [
  {
    company: 'Pinnacle Labs',
    role: 'Web Development Intern',
    place: 'Remote',
    period: 'June 2026 – July 2026',
    points: [
      'Worked on frontend web development projects using HTML, CSS, and JavaScript.',
      'Built and refined web interfaces through hands-on, project-based learning.',
      'Applied core web development skills to practical projects while gaining experience in frontend implementation and debugging.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'aether',
    title: 'Aether — Weather Intelligence Dashboard',
    year: '2025',
    genre: 'Frontend Engineering • Weather Intelligence',
    logline: 'A premium, responsive weather dashboard that transforms live weather data into an interactive and visually engaging experience.',
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'WeatherAPI'],
    build: [
      'Built a weather dashboard integrating WeatherAPI to retrieve current conditions, forecasts, astronomy information, and air quality data.',
      'Implemented city search, browser-based geolocation, interactive hourly weather charts, and multi-day forecasts.',
      'Organized application logic into modular controllers, services, utilities, and views while developing responsive layouts for desktop, tablet, and mobile.',
    ],
    features: [
      'Live weather data and city search',
      'Current location detection using browser geolocation',
      'Interactive hourly forecasts with Chart.js',
      'Multi-day weather forecasts',
      'Air Quality Index visualization',
      'Dynamic weather themes',
    ],
    metrics: [
    { value: 'Live', label: 'weather data' },
    { value: 'Hourly', label: 'forecast insights' },
    { value: 'Multi-day', label: 'weather forecasts' },
    { value: 'AQI', label: 'air quality insights' },
    { value: 'Dynamic', label: 'weather themes' },
  ],
    github: 'https://github.com/forstudypiyush222-tech/Weather-App',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
  id: 'piyush-da-dhaba',
  title: 'Piyush Da Dhaba',
  year: '2025',
  genre: 'Frontend Development • Food Ordering',
  logline: 'A multi-page food ordering experience combining dish discovery, recipe exploration, cart management, and a simulated checkout workflow.',
  stack: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
  build: [
    'Developed a multi-page food ordering frontend featuring dish browsing, recipe exploration, cart management, and an interactive ordering workflow.',
    'Implemented connected checkout, simulated payment, order history, receipt views, and an admin interface using frontend technologies.',
  ],
  features: [
    'Dish browsing and recipe exploration',
    'Interactive shopping cart and checkout',
    'Simulated payment, order history, and receipts',
    'Admin interface for the ordering experience',
  ],
  metrics: [
    { value: '7+', label: 'website pages' },
    { value: '20+', label: 'menu items' },
    { value: '4+', label: 'ordering workflow stages' },
    { value: '3+', label: 'order-related views' },
    { value: '1', label: 'admin interface' },
  ],
  github: 'https://github.com/forstudypiyush222-tech/Recipe-Website',
  palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
  motif: 'flow',
  },
  {
  id: 'campusconnect',
  title: 'Campus Connect',
  year: '2026',
  genre: 'Full-Stack Web • Campus Events',
  logline: 'A campus event management platform that connects students and organizers through event discovery, registration, and event administration.',
  stack: ['Next.js 14', 'React 18', 'TypeScript', 'Vanilla CSS', 'React Context', 'Vitest'],
  build: [
    'Built a role-based campus event platform with event discovery, category filtering, registration, cancellation, and organizer event management.',
    'Implemented client-side state management with LocalStorage persistence, event-capacity validation, duplicate-registration prevention, and automated tests.',
  ],
  features: [
    'Student and organizer roles',
    'Event discovery, search, and category filters',
    'Event registration, cancellation, and capacity validation',
    'Organizer event management and persistent client-side state',
  ],
  metrics: [
    { value: '152', label: 'automated tests reported' },
    { value: '2', label: 'user roles' },
    { value: '11', label: 'test files reported' },
    { value: '3', label: 'event actions: create, register, cancel' },
  ],
  github: 'https://github.com/forstudypiyush222-tech/CampusConnect',
  palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
  motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'first-year-cgpa',
    title: '8.9 CGPA',
    org: 'KIIT University • B.Tech CSE',
    detail: 'Achieved an 8.9 CGPA in the first year of the Computer Science and Engineering degree.',
    laurel: 'Academic Achievement',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Pinnacle Lab', name: 'Web Development', link: 'https://drive.google.com/file/d/1X4-m76Ul3sasRWnArHqTLNnc1ImB4g1n/view?usp=drivesdk' },
  { issuer: 'KIIT University', name: 'AI & ML and NLP', link: 'https://drive.google.com/file/d/10JjmaZijrI4F7y9AJtdV6475xdtP1TAy/view?usp=drivesdk' },
  { issuer: 'Mimo', name: 'Python AI Development', link: 'https://drive.google.com/file/d/1gPBK9JAGETwIdYP368vRaPsdOpJlcy79/view?usp=drivesdk' },
  { issuer: 'ICAT', name: 'Common Aptitude Test', link: 'https://drive.google.com/file/d/1Ps3gle6YRpM9JWt6p2FeEbvVCbivRXom/view?usp=drivesdk' },
  { issuer: 'Cisco', name: 'HTML Essentials', link: 'https://www.credly.com/badges/727013d9-9d40-433d-9e09-fae9060f0b5d/public_url' },
  { issuer: 'Anthropic', name: 'Claude Code in Action', link: 'https://verify.skilljar.com/c/mf5j7ct9x9wc' },
  { issuer: 'Anthropic', name: 'Introduction to MCP', link: 'https://verify.skilljar.com/c/n7kskcqfpwdy' },
  { issuer: 'Anthropic', name: 'Building With Claude API', link: 'https://verify.skilljar.com/c/yjedkifm9pyb' },
  { issuer: 'Anthropic', name: 'AI Fluency: Framework & Foundations', link: 'https://verify.skilljar.com/c/qms2k77yrovw' },
  { issuer: 'Anthropic', name: 'Model Context Protocol: Advanced Topics', link: 'https://verify.skilljar.com/c/rawdhc2nu6b2' },
];


export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'C++ is the primary language',
    skills: [
      { name: 'C++', mono: 'C+', note: 'Primary' },
      { name: 'C', mono: 'C' },
      { name: 'Python', mono: 'Py' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'React', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'TypeScript', mono: 'Ts' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Application logic & web technologies',
    skills: [
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'WeatherAPI', mono: 'Wa' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Development & deployment tools',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Netlify', mono: 'Nt' },
      { name: 'Vitest', mono: 'Vt' },
      { name: 'Chart.js', mono: 'Ch' },
      { name: 'Lucide Icons', mono: 'Li' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Client-side data & persistence',
    skills: [
      { name: 'LocalStorage', mono: 'Ls' },
      { name: 'In-Memory State', mono: 'Im' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOPs', mono: 'Oo' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Currently developing',
    skills: [
      { name: 'Full-Stack Development', mono: 'Fs' },
      { name: 'Software Engineering', mono: 'Se' },
      { name: 'System Design', mono: 'Sd' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'C++': ['Programming fundamentals', 'DSA learning'],
  Python: ['Programming fundamentals'],
  C: ['Programming fundamentals'],
  React: ['CampusConnect'],
  HTML: ['Aether', 'Piyush Da Dhaba'],
  CSS: ['Aether', 'Piyush Da Dhaba'],
  JavaScript: ['Aether', 'Piyush Da Dhaba'],
  'Next.js': ['CampusConnect'],
  TypeScript: ['CampusConnect'],
  'Git / GitHub': ['Aether — Weather-App repository', 'Piyush Da Dhaba — Recipe-Website repository', 'CampusConnect repository'],
  'REST APIs': ['Aether — WeatherAPI integration'],
  'Chart.js': ['Aether — Interactive weather charts'],
  WeatherAPI: ['Aether — Live weather data'],
  'React Context': ['CampusConnect — Client-side state management'],
  Vitest: ['CampusConnect — Automated tests'],
  LocalStorage: ['CampusConnect — Client-side persistence'],
  'Web Development': ['Pinnacle Labs — Web Development Internship'],
  'Frontend Development': ['Aether', 'Piyush Da Dhaba', 'Pinnacle Labs — Web Development Internship'],
  'Full-Stack Development': ['CampusConnect — Next.js and React application'],
  DSA: ['C++ learning and problem-solving practice'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
  number: 1,
  title: 'The Beginning',
  period: '2022 – 2024',
  synopsis: 'School years at Indian Public School, Purnia, Bihar — building the academic foundation before beginning the engineering journey.',
  episodes: [
    {
      code: 'S01 E01',
      title: 'The Foundation',
      description: 'Completed CBSE schooling at Indian Public School, Purnia, Bihar, with an overall score of 90% + 70%.',
      tags: ['CBSE', 'Indian Public School'],
      runtime: '2022 – 2024',
      palette: amber,
    },
    ],
  },
  {
  number: 2,
  title: 'Enter: Computer Science',
  period: '2025 – Ongoing',
  synopsis: 'Pursuing a Bachelor of Technology in Computer Science and Engineering at KIIT University, Bhubaneswar, Odisha.',
  episodes: [
    {
      code: 'S02 E01',
      title: 'The Engineer',
      description: 'Bachelor of Technology in Computer Science and Engineering at Kalinga Institute of Industrial Technology',
      tags: ['B.Tech', 'Computer Science'],
      runtime: '2025 – Ongoing',
      palette: violet,
    },
    {
      code: 'S02 E02',
      title: 'The Problem Solver',
      description: 'Building programming fundamentals through C++, C, Python and data structures and algorithms.',
      tags: ['C++', 'C', 'Python', 'DSA'],
      runtime: 'Ongoing',
      palette: crimson,
    },
    {
      code: 'S02 E03',
      title: 'The Web Developer',
      description: 'Learning and applying HTML, CSS and JavaScript to create interactive web applications.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      runtime: 'Ongoing',
      palette: jade,
    },
    ],
  },
  {
  number: 3,
  title: 'Learning to Build',
  period: '2026',
  synopsis: 'Developing practical web development skills through hands-on projects and professional internship experience.',
  episodes: [
    {
      code: 'S03 E01',
      title: 'The Intern',
      description: 'Worked as a Web Development Intern at Pinnacle Labs, gaining practical exposure to frontend development and web projects.',
      tags: ['Web Development', 'Internship'],
      runtime: 'Jun 2026 – Jul 2026',
      palette: ocean,
    },
    {
      code: 'S03 E02',
      title: 'The Interface Builder',
      description: 'Built web interfaces using HTML, CSS and JavaScript, focusing on interactive features and usable layouts.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      runtime: 'Project-based learning',
      palette: violet,
    },
    {
      code: 'S03 E03',
      title: 'The GitHub Workflow',
      description: 'Used Git and GitHub to manage project code and published web applications for others to explore.',
      tags: ['Git', 'GitHub', 'Deployment'],
      runtime: 'Ongoing',
      palette: jade,
    },
    ],
  },
  {
  number: 4,
  title: 'Building Real Products',
  period: '2026',
  synopsis: 'Three featured projects demonstrating weather intelligence, food ordering, and campus event management.',
  episodes: [
    {
      code: 'S04 E01',
      title: 'The Weather Builder',
      description: 'Aether — a weather dashboard featuring live weather data, location detection, interactive forecasts, air quality visualization and dynamic weather themes.',
      tags: ['JavaScript', 'WeatherAPI', 'Chart.js'],
      runtime: '2026',
      palette: crimson,
    },
    {
      code: 'S04 E02',
      title: 'The Product Builder',
      description: 'Piyush Da Dhaba — a food ordering and recipe website with cart management and a simulated checkout workflow.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      runtime: '2026',
      palette: amber,
    },
    {
      code: 'S04 E03',
      title: 'The Campus Connector',
      description: 'CampusConnect — a campus event management platform featuring event discovery, student registration and organizer tools.',
      tags: ['Next.js', 'React', 'TypeScript'],
      runtime: '2026',
      palette: ocean,
    },
    ],
  },
  {
  number: 5,
  title: "What's Next",
  period: 'Now streaming',
  synopsis: 'The next chapter focuses on strengthening programming fundamentals and growing as a software developer.',
  episodes: [
    {
      code: 'S05 E01',
      title: 'The Next Chapter',
      description: 'Continuing to strengthen C++, data structures and algorithms, JavaScript, and full-stack development skills.',
      tags: ['C++', 'DSA', 'JavaScript', 'Full-Stack Development'],
      runtime: 'In progress',
      palette: violet,
    },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'C++', detail: 'Programming fundamentals • DSA • Problem-solving', palette: amber },
  { label: 'The Weather Original', title: 'Aether', detail: 'Live weather data • Forecasts • Air quality visualization', palette: crimson },
  { label: 'Food Ordering Project', title: 'Piyush Da Dhaba', detail: 'Multi-page food ordering and recipe exploration experience', palette: ocean },
  { label: 'Campus Tech', title: 'CampusConnect', detail: 'Campus event discovery • Registration • Organizer tools', palette: violet },
  { label: 'Core foundation', title: 'C & Python', detail: 'Programming fundamentals and problem-solving', palette: jade },
  { label: 'Web development', title: 'Frontend Engineering', detail: 'HTML • CSS • JavaScript', palette: amber },
  { label: 'Project portfolio', title: '3 Projects', detail: 'Aether • Piyush Da Dhaba • CampusConnect', palette: crimson },
  { label: 'Industry experience', title: 'Pinnacle Labs', detail: 'Web Development Intern • June–July 2026', palette: ocean },
  { label: 'Current learning', title: 'JavaScript & DSA', detail: 'Strengthening programming and development skills', palette: jade },
  { label: 'Current focus', title: 'Full-Stack Development', detail: 'Building practical web applications and improving software engineering skills', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Computer Science Engineering',
    lines: ['KIIT University, Bhubaneswar, Odisha', 'B.Tech · Computer Science and Engineering'],
    chips: ['KIIT University'],
  },
  {
    kicker: 'Skills',
    title: 'C++ first.',
    lines: ['C, Python · HTML, CSS, JavaScript', 'Next.js, React, TypeScript · Git, GitHub'],
    chips: ['C++', 'JavaScript', 'HTML', 'CSS', 'React', 'TypeScript'],
  },
  {
    kicker: 'Experience',
    title: 'The Internship Arc',
    lines: ['Web Development Internship', 'Web Development Intern · Pinnacle Labs · June 2026 – July 2026', 'Frontend Development · UI Implementation · Web Projects'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['Aether — Live weather, forecasts, and air quality visualization', 'Piyush Da Dhaba — Food ordering and recipe exploration website', 'CampusConnect — Campus event discovery and registration platform'],
  },
  {
    kicker: 'Achievements',
    title: 'Projects in Action',
    lines: ['Aether — Live weather data and interactive forecasts', 'Piyush Da Dhaba — Cart, checkout, and order workflows', 'CampusConnect — Student and organizer event management'],
  },
  {
    kicker: 'Technical foundation',
    title: 'Built with Code',
    lines: ['C++ · C · Python · JavaScript', 'HTML · CSS · React · Next.js · TypeScript'],
  },
  {
    kicker: 'Current mission',
    title: 'Now building',
    lines: ['Full-Stack Development · Data Structures & Algorithms · Software Engineering'],
  },
];

export type ProfileId = 'piyush' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'piyush',
    name: 'Piyush',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
