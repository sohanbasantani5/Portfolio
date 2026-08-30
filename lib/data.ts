export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  videoSrc: string;
  year: string;
  duration: string;
  tags: string[];
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "commercial", label: "Commercial" },
  { id: "cinematic", label: "Cinematic" },
  { id: "social", label: "Social Media" },
  { id: "motion", label: "Motion Design" },
];

export const projects = [
  {
    id: 1,
    title: "Aurora Motors — Brand Film",
    category: "commercial",
    description: "A cinematic brand film for Aurora Motors showcasing the precision and elegance of their latest electric vehicle line.",
    thumbnail: "https://picsum.photos/seed/aurora-motor/800/600.jpg",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: "2025",
    duration: "2:45",
    tags: ["Brand Film", "Color Grade", "Sound Design"],
  },
  {
    id: 2,
    title: "Nova Collective — Product Launch",
    category: "commercial",
    description: "High-end product launch video with seamless transitions and premium motion graphics for Nova Collective.",
    thumbnail: "https://picsum.photos/seed/nova-collective/800/600.jpg",
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
    year: "2025",
    duration: "1:30",
    tags: ["Product Video", "Motion Graphics", "3D"],
  },
  {
    id: 3,
    title: "Summit Dreams — Documentary",
    category: "cinematic",
    description: "A 20-minute documentary capturing the journey of independent artists pushing creative boundaries in urban landscapes.",
    thumbnail: "https://picsum.photos/seed/summit-dreams/800/600.jpg",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: "2024",
    duration: "20:12",
    tags: ["Documentary", "Cinematography", "Edit"],
  },
  {
    id: 4,
    title: "Elysium — Cinematic Short",
    category: "cinematic",
    description: "A moody, atmospheric short film exploring the intersection of technology and human emotion.",
    thumbnail: "https://picsum.photos/seed/elysium-short/800/600.jpg",
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
    year: "2024",
    duration: "8:42",
    tags: ["Short Film", "Color Grade", "Sound Design"],
  },
  {
    id: 5,
    title: "Zenith Apparel — Instagram Campaign",
    category: "social",
    description: "A vibrant Instagram campaign series with punchy cuts, bold typography, and trend-forward motion design.",
    thumbnail: "https://picsum.photos/seed/zenith-apparel/800/600.jpg",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: "2025",
    duration: "0:45",
    tags: ["Social Media", "Reels", "Typography"],
  },
  {
    id: 6,
    title: "ByteCraft — YouTube Shorts Series",
    category: "social",
    description: "A weekly series of 60-second shorts for ByteCraft, blending quick cuts with engaging storytelling.",
    thumbnail: "https://picsum.photos/seed/bytecraft-shorts/800/600.jpg",
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
    year: "2025",
    duration: "0:58",
    tags: ["YouTube", "Shorts", "Editing"],
  },
  {
    id: 7,
    title: "Echoes — Motion Title Sequence",
    category: "motion",
    description: "A stunning opening title sequence for a streaming platform series, combining 3D elements with kinetic typography.",
    thumbnail: "https://picsum.photos/seed/echoes-title/800/600.jpg",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: "2024",
    duration: "1:15",
    tags: ["Title Design", "3D", "After Effects"],
  },
  {
    id: 8,
    title: "Pulse — Animated Showreel",
    category: "motion",
    description: "A dynamic showreel highlighting motion design expertise with fluid transitions and bold visual storytelling.",
    thumbnail: "https://picsum.photos/seed/pulse-showreel/800/600.jpg",
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
    year: "2025",
    duration: "2:20",
    tags: ["Showreel", "VFX", "Compositing"],
  },
  {
    id: 9,
    title: "Helios — Luxury Watch Ad",
    category: "commercial",
    description: "Premium luxury watch advertisement emphasizing craftsmanship with slow-motion cinematography and refined grading.",
    thumbnail: "https://picsum.photos/seed/helios-watch/800/600.jpg",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: "2025",
    duration: "0:60",
    tags: ["Luxury Brand", "Slow Motion", "Color Grade"],
  },
];

