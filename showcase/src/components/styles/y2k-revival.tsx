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

/* ─── Chrome/Metallic Text Style ─── */
const chromeTextStyle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, #F5F5F5 0%, #B0B0B0 25%, #E8E8E8 50%, #909090 75%, #C8C8C8 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.35))",
};

/* ─── SVG Icons ─── */
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

function StarSparkle({
  className = "",
  size = 20,
  style,
}: {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ─── Chrome Orb ─── */
function ChromeOrb({
  size = 60,
  className = "",
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-full shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 30% 30%, #FFF 0%, #D4D4D4 30%, #888 60%, #444 80%, #777 100%)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        ...style,
      }}
    />
  );
}

/* ─── Glossy Y2K Button ─── */
function Y2kButton({
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
    "inline-flex items-center justify-center px-8 py-3 font-[family:var(--font-fredoka)] font-semibold text-lg rounded-full transition-all duration-200 cursor-pointer select-none relative overflow-hidden";

  const variants = {
    primary: [
      "text-white",
      "border border-white/30",
      "hover:brightness-110 hover:-translate-y-0.5",
    ].join(" "),
    secondary: [
      "text-[#1A1A2E]",
      "border border-white/60",
      "hover:brightness-105 hover:-translate-y-0.5",
    ].join(" "),
  };

  const inlineStyle: React.CSSProperties =
    variant === "primary"
      ? {
          background: "linear-gradient(to bottom, #7DD3FC 0%, #0EA5E9 50%, #0284C7 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.5), 0 4px 16px rgba(14, 165, 233, 0.4)",
        }
      : {
          background:
            "linear-gradient(to bottom, #FFFFFF 0%, #E4E4E7 50%, #D4D4D8 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.8), 0 4px 16px rgba(0,0,0,0.1)",
        };

  const combinedClassName = `${base} ${variants[variant]} ${className}`;

  const inner = (
    <>
      {/* Glossy highlight overlay */}
      <span
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 50%, transparent 50%, transparent 100%)",
          borderRadius: "inherit",
        }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClassName} style={inlineStyle}>
        {inner}
      </a>
    );
  }
  return (
    <button className={combinedClassName} style={inlineStyle}>
      {inner}
    </button>
  );
}

