"use client";

import { useState } from "react";

/* --- Style Gallery Data --- */
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

/* --- Feature Cards Data --- */
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

/* --- GitHub Icon --- */
function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

/* --- Main Page Component --- */
export default function AuroraPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0F0F1A] overflow-hidden font-[family:var(--font-inter)]">
      {/* --- Animated gradient keyframes (injected via style tag) --- */}
      <style>{`
        @keyframes aurora-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes blob-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes blob-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 30px) scale(1.08); }
          66% { transform: translate(25px, -15px) scale(0.92); }
        }
        @keyframes blob-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, 30px) scale(0.96); }
          66% { transform: translate(-30px, -25px) scale(1.04); }
        }
        @keyframes blob-drift-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, -20px) scale(1.06); }
          66% { transform: translate(35px, 15px) scale(0.94); }
        }
        @keyframes blob-drift-5 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(15px, 35px) scale(1.03); }
          66% { transform: translate(-20px, -30px) scale(0.97); }
        }
      `}</style>

      {/* --- Hero Gradient Mesh Background --- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        {/* Blob 1 -- violet, top-left */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-40 blur-[140px]"
          style={{
            top: "-10%",
            left: "-5%",
            background: "radial-gradient(circle, #7B2FFF 0%, transparent 70%)",
            animation: "blob-drift-1 12s ease-in-out infinite",
          }}
        />
        {/* Blob 2 -- electric blue, top-right */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-35 blur-[130px]"
          style={{
            top: "5%",
            right: "-8%",
            background: "radial-gradient(circle, #3498DB 0%, transparent 70%)",
            animation: "blob-drift-2 14s ease-in-out infinite",
          }}
        />
        {/* Blob 3 -- magenta/pink, center-left */}
        <div
          className="absolute w-[550px] h-[550px] rounded-full opacity-30 blur-[120px]"
          style={{
            top: "25%",
            left: "10%",
            background: "radial-gradient(circle, #FF2D95 0%, transparent 70%)",
            animation: "blob-drift-3 10s ease-in-out infinite",
          }}
        />
        {/* Blob 4 -- teal/cyan, center-right */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-35 blur-[110px]"
          style={{
            top: "20%",
            right: "15%",
            background: "radial-gradient(circle, #1ABC9C 0%, transparent 70%)",
            animation: "blob-drift-4 11s ease-in-out infinite",
          }}
        />
        {/* Blob 5 -- coral/warm, top center */}
        <div
          className="absolute w-[450px] h-[450px] rounded-full opacity-25 blur-[120px]"
          style={{
            top: "8%",
            left: "35%",
            background: "radial-gradient(circle, #FF6B6B 0%, transparent 70%)",
            animation: "blob-drift-5 13s ease-in-out infinite",
          }}
        />
      </div>

      {/* --- Navbar --- */}
      <nav className="sticky top-0 z-50 w-full">
        <div className="backdrop-blur-xl bg-[#0F0F1A]/60 border-b border-white/[0.08]">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="font-[family:var(--font-space-grotesk)] text-xl font-bold text-white tracking-tight"
            >
              UI Skills
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#styles"
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300"
              >
                Styles
              </a>
              <a
                href="#install"
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300"
              >
                Install
              </a>
              <a
                href="https://github.com/Heiberg-Industries/ui-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white/60 hover:text-white transition-colors"
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
            <div className="md:hidden border-t border-white/[0.08] px-6 py-4 flex flex-col gap-4">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#styles"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                Styles
              </a>
              <a
                href="#install"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                Install
              </a>
              <a
                href="https://github.com/Heiberg-Industries/ui-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pt-28 pb-24 md:pt-40 md:pb-32 text-center">
        <h1 className="font-[family:var(--font-space-grotesk)] text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
          Design direction for{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #FF6B6B, #E91E8C, #9B59B6, #3498DB, #1ABC9C)",
              backgroundSize: "200% 200%",
              animation: "aurora-shift 8s ease infinite",
            }}
          >
            AI-generated UI
          </span>
        </h1>
        <p className="mt-7 text-lg md:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed">
          20 style guardrail files that give LLMs the context to build tasteful,
          consistent interfaces.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA -- gradient fill button */}
          <a
            href="https://github.com/Heiberg-Industries/ui-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-white font-semibold rounded-xl shadow-[0_4px_24px_rgba(123,47,255,0.3)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_4px_32px_rgba(123,47,255,0.45)] hover:scale-[1.02]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #FF6B6B, #9B59B6, #3498DB)",
              backgroundSize: "200% 200%",
              animation: "aurora-shift 6s ease infinite",
            }}
          >
            <GitHubIcon className="w-5 h-5" />
            View on GitHub
          </a>
          {/* Secondary CTA -- ghost button */}
          <a
            href="#styles"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.06] border border-white/[0.15] text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/[0.12] hover:scale-[1.02]"
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

      {/* --- Features Section --- */}
      <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
        {/* Subtle gradient divider line */}
        <div
          className="mx-auto mb-16 h-px w-48 rounded-full opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent, #9B59B6, #3498DB, transparent)",
          }}
        />
        <h2 className="font-[family:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
          Why UI Skills
        </h2>
        <p className="text-white/45 text-center mb-16 max-w-xl mx-auto">
          Style guardrails designed specifically for LLM-driven development workflows.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1"
            >
              {/* Gradient accent top border */}
              <div
                className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FF6B6B, #9B59B6, #3498DB, #1ABC9C)",
                }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #7B2FFF, #3498DB)",
                }}
              >
                {feature.icon}
              </div>
              <h3 className="font-[family:var(--font-space-grotesk)] text-xl font-semibold text-[#1A1A1A] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Style Gallery Section (gradient band) --- */}
      <section id="styles" className="relative z-10 py-24 md:py-32">
        {/* Full-bleed gradient background for this section */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(123,47,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(52,152,219,0.12) 0%, transparent 60%), radial-gradient(ellipse at 50% 80%, rgba(255,45,149,0.1) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="font-[family:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
            All 20 Styles
          </h2>
          <p className="text-white/45 text-center mb-16 max-w-xl mx-auto">
            Each style is a comprehensive design direction file ready for any LLM.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allStyles.map((style, i) => (
              <div
                key={style.name}
                className="group relative rounded-2xl p-5 border border-white/[0.12] bg-white/[0.06] backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.1] hover:border-white/[0.2] hover:scale-[1.02] cursor-default"
              >
                {/* Subtle gradient dot indicator */}
                <div
                  className="w-2 h-2 rounded-full mb-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${
                      ["#FF6B6B", "#E91E8C", "#9B59B6", "#7B2FFF", "#3498DB", "#1ABC9C", "#00FF87", "#00D2FF"][i % 8]
                    }, ${
                      ["#9B59B6", "#7B2FFF", "#3498DB", "#1ABC9C", "#00FF87", "#FF2D95", "#FF6B6B", "#E91E8C"][i % 8]
                    })`,
                  }}
                />
                <h3 className="font-[family:var(--font-space-grotesk)] text-base font-semibold text-white mb-1.5">
                  {style.name}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {style.mood}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Installation Section --- */}
      <section id="install" className="relative z-10 mx-auto max-w-3xl px-6 py-24 md:py-32">
        {/* Gradient divider */}
        <div
          className="mx-auto mb-16 h-px w-48 rounded-full opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent, #1ABC9C, #9B59B6, transparent)",
          }}
        />
        <h2 className="font-[family:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
          Get Started
        </h2>
        <p className="text-white/45 text-center mb-12 max-w-xl mx-auto">
          One command to add UI Skills to your project.
        </p>
        <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          {/* Gradient accent top border */}
          <div
            className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FF6B6B, #9B59B6, #3498DB, #1ABC9C)",
            }}
          />
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <span className="text-xs text-[#6B7280] font-mono">terminal</span>
          </div>
          <div className="bg-[#0F0F1A] rounded-xl p-5 overflow-x-auto">
            <code className="text-sm md:text-base font-mono whitespace-pre">
              <span className="text-[#1ABC9C]">git clone</span>{" "}
              <span className="text-white/80">
                https://github.com/Heiberg-Industries/ui-skills.git .claude/skills/ui-skills
              </span>
            </code>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="relative z-10 border-t border-white/[0.08]">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-[family:var(--font-space-grotesk)] text-lg font-bold text-white">
              UI Skills
            </span>
            <span className="text-sm text-white/35">MIT License</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-white/35">
              Made by Heiberg Industries
            </span>
            <a
              href="https://github.com/Heiberg-Industries/ui-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 hover:text-white transition-colors duration-300"
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
