import { Project, GalleryItem, TeamMember, ServiceItem, MachineryItem } from './types';
import balajiTemple from "./assets/Gallery/balaji-temple.jpg.jpeg";
import batchingPlant from "./assets/Gallery/batching-plant.jpg.jpeg";
import boundaryWall from "./assets/Gallery/boundary-wall.jpg.jpeg";
import closeVilla from "./assets/Gallery/close-villa.jpg.jpeg";
import duplexVillas from "./assets/Gallery/duplex-villas.jpg.jpeg";
import foundationWork from "./assets/Gallery/foundation-work.jpg.jpeg";
import plotDevelopment from "./assets/Gallery/plot-development.jpg.jpeg";
import rccColumn from "./assets/Gallery/rcc-column.jpg.jpeg";
import townshipAerial from "./assets/Gallery/township-aerial.jpg.jpeg";
import township from "./assets/Gallery/township.jpg.jpeg";
import waterReservoir from "./assets/Gallery/water-reservoir.jpg.jpeg";

import shambhuPipla from "./assets/Gallery/shambhu-pipla.jpg.jpeg";
import nutanSharma from "./assets/Gallery/nutan-sharma.jpg.jpeg";
import anilSharma from "./assets/Gallery/anil-sharma.jpg.jpeg";
const svgToDataUrl = (svgStr: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svgStr)}`;

const shambhuSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <radialGradient id="bg-shambhu" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="#FFFDF9" />
      <stop offset="100%" stop-color="#FDF2E9" />
    </radialGradient>
    <linearGradient id="turban-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF2E93" />
      <stop offset="50%" stop-color="#E11D74" />
      <stop offset="100%" stop-color="#B91C1C" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.1"/>
    </filter>
  </defs>
  
  <rect width="100%" height="100%" fill="url(#bg-shambhu)" />
  <circle cx="200" cy="200" r="185" fill="none" stroke="#F59E0B" stroke-width="2" stroke-opacity="0.15" />
  <circle cx="200" cy="200" r="175" fill="none" stroke="#F59E0B" stroke-width="1" stroke-opacity="0.08" stroke-dasharray="8 4" />
  
  <g transform="translate(0, 10)">
    <path d="M 80,330 C 80,260 140,240 200,240 C 260,240 320,260 320,330 Z" fill="#E0F2FE" />
    <path d="M 155,240 L 200,270 L 245,240" fill="none" stroke="#BAE6FD" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M 200,270 L 200,330" stroke="#BAE6FD" stroke-width="3" stroke-dasharray="4 4" />
    
    <rect x="175" y="210" width="50" height="40" fill="#E09F7C" />
    <path d="M 175,245 C 190,255 210,255 225,245" fill="none" stroke="#C87D56" stroke-width="2" />
    
    <path d="M 150,140 C 150,210 160,230 200,230 C 240,230 250,210 250,140 C 250,110 240,110 200,110 C 160,110 150,110 150,140 Z" fill="#F0B18F" />
    
    <circle cx="145" cy="165" r="12" fill="#E09F7C" />
    <circle cx="255" cy="165" r="12" fill="#E09F7C" />
    
    <path d="M 165,145 Q 180,137 192,142" fill="none" stroke="#1E293B" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 235,145 Q 220,137 208,142" fill="none" stroke="#1E293B" stroke-width="4.5" stroke-linecap="round" />
    
    <ellipse cx="180" cy="155" rx="7" ry="4" fill="#FFFFFF" />
    <circle cx="180" cy="155" r="3.5" fill="#1E293B" />
    <ellipse cx="220" cy="155" rx="7" ry="4" fill="#FFFFFF" />
    <circle cx="220" cy="155" r="3.5" fill="#1E293B" />
    
    <path d="M 170,155 Q 165,153 162,156" fill="none" stroke="#C87D56" stroke-width="1.5" />
    <path d="M 230,155 Q 235,153 238,156" fill="none" stroke="#C87D56" stroke-width="1.5" />
    <path d="M 180,165 Q 200,172 220,165" fill="none" stroke="#C87D56" stroke-width="1.5" />
    
    <path d="M 195,155 L 200,185 L 205,185" fill="none" stroke="#C87D56" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    
    <g filter="url(#shadow)">
      <path d="M 200,192 C 185,190 155,188 150,205 C 148,211 155,212 158,208 C 168,198 185,198 200,202 C 215,198 232,198 242,208 C 245,212 252,211 250,205 C 245,188 215,190 200,192 Z" fill="#0F172A" />
    </g>
    
    <path d="M 190,212 Q 200,218 210,212" fill="none" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" />
    
    <g filter="url(#shadow)">
      <path d="M 140,115 C 140,75 160,55 200,55 C 240,55 260,75 260,115 C 275,115 285,100 280,85 C 270,55 240,35 200,35 C 160,35 130,55 120,85 C 115,100 125,115 140,115 Z" fill="url(#turban-grad)" />
      
      <path d="M 130,95 Q 200,45 270,90" fill="none" stroke="#F472B6" stroke-width="5" stroke-linecap="round" opacity="0.8" />
      <path d="M 122,110 Q 200,55 278,105" fill="none" stroke="#F472B6" stroke-width="6" stroke-linecap="round" opacity="0.6" />
      <path d="M 145,80 Q 200,40 255,75" fill="none" stroke="#F472B6" stroke-width="4" stroke-linecap="round" opacity="0.5" />
      <path d="M 115,100 Q 180,120 250,80" fill="none" stroke="#BE185D" stroke-width="5" stroke-linecap="round" opacity="0.7" />
      
      <path d="M 200,55 L 200,25" fill="none" stroke="#F59E0B" stroke-width="3" />
      <path d="M 200,25 Q 192,15 200,5 Q 208,15 200,25 Z" fill="#F59E0B" />
      <circle cx="200" cy="35" r="5" fill="#B91C1C" />
      <circle cx="200" cy="50" r="7" fill="#F59E0B" />
      
      <path d="M 135,110 C 120,115 110,130 110,150 C 110,190 125,230 125,260 L 145,260 C 145,230 135,190 135,150 Z" fill="url(#turban-grad)" />
      <path d="M 120,140 C 118,180 130,220 132,255" fill="none" stroke="#F472B6" stroke-width="2" opacity="0.6" />
    </g>
  </g>
</svg>`;

const nutanSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <radialGradient id="bg-nutan" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="#F8FAFC" />
      <stop offset="100%" stop-color="#E2E8F0" />
    </radialGradient>
    <linearGradient id="blazer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#854D0E" />
      <stop offset="100%" stop-color="#451A03" />
    </linearGradient>
    <filter id="shadow-n" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.1"/>
    </filter>
  </defs>
  
  <rect width="100%" height="100%" fill="url(#bg-nutan)" />
  <circle cx="200" cy="200" r="185" fill="none" stroke="#0F172A" stroke-width="1.5" stroke-opacity="0.1" />
  
  <g transform="translate(0, 15)">
    <path d="M 70,330 C 70,260 130,230 200,230 C 270,230 330,260 330,330 Z" fill="url(#blazer-grad)" />
    
    <path d="M 160,230 L 200,270 L 240,230 Z" fill="#FFFFFF" />
    <path d="M 160,230 L 190,300 L 200,300 L 210,300 L 240,230" fill="none" stroke="#A16207" stroke-width="5" />
    <line x1="200" y1="270" x2="200" y2="330" stroke="#CBD5E1" stroke-width="2" />
    <circle cx="200" cy="285" r="3" fill="#94A3B8" />
    <circle cx="200" cy="305" r="3" fill="#94A3B8" />
    
    <rect x="175" y="195" width="50" height="40" fill="#E09F7C" />
    <path d="M 175,225 C 190,235 210,235 225,225" fill="none" stroke="#C87D56" stroke-width="2" />
    
    <path d="M 150,130 C 150,195 160,215 200,215 C 240,215 250,195 250,130 C 250,100 240,100 200,100 C 160,100 150,100 150,130 Z" fill="#F0B18F" />
    
    <path d="M 145,120 C 142,90 160,70 200,70 C 240,70 258,90 255,120 C 250,120 248,110 242,105 C 230,95 170,95 158,105 C 152,110 150,120 145,120 Z" fill="#0F172A" />
    <path d="M 148,110 Q 200,78 252,110" fill="none" stroke="#1E293B" stroke-width="2" opacity="0.5" />
    
    <circle cx="145" cy="155" r="11" fill="#E09F7C" />
    <circle cx="255" cy="155" r="11" fill="#E09F7C" />
    
    <path d="M 165,135 Q 180,128 192,132" fill="none" stroke="#0F172A" stroke-width="4" stroke-linecap="round" />
    <path d="M 235,135 Q 220,128 208,132" fill="none" stroke="#0F172A" stroke-width="4" stroke-linecap="round" />
    
    <ellipse cx="180" cy="145" rx="7" ry="4" fill="#FFFFFF" />
    <circle cx="180" cy="145" r="3.5" fill="#1E293B" />
    <ellipse cx="220" cy="145" rx="7" ry="4" fill="#FFFFFF" />
    <circle cx="220" cy="145" r="3.5" fill="#1E293B" />
    
    <path d="M 196,145 L 200,172 L 204,172" fill="none" stroke="#C87D56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    
    <g filter="url(#shadow-n)">
      <path d="M 183,180 Q 200,174 217,180 Q 200,188 183,180" fill="#0F172A" />
      <path d="M 148,150 C 146,185 170,218 200,218 C 230,218 254,185 252,150 C 255,175 245,210 200,225 C 155,210 145,175 148,150 Z" fill="#0F172A" />
      <path d="M 145,145 L 149,165" stroke="#0F172A" stroke-width="8" stroke-linecap="round" />
      <path d="M 255,145 L 251,165" stroke="#0F172A" stroke-width="8" stroke-linecap="round" />
    </g>
    
    <path d="M 191,192 Q 200,197 209,192" fill="none" stroke="#E11D48" stroke-width="1.5" stroke-linecap="round" />
  </g>
