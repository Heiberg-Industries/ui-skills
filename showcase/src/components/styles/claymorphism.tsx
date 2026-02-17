"use client";

import React, { useState } from "react";

const GITHUB_URL = "https://github.com/Heiberg-Industries/ui-skills";

const ALL_STYLES = [
  { name: "Art Deco", mood: "Luxurious, geometric, glamorous" },
  { name: "Aurora / Gradient", mood: "Dreamy, vibrant, dynamic" },
  { name: "Bauhaus", mood: "Rational, structured, confident" },
  { name: "Bento Grid", mood: "Organized, modular, polished" },
  { name: "Corporate Modern", mood: "Professional, trustworthy, clean" },
  { name: "Dark Mode Premium", mood: "Sophisticated, immersive, cinematic" },
  { name: "Flat Design", mood: "Clean, efficient, approachable" },
  { name: "Glassmorphism", mood: "Futuristic, elegant, premium" },
  { name: "Japandi", mood: "Serene, balanced, warm minimalism" },
  { name: "Material Design", mood: "Systematic, reliable, structured" },
  { name: "Minimalism", mood: "Calm, focused, refined" },
  { name: "Neubrutalism", mood: "Bold, playful, rebellious" },
  { name: "Neumorphism", mood: "Soft, tactile, subtle" },
  { name: "Retro Futurism", mood: "Nostalgic, optimistic, sci-fi" },
  { name: "Anti-Design", mood: "Chaotic, experimental, punk" },
  { name: "Claymorphism", mood: "Friendly, 3D, approachable" },
  { name: "Organic / Biomorphic", mood: "Natural, flowing, warm" },
  { name: "Skeuomorphism", mood: "Familiar, warm, detailed" },
  { name: "Swiss / International", mood: "Precise, gridded, typographic" },
  { name: "Y2K Revival", mood: "Nostalgic, metallic, bubbly" },
];

const CLAY_SHADOW =
  "shadow-[0_8px_20px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04),inset_0_-2px_6px_rgba(0,0,0,0.04),inset_0_4px_8px_rgba(255,255,255,0.6)]";

const CLAY_SHADOW_HOVER =
  "hover:shadow-[0_12px_28px_rgba(0,0,0,0.1),0_4px_10px_rgba(0,0,0,0.06),inset_0_-2px_6px_rgba(0,0,0,0.04),inset_0_4px_8px_rgba(255,255,255,0.65)]";

/* Pastel palette for gallery cards — rotates through lavender, blush, mint, yellow, blue */
const GALLERY_GRADIENTS = [
  "from-[#E8DEFF] to-[#D8CCFF]",
  "from-[#FFE0E6] to-[#FFD0D8]",
  "from-[#D0F5E0] to-[#B8EDD0]",
  "from-[#FFF3D6] to-[#FFE9B8]",
  "from-[#D6ECFF] to-[#C0DEFF]",
];

function GitHubIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ClayButton({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center px-7 py-3.5 font-[family:var(--font-nunito)] font-semibold text-base rounded-2xl cursor-pointer select-none transition-all duration-200";
  const spring = "[transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]";
  const variants = {
    primary: `bg-gradient-to-br from-[#9D85FF] to-[#8B6FFF] text-white shadow-[0_6px_16px_rgba(139,111,255,0.3),inset_0_3px_6px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(139,111,255,0.35),inset_0_3px_6px_rgba(255,255,255,0.4)] active:translate-y-px active:scale-y-[0.97] active:shadow-[0_4px_10px_rgba(139,111,255,0.25),inset_0_2px_4px_rgba(255,255,255,0.3)]`,
    secondary: `bg-gradient-to-br from-[#FFFFFF] to-[#F0EBFF] text-[#2D2D3F] shadow-[0_6px_16px_rgba(0,0,0,0.08),inset_0_3px_6px_rgba(255,255,255,0.6)] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.1),inset_0_3px_6px_rgba(255,255,255,0.7)] active:translate-y-px active:scale-y-[0.97] active:shadow-[0_4px_10px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.5)]`,
  };

  const combinedClassName = `${base} ${spring} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }
  return <button className={combinedClassName}>{children}</button>;
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#F0EBFF] to-[#EDE7FF]/95 backdrop-blur-md">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <a
            href="#"
            className="font-[family:var(--font-nunito)] text-2xl font-bold text-[#2D2D3F] tracking-tight"
          >
            UI Skills
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="font-[family:var(--font-nunito)] font-semibold text-[#2D2D3F] hover:text-[#8B6FFF] transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#styles"
              className="font-[family:var(--font-nunito)] font-semibold text-[#2D2D3F] hover:text-[#8B6FFF] transition-colors duration-200"
            >
              Styles
            </a>
            <a
              href="#install"
              className="font-[family:var(--font-nunito)] font-semibold text-[#2D2D3F] hover:text-[#8B6FFF] transition-colors duration-200"
            >
              Install
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-2xl bg-gradient-to-br from-[#FFFFFF] to-[#F0EBFF] ${CLAY_SHADOW} hover:-translate-y-0.5 ${CLAY_SHADOW_HOVER} transition-all duration-200 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]`}
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5 text-[#2D2D3F]" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2.5 rounded-2xl bg-gradient-to-br from-[#FFFFFF] to-[#F0EBFF] ${CLAY_SHADOW} cursor-pointer`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-[2.5px] bg-[#2D2D3F] rounded-full transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`}
              />
              <span
                className={`block h-[2.5px] bg-[#2D2D3F] rounded-full transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[2.5px] bg-[#2D2D3F] rounded-full transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className={`md:hidden pb-6 flex flex-col gap-2 pt-2`}
          >
            {[
              { label: "Features", href: "#features" },
              { label: "Styles", href: "#styles" },
              { label: "Install", href: "#install" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-[family:var(--font-nunito)] font-semibold text-[#2D2D3F] text-lg px-5 py-3 rounded-2xl bg-gradient-to-br from-[#FFFFFF] to-[#F0EBFF] ${CLAY_SHADOW} transition-all duration-200 hover:-translate-y-0.5`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 font-[family:var(--font-nunito)] font-semibold text-[#2D2D3F] text-lg px-5 py-3 rounded-2xl bg-gradient-to-br from-[#FFFFFF] to-[#F0EBFF] ${CLAY_SHADOW} transition-all duration-200 hover:-translate-y-0.5`}
              onClick={() => setMobileOpen(false)}
            >
              <GitHubIcon className="w-5 h-5" /> GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F0EBFF]">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#DDD5FF] rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#FFD6E0] rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#B5F0D0] rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Floating clay pill badge */}
          <span
            className={`inline-block px-5 py-2 mb-8 font-[family:var(--font-nunito)] text-sm font-semibold text-[#6B52CC] bg-gradient-to-br from-[#FFFFFF] to-[#E8DEFF] rounded-full ${CLAY_SHADOW}`}
          >
            20 Styles Included
          </span>

          <h1 className="font-[family:var(--font-nunito)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2D3F] leading-[1.1] tracking-tight mb-6">
            Design direction for AI-generated UI
          </h1>

          <p className="font-[family:var(--font-nunito)] text-lg sm:text-xl text-[#7A7A8E] max-w-2xl mx-auto mb-10 leading-relaxed">
            20 style guardrail files that give LLMs the context to build
            tasteful, consistent interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ClayButton href={GITHUB_URL} variant="primary">
              View on GitHub
            </ClayButton>
            <ClayButton href="#styles" variant="secondary">
              Browse styles
            </ClayButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "20 Curated Styles",
      description:
        "From Bauhaus to Y2K Revival \u2014 each style is a rich design direction file covering typography, color, spacing, and components.",
      gradient: "from-[#E8DEFF] to-[#D0C0FF]",
      iconBg: "from-[#D0C0FF] to-[#BDA8FF]",
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      title: "LLM-Native Guardrails",
      description:
        "Not pixel specs, but design direction. Define what kind of font, color, and spacing \u2014 the AI makes specific choices within the style\u2019s constraints.",
      gradient: "from-[#FFE0E6] to-[#FFCCD5]",
      iconBg: "from-[#FFCCD5] to-[#FFB3C0]",
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Drop-in Skill",
      description:
        "Works with Claude Code, Cursor, Codex, Copilot, and more. One command to install, then just ask for UI.",
      gradient: "from-[#D0F5E0] to-[#B5F0D0]",
      iconBg: "from-[#B5F0D0] to-[#95E8B8]",
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
    },
    {
      title: "Open Source",
      description:
        "MIT licensed and community-driven. Add your own styles, improve existing ones, or use them as-is.",
      gradient: "from-[#FFF3D6] to-[#FFE9B8]",
      iconBg: "from-[#FFE9B8] to-[#FFDFA0]",
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="bg-[#F7F3FF]">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="text-center mb-16">
          <span
            className={`inline-block px-5 py-2 mb-6 font-[family:var(--font-nunito)] text-sm font-semibold text-[#CC527A] bg-gradient-to-br from-[#FFFFFF] to-[#FFE0E6] rounded-full ${CLAY_SHADOW}`}
          >
            Why UI Skills?
          </span>
          <h2 className="font-[family:var(--font-nunito)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D3F] tracking-tight">
            Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`bg-gradient-to-br ${feature.gradient} rounded-3xl p-8 sm:p-10 ${CLAY_SHADOW} ${CLAY_SHADOW_HOVER} hover:-translate-y-1 transition-all duration-200 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]`}
            >
              {/* Icon container — clay-treated circle */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.iconBg} flex items-center justify-center mb-5 shadow-[0_4px_12px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.4)]`}
              >
                {feature.icon}
              </div>

              <h3 className="font-[family:var(--font-nunito)] text-xl sm:text-2xl font-bold text-[#2D2D3F] mb-3">
                {feature.title}
              </h3>
              <p className="font-[family:var(--font-nunito)] text-base text-[#5A5A70] leading-relaxed">
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
    <section id="styles" className="bg-[#F0EBFF]">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="text-center mb-16">
          <span
            className={`inline-block px-5 py-2 mb-6 font-[family:var(--font-nunito)] text-sm font-semibold text-[#4A8C65] bg-gradient-to-br from-[#FFFFFF] to-[#D0F5E0] rounded-full ${CLAY_SHADOW}`}
          >
            The Collection
          </span>
          <h2 className="font-[family:var(--font-nunito)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D3F] tracking-tight">
            All 20 Styles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ALL_STYLES.map((style, i) => (
            <div
              key={style.name}
              className={`bg-gradient-to-br ${GALLERY_GRADIENTS[i % GALLERY_GRADIENTS.length]} rounded-3xl p-6 ${CLAY_SHADOW} ${CLAY_SHADOW_HOVER} hover:-translate-y-1 transition-all duration-200 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]`}
            >
              <h3 className="font-[family:var(--font-nunito)] text-base font-bold text-[#2D2D3F] mb-2.5 leading-snug">
                {style.name}
              </h3>
              <span
                className={`inline-block px-3 py-1 font-[family:var(--font-nunito)] text-xs font-medium text-[#5A5A70] bg-white/60 rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.04)]`}
              >
                {style.mood}
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
    <section id="install" className="bg-[#F7F3FF]">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="text-center mb-16">
          <span
            className={`inline-block px-5 py-2 mb-6 font-[family:var(--font-nunito)] text-sm font-semibold text-[#6B52CC] bg-gradient-to-br from-[#FFFFFF] to-[#E8DEFF] rounded-full ${CLAY_SHADOW}`}
          >
            One Command
          </span>
          <h2 className="font-[family:var(--font-nunito)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D3F] tracking-tight">
            Get Started
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Terminal card with clay treatment */}
          <div
            className={`bg-gradient-to-br from-[#2D2D3F] to-[#1E1E2E] rounded-3xl p-6 sm:p-8 relative shadow-[0_12px_32px_rgba(0,0,0,0.15),0_4px_10px_rgba(0,0,0,0.08),inset_0_1px_0px_rgba(255,255,255,0.06)]`}
          >
            {/* Window dots */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 rounded-full bg-[#FF6B6B] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]" />
              <span className="w-3 h-3 rounded-full bg-[#FFD93D] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]" />
              <span className="w-3 h-3 rounded-full bg-[#6BCB77] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]" />
              <span className="font-[family:var(--font-nunito)] text-xs text-[#7A7A8E] ml-2">
                terminal
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-mono text-[#9D85FF] text-sm sm:text-base select-none shrink-0">
                $
              </span>
              <code className="font-mono text-white/90 text-sm sm:text-base break-all leading-relaxed">
                {command}
              </code>
            </div>

            <button
              onClick={handleCopy}
              className={`absolute top-6 right-6 sm:top-8 sm:right-8 px-4 py-2 font-[family:var(--font-nunito)] font-semibold text-sm rounded-xl bg-gradient-to-br from-[#9D85FF] to-[#8B6FFF] text-white shadow-[0_4px_12px_rgba(139,111,255,0.3),inset_0_2px_4px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(139,111,255,0.35),inset_0_2px_4px_rgba(255,255,255,0.25)] active:translate-y-px transition-all duration-200 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <p className="font-[family:var(--font-nunito)] text-center text-[#7A7A8E] text-lg mt-8 leading-relaxed">
            Then just ask your AI to build UI. It will read the style files and
            apply the guardrails automatically.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#E8DEFF] to-[#D8CCFF]">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span className="font-[family:var(--font-nunito)] text-xl font-bold text-[#2D2D3F]">
              UI Skills
            </span>
            <span className="font-[family:var(--font-nunito)] text-sm text-[#7A7A8E]">
              MIT License
            </span>
            <span className="font-[family:var(--font-nunito)] text-sm text-[#7A7A8E]">
              Made by{" "}
              <span className="text-[#2D2D3F] font-semibold">
                Heiberg Industries
              </span>
            </span>
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-2xl bg-gradient-to-br from-[#FFFFFF] to-[#F0EBFF] ${CLAY_SHADOW} hover:-translate-y-0.5 ${CLAY_SHADOW_HOVER} transition-all duration-200 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]`}
            aria-label="GitHub"
          >
            <GitHubIcon className="w-6 h-6 text-[#2D2D3F]" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function ClaymorphismPage() {
  return (
    <div className="min-h-screen bg-[#F0EBFF] text-[#2D2D3F]">
      <Navbar />
      <Hero />
      <Features />
      <StyleGallery />
      <Installation />
      <Footer />
    </div>
  );
}
