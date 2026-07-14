import type { StaticImageData } from "next/image";

export type Project = {
  title: string;
  link: string;
  desc: string;
  imgUrl: StaticImageData;
  /** Slug of an internal case study page under /projects/[slug] */
  caseStudy?: string;
};

export type Experience = {
  title: string;
  company: string;
  logo: StaticImageData;
  year: string;
  companyLink?: string;
  desc?: string;
};

export type Education = {
  school: string;
  level: string;
  duration: string;
};

export type Social = {
  name: string;
  href: string;
  icon: "instagram" | "twitter" | "linkedin" | "github" | "gitlab";
};

export type HeroCopy = {
  greeting: string;
  name: string;
  intro: string;
  tagline: string;
  resumeCta: string;
};

export type AboutCopy = {
  previewParagraphs: string[];
  fullParagraphs: string[];
  multilingualLines: string[];
  closingParagraph: string;
  skillsHeading: string;
  techStackLabel: string;
  otherSkillsLabel: string;
  educationHeading: string;
};

export type SiteMeta = {
  title: string;
  description: string;
  domain: string;
  ogImage: string;
  twitterHandle: string;
  googleVerifications: string[];
};

export type ContactPayload = {
  email: string;
  subject: string;
  message: string;
  /** Honeypot field — humans never fill this; bots do */
  website?: string;
};

export type WritingType = "poetry" | "essay" | "note";

export type Writing = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  type: WritingType;
  publishedAt: string;
  language?: "en" | "ne" | "mixed";
  published: boolean;
};

export type WritingsCopy = {
  title: string;
  subtitle: string;
  emptyMessage: string;
  previewBanner: string;
};

export type SiteData = {
  resumeUrl: string;
  resumeFallback: string;
  careerStartYear: number;
  githubUsername: string;
  name: string;
  avatarUrl: string;
  email: string;
  phone: string;
  phoneTel: string;
  address: string;
  techStack: string[];
  otherSkills: string[];
  education: Education[];
  projects: Project[];
  experience: Experience[];
  socials: Social[];
  hero: HeroCopy;
  about: AboutCopy;
  siteMeta: SiteMeta;
  projectsHeading: string;
  projectsSubheading: string;
  experienceHeading: string;
  contactHeading: string;
  contactSubheading: string;
  contactCtaText: string;
  contactCtaButton: string;
  aboutHeading: string;
};
