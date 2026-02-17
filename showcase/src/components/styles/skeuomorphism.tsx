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

// ─── Skeuomorphism style constants ──────────────────────────────────────────

// Linen texture as a CSS gradient pattern (simulates woven linen)
const LINEN_BG = `repeating-linear-gradient(
  0deg,
  transparent,
  transparent 2px,
  rgba(0,0,0,0.015) 2px,
  rgba(0,0,0,0.015) 4px
),
repeating-linear-gradient(
  90deg,
  transparent,
  transparent 2px,
  rgba(0,0,0,0.01) 2px,
  rgba(0,0,0,0.01) 4px
),
linear-gradient(to bottom, #E8DFD0, #DDD4C4)`;

// Brushed metal gradient
const METAL_BG = `linear-gradient(to bottom, #E8E8E8 0%, #CACACA 50%, #D0D0D0 51%, #B8B8B8 100%)`;

// ─── Section components ─────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: "linear-gradient(to bottom, #E8E8E8 0%, #CACACA 100%)",
        borderBottom: "1px solid #A0A0A0",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 3px rgba(0,0,0,0.2)",
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="#"
            className="font-[family:Georgia,Palatino,serif] font-bold text-lg tracking-tight select-none"
            style={{
              color: "#333333",
              textShadow: "0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            UI Skills
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-100"
                style={{
                  color: "#555555",
                  textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)";
                  e.currentTarget.style.boxShadow =
                    "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)";
                  e.currentTarget.style.borderTop =
                    "1px solid rgba(255,255,255,0.5)";
                  e.currentTarget.style.borderBottom =
                    "1px solid rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderTop = "none";
                  e.currentTarget.style.borderBottom = "none";
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Separator */}
            <div
              className="w-px h-6 mx-2"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.05))",
                boxShadow: "1px 0 0 rgba(255,255,255,0.3)",
              }}
            />

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="p-2 rounded-md transition-all duration-100"
              style={{
                color: "#555555",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)";
                e.currentTarget.style.boxShadow =
                  "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <GitHubIcon />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md transition-all duration-100"
            style={{
              color: "#555555",
              background:
                "linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)",
              borderTop: "1px solid rgba(255,255,255,0.5)",
              borderLeft: "1px solid rgba(255,255,255,0.3)",
              borderBottom: "1px solid rgba(0,0,0,0.15)",
              borderRight: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "6px",
            }}
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
        <div
          className="md:hidden pb-4"
          style={{
            borderTop: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
          }}
        >
          <div className="px-4 pt-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium rounded-md"
                style={{
                  color: "#555555",
                  textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                  background:
                    "linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)",
                  borderTop: "1px solid rgba(255,255,255,0.5)",
                  borderBottom: "1px solid rgba(0,0,0,0.15)",
                  borderRadius: "6px",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md"
              style={{
                color: "#555555",
                textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                background:
                  "linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)",
                borderTop: "1px solid rgba(255,255,255,0.5)",
                borderBottom: "1px solid rgba(0,0,0,0.15)",
                borderRadius: "6px",
              }}
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
    <section
      className="py-20 lg:py-28"
      style={{
        backgroundImage: LINEN_BG,
        backgroundSize: "4px 4px, 4px 4px, 100% 100%",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="font-[family:Georgia,Palatino,serif] text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight"
          style={{
            color: "#2A2118",
            textShadow: "0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          Design direction for
          <br className="hidden sm:block" /> AI-generated UI
        </h1>
        <p
          className="mt-5 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
          style={{
            fontFamily: "'Lucida Grande', 'Helvetica Neue', system-ui, sans-serif",
            color: "#6B5D4F",
            textShadow: "0 1px 0 rgba(255,255,255,0.3)",
          }}
        >
          20 style guardrail files that give LLMs the context to build tasteful,
          consistent interfaces.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA — iOS-style blue push button */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-7 py-3 text-sm font-semibold transition-all duration-100 w-full sm:w-auto cursor-pointer select-none active:translate-y-px"
            style={{
              background:
                "linear-gradient(to bottom, #4CA1FF 0%, #0070E0 100%)",
              color: "#FFFFFF",
              textShadow: "0 -1px 0 rgba(0,0,0,0.25)",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
              border: "1px solid #005ABB",
              borderTopColor: "rgba(255,255,255,0.15)",
              borderRadius: "8px",
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(to bottom, #005ABB 0%, #4CA1FF 100%)";
              e.currentTarget.style.boxShadow =
                "inset 0 2px 4px rgba(0,0,0,0.35)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(to bottom, #4CA1FF 0%, #0070E0 100%)";
              e.currentTarget.style.boxShadow =
                "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(to bottom, #4CA1FF 0%, #0070E0 100%)";
              e.currentTarget.style.boxShadow =
                "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)";
            }}
          >
            View on GitHub
          </a>

          {/* Secondary CTA — brushed metal push button */}
          <a
            href="#styles"
            className="inline-flex items-center justify-center rounded-lg px-7 py-3 text-sm font-semibold transition-all duration-100 w-full sm:w-auto cursor-pointer select-none active:translate-y-px"
            style={{
              background:
                "linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)",
              color: "#333333",
              textShadow: "0 1px 0 rgba(255,255,255,0.6)",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.8)",
              border: "1px solid #AAAAAA",
              borderTopColor: "rgba(255,255,255,0.5)",
              borderLeftColor: "rgba(255,255,255,0.3)",
              borderBottomColor: "rgba(0,0,0,0.2)",
              borderRightColor: "rgba(0,0,0,0.1)",
              borderRadius: "8px",
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(to bottom, #C8C8C8 0%, #DFDFDF 100%)";
              e.currentTarget.style.boxShadow =
                "inset 0 2px 4px rgba(0,0,0,0.3)";
              e.currentTarget.style.textShadow =
                "0 -1px 0 rgba(255,255,255,0.3)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)";
              e.currentTarget.style.boxShadow =
                "0 1px 3px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.8)";
              e.currentTarget.style.textShadow =
                "0 1px 0 rgba(255,255,255,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)";
              e.currentTarget.style.boxShadow =
                "0 1px 3px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.8)";
              e.currentTarget.style.textShadow =
                "0 1px 0 rgba(255,255,255,0.6)";
            }}
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
      className="rounded-xl p-6 lg:p-7 transition-shadow duration-200"
      style={{
        background: "linear-gradient(to bottom, #F5F0E8 0%, #E8E0D2 100%)",
        border: "1px solid #C8BDA8",
        borderTopColor: "rgba(255,255,255,0.6)",
        borderLeftColor: "rgba(255,255,255,0.4)",
        borderBottomColor: "rgba(0,0,0,0.12)",
        borderRightColor: "rgba(0,0,0,0.08)",
        boxShadow:
          "0 2px 6px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.5)",
        borderRadius: "12px",
      }}
    >
      {/* Icon in a recessed well */}
      <div
        className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-4"
        style={{
          background: "#EDE6DA",
          boxShadow:
            "inset 0 1px 3px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,0.5)",
          border: "1px solid #C8BDA8",
          borderTopColor: "#B5A890",
          color: "#007AFF",
        }}
      >
        {icon}
      </div>
      <h3
        className="font-[family:Georgia,Palatino,serif] text-base font-bold mb-2"
        style={{
          color: "#2A2118",
          textShadow: "0 1px 0 rgba(255,255,255,0.4)",
        }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{
          fontFamily:
            "'Lucida Grande', 'Helvetica Neue', system-ui, sans-serif",
          color: "#6B5D4F",
          textShadow: "0 1px 0 rgba(255,255,255,0.3)",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function Features() {
  return (
    <section
      id="features"
      className="py-20 lg:py-28"
      style={{
        background: METAL_BG,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="font-[family:Georgia,Palatino,serif] text-2xl sm:text-3xl font-bold"
            style={{
              color: "#2A2118",
              textShadow: "0 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            Everything you need
          </h2>
          <p
            className="mt-3 text-base sm:text-lg max-w-xl mx-auto"
            style={{
              fontFamily:
                "'Lucida Grande', 'Helvetica Neue', system-ui, sans-serif",
              color: "#6B5D4F",
              textShadow: "0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            Guardrails, not specs. Style direction that lets AI make great
            design choices.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
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
      className="rounded-lg p-4 transition-shadow duration-150"
      style={{
        background: "linear-gradient(to bottom, #F7F7F7 0%, #EBEBEB 100%)",
        border: "1px solid #B5B5B5",
        borderTopColor: "rgba(255,255,255,0.7)",
        borderLeftColor: "rgba(255,255,255,0.4)",
        borderBottomColor: "rgba(0,0,0,0.15)",
        borderRightColor: "rgba(0,0,0,0.1)",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.7)",
        borderRadius: "8px",
      }}
    >
      <h3
        className="text-sm font-semibold mb-2.5"
        style={{
          fontFamily:
            "'Lucida Grande', 'Helvetica Neue', system-ui, sans-serif",
          color: "#333333",
          textShadow: "0 1px 0 rgba(255,255,255,0.5)",
        }}
      >
        {name}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block text-xs font-medium px-2.5 py-1 rounded"
            style={{
              background: "#E8E4DE",
              color: "#6B5D4F",
              textShadow: "0 1px 0 rgba(255,255,255,0.4)",
              boxShadow:
                "inset 0 1px 2px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.5)",
              border: "1px solid #C8BFA8",
              borderTopColor: "#B5AA96",
              borderRadius: "4px",
            }}
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
    <section
      id="styles"
      className="py-20 lg:py-28"
      style={{
        backgroundImage: LINEN_BG,
        backgroundSize: "4px 4px, 4px 4px, 100% 100%",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="font-[family:Georgia,Palatino,serif] text-2xl sm:text-3xl font-bold"
            style={{
              color: "#2A2118",
              textShadow: "0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            All 20 Styles
          </h2>
          <p
            className="mt-3 text-base sm:text-lg max-w-xl mx-auto"
            style={{
              fontFamily:
                "'Lucida Grande', 'Helvetica Neue', system-ui, sans-serif",
              color: "#6B5D4F",
              textShadow: "0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            Each style is a complete design direction file with typography,
            color, spacing, components, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
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
    <section
      id="install"
      className="py-20 lg:py-28"
      style={{
        background: METAL_BG,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="font-[family:Georgia,Palatino,serif] text-2xl sm:text-3xl font-bold"
            style={{
              color: "#2A2118",
              textShadow: "0 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            Get Started
          </h2>
          <p
            className="mt-3 text-base sm:text-lg"
            style={{
              fontFamily:
                "'Lucida Grande', 'Helvetica Neue', system-ui, sans-serif",
              color: "#6B5D4F",
              textShadow: "0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            Clone the repository into your project&apos;s skills directory and
            start building with style.
          </p>

          {/* Inset code field — mimics a recessed text input */}
          <div className="mt-10 relative">
            <div
              className="rounded-lg p-5 text-left overflow-x-auto"
              style={{
                background: "#FAFAFA",
                border: "1px solid #BBBBBB",
                borderTopColor: "#999999",
                borderRadius: "6px",
                boxShadow:
                  "inset 0 2px 4px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(0,0,0,0.04), 0 1px 0 rgba(255,255,255,0.5)",
              }}
            >
              <code
                className="text-sm font-mono whitespace-pre"
                style={{ color: "#333333" }}
              >
                {command}
              </code>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="absolute top-3 right-3 px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all duration-100 cursor-pointer select-none"
              style={{
                background:
                  "linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)",
                color: "#555555",
                textShadow: "0 1px 0 rgba(255,255,255,0.6)",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)",
                border: "1px solid #AAAAAA",
                borderTopColor: "rgba(255,255,255,0.5)",
                borderBottomColor: "rgba(0,0,0,0.2)",
                borderRadius: "5px",
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to bottom, #C8C8C8 0%, #DFDFDF 100%)";
                e.currentTarget.style.boxShadow =
                  "inset 0 2px 4px rgba(0,0,0,0.3)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)";
                e.currentTarget.style.boxShadow =
                  "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)";
                e.currentTarget.style.boxShadow =
                  "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)";
              }}
              aria-label="Copy install command to clipboard"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p
            className="mt-7 text-sm"
            style={{
              fontFamily:
                "'Lucida Grande', 'Helvetica Neue', system-ui, sans-serif",
              color: "#6B5D4F",
              textShadow: "0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
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
    <footer
      style={{
        background: "linear-gradient(to bottom, #D4D4D4 0%, #BABABA 100%)",
        borderTop: "1px solid #A0A0A0",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          className="rounded-xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            background: "linear-gradient(to bottom, #ECECEC 0%, #D4D4D4 100%)",
            border: "1px solid #B0B0B0",
            borderTopColor: "rgba(255,255,255,0.6)",
            borderBottomColor: "rgba(0,0,0,0.12)",
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
            borderRadius: "10px",
          }}
        >
          <div className="flex items-center gap-5">
            <span
              className="font-[family:Georgia,Palatino,serif] font-bold text-sm"
              style={{
                color: "#333333",
                textShadow: "0 1px 0 rgba(255,255,255,0.5)",
              }}
            >
              UI Skills
            </span>
            {/* Separator pip */}
            <span
              className="w-1 h-1 rounded-full"
              style={{
                background: "#A0A0A0",
                boxShadow: "0 1px 0 rgba(255,255,255,0.4)",
              }}
            />
            <span
              className="text-sm"
              style={{
                fontFamily:
                  "'Lucida Grande', 'Helvetica Neue', system-ui, sans-serif",
                color: "#777777",
                textShadow: "0 1px 0 rgba(255,255,255,0.4)",
              }}
            >
              MIT License
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span
              className="text-sm"
              style={{
                fontFamily:
                  "'Lucida Grande', 'Helvetica Neue', system-ui, sans-serif",
                color: "#777777",
                textShadow: "0 1px 0 rgba(255,255,255,0.4)",
              }}
            >
              Made by Heiberg Industries
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="UI Skills on GitHub"
              className="p-2 rounded-md transition-all duration-100"
              style={{
                color: "#666666",
                background:
                  "linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)",
                border: "1px solid #AAAAAA",
                borderTopColor: "rgba(255,255,255,0.5)",
                borderBottomColor: "rgba(0,0,0,0.15)",
                borderRadius: "6px",
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to bottom, #C8C8C8 0%, #DFDFDF 100%)";
                e.currentTarget.style.boxShadow =
                  "inset 0 2px 4px rgba(0,0,0,0.3)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)";
                e.currentTarget.style.boxShadow =
                  "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)";
                e.currentTarget.style.boxShadow =
                  "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)";
              }}
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

export default function SkeuomorphismPage() {
  return (
    <div
      className="min-h-screen antialiased"
      style={{
        fontFamily:
          "'Lucida Grande', 'Helvetica Neue', system-ui, sans-serif",
        color: "#333333",
        backgroundColor: "#D4C9B8",
      }}
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