</svg>`;

const anilSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <radialGradient id="bg-anil" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
      <stop offset="0%" stop-color="#ECFDF5" />
      <stop offset="50%" stop-color="#D1FAE5" />
      <stop offset="100%" stop-color="#A7F3D0" />
    </radialGradient>
    <filter id="shadow-a" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.1"/>
    </filter>
  </defs>
  
  <rect width="100%" height="100%" fill="url(#bg-anil)" />
  <circle cx="60" cy="80" r="45" fill="#34D399" opacity="0.15" filter="blur(8px)" />
  <circle cx="340" cy="120" r="60" fill="#059669" opacity="0.1" filter="blur(12px)" />
  <path d="M 300,350 Q 350,220 390,300" fill="none" stroke="#10B981" stroke-width="40" stroke-linecap="round" opacity="0.1" filter="blur(15px)" />
  <path d="M 20,280 Q 80,180 50,340" fill="none" stroke="#047857" stroke-width="30" stroke-linecap="round" opacity="0.12" filter="blur(10px)" />
  <circle cx="200" cy="200" r="185" fill="none" stroke="#10B981" stroke-width="1.5" stroke-opacity="0.15" />
  
  <g transform="translate(0, 15)">
    <path d="M 70,330 C 70,265 130,235 200,235 C 270,235 330,265 330,330 Z" fill="#FFFFFF" filter="url(#shadow-a)" />
    <path d="M 155,235 L 200,265 L 245,235" fill="none" stroke="#F1F5F9" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    <line x1="200" y1="265" x2="200" y2="330" stroke="#E2E8F0" stroke-width="2" />
    <circle cx="200" cy="285" r="2.5" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1" />
    <circle cx="200" cy="305" r="2.5" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1" />
    
    <rect x="175" y="195" width="50" height="42" fill="#E09F7C" />
    <path d="M 175,228 C 190,238 210,238 225,228" fill="none" stroke="#C87D56" stroke-width="2" />
    
    <path d="M 150,130 C 150,195 160,215 200,215 C 240,215 250,195 250,130 C 250,100 240,100 200,100 C 160,100 150,100 150,130 Z" fill="#F0B18F" />
    
    <path d="M 144,120 C 142,85 165,68 200,68 C 235,68 258,85 256,120 C 251,120 247,108 241,104 C 230,95 170,95 159,104 C 153,108 149,120 144,120 Z" fill="#1E293B" />
    
    <circle cx="145" cy="155" r="11" fill="#E09F7C" />
    <circle cx="255" cy="155" r="11" fill="#E09F7C" />
    
    <path d="M 166,136 Q 180,129 191,133" fill="none" stroke="#1E293B" stroke-width="3.5" stroke-linecap="round" />
    <path d="M 234,136 Q 220,129 209,133" fill="none" stroke="#1E293B" stroke-width="3.5" stroke-linecap="round" />
    
    <ellipse cx="180" cy="145" rx="7" ry="4" fill="#FFFFFF" />
    <circle cx="180" cy="145" r="3.5" fill="#1E293B" />
    <ellipse cx="220" cy="145" rx="7" ry="4" fill="#FFFFFF" />
    <circle cx="220" cy="145" r="3.5" fill="#1E293B" />
    
    <path d="M 196,145 L 200,172 L 204,172" fill="none" stroke="#C87D56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    
    <g filter="url(#shadow-a)">
      <path d="M 183,180 Q 200,174 217,180 Q 200,187 183,180" fill="#1E293B" />
      <path d="M 148,150 C 146,185 170,218 200,218 C 230,218 254,185 252,150 C 255,175 245,210 200,225 C 155,210 145,175 148,150 Z" fill="#1E293B" opacity="0.95" />
      <path d="M 146,145 L 148,162" stroke="#1E293B" stroke-width="7" stroke-linecap="round" />
      <path d="M 254,145 L 252,162" stroke="#1E293B" stroke-width="7" stroke-linecap="round" />
    </g>
    
    <path d="M 190,191 Q 200,199 210,191" fill="none" stroke="#E11D48" stroke-width="2" stroke-linecap="round" />
  </g>
</svg>`;

