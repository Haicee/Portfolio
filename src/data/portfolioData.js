import hackathonCertImg from '../assets/certificates/Hackaton certificate.png';
import psitsCertImg from '../assets/certificates/PSITS certificate.png';
import tesdaCertImg from '../assets/certificates/Tesda certificate.png';

// Project Images
import resme1 from '../assets/projects/resme1.png';
import resme2 from '../assets/projects/resme2.png';
import resme3 from '../assets/projects/resme3.png';
import resme4 from '../assets/projects/resme4.png';

import swiss1 from '../assets/projects/swiss1.png';
import swiss2 from '../assets/projects/swiss2.png';
import swiss3 from '../assets/projects/swiss3.png';

import pds1 from '../assets/projects/pds1.png';
import pds2 from '../assets/projects/pds2.png';
import pds3 from '../assets/projects/pds3.png';
import pds4 from '../assets/projects/pds4.png';
import pds5 from '../assets/projects/pds5.png';

import ims1 from '../assets/projects/ims1.png';
import ims2 from '../assets/projects/ims2.png';

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
      { name: "Antigravity" },
      { name: "Node.js" },
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
    title: "Emergency Mobile Application with Integrated GPS Tracking",
    type: "mobile",
    category: "Lead Developer",
    year: "2025",
    github: "https://github.com/Haicee/Emergency-Mobile-Application-with-Integrated-GPS-Tracking",
    badge: "Mobile App",
    role: "Lead Mobile Developer",
    tools: ["Flutter", "Dart", "Firebase", "MapLibre", "OpenStreetMap", "React", "JavaScript"],
    description: "A cross-platform mobile application providing instant SOS dispatch, geofenced incident reporting, live GPS tracking of response units, and direct emergency hotline connectivity.",
    highlights: [
      "Implemented real-time location tracking to help responders identify emergency callers.",
      "One-tap rapid SOS distress signal triggering automated push alerts",
      "Dijkstra’s shortest-path algorithm is applied to support route identification for responders.",
      "Built responsive web administrative dashboards for responder management and real-time incident monitoring.",
    ],
    deviceType: "phone",
    screenCount: 4,
    screens: [
      { label: "Login & Auth", type: "phone", theme: "red", icon: "ShieldAlert", image: resme1 },
      { label: "Emergency Dispatch", type: "phone", theme: "red", icon: "PhoneCall", image: resme2 },
      { label: "Incident Status", type: "phone", theme: "slate", icon: "Activity", image: resme3 },
      { label: "Live GPS Map", type: "phone", theme: "map", icon: "MapPin", image: resme4 }
    ]
  },
  {
    id: 2,
    title: "Swissstacks Website",
    type: "web",
    category: "Lead Developer",
    year: "2026",
    github: "https://github.com/Haicee/Swissstacks-Website",
    badge: "Website Platform",
    role: "Full Stack Web Developer",
    tools: ["React", "Tailwind CSS", "JavaScript", "SilentForms", "Firebase"],
    description: "An interactive corporate web application showcasing technical services, core competencies, and streamlined client inquiry channels for SwissStack.",
    highlights: [
      "Built a responsive single-page web platform using React and Tailwind CSS to deliver a polished brand presence and clear service catalog.",
      "Created a modern, interactive user interface that strengthens brand identity and user engagement",
      "Configured Firebase infrastructure for fast static web hosting and scalable data storage.",
      "Integrated SilentForms for frictionless client lead capture and direct communication processing without backend overhead."
    ],
    deviceType: "browser",
    screenCount: 3,
    screens: [
      { label: "swissstacks.com/", type: "browser", theme: "blue", icon: "LayoutDashboard", image: swiss1 },
      { label: "swissstacks.com/", type: "browser", theme: "blue", icon: "Users", image: swiss2 },
      { label: "swissstacks.com/", type: "browser", theme: "blue", icon: "CheckCircle2", image: swiss3 }
    ]
  },
  {
    id: 3,
    title: "Personal Data Sheet System",
    type: "web",
    category: "Assistant Developer",
    year: "2026",
    github: "https://github.com/Haicee/PDS-System",
    badge: "Web Application",
    role: "Full Stack Engineer",
    tools: ["Laravel", "Tailwind CSS", "PHP", "MySQL", "Xampp"],
    description: "A web-based employee information management portal engineered to digitize personal data intake, eliminate paper-reliant workflows, and streamline record accessibility.",
    highlights: [
      "Built a secure, role-based admin dashboard for centralized data oversight and user permission management.",
      "Architected full-stack CRUD operations using Laravel and MySQL to secure and standardize employee data entry and management.",
      "Implemented comprehensive audit trail mechanisms to trace and monitor all user data modifications and system activities.",
      "Created export-ready PDF and Excel generation modules, ensuring immediate data availability for compliance and reporting needs."
    ],
    deviceType: "browser",
    screenCount: 5,
    screens: [
      { label: "pds.localhost:5173/", type: "browser", theme: "cyan", icon: "KeyRound", image: pds1 },
      { label: "pds.localhost:5173/", type: "browser", theme: "multi", icon: "BarChart3", image: pds2 },
      { label: "pds.localhost:5173/", type: "browser", theme: "slate", icon: "FileText", image: pds3 },
      { label: "pds.localhost:5173/", type: "browser", theme: "cyan", icon: "Search", image: pds4 },
      { label: "pds.localhost:5173/", type: "browser", theme: "slate", icon: "History", image: pds5 }
    ]
  },
  {
    id: 4,
    title: "Identity Management System",
    type: "web",
    category: "Lead Developer",
    year: "2026",
    github: "https://github.com/Haicee/IM-System",
    badge: "Web Application",
    role: "Lead Full Stack Developer",
    tools: ["React", "Laravel", "PHP", "Tailwind CSS", "MySQL"],
    description: "An automated digital identity management platform engineered with accessible user interfaces to streamline employee data capture, automate PDF credential generation, and facilitate seamless vendor handoffs.",
    highlights: [
      "Engineered database-driven intake forms with intuitive validation and focus states to reduce input friction and manual data entry errors.",
      "Built a secure role-based admin dashboard with data access controls to manage employee credentials.",
      "Implemented automated server-side PDF generation to dynamically format and render high-resolution digital identity credentials.",
      "Designed accessible, high-contrast user interfaces with enhanced typography and clear layout hierarchy, tailored for improved visual readability across age groups."
    ],
    deviceType: "browser",
    screenCount: 2,
    screens: [
      { label: "ims.localhost:5173/", type: "browser", theme: "dark", icon: "Lock", image: ims1 },
      { label: "ims.localhost:5173/", type: "browser", theme: "blue", icon: "Award", image: ims2 }
    ]
  }
];
