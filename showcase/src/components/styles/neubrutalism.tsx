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

const CARD_COLORS = [
  "bg-[#CCFF00]",
  "bg-[#FFD6E0]",
  "bg-[#BDE0FE]",
  "bg-white",
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

function NeuButton({
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
    "inline-flex items-center justify-center px-6 py-3 font-[family:var(--font-space-grotesk)] font-bold text-lg border-[3px] border-black rounded-xl transition-all duration-100 cursor-pointer select-none";
  const variants = {
    primary:
      "bg-[#3B82F6] text-black shadow-[6px_6px_0px_#000] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]",
    secondary:
      "bg-white text-black shadow-[6px_6px_0px_#000] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]",
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

function StickerBadge({
  children,
  className = "",
  color = "bg-[#CCFF00]",
  rotate = "rotate-[-3deg]",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
  rotate?: string;
}) {
  return (
    <span
      className={`inline-block px-4 py-1.5 font-[family:var(--font-space-mono)] text-sm font-bold uppercase border-[3px] border-black rounded-xl shadow-[4px_4px_0px_#000] ${color} ${rotate} ${className}`}
    >
      {children}
    </span>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="font-[family:var(--font-space-grotesk)] text-2xl font-black text-black tracking-tight"
          >
            UI Skills
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="font-[family:var(--font-space-grotesk)] font-bold text-black hover:text-[#3B82F6] transition-colors duration-100"
            >
              Features
            </a>
            <a
              href="#styles"
              className="font-[family:var(--font-space-grotesk)] font-bold text-black hover:text-[#3B82F6] transition-colors duration-100"
            >
              Styles
            </a>
            <a
              href="#install"
              className="font-[family:var(--font-space-grotesk)] font-bold text-black hover:text-[#3B82F6] transition-colors duration-100"
            >
              Install
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-[3px] border-black rounded-xl shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-100 bg-white"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 border-[3px] border-black rounded-xl bg-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-[3px] bg-black rounded transition-all duration-100 ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`}
              />
              <span
                className={`block h-[3px] bg-black rounded transition-all duration-100 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[3px] bg-black rounded transition-all duration-100 ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t-[3px] border-black pt-4">
            <a
              href="#features"
              className="font-[family:var(--font-space-grotesk)] font-bold text-black text-lg"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </a>
            <a
              href="#styles"
              className="font-[family:var(--font-space-grotesk)] font-bold text-black text-lg"
              onClick={() => setMobileOpen(false)}
            >
              Styles
            </a>
            <a
              href="#install"
              className="font-[family:var(--font-space-grotesk)] font-bold text-black text-lg"
              onClick={() => setMobileOpen(false)}
            >
              Install
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-[family:var(--font-space-grotesk)] font-bold text-black text-lg"
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
    <section className="relative bg-[#FFD6E0] border-b-[3px] border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="relative z-10 max-w-4xl">
          {/* Floating sticker */}
          <StickerBadge
            className="mb-6 inline-block"
            color="bg-[#CCFF00]"
            rotate="rotate-[-2deg]"
          >
            20 Styles Included
          </StickerBadge>

          <h1 className="font-[family:var(--font-space-grotesk)] text-5xl sm:text-6xl lg:text-8xl font-black text-black leading-[0.95] tracking-tight mb-6">
            Design direction for AI-generated UI
          </h1>

          <p className="font-[family:var(--font-inter)] text-lg sm:text-xl lg:text-2xl text-black max-w-2xl mb-10 leading-relaxed">
            20 style guardrail files that give LLMs the context to build
            tasteful, consistent interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <NeuButton href={GITHUB_URL} variant="primary">
              View on GitHub
            </NeuButton>
            <NeuButton href="#styles" variant="secondary">
              Browse styles
            </NeuButton>
          </div>
        </div>

        {/* Decorative floating stickers */}
        <div className="absolute top-8 right-8 sm:top-12 sm:right-16 hidden sm:block">
          <StickerBadge
            color="bg-white"
            rotate="rotate-[6deg]"
            className="text-base"
          >
            MIT License
          </StickerBadge>
        </div>
        <div className="absolute bottom-12 right-12 sm:bottom-20 sm:right-32 hidden lg:block">
          <StickerBadge
            color="bg-[#E0C3FC]"
            rotate="rotate-[-4deg]"
            className="text-base"
          >
            LLM-Native
          </StickerBadge>
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
      color: CARD_COLORS[0],
    },
    {
      title: "LLM-Native Guardrails",
      description:
        "Not pixel specs, but design direction. Define what kind of font, color, and spacing \u2014 the AI makes specific choices within the style\u2019s constraints.",
      color: CARD_COLORS[1],
    },
    {
      title: "Drop-in Skill",
      description:
        "Works with Claude Code, Cursor, Codex, Copilot, and more. One command to install, then just ask for UI.",
      color: CARD_COLORS[2],
    },
    {
      title: "Open Source",
      description:
        "MIT licensed and community-driven. Add your own styles, improve existing ones, or use them as-is.",
      color: CARD_COLORS[3],
    },
  ];

  return (
    <section id="features" className="bg-white border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center mb-14">
          <StickerBadge
            color="bg-[#FFD6E0]"
            rotate="rotate-[2deg]"
            className="mb-5"
          >
            Why UI Skills?
          </StickerBadge>
          <h2 className="font-[family:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight">
            Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`${feature.color} border-[3px] border-black rounded-xl shadow-[6px_6px_0px_#000] p-8 sm:p-10 transition-all duration-100 hover:shadow-[3px_3px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] ${i % 3 === 0 ? "rotate-[0.5deg]" : i % 3 === 1 ? "rotate-[-0.5deg]" : ""}`}
            >
              <h3 className="font-[family:var(--font-space-grotesk)] text-2xl sm:text-3xl font-black text-black mb-4">
                {feature.title}
              </h3>
              <p className="font-[family:var(--font-inter)] text-base sm:text-lg text-black leading-relaxed">
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
  const tagColors = [
    "bg-[#CCFF00]",
    "bg-[#FFD6E0]",
    "bg-[#BDE0FE]",
    "bg-[#E0C3FC]",
    "bg-[#FFE5B4]",
    "bg-white",
  ];

  return (
    <section id="styles" className="bg-[#CCFF00] border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center mb-14">
          <StickerBadge
            color="bg-white"
            rotate="rotate-[-2deg]"
            className="mb-5"
          >
            The Collection
          </StickerBadge>
          <h2 className="font-[family:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight">
            All 20 Styles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {ALL_STYLES.map((style, i) => (
            <div
              key={style.name}
              className={`bg-white border-[3px] border-black rounded-xl shadow-[4px_4px_0px_#000] p-5 transition-all duration-100 hover:shadow-none hover:translate-x-1 hover:translate-y-1`}
            >
              <h3 className="font-[family:var(--font-space-grotesk)] text-lg font-black text-black mb-2 leading-snug">
                {style.name}
              </h3>
              <span
                className={`inline-block px-3 py-1 font-[family:var(--font-space-mono)] text-xs font-bold border-[2px] border-black rounded-lg ${tagColors[i % tagColors.length]}`}
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
    <section id="install" className="bg-[#FFD6E0] border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center mb-14">
          <StickerBadge
            color="bg-[#CCFF00]"
            rotate="rotate-[3deg]"
            className="mb-5"
          >
            One Command
          </StickerBadge>
          <h2 className="font-[family:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight">
            Get Started
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black border-[3px] border-black rounded-xl shadow-[8px_8px_0px_#3B82F6] p-6 sm:p-8 relative">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/20" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/20" />
              <span className="w-3 h-3 rounded-full bg-[#28C840] border border-black/20" />
              <span className="font-[family:var(--font-space-mono)] text-xs text-gray-400 ml-2">
                terminal
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-[family:var(--font-space-mono)] text-[#CCFF00] text-sm sm:text-base select-none shrink-0">
                $
              </span>
              <code className="font-[family:var(--font-space-mono)] text-white text-sm sm:text-base break-all leading-relaxed">
                {command}
              </code>
            </div>

            <button
              onClick={handleCopy}
              className="absolute top-6 right-6 sm:top-8 sm:right-8 px-4 py-2 bg-[#CCFF00] text-black font-[family:var(--font-space-mono)] font-bold text-sm border-[2px] border-white/30 rounded-lg hover:bg-white transition-colors duration-100 cursor-pointer"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <p className="font-[family:var(--font-inter)] text-center text-black text-lg mt-8">
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
    <footer className="bg-black text-white border-t-[3px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span className="font-[family:var(--font-space-grotesk)] text-xl font-black">
              UI Skills
            </span>
            <span className="font-[family:var(--font-space-mono)] text-sm text-gray-400">
              MIT License
            </span>
            <span className="font-[family:var(--font-inter)] text-sm text-gray-400">
              Made by{" "}
              <span className="text-white font-semibold">
                Heiberg Industries
              </span>
            </span>
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-[3px] border-white rounded-xl shadow-[4px_4px_0px_#CCFF00] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-100"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function NeubrutalismPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <Features />
      <StyleGallery />
      <Installation />
      <Footer />
    </div>
  );
}
