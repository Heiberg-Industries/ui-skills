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

// ─── Icons ──────────────────────────────────────────────────────────────────

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// ─── Section components ─────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-18 py-5">
          <a
            href="#"
            className="font-[family:var(--font-cormorant-garamond)] text-[#2C2825] text-xl font-light tracking-wide"
          >
            UI Skills
          </a>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-[family:var(--font-dm-sans)] text-[#7D756D] hover:text-[#2C2825] text-sm font-normal transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7D756D] hover:text-[#2C2825] transition-colors duration-300"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>

          <button
            type="button"
            className="md:hidden font-[family:var(--font-dm-sans)] text-[#7D756D] hover:text-[#2C2825] text-sm font-normal transition-colors duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#D4CCC4]">
          <div className="px-6 py-8 space-y-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-[family:var(--font-dm-sans)] text-[#7D756D] hover:text-[#2C2825] text-sm font-normal transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 font-[family:var(--font-dm-sans)] text-[#7D756D] hover:text-[#2C2825] text-sm font-normal transition-colors duration-300"
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
    <section className="pt-40 pb-28 sm:pt-48 sm:pb-36 lg:pt-56 lg:pb-44">
      <div className="max-w-[900px] mx-auto px-6 sm:px-10 lg:px-16">
        <h1 className="font-[family:var(--font-cormorant-garamond)] text-4xl sm:text-5xl lg:text-[60px] font-light text-[#2C2825] leading-[1.1] tracking-[0.02em]">
          Design direction for
          <br />
          AI-generated UI
        </h1>
        <p className="mt-8 sm:mt-10 max-w-[580px] font-[family:var(--font-dm-sans)] text-lg text-[#7D756D] leading-[1.75] font-normal">
          20 style guardrail files that give LLMs the context to build tasteful,
          consistent interfaces.
        </p>
        <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#3D3530] text-[#FAF8F5] font-[family:var(--font-dm-sans)] px-7 py-3 text-sm font-medium rounded-lg hover:bg-[#4A4540] transition-colors duration-300 w-full sm:w-auto"
          >
            View on GitHub
          </a>
          <a
            href="#styles"
            className="inline-flex items-center justify-center border border-[#D4CCC4] text-[#3D3530] font-[family:var(--font-dm-sans)] px-7 py-3 text-sm font-normal rounded-lg hover:bg-[#F5EDE3]/50 transition-colors duration-300 w-full sm:w-auto"
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
    <section id="features" className="py-28 sm:py-36 lg:py-40">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="font-[family:var(--font-cormorant-garamond)] text-3xl sm:text-4xl lg:text-[44px] font-light text-[#2C2825] leading-[1.1] tracking-[0.02em] mb-16 sm:mb-20">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-8 sm:p-10 shadow-[0_2px_8px_rgba(60,50,40,0.06)] border border-[#D4CCC4]/40"
            >
              <h3 className="font-[family:var(--font-cormorant-garamond)] text-[#2C2825] text-xl font-normal tracking-[0.01em]">
                {feature.title}
              </h3>
              <p className="mt-4 font-[family:var(--font-dm-sans)] text-[#7D756D] text-base leading-[1.75] font-normal">
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
    <section id="styles" className="py-28 sm:py-36 lg:py-40">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="font-[family:var(--font-cormorant-garamond)] text-3xl sm:text-4xl lg:text-[44px] font-light text-[#2C2825] leading-[1.1] tracking-[0.02em] mb-16 sm:mb-20">
          All 20 Styles
        </h2>
        <div>
          {STYLES.map((style, index) => (
            <div
              key={style.name}
              className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-5 sm:py-6 ${
                index !== STYLES.length - 1
                  ? "border-b border-[#D4CCC4]/60"
                  : ""
              }`}
            >
              <span className="font-[family:var(--font-dm-sans)] text-[#2C2825] text-base font-normal">
                {style.name}
              </span>
              <span className="font-[family:var(--font-dm-sans)] text-[#9C9489] text-sm font-normal mt-1 sm:mt-0">
                {style.tags.join(" / ")}
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
    <section id="install" className="py-28 sm:py-36 lg:py-40">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="font-[family:var(--font-cormorant-garamond)] text-3xl sm:text-4xl lg:text-[44px] font-light text-[#2C2825] leading-[1.1] tracking-[0.02em] mb-10 sm:mb-12">
          Get Started
        </h2>
        <p className="font-[family:var(--font-dm-sans)] text-[#7D756D] text-base leading-[1.75] mb-8 max-w-[580px]">
          Clone the repository into your project&apos;s skill directory. Works
          with Claude Code, Cursor, and any LLM coding tool.
        </p>
        <div className="relative">
          <div className="bg-[#F5EDE3]/60 border border-[#D4CCC4] rounded-xl p-6 sm:p-8 overflow-x-auto">
            <code className="font-[family:var(--font-dm-sans)] text-sm text-[#3D3530] whitespace-pre">
              {command}
            </code>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="absolute top-4 right-4 font-[family:var(--font-dm-sans)] text-[#9C9489] hover:text-[#2C2825] text-xs font-normal transition-colors duration-300"
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
    <footer className="py-16 sm:py-20">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="border-t border-[#D4CCC4]/60 pt-10 sm:pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <span className="font-[family:var(--font-cormorant-garamond)] text-[#2C2825] text-base font-normal tracking-wide">
              UI Skills
            </span>
            <span className="font-[family:var(--font-dm-sans)] text-[#9C9489] text-sm font-normal">
              MIT License
            </span>
          </div>
          <div className="flex items-center gap-8">
            <span className="font-[family:var(--font-dm-sans)] text-[#9C9489] text-sm font-normal">
              Made by Heiberg Industries
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7D756D] hover:text-[#2C2825] transition-colors duration-300"
              aria-label="GitHub"
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

export default function JapandiPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2825] antialiased">
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
