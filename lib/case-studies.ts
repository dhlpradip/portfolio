import type { StaticImageData } from "next/image";
import emptyOrchestraLogo from "@/public/empty-orchestra.svg";
import expressAcademyLogo from "@/public/express-academy.svg";
import learnAgenticAiLogo from "@/public/learn-agentic-ai.svg";

export type CaseStudySection = {
  heading: string;
  paragraphs: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  stack: string[];
  repoUrl: string;
  heroImage: StaticImageData;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "empty-orchestra",
    title: "Empty Orchestra",
    tagline:
      "A karaoke maker that strips vocals from any song — or an entire YouTube playlist — and hands back a studio-quality instrumental.",
    year: "2026",
    stack: [
      "Express",
      "TypeScript",
      "React",
      "Vite",
      "Tailwind v4",
      "yt-dlp",
      "Demucs",
      "ffmpeg",
      "Docker",
    ],
    repoUrl: "https://github.com/dhlpradip/empty-orchestra",
    heroImage: emptyOrchestraLogo,
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Karaoke means \"empty orchestra\" in Japanese — and that emptiness is exactly what's hard to find. Instrumental versions exist for chart hits, but good luck finding one for a Nepali classic or an album deep cut. I wanted a tool where any song goes in and a clean instrumental comes out, whether the source is a local file or a YouTube link.",
          "The bar was: upload a song or paste a YouTube URL (playlists included), wait a few minutes, download both the instrumental and the original in high-quality formats.",
        ],
      },
      {
        heading: "Architecture",
        paragraphs: [
          "The app is a pnpm workspace with two packages: an Express + TypeScript API and a Vite + React client styled with Tailwind v4 and shadcn components on Base UI.",
          "The interesting part is the processing pipeline, which runs entirely as child processes: yt-dlp fetches audio from YouTube, Demucs (Meta's htdemucs model, running in a project-local Python venv with two-stems mode) separates vocals from everything else, and ffmpeg encodes the result to AAC m4a or 320k MP3.",
          "Jobs flow through an in-memory FIFO queue with concurrency 1 — vocal separation is memory-hungry, and running two Demucs jobs at once would grind a laptop to a halt. Job state persists to a JSON file so a restart doesn't lose history, and the frontend polls every 1.5 seconds for progress.",
        ],
      },
      {
        heading: "Decisions and trade-offs",
        paragraphs: [
          "Child processes over Python bindings: keeping yt-dlp, Demucs, and ffmpeg as separate executables means each tool can be upgraded independently, crashes stay isolated from the API server, and progress can be parsed off stderr in real time.",
          "Two-stems mode over full four-stem separation: karaoke only needs vocals-vs-everything, and two-stems roughly halves processing time.",
          "Polling over WebSockets: with concurrency 1 and jobs measured in minutes, a 1.5-second poll is indistinguishable from push updates — and removes a whole class of connection-management code.",
          "The signature UI detail: job progress renders as a karaoke lyric line that fills with yellow as the pipeline advances, using background-clip: text. The progress bar is the product.",
        ],
      },
      {
        heading: "Gotchas worth knowing",
        paragraphs: [
          "yt-dlp goes stale fast — YouTube changes its internals constantly, and most \"YouTube import is broken\" reports trace back to an outdated yt-dlp binary rather than a bug in the app.",
          "Demucs model downloads happen on first run, so the Docker image (node:20-slim + a Python venv + ffmpeg) pre-warms the model to keep first-job latency sane in deployment.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Open source under MIT, verified end-to-end with both upload and YouTube import producing valid stereo instrumentals. Local runs never need Docker — clone, install, and sing.",
        ],
      },
    ],
  },
  {
    slug: "express-academy",
    title: "Express Academy",
    tagline:
      "An 18-day interactive Express.js bootcamp where every exercise is auto-graded by a real test harness — in JavaScript or TypeScript, your pick.",
    year: "2026",
    stack: [
      "Express",
      "TypeScript",
      "React",
      "Vite",
      "npm workspaces",
      "esbuild",
      "tsc LanguageService",
      "Docker",
    ],
    repoUrl: "https://github.com/dhlpradip/express-academy",
    heroImage: expressAcademyLogo,
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "As a frontend developer learning backend properly, I kept hitting the same wall with tutorials: watching someone else write servers doesn't build the muscle. I wanted a course that behaves like a strict code reviewer — you write the handler, it runs real requests against your code and tells you exactly what failed.",
          "So the course is a grader-first platform: 18 days of lessons, each with exercises that a local grading server executes and scores.",
        ],
      },
      {
        heading: "Architecture",
        paragraphs: [
          "It's an npm-workspaces monorepo: a React/Vite course UI, an Express grading server, and a shared package of exercise specs. Your submission is loaded into a sandboxed child process, the grader boots it as a live Express app, then fires declarative test specs at it — method, path, expected status, JSON assertions, header checks.",
          "Every exercise ships in both JavaScript and TypeScript, with separate starters, solutions, and saved code per language. TypeScript submissions get transpiled with esbuild for speed, but they're also type-checked with strict tsc first — a warm LanguageService keeps that under ~50ms — and type errors block the run, just like CI would.",
          "The later days needed the grader to grow: timing-sensitive specs (delayMs, typed variable capture between steps) test background job queues and cron behavior, and per-exercise environment injection tests 12-factor config handling.",
        ],
      },
      {
        heading: "Decisions and trade-offs",
        paragraphs: [
          "Days are sequentially gated — locked days return 403 and deep links redirect to your frontier. That was a deliberate request-to-self: no skipping ahead to the fun parts before the fundamentals stick.",
          "External services are simulated in-process: day 15's Redis is a fake-Redis client, day 16's job queue is homegrown. Zero-setup grading beat realism — nobody abandons a course because they learned on a fake Redis, but plenty abandon one because Docker Compose wouldn't start.",
          "The capstone arc builds a complete Notes API over four days, then days 15–18 (\"Beyond the Request\") cover caching, background jobs, cron with graceful shutdown, and Docker — the things that separate toy servers from production ones.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "28 reference solutions, 87 behavior tests, each passing in both languages — validated by a single npm run check quality gate that also asserts all TypeScript reference code is strict-clean. It has a sibling: FastAPI Academy, the same platform rebuilt for Python with a databases arc (raw SQL with an injection test, SQLAlchemy, MongoDB) and 116 passing tests.",
        ],
      },
    ],
  },
  {
    slug: "learn-agentic-ai",
    title: "Learn Agentic AI",
    tagline:
      "An 8-day course for building AI agents in Python from first principles — graded deterministically, runnable offline, zero API costs.",
    year: "2026",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "SSE",
      "MCP",
      "RAG",
    ],
    repoUrl: "https://github.com/dhlpradip/learn-agentic-ai",
    heroImage: learnAgenticAiLogo,
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Agent frameworks make everything feel like magic — you call a function, tokens stream out, tools somehow get invoked. I wanted to understand the machinery underneath: the tool-call loop, structured output parsing, retrieval pipelines, evals. And I wanted to practice it without burning API credits on every exercise run.",
        ],
      },
      {
        heading: "The key idea: a fake LLM you can grade against",
        paragraphs: [
          "The course's engine is llmlab — a deterministic fake LLM laboratory that mirrors the real SDK shapes (a FakeOpenAI, a FakeAnthropic, and MiniMCP for the Model Context Protocol). Exercises import it exactly like the real SDKs, but responses are deterministic, which makes them gradeable: the same input always produces the same output, so a test harness can assert on agent behavior precisely.",
          "That one decision unlocks everything else: the course is free to run, works offline, and never flakes because a provider had a bad day. Swapping in a real SDK afterward is a one-line import change, because the shapes match.",
        ],
      },
      {
        heading: "What the 8 days cover",
        paragraphs: [
          "Provider adapters and streaming, structured output with validation and retries, the tool-calling loop written from scratch, MCP client and server, RAG with prompt-injection defense, a mini agent framework that ties it together, evals for measuring agent quality, and a FastAPI + SSE capstone that streams an agent's work to the browser.",
          "The platform reuses the architecture I built for Express Academy and FastAPI Academy: a React/Vite client talks to a FastAPI grader that spawns each submission in an isolated child runner. Grader tests here are named Python snippets executed against your module, not HTTP specs — closer to how you'd actually unit-test agent code.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Eight days, a 33-test quality gate passing end-to-end, and all three courses (Express, FastAPI, Agentic AI) run side-by-side on separate ports — a personal backend-to-AI curriculum that grades itself.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
