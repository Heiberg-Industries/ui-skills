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
    icon: "leaf",
  },
  {
    title: "LLM-Native Guardrails",
    description:
      "Not pixel specs, but design direction. Define what kind of font, color, and spacing \u2014 the AI makes specific choices within the style\u2019s constraints.",
    icon: "water",
  },
  {
    title: "Drop-in Skill",
    description:
      "Works with Claude Code, Cursor, Codex, Copilot, and more. One command to install, then just ask for UI.",
    icon: "seed",
  },
  {
    title: "Open Source",
    description:
      "MIT licensed and community-driven. Add your own styles, improve existing ones, or use them as-is.",
    icon: "sun",
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
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function WaterIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function SeedIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22V8" />
      <path d="M5.5 12.5c1-3.5 3.5-5.5 6.5-5.5" />
      <path d="M18.5 12.5c-1-3.5-3.5-5.5-6.5-5.5" />
      <path d="M12 8c0-4-2-6-2-6s4 0 4 6" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

const ICON_MAP: Record<string, () => React.JSX.Element> = {
  leaf: LeafIcon,
  water: WaterIcon,
  seed: SeedIcon,
  sun: SunIcon,
};

// ─── Decorative SVG Waves ───────────────────────────────────────────────────

function WaveDivider({
  flip = false,
  fromColor = "#FAF8F3",
  toColor = "#F2F5F0",
}: {
  flip?: boolean;
  fromColor?: string;
  toColor?: string;
}) {
  return (
    <div
      className="w-full overflow-hidden leading-[0] pointer-events-none"
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-[60px] sm:h-[80px] lg:h-[100px]"
      >
        <defs>
          <linearGradient id={`wave-grad-${flip ? "f" : "n"}-${fromColor.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C160,80 320,0 480,40 C640,80 800,20 960,50 C1120,80 1280,10 1440,40 L1440,120 L0,120 Z"
          fill={toColor}
        />
        <path
          d="M0,60 C180,20 360,90 540,50 C720,10 900,80 1080,40 C1260,0 1380,70 1440,50 L1440,120 L0,120 Z"
          fill={toColor}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

// ─── Blob background decoration ─────────────────────────────────────────────

function BlobDecoration({
  className,
  color = "rgba(125, 155, 118, 0.10)",
  size = 500,
  blur = 40,
  radius = "60% 40% 55% 45% / 50% 60% 40% 50%",
}: {
  className?: string;
  color?: string;
  size?: number;
  blur?: number;
  radius?: string;
}) {
  return (
    <div
      className={`absolute pointer-events-none ${className ?? ""}`}
      style={{
        width: size,
        height: size * 0.85,
        background: color,
        borderRadius: radius,
        filter: `blur(${blur}px)`,
      }}
      aria-hidden="true"
    />
  );
}

// ─── Section components ─────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F3]/85 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-18 py-5">
          <a
            href="#"
            className="font-[family:var(--font-nunito)] text-[#3B3530] text-xl font-semibold tracking-wide"
          >
            UI Skills
          </a>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-[family:var(--font-dm-sans)] text-[#7D756D] hover:text-[#3B3530] text-sm font-normal transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7D756D] hover:text-[#3B3530] transition-colors duration-300"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>

          <button
            type="button"
            className="md:hidden font-[family:var(--font-dm-sans)] text-[#7D756D] hover:text-[#3B3530] text-sm font-normal transition-colors duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#FAF8F3]/95 backdrop-blur-md">
          <div className="px-6 py-8 space-y-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-[family:var(--font-dm-sans)] text-[#7D756D] hover:text-[#3B3530] text-sm font-normal transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 font-[family:var(--font-dm-sans)] text-[#7D756D] hover:text-[#3B3530] text-sm font-normal transition-colors duration-300"
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
    <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 lg:pt-56 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <BlobDecoration
        className="top-10 -right-40 sm:-right-20 opacity-60"
        color="rgba(125, 155, 118, 0.12)"
        size={600}
        blur={50}
      />
      <BlobDecoration
        className="-bottom-20 -left-40 opacity-40"
        color="rgba(198, 123, 92, 0.10)"
        size={450}
        blur={45}
        radius="45% 55% 40% 60% / 55% 45% 55% 45%"
      />
      <BlobDecoration
        className="top-1/3 left-1/4 opacity-30 hidden lg:block"
        color="rgba(125, 155, 118, 0.08)"
        size={300}
        blur={60}
        radius="50% 50% 45% 55% / 60% 40% 60% 40%"
      />

      <div className="relative max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16">
        <h1 className="font-[family:var(--font-nunito)] text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[#3B3530] leading-[1.15] tracking-[-0.01em]">
          Design direction for
          <br />
          <span className="text-[#7D9B76]">AI-generated UI</span>
        </h1>
        <p className="mt-8 sm:mt-10 max-w-[560px] font-[family:var(--font-dm-sans)] text-lg text-[#7D756D] leading-[1.75] font-normal">
          20 style guardrail files that give LLMs the context to build tasteful,
          consistent interfaces.
        </p>
        <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#7D9B76] text-white font-[family:var(--font-dm-sans)] px-8 py-3.5 text-sm font-medium rounded-full shadow-[0_4px_16px_rgba(125,155,118,0.3)] hover:bg-[#6B8F60] hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
          >
            View on GitHub
          </a>
          <a
            href="#styles"
            className="inline-flex items-center justify-center bg-white/70 text-[#3B3530] font-[family:var(--font-dm-sans)] px-8 py-3.5 text-sm font-medium rounded-full shadow-[0_4px_16px_rgba(60,50,40,0.06)] hover:bg-white hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
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
    <section id="features" className="relative py-28 sm:py-36 lg:py-40 bg-[#F2F5F0]">
      {/* Organic blob accent */}
      <BlobDecoration
        className="top-20 -right-32 opacity-40"
        color="rgba(125, 155, 118, 0.10)"
        size={400}
        blur={50}
        radius="55% 45% 60% 40% / 45% 55% 45% 55%"
      />

      <div className="relative max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="font-[family:var(--font-nunito)] text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#3B3530] leading-[1.15] mb-16 sm:mb-20">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {FEATURES.map((feature) => {
            const IconComponent = ICON_MAP[feature.icon];
            return (
              <div
                key={feature.title}
                className="bg-white rounded-[24px] p-8 sm:p-10 shadow-[0_4px_20px_rgba(60,50,40,0.08)] hover:shadow-[0_8px_30px_rgba(60,50,40,0.12)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-full bg-[#7D9B76]/10 flex items-center justify-center text-[#7D9B76] mb-5">
                  {IconComponent && <IconComponent />}
                </div>
                <h3 className="font-[family:var(--font-nunito)] text-[#3B3530] text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-4 font-[family:var(--font-dm-sans)] text-[#7D756D] text-base leading-[1.75] font-normal">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StyleGallery() {
  return (
    <section id="styles" className="relative py-28 sm:py-36 lg:py-40 bg-[#FAF8F3]">
      {/* Blob decorations */}
      <BlobDecoration
        className="-left-40 top-1/4 opacity-30"
        color="rgba(198, 123, 92, 0.09)"
        size={500}
        blur={50}
        radius="40% 60% 50% 50% / 55% 45% 55% 45%"
      />
      <BlobDecoration
        className="-right-32 bottom-20 opacity-25"
        color="rgba(125, 155, 118, 0.10)"
        size={350}
        blur={45}
        radius="55% 45% 50% 50% / 50% 55% 45% 55%"
      />

      <div className="relative max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="font-[family:var(--font-nunito)] text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#3B3530] leading-[1.15] mb-16 sm:mb-20">
          All 20 Styles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {STYLES.map((style) => (
            <div
              key={style.name}
              className="bg-white/80 rounded-[20px] px-6 py-5 shadow-[0_2px_12px_rgba(60,50,40,0.06)] hover:shadow-[0_4px_20px_rgba(60,50,40,0.10)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="block font-[family:var(--font-nunito)] text-[#3B3530] text-base font-semibold">
                {style.name}
              </span>
              <span className="block font-[family:var(--font-dm-sans)] text-[#8E857D] text-sm font-normal mt-1.5">
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
    <section id="install" className="relative py-28 sm:py-36 lg:py-40 bg-[#F8F4ED]">
      {/* Blob accent */}
      <BlobDecoration
        className="top-10 right-0 opacity-30"
        color="rgba(198, 123, 92, 0.10)"
        size={380}
        blur={50}
        radius="50% 50% 55% 45% / 45% 55% 50% 50%"
      />

      <div className="relative max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="font-[family:var(--font-nunito)] text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#3B3530] leading-[1.15] mb-10 sm:mb-12">
          Get Started
        </h2>
        <p className="font-[family:var(--font-dm-sans)] text-[#7D756D] text-base leading-[1.75] mb-8 max-w-[560px]">
          Clone the repository into your project&apos;s skill directory. Works
          with Claude Code, Cursor, and any LLM coding tool.
        </p>
        <div className="relative">
          <div className="bg-white/70 rounded-[20px] p-6 sm:p-8 shadow-[0_4px_20px_rgba(60,50,40,0.08)] overflow-x-auto">
            <code className="font-mono text-sm text-[#3B3530] whitespace-pre">
              {command}
            </code>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="absolute top-5 right-5 sm:top-6 sm:right-6 font-[family:var(--font-dm-sans)] text-[#8E857D] hover:text-[#3B3530] bg-[#F2F5F0] hover:bg-[#E8EDE5] px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
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
    <footer className="py-16 sm:py-20 bg-[#FAF8F3]">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <span className="font-[family:var(--font-nunito)] text-[#3B3530] text-base font-semibold tracking-wide">
              UI Skills
            </span>
            <span className="font-[family:var(--font-dm-sans)] text-[#8E857D] text-sm font-normal">
              MIT License
            </span>
          </div>
          <div className="flex items-center gap-8">
            <span className="font-[family:var(--font-dm-sans)] text-[#8E857D] text-sm font-normal">
              Made by Heiberg Industries
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7D756D] hover:text-[#3B3530] transition-colors duration-300"
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

export default function OrganicPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#3B3530] antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WaveDivider fromColor="#FAF8F3" toColor="#F2F5F0" />
        <Features />
        <WaveDivider fromColor="#F2F5F0" toColor="#FAF8F3" flip />
        <StyleGallery />
        <WaveDivider fromColor="#FAF8F3" toColor="#F8F4ED" />
        <Installation />
        <WaveDivider fromColor="#F8F4ED" toColor="#FAF8F3" flip />
      </main>
      <Footer />
    </div>
  );
}
