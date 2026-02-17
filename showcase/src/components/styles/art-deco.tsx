"use client";

import React, { useState } from "react";

const GITHUB_URL = "https://github.com/Heiberg-Industries/ui-skills";

const ALL_STYLES = [
  { name: "Anti-Design", mood: "chaotic, punk, raw" },
  { name: "Art Deco", mood: "luxurious, geometric, ornamental" },
  { name: "Aurora", mood: "vibrant, ethereal, dynamic" },
  { name: "Bauhaus", mood: "geometric, bold, functional" },
  { name: "Bento Grid", mood: "modular, dense, organized" },
  { name: "Claymorphism", mood: "friendly, 3D, playful" },
  { name: "Corporate Modern", mood: "professional, trustworthy, clean" },
  { name: "Dark Mode Premium", mood: "sophisticated, cinematic, exclusive" },
  { name: "Flat Design", mood: "clean, bold, iconic" },
  { name: "Glassmorphism", mood: "futuristic, elegant, premium" },
  { name: "Japandi", mood: "calm, minimal, warm" },
  { name: "Material Design", mood: "systematic, accessible, reliable" },
  { name: "Minimalism", mood: "reduced, silent, essential" },
  { name: "Neubrutalism", mood: "bold, playful, rebellious" },
  { name: "Neumorphism", mood: "subtle, embedded, soft" },
  { name: "Organic", mood: "natural, flowing, warm" },
  { name: "Retro-Futurism", mood: "nostalgic, neon, sci-fi" },
  { name: "Skeuomorphism", mood: "familiar, tangible, crafted" },
  { name: "Swiss Design", mood: "precise, mathematical, objective" },
  { name: "Y2K Revival", mood: "metallic, bubbly, glossy" },
];

const FEATURES = [
  {
    title: "20 Curated Styles",
    description:
      "From Bauhaus to Y2K Revival — each style is a rich design direction file covering typography, color, spacing, and components.",
  },
  {
    title: "LLM-Native Guardrails",
    description:
      "Not pixel specs, but design direction. Define what kind of font, color, and spacing — the AI makes specific choices within the style's constraints.",
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

/* ─── Shared SVG Icons ─── */

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

function ChevronIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

/* ─── Decorative Elements ─── */

function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[#C9A84C]" />
      <div className="relative w-3 h-3 rotate-45 border border-[#C9A84C]" />
      <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[#C9A84C]" />
    </div>
  );
}

function FanDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-end justify-center gap-[2px]">
        {Array.from({ length: 11 }).map((_, i) => {
          const angle = -50 + i * 10;
          const height = 28 + Math.cos(((i - 5) * Math.PI) / 10) * 20;
          return (
            <div
              key={i}
              className="w-[2px] bg-gradient-to-t from-[#C9A84C] to-[#F4E4B0] origin-bottom"
              style={{
                height: `${height}px`,
                transform: `rotate(${angle}deg)`,
              }}
            />
          );
        })}
      </div>
      <div className="w-40 h-px bg-[#C9A84C] mt-2" />
    </div>
  );
}

function SunburstDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-[#C9A84C]" />
      <div className="mx-6 relative">
        <div
          className="w-[100px] h-[50px]"
          style={{
            background:
              "conic-gradient(from -90deg at 50% 100%, #C9A84C 0deg, transparent 30deg, transparent 60deg, #C9A84C 60deg, transparent 90deg, transparent 120deg, #C9A84C 120deg, transparent 150deg, transparent 180deg)",
            clipPath: "ellipse(50% 100% at 50% 100%)",
          }}
        />
      </div>
      <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-[#C9A84C]" />
    </div>
  );
}

function SteppedDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="h-px flex-1 max-w-[140px] bg-[#C9A84C]" />
      <div className="mx-2 flex items-end gap-[2px]">
        <div className="w-[3px] h-[6px] bg-[#C9A84C]" />
        <div className="w-[3px] h-[10px] bg-[#C9A84C]" />
        <div className="w-[3px] h-[14px] bg-[#C9A84C]" />
        <div className="w-[3px] h-[18px] bg-[#D4AF37]" />
        <div className="w-[3px] h-[14px] bg-[#C9A84C]" />
        <div className="w-[3px] h-[10px] bg-[#C9A84C]" />
        <div className="w-[3px] h-[6px] bg-[#C9A84C]" />
      </div>
      <div className="h-px flex-1 max-w-[140px] bg-[#C9A84C]" />
    </div>
  );
}

