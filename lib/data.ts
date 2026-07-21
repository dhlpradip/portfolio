import TechKunjaLogo from "@/public/tech-kunja.jpeg";
import ClamphookLogo from "@/public/clamphook.png";
import TraversunLogo from "@/public/traversun.png";
import portfolioCard from "@/public/portfolio-card.svg";
import nepaliCnnCard from "@/public/nepali-cnn.svg";
import attendanceAppCard from "@/public/attendance-app.svg";
import freelanceLogo from "@/public/freelance.svg";
import RioLogo from "@/public/rio.png";
import euvinLogo from "@/public/euvin-logo.png";
import npsLogo from "@/public/npsLogo.png";
import yoAppLogo from "@/public/yoAppLogo.svg";
import nepalElectionCard from "@/public/nepal-election.svg";
import nplLogo from "@/public/npl-logo.png";
import nepaliHomestaysLogo from "@/public/nepali-homestays-logo.svg";
import neuralErrorsCard from "@/public/neural-errors.svg";
import variconLogo from "@/public/varicon-logo-1.png";
import emptyOrchestraLogo from "@/public/empty-orchestra.svg";
import expressAcademyLogo from "@/public/express-academy.svg";
import fastapiAcademyLogo from "@/public/fastapi-academy.svg";
import learnAgenticAiLogo from "@/public/learn-agentic-ai.svg";
import agentKitLogo from "@/public/agent-kit.svg";
import sendThemASongLogo from "@/public/sendthemasong.svg";
import type { SiteData } from "@/lib/types";