/* ─── Glossy Card ─── */
function GlossyCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] border border-white/60 p-8 sm:p-10 transition-all duration-200 hover:-translate-y-1 ${className}`}
      style={{
        background: "rgba(255,255,255,0.88)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.1), 0 0 20px rgba(0, 191, 255, 0.08)",
      }}
    >
      {/* Glossy sheen top half */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 50%, transparent 50%, transparent 100%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md border-b border-white/30"
      style={{
        background:
          "linear-gradient(to right, rgba(212,212,216,0.85), rgba(228,228,231,0.85), rgba(212,212,216,0.85))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="font-[family:var(--font-bungee)] text-xl tracking-wide"
            style={chromeTextStyle}
          >
            UI Skills
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "Styles", "Install"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-[family:var(--font-fredoka)] font-medium text-[#1A1A2E]/80 hover:text-[#EC4899] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/40 text-[#1A1A2E]/70 hover:text-[#EC4899] transition-all duration-200"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(228,228,231,0.4))",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(0,0,0,0.08)",
              }}
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-2xl border border-white/40"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(228,228,231,0.4))",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-[2px] bg-[#1A1A2E] rounded transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`}
              />
              <span
                className={`block h-[2px] bg-[#1A1A2E] rounded transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[2px] bg-[#1A1A2E] rounded transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-white/30 pt-4">
            {["Features", "Styles", "Install"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-[family:var(--font-fredoka)] font-medium text-[#1A1A2E] text-lg"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-[family:var(--font-fredoka)] font-medium text-[#1A1A2E] text-lg"
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

/* ─── Hero ─── */
function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #E8E8F0 0%, #D0D0E0 30%, #E0E0EA 60%, #F0F0F8 100%)",
      }}
    >
      {/* Decorative chrome orbs */}
      <ChromeOrb
        size={120}
        className="absolute top-12 right-[8%] hidden lg:block animate-[y2kFloat_4s_ease-in-out_infinite]"
      />
      <ChromeOrb
        size={50}
        className="absolute top-32 right-[25%] hidden md:block animate-[y2kFloat_5s_ease-in-out_0.5s_infinite]"
      />
      <ChromeOrb
        size={70}
        className="absolute bottom-20 right-[12%] hidden lg:block animate-[y2kFloat_6s_ease-in-out_1s_infinite]"
      />
      <ChromeOrb
        size={35}
        className="absolute bottom-32 left-[5%] hidden md:block animate-[y2kFloat_4.5s_ease-in-out_0.8s_infinite]"
      />

      {/* Sparkles */}
      <StarSparkle
        size={18}
        className="absolute top-20 left-[15%] text-[#EC4899] hidden md:block animate-[y2kSpin_6s_linear_infinite]"
      />
      <StarSparkle
        size={14}
        className="absolute top-40 right-[35%] text-[#7DD3FC] hidden lg:block animate-[y2kSpin_8s_linear_infinite]"
      />
      <StarSparkle
        size={22}
        className="absolute bottom-28 left-[30%] text-[#DDA0DD] hidden lg:block animate-[y2kSpin_5s_linear_0.5s_infinite]"
      />
      <StarSparkle
        size={12}
        className="absolute top-16 right-[18%] text-white hidden md:block animate-[y2kSpin_7s_linear_1s_infinite]"
      />

      {/* Large gradient orb (decorative glow) */}
      <div
        className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full opacity-30 hidden lg:block"
        style={{
          background:
            "radial-gradient(circle, #FF69B4 0%, #00BFFF 50%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="font-[family:var(--font-bungee)] text-5xl sm:text-6xl lg:text-8xl uppercase tracking-wider leading-[1.05] mb-6"
            style={chromeTextStyle}
          >
            Design direction for AI-generated UI
          </h1>

          <p className="font-[family:var(--font-inter)] text-lg sm:text-xl lg:text-2xl text-[#1A1A2E]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            20 style guardrail files that give LLMs the context to build
            tasteful, consistent interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Y2kButton href={GITHUB_URL} variant="primary">
              View on GitHub
            </Y2kButton>
            <Y2kButton href="#styles" variant="secondary">
              Browse styles
            </Y2kButton>
          </div>
        </div>
      </div>

      {/* Bottom gradient border */}
      <div
        className="h-[3px]"
        style={{
          background:
            "linear-gradient(to right, #7DD3FC, #EC4899, #DDA0DD, #7DD3FC)",
        }}
      />
    </section>
  );
}

/* ─── Features ─── */
function Features() {
  const features = [
    {
      title: "20 Curated Styles",
      description:
        "From Bauhaus to Y2K Revival \u2014 each style is a rich design direction file covering typography, color, spacing, and components.",
      accent: "#7DD3FC",
    },
    {
      title: "LLM-Native Guardrails",
      description:
        "Not pixel specs, but design direction. Define what kind of font, color, and spacing \u2014 the AI makes specific choices within the style\u2019s constraints.",
      accent: "#EC4899",
    },
    {
      title: "Drop-in Skill",
      description:
        "Works with Claude Code, Cursor, Codex, Copilot, and more. One command to install, then just ask for UI.",
      accent: "#DDA0DD",
    },
    {
      title: "Open Source",
      description:
        "MIT licensed and community-driven. Add your own styles, improve existing ones, or use them as-is.",
      accent: "#7DD3FC",
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F0F0F8 0%, #E4E4E7 50%, #F0F0F8 100%)",
      }}
    >
      {/* Decorative sparkles */}
      <StarSparkle
        size={16}
        className="absolute top-16 right-[10%] text-[#EC4899]/50 hidden lg:block animate-[y2kSpin_7s_linear_infinite]"
      />
      <StarSparkle
        size={12}
        className="absolute bottom-20 left-[8%] text-[#7DD3FC]/50 hidden lg:block animate-[y2kSpin_5s_linear_infinite]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center mb-14">
          <p className="font-[family:var(--font-fredoka)] text-[#EC4899] font-medium text-lg mb-3 tracking-wide">
            Why UI Skills?
          </p>
          <h2
            className="font-[family:var(--font-bungee)] text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider"
            style={chromeTextStyle}
          >
            Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <GlossyCard key={feature.title}>
              <div
                className="w-10 h-10 rounded-full mb-5 shrink-0"
                style={{
                  background: `radial-gradient(circle at 30% 30%, #FFF 0%, ${feature.accent} 70%)`,
                  boxShadow: `0 0 16px ${feature.accent}40`,
                }}
              />
              <h3 className="font-[family:var(--font-fredoka)] text-2xl sm:text-3xl font-semibold text-[#1A1A2E] mb-3">
                {feature.title}
              </h3>
              <p className="font-[family:var(--font-inter)] text-base sm:text-lg text-[#1A1A2E]/70 leading-relaxed">
                {feature.description}
              </p>
            </GlossyCard>
          ))}
        </div>
      </div>

      {/* Bottom gradient border */}
      <div
        className="h-[3px]"
        style={{
          background:
            "linear-gradient(to right, #DDA0DD, #7DD3FC, #EC4899, #DDA0DD)",
        }}
      />
    </section>
  );
}

