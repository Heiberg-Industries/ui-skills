"use client";

import { useState } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const GITHUB_URL = "https://github.com/Heiberg-Industries/ui-skills";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Styles", href: "#styles" },
  { label: "Install", href: "#install" },
];

const FEATURES = [
  {
    title: "20 Curated Styles",
    description:
      "From Bauhaus to Y2K Revival \u2014 each style is a rich design direction file covering typography, color, spacing, and components.",
  },
  {
    title: "LLM-Native Guardrails",
    description:
      "Not pixel specs, but design direction. Define what kind of font, color, and spacing \u2014 the AI makes specific choices within the style\u2019s constraints.",
  },
  {
    title: "Drop-in Skill",
    description:
      "Works with Claude Code, Cursor, Codex, Copilot, and more. One command to install, then just ask for UI.",
  },
  {
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
  { name: "Dark Mode Premium", tags: ["sophisticated", "cinematic", "exclusive"] },
  { name: "Flat Design", tags: ["clean", "bold", "iconic"] },
  { name: "Glassmorphism", tags: ["futuristic", "elegant", "premium"] },
  { name: "Japandi", tags: ["calm", "minimal", "warm"] },
  { name: "Material Design", tags: ["systematic", "accessible", "reliable"] },
  { name: "Minimalism", tags: ["reduced", "silent", "essential"] },
  { name: "Neubrutalism", tags: ["bold", "playful", "rebellious"] },
  { name: "Neumorphism", tags: ["subtle", "embedded", "soft"] },
  { name: "Organic", tags: ["natural", "flowing", "warm"] },
  { name: "Retro-Futurism", tags: ["nostalgic", "neon", "sci-fi"] },
  { name: "Skeuomorphism", tags: ["familiar", "tangible", "crafted"] },
  { name: "Swiss Design", tags: ["precise", "mathematical", "objective"] },
  { name: "Y2K Revival", tags: ["metallic", "bubbly", "glossy"] },
];

// ─── Section components ─────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="font-[family:var(--font-inter)] text-[#1A1A1A] text-sm font-normal tracking-wide"
          >
            UI Skills
          </a>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#888888] hover:text-[#1A1A1A] text-sm font-normal transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-[#1A1A1A] text-sm font-normal transition-colors duration-300"
            >
              GitHub
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-[#888888] hover:text-[#1A1A1A] text-sm font-normal transition-colors duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white">
          <div className="px-6 py-8 space-y-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[#888888] hover:text-[#1A1A1A] text-sm font-normal transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#888888] hover:text-[#1A1A1A] text-sm font-normal transition-colors duration-300"
            >
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
    <section className="pt-40 pb-32 sm:pt-48 sm:pb-40 lg:pt-56 lg:pb-48">
      <div className="max-w-[800px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1 className="font-[family:var(--font-inter)] text-4xl sm:text-5xl lg:text-[64px] font-light text-[#1A1A1A] leading-[1.1] tracking-[-0.02em]">
          Design direction for
          <br />
          AI-generated UI
        </h1>
        <p className="mt-8 sm:mt-10 max-w-[560px] mx-auto text-lg text-[#888888] leading-[1.7] font-normal font-[family:var(--font-inter)]">
          20 style guardrail files that give LLMs the context to build tasteful,
          consistent interfaces.
        </p>
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#1A1A1A] text-white px-7 py-3.5 text-sm font-medium tracking-wide hover:opacity-75 transition-opacity duration-300 w-full sm:w-auto"
          >
            View on GitHub
          </a>
          <a
            href="#styles"
            className="inline-flex items-center justify-center text-[#1A1A1A] text-sm font-normal tracking-wide hover:opacity-50 transition-opacity duration-300 underline underline-offset-4 decoration-[#CACACA]"
          >
            Browse styles
          </a>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-32 sm:py-40 lg:py-48">
      <div className="max-w-[800px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-20 sm:space-y-24">
          {FEATURES.map((feature) => (
            <div key={feature.title}>
              <h3 className="font-[family:var(--font-inter)] text-[#1A1A1A] text-base font-medium tracking-wide">
                {feature.title}
              </h3>
              <p className="mt-4 text-[#888888] text-lg leading-[1.7] font-normal font-[family:var(--font-inter)] max-w-[560px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StyleGallery() {
  return (
    <section id="styles" className="py-32 sm:py-40 lg:py-48">
      <div className="max-w-[800px] mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="font-[family:var(--font-inter)] text-3xl sm:text-4xl lg:text-[48px] font-light text-[#1A1A1A] leading-[1.1] tracking-[-0.02em] mb-16 sm:mb-20 lg:mb-24">
          All 20 Styles
        </h2>
        <div className="space-y-0">
          {STYLES.map((style, index) => (
            <div
              key={style.name}
              className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-5 sm:py-6 ${
                index !== STYLES.length - 1
                  ? "border-b border-[#EBEBEB]"
                  : ""
              }`}
            >
              <span className="font-[family:var(--font-inter)] text-[#1A1A1A] text-base font-normal">
                {style.name}
              </span>
              <span className="font-[family:var(--font-inter)] text-[#AAAAAA] text-sm font-normal mt-1 sm:mt-0">
                {style.tags.join(", ")}
              </span>
            </div>
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
    <section id="install" className="py-32 sm:py-40 lg:py-48">
      <div className="max-w-[800px] mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="font-[family:var(--font-inter)] text-3xl sm:text-4xl lg:text-[48px] font-light text-[#1A1A1A] leading-[1.1] tracking-[-0.02em] mb-10 sm:mb-12">
          Get Started
        </h2>
        <div className="relative">
          <div className="bg-[#FAFAFA] border border-[#EBEBEB] p-6 sm:p-8 overflow-x-auto">
            <code className="text-sm text-[#1A1A1A] font-[family:var(--font-inter)] font-normal whitespace-pre">
              {command}
            </code>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="absolute top-4 right-4 text-[#AAAAAA] hover:text-[#1A1A1A] text-xs font-normal font-[family:var(--font-inter)] transition-colors duration-300"
            aria-label="Copy install command to clipboard"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-[800px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-[#EBEBEB] pt-10 sm:pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <span className="font-[family:var(--font-inter)] text-[#1A1A1A] text-sm font-normal">
              UI Skills
            </span>
            <span className="text-[#AAAAAA] text-sm font-normal font-[family:var(--font-inter)]">
              MIT License
            </span>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-[#AAAAAA] text-sm font-normal font-[family:var(--font-inter)]">
              Made by Heiberg Industries
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-[#1A1A1A] text-sm font-normal font-[family:var(--font-inter)] transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main page component ────────────────────────────────────────────────────

export default function MinimalismPage() {
  return (
    <div className="min-h-screen bg-white font-[family:var(--font-inter)] text-[#1A1A1A] antialiased">
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
