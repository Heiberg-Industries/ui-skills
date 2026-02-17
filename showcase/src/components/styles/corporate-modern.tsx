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
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

// ─── Feature icons ──────────────────────────────────────────────────────────

function PaletteIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25C9.996 3 10.5 3.504 10.5 4.125v5.25c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 9.375V4.125"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 7.5h.008v.008H9.5V7.5zm0 3h.008v.008H9.5v-.008zm3-3h.008v.008H12.5V7.5zm3 0h.008v.008H15.5V7.5zm0 3h.008v.008H15.5v-.008zm3-3h.008v.008H18.5V7.5z"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
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
    icon: <PaletteIcon />,
    title: "20 Curated Styles",
    description:
      "From Bauhaus to Y2K Revival \u2014 each style is a rich design direction file covering typography, color, spacing, and components.",
  },
  {
    icon: <ShieldIcon />,
    title: "LLM-Native Guardrails",
    description:
      "Not pixel specs, but design direction. Define what kind of font, color, and spacing \u2014 the AI makes specific choices within the style\u2019s constraints.",
  },
  {
    icon: <BoltIcon />,
    title: "Drop-in Skill",
    description:
      "Works with Claude Code, Cursor, Codex, Copilot, and more. One command to install, then just ask for UI.",
  },
  {
    icon: <HeartIcon />,
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
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-gray-900 font-[family:var(--font-inter)] font-semibold text-lg tracking-tight"
          >
            UI Skills
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-150"
            >
              <GitHubIcon />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors duration-150"
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
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors duration-150"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-[family:var(--font-inter)] text-4xl sm:text-5xl lg:text-[56px] font-bold text-gray-900 leading-tight tracking-tight">
          Design direction for
          <br className="hidden sm:block" /> AI-generated UI
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed font-[family:var(--font-inter)]">
          20 style guardrail files that give LLMs the context to build tasteful,
          consistent interfaces.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-blue-600 text-white rounded-lg px-6 py-3 text-sm font-medium hover:bg-blue-700 transition-colors duration-150 w-full sm:w-auto"
          >
            View on GitHub
          </a>
          <a
            href="#styles"
            className="inline-flex items-center justify-center border border-blue-600 text-blue-600 rounded-lg px-6 py-3 text-sm font-medium hover:bg-blue-50 transition-colors duration-150 w-full sm:w-auto"
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
    <div className="bg-white rounded-xl p-6 lg:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.05)] transition-shadow duration-150">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="font-[family:var(--font-inter)] text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family:var(--font-inter)] text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Everything you need
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Guardrails, not specs. Style direction that lets AI make great design
            choices.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-200 hover:shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] transition-all duration-150">
      <h3 className="font-[family:var(--font-inter)] text-sm font-semibold text-gray-900 mb-3">
        {name}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family:var(--font-inter)] text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            All 20 Styles
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Each style is a complete design direction file with typography,
            color, spacing, components, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
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
    <section id="install" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family:var(--font-inter)] text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Get Started
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Clone the repository into your project&apos;s skills directory and
            start building with style.
          </p>
          <div className="mt-10 relative">
            <div className="bg-gray-900 rounded-xl p-5 text-left overflow-x-auto">
              <code className="text-sm text-gray-100 font-mono whitespace-pre">
                {command}
              </code>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xs font-medium bg-gray-800 hover:bg-gray-700 rounded-md px-3 py-1.5 transition-colors duration-150"
              aria-label="Copy install command to clipboard"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
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
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-[family:var(--font-inter)] font-semibold text-gray-900 text-sm">
              UI Skills
            </span>
            <span className="text-gray-400 text-sm">MIT License</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-sm">
              Made by Heiberg Industries
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="UI Skills on GitHub"
              className="text-gray-400 hover:text-gray-900 transition-colors duration-150"
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

export default function CorporateModernPage() {
  return (
    <div className="min-h-screen bg-white font-[family:var(--font-inter)] text-gray-900 antialiased">
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