/* ─── Style Gallery ─── */
function StyleGallery() {
  const accentColors = [
    "#7DD3FC",
    "#EC4899",
    "#DDA0DD",
    "#FFB7B2",
    "#B5EAD7",
    "#C7CEEA",
  ];

  return (
    <section
      id="styles"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #E0E0EA 0%, #D4D4DC 40%, #ECECF4 100%)",
      }}
    >
      {/* Decorative elements */}
      <ChromeOrb
        size={45}
        className="absolute top-16 left-[6%] hidden lg:block animate-[y2kFloat_5s_ease-in-out_infinite]"
      />
      <ChromeOrb
        size={30}
        className="absolute bottom-20 right-[8%] hidden lg:block animate-[y2kFloat_4s_ease-in-out_0.5s_infinite]"
      />
      <StarSparkle
        size={20}
        className="absolute top-24 right-[15%] text-[#EC4899]/40 hidden lg:block animate-[y2kSpin_6s_linear_infinite]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center mb-14">
          <p className="font-[family:var(--font-fredoka)] text-[#EC4899] font-medium text-lg mb-3 tracking-wide">
            The Collection
          </p>
          <h2
            className="font-[family:var(--font-bungee)] text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider"
            style={chromeTextStyle}
          >
            All 20 Styles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {ALL_STYLES.map((style, i) => {
            const accent = accentColors[i % accentColors.length];
            return (
              <div
                key={style.name}
                className="relative overflow-hidden rounded-2xl border border-white/50 p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  boxShadow: `0 4px 16px rgba(0,0,0,0.06), 0 0 12px ${accent}15`,
                }}
              >
                {/* Glossy sheen */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.08) 50%, transparent 50%, transparent 100%)",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="font-[family:var(--font-fredoka)] text-lg font-semibold text-[#1A1A2E] mb-2 leading-snug">
                    {style.name}
                  </h3>
                  <span
                    className="inline-block px-3 py-1 font-[family:var(--font-inter)] text-xs font-medium rounded-full"
                    style={{
                      background: `${accent}25`,
                      color: "#1A1A2E",
                      border: `1px solid ${accent}40`,
                    }}
                  >
                    {style.mood}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom gradient border */}
      <div
        className="h-[3px]"
        style={{
          background:
            "linear-gradient(to right, #7DD3FC, #EC4899, #DDA0DD, #7DD3FC)",
        }}
      />
    </section>
  );
}

