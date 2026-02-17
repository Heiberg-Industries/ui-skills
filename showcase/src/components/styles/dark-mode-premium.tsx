"use client";

import { useState } from "react";

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
  { name: "Anti-Design", mood: ["chaotic", "punk", "raw"] },
  { name: "Art Deco", mood: ["luxurious", "geometric", "ornamental"] },
  { name: "Aurora", mood: ["vibrant", "ethereal", "dynamic"] },
  { name: "Bauhaus", mood: ["geometric", "bold", "functional"] },
  { name: "Bento Grid", mood: ["modular", "dense", "organized"] },
  { name: "Claymorphism", mood: ["friendly", "3D", "playful"] },
  { name: "Corporate Modern", mood: ["professional", "trustworthy", "clean"] },
  {
    name: "Dark Mode Premium",
    mood: ["sophisticated", "cinematic", "exclusive"],
  },
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

const INSTALL_COMMAND =
  "git clone https://github.com/Heiberg-Industries/ui-skills.git .claude/skills/ui-skills";

/* ------------------------------------------------------------------ */
/*  Icon components                                                    */
/* ------------------------------------------------------------------ */

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
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

function ArrowRightIcon() {
  return (
    <svg
      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature icon per card                                              */
/* ------------------------------------------------------------------ */

function FeatureIcon({ index }: { index: number }) {
  const base = "w-5 h-5 text-[#8B5CF6]";
  switch (index) {
    case 0:
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    case 1:
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      );
    case 2:
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 3:
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      );
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/*  Main page component                                                */
/* ------------------------------------------------------------------ */

export default function DarkModePremiumPage() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(INSTALL_COMMAND).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#FAFAFA] font-[family:var(--font-inter)]">
      {/* ============================================================ */}
      {/*  NAVBAR                                                      */}
      {/* ============================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#0A0A0B]/80 backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-[family:var(--font-space-grotesk)] text-lg font-bold tracking-tight text-[#FAFAFA]"
          >
            UI Skills
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-[#FAFAFA] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#FAFAFA] transition-colors duration-200"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/60 hover:text-[#FAFAFA] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/[0.08] bg-[#0A0A0B]/95 backdrop-blur-xl px-6 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-white/60 hover:text-[#FAFAFA] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-[#FAFAFA] transition-colors duration-200"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>
        )}
      </nav>

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 overflow-hidden">
        {/* Ambient glow behind hero */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[1200px] mx-auto text-center">
          <h1 className="font-[family:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-[#FAFAFA]">
            Design direction for
            <br />
            AI-generated UI
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            20 style guardrail files that give LLMs the context to build
            tasteful, consistent interfaces.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-7 py-3.5 bg-[#8B5CF6] text-white font-medium text-sm rounded-xl shadow-[0_0_24px_rgba(139,92,246,0.35)] hover:shadow-[0_0_36px_rgba(139,92,246,0.5)] transition-all duration-300"
            >
              View on GitHub
              <ArrowRightIcon />
            </a>

            {/* Secondary CTA */}
            <a
              href="#styles"
              className="inline-flex items-center px-7 py-3.5 bg-transparent border border-white/[0.15] text-[#FAFAFA] font-medium text-sm rounded-xl hover:bg-white/[0.06] hover:border-white/[0.25] transition-all duration-200"
            >
              Browse styles
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURES                                                    */}
      {/* ============================================================ */}
      <section id="features" className="py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-[family:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold tracking-tight text-center text-[#FAFAFA]">
            Features
          </h2>
          <p className="mt-4 text-center text-white/60 text-base md:text-lg max-w-xl mx-auto">
            Everything you need to give AI-generated interfaces real design
            taste.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className="group relative bg-[#111113] border border-white/[0.08] rounded-2xl p-7 md:p-8 transition-all duration-300 hover:border-white/[0.18] hover:shadow-[0_0_40px_rgba(139,92,246,0.06)]"
              >
                {/* Inset top highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent rounded-t-2xl" />

                <div className="mb-4 w-10 h-10 rounded-lg bg-[#8B5CF6]/[0.1] border border-[#8B5CF6]/[0.2] flex items-center justify-center">
                  <FeatureIcon index={i} />
                </div>

                <h3 className="font-[family:var(--font-space-grotesk)] text-lg font-semibold text-[#FAFAFA]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STYLE GALLERY                                               */}
      {/* ============================================================ */}
      <section id="styles" className="py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-[family:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold tracking-tight text-center text-[#FAFAFA]">
            All 20 Styles
          </h2>
          <p className="mt-4 text-center text-white/60 text-base md:text-lg max-w-xl mx-auto">
            Each style is a complete design direction covering typography, color,
            spacing, components, and more.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STYLES.map((style) => (
              <div
                key={style.name}
                className="group bg-[#111113] border border-white/[0.08] rounded-xl p-5 transition-all duration-300 hover:border-white/[0.18] hover:bg-[#16161A]"
              >
                <h3 className="text-sm font-semibold text-[#FAFAFA] group-hover:text-white transition-colors duration-200">
                  {style.name}
                </h3>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {style.mood.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-white/40 bg-white/[0.05] border border-white/[0.06] px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  INSTALLATION                                                */}
      {/* ============================================================ */}
      <section id="install" className="py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative bg-[#111113] border border-white/[0.08] rounded-2xl p-8 md:p-12 text-center overflow-hidden">
            {/* Subtle gradient glow */}
            <div
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-[0.06]"
              style={{
                background:
                  "radial-gradient(ellipse, #8B5CF6 0%, transparent 70%)",
              }}
            />

            <div className="relative">
              <h2 className="font-[family:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold tracking-tight text-[#FAFAFA]">
                Get Started
              </h2>
              <p className="mt-4 text-white/60 text-base md:text-lg max-w-lg mx-auto">
                One command to install. Then just ask your AI for UI.
              </p>

              {/* Code block */}
              <div className="mt-8 max-w-2xl mx-auto">
                <div className="relative bg-[#0A0A0B] border border-white/[0.1] rounded-xl overflow-hidden">
                  {/* Code block header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/[0.08]" />
                      <div className="w-3 h-3 rounded-full bg-white/[0.08]" />
                      <div className="w-3 h-3 rounded-full bg-white/[0.08]" />
                    </div>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
                      aria-label="Copy to clipboard"
                    >
                      {copied ? (
                        <>
                          <CheckIcon />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Code content */}
                  <div className="p-4 md:p-5 overflow-x-auto">
                    <pre className="text-sm md:text-[13px] leading-relaxed">
                      <code>
                        <span className="text-white/40">$ </span>
                        <span className="text-[#FAFAFA]">
                          {INSTALL_COMMAND}
                        </span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FOOTER                                                      */}
      {/* ============================================================ */}
      <footer className="border-t border-white/[0.06] py-10 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-[family:var(--font-space-grotesk)] text-sm font-semibold text-[#FAFAFA]">
              UI Skills
            </span>
            <span className="text-xs text-white/40">MIT License</span>
            <span className="text-xs text-white/40">
              Made by Heiberg Industries
            </span>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/70 transition-colors duration-200"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
      </footer>
    </div>
  );
}