function CornerOrnaments({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Top-left */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C9A84C]" />
      {/* Top-right */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#C9A84C]" />
      {/* Bottom-left */}
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#C9A84C]" />
      {/* Bottom-right */}
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C9A84C]" />
      {children}
    </div>
  );
}

/* ─── Button ─── */

function DecoButton({
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
    "inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer select-none";
  const variants = {
    primary:
      "bg-gradient-to-r from-[#C9A84C] via-[#F4E4B0] to-[#C9A84C] text-[#0D0D0D] hover:brightness-110",
    secondary:
      "border border-[#C9A84C] text-[#C9A84C] bg-transparent hover:bg-[#C9A84C] hover:text-[#0D0D0D]",
  };

  const combinedClassName = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }
  return <button className={combinedClassName}>{children}</button>;
}

/* ─── Gold Text Helper ─── */

function GoldText({
  children,
  as: Tag = "span",
  className = "",
}: {
  children: React.ReactNode;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
}) {
  return (
    <Tag
      className={className}
      style={{
        background: "linear-gradient(135deg, #C9A84C 0%, #F4E4B0 50%, #C9A84C 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </Tag>
  );
}

/* ─── Navbar ─── */

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#C9A84C]/30 bg-[#0D0D0D]/95 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-[family:var(--font-playfair-display)] text-xl tracking-[0.15em] uppercase"
          style={{
            background: "linear-gradient(135deg, #C9A84C 0%, #F4E4B0 50%, #C9A84C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          UI Skills
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Styles", "Install"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#F5F0E8]/70 hover:text-[#C9A84C] text-xs uppercase tracking-[0.2em] font-[family:var(--font-inter)] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
          <a
            href={GITHUB_URL}
            className="text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors duration-300"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#C9A84C] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="square"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="square"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#C9A84C]/20 bg-[#0D0D0D]/98 px-6 py-6 flex flex-col items-center gap-6">
          {["Features", "Styles", "Install"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="text-[#F5F0E8]/70 hover:text-[#C9A84C] text-xs uppercase tracking-[0.2em] font-[family:var(--font-inter)] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
          <a
            href={GITHUB_URL}
            className="text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors duration-300"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero Section ─── */

function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 px-6 text-center overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 60px,
              #C9A84C 60px,
              #C9A84C 61px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              #C9A84C 60px,
              #C9A84C 61px
            )`,
          }}
        />
      </div>

      {/* Decorative top element */}
      <div className="relative z-10">
        <FanDivider className="mb-12" />

        <GoldText
          as="h1"
          className="font-[family:var(--font-playfair-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase tracking-[0.12em] leading-tight max-w-[900px] mx-auto"
        >
          Design direction for AI-generated UI
        </GoldText>

        <GoldDivider className="my-8 md:my-10" />

        <p className="font-[family:var(--font-inter)] text-[#F5F0E8]/70 text-base md:text-lg leading-relaxed max-w-[640px] mx-auto">
          20 style guardrail files that give LLMs the context to build tasteful,
          consistent interfaces.
        </p>

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <DecoButton href={GITHUB_URL} variant="primary">
            View on GitHub
          </DecoButton>
          <DecoButton href="#styles" variant="secondary">
            Browse Styles
          </DecoButton>
        </div>
      </div>
    </section>
  );
}

/* ─── Features Section ─── */

function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 md:py-28 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <GoldText
            as="h2"
            className="font-[family:var(--font-playfair-display)] text-3xl md:text-4xl font-light uppercase tracking-[0.15em]"
          >
            Features
          </GoldText>
          <SteppedDivider className="mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((feature, i) => (
            <CornerOrnaments key={i}>
              <div className="border border-[#C9A84C]/30 bg-[#111119] p-8 md:p-10 h-full">
                <h3 className="font-[family:var(--font-playfair-display)] text-[#C9A84C] text-lg md:text-xl uppercase tracking-[0.15em] mb-4">
                  {feature.title}
                </h3>
                <p className="font-[family:var(--font-inter)] text-[#F5F0E8]/60 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </CornerOrnaments>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Style Gallery ─── */

function StyleGallerySection() {
  return (
    <section id="styles" className="relative py-20 md:py-28 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <GoldText
            as="h2"
            className="font-[family:var(--font-playfair-display)] text-3xl md:text-4xl font-light uppercase tracking-[0.15em]"
          >
            All 20 Styles
          </GoldText>
          <SunburstDivider className="mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ALL_STYLES.map((style, i) => (
            <div
              key={i}
              className="group border border-[#C9A84C]/20 bg-[#111119] p-5 text-center hover:border-[#C9A84C]/60 hover:bg-[#16162A] transition-all duration-300"
            >
              <h3 className="font-[family:var(--font-playfair-display)] text-[#F5F0E8] text-sm uppercase tracking-[0.15em] mb-2 group-hover:text-[#C9A84C] transition-colors duration-300">
                {style.name}
              </h3>
              <p className="font-[family:var(--font-inter)] text-[#F5F0E8]/40 text-xs tracking-wider">
                {style.mood}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Installation Section ─── */

function InstallSection() {
  const [copied, setCopied] = useState(false);
  const installCommand =
    "git clone https://github.com/Heiberg-Industries/ui-skills.git .claude/skills/ui-skills";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="install" className="relative py-20 md:py-28 px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <GoldText
          as="h2"
          className="font-[family:var(--font-playfair-display)] text-3xl md:text-4xl font-light uppercase tracking-[0.15em]"
        >
          Get Started
        </GoldText>
        <FanDivider className="mt-6 mb-12" />

        <p className="font-[family:var(--font-inter)] text-[#F5F0E8]/60 text-sm md:text-base mb-8 max-w-[500px] mx-auto leading-relaxed">
          Clone the repository into your project and start building beautiful,
          style-consistent interfaces.
        </p>

        <CornerOrnaments className="inline-block w-full">
          <div className="border border-[#C9A84C]/30 bg-[#0A0A18] p-6 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <code className="font-mono text-[#C9A84C] text-xs sm:text-sm break-all text-left leading-relaxed">
                {installCommand}
              </code>
              <button
                onClick={handleCopy}
                className="shrink-0 text-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors duration-300 p-2"
                aria-label="Copy to clipboard"
              >
                {copied ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </CornerOrnaments>

        <div className="mt-10">
          <DecoButton href={GITHUB_URL} variant="secondary" className="gap-2">
            View on GitHub
            <ChevronIcon className="w-4 h-4" />
          </DecoButton>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer className="border-t border-[#C9A84C]/20 py-12 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <GoldDivider className="mb-8" />

        <a
          href="#"
          className="font-[family:var(--font-playfair-display)] text-base tracking-[0.2em] uppercase"
          style={{
            background: "linear-gradient(135deg, #C9A84C 0%, #F4E4B0 50%, #C9A84C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          UI Skills
        </a>

        <div className="mt-6 flex items-center justify-center gap-8">
          {["Features", "Styles", "Install"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#F5F0E8]/40 hover:text-[#C9A84C] text-xs uppercase tracking-[0.15em] font-[family:var(--font-inter)] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
          <a
            href={GITHUB_URL}
            className="text-[#F5F0E8]/40 hover:text-[#C9A84C] transition-colors duration-300"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
        </div>

        <p className="mt-8 font-[family:var(--font-inter)] text-[#F5F0E8]/25 text-xs tracking-wider">
          Open source under MIT License
        </p>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */

export default function ArtDecoPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F0E8]">
      <Navbar />

      <main>
        <HeroSection />

        {/* Decorative section divider */}
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
        </div>

        <FeaturesSection />

        <div className="max-w-[1100px] mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
        </div>

        <StyleGallerySection />

        <div className="max-w-[1100px] mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
        </div>

        <InstallSection />
      </main>

      <Footer />
    </div>
  );
}
