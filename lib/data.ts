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
import nestjsAcademyLogo from "@/public/nestjs-academy.svg";
import sendThemASongLogo from "@/public/sendthemasong.svg";
import preetyFlowerShopLogo from "@/public/preety-flower-shop.svg";
import type { SiteData } from "@/lib/types";

export const siteData: SiteData = {
  resumeUrl: "/resume/pradeep-dahal-senior-frontend-engineer.pdf",
  careerStartYear: 2021,
  githubUsername: "dhlpradip",
  name: "Pradeep Dahal",
  avatarUrl: "/avatar.svg",
  email: "erpradeepdahal@gmail.com",
  phone: "+977 9862672724",
  phoneTel: "+9779862672724",
  address: "Kathmandu, Nepal.",
  capabilityGroups: [
    {
      name: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "React Query",
        "Redux",
        "Zustand",
        "Tailwind CSS",
        "Ant Design",
        "Material UI",
      ],
    },
    {
      name: "Architecture and data",
      skills: [
        "REST",
        "GraphQL",
        "WebSockets / SSE",
        "Context API",
        "complex forms and data workflows",
        "frontend performance",
        "visualization and mapping",
      ],
    },
    {
      name: "Quality",
      skills: [
        "accessibility",
        "responsive UI",
        "Playwright",
        "Vitest",
        "React Testing Library",
        "performance profiling",
        "virtualization",
      ],
    },
    {
      name: "Backend and applied AI",
      skills: [
        "Node.js",
        "Express",
        "Python",
        "FastAPI",
        "RAG",
        "LLM integration",
        "streaming agent interfaces",
        "tool calling and evaluation",
      ],
    },
    {
      name: "Cloud and delivery",
      skills: [
        "Docker",
        "AWS Lambda",
        "API Gateway",
        "DynamoDB",
        "Cognito",
        "S3",
        "CloudFront",
        "Git",
      ],
    },
    {
      name: "Professional capabilities",
      skills: [
        "product discovery and stakeholder collaboration",
        "mentoring and code review",
        "performance diagnosis",
        "accessible interface design",
        "cross-functional delivery",
        "translating operational workflows into product interfaces",
      ],
    },
  ],
  education: [
    {
      school: "Tribhuvan University, IOE, Thapathali Campus",
      level: "M.Sc. in Informatics and Intelligent Systems Engineering",
      duration: "2026 - Present",
    },
    {
      school: "Tribhuvan University, IOE, Purwanchal Campus",
      level: "Bachelor's Degree in Computer Engineering",
      duration: "Graduated 2021",
    },
  ],
  projects: [
    {
      title: "Nepal Premier League",
      desc: "Built the player registration platform (with payments and admin flows) and the initial website for Nepal's national T20 cricket league",
      imgUrl: nplLogo,
      category: "client-work",
      featured: true,
      stack: ["React", "Next.js", "TypeScript"],
    },
    {
      title: "Preety Flower Shop",
      link: "https://prettyflowershop.com",
      desc: "A full-stack flower shop with a customer storefront, WhatsApp-backed checkout, and an admin portal, all on AWS serverless infrastructure",
      imgUrl: preetyFlowerShopLogo,
      caseStudy: "preety-flower-shop",
      category: "client-work",
      featured: true,
      stack: ["React", "AWS", "Serverless"],
    },
    {
      title: "Empty Orchestra",
      link: "https://github.com/dhlpradip/empty-orchestra",
      desc: "Karaoke maker — strips vocals from local songs or entire YouTube playlists with AI (Demucs) and outputs studio-quality instrumentals",
      imgUrl: emptyOrchestraLogo,
      caseStudy: "empty-orchestra",
      category: "product",
      featured: true,
      stack: ["Python", "AI", "Demucs"],
    },
    {
      title: "Learn Agentic AI",
      link: "https://github.com/dhlpradip/learn-agentic-ai",
      desc: "An 8-day interactive course for building AI agents in Python — tool loops, MCP, RAG, and evals with a deterministic offline grader",
      imgUrl: learnAgenticAiLogo,
      caseStudy: "learn-agentic-ai",
      category: "product",
      featured: true,
      stack: ["Python", "AI Agents", "LLMs"],
    },
    {
      title: "Nepal Election Candidates 2082",
      link: "https://nepal-election-candidates-2082.vercel.app",
      desc: "Every candidate in Nepal's 2082 general election, searchable — built on official Election Commission data",
      imgUrl: nepalElectionCard,
      caseStudy: "nepal-election-2082",
      category: "engineering-lab",
      featured: true,
      stack: ["Next.js", "React"],
    },
    {
      title: "Nepali Homestays",
      link: "https://nepali-homestays-web.vercel.app",
      desc: "A multilingual platform for discovering and booking authentic homestays across Nepal",
      imgUrl: nepaliHomestaysLogo,
      category: "client-work",
      featured: true,
      stack: ["Next.js", "TypeScript"],
    },
    {
      title: "Varicon",
      link: "https://varicon.com.au",
      desc: "An Australian Civil Engineering Cost Management Solution",
      imgUrl: variconLogo,
      category: "product",
    },
    {
      title: "Send Them A Song",
      link: "https://mixtape.erpradeepdahal.com.np",
      desc: "A digital mixtape postcard — pick songs from YouTube, write a note, and share a link that opens as an animated card with playback controls",
      imgUrl: sendThemASongLogo,
      caseStudy: "send-them-a-song",
      category: "engineering-lab",
    },
    {
      title: "Express Academy",
      link: "https://github.com/dhlpradip/express-academy",
      desc: "An 18-day interactive Express.js bootcamp with auto-graded exercises in both JavaScript and TypeScript",
      imgUrl: expressAcademyLogo,
      caseStudy: "express-academy",
      category: "engineering-lab",
    },
    {
      title: "FastAPI Academy",
      link: "https://github.com/dhlpradip/learn-fastapi",
      desc: "An 18-day interactive FastAPI + databases bootcamp — auto-graded exercises covering raw SQL, SQLAlchemy, MongoDB, and Docker",
      imgUrl: fastapiAcademyLogo,
      caseStudy: "fastapi-academy",
      category: "engineering-lab",
    },
    {
      title: "NestJS Academy",
      link: "https://github.com/dhlpradip/learn-nestjs",
      desc: "An 18-day interactive NestJS bootcamp with auto-graded exercises — decorators, modules, guards, TypeORM, JWT auth, and a WebSocket capstone",
      imgUrl: nestjsAcademyLogo,
      caseStudy: "nestjs-academy",
      category: "engineering-lab",
    },
    {
      title: "agent-kit",
      link: "https://github.com/dhlpradip/agent-kit",
      desc: "A portable, tool-agnostic AI coding workflow built on the AGENTS.md standard — one installer for Claude Code, Cursor, Copilot, and more",
      imgUrl: agentKitLogo,
      caseStudy: "agent-kit",
      category: "engineering-lab",
    },
    {
      title: "Neural Network Errors",
      link: "https://neural-network-errors.vercel.app",
      desc: "An interactive guide to why neural networks fail to train — underfitting, overfitting, vanishing gradients, and their remedies. Created as a presentation for my Master's studies",
      imgUrl: neuralErrorsCard,
      caseStudy: "neural-network-errors",
      category: "academic",
    },
    {
      title: "Yo App",
      link: "https://nepalpayment.com",
      desc: "A Nepal based digital wallet by Nepal Payment Solution",
      imgUrl: yoAppLogo,
      category: "client-work",
    },
    {
      title: "Nepal Payment",
      link: "https://nepalpayment.com",
      desc: "A Nepal based Payment System Operator (Payment Gateway)",
      imgUrl: npsLogo,
      category: "client-work",
    },
    {
      title: "Euvin.ro",
      link: "https://euvin.ro",
      desc: "A Romania based invitation generator web app",
      imgUrl: euvinLogo,
      category: "client-work",
    },
    {
      title: "RIO",
      link: "https://riotech.sg",
      desc: "A Singapore-based vehicle dispatch system with an ambition to launch worldwide",
      imgUrl: RioLogo,
      category: "client-work",
    },
    {
      title: "Clamphook",
      link: "https://clamphook.com",
      desc: "An entrance examination preparation platform from Nepal",
      imgUrl: ClamphookLogo,
      category: "client-work",
    },
    {
      title: "Traversun",
      link: "https://techkunja.com",
      desc: "A website for travellers to book Hotels, Restaurants and Vehicles",
      imgUrl: TraversunLogo,
      category: "client-work",
    },
    {
      title: "Portfolio",
      link: "https://github.com/dhlpradip/portfolio",
      desc: "The place you currently are in",
      imgUrl: portfolioCard,
      category: "product",
    },
    {
      title: "Nepali Character Recognition using Deep CNN",
      link: "https://github.com/dhlpradip/Handwritten-Nepali-Character-Recognition-using-Deep-CNN",
      desc: "A Computer Vision project me and my team completed as our final project of Engineering",
      imgUrl: nepaliCnnCard,
      caseStudy: "nepali-character-recognition",
      category: "academic",
    },
    {
      title: "Attendance App for Tech Kunja",
      link: "https://techkunja.com",
      desc: "Employee attendance platform for Tech Kunja",
      imgUrl: attendanceAppCard,
      category: "client-work",
    },
  ],
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "Varicon",
      logo: variconLogo,
      year: "Jan 2025 – Jul 2026",
      location: "Kathmandu, Nepal · Hybrid",
      companyLink: "https://varicon.com.au",
      summary:
        "Led frontend delivery for construction SaaS workflows, performance-critical data interfaces, reusable onboarding tools, and AI-enabled product experiences.",
      bullets: [
        "Scheduler used daily by 100+ contractors and workers",
        "Progress Claims reduced from up to five minutes to 3–5 seconds",
        "bulk-import workflow across 3+ modules, reducing onboarding by up to 80%",
        "permissions-grounded RAG assistant",
        "streaming agent/chat/summarization interfaces",
        "Spotlight frontend built during a three-day internal hackathon",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Nepal Payment Solution",
      logo: npsLogo,
      year: "Jun 2024 – Dec 2024",
      location: "Kathmandu, Nepal",
      companyLink: "https://nepalpayment.com",
      summary:
        "Primary frontend developer for NPX Enterprise Gateway and merchant-management products; delivered secure fund-transfer dashboards, public production sites, and mentored junior engineers.",
    },
    {
      title: "Independent Frontend / Product Engineer",
      company: "Freelance",
      logo: freelanceLogo,
      year: "Apr 2024 – Present",
      location: "Kathmandu, Nepal · Remote/Hybrid engagements",
      summary:
        "Selected work includes Nepal Premier League player registration and administrative workflows, a serverless commerce platform, Nepali Homestays, and a Romanian invitation platform.",
    },
    {
      title: "Software Engineer",
      company: "Tech Kunja",
      logo: TechKunjaLogo,
      year: "Nov 2021 – May 2024",
      location: "Kathmandu, Nepal",
      companyLink: "https://techkunja.com",
      summary:
        "Delivered RIO operational dashboards, map-based tracking with OpenStreetMap/Leaflet, Traversun booking workflows, GraphQL/REST integrations, and shared applications in a Lerna monorepo.",
    },
    {
      title: "Software Engineer",
      company: "Clamphook",
      logo: ClamphookLogo,
      year: "Jun 2021 – Aug 2021",
      location: "Kathmandu, Nepal",
      companyLink: "https://clamphook.com",
      summary:
        "Built authentication, examination, and learning interfaces in Next.js and TypeScript from Figma designs and REST service contracts.",
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
      "5+ years delivering construction SaaS, fintech, transportation, booking, and AI-enabled interfaces: from complex data workflows to pragmatic full-stack systems.",
    tagline:
      "I build fast, reliable product experiences with React, Next.js, TypeScript, and applied AI.",
    resumeCta: "Download résumé",
  },
  about: {
    previewParagraphs: [
      "I am a Senior Frontend and Product Engineer with 5+ years of experience building production software across construction technology, fintech, transportation, and booking. My work centres on frontend architecture, performance, complex product workflows, accessible interfaces, and pragmatic delivery across the stack.",
      "At Varicon, I led frontend delivery for products used by 100+ civil contractors and their workers, reduced a critical workflow from minutes to seconds, and built AI-enabled interfaces including permissions-grounded retrieval, streaming agent chat, summarization, and site-wide search.",
      "Outside work, I build practical products and write poetry. The professional work should lead this page; writing, books, music, and Nepal can remain visible as the personal layer behind it.",
    ],
    fullParagraphs: [
      "I am a Senior Frontend and Product Engineer with 5+ years of experience building production software across construction technology, fintech, transportation, and booking. My work centres on frontend architecture, performance, complex product workflows, accessible interfaces, and pragmatic delivery across the stack.",
      "At Varicon, I led frontend delivery for products used by 100+ civil contractors and their workers, reduced a critical workflow from minutes to seconds, and built AI-enabled interfaces including permissions-grounded retrieval, streaming agent chat, summarization, and site-wide search.",
      "Outside work, I build practical products and write poetry. The professional work should lead this page; writing, books, music, and Nepal can remain visible as the personal layer behind it.",
    ],
    multilingualLines: [
      "I can speak English (IELTS 8.0, if you want it in writing),",
      "म नेपाली बोल्न सक्छु,",
      "मैँ हिन्दी बोल सकता हूँ,",
      "und Ich kann ein bisschen Deutsch sprechen.",
    ],
    closingParagraph:
      "Apart from the professional work above, I love poetry and can kill for a good poem. I love to listen any kind of music, mainly HipHop, and I'm a sucker for books, memes and sitcoms.",
    skillsHeading: "Capabilities",
    educationHeading: "Education",
  },
  siteMeta: {
    title: "Pradeep Dahal | Senior Frontend & Product Engineer",
    description:
      "Senior Frontend and Product Engineer building high-performance React, Next.js and TypeScript products, AI-enabled interfaces, and pragmatic full-stack systems.",
    domain: "https://erpradeepdahal.com.np",
    ogImage: "/opengraph-image",
    twitterHandle: "@dhlpradip",
    googleVerifications: [
      "rr3sCjhb92dMLITE924tlK9biOnG3vxqIcLF91zc51A",
      "bjOQmOeEJ5dRlYMIMKrX2Nfo5EiAzhY_qzCsLiBrFO8",
    ],
  },
  projectsHeading: "Selected work",
  projectsSubheading: "Shown below are some of the projects I've been part of",
  experienceHeading: "Experience",
  contactHeading: "Let's build something useful.",
  contactSubheading:
    "Have Something to say? feel free. I'll try to get back asap",
  contactCtaText:
    "I am open to Senior Frontend, Frontend Platform, Product Engineer, and frontend-heavy Full-Stack opportunities in Nepal or remotely.",
  contactCtaButton: "Get in touch",
  aboutHeading: "Capabilities & About",
};

export default siteData;
