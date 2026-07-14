"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

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
            <div className="hidden items-center md:flex">
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
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute inset-x-4 top-full mt-2 origin-top rounded-3xl border border-border/40 bg-background/85 p-2 shadow-xl backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider transition-colors",
                      pathname === link.href
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-1 flex items-center justify-center gap-2 border-t border-border/40 pt-2">
                {siteData.socials.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full p-2.5 text-muted-foreground transition-colors hover:text-primary"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </TooltipProvider>
  );
}
