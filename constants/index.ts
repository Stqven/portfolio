import React from "react";
import { LuGraduationCap, LuBrain, LuSchool} from "react-icons/lu";
import { FaCodeBranch, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { BiServer } from "react-icons/bi";

import ZotbinsImg from "@/public/ZotBins.png";
import CZIImage from "@/public/CziEdsight.png";
import Boundary from "@/public/Boundary.png";
import Paper from "@/public/Paper.png"

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/steven-lee35/",
  github: "https://github.com/Stqven",
  resume: "https://steven-lee-resume.tiiny.site",
  source_code: "https://github.com/sanidhyy/portfolio",
  email: "Stevenlee102004@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "ICS Lab Tutor",
    description:
      "Tutored students in Python fundamentals and supported inclusive, collaborative learning environments in lab sessions.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Research Assistant @ Mathe Lab",
    description:
      "Enhanced a learning model with graph theory to improve prediction accuracy and evaluate learning strategies.",
    icon: React.createElement(LuBrain),
    date: "2024",
  },
  {
    title: "SWE Intern @ Boundary RSS",
    description:
      "Improved deep learning pipelines and optimized model speed using cutting-edge AI and geospatial toolss.",
    icon: React.createElement(FaCodeBranch),
    date: "2024 - 2025",
  },
  {
    title: "Director of Proffessional Development",
    description:
      "Organized mentorship programs and career workshops to support member growth and professional development.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "2024 - 2025",
  },
  {
    title: "Community Lead @ AI@UCI",
    description:
      "Coordinated large-scale events and managed engagement efforts to build a strong student AI community.",
    icon: React.createElement(FaUsers),
    date: "2024 - 2025",
  },
  {
    title: "Research Assistant @ DAP Lab",
    description:
      "Built AI-integrated education tools by replacing OpenAI with ZotGPT and developing Prisma/Next.js functions.",
    icon: React.createElement(LuSchool),
    date: "2024 - present",
  },
  {
    title: "API Team Lead @ ZotBins",
    description:
      "Led backend development and technical direction for real-time API systems supporting smart bin data collection",
    icon: React.createElement(BiServer),
    date: "2024 - present",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "ZotBins",
    description:
      "An independent group of undergraduate researchers passionate about technology-based zero waste management.",
    tags: ["AWS", "C#", "API", "Node.js", "AWS lambda", "PostgreSQL"],
    imageUrl: ZotbinsImg,
    projectUrl: "https://zotbins.org/",
  },
  {
    title: "CZI Edsight",
    description:
      "Edsight is a visual analytics platform designed to spur new insight, learning, and decision-making for teachers.",
    tags: ["TypeScript", "OpenAI API", "Next.js", "Prisma", "Tailwind"],
    imageUrl: CZIImage,
    projectUrl: "https://www.daplab.education.uci.edu/edsight",
  },
  {
    title: "SWE intern @ Boundary RSS",
    description:
      "geospatial surveys and AI to generate accurate, detailed visualizations of underground environments.",
    tags: ["Pytorch", "Numpy", "CuPY", "Python"],
    imageUrl: Boundary,
    projectUrl: "https://www.boundaryrss.org/",
  },
    {
    title: "Clean Paws",
    description:
      "an efficient self-classifying recycling bin, addressing the challenge of recyclable misclassification and its environmental consequences",
    tags: ["Yolov5", "Machine Learning", "HTML", "CSS", "Flask", "IOT"],
    imageUrl: Paper,
    projectUrl: "https://docs.google.com/document/d/1MzFS2XWc-_gRFI0K6SFnOkj9-3Ks-DOUtcJh1F2Uufw/edit?tab=t.0",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "Python",
  "C++",
  "C#",
  "AWS",
  
] as const;

// Owner name
export const OWNER_NAME = "Steven Lee";