export const teamMembers: TeamMember[] = [
  {
    name: "SHAMBHU PIPLA",
    role: "Founder & Owner",
    description: "Visionary entrepreneur with extensive experience in civil construction, infrastructure development, and large-scale project execution across Rajasthan.",
    avatarType: "pagadi",
    imageUrl: shambhuPipla
  },
  {
    name: "NUTAN SHARMA",
    role: "Director & Owner",
    description: "Responsible for strategic business planning, corporate governance, financial management, operations planning, and corporate growth initiatives.",
    avatarType: "suit",
   imageUrl: nutanSharma
  },
  {
    name: "ANIL SHARMA",
    role: "Chief Executive Officer",
    description: "Leading daily business operations, project oversight, client relations, resource optimization, and company development.",
    avatarType: "white_shirt",
    imageUrl: anilSharma
  }
];

export const services: ServiceItem[] = [
  {
    name: "Road & Highway Construction",
    description: "End-to-end development, surfacing, and maintenance of national highways, state highways, and industrial routes.",
    iconName: "Compass"
  },
  {
    name: "Civil Construction",
    description: "Residential townships, state-of-the-art commercial hubs, and industrial grade building infrastructures.",
    iconName: "Home"
  },
  {
    name: "Earthwork & Excavation",
    description: "Precision site leveling, deep foundation excavation, mining earthwork, and high-volume land development.",
    iconName: "Layers"
  },
  {
    name: "Electrical Projects",
    description: "High-voltage industrial electrification, substation setups, street lighting networks, and smart cabling installations.",
    iconName: "Zap"
  },
  {
    name: "Water Supply Systems",
    description: "Cross-region pipeline deployments, local drainage networks, water reservoirs, and civil plumbing systems.",
    iconName: "Droplet"
  },
  {
    name: "Fire Fighting Systems",
    description: "Design, high-pressure piping installation, automated testing, and commissioning of safety protection networks.",
    iconName: "ShieldAlert"
  },
  {
    name: "Industrial Infrastructure",
    description: "Heavy mining civil frameworks, factory structures, warehouse storage developments, and batching installations.",
    iconName: "Factory"
  },
  {
    name: "Project Consultancy",
    description: "Comprehensive blueprint design, architectural mapping, cost Estimation, and full-cycle project supervision.",
    iconName: "FileSpreadsheet"
  }
];

