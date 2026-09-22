export const personalInfo = {
  name: "Marc S.",
  title: "Associate Full Stack Developer",
  tagline: "Developing dynamic & responsive web/mobile applications",
  bio: "Hi, I'm Marc! A passionate Associate Full Stack Developer dedicated to crafting seamless web and mobile experiences. With a strong foundation in modern frontend and backend technologies, I focus on building scalable, performant, and user-centric applications that solve real-world problems.",
  status: "Available for new projects & opportunities",
  location: "Philippines",
  email: "marc.developer@example.com",
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

export const skills = [
  { name: "React", category: "Frontend", level: "Advanced", icon: "react" },
  { name: "Flutter", category: "Mobile", level: "Advanced", icon: "flutter" },
  { name: "Laravel", category: "Backend", level: "Intermediate", icon: "laravel" },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced", icon: "tailwind" },
  { name: "HTML5", category: "Frontend", level: "Advanced", icon: "html5" },
  { name: "CSS3", category: "Frontend", level: "Advanced", icon: "css3" },
  { name: "JavaScript", category: "Language", level: "Advanced", icon: "javascript" },
  { name: "Firebase", category: "Cloud & DB", level: "Intermediate", icon: "firebase" },
  { name: "Python", category: "Language / AI", level: "Intermediate", icon: "python" },
  { name: "Figma", category: "UI/UX Design", level: "Advanced", icon: "figma" },
  { name: "Android Studio", category: "Tooling", level: "Intermediate", icon: "android" },
  { name: "Git & GitHub", category: "Tooling", level: "Advanced", icon: "git" },
];

export const certificates = [
  {
    id: 1,
    title: "Certificate of Academic & Technical Excellence",
    issuer: "Commission on Higher Education / University",
    date: "2024",
    orientation: "portrait",
    credentialUrl: "#",
    description: "Awarded for exceptional capstone execution and technical aptitude in software systems development.",
    badge: "Verified Credential",
    tags: ["Software Engineering", "Full Stack Development", "Honors"]
  },
  {
    id: 2,
    title: "Advanced Web & Application Development Certification",
    issuer: "Tech Accreditation Institute",
    date: "2024",
    orientation: "landscape",
    credentialUrl: "#",
    description: "Comprehensive qualification covering modern client-server architecture, database modeling, and REST APIs.",
    badge: "Certified Developer",
    tags: ["REST APIs", "Modern Web", "Architecture"]
  },
  {
    id: 3,
    title: "Mobile App Development with Flutter & Firebase",
    issuer: "Professional Software Academy",
    date: "2024",
    orientation: "landscape",
    credentialUrl: "#",
    description: "Intensive training in cross-platform mobile app creation, state management, and real-time backend synchronization.",
    badge: "Mobile Certified",
    tags: ["Flutter", "Dart", "Firebase Cloud"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Emergency Response & Real-Time Dispatch System",
    type: "mobile",
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