export const siteData: SiteData = {
  resumeUrl:
    "https://drive.google.com/file/d/1b47q-R6PimxYoVMabfrA01rDBK9JB4l-/view?usp=sharing",
  resumeFallback: "/resume.pdf",
  careerStartYear: 2020,
  githubUsername: "dhlpradip",
  name: "Pradeep Dahal",
  avatarUrl: "/avatar.svg",
  email: "erpradeepdahal@gmail.com",
  phone: "+977 9862672724",
  phoneTel: "+9779862672724",
  address: "Kathmandu, Nepal.",
  techStack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Typescript",
    "React",
    "NextJS",
    "Node.js",
    "React Native",
    "Redux",
    "TailwindCSS",
    "Bootstrap",
    "Styled Components",
    "SASS/SCSS",
    "Express",
    "Python",
    "FastAPI",
    "C",
    "C++",
  ],
  otherSkills: [
    "Good interpersonal skills",
    "Values others' efforts",
    "Can lead a team well",
    "Can communicate in multiple languages",
    "Understands and appreciates good humor",
    "Sarcasm",
  ],
  education: [
    {
      school:
        "Institute of Engineering, Thapathali Campus, Tribhuvan University",
      level: "Master's in Intelligent Systems and Informatics Engineering",
      duration: "2026 - Present",
    },
    {
      school: "Tribhuvan University, Institute of Engineering",
      level: "Bachelor's in Computer Engineering",
      duration: "2015-2021",
    },
    {
      school: "Siddhartha Boarding HSS",
      level: "+2",
      duration: "2012-2014",
    },
    {
      school: "Janata HSS",
      level: "Schooling",
      duration: "2001-2012",
    },
  ],
  projects: [
    {
      title: "Varicon",
      link: "https://varicon.com.au",
      desc: "An Australian Civil Engineering Cost Management Solution",
      imgUrl: variconLogo,
    },
    {
      title: "Nepal Premier League",
      desc: "Built the player registration platform (with payments and admin flows) and the initial website for Nepal's national T20 cricket league",
      imgUrl: nplLogo,
    },
    {
      title: "Empty Orchestra",
      link: "https://github.com/dhlpradip/empty-orchestra",
      desc: "Karaoke maker — strips vocals from local songs or entire YouTube playlists with AI (Demucs) and outputs studio-quality instrumentals",
      imgUrl: emptyOrchestraLogo,
      caseStudy: "empty-orchestra",
    },
    {
      title: "Send Them A Song",
      link: "https://mixtape.erpradeepdahal.com.np",
      desc: "A digital mixtape postcard — pick songs from YouTube, write a note, and share a link that opens as an animated card with playback controls",
      imgUrl: sendThemASongLogo,
      caseStudy: "send-them-a-song",
    },
    {
      title: "Express Academy",
      link: "https://github.com/dhlpradip/express-academy",
      desc: "An 18-day interactive Express.js bootcamp with auto-graded exercises in both JavaScript and TypeScript",
      imgUrl: expressAcademyLogo,
      caseStudy: "express-academy",
    },
    {
      title: "FastAPI Academy",
      link: "https://github.com/dhlpradip/learn-fastapi",
      desc: "An 18-day interactive FastAPI + databases bootcamp — auto-graded exercises covering raw SQL, SQLAlchemy, MongoDB, and Docker",
      imgUrl: fastapiAcademyLogo,
      caseStudy: "fastapi-academy",
    },
    {
      title: "Learn Agentic AI",
      link: "https://github.com/dhlpradip/learn-agentic-ai",
      desc: "An 8-day interactive course for building AI agents in Python — tool loops, MCP, RAG, and evals with a deterministic offline grader",
      imgUrl: learnAgenticAiLogo,
      caseStudy: "learn-agentic-ai",
    },
    {
      title: "agent-kit",
      link: "https://github.com/dhlpradip/agent-kit",
      desc: "A portable, tool-agnostic AI coding workflow built on the AGENTS.md standard — one installer for Claude Code, Cursor, Copilot, and more",
      imgUrl: agentKitLogo,
      caseStudy: "agent-kit",
    },
    {
      title: "Nepal Election Candidates 2082",
      link: "https://nepal-election-candidates-2082.vercel.app",
      desc: "Every candidate in Nepal's 2082 general election, searchable — built on official Election Commission data",
      imgUrl: nepalElectionCard,
      caseStudy: "nepal-election-2082",
    },
    {
      title: "Nepali Homestays",
      link: "https://nepali-homestays-web.vercel.app",
      desc: "A multilingual platform for discovering and booking authentic homestays across Nepal",
      imgUrl: nepaliHomestaysLogo,
    },
    {
      title: "Neural Network Errors",
      link: "https://neural-network-errors.vercel.app",
      desc: "An interactive guide to why neural networks fail to train — underfitting, overfitting, vanishing gradients, and their remedies. Created as a presentation for my Master's studies",
      imgUrl: neuralErrorsCard,
      caseStudy: "neural-network-errors",
    },
    {
      title: "Yo App",
      link: "https://nepalpayment.com",
      desc: "A Nepal based digital wallet by Nepal Payment Solution",
      imgUrl: yoAppLogo,
    },
    {
      title: "Nepal Payment",
      link: "https://nepalpayment.com",
      desc: "A Nepal based Payment System Operator (Payment Gateway)",
      imgUrl: npsLogo,
    },
    {
      title: "Euvin.ro",
      link: "https://euvin.ro",
      desc: "A Romania based invitation generator web app",
      imgUrl: euvinLogo,
    },
    {
      title: "RIO",
      link: "https://riotech.sg",
      desc: "A Singapore-based vehicle dispatch system with an ambition to launch worldwide",
      imgUrl: RioLogo,
    },
    {
      title: "Clamphook",
      link: "https://clamphook.com",
      desc: "An entrance examination preparation platform from Nepal",
      imgUrl: ClamphookLogo,
    },
    {
      title: "Traversun",
      link: "https://techkunja.com",
      desc: "A website for travellers to book Hotels, Restaurants and Vehicles",
      imgUrl: TraversunLogo,
    },
    {
      title: "Portfolio",
      link: "https://github.com/dhlpradip/portfolio",
      desc: "The place you currently are in",
      imgUrl: portfolioCard,
    },
    {
      title: "Nepali Character Recognition using Deep CNN",
      link: "https://github.com/dhlpradip/Handwritten-Nepali-Character-Recognition-using-Deep-CNN",
      desc: "A Computer Vision project me and my team completed as our final project of Engineering",
      imgUrl: nepaliCnnCard,
      caseStudy: "nepali-character-recognition",
    },
    {
      title: "Attendance App for Tech Kunja",
      link: "https://techkunja.com",
      desc: "Employee attendance platform for Tech Kunja",
      imgUrl: attendanceAppCard,
    },
  ],
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "Varicon",
      logo: variconLogo,
      year: "Jan 2025 - July 2026",
      companyLink: "https://varicon.com.au",
      desc: "Engineered and launched core modules — including Employee Scheduler and Leave Management — on an Australian civil construction cost management platform. Shipped AI-powered features, modernized legacy code, and contributed to Python (Django/FastAPI) backend services.",
    },
    {
      title: "Software Developer",
      company: "Nepal Payment Solution",
      logo: npsLogo,
      year: "June 2024 - Dec 2024",
      companyLink: "https://nepalpayment.com",
      desc: "Worked as the primary frontend developer for a leading payment system provider in Nepal",
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      logo: freelanceLogo,
      year: "April 2024 - Present",
      desc: "Selected engagements: player registration platform and initial website for the Nepal Premier League (NPL), and the web frontend for Nepali Homestays, a multilingual homestay booking platform.",
    },
    {
      title: "Software Engineer",
      company: "Tech Kunja",
      logo: TechKunjaLogo,
      year: "Nov 2021 - May 2024",
      companyLink: "https://techkunja.com",
      desc: "Worked as the primary frontend developer for projects such as Hotel/Restaurant booking and vehicle management and dispatch system.",
    },
    {
      title: "Software Developer",
      company: "Clamphook",
      logo: ClamphookLogo,
      year: "Jun-Aug 2021",
      companyLink: "https://clamphook.com",
      desc: "Worked with a competent team on an entrance and competitive examination preparation site. Created UI elements according to Figma designs",
    },
    {
      title: "Software Development Intern",
      company: "Tech Kunja",
      logo: TechKunjaLogo,
      year: "Feb-May 2021",
      companyLink: "https://techkunja.com",
      desc: "Learned about frontend web and mobile development with ReactJS and React Native. Worked on projects such as a personal blog, inventory management, and an attendance system application.",
    },
  ],
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/dhlpradip",
      icon: "github",
      nav: true,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/dhlpradip",
      icon: "linkedin",
      nav: true,
    },
    {
      name: "X",
      href: "https://twitter.com/dhlpradip",
      icon: "x",
    },
  ],
  hero: {
    greeting: "Hello, I am",
    name: "Pradeep Dahal",
    intro:
      "I am a seasoned front end Software Engineer with more than {years} years of professional experience from 🇳🇵",
    tagline:
      "Welcome to my little nook filled with Passion, Positivity and Poetry",
    resumeCta: "View My Resume",
  },
  about: {
    previewParagraphs: [
      "I'm a Computer Engineer working across frontend web and mobile — with a growing touch of backend when the work calls for it — along with interests in Data Science, Crypto and Blockchain.",
      "My hobbies include reading and writing poetry, listening to music, watching and playing sports among many others.",
      "To know more about me, my skills and my qualifications, click the button below",
    ],
    fullParagraphs: [
      "Welp, where do I begin.",
      "So, My name is Pradeep Dahal. I originally come from the eastern hills of Nepal, currently looking for the purpose and meaning of life in this city of dreams, Kathmandu.",
      "I'm a Computer Engineer focused on frontend web and mobile development in and around React — JavaScript, TypeScript, NextJS, Redux, Tailwind, and the usual suspects — though I do a little backend nowadays too when a project needs it. Apart from the world of browsers, I sometimes tend to delve into BlockChain and Crypto with akin interest on Data Science.",
      "Other than speaking code,",
    ],
    multilingualLines: [
      "I can speak English (IELTS 8.0, if you want it in writing),",
      "म नेपाली बोल्न सक्छु,",
      "मैँ हिन्दी बोल सकता हूँ,",
      "und Ich kann ein bisschen Deutsch sprechen.",
    ],
    closingParagraph:
      "Apart from the self obsession above, I love poetry and can kill for a good poem. I love to listen any kind of music, mainly HipHop, and I'm a sucker for books, memes and sitcoms.",
    skillsHeading: "What do I know",
    techStackLabel: "Tech Stack",
    otherSkillsLabel: "Other Skills",
    educationHeading: "Education",
  },
  siteMeta: {
    title: "Pradeep Dahal - Engineer, Developer, Writer, Bibliophile",
    description:
      "Welcome to my little nook filled with passion, positivity and poetry.",
    domain: "https://erpradeepdahal.com.np",
    ogImage: "/opengraph-image",
    twitterHandle: "@dhlpradip",
    googleVerifications: [
      "rr3sCjhb92dMLITE924tlK9biOnG3vxqIcLF91zc51A",
      "bjOQmOeEJ5dRlYMIMKrX2Nfo5EiAzhY_qzCsLiBrFO8",
    ],
  },
  projectsHeading: "Projects",
  projectsSubheading: "Shown below are some of the projects I've been part of",
  experienceHeading: "My Work Experiences",
  contactHeading: "Contact Me",
  contactSubheading:
    "Have Something to say? feel free. I'll try to get back asap",
  contactCtaText:
    "Want to hire me? or have you got something to tell me? Click the button below",
  contactCtaButton: "Contact Now",
  aboutHeading: "About Me",
};

export default siteData;