export const majorProjects: Project[] = [
  {
    id: 1,
    sNo: 1,
    client: "SK KHETAN – HINDUSTAN ZINC BKM MINES",
    description: "Mining Civil Framework and Heavy Infrastructure Development",
    type: "Industrial Infrastructure",
    valueNumeric: 2950,
    valueFormatted: "₹29.50 Crore",
    year: "2025-2026",
    status: "Work In Progress"
  },
  {
    id: 2,
    sNo: 2,
    client: "SK KHETAN",
    description: "Boundary Wall Work – UltraTech Cement Plant, Pindwara",
    type: "Civil Construction",
    valueNumeric: 255,
    valueFormatted: "₹2.55 Crore",
    year: "2025-2026",
    status: "Work In Progress"
  },
  {
    id: 3,
    sNo: 3,
    client: "SK KHETAN INFRAPROJECTS PVT. LTD.",
    description: "Civil Work, Repair & Maintenance Operations",
    type: "Civil Construction",
    valueNumeric: 289,
    valueFormatted: "₹2.89 Crore",
    year: "2025-2026",
    status: "Work In Progress"
  },
  {
    id: 4,
    sNo: 4,
    client: "SANWARIYA MULTIVENTURES LIMITED",
    description: "Civil Construction and Development Jobs",
    type: "Civil Construction",
    valueNumeric: 677,
    valueFormatted: "₹6.77 Crore",
    year: "2026-2027",
    status: "Work In Progress"
  },
  {
    id: 5,
    sNo: 5,
    client: "SHRI RAJENDRA KUMAR KALAL",
    description: "Civil Work, Asphalt Road Work & Heavy Stone Masonry",
    type: "Road & Highway Construction",
    valueNumeric: 695,
    valueFormatted: "₹6.95 Crore",
    year: "2025-2026",
    status: "Completed"
  },
  {
    id: 6,
    sNo: 6,
    client: "SHRI RAJENDRA KUMAR KALAL",
    description: "Infrastructure Engineering and Construction Development",
    type: "Civil Construction",
    valueNumeric: 373,
    valueFormatted: "₹3.73 Crore",
    year: "2023-2024",
    status: "Completed"
  },
  {
    id: 7,
    sNo: 7,
    client: "BHERUNATH CONSTRUCTION PVT. LTD.",
    description: "Civil Work & Specialized Site Grading Infrastructure",
    type: "Civil Construction",
    valueNumeric: 299,
    valueFormatted: "₹2.99 Crore",
    year: "2022-2023",
    status: "Completed"
  },
  {
    id: 8,
    sNo: 8,
    client: "BHARAT CONSTRUCTION COMPANY",
    description: "Inter-City Road Infrastructure and Safety Boundary Works",
    type: "Road & Highway Construction",
    valueNumeric: 255,
    valueFormatted: "₹2.55 Crore",
    year: "2019-2020",
    status: "Completed"
  },
  {
    id: 9,
    sNo: 9,
    client: "ACES INFRADEV PVT. LTD.",
    description: "Civil Engineering Development and Infrastructure Support",
    type: "Civil Construction",
    valueNumeric: 135,
    valueFormatted: "₹1.35 Crore",
    year: "2020-2021",
    status: "Completed"
  },
  {
    id: 10,
    sNo: 10,
    client: "BALAJI CONSTRUCTION COMPANY",
    description: "Regional Drainage, Excavation, and Concrete Works",
    type: "Water Supply Systems",
    valueNumeric: 92.61,
    valueFormatted: "₹92.61 Lakh",
    year: "2022-2023",
    status: "Completed"
  },
  {
    id: 11,
    sNo: 11,
    client: "ARAI RAILMAGRA PROJECT",
    description: "Highway Quality Asphalt Road Sub-grade and Surface Work",
    type: "Road & Highway Construction",
    valueNumeric: 69,
    valueFormatted: "₹69.00 Lakh",
    year: "2020-2021",
    status: "Completed"
  },
  {
    id: 12,
    sNo: 12,
    client: "ARAI RAILMAGRA PROJECT",
    description: "Substation Cabling, High Tension Powerlines & Electrification",
    type: "Electrical Projects",
    valueNumeric: 67,
    valueFormatted: "₹67.00 Lakh",
    year: "2020-2021",
    status: "Completed"
  },
  {
    id: 13,
    sNo: 13,
    client: "FIRE FIGHTING WORK",
    description: "Industrial Sprinklers and High-Pressure Valve Pipelines",
    type: "Fire Fighting Systems",
    valueNumeric: 23,
    valueFormatted: "₹23.00 Lakh",
    year: "2020-2021",
    status: "Completed"
  }
];

