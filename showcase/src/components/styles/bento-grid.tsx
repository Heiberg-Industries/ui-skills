"use client";

import React, { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Bento Grid — UI Skills Promo Site                                  */
/*  Style: Modular, dense, organized. Apple-inspired clean bento.      */
/* ------------------------------------------------------------------ */

/* ---- tiny helpers ------------------------------------------------ */

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PackageIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function ShieldIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function PlugIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-1l-1 4H7l-1-4H5a2 2 0 0 1-1-2z" />
      <path d="M8 12V4" />
      <path d="M16 12V4" />
    </svg>
  );
}

function HeartIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function CopyIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ---- Scroll-in animation hook ------------------------------------ */

function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ---- Styles data ------------------------------------------------- */

const ALL_STYLES: { name: string; tags: string }[] = [
  { name: "Anti-Design", tags: "chaotic, punk, raw" },
  { name: "Art Deco", tags: "luxurious, geometric, ornamental" },
  { name: "Aurora", tags: "vibrant, ethereal, dynamic" },
  { name: "Bauhaus", tags: "geometric, bold, functional" },
  { name: "Bento Grid", tags: "modular, dense, organized" },
  { name: "Claymorphism", tags: "friendly, 3D, playful" },
  { name: "Corporate Modern", tags: "professional, trustworthy, clean" },
  { name: "Dark Mode Premium", tags: "sophisticated, cinematic, exclusive" },
  { name: "Flat Design", tags: "clean, bold, iconic" },
  { name: "Glassmorphism", tags: "futuristic, elegant, premium" },
  { name: "Japandi", tags: "calm, minimal, warm" },
  { name: "Material Design", tags: "systematic, accessible, reliable" },
  { name: "Minimalism", tags: "reduced, silent, essential" },
  { name: "Neubrutalism", tags: "bold, playful, rebellious" },
  { name: "Neumorphism", tags: "subtle, embedded, soft" },
  { name: "Organic", tags: "natural, flowing, warm" },
  { name: "Retro-Futurism", tags: "nostalgic, neon, sci-fi" },
  { name: "Skeuomorphism", tags: "familiar, tangible, crafted" },
  { name: "Swiss Design", tags: "precise, mathematical, objective" },
  { name: "Y2K Revival", tags: "metallic, bubbly, glossy" },
];

/* A repeatable set of soft tints for the style gallery tiles */
const TILE_TINTS = [
  "#FEE2E2", // red-100
  "#FEF3C7", // amber-100
  "#D1FAE5", // emerald-100
  "#DBEAFE", // blue-100
  "#EDE9FE", // violet-100
  "#FCE7F3", // pink-100
  "#E0E7FF", // indigo-100
  "#CCFBF1", // teal-100
  "#FEF9C3", // yellow-100
  "#F3E8FF", // purple-100
];

/* ------------------------------------------------------------------ */
/*  MAIN PAGE                                                          */
/* ------------------------------------------------------------------ */

export default function BentoGridPage() {
  return (
    <div
      className="min-h-screen font-[family:var(--font-inter)]"
      style={{ backgroundColor: "#F5F5F7" }}
    >
      <Navbar />
      <Hero />
      <Features />
      <StyleGallery />
      <Installation />
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                             */
/* ------------------------------------------------------------------ */

function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: "rgba(245,245,247,0.85)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="font-[family:var(--font-space-grotesk)] text-xl font-bold"
          style={{ color: "#1D1D1F" }}
        >
          UI Skills
        </a>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="hidden text-sm font-medium sm:inline-block"
            style={{ color: "#86868B" }}
          >
            Features
          </a>
          <a
            href="#styles"
            className="hidden text-sm font-medium sm:inline-block"
            style={{ color: "#86868B" }}
          >
            Styles
          </a>
          <a
            href="#install"
            className="hidden text-sm font-medium sm:inline-block"
            style={{ color: "#86868B" }}
          >
            Install
          </a>
          <a
            href="https://github.com/Heiberg-Industries/ui-skills"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: "#1D1D1F" }}
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="px-6 pb-16 pt-20 md:pb-24 md:pt-32">
      <div
        ref={ref}
        className="mx-auto max-w-3xl text-center transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <h1
          className="font-[family:var(--font-space-grotesk)] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          style={{ color: "#1D1D1F" }}
        >
          Design direction for AI-generated&nbsp;UI
        </h1>
        <p
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed"
          style={{ color: "#86868B" }}
        >
          20 style guardrail files that give LLMs the context to build tasteful,
          consistent interfaces.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/Heiberg-Industries/ui-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
            style={{ backgroundColor: "#0066CC" }}
          >
            View on GitHub
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="#styles"
            className="inline-flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-[1.03]"
            style={{
              borderColor: "#D1D1D6",
              color: "#1D1D1F",
              backgroundColor: "#FFFFFF",
            }}
          >
            Browse styles
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FEATURES                                                           */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    icon: PackageIcon,
    title: "20 Curated Styles",
    description:
      "From Bauhaus to Y2K Revival \u2014 each style is a rich design direction file covering typography, color, spacing, and components.",
    span: "col-span-1 sm:col-span-2 row-span-2", // hero tile
    dark: true,
  },
  {
    icon: ShieldIcon,
    title: "LLM-Native Guardrails",
    description:
      "Not pixel specs, but design direction. Define what kind of font, color, and spacing \u2014 the AI makes specific choices within the style\u2019s constraints.",
    span: "col-span-1 sm:col-span-2",
    dark: false,
  },
  {
    icon: PlugIcon,
    title: "Drop-in Skill",
    description:
      "Works with Claude Code, Cursor, Codex, Copilot, and more. One command to install, then just ask for UI.",
    span: "col-span-1",
    dark: false,
  },
  {
    icon: HeartIcon,
    title: "Open Source",
    description:
      "MIT licensed and community-driven. Add your own styles, improve existing ones, or use them as-is.",
    span: "col-span-1",
    dark: false,
  },
];

