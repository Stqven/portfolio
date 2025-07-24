import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";

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
  resume: "https://black-kelila-29.tiiny.site/",
  source_code: "https://github.com/sanidhyy/portfolio",
  email: "Stevenlee102004@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Passed High School",
    description:
      "Completed my high school curriculum, gaining a solid foundation in various subjects and essential skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "React.js Bootcamp",
    description:
      "Successfully completed an intensive 1-month React.js Developer Bootcamp. Acquired expertise in React components, state management with Redux, and interacting with RESTful APIs.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Freelancer React.js Developer",
    description:
      "Worked as a freelance React.js Developer, I have collaborated with various clients to create responsive and dynamic web applications.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Jaro Dev Studio",
    description:
      "Currently working as a Full-stack Next.js Developer, building responsive and dynamic web applications using Next.js, Tailwind CSS and OpenAI.",
    icon: React.createElement(SiNextdotjs),
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