export const allProjects: Project[] = [
  ...majorProjects,
  // 2026-2027
  {
    id: 101,
    sNo: 1,
    client: "SK Khetan Infraprojects Private Limited",
    description: "HEMM (Heavy Earth Moving Machinery) workshop installation",
    type: "Industrial Infrastructure",
    valueNumeric: 123,
    valueFormatted: "₹1.23 Crore",
    year: "2026-2027",
    status: "Work In Progress"
  },
  {
    id: 102,
    sNo: 3,
    client: "Shri Rajendra kumar kalal",
    description: "Civil Construction & Road Work in Railmagra",
    type: "Road & Highway Construction",
    valueNumeric: 450,
    valueFormatted: "₹4.50 Crore",
    year: "2026-2027",
    status: "Work In Progress"
  },
  {
    id: 103,
    sNo: 4,
    client: "SR Infra Projects",
    description: "Construction work: Civil Construction & Conference Hall",
    type: "Civil Construction",
    valueNumeric: 45,
    valueFormatted: "₹45.00 Lakh",
    year: "2026-2027",
    status: "Work In Progress"
  },
  {
    id: 104,
    sNo: 5,
    client: "S K Khetan Infraprojects Private Limited",
    description: "L&T COLONY WORK- DARIBA",
    type: "Civil Construction",
    valueNumeric: 5,
    valueFormatted: "₹5.00 Lakh",
    year: "2026-2027",
    status: "Completed"
  },
  {
    id: 105,
    sNo: 6,
    client: "Sanwariya Multiventures Limited",
    description: "Civil Construction work",
    type: "Civil Construction",
    valueNumeric: 240,
    valueFormatted: "₹2.40 Crore",
    year: "2026-2027",
    status: "Completed"
  },
  // 2025-2026
  {
    id: 106,
    sNo: 4,
    client: "Pawan Putra Vihar",
    description: "Building Construction works at Railmagra",
    type: "Civil Construction",
    valueNumeric: 200,
    valueFormatted: "₹2.00 Crore",
    year: "2025-2026",
    status: "Work In Progress"
  },
  {
    id: 107,
    sNo: 5,
    client: "Development Work",
    description: "Hindustan Zinc BKM Mines development layout",
    type: "Industrial Infrastructure",
    valueNumeric: 150,
    valueFormatted: "₹1.50 Crore",
    year: "2025-2026",
    status: "Work In Progress"
  },
  {
    id: 108,
    sNo: 6,
    client: "Skk Infra Solutions Private Limited",
    description: "Building Construction Work & Repair Maintenance at Pindwara",
    type: "Civil Construction",
    valueNumeric: 170,
    valueFormatted: "₹1.70 Crore",
    year: "2025-2026",
    status: "Work In Progress"
  },
  {
    id: 109,
    sNo: 7,
    client: "SR Infra Projects",
    description: "Stadium BOUNDARY WALL construction at Udaipur",
    type: "Civil Construction",
    valueNumeric: 146,
    valueFormatted: "₹1.46 Crore",
    year: "2025-2026",
    status: "Completed"
  },
  {
    id: 110,
    sNo: 10,
    client: "Skk Resorts Private Limited",
    description: "Civil Work of Staff Quarters at Jaisalmer",
    type: "Civil Construction",
    valueNumeric: 61.76,
    valueFormatted: "₹61.76 Lakh",
    year: "2025-2026",
    status: "Completed"
  },
  {
    id: 111,
    sNo: 11,
    client: "BHARAT CONSTRUCTION COMPANY",
    description: "Road Repair Work, CSR Civil Construction Work & Tailing Dam Civil Work at Mahenduriya",
    type: "Road & Highway Construction",
    valueNumeric: 157,
    valueFormatted: "₹1.57 Crore",
    year: "2025-2026",
    status: "Completed"
  },
  // 2024-2025
  {
    id: 112,
    sNo: 1,
    client: "RELIANT DRILLING PRIVATE LIMITED",
    description: "Drilling Site preparation and foundations",
    type: "Earthwork & Excavation",
    valueNumeric: 3.58,
    valueFormatted: "₹3.58 Lakh",
    year: "2024-2025",
    status: "Completed"
  },
  {
    id: 113,
    sNo: 3,
    client: "SARAL BLOCK & BUILD",
    description: "Masonry block wall installations",
    type: "Civil Construction",
    valueNumeric: 3.41,
    valueFormatted: "₹3.41 Lakh",
    year: "2024-2025",
    status: "Completed"
  },
  {
    id: 114,
    sNo: 6,
    client: "SANWARIYA MULTIVENTURES INTERNATIONAL",
    description: "Specialized Concrete Pavement surfacing",
    type: "Road & Highway Construction",
    valueNumeric: 11.57,
    valueFormatted: "₹11.57 Lakh",
    year: "2024-2025",
    status: "Completed"
  },
  {
    id: 115,
    sNo: 7,
    client: "KHETAN ENTERPRISES",
    description: "Drainage works and trenching layout",
    type: "Water Supply Systems",
    valueNumeric: 17.66,
    valueFormatted: "₹17.66 Lakh",
    year: "2024-2025",
    status: "Completed"
  },
  // 2022-2023
  {
    id: 116,
    sNo: 2,
    client: "Umesh Construction Company",
    description: "Play-Ground stadium excavation and leveling work",
    type: "Earthwork & Excavation",
    valueNumeric: 3.45,
    valueFormatted: "₹3.45 Lakh",
    year: "2022-2023",
    status: "Completed"
  },
  {
    id: 117,
    sNo: 7,
    client: "BHERUNATH Construction Pvt Ltd",
    description: "Specialized structural framework and safety layout",
    type: "Civil Construction",
    valueNumeric: 299.77,
    valueFormatted: "₹2.99 Crore",
    year: "2022-2023",
    status: "Completed"
  },
  {
    id: 118,
    sNo: 14,
    client: "BHERUNATH Enterprises",
    description: "Heavy logistics site preparation work",
    type: "Earthwork & Excavation",
    valueNumeric: 36.53,
    valueFormatted: "₹36.53 Lakh",
    year: "2022-2023",
    status: "Completed"
  },
  // 2021-2022
  {
    id: 119,
    sNo: 11,
    client: "MADHAV LAL JAT THEKEDAR",
    description: "Extensive regional drainage and civil paving network",
    type: "Water Supply Systems",
    valueNumeric: 165.68,
    valueFormatted: "₹1.65 Crore",
    year: "2021-2022",
    status: "Completed"
  },
  {
    id: 120,
    sNo: 13,
    client: "GAYATRI Construction",
    description: "Stadium Civil & Architectural Earthwork",
    type: "Civil Construction",
    valueNumeric: 118.29,
    valueFormatted: "₹1.18 Crore",
    year: "2021-2022",
    status: "Completed"
  },
  {
    id: 121,
    sNo: 14,
    client: "BALAJI Construction Company",
    description: "Sub-grade pipeline development and concrete foundations",
    type: "Water Supply Systems",
    valueNumeric: 83.94,
    valueFormatted: "₹83.94 Lakh",
    year: "2021-2022",
    status: "Completed"
  },
  // 2019-2020
  {
    id: 122,
    sNo: 1,
    client: "Techno Flow Construction Pvt. Ltd.",
    description: "Industrial fluid pipelines and pumping systems",
    type: "Water Supply Systems",
    valueNumeric: 40.00,
    valueFormatted: "₹40.00 Lakh",
    year: "2019-2020",
    status: "Completed"
  },
  {
    id: 123,
    sNo: 2,
    client: "Monomark Engineering Pvt. Ltd.",
    description: "Structural design framework and structural welding",
    type: "Industrial Infrastructure",
    valueNumeric: 29.00,
    valueFormatted: "₹29.00 Lakh",
    year: "2019-2020",
    status: "Completed"
  }
];

