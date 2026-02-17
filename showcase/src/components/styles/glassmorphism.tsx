"use client";

import { useState } from "react";

/* ─── Style Gallery Data ─── */
const allStyles = [
  { name: "Art Deco", mood: "Luxurious, geometric, glamorous" },
  { name: "Aurora", mood: "Dreamy, vibrant, dynamic" },
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
  { name: "Claymorphism", mood: "Friendly, 3D, soft" },
  { name: "Organic", mood: "Natural, flowing, warm" },
  { name: "Skeuomorphism", mood: "Familiar, warm, detailed" },
  { name: "Swiss", mood: "Precise, gridded, typographic" },
  { name: "Y2K Revival", mood: "Nostalgic, metallic, bubbly" },
];

/* ─── Feature Cards Data ─── */
const features = [
  {
    title: "20 Curated Styles",
    description:
      "From Bauhaus to Y2K Revival \u2014 each style is a rich design direction file covering typography, color, spacing, and components.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "LLM-Native Guardrails",
    description:
      "Not pixel specs, but design direction. Define what kind of font, color, and spacing \u2014 the AI makes specific choices within the style\u2019s constraints.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Drop-in Skill",
    description:
      "Works with Claude Code, Cursor, Codex, Copilot, and more. One command to install, then just ask for UI.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 17l6-6-6-6" />
        <path d="M12 19h8" />
      </svg>
    ),
  },
  {
    title: "Open Source",
    description:
      "MIT licensed and community-driven. Add your own styles, improve existing ones, or use them as-is.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

/* ─── GitHub Icon ─── */
function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

/* ─── Glass Card Component ─── */
function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`backdrop-blur-2xl bg-white/[0.08] border border-white/[0.15] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Main Page Component ─── */
export default function GlassmorphismPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a0533] via-[#0f172a] to-[#0c0a1a] overflow-hidden font-[family:var(--font-inter)]">
      {/* ─── Background Gradient Blobs ─── */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        {/* Blob 1 — large violet, top-left */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-violet-600/30 blur-[120px]" />
        {/* Blob 2 — fuchsia, top-right */}
        <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] rounded-full bg-fuchsia-500/25 blur-[120px]" />
        {/* Blob 3 — blue, center-left */}
        <div className="absolute top-[40%] -left-20 w-[450px] h-[450px] rounded-full bg-blue-600/20 blur-[100px]" />
        {/* Blob 4 — cyan, center-right */}
        <div className="absolute top-[55%] right-[5%] w-[400px] h-[400px] rounded-full bg-cyan-400/20 blur-[100px]" />
        {/* Blob 5 — purple, bottom */}
        <div className="absolute bottom-[-100px] left-[30%] w-[550px] h-[550px] rounded-full bg-purple-700/25 blur-[130px]" />
      </div>

      {/* ─── Navbar ─── */}
      <nav className="sticky top-0 z-50 w-full">
        <div className="backdrop-blur-2xl bg-white/[0.06] border-b border-white/[0.1]">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="font-[family:var(--font-plus-jakarta-sans)] text-xl font-bold text-white tracking-tight"
            >
              UI Skills
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#styles"
                className="text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                Styles
              </a>
              <a
                href="#install"
                className="text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                Install
              </a>
              <a
                href="https://github.com/Heiberg-Industries/ui-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white/70 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Nav Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-white/[0.1] px-6 py-4 flex flex-col gap-4">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#styles"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                Styles
              </a>
              <a
                href="#install"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                Install
              </a>
              <a
                href="https://github.com/Heiberg-Industries/ui-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
        <h1 className="font-[family:var(--font-plus-jakarta-sans)] text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          Design direction for{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            AI-generated UI
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          20 style guardrail files that give LLMs the context to build tasteful,
          consistent interfaces.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <a
            href="https://github.com/Heiberg-Industries/ui-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl shadow-[0_4px_24px_rgba(139,92,246,0.35)] transition-all duration-300 hover:shadow-[0_4px_32px_rgba(139,92,246,0.5)] hover:scale-[1.02]"
          >
            <GitHubIcon className="w-5 h-5" />
            View on GitHub
          </a>
          {/* Secondary CTA */}
          <a
            href="#styles"
            className="inline-flex items-center gap-2 px-7 py-3.5 backdrop-blur-2xl bg-white/[0.08] border border-white/[0.15] text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/[0.14] hover:scale-[1.02]"
          >
            Browse styles
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>
      </section>

      {/* ─── Features Section ─── */}
      <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="font-[family:var(--font-plus-jakarta-sans)] text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
          Why UI Skills
        </h2>
        <p className="text-white/50 text-center mb-14 max-w-xl mx-auto">
          Style guardrails designed specifically for LLM-driven development workflows.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <GlassCard key={feature.title} className="p-8 group hover:bg-white/[0.12] transition-all duration-300 hover:scale-[1.01]">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-400/20 flex items-center justify-center text-violet-300 mb-5 group-hover:bg-violet-500/30 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-[family:var(--font-plus-jakarta-sans)] text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ─── Style Gallery Section ─── */}
      <section id="styles" className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="font-[family:var(--font-plus-jakarta-sans)] text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
          All 20 Styles
        </h2>
        <p className="text-white/50 text-center mb-14 max-w-xl mx-auto">
          Each style is a comprehensive design direction file ready for any LLM.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {allStyles.map((style) => (
            <GlassCard
              key={style.name}
              className="p-5 hover:bg-white/[0.12] transition-all duration-300 hover:scale-[1.02] cursor-default"
            >
              <h3 className="font-[family:var(--font-plus-jakarta-sans)] text-base font-semibold text-white mb-2">
                {style.name}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{style.mood}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ─── Installation Section ─── */}
      <section id="install" className="relative z-10 mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="font-[family:var(--font-plus-jakarta-sans)] text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
          Get Started
        </h2>
        <p className="text-white/50 text-center mb-10 max-w-xl mx-auto">
          One command to add UI Skills to your project.
        </p>
        <GlassCard className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
            </div>
            <span className="text-xs text-white/30 font-mono">terminal</span>
          </div>
          <div className="bg-black/30 rounded-xl p-5 overflow-x-auto">
            <code className="text-sm md:text-base text-cyan-300 font-mono whitespace-pre">
              git clone https://github.com/Heiberg-Industries/ui-skills.git .claude/skills/ui-skills
            </code>
          </div>
        </GlassCard>
      </section>

      {/* ─── Footer ─── */}
      <footer className="relative z-10 border-t border-white/[0.08]">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-[family:var(--font-plus-jakarta-sans)] text-lg font-bold text-white">
              UI Skills
            </span>
            <span className="text-sm text-white/40">MIT License</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-white/40">
              Made by Heiberg Industries
            </span>
            <a
              href="https://github.com/Heiberg-Industries/ui-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
