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

// ─── Neumorphism style constants ────────────────────────────────────────────

const NM_BG = "bg-[#E0E5EC]";
const NM_RAISED =
  "shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.8)]";
const NM_RAISED_SM =
  "shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.8)]";
const NM_PRESSED =
  "shadow-[inset_6px_6px_12px_rgba(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]";
const NM_PRESSED_SM =
  "shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]";

// ─── Section components ─────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`${NM_BG} sticky top-0 z-50`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className={`${NM_BG} ${NM_RAISED_SM} rounded-xl px-5 py-2.5 text-[#2D3436] font-[family:var(--font-inter)] font-semibold text-lg tracking-tight transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(163,177,198,0.6),-3px_-3px_6px_rgba(255,255,255,0.8)] active:${NM_PRESSED_SM}`}
          >
            UI Skills
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${NM_BG} ${NM_RAISED_SM} rounded-xl px-5 py-2.5 text-[#768A96] hover:text-[#2D3436] text-sm font-medium transition-all duration-200 hover:shadow-[3px_3px_6px_rgba(163,177,198,0.6),-3px_-3px_6px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className={`${NM_BG} ${NM_RAISED_SM} rounded-xl p-2.5 text-[#768A96] hover:text-[#2D3436] transition-all duration-200 hover:shadow-[3px_3px_6px_rgba(163,177,198,0.6),-3px_-3px_6px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]`}
            >
              <GitHubIcon />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`md:hidden ${NM_BG} ${NM_RAISED_SM} rounded-xl p-2.5 text-[#768A96] hover:text-[#2D3436] transition-all duration-200 active:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]`}
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
        <div className={`md:hidden ${NM_BG} pb-6`}>
          <div className="px-6 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block ${NM_BG} ${NM_RAISED_SM} rounded-xl px-5 py-3 text-[#768A96] hover:text-[#2D3436] text-sm font-medium transition-all duration-200 active:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 ${NM_BG} ${NM_RAISED_SM} rounded-xl px-5 py-3 text-[#768A96] hover:text-[#2D3436] text-sm font-medium transition-all duration-200 active:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]`}
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
    <section className={`${NM_BG} py-24 lg:py-36`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <h1 className="font-[family:var(--font-inter)] text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#2D3436] leading-tight tracking-tight">
          Design direction for
          <br className="hidden sm:block" /> AI-generated UI
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-[#768A96] leading-relaxed font-[family:var(--font-inter)] font-normal">
          20 style guardrail files that give LLMs the context to build tasteful,
          consistent interfaces.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center ${NM_BG} rounded-2xl px-8 py-4 text-sm font-medium text-white transition-all duration-200 w-full sm:w-auto shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.8)] active:shadow-[inset_6px_6px_12px_rgba(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]`}
            style={{
              background: "linear-gradient(145deg, #7B73FF, #5B53DF)",
            }}
          >
            View on GitHub
          </a>
          <a
            href="#styles"
            className={`inline-flex items-center justify-center ${NM_BG} ${NM_RAISED} rounded-2xl px-8 py-4 text-sm font-medium text-[#6C63FF] transition-all duration-200 w-full sm:w-auto hover:shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.8)] active:shadow-[inset_6px_6px_12px_rgba(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]`}
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
    <div
      className={`${NM_BG} ${NM_RAISED} rounded-2xl p-7 lg:p-8 transition-shadow duration-200 hover:shadow-[10px_10px_20px_rgba(163,177,198,0.6),-10px_-10px_20px_rgba(255,255,255,0.8)]`}
    >
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${NM_BG} ${NM_PRESSED_SM} text-[#6C63FF] mb-5`}
      >
        {icon}
      </div>
      <h3 className="font-[family:var(--font-inter)] text-base font-semibold text-[#2D3436] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#768A96] leading-relaxed font-[family:var(--font-inter)]">
        {description}
      </p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className={`${NM_BG} py-24 lg:py-32`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-[family:var(--font-inter)] text-2xl sm:text-3xl font-semibold text-[#2D3436] tracking-tight">
            Everything you need
          </h2>
          <p className="mt-4 text-[#768A96] text-base sm:text-lg max-w-xl mx-auto font-[family:var(--font-inter)]">
            Guardrails, not specs. Style direction that lets AI make great
            design choices.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
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
    <div
      className={`${NM_BG} ${NM_RAISED_SM} rounded-2xl p-5 transition-shadow duration-200 hover:shadow-[7px_7px_14px_rgba(163,177,198,0.6),-7px_-7px_14px_rgba(255,255,255,0.8)]`}
    >
      <h3 className="font-[family:var(--font-inter)] text-sm font-semibold text-[#2D3436] mb-3">
        {name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`inline-block ${NM_BG} ${NM_PRESSED_SM} text-[#768A96] text-xs font-medium px-3 py-1 rounded-xl`}
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
    <section id="styles" className={`${NM_BG} py-24 lg:py-32`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-[family:var(--font-inter)] text-2xl sm:text-3xl font-semibold text-[#2D3436] tracking-tight">
            All 20 Styles
          </h2>
          <p className="mt-4 text-[#768A96] text-base sm:text-lg max-w-xl mx-auto font-[family:var(--font-inter)]">
            Each style is a complete design direction file with typography,
            color, spacing, components, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
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
    <section id="install" className={`${NM_BG} py-24 lg:py-32`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family:var(--font-inter)] text-2xl sm:text-3xl font-semibold text-[#2D3436] tracking-tight">
            Get Started
          </h2>
          <p className="mt-4 text-[#768A96] text-base sm:text-lg font-[family:var(--font-inter)]">
            Clone the repository into your project&apos;s skills directory and
            start building with style.
          </p>
          <div className="mt-10 relative">
            <div
              className={`${NM_BG} ${NM_PRESSED} rounded-2xl p-6 text-left overflow-x-auto`}
            >
              <code className="text-sm text-[#2D3436] font-mono whitespace-pre">
                {command}
              </code>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className={`absolute top-4 right-4 ${NM_BG} ${NM_RAISED_SM} rounded-xl px-4 py-2 text-xs font-medium text-[#768A96] hover:text-[#2D3436] transition-all duration-200 active:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]`}
              aria-label="Copy install command to clipboard"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="mt-8 text-sm text-[#768A96] font-[family:var(--font-inter)]">
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
    <footer className={NM_BG}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
        <div
          className={`${NM_BG} ${NM_RAISED} rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6`}
        >
          <div className="flex items-center gap-6">
            <span className="font-[family:var(--font-inter)] font-semibold text-[#2D3436] text-sm">
              UI Skills
            </span>
            <span className="text-[#768A96] text-sm">MIT License</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#768A96] text-sm font-[family:var(--font-inter)]">
              Made by Heiberg Industries
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="UI Skills on GitHub"
              className={`${NM_BG} ${NM_RAISED_SM} rounded-xl p-2.5 text-[#768A96] hover:text-[#2D3436] transition-all duration-200 active:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]`}
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

export default function NeumorphismPage() {
  return (
    <div
      className={`min-h-screen ${NM_BG} font-[family:var(--font-inter)] text-[#2D3436] antialiased`}
    >
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
