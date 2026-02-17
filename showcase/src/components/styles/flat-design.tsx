"use client";

import React, { useState } from "react";

// ─── Sub-components (filled geometric icons — single style throughout) ───────

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
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="2" rx="1" />
      <rect x="3" y="11" width="18" height="2" rx="1" />
      <rect x="3" y="17" width="18" height="2" rx="1" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z" />
    </svg>
  );
}

// ─── Feature icons (filled, geometric, single-color) ────────────────────────

function GridIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  );
}

function SliderIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="2" rx="1" />
      <circle cx="8" cy="6" r="3" />
      <rect x="3" y="11" width="18" height="2" rx="1" />
      <circle cx="16" cy="12" r="3" />
      <rect x="3" y="17" width="18" height="2" rx="1" />
      <circle cx="11" cy="18" r="3" />
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M13 3v4h-2V3h2zm-2 6h2v2.59l3.71 3.7-1.42 1.42L12 13.41l-3.29 3.3-1.42-1.42L11 11.59V9zm-3-6v4H6V3h2zm8 0v4h-2V3h2zM5 14h14v2H5v-2zm2 4h10v2H7v-2z" />
      <rect x="5" y="14" width="14" height="8" rx="2" />
    </svg>
  );
}

function UnlockIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 1a5 5 0 00-5 5v3H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-1V6a4 4 0 00-8 0h2a2 2 0 114 0v3H9V6a3 3 0 013-5zm0 12a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Styles", href: "#styles" },
  { label: "Install", href: "#install" },
];

const FEATURES = [
  {
    icon: <GridIcon />,
    title: "20 Curated Styles",
    description:
      "From Bauhaus to Y2K Revival \u2014 each style is a rich design direction file covering typography, color, spacing, and components.",
  },
  {
    icon: <SliderIcon />,
    title: "LLM-Native Guardrails",
    description:
      "Not pixel specs, but design direction. Define what kind of font, color, and spacing \u2014 the AI makes specific choices within the style\u2019s constraints.",
  },
  {
    icon: <PlugIcon />,
    title: "Drop-in Skill",
    description:
      "Works with Claude Code, Cursor, Codex, Copilot, and more. One command to install, then just ask for UI.",
  },
  {
    icon: <UnlockIcon />,
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

const GITHUB_URL = "https://github.com/Heiberg-Industries/ui-skills";

// ─── Section components ─────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="bg-white sticky top-0 z-50"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-[#212121] font-[family:var(--font-inter)] font-bold text-lg tracking-tight"
          >
            UI Skills
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#757575] hover:text-[#3B82F6] text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="text-[#757575] hover:text-[#212121] transition-colors duration-150"
            >
              <GitHubIcon />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-[#757575] hover:text-[#212121] transition-colors duration-150"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu — solid fill, no blur, no transparency */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F5F5F5]">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[#212121] hover:text-[#3B82F6] text-sm font-semibold transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#757575] hover:text-[#212121] text-sm font-medium transition-colors duration-150"
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
    <section className="bg-[#3B82F6] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-[family:var(--font-inter)] text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-tight tracking-tight">
          Design direction for
          <br className="hidden sm:block" /> AI-generated UI
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100 leading-relaxed font-[family:var(--font-inter)]">
          20 style guardrail files that give LLMs the context to build tasteful,
          consistent interfaces.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-[#3B82F6] rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#F5F5F5] transition-colors duration-150 w-full sm:w-auto"
          >
            View on GitHub
          </a>
          <a
            href="#styles"
            className="inline-flex items-center justify-center border border-white text-white rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#2563EB] transition-colors duration-150 w-full sm:w-auto"
          >
            Browse styles
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 lg:p-8">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#3B82F6] text-white mb-4">
        {icon}
      </div>
      <h3 className="font-[family:var(--font-inter)] text-base font-bold text-[#212121] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#757575] leading-relaxed">{description}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="bg-[#F5F5F5] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family:var(--font-inter)] text-3xl sm:text-4xl font-bold text-[#212121] tracking-tight">
            Everything you need
          </h2>
          <p className="mt-4 text-[#757575] text-lg max-w-2xl mx-auto">
            Guardrails, not specs. Style direction that lets AI make great design
            choices.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
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
    <div className="bg-[#F5F5F5] rounded-lg p-5 hover:bg-[#E8E8E8] transition-colors duration-150">
      <h3 className="font-[family:var(--font-inter)] text-sm font-bold text-[#212121] mb-3">
        {name}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-[#3B82F6] text-white text-xs font-medium px-2.5 py-0.5 rounded"
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family:var(--font-inter)] text-3xl sm:text-4xl font-bold text-[#212121] tracking-tight">
            All 20 Styles
          </h2>
          <p className="mt-4 text-[#757575] text-lg max-w-2xl mx-auto">
            Each style is a complete design direction file with typography,
            color, spacing, components, and more.
          </p>
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
    <section id="install" className="bg-[#3B82F6] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family:var(--font-inter)] text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get Started
          </h2>
          <p className="mt-4 text-blue-100 text-lg">
            Clone the repository into your project&apos;s skills directory and
            start building with style.
          </p>
          <div className="mt-10 relative">
            <div className="bg-[#212121] rounded-lg p-5 text-left overflow-x-auto">
              <code className="text-sm text-[#F5F5F5] font-mono whitespace-pre">
                {command}
              </code>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="absolute top-3 right-3 text-[#F5F5F5] text-xs font-semibold bg-[#424242] hover:bg-[#616161] rounded px-3 py-1.5 transition-colors duration-150"
              aria-label="Copy install command to clipboard"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="mt-6 text-sm text-blue-100">
            Then tell your AI assistant which style to use, or let it help you
            choose one.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#212121]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-[family:var(--font-inter)] font-bold text-white text-sm">
              UI Skills
            </span>
            <span className="text-[#9E9E9E] text-sm">MIT License</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#9E9E9E] text-sm">
              Made by Heiberg Industries
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="UI Skills on GitHub"
              className="text-[#9E9E9E] hover:text-white transition-colors duration-150"
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

export default function FlatDesignPage() {
  return (
    <div className="min-h-screen bg-white font-[family:var(--font-inter)] text-[#212121] antialiased">
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
