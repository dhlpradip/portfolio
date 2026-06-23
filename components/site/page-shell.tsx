import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  className?: string;
  wide?: boolean;
};

export function PageShell({ children, className, wide }: PageShellProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full px-5 md:px-8",
        wide ? "max-w-7xl" : "max-w-5xl",
        className
      )}
    >
      {children}
    </div>
  );
}

type SectionProps = {
  id?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
};

export function Section({
  id,
  label,
  children,
  className,
  alt,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32",
        alt && "section-alt -mx-5 px-5 md:-mx-8 md:px-8",
        className
      )}
    >
      {label && (
        <div className="relative mb-12 md:mb-16">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-primary">
            {label}
          </span>
        </div>
      )}
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
