"use client";

import React, { useState } from "react";

// ─── Sub-components ─────────────────────────────────────────────────────────

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Styles", href: "#styles" },
  { label: "Install", href: "#install" },
];

const FEATURES = [
  {
    number: "01",
    title: "20 Curated Styles",
    description:
      "From Bauhaus to Y2K Revival \u2014 each style is a rich design direction file covering typography, color, spacing, and components.",
  },
  {
    number: "02",
    title: "LLM-Native Guardrails",
    description:
      "Not pixel specs, but design direction. Define what kind of font, color, and spacing \u2014 the AI makes specific choices within the style\u2019s constraints.",
  },
  {
    number: "03",
    title: "Drop-in Skill",
    description:
      "Works with Claude Code, Cursor, Codex, Copilot, and more. One command to install, then just ask for UI.",
  },
  {
    number: "04",
    title: "Open Source",
    description:
      "MIT licensed and community-driven. Add your own styles, improve existing ones, or use them as-is.",
  },
];

const STYLES = [
  { name: "Anti-Design", tags: ["chaotic", "punk", "raw"] },
  { name: "Art Deco", tags: ["luxurious", "geometric", "ornamental"] },
  { name: "Aurora", tags: ["vibrant", "ethereal", "dynamic"] },
  { name: "Bauhaus", tags: ["geometric", "bold", "functional"] },
  { name: "Bento Grid", tags: ["modular", "dense", "organized"] },
  { name: "Claymorphism", tags: ["friendly", "3D", "playful"] },
  { name: "Corporate Modern", tags: ["professional", "trustworthy", "clean"] },
  {
    name: "Dark Mode Premium",
    tags: ["sophisticated", "cinematic", "exclusive"],
  },
  { name: "Flat Design", tags: ["clean", "bold", "iconic"] },
  { name: "Glassmorphism", tags: ["futuristic", "elegant", "premium"] },
  { name: "Japandi", tags: ["calm", "minimal", "warm"] },
  {
    name: "Material Design",
    tags: ["systematic", "accessible", "reliable"],
  },
  { name: "Minimalism", tags: ["reduced", "silent", "essential"] },
  { name: "Neubrutalism", tags: ["bold", "playful", "rebellious"] },
  { name: "Neumorphism", tags: ["subtle", "embedded", "soft"] },
  { name: "Organic", tags: ["natural", "flowing", "warm"] },
  { name: "Retro-Futurism", tags: ["nostalgic", "neon", "sci-fi"] },
  { name: "Skeuomorphism", tags: ["familiar", "tangible", "crafted"] },
  { name: "Swiss Design", tags: ["precise", "mathematical", "objective"] },
  { name: "Y2K Revival", tags: ["metallic", "bubbly", "glossy"] },
];

const GITHUB_URL = "https://github.com/Heiberg-Industries/ui-skills";

