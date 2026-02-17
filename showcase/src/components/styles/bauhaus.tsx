"use client";

import { useState } from "react";

const GITHUB_URL = "https://github.com/Heiberg-Industries/ui-skills";

const ALL_STYLES = [
  { name: "Anti-Design", mood: ["chaotic", "punk", "raw"] },
  { name: "Art Deco", mood: ["luxurious", "geometric", "ornamental"] },
  { name: "Aurora", mood: ["vibrant", "ethereal", "dynamic"] },
  { name: "Bauhaus", mood: ["geometric", "bold", "functional"] },
  { name: "Bento Grid", mood: ["modular", "dense", "organized"] },
  { name: "Claymorphism", mood: ["friendly", "3D", "playful"] },
  { name: "Corporate Modern", mood: ["professional", "trustworthy", "clean"] },
  { name: "Dark Mode Premium", mood: ["sophisticated", "cinematic", "exclusive"] },
  { name: "Flat Design", mood: ["clean", "bold", "iconic"] },
  { name: "Glassmorphism", mood: ["futuristic", "elegant", "premium"] },
  { name: "Japandi", mood: ["calm", "minimal", "warm"] },
  { name: "Material Design", mood: ["systematic", "accessible", "reliable"] },
  { name: "Minimalism", mood: ["reduced", "silent", "essential"] },
  { name: "Neubrutalism", mood: ["bold", "playful", "rebellious"] },
  { name: "Neumorphism", mood: ["subtle", "embedded", "soft"] },
  { name: "Organic", mood: ["natural", "flowing", "warm"] },
  { name: "Retro-Futurism", mood: ["nostalgic", "neon", "sci-fi"] },
  { name: "Skeuomorphism", mood: ["familiar", "tangible", "crafted"] },
  { name: "Swiss Design", mood: ["precise", "mathematical", "objective"] },
  { name: "Y2K Revival", mood: ["metallic", "bubbly", "glossy"] },
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

/* ---------- SVG Icons ---------- */

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ---------- Sub-components ---------- */

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8] border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="font-[family:var(--font-space-grotesk)] text-lg font-bold uppercase tracking-[0.15em] text-[#1A1A1A]"
        >
          UI Skills
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#features"
            className="font-[family:var(--font-space-grotesk)] text-sm uppercase tracking-[0.12em] text-[#1A1A1A] hover:text-[#E63B2E] transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#styles"
            className="font-[family:var(--font-space-grotesk)] text-sm uppercase tracking-[0.12em] text-[#1A1A1A] hover:text-[#E63B2E] transition-colors duration-200"
          >
            Styles
          </a>
          <a
            href="#install"
            className="font-[family:var(--font-space-grotesk)] text-sm uppercase tracking-[0.12em] text-[#1A1A1A] hover:text-[#E63B2E] transition-colors duration-200"
          >
            Install
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A1A1A] hover:text-[#E63B2E] transition-colors duration-200"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-none border-2 border-black bg-transparent cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-black transition-transform duration-200 ${
              mobileOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-black transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-black transition-transform duration-200 ${
              mobileOpen ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t-2 border-black bg-[#FAFAF8]">
          <div className="flex flex-col px-6 py-6 gap-5">
            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="font-[family:var(--font-space-grotesk)] text-base uppercase tracking-[0.12em] text-[#1A1A1A]"
            >
              Features
            </a>
            <a
              href="#styles"
              onClick={() => setMobileOpen(false)}
              className="font-[family:var(--font-space-grotesk)] text-base uppercase tracking-[0.12em] text-[#1A1A1A]"
            >
              Styles
            </a>
            <a
              href="#install"
              onClick={() => setMobileOpen(false)}
              className="font-[family:var(--font-space-grotesk)] text-base uppercase tracking-[0.12em] text-[#1A1A1A]"
            >
              Install
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-[family:var(--font-space-grotesk)] text-base uppercase tracking-[0.12em] text-[#1A1A1A]"
            >
              <GitHubIcon className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-[#FAFAF8] pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Decorative geometric elements */}
      {/* Large red circle — top-right */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#E63B2E] opacity-100"
        aria-hidden="true"
      />
      {/* Yellow square — bottom-left */}
      <div
        className="absolute -bottom-12 -left-12 w-40 h-40 md:w-56 md:h-56 bg-[#F2C41D] rounded-none"
        aria-hidden="true"
      />
      {/* Blue triangle — mid-right, created with borders */}
      <div
        className="absolute top-1/2 right-8 md:right-24 -translate-y-1/2 w-0 h-0"
        style={{
          borderLeft: "40px solid transparent",
          borderRight: "40px solid transparent",
          borderBottom: "70px solid #1A5BC4",
        }}
        aria-hidden="true"
      />
      {/* Small black circle — left side */}
      <div
        className="absolute top-1/3 left-6 md:left-16 w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#1A1A1A]"
        aria-hidden="true"
      />
      {/* Horizontal rule accent */}
      <div
        className="absolute top-24 left-0 right-0 h-[2px] bg-black opacity-10"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h1 className="font-[family:var(--font-space-grotesk)] text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.04em] text-[#1A1A1A] leading-[0.95]">
            Design direction
            <br />
            for AI-generated
            <br />
            <span className="text-[#E63B2E]">UI</span>
          </h1>

          <p className="mt-8 font-[family:var(--font-inter)] text-lg md:text-xl text-[#6B6B6B] max-w-xl leading-relaxed">
            20 style guardrail files that give LLMs the context to build
            tasteful, consistent interfaces.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {/* Primary CTA */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E63B2E] text-white font-[family:var(--font-space-grotesk)] text-sm uppercase tracking-[0.12em] font-bold rounded-none border-2 border-[#E63B2E] hover:bg-[#1A1A1A] hover:border-[#1A1A1A] transition-colors duration-200"
            >
              View on GitHub
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            {/* Secondary CTA */}
            <a
              href="#styles"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-[#1A1A1A] font-[family:var(--font-space-grotesk)] text-sm uppercase tracking-[0.12em] font-bold rounded-none border-2 border-black hover:bg-[#1A1A1A] hover:text-white transition-colors duration-200"
            >
              Browse Styles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="bg-[#1A1A1A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="font-[family:var(--font-space-grotesk)] text-3xl md:text-5xl font-black uppercase tracking-[0.06em] text-white mb-16">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-white">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className={`p-8 md:p-10 ${
                i % 2 !== 0 ? "md:border-l-2 md:border-white" : ""
              } ${i >= 2 ? "border-t-2 border-white" : ""} ${
                i === 1 ? "border-t-2 md:border-t-0 border-white" : ""
              }`}
            >
              {/* Geometric accent — a small colored square for each card */}
              <div
                className={`w-6 h-6 mb-6 rounded-none ${
                  i === 0
                    ? "bg-[#E63B2E]"
                    : i === 1
                      ? "bg-[#F2C41D]"
                      : i === 2
                        ? "bg-[#1A5BC4]"
                        : "bg-white"
                }`}
              />
              <h3 className="font-[family:var(--font-space-grotesk)] text-lg md:text-xl font-bold uppercase tracking-[0.08em] text-white mb-4">
                {feature.title}
              </h3>
              <p className="font-[family:var(--font-inter)] text-[#A0A0A0] leading-relaxed text-sm md:text-base">
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
    <section id="styles" className="relative bg-[#FAFAF8] py-24 md:py-32 overflow-hidden">
      {/* Decorative large circle in background */}
      <div
        className="absolute -bottom-32 -right-32 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full border-2 border-[#E63B2E] opacity-20"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="font-[family:var(--font-space-grotesk)] text-3xl md:text-5xl font-black uppercase tracking-[0.06em] text-[#1A1A1A] mb-4">
          All 20 Styles
        </h2>
        <div className="w-16 h-1 bg-[#E63B2E] mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black">
          {ALL_STYLES.map((style, i) => {
            const isHighlighted = style.name === "Bauhaus";
            return (
              <div
                key={style.name}
                className={`p-6 border-b-2 border-r-0 sm:border-r-2 border-black last:border-b-0 ${
                  isHighlighted
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-[#FAFAF8] text-[#1A1A1A]"
                } ${
                  /* Remove right border on last column items */
                  (i + 1) % 4 === 0 ? "lg:border-r-0" : ""
                } ${
                  (i + 1) % 2 === 0 ? "sm:border-r-0 lg:border-r-2" : ""
                }`}
              >
                <h3
                  className={`font-[family:var(--font-space-grotesk)] text-sm font-bold uppercase tracking-[0.1em] mb-3 ${
                    isHighlighted ? "text-[#E63B2E]" : "text-[#1A1A1A]"
                  }`}
                >
                  {style.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {style.mood.map((tag) => (
                    <span
                      key={tag}
                      className={`font-[family:var(--font-inter)] text-xs rounded-none px-2 py-0.5 border ${
                        isHighlighted
                          ? "border-white/30 text-white/70"
                          : "border-[#1A1A1A]/20 text-[#6B6B6B]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InstallSection() {
  const [copied, setCopied] = useState(false);
  const command =
    "git clone https://github.com/Heiberg-Industries/ui-skills.git .claude/skills/ui-skills";

  function handleCopy() {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="install" className="relative bg-[#1A5BC4] py-24 md:py-32 overflow-hidden">
      {/* Decorative yellow triangle */}
      <div
        className="absolute top-8 right-12 md:right-24 w-0 h-0"
        style={{
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          borderBottom: "52px solid #F2C41D",
        }}
        aria-hidden="true"
      />
      {/* Decorative red circle */}
      <div
        className="absolute bottom-12 left-8 md:left-16 w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#E63B2E]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="font-[family:var(--font-space-grotesk)] text-3xl md:text-5xl font-black uppercase tracking-[0.06em] text-white mb-4">
          Get Started
        </h2>
        <div className="w-16 h-1 bg-[#F2C41D] mb-10" />

        <p className="font-[family:var(--font-inter)] text-white/80 text-lg mb-8 max-w-xl">
          Clone the repository into your project&apos;s skills directory. Works
          with any AI coding tool that supports skill files.
        </p>

        {/* Code block */}
        <div className="relative border-2 border-white rounded-none bg-[#0D0D0D] max-w-3xl">
          <div className="flex items-center justify-between border-b-2 border-white px-5 py-3">
            <span className="font-[family:var(--font-space-grotesk)] text-xs uppercase tracking-[0.12em] text-white/50">
              Terminal
            </span>
            <button
              onClick={handleCopy}
              className="font-[family:var(--font-space-grotesk)] text-xs uppercase tracking-[0.1em] text-white/70 hover:text-white border border-white/30 hover:border-white px-3 py-1 rounded-none bg-transparent transition-colors duration-200 cursor-pointer"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="px-5 py-5 overflow-x-auto">
            <code className="font-[family:var(--font-space-grotesk)] text-sm md:text-base text-[#F2C41D] whitespace-pre">
              {command}
            </code>
          </div>
        </div>

        <p className="font-[family:var(--font-inter)] text-white/60 text-sm mt-6 max-w-xl">
          Then ask your AI to build UI in any of the 20 styles. It reads the
          guardrail file and generates code that follows the style direction.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t-2 border-white/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col gap-2">
            <span className="font-[family:var(--font-space-grotesk)] text-white text-lg font-bold uppercase tracking-[0.15em]">
              UI Skills
            </span>
            <span className="font-[family:var(--font-inter)] text-white/40 text-sm">
              MIT License
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-8">
            <span className="font-[family:var(--font-inter)] text-white/40 text-sm">
              Made by Heiberg Industries
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Decorative bottom rule with color blocks */}
        <div className="flex mt-10 h-1" aria-hidden="true">
          <div className="flex-1 bg-[#E63B2E]" />
          <div className="flex-1 bg-[#F2C41D]" />
          <div className="flex-1 bg-[#1A5BC4]" />
        </div>
      </div>
    </footer>
  );
}

/* ---------- Main Page ---------- */

export default function BauhausPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-[family:var(--font-inter)]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StyleGallery />
      <InstallSection />
      <Footer />
    </div>
  );
}
