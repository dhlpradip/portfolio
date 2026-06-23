"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiFillGitlab,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { cn } from "@/lib/utils";
import { siteData } from "@/lib/data";
import { features } from "@/lib/features";
import { ThemeToggle } from "@/components/site/theme-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  ...(features.writingsPublic
    ? [{ href: "/writings", label: "Writings" }]
    : []),
  { href: "/contact", label: "Contact" },
];

const iconMap = {
  instagram: AiOutlineInstagram,
  twitter: AiOutlineTwitter,
  linkedin: AiOutlineLinkedin,
  github: AiOutlineGithub,
  gitlab: AiFillGitlab,
} as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={200}>
      <header className="sticky top-0 z-50 bg-transparent px-4 pt-4 md:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border/40 bg-background/50 px-4 py-2.5 backdrop-blur-md md:px-6">
          <Link
            href="/"
            className="font-mono text-sm font-medium tracking-tight md:text-base"
          >
            <span className="text-primary">{"<"}</span>
            Pradeep
            <span className="text-primary">{"/>"}</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider transition-colors",
                  pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <div className="hidden items-center sm:flex">
              {siteData.socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <Tooltip key={social.name}>
                    <TooltipTrigger asChild>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-2 text-muted-foreground transition-colors hover:text-primary"
                        aria-label={social.name}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>{social.name}</TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
            <ThemeToggle />
          </div>
        </nav>

        <div className="mx-auto mt-2 flex max-w-7xl gap-2 overflow-x-auto pb-1 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap rounded-full px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-wider",
                pathname === link.href
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/80 text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </header>
    </TooltipProvider>
  );
}
