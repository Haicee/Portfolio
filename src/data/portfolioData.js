import hackathonCertImg from '../assets/certificates/Hackaton certificate.png';
import psitsCertImg from '../assets/certificates/PSITS certificate.png';
import tesdaCertImg from '../assets/certificates/Tesda certificate.png';

export const personalInfo = {
  name: "Marc S.",
  title: "Junior Full Stack Developer",
  tagline: "Bringing Ideas To Life Through Tech And Design",
  bio: "Hi, I'm Marc! A passionate Junior Full Stack Developer dedicated to crafting seamless web and mobile experiences. With a strong foundation in modern frontend and backend technologies, I focus on building scalable, performant, and user-centric applications that solve real-world problems.",
  status: "Available for new projects & opportunities",
  location: "Philippines",
  email: "marcpaulsualog0@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com", icon: "Github" },
    { label: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { label: "Facebook", url: "https://facebook.com", icon: "Facebook" },
    { label: "Twitter / X", url: "https://x.com", icon: "Twitter" },
  ]
};

export const navItems = [
  { id: "hero", number: "00", label: "intro" },
  { id: "about", number: "01", label: "about" },
  { id: "skills", number: "02", label: "skills" },
  { id: "certificates", number: "03", label: "certificates" },
  { id: "experience", number: "04", label: "experience" },
  { id: "contact", number: "05", label: "contact" },
];

