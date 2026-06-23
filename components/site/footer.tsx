"use client";

import {
  AiFillGitlab,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";
import { siteData } from "@/lib/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PageShell } from "@/components/site/page-shell";

const iconMap = {
  instagram: AiOutlineInstagram,
  twitter: AiOutlineTwitter,
  linkedin: AiOutlineLinkedin,
  github: AiOutlineGithub,
  gitlab: AiFillGitlab,
} as const;

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border">
      <PageShell wide>
        <div className="flex flex-col items-start justify-between gap-8 py-12 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight">
              {siteData.name}
            </p>
            <p className="mt-2 font-body text-sm text-muted-foreground">
              Engineer · Poet · Kathmandu
            </p>
            <p className="mt-4 font-body text-xs text-muted-foreground">
              © {new Date().getFullYear()} ·{" "}
              <Link
                href="https://mind.erpradeepdahal.com.np/"
                target="_blank"
                className="text-primary transition-colors hover:underline"
              >
                Mind
              </Link>
            </p>
          </div>

          <TooltipProvider delayDuration={200}>
            <div className="flex items-center gap-2">
              {siteData.socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <Tooltip key={social.name}>
                    <TooltipTrigger asChild>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
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
          </TooltipProvider>
        </div>
      </PageShell>
    </footer>
  );
}