export const galleryItems: GalleryItem[] = [
  // Row 1: Planning & Townships
  {
    id: 1,
    row: 1,
    title: "Project Boundary & Compliance Wall",
    category: "Civil Construction",
    image: boundaryWall,
    description: "Our secure boundary wall setup complete with razor-sharp barbed wire fencing and prominent visual compliance boards detailing safety policies, labor acts, and site rules."
  },
  {
    id: 2,
    row: 1,
    title: "Premium Residential Duplex Villas",
    category: "Residential Dev",
    image: duplexVillas,
    description: "A gorgeous street-level view of our newly constructed two-story residential duplex houses, designed with eye-catching modern cream, red, and dark grey structural facades."
  },
  {
    id: 3,
    row: 1,
    title: "Integrated Township Land Plotting",
    category: "Site Planning",
    image: townshipAerial,
    description: "High-altitude drone capture showing the professional site leveling, demarcated housing plots divided with high-contrast limestone boundary markings, and internal road networks."
  },
  // Row 2: Infrastructure & Plants
  {
    id: 4,
    row: 2,
    title: "Shree Panchamukhi Balaji Temple",
    category: "Civil Infrastructure",
    image: balajiTemple,
    description: "A beautifully painted red Hindu temple dedicated to Shree Panchamukhi Balaji, built onsite to provide a peaceful spiritual center for residents and project staff."
  },
  {
    id: 5,
    row: 2,
    title: "Civic Water Reservoir Tank",
    category: "Water Supply",
    image: waterReservoir,
    description: "A massive concrete reservoir project featuring slanted concrete retaining walls and fresh water, designed to serve as the main water source for the entire local township."
  },
  {
    id: 6,
    row: 2,
    title: "Heavy Batching Plant & Silo",
    category: "Heavy Assets",
    image: batchingPlant,
    description: "Our advanced computerized industrial concrete batching plant, featuring a giant yellow and blue striped tower silo for efficient on-site concrete mixing and storage."
  }
];