// ─── Section components ─────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="bg-white border-b-[3px] border-black sticky top-0 z-50"
      aria-label="Main navigation"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-black font-[family:var(--font-inter)] font-bold text-sm uppercase tracking-[0.1em]"
          >
            UI Skills
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-black hover:text-[#E63B2E] text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="text-black hover:text-[#E63B2E] transition-colors duration-100"
            >
              <GitHubIcon />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-black hover:text-[#E63B2E] transition-colors duration-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t-[2px] border-black">
          <div className="px-6 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-black hover:text-[#E63B2E] text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#E63B2E] text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-100"
              aria-label="View on GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-x-6">
          {/* Asymmetric layout: content on 8 columns */}
          <div className="col-span-12 lg:col-span-8">
            <div className="border-t-[3px] border-black pt-8">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#555555] mb-8">
                Design system for AI
              </p>
              <h1 className="font-[family:var(--font-inter)] text-5xl sm:text-6xl lg:text-[80px] xl:text-[96px] font-bold text-black leading-[0.95] tracking-[-0.02em] uppercase">
                Design direction for AI-generated UI
              </h1>
              <p className="mt-8 max-w-[540px] text-lg text-[#555555] leading-relaxed font-[family:var(--font-inter)]">
                20 style guardrail files that give LLMs the context to build
                tasteful, consistent interfaces.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white rounded-none px-8 py-4 text-xs font-bold uppercase tracking-[0.1em] hover:bg-white hover:text-black border-2 border-black transition-colors duration-100 w-full sm:w-auto"
                >
                  View on GitHub
                </a>
                <a
                  href="#styles"
                  className="inline-flex items-center justify-center bg-white text-black border-2 border-black rounded-none px-8 py-4 text-xs font-bold uppercase tracking-[0.1em] hover:bg-black hover:text-white transition-colors duration-100 w-full sm:w-auto"
                >
                  Browse styles
                </a>
              </div>
            </div>
          </div>

          {/* Right column: decorative large number */}
          <div className="hidden lg:flex col-span-4 items-end justify-end">
            <span className="text-[200px] xl:text-[280px] font-bold leading-none text-black/[0.06] select-none">
              20
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-t-[3px] border-black pt-6">
      <span className="block text-5xl lg:text-6xl font-light text-black/20 font-[family:var(--font-inter)] mb-4">
        {number}
      </span>
      <h3 className="font-[family:var(--font-inter)] text-lg font-bold text-black uppercase tracking-[0.02em] mb-3">
        {title}
      </h3>
      <p className="text-sm text-[#555555] leading-relaxed">{description}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="bg-[#F5F5F5] py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-x-6 mb-16">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-[family:var(--font-inter)] text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-[-0.02em] uppercase leading-[0.95]">
              Everything you need
            </h2>
            <p className="mt-6 text-[#555555] text-lg max-w-[480px]">
              Guardrails, not specs. Style direction that lets AI make great
              design choices.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {FEATURES.map((feature) => (
            <FeatureBlock
              key={feature.title}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StyleCard({ name, tags }: { name: string; tags: string[] }) {
  return (
    <div className="border-2 border-black p-5 hover:bg-black hover:text-white transition-colors duration-100 group">
      <h3 className="font-[family:var(--font-inter)] text-sm font-bold text-black uppercase tracking-[0.05em] mb-3 group-hover:text-white">
        {name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block text-[#555555] group-hover:text-white/70 text-xs uppercase tracking-[0.05em]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function StyleGallery() {
  return (
    <section id="styles" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="border-t-[3px] border-black pt-8 mb-16">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-[family:var(--font-inter)] text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-[-0.02em] uppercase leading-[0.95]">
                All 20 Styles
              </h2>
              <p className="mt-6 text-[#555555] text-lg max-w-[480px]">
                Each style is a complete design direction file with typography,
                color, spacing, components, and more.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {STYLES.map((style) => (
            <StyleCard
              key={style.name}
              name={style.name}
              tags={style.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Installation() {
  const [copied, setCopied] = useState(false);
  const command =
    "git clone https://github.com/Heiberg-Industries/ui-skills.git .claude/skills/ui-skills";

  const handleCopy = () => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="install" className="bg-[#E63B2E] py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-[family:var(--font-inter)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] uppercase leading-[0.95]">
              Get Started
            </h2>
            <p className="mt-6 text-white/80 text-lg max-w-[480px]">
              Clone the repository into your project&apos;s skills directory and
              start building with style.
            </p>
            <div className="mt-10 relative">
              <div className="bg-black p-6 overflow-x-auto">
                <code className="text-sm text-white font-mono whitespace-pre">
                  {command}
                </code>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="absolute top-3 right-3 text-white/60 hover:text-white text-xs font-bold uppercase tracking-[0.1em] bg-white/10 hover:bg-white/20 px-3 py-1.5 transition-colors duration-100"
                aria-label="Copy install command to clipboard"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <p className="mt-6 text-sm text-white/70 uppercase tracking-[0.05em]">
              Then tell your AI assistant which style to use, or let it help you
              choose one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t-[3px] border-black">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <span className="font-[family:var(--font-inter)] font-bold text-black text-xs uppercase tracking-[0.1em]">
              UI Skills
            </span>
            <span className="text-[#555555] text-xs uppercase tracking-[0.05em]">
              MIT License
            </span>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-[#555555] text-xs uppercase tracking-[0.05em]">
              Made by Heiberg Industries
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="UI Skills on GitHub"
              className="text-black hover:text-[#E63B2E] transition-colors duration-100"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main page component ────────────────────────────────────────────────────

export default function SwissPage() {
  return (
    <div className="min-h-screen bg-white font-[family:var(--font-inter)] text-black antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <StyleGallery />
        <Installation />
      </main>
      <Footer />
    </div>
  );
}