export const skills = [
  { name: "Premiere Pro", level: 98 },
  { name: "After Effects", level: 95 },
  { name: "DaVinci Resolve", level: 92 },
  { name: "Cinema 4D", level: 78 },
  { name: "Photoshop", level: 90 },
  { name: "Illustrator", level: 75 },
  { name: "Final Cut Pro", level: 85 },
  { name: "Audition / Sound", level: 88 },
  { name: "Podcast Editing", level: 92 },
  { name: "Audio Mastering", level: 86 },
];

export const services = [
  {
    icon: "VideoEdit",
    title: "Video Editing",
    description: "Cinematic edits, brand films, documentaries, and social media content with precision pacing and polished finishing.",
    features: ["Brand Films", "Documentaries", "Corporate Videos", "Reels & Shorts"],
  },
  {
    icon: "MotionDesign",
    title: "Motion Graphics",
    description: "Kinetic typography, animated titles, visual effects, and compositing to bring static assets to life.",
    features: ["Kinetic Typography", "Title Sequences", "VFX", "Compositing"],
  },
  {
    icon: "Podcast",
    title: "Podcast Production",
    description: "Full-cycle podcast production — from recording and editing to mixing, mastering, and publishing across all platforms.",
    features: ["Recording Setup", "Editing & Mixing", "Mastering", "Publishing"],
  },
  {
    icon: "ColorGrade",
    title: "Color Grading",
    description: "Professional color correction and grading to evoke emotion, establish mood, and create visual cohesion.",
    features: ["Color Correction", "LUT Creation", "HDR Grading", "Match Cutting"],
  },
  {
    icon: "SoundDesign",
    title: "Sound Design",
    description: "Sound mixing, foley, and music selection to elevate every project with immersive audio experiences.",
    features: ["Audio Mixing", "Foley", "Music Selection", "Voice-Over"],
  },
];

export const aboutMe = {
  name: "Sohan Basantani",
  role: "Video Editor • Podcast Producer • Creative Artist",
  location: "India",
  bio: "I craft visually compelling narratives that captivate audiences. With over 6 years of experience in post-production, I specialize in transforming raw footage into polished, emotionally resonant content.\n\nMy work spans cinematic brand films, social media campaigns, documentary storytelling, podcast production, and high-end motion design. From shooting podcast episodes to grading feature films — every project receives the same obsessive attention to detail.\n\nI believe great editing is invisible. The best edits are the ones audiences never notice — they simply feel the story.",
  stats: [
    { label: "Years of Experience", value: "6+" },
    { label: "Projects Completed", value: "200+" },
    { label: "Happy Clients", value: "85+" },
    { label: "Awards Won", value: "12" },
  ],
};

export const contactInfo = {
  email: "sohanbasantani5@gmail.com",
  phone: "",
  location: "India",
  social: [
    { platform: "Instagram", url: "#", handle: "@sohanbasantani" },
    { platform: "GitHub", url: "https://github.com/sohanbasantani5", handle: "sohanbasantani5" },
    { platform: "LinkedIn", url: "#", handle: "in/sohanbasantani" },
    { platform: "X / Twitter", url: "#", handle: "@sohanbasantani" },
  ],
};

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Creative Director, Aurora Motors",
    text: "Sohan transformed our brand vision into something breathtaking. Every frame felt intentional and powerful.",
    avatar: "https://picsum.photos/seed/sarah-chen/100/100.jpg",
  },
  {
    name: "Marcus Rivera",
    role: "CEO, Nova Collective",
    text: "The product launch video exceeded all expectations. Our engagement rates doubled in the first week.",
    avatar: "https://picsum.photos/seed/marcus-r/100/100.jpg",
  },
  {
    name: "Yuki Tanaka",
    role: "Director, Summit Dreams",
    text: "Working with Sohan was a masterclass in storytelling. He found beauty in moments we had overlooked.",
    avatar: "https://picsum.photos/seed/yuki-t/100/100.jpg",
  },
];