export const machineryItems: MachineryItem[] = [
  { name: "JCB Machine", description: "Heavy-duty backhoes for multi-purpose excavation and trenching operations.", iconName: "Wrench" },
  { name: "Batching Plant", description: "Computerized concrete mixers producing high-grade structural layouts.", iconName: "Layers" },
  { name: "Dumper", description: "High-tonnage heavy dumpers for bulk aggregate transport and clearing.", iconName: "Truck" },
  { name: "Generator", description: "Heavy-duty modular generators ensuring 24/7 un-interrupted site power supply.", iconName: "Cpu" },
  { name: "Vibrators", description: "High-frequency concrete consolidators for reinforced beam stability.", iconName: "Settings" },
  { name: "Miller Machine", description: "Precise engineering millers for asphalt paving and road milling.", iconName: "RotateCw" },
  { name: "Farana Hydra", description: "Industrial hydraulic pick-and-move crane for load positioning.", iconName: "ArrowUpCircle" },
  { name: "Trailer 4924", description: "Tractor pull trailer units for shifting massive excavators and machines.", iconName: "Truck" }
];

export const whyChooseUs = [
  { title: "13+ Years Experience", desc: "Successfully executing civil and industrial infrastructure since 2012." },
  { title: "Large Scale Industrial Projects", desc: "Highly capable team handling contracts valued up to ₹30+ Crore." },
  { title: "Skilled Workforce", desc: "Expert certified engineers, site supervisors, and technical laborers." },
  { title: "Modern Equipment", desc: "In-house fleet of batching plants, Hydra cranes, and earth-moving JCBs." },
  { title: "Timely Delivery", desc: "Strict milestones management ensuring on-time project completion." },
  { title: "Quality Assurance", desc: "Rigorous ISO-standard testing of concrete mixtures and materials." },
  { title: "Competitive Pricing", desc: "Optimized logistics and material sourcing passing value to clients." },
  { title: "Client Satisfaction", desc: "Long-term relations built on transparency, safety, and excellence." }
];

export const clients = [
  { name: "Hindustan Zinc Ltd.", logoText: "HZL", desc: "Vedanta Group Company" },
  { name: "Larsen & Toubro", logoText: "L&T", desc: "Engineering & Construction Multinational" },
  { name: "Siemens", logoText: "SIEMENS", desc: "Industrial Electrification Systems" },
  { name: "Bharat Construction Company", logoText: "BCC", desc: "Highway and Structural Development" },
  { name: "Reliant Drilling Pvt Ltd", logoText: "RD", desc: "Geological Exploration and Mining" },
  { name: "SK Khetan Infraprojects", logoText: "SKK", desc: "Mining and Cement Civil Infrastructure" },
  { name: "Sanwariya Multiventures", logoText: "SML", desc: "Residential and Commercial Infrastructure" },
  { name: "SR Infra Projects", logoText: "SR", desc: "State and Civil Infrastructure Develop" },
  { name: "Aces Infradev Pvt Ltd", logoText: "ACES", desc: "Roads and Infrastructure Testing" },
  { name: "Monomark Engineering", logoText: "MME", desc: "Steel Structures and Mechanical Rigging" },
  { name: "MBE Pvt Ltd", logoText: "MBE", desc: "Bulk Material Electrification & Systems" },
  { name: "Dayal Engineering Ltd", logoText: "DEL", desc: "Industrial Illumination & Smart Wiring" }
];
