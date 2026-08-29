import React from "react";
import { LuGraduationCap, LuBrain, LuSchool} from "react-icons/lu";
import { FaCodeBranch, FaChalkboardTeacher, FaUsers, FaPhoneAlt } from "react-icons/fa";
import { BiServer, BiBuildingHouse } from "react-icons/bi";

import ZotbinsImg from "@/public/ZotBins.png";
import CZIImage from "@/public/CziEdsight.png";
import Boundary from "@/public/Boundary.png";
import Paper from "@/public/Paper.png"
import CoStarLogo from "@/public/costar-logo.png";
import UNCLogo from "@/public/unc-logo.png";
import UCILogo from "@/public/uci-logo.png";
import WaveLogo from "@/public/wave-logo.png";

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
  linkedin: "https://www.linkedin.com/in/steven-lee35",
  github: "https://github.com/Stqven",
  resume: "https://azure-antonie-56.tiiny.site",
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
  {
    title: "Software Engineering Lead @ Design And Partnership",
    description:
      "Delivered instant grading insights on 1,000+ responses for 25+ researchers by building Next.js Server Actions into Prisma, and cut grading pipeline costs to zero across 1,000+ submissions by migrating from OpenAI to ZotGPT.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "Oct 2024 - Apr 2026",
  },
  {
    title: "Software Engineering Intern @ WaveAutomate",
    description:
      "Built a multilingual Vapi workflow across 3 languages to prevent dental practices from missing 30-40% of inbound calls, halved operational costs by migrating to RetellAI, and shipped a real-time profit dashboard for 30+ dental offices.",
    icon: React.createElement(FaPhoneAlt),
    date: "Jan 2026 - Apr 2026",
  },
  {
    title: "Software Engineer (Contract) @ UC Irvine",
    description:
      "Automated grading of 108,000+ student reflections with a FastAPI/OpenAI scoring API and enabled neighboring school districts to purchase $5,400+ in credits via a JWT-secured Stripe portal.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2026 - present",
  },
  {
    title: "Software Engineer (Contract) @ University of North Carolina",
    description:
      "Restored survey sharing for 200+ users by fixing Google Forms API auth failures, streamlined creation of 300+ surveys with Go/Google APIs, and built MySQL/Nivo dashboards visualizing 1,000+ submissions.",
    icon: React.createElement(LuSchool),
    date: "May 2026 - present",
  },
  {
    title: "Software Engineering Intern @ CoStar Group",
    description:
      "Reached 100% MCP tool coverage for the Homes AI advisor via 60+ automated C#/.NET Playwright tests, cut request errors 30% across 90K+ monthly requests, and built a Claude Skill that boosted test volume 50%.",
    icon: React.createElement(BiBuildingHouse),
    date: "June 2026 - present",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Software Engineering Intern @ CoStar Group",
    description:
      "Reached 100% MCP tool coverage for the Homes AI advisor via 60+ automated C#/.NET Playwright tests, and cut request errors 30% across 90K+ monthly requests.",
    tags: ["C#", ".NET", "Playwright", "MCP", "Datadog", "Azure"],
    imageUrl: CoStarLogo,
    projectUrl: "https://www.costargroup.com/",
  },
  {
    title: "Software Engineering Intern @ WaveAutomate",
    description:
      "Built a multilingual Vapi workflow across 3 languages to prevent dental practices from missing 30-40% of inbound calls, and halved operational costs by migrating to RetellAI.",
    tags: ["Vapi", "RetellAI", "Next.js", "Drizzle", "PostgreSQL"],
    imageUrl: WaveLogo,
    projectUrl: "https://waveautomate.com/",
  },
  {
    title: "Software Engineer (Contract) @ University of North Carolina",
    description:
      "Restored survey sharing for 200+ users, streamlined creation of 300+ surveys, and built MySQL/Nivo dashboards visualizing 1,000+ submissions.",
    tags: ["Go", "TypeScript", "Next.js", "AWS Amplify", "Google APIs"],
    imageUrl: UNCLogo,
    projectUrl: "https://www.unc.edu/",
  },
  {
    title: "Software Engineer (Contract) @ UC Irvine",
    description:
      "Automated grading of 108,000+ student reflections with a FastAPI/OpenAI scoring API and a JWT-secured Stripe portal for credit purchases.",
    tags: ["FastAPI", "Python", "AWS Aurora", "Stripe", "Docker"],
    imageUrl: UCILogo,
    projectUrl: "https://uci.edu/",
  },
  {
    title: "ZotBins",
    description:
      "A scalable ASP.NET backend and serverless AWS Lambda pipeline that streams real-time sensor data into TimescaleDB to track campus waste trends.",
    tags: ["ASP.NET Core", "C#", "AWS Lambda", "TimescaleDB", "API Gateway"],
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
  "Drizzle ORM",
  "MySQL",
  "PostgreSQL",
  "DynamoDB",
  "Python",
  "Java",
  "Go",
  "C++",
  "C#",
  ".NET",
  "Flask",
  "FastAPI",
  "AWS",
  "Azure",
  "Docker",
] as const;

// Owner name
export const OWNER_NAME = "Steven Lee";