function Features() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="features" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2
          className="font-[family:var(--font-space-grotesk)] text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1D1D1F" }}
        >
          Features
        </h2>

        <div
          ref={ref}
          className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-3"
          style={{ gridAutoRows: "minmax(180px, auto)" }}
        >
          {FEATURES.map((f, i) => {
            const delay = i * 80;
            return (
              <div
                key={f.title}
                className={`${f.span} flex flex-col justify-between overflow-hidden p-7 transition-all duration-500 ease-out hover:scale-[1.01]`}
                style={{
                  backgroundColor: f.dark ? "#1A1A1A" : "#FFFFFF",
                  borderRadius: 16,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${delay}ms`,
                }}
              >
                <div>
                  <div
                    className="mb-4 inline-flex items-center justify-center rounded-xl p-2.5"
                    style={{
                      backgroundColor: f.dark
                        ? "rgba(255,255,255,0.1)"
                        : "#F5F5F7",
                    }}
                  >
                    <f.icon
                      className={`h-6 w-6 ${f.dark ? "text-white" : ""}`}
                    />
                  </div>
                  <h3
                    className="font-[family:var(--font-space-grotesk)] text-xl font-semibold"
                    style={{ color: f.dark ? "#FFFFFF" : "#1D1D1F" }}
                  >
                    {f.title}
                  </h3>
                </div>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: f.dark ? "rgba(255,255,255,0.65)" : "#86868B" }}
                >
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  STYLE GALLERY                                                      */
/* ------------------------------------------------------------------ */

/*
  Layout strategy: 20 tiles in a 4-col bento with mixed sizes.
  We define explicit span overrides for a handful of tiles to
  create visual variety — everything else is 1x1.
*/
const GALLERY_SPANS: Record<number, string> = {
  0: "sm:col-span-2",                // Anti-Design — wide
  3: "sm:col-span-2 sm:row-span-2",  // Bauhaus — hero
  7: "sm:col-span-2",                // Dark Mode Premium — wide
  10: "sm:col-span-2",               // Japandi — wide
  14: "sm:row-span-2",               // Neumorphism — tall
  17: "sm:col-span-2",               // Skeuomorphism — wide
};

function StyleGallery() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="styles" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2
          className="font-[family:var(--font-space-grotesk)] text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1D1D1F" }}
        >
          All 20 Styles
        </h2>

        <div
          ref={ref}
          className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-3"
          style={{ gridAutoRows: "minmax(140px, auto)" }}
        >
          {ALL_STYLES.map((s, i) => {
            const span = GALLERY_SPANS[i] ?? "";
            const tint = TILE_TINTS[i % TILE_TINTS.length];
            const delay = Math.min(i * 50, 600);

            return (
              <div
                key={s.name}
                className={`${span} flex flex-col justify-end overflow-hidden p-6 transition-all duration-500 ease-out hover:scale-[1.02]`}
                style={{
                  backgroundColor: tint,
                  borderRadius: 16,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${delay}ms`,
                }}
              >
                <h3
                  className="font-[family:var(--font-space-grotesk)] text-lg font-semibold"
                  style={{ color: "#1D1D1F" }}
                >
                  {s.name}
                </h3>
                <p className="mt-1 text-xs" style={{ color: "#6E6E73" }}>
                  {s.tags}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  INSTALLATION                                                       */
/* ------------------------------------------------------------------ */

function Installation() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [copied, setCopied] = useState(false);

  const command =
    "git clone https://github.com/Heiberg-Industries/ui-skills.git .claude/skills/ui-skills";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard API may not be available */
    }
  };

  return (
    <section id="install" className="px-6 py-16 md:py-24">
      <div
        ref={ref}
        className="mx-auto max-w-6xl transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <div
          className="overflow-hidden p-8 md:p-12"
          style={{
            backgroundColor: "#1A1A1A",
            borderRadius: 16,
          }}
        >
          <h2
            className="font-[family:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Get Started
          </h2>
          <p
            className="mt-3 text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Clone the repository into your project&apos;s skills directory and start
            building with style.
          </p>

          <div
            className="mt-8 flex items-center gap-3 overflow-x-auto rounded-xl p-4"
            style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
          >
            <code
              className="flex-1 whitespace-nowrap text-sm"
              style={{ color: "rgba(255,255,255,0.85)", fontFamily: "monospace" }}
            >
              {command}
            </code>
            <button
              onClick={handleCopy}
              className="flex-shrink-0 rounded-lg p-2 transition-colors duration-200"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
              }}
              aria-label="Copy command"
            >
              {copied ? (
                <CheckIcon className="h-4 w-4" />
              ) : (
                <CopyIcon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="px-6 pb-10 pt-8">
      <div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row"
      >
        <p className="text-sm" style={{ color: "#86868B" }}>
          &copy; {new Date().getFullYear()} UI Skills. MIT License.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Heiberg-Industries/ui-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200"
            style={{ color: "#86868B" }}
          >
            GitHub
          </a>
          <a
            href="#features"
            className="text-sm transition-colors duration-200"
            style={{ color: "#86868B" }}
          >
            Features
          </a>
          <a
            href="#styles"
            className="text-sm transition-colors duration-200"
            style={{ color: "#86868B" }}
          >
            Styles
          </a>
        </div>
      </div>
    </footer>
  );
}