export const skillGroups = [
  {
    id: "languages",
    label: "Languages",
    description: "Programming Languages I use across my projects.",
    skills: [
      { name: "JavaScript" },
      { name: "Python" },
      { name: "Dart" },
      { name: "PHP" },
      { name: "HTML & CSS" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "What Users See: Interfaces and responsive experiences I build.",
    skills: [
      { name: "React" },
      { name: "Flutter" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Behind the Scenes: APIs, server logic, and database management.",
    skills: [
      { name: "Laravel" },
      { name: "Firebase" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "REST APIs" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Cross-platform apps I develop for iOS and Android.",
    skills: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Android Studio" },
    ],
  },
  {
    id: "devtools",
    label: "Developer Tool",
    description: "Dev tooling, workflows, and design systems I rely on.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Figma" },
      { name: "VS Code" },
      { name: "Xampp" },
      { name: "Stitch" },
      { name: "Discord" },
    ],
  },

];

export const certificates = [
  {
    id: 1,
    title: "TESDA Technical & Vocational Training Certificate",
    issuer: "Technical Education and Skills Development Authority (TESDA)",
    date: "2024",
    image: tesdaCertImg,
    orientation: "landscape",
    credentialUrl: "#",
    description: "Official national credential certifying proficiency and technical expertise in software and system development.",
    badge: "TESDA Accredited",
    tags: ["TESDA", "Technical Training", "Certified"]
  },
  {
    id: 2,
    title: "PSITS Technical & Student Assembly Certificate",
    issuer: "Philippine Society of Information Technology Students (PSITS)",
    date: "2024",
    image: psitsCertImg,
    orientation: "landscape",
    credentialUrl: "#",
    description: "Official certificate of active involvement, technical participation, and academic achievement in PSITS activities.",
    badge: "PSITS Certified",
    tags: ["PSITS", "IT Community", "Technical Skills"]
  },
  {
    id: 3,
    title: "Hackathon Competition Certificate of Achievement",
    issuer: "Hackathon Organizer / Tech Event",
    date: "2024",
    image: hackathonCertImg,
    orientation: "landscape",
    credentialUrl: "#",
    description: "Awarded in recognition of outstanding performance, innovation, and teamwork in software development during the hackathon competition.",
    badge: "Hackathon Participant",
    tags: ["Hackathon", "Full Stack Development", "Innovation"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Emergency Response & Real-Time Dispatch System",
    type: "mobile",
    category: "MOBILE",
    year: "2024",
    github: "https://github.com",
    badge: "Featured Mobile App",
    role: "Lead Mobile Developer",
    tools: ["Flutter", "Dart", "Firebase", "Google Maps API", "Cloud Firestore"],
    description: "A mission-critical cross-platform mobile application providing instant SOS dispatch, geo-fenced incident reporting, live GPS tracking of response units, and direct emergency hotline connectivity.",
    highlights: [
      "Real-time geolocation tracking with interactive map radius visualization",
      "One-tap rapid SOS distress signal triggering automated push alerts",
      "Offline-resilient caching with Firebase synchronization"
    ],
    deviceType: "phone",
    screenCount: 4,
    screens: [
      { label: "Login & Auth", type: "phone", theme: "red", icon: "ShieldAlert" },
      { label: "Emergency Dispatch", type: "phone", theme: "red", icon: "PhoneCall" },
      { label: "Incident Status", type: "phone", theme: "slate", icon: "Activity" },
      { label: "Live GPS Map", type: "phone", theme: "map", icon: "MapPin" }
    ]
  },
  {
    id: 2,
    title: "Enterprise Administrative Portal & Verification System",
    type: "web",
    category: "WEB",
    year: "2024",
    github: "https://github.com",
    badge: "Web Platform",
    role: "Full Stack Web Developer",
    tools: ["React", "Laravel", "MySQL", "Tailwind CSS", "RESTful API"],
    description: "Comprehensive administrative management web portal featuring role-based authentication, real-time analytics, paginated membership data tables, and dynamic approval modals.",
    highlights: [
      "Role-Based Access Control (RBAC) ensuring secure administrative permissions",
      "High-speed data grid with instant search, multi-column filters, and export",
      "Interactive analytics dashboard visualizing system activities and registrations"
    ],
    deviceType: "browser",
    screenCount: 5,
    screens: [
      { label: "Admin Overview", type: "browser", theme: "blue", icon: "LayoutDashboard" },
      { label: "User Management", type: "browser", theme: "blue", icon: "Users" },
      { label: "Verification Modal", type: "browser", theme: "blue", icon: "CheckCircle2" },
      { label: "Record Data Grid", type: "browser", theme: "blue", icon: "Table" },
      { label: "System Settings", type: "browser", theme: "blue", icon: "Sliders" }
    ]
  },
  {
    id: 3,
    title: "Integrated Records & Activity Monitoring Dashboard",
    type: "web",
    category: "WEB",
    year: "2023",
    github: "https://github.com",
    badge: "Web Application",
    role: "Full Stack Engineer",
    tools: ["React", "Tailwind CSS", "PHP", "PostgreSQL", "Chart.js"],
    description: "Data-intensive activity monitoring dashboard designed for operational tracking, categorized status badges (active, pending, flagged), and batch record updates.",
    highlights: [
      "Visual status metrics categorized with high-contrast color cards",
      "Audit trail logs recording user mutations and record modifications",
      "Automated PDF and Excel export pipelines for operational reporting"
    ],
    deviceType: "browser",
    screenCount: 5,
    screens: [
      { label: "Splash Gateway", type: "browser", theme: "cyan", icon: "KeyRound" },
      { label: "Status Metric Cards", type: "browser", theme: "multi", icon: "BarChart3" },
      { label: "Activity Ledger", type: "browser", theme: "slate", icon: "FileText" },
      { label: "Record Explorer", type: "browser", theme: "cyan", icon: "Search" },
      { label: "Audit Timeline", type: "browser", theme: "slate", icon: "History" }
    ]
  },
  {
    id: 4,
    title: "Digital Certificate Issuance & QR Verification Platform",
    type: "web",
    category: "WEB",
    year: "2023",
    github: "https://github.com",
    badge: "Security & Verification",
    role: "Lead Full Stack Developer",
    tools: ["React", "Laravel", "QR Engine", "MySQL", "Tailwind CSS"],
    description: "Automated credential generation and verification platform. Issues cryptographically tamper-resistant digital certificates embedded with scannable QR codes for instantaneous public validation.",
    highlights: [
      "On-the-fly vector certificate generation with unique verification hashes",
      "Public QR inspection scanner validating authenticity in under 200ms",
      "Bulk batch issuance portal for educational workshops and training cohorts"
    ],
    deviceType: "browser",
    screenCount: 5,
    screens: [
      { label: "Issuer Gateway", type: "browser", theme: "dark", icon: "Lock" },
      { label: "Credential Preview", type: "browser", theme: "blue", icon: "Award" },
      { label: "Live QR Validation", type: "browser", theme: "dark", icon: "QrCode" },
      { label: "Issuance Registry", type: "browser", theme: "slate", icon: "FileCheck" },
      { label: "Certificate Template", type: "browser", theme: "blue", icon: "FileBadge" }
    ]
  },
  {
    id: 5,
    title: "EcoSplash: Interactive Environmental Educational Game",
    type: "interactive",
    category: "INTERACTIVE",
    year: "2023",
    github: "https://github.com",
    badge: "Interactive Game & Web",
    role: "Game Developer & UI Designer",
    tools: ["JavaScript", "HTML5 Canvas", "CSS3 Animations", "Web Audio API"],
    description: "Engaging 2D educational game championing water conservation and eco-friendly habits. Built with smooth character physics, interactive puzzle stages, and gamified quizzes.",
    highlights: [
      "Custom 60fps canvas rendering loop with custom sprite animations",
      "Dynamic stage mechanics and physics-based puzzle obstacles",
      "Built-in level editor and persistent local high-score leaderboard"
    ],
    deviceType: "browser",
    screenCount: 5,
    screens: [
      { label: "Start Screen & Character", type: "browser", theme: "emerald", icon: "Gamepad2" },
      { label: "Stage Selection", type: "browser", theme: "emerald", icon: "Map" },
      { label: "Water Puzzle Gameplay", type: "browser", theme: "emerald", icon: "Play" },
      { label: "Conservation Quiz", type: "browser", theme: "emerald", icon: "HelpCircle" },
      { label: "Score & Code View", type: "browser", theme: "dark", icon: "Terminal" }
    ]
  },
  {
    id: 6,
    title: "EcoSplash Mobile Companion & Habit Tracker",
    type: "mobile",
    category: "MOBILE",
    year: "2023",
    github: "https://github.com",
    badge: "Mobile Application",
    role: "Mobile Developer",
    tools: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Local Notifications"],
    description: "Cross-platform mobile application companion empowering users to log daily eco-habits, participate in school and community challenges, and earn collectible virtual trophies.",
    highlights: [
      "Personalized daily habit reminders with scheduled local push notifications",
      "Gamified streak counter with celebratory micro-animations",
      "Cloud synchronizing seamlessly with EcoSplash web game profiles"
    ],
    deviceType: "phone",
    screenCount: 4,
    screens: [
      { label: "Splash & Welcome", type: "phone", theme: "emerald", icon: "Sparkles" },
      { label: "Auth & Profile", type: "phone", theme: "emerald", icon: "UserCheck" },
      { label: "Trophy Gallery", type: "phone", theme: "emerald", icon: "Trophy" },
      { label: "Daily Eco Habit Log", type: "phone", theme: "emerald", icon: "CalendarCheck" }
    ]
  },
  {
    id: 7,
    title: "Next-Gen 3D Interactive Showcase & Product Portfolio",
    type: "web",
    category: "WEB",
    year: "2024",
    github: "https://github.com",
    badge: "3D & Advanced UI",
    role: "Frontend Engineer",
    tools: ["React", "Three.js / CSS 3D", "Tailwind CSS", "Vite"],
    description: "Immersive dark-themed interactive product showcase featuring 3D isometric device mockups, interactive lighting rigs, and responsive telemetry monitors.",
    highlights: [
      "Spatial 3D hardware models rendered with smooth mouse-orbit interaction",
      "Ambient neon glow accents optimized with zero performance overhead",
      "Fluid responsive layout adapting gracefully across all screen dimensions"
    ],
    deviceType: "browser",
    screenCount: 3,
    screens: [
      { label: "Spatial Hero Stage", type: "browser", theme: "dark", icon: "Laptop" },
      { label: "3D Isometric Models", type: "browser", theme: "dark", icon: "Box" },
      { label: "System Telemetry", type: "browser", theme: "dark", icon: "Cpu" }
    ]
  }
];


