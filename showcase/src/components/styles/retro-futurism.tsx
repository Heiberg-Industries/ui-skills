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

const NEON_BORDER_COLORS = [
  { border: "#FF00FF", glow: "rgba(255,0,255,0.4)" },
  { border: "#00FFFF", glow: "rgba(0,255,255,0.4)" },
  { border: "#FF2D95", glow: "rgba(255,45,149,0.4)" },
  { border: "#7209B7", glow: "rgba(114,9,183,0.4)" },
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

/* ---------------------------------------------------------------
   Decorative: Scanline overlay
--------------------------------------------------------------- */
function ScanLines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{
        background:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px)",
      }}
    />
  );
}

/* ---------------------------------------------------------------
   Decorative: Starfield background dots
--------------------------------------------------------------- */
function StarField() {
  const stars = React.useMemo(() => {
    const s: { x: number; y: number; size: number; opacity: number }[] = [];
    // deterministic pseudo-random for SSR consistency
    let seed = 42;
    const rand = () => {
      seed = (seed * 16807 + 0) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    for (let i = 0; i < 120; i++) {
      s.push({
        x: rand() * 100,
        y: rand() * 100,
        size: rand() * 2 + 0.5,
        opacity: rand() * 0.6 + 0.15,
      });
    }
    return s;
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------
   Decorative: Perspective grid floor (synthwave signature)
--------------------------------------------------------------- */
function GridFloor({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute left-0 right-0 h-[340px] overflow-hidden ${className}`}
      style={{ perspective: "400px" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(transparent 0%, rgba(255,0,255,0.06) 100%),
            repeating-linear-gradient(90deg, rgba(255,0,255,0.18) 0px, transparent 1px, transparent 80px),
            repeating-linear-gradient(0deg, rgba(255,0,255,0.18) 0px, transparent 1px, transparent 80px)
          `,
          transform: "rotateX(60deg)",
          transformOrigin: "bottom center",
        }}
      />
    </div>
  );
}

/* ---------------------------------------------------------------
   Neon Divider — horizontal glowing line
--------------------------------------------------------------- */
function NeonDivider({
  color = "#FF00FF",
}: {
  color?: string;
}) {
  return (
    <div
      className="h-px w-full"
      style={{
        background: color,
        boxShadow: `0 0 8px ${color}, 0 0 20px ${color}`,
      }}
    />
  );
}

/* ---------------------------------------------------------------
   Neon Button
--------------------------------------------------------------- */
function NeonButton({
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
    "inline-flex items-center justify-center px-7 py-3.5 font-[family:var(--font-orbitron)] font-bold text-sm uppercase tracking-[0.1em] border rounded transition-all duration-300 cursor-pointer select-none";

  const variants = {
    primary:
      "border-[#00FFFF] text-[#00FFFF] bg-transparent shadow-[0_0_15px_rgba(0,255,255,0.35),inset_0_0_15px_rgba(0,255,255,0.08)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6),inset_0_0_20px_rgba(0,255,255,0.15)] hover:bg-[rgba(0,255,255,0.08)]",
    secondary:
      "border-[#FF00FF] text-[#FF00FF] bg-transparent shadow-[0_0_15px_rgba(255,0,255,0.35),inset_0_0_15px_rgba(255,0,255,0.08)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6),inset_0_0_20px_rgba(255,0,255,0.15)] hover:bg-[rgba(255,0,255,0.08)]",
  };

  const combinedClassName = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return <button className={combinedClassName}>{children}</button>;
}

/* ---------------------------------------------------------------
   Navbar
--------------------------------------------------------------- */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0A1A]/90 backdrop-blur-md border-b border-[#FF00FF]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="font-[family:var(--font-orbitron)] text-xl font-bold tracking-[0.08em] text-[#00FFFF]"
            style={{
              textShadow: "0 0 10px rgba(0,255,255,0.6), 0 0 30px rgba(0,255,255,0.3)",
            }}
          >
            UI SKILLS
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "Styles", "Install"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-[family:var(--font-space-mono)] text-sm uppercase tracking-wider text-white/70 hover:text-[#00FFFF] transition-colors duration-300 hover:[text-shadow:0_0_8px_rgba(0,255,255,0.5)]"
              >
                {link}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#FF00FF]/50 rounded text-white/70 hover:text-[#FF00FF] hover:border-[#FF00FF] shadow-[0_0_8px_rgba(255,0,255,0.2)] hover:shadow-[0_0_18px_rgba(255,0,255,0.5)] transition-all duration-300"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 border border-[#FF00FF]/40 rounded text-white/80"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-[2px] bg-[#FF00FF] rounded transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`}
              />
              <span
                className={`block h-[2px] bg-[#FF00FF] rounded transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[2px] bg-[#FF00FF] rounded transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4 border-t border-[#FF00FF]/20 pt-4">
            {["Features", "Styles", "Install"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-[family:var(--font-space-mono)] text-sm uppercase tracking-wider text-white/70 hover:text-[#00FFFF] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-[family:var(--font-space-mono)] text-sm uppercase tracking-wider text-white/70 hover:text-[#FF00FF] transition-colors"
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

/* ---------------------------------------------------------------
   Hero
--------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D0221] via-[#1A0A2E] to-[#0A0A1A]">
      {/* Star field */}
      <StarField />

      {/* Grid floor at bottom */}
      <GridFloor className="bottom-0" />

      {/* Synthwave sun on the horizon */}
      <div
        className="absolute bottom-[160px] left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-t-full opacity-30"
        style={{
          background:
            "linear-gradient(180deg, #FF00FF 0%, #FF2D95 30%, #FFD700 70%, #FF6D00 100%)",
          filter: "blur(30px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="mb-6">
          <span
            className="inline-block font-[family:var(--font-space-mono)] text-xs uppercase tracking-[0.2em] text-[#FF00FF] border border-[#FF00FF]/40 rounded px-4 py-1.5 shadow-[0_0_10px_rgba(255,0,255,0.25)]"
          >
            20 Styles Included
          </span>
        </div>

        <h1
          className="font-[family:var(--font-orbitron)] text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-[0.05em] leading-[1.05] mb-6 text-white"
          style={{
            textShadow:
              "0 0 20px rgba(0,255,255,0.4), 0 0 60px rgba(0,255,255,0.15)",
          }}
        >
          Design direction for{" "}
          <span
            className="text-[#00FFFF]"
            style={{
              textShadow:
                "0 0 10px #00FFFF, 0 0 30px #00FFFF, 0 0 60px rgba(0,255,255,0.4)",
            }}
          >
            AI-generated
          </span>{" "}
          UI
        </h1>

        <p className="font-[family:var(--font-inter)] text-lg sm:text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
          20 style guardrail files that give LLMs the context to build tasteful,
          consistent interfaces.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <NeonButton href={GITHUB_URL} variant="primary">
            View on GitHub
          </NeonButton>
          <NeonButton href="#styles" variant="secondary">
            Browse styles
          </NeonButton>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   Features
--------------------------------------------------------------- */
function Features() {
  const features = [
    {
      title: "20 Curated Styles",
      description:
        "From Bauhaus to Y2K Revival \u2014 each style is a rich design direction file covering typography, color, spacing, and components.",
      neon: NEON_BORDER_COLORS[0],
    },
    {
      title: "LLM-Native Guardrails",
      description:
        "Not pixel specs, but design direction. Define what kind of font, color, and spacing \u2014 the AI makes specific choices within the style\u2019s constraints.",
      neon: NEON_BORDER_COLORS[1],
    },
    {
      title: "Drop-in Skill",
      description:
        "Works with Claude Code, Cursor, Codex, Copilot, and more. One command to install, then just ask for UI.",
      neon: NEON_BORDER_COLORS[2],
    },
    {
      title: "Open Source",
      description:
        "MIT licensed and community-driven. Add your own styles, improve existing ones, or use them as-is.",
      neon: NEON_BORDER_COLORS[3],
    },
  ];

  return (
    <section id="features" className="relative bg-[#0A0A1A] overflow-hidden">
      <NeonDivider color="#FF00FF" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-16">
          <span className="inline-block font-[family:var(--font-space-mono)] text-xs uppercase tracking-[0.2em] text-[#FF2D95] mb-4">
            Why UI Skills?
          </span>
          <h2
            className="font-[family:var(--font-orbitron)] text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[0.05em] text-white"
            style={{
              textShadow:
                "0 0 15px rgba(255,0,255,0.4), 0 0 40px rgba(255,0,255,0.15)",
            }}
          >
            Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white/[0.03] rounded p-8 sm:p-10 transition-all duration-300"
              style={{
                border: `1px solid ${feature.neon.border}`,
                boxShadow: `0 0 15px ${feature.neon.glow}, inset 0 0 15px ${feature.neon.glow.replace("0.4", "0.05")}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px ${feature.neon.glow.replace("0.4", "0.6")}, inset 0 0 25px ${feature.neon.glow.replace("0.4", "0.1")}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 15px ${feature.neon.glow}, inset 0 0 15px ${feature.neon.glow.replace("0.4", "0.05")}`;
              }}
            >
              <h3
                className="font-[family:var(--font-orbitron)] text-xl sm:text-2xl font-bold uppercase tracking-wider mb-4"
                style={{
                  color: feature.neon.border,
                  textShadow: `0 0 8px ${feature.neon.glow}`,
                }}
              >
                {feature.title}
              </h3>
              <p className="font-[family:var(--font-inter)] text-base sm:text-lg text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   Style Gallery
--------------------------------------------------------------- */
function StyleGallery() {
  return (
    <section
      id="styles"
      className="relative bg-gradient-to-b from-[#0A0A1A] via-[#0D0221] to-[#0A0A1A] overflow-hidden"
    >
      <NeonDivider color="#00FFFF" />

      {/* Faint grid lines in background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, #00FFFF 0px, transparent 1px, transparent 100px),
            repeating-linear-gradient(0deg, #00FFFF 0px, transparent 1px, transparent 100px)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-16">
          <span className="inline-block font-[family:var(--font-space-mono)] text-xs uppercase tracking-[0.2em] text-[#00FFFF] mb-4">
            The Collection
          </span>
          <h2
            className="font-[family:var(--font-orbitron)] text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[0.05em] text-white"
            style={{
              textShadow:
                "0 0 15px rgba(0,255,255,0.4), 0 0 40px rgba(0,255,255,0.15)",
            }}
          >
            All 20 Styles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {ALL_STYLES.map((style, i) => {
            const neon = NEON_BORDER_COLORS[i % NEON_BORDER_COLORS.length];
            return (
              <div
                key={style.name}
                className="bg-white/[0.03] rounded p-5 transition-all duration-300 cursor-default"
                style={{
                  border: `1px solid ${neon.border}40`,
                  boxShadow: `0 0 8px ${neon.glow.replace("0.4", "0.15")}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = neon.border;
                  e.currentTarget.style.boxShadow = `0 0 20px ${neon.glow}, inset 0 0 12px ${neon.glow.replace("0.4", "0.06")}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${neon.border}40`;
                  e.currentTarget.style.boxShadow = `0 0 8px ${neon.glow.replace("0.4", "0.15")}`;
                }}
              >
                <h3
                  className="font-[family:var(--font-orbitron)] text-sm font-bold uppercase tracking-wider mb-2 leading-snug"
                  style={{ color: neon.border }}
                >
                  {style.name}
                </h3>
                <span className="font-[family:var(--font-space-mono)] text-xs text-white/40">
                  {style.mood}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   Installation
--------------------------------------------------------------- */
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
    <section id="install" className="relative bg-[#0A0A1A] overflow-hidden">
      <NeonDivider color="#FF2D95" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-16">
          <span className="inline-block font-[family:var(--font-space-mono)] text-xs uppercase tracking-[0.2em] text-[#FF2D95] mb-4">
            One Command
          </span>
          <h2
            className="font-[family:var(--font-orbitron)] text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[0.05em] text-white"
            style={{
              textShadow:
                "0 0 15px rgba(255,45,149,0.4), 0 0 40px rgba(255,45,149,0.15)",
            }}
          >
            Get Started
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Terminal window */}
          <div
            className="relative rounded bg-[#0D0221] p-6 sm:p-8"
            style={{
              border: "1px solid #FF00FF",
              boxShadow:
                "0 0 20px rgba(255,0,255,0.3), inset 0 0 20px rgba(255,0,255,0.05)",
            }}
          >
            {/* Window chrome dots */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="font-[family:var(--font-space-mono)] text-xs text-white/30 ml-2">
                terminal
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-[family:var(--font-space-mono)] text-[#00FFFF] text-sm sm:text-base select-none shrink-0">
                $
              </span>
              <code className="font-[family:var(--font-space-mono)] text-white/90 text-sm sm:text-base break-all leading-relaxed">
                {command}
              </code>
            </div>

            <button
              onClick={handleCopy}
              className="absolute top-6 right-6 sm:top-8 sm:right-8 px-4 py-2 font-[family:var(--font-space-mono)] font-bold text-xs uppercase tracking-wider border rounded cursor-pointer transition-all duration-300 border-[#00FFFF]/50 text-[#00FFFF] hover:border-[#00FFFF] hover:shadow-[0_0_12px_rgba(0,255,255,0.4)] bg-transparent"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <p className="font-[family:var(--font-inter)] text-center text-white/50 text-lg mt-10">
            Then just ask your AI to build UI. It will read the style files and
            apply the guardrails automatically.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   Footer
--------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative bg-[#0A0A1A]">
      <NeonDivider color="#7209B7" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span
              className="font-[family:var(--font-orbitron)] text-lg font-bold uppercase tracking-[0.08em] text-[#00FFFF]"
              style={{
                textShadow: "0 0 8px rgba(0,255,255,0.5)",
              }}
            >
              UI Skills
            </span>
            <span className="font-[family:var(--font-space-mono)] text-xs uppercase tracking-wider text-white/30">
              MIT License
            </span>
            <span className="font-[family:var(--font-inter)] text-sm text-white/30">
              Made by{" "}
              <span className="text-white/60 font-semibold">
                Heiberg Industries
              </span>
            </span>
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-[#FF00FF]/40 rounded text-white/50 hover:text-[#FF00FF] hover:border-[#FF00FF] shadow-[0_0_8px_rgba(255,0,255,0.15)] hover:shadow-[0_0_18px_rgba(255,0,255,0.4)] transition-all duration-300"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------
   Page
--------------------------------------------------------------- */
export default function RetroFuturismPage() {
  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white relative">
      {/* Persistent scan-line overlay */}
      <ScanLines />

      <Navbar />
      <Hero />
      <Features />
      <StyleGallery />
      <Installation />
      <Footer />
    </div>
  );
}
