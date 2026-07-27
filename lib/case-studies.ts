import type { StaticImageData } from "next/image";
import emptyOrchestraLogo from "@/public/empty-orchestra.svg";
import expressAcademyLogo from "@/public/express-academy.svg";
import learnAgenticAiLogo from "@/public/learn-agentic-ai.svg";
import fastapiAcademyLogo from "@/public/fastapi-academy.svg";
import agentKitLogo from "@/public/agent-kit.svg";
import neuralErrorsCard from "@/public/neural-errors.svg";
import nepalElectionCard from "@/public/nepal-election.svg";
import nepaliCnnCard from "@/public/nepali-cnn.svg";
import sendThemASongLogo from "@/public/sendthemasong.svg";
import nestjsAcademyLogo from "@/public/nestjs-academy.svg";

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
  liveUrl?: string;
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
  {
    slug: "fastapi-academy",
    title: "FastAPI Academy",
    tagline:
      "An 18-day interactive FastAPI bootcamp with a databases arc — raw SQL, SQLAlchemy, MongoDB, and Docker — every exercise graded automatically.",
    year: "2026",
    stack: [
      "Python",
      "FastAPI",
      "SQLite",
      "SQLAlchemy",
      "MongoDB",
      "React",
      "TypeScript",
      "Docker",
    ],
    repoUrl: "https://github.com/dhlpradip/learn-fastapi",
    heroImage: fastapiAcademyLogo,
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "After building Express Academy for Node, I wanted the same muscle-building workout for Python's web stack — and I wanted it to cover the thing most web courses skip past: databases, done properly, from raw SQL upward.",
          "Same philosophy as its sibling: no passive tutorials. A grading server runs real requests against your FastAPI app and tells you exactly what failed.",
        ],
      },
      {
        heading: "Architecture",
        paragraphs: [
          "The platform is a FastAPI grader that boots each submission in an isolated child process under uvicorn, paired with a React + TypeScript client that fetches exercise specs straight from the grader. A single npm run setup creates the Python virtualenv and installs everything; the whole course runs offline.",
          "It deliberately shares no code with Express Academy — the grader specs, runner, and client were rebuilt Python-first — but the two run side by side on different ports, so you can work through both stacks in parallel.",
        ],
      },
      {
        heading: "The databases arc",
        paragraphs: [
          "The distinctive part of this course is a multi-day data arc: raw SQL on a real sqlite3 database — including an exercise where the grader actively attempts SQL injection against your endpoint and fails you if it succeeds — then SQLAlchemy (with the StaticPool gotcha that bites everyone testing against in-memory SQLite), transactions and atomicity, and MongoDB via an in-process fake driver.",
          "Real database engines where it matters (SQLite is genuinely embedded, so injection and transaction semantics are real), simulated services where setup friction would kill momentum (no one should need a Mongo cluster to learn query syntax).",
        ],
      },
      {
        heading: "Decisions and trade-offs",
        paragraphs: [
          "Every lesson carries Django comparison notes — I was working near Django at my day job at the time, so each FastAPI concept is anchored to its Django equivalent. Learning two frameworks' shapes at once turned out to be cheaper than learning them separately.",
          "The course ends with a Docker day and ships a working Dockerfile and docker-compose (Postgres + Redis) so the exit ramp from 'course' to 'real project' is already paved.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "18 days, 116 grader tests, all passing via a single npm run check quality gate. Together with Express Academy and Learn Agentic AI, it forms a self-graded curriculum that took me from React developer to working across the backend.",
        ],
      },
    ],
  },
  {
    slug: "nestjs-academy",
    title: "NestJS Academy",
    tagline:
      "An 18-day interactive NestJS bootcamp — decorators, modules, providers, guards, pipes, interceptors, TypeORM, and JWT auth — every exercise auto-graded by a NestJS grader that is itself meta-proof the framework works.",
    year: "2026",
    stack: [
      "NestJS",
      "TypeScript",
      "React",
      "Vite",
      "npm workspaces",
      "tsc",
      "reflect-metadata",
      "Docker",
    ],
    repoUrl: "https://github.com/dhlpradip/learn-nestjs",
    heroImage: nestjsAcademyLogo,
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "After shipping Express Academy (Node) and FastAPI Academy (Python), the backend trilogy needed its third act: a course on the framework that thinks in decorators, modules, and dependency injection. NestJS enforces an opinionated architecture from the start — and that's exactly the muscle I wanted to build after years of unopinionated Express middleware.",
          "The same philosophy carried over: write code, run real HTTP requests against it, see exactly what failed. But NestJS brought a new challenge — decorator metadata. The grader had to compile student code with emitDecoratorMetadata, which ruled out esbuild and forced a full tsc compile step for every submission.",
        ],
      },
      {
        heading: "Architecture",
        paragraphs: [
          "The platform is an npm-workspaces monorepo: a React/Vite course UI, a NestJS grading server, and a shared package of exercise specs. Writing the grader itself in NestJS was a deliberate choice — it means every deployment proves the framework works the way the lessons claim.",
          "The critical architectural difference from Express Academy is the compilation pipeline. NestJS decorators (especially @Injectable, @Controller, and the DI system) need design-time metadata that tsc emits with emitDecoratorMetadata — something esbuild doesn't support. The grading pipeline spawns tsc.js as a child process with --experimentalDecorators --emitDecoratorMetadata --module commonjs, renames the output from .js to .cjs (the server is ESM), and then passes it to a CommonJS child runner via require().",
        ],
      },
      {
        heading: "The child runner sandbox",
        paragraphs: [
          "The child runner is a .cjs file that loads reflect-metadata first, runs require() on the compiled student module, then calls NestFactory.create() to boot the student's app. It listens on port 0 (OS-assigned, avoiding conflicts), fires declarative test specs with Node's built-in http module, and communicates results via a @@RESULTS@@ marker on stdout.",
          "Tests support a declarative DSL: expected status codes, deep-subset JSON assertions, bodyContains string checks, and a save/interpolate mechanism that chains requests — a create-endpoint captures an ID and the next test uses it in a GET path. This chaining was essential for the TypeORM and JWT days where exercises build on earlier state.",
        ],
      },
      {
        heading: "Lessons across 4 arcs",
        paragraphs: [
          "Foundations (days 1-4) cover the NestJS CLI, modules, controllers, decorators, DTOs, and providers. Building APIs (days 5-8) adds CRUD, validation pipes, exception filters, guards, and interceptors. Data (days 9-12) tackles TypeORM with SQLite, relations and migrations, MongoDB via Mongoose, and environment configuration. Production (days 13-18) goes deeper: JWT auth with guards, CORS and rate limiting, file uploads with validation, caching with interceptors, background job queues, and a WebSocket capstone that builds a real-time chat module.",
          "Each arc mirrors the same trajectory in Express and FastAPI academies, letting a student compare how the three frameworks handle the same problems — routing, validation, persistence, auth — side by side.",
        ],
      },
      {
        heading: "Meta: the grader proves the framework",
        paragraphs: [
          "The grading server is itself a NestJS application with @Controller, @Injectable services, and NestFactory.create in the child runner. This is the strongest possible advertisement for the course's material: every deploy of the grader runs the same patterns the lessons teach. The child-runner.cjs's require() + NestFactory.create cycle is exactly what a capstone deploy script would do.",
          "The tsc compilation approach also solves a real problem: without emitDecoratorMetadata, NestJS can't resolve constructor-injected dependencies by type. The grader demonstrates exactly the kind of build-pipeline nuance you encounter when deploying real NestJS applications — and the course covers it in the Production arc.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "18 days, 54 grader tests across all reference solutions, validated by a single npm run check quality gate that compiles, boots, and closes every exercise's NestJS module. Together with Express Academy, FastAPI Academy, and Learn Agentic AI, it completes a self-graded backend-to-AI curriculum spanning Node, Python, and TypeScript.",
        ],
      },
    ],
  },
  {
    slug: "agent-kit",
    title: "agent-kit",
    tagline:
      "One AI-coding workflow that travels with you — a single source of truth every assistant reads, whatever the tool, whatever the provider.",
    year: "2026",
    stack: [
      "Shell",
      "AGENTS.md",
      "Claude Code",
      "Cursor",
      "Copilot",
      "MCP",
    ],
    repoUrl: "https://github.com/dhlpradip/agent-kit",
    heroImage: agentKitLogo,
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Every AI coding tool demands its own instruction file: Claude Code reads CLAUDE.md, Cursor wants .mdc rules, Copilot has copilot-instructions.md, Windsurf and Aider have their own formats. Keep them all by hand and they drift apart within a week — the guidance your assistants follow depends on which editor you happened to open.",
          "I wanted to write my engineering conventions once and have every tool obey the same brief.",
        ],
      },
      {
        heading: "The approach",
        paragraphs: [
          "The kit standardizes on AGENTS.md — the open, tool-agnostic standard — as the single source of truth, then generates thin adapters for everything else: a CLAUDE.md that imports AGENTS.md, Cursor rule files, a Copilot symlink, Windsurf, Gemini, and Aider bridges.",
          "An install.sh detects the project's stack from its manifests — React, Next.js, Express, Python, FastAPI, or agentic-AI — and assembles AGENTS.md from composable modules, so an Express API and a Python agent project get different, relevant guidance from the same kit. Python-AI projects additionally get an .mcp.json and a provider-agnostic .env.example.",
        ],
      },
      {
        heading: "Decisions and trade-offs",
        paragraphs: [
          "Composition over monolith: conventions live in small module files that the installer stitches together, so fixing a rule fixes it for every stack that includes that module.",
          "Adapters over waiting for standards adoption: not every tool reads AGENTS.md natively yet (Claude Code still doesn't, as of 2026), so the kit meets each tool where it is rather than betting on convergence.",
          "It also ships a shared command and skill library, so custom workflows — not just static instructions — travel between tools too.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "One ./install.sh in any repo and every assistant I use reads the same conventions. The kit now bootstraps all of my personal projects, including the three interactive courses and this portfolio's sibling repos.",
        ],
      },
    ],
  },
  {
    slug: "neural-network-errors",
    title: "Neural Network Errors",
    tagline:
      "An interactive guide to why neural networks fail to train — built as a presentation for my Master's studies, designed to outlive the lecture.",
    year: "2026",
    stack: ["HTML", "CSS", "JavaScript", "Interactive visualization"],
    repoUrl: "https://github.com/dhlpradip/neural-network-errors",
    liveUrl: "https://neural-errors.erpradeepdahal.com.np",
    heroImage: neuralErrorsCard,
    sections: [
      {
        heading: "The context",
        paragraphs: [
          "For my M.Sc. in Intelligent Systems, I had to present the practical issues of neural network training — the material drawn from Goodfellow, Bengio, and Courville's Deep Learning. I could have made slides. But the whole point of these failure modes is how they behave, and behavior is exactly what static slides can't show.",
          "So the presentation became an interactive web page instead: the audience watches curves diverge and weights collapse live, and the artifact keeps working as a study reference long after the class ended.",
        ],
      },
      {
        heading: "What it covers",
        paragraphs: [
          "The five failure modes every practitioner eventually meets: underfitting, overfitting, vanishing and exploding gradients, convergence difficulties, and local or spurious optima — paired with their remedies: L1/L2 regularization and dropout, parameter sharing and convolutional structure, early stopping, deeper architectures, and better optimizers.",
        ],
      },
      {
        heading: "The interactive demos",
        paragraphs: [
          "Each concept has a manipulable visual: a polynomial-fit playground where you crank model complexity and watch it swing from underfit to overfit, live training-versus-validation error curves, weight distributions morphing under different regularization modes, a convolution filter-sharing demo, and a loss-landscape view that builds intuition for optimizer behavior, local optima, and saddle points.",
        ],
      },
      {
        heading: "Decisions and trade-offs",
        paragraphs: [
          "The entire site is a single self-contained index.html — no build step, no framework, no dependencies. That was a presentation-day constraint turned feature: it opens from a file:// URL, survives a venue with no Wi-Fi, and will still render unchanged in a decade.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Presented for my Master's coursework and now live on its own subdomain, where it doubles as the revision reference I wish I'd had before building my undergraduate CNN project.",
        ],
      },
    ],
  },
  {
    slug: "nepal-election-2082",
    title: "Nepal Election Candidates 2082",
    tagline:
      "Every candidate in Nepal's 2082 general election, searchable and filterable — official Election Commission data made actually browsable.",
    year: "2026",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Vercel",
    ],
    repoUrl: "https://github.com/dhlpradip/nepal-election-candidates-2082",
    liveUrl: "https://nepal-election-candidates-2082.vercel.app",
    heroImage: nepalElectionCard,
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Ahead of Nepal's 2082 general election, the candidate information voters actually needed was scattered and hard to browse. The Election Commission publishes the data, but 'published' and 'usable by someone deciding who represents their constituency' are very different things.",
          "I wanted a page where anyone could answer, in seconds: who is standing in my constituency, and for which party?",
        ],
      },
      {
        heading: "The build",
        paragraphs: [
          "A Next.js App Router application in TypeScript: candidate cards with party branding, filter and search controls over party and constituency, per-constituency information, and shadcn/ui components with loading skeletons to keep the browsing experience smooth over a large candidate list.",
          "Since discoverability was the entire point, it ships proper sitemap and robots metadata routes — someone searching for their constituency should land here.",
        ],
      },
      {
        heading: "Decisions and trade-offs",
        paragraphs: [
          "The data belongs to the Election Commission of Nepal, and the site says so plainly — it adds presentation, search, and speed, not editorial opinion. Neutrality is a feature: every party gets the same card, the same filters, the same treatment.",
          "Shipping speed mattered more than architectural purity here; the election has a date, and a civic tool that launches after the vote is worthless. Next.js on Vercel meant the gap between 'data ready' and 'live URL' was hours.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Live during the 2082 election cycle at a public URL, giving voters a fast, neutral way to explore who was on their ballot.",
        ],
      },
    ],
  },
  {
    slug: "nepali-character-recognition",
    title: "Handwritten Nepali Character Recognition",
    tagline:
      "A deep CNN that reads handwritten Devanagari — my undergraduate final-year project, reaching 99% validation accuracy.",
    year: "2019",
    stack: ["Python", "Keras", "Deep CNN", "Flask"],
    repoUrl:
      "https://github.com/dhlpradip/Handwritten-Nepali-Character-Recognition-using-Deep-CNN",
    heroImage: nepaliCnnCard,
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Handwritten character recognition is a solved demo for Latin script — and a genuinely hard problem for Devanagari, where characters share a connecting headline (dika), differ by subtle strokes, and handwriting styles vary enormously. For our final-year Computer Engineering project at IOE, my team of four took on recognizing handwritten Nepali characters.",
        ],
      },
      {
        heading: "The approach",
        paragraphs: [
          "We built a deep convolutional neural network in Keras, trained on a labeled dataset of handwritten Devanagari characters, and wrapped it in a Flask interface so anyone could try the model against their own handwriting rather than taking our accuracy numbers on faith.",
        ],
      },
      {
        heading: "The experiment that mattered",
        paragraphs: [
          "We trained the same architecture under two optimizers — Adam and Nadam — and compared them properly instead of trusting defaults. Nadam, which adds Nesterov momentum to Adam's adaptive learning rates, consistently outperformed and carried the model to 99% validation accuracy.",
          "As an undergraduate lesson, that comparison outlasted the accuracy number: the optimizer is a hyperparameter, and measuring beats assuming.",
        ],
      },
      {
        heading: "Looking back",
        paragraphs: [
          "This project — built with Anish Baral, Diwash Khanal, and Prabin Baskota — is where my interest in machine learning started. Years later it led me back: my Master's work on neural network training failures is, in a real sense, the theory behind everything we debugged empirically here.",
        ],
      },
    ],
  },
  {
    slug: "send-them-a-song",
    title: "Send Them A Song",
    tagline:
      "A digital mixtape postcard — pick songs from YouTube, write a note, and share a link that opens as an animated card with a cassette illustration and built-in player.",
    year: "2026",
    stack: [
      "Next.js 16",
      "TypeScript",
      "React",
      "Tailwind v4",
      "Framer Motion",
      "Upstash Redis",
      "YouTube IFrame API",
    ],
    repoUrl: "https://github.com/dhlpradip/sendthemasong",
    liveUrl: "https://mixtape.erpradeepdahal.com.np",
    heroImage: sendThemASongLogo,
    sections: [
      {
        heading: "The idea",
        paragraphs: [
          "A mixtape has always said more than a playlist link. The hand-picked tracks, the paper sleeve, the act of handing it over — all of it communicates care. Send Them A Song brings that feeling to the web: build a mixtape from YouTube songs, write a note, and share a URL that opens as an animated postcard with a cassette illustration, a center crease, and playback controls tucked inside the card itself.",
          "No sign-up, no database (originally), no backend. The entire mixtape was encoded into the URL as compressed JSON — working entirely client-to-client. I wanted the shortest path from \"I want to send this\" to \"they've opened it.\"",
        ],
      },
      {
        heading: "Matters of craft",
        paragraphs: [
          "The card opens with a book-like animation — a cover page in portrait that flips to reveal a two-page landscape spread. The left page shows the greeting, message, and a cassette SVG I drew by hand. The right page lists the songs in a scrollable area. Below both, a player bar spans the full width with prev, play/pause, next, and play all.",
          "Every element is designed to feel warm and human — cream paper tones, soft gradients, a script font for the greeting, and a light blue background that mimics a desk surface. The cursor-driven cover shadow is a small detail that makes the card feel physical.",
          "The cassette SVG has a label on the bottom half that displays the mixtape title and a \"from → to\" inscription — the same personal touch you'd write on a real tape.",
        ],
      },
      {
        heading: "The encoding problem",
        paragraphs: [
          "URL length became the interesting constraint. The first version stored the entire mixtape as base64-encoded JSON in the URL. With 20 songs, that payload alone ran over 3,000 characters — too long for practical sharing. I solved it in two stages.",
          "Stage one: compress each song's URL by storing only the YouTube video ID (11 chars instead of 45), and use single-character JSON keys. Stage two: store the payload server-side instead. When the user saves their mixtape, it POSTs to a Redis-backed API (Upstash), gets back an 8-character ID, and that's the entire URL. Old links still work — the receiver detects the format and fetches accordingly.",
        ],
      },
      {
        heading: "Player without a face",
        paragraphs: [
          "The receiver plays YouTube tracks with zero visual UI — the YouTube IFrame API player is a hidden 1×1 pixel element. No video, no suggestion sidebar, no branding. Just audio. The custom player bar with prev/next and auto-advance gives a controlled listening experience.",
          "Spotify embeds and direct audio files are also supported, each with their own renderer inside the song list.",
        ],
      },
      {
        heading: "What I'd do differently",
        paragraphs: [
          "The builder page uses a debounced search that queries YouTube via a server-side scrape of ytInitialData. It works, but it's fragile — YouTube changes page structure often. If I rebuilt this, I'd use the YouTube Data API with a proper API key.",
          "I'd also explore a simpler KV-free option: encode in a URL shortener's redirect (a link that 302s to the long URL), keeping the zero-infrastructure spirit while keeping URLs short.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