/* ─── Installation ─── */
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
    <section
      id="install"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F0F0F8 0%, #E8E8F0 50%, #F0F0F8 100%)",
      }}
    >
      {/* Decorative */}
      <StarSparkle
        size={16}
        className="absolute top-20 left-[12%] text-[#7DD3FC]/50 hidden lg:block animate-[y2kSpin_6s_linear_infinite]"
      />
      <ChromeOrb
        size={40}
        className="absolute bottom-16 right-[6%] hidden lg:block animate-[y2kFloat_5s_ease-in-out_infinite]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center mb-14">
          <p className="font-[family:var(--font-fredoka)] text-[#EC4899] font-medium text-lg mb-3 tracking-wide">
            One Command
          </p>
          <h2
            className="font-[family:var(--font-bungee)] text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider"
            style={chromeTextStyle}
          >
            Get Started
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Terminal card with glossy treatment */}
          <div
            className="relative overflow-hidden rounded-[20px] p-6 sm:p-8"
            style={{
              background:
                "linear-gradient(145deg, #1A1A2E 0%, #111128 50%, #1A1A2E 100%)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.3), 0 0 40px rgba(0, 191, 255, 0.1), 0 0 80px rgba(236, 72, 153, 0.05)",
              border: "1px solid rgba(125, 211, 252, 0.2)",
            }}
          >
            {/* Glossy top sheen on terminal */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(125,211,252,0.08) 0%, transparent 40%)",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#FF5F57" }}
                />
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#FEBC2E" }}
                />
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#28C840" }}
                />
                <span className="font-[family:var(--font-inter)] text-xs text-white/30 ml-2">
                  terminal
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-[family:var(--font-inter)] text-[#7DD3FC] text-sm sm:text-base select-none shrink-0 font-mono">
                  $
                </span>
                <code className="font-[family:var(--font-inter)] text-white/90 text-sm sm:text-base break-all leading-relaxed font-mono">
                  {command}
                </code>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="absolute top-6 right-6 sm:top-8 sm:right-8 px-4 py-2 rounded-full font-[family:var(--font-inter)] font-medium text-sm cursor-pointer transition-all duration-200 hover:brightness-110 z-10"
              style={{
                background:
                  "linear-gradient(to bottom, #7DD3FC 0%, #0EA5E9 100%)",
                color: "white",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 8px rgba(14, 165, 233, 0.3)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <p className="font-[family:var(--font-inter)] text-center text-[#1A1A2E]/70 text-lg mt-8 leading-relaxed">
            Then just ask your AI to build UI. It will read the style files and
            apply the guardrails automatically.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg, #1A1A2E 0%, #111128 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span
              className="font-[family:var(--font-bungee)] text-xl tracking-wide"
              style={chromeTextStyle}
            >
              UI Skills
            </span>
            <span className="font-[family:var(--font-inter)] text-sm text-white/40">
              MIT License
            </span>
            <span className="font-[family:var(--font-inter)] text-sm text-white/40">
              Made by{" "}
              <span className="text-white/70 font-medium">
                Heiberg Industries
              </span>
            </span>
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(to bottom, rgba(125,211,252,0.2), rgba(125,211,252,0.05))",
              border: "1px solid rgba(125,211,252,0.2)",
              boxShadow: "0 0 12px rgba(125,211,252,0.1)",
            }}
            aria-label="GitHub"
          >
            <GitHubIcon className="w-5 h-5 text-white/70" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Global Keyframes (injected via style tag) ─── */
function Y2kKeyframes() {
  return (
    <style>{`
      @keyframes y2kFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-14px); }
      }
      @keyframes y2kSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  );
}

/* ─── Page ─── */
export default function Y2kRevivalPage() {
  return (
    <div className="min-h-screen text-[#1A1A2E]">
      <Y2kKeyframes />
      <Navbar />
      <Hero />
      <Features />
      <StyleGallery />
      <Installation />
      <Footer />
    </div>
  );
}
