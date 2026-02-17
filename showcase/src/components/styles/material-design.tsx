"use client";

import React, { useState } from "react";

// ─── Material Design Token Constants ─────────────────────────────────────────

const MD = {
  primary: "#6200EE",
  onPrimary: "#FFFFFF",
  secondary: "#03DAC6",
  surface: "#FFFFFF",
  onSurface: "#1C1B1F",
  background: "#FAFAFA",
  outline: "#79747E",
  error: "#B3261E",
  elevation: {
    0: "none",
    1: "0 1px 1px rgba(0,0,0,0.14), 0 2px 1px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.20)",
    2: "0 2px 2px rgba(0,0,0,0.14), 0 3px 1px rgba(0,0,0,0.12), 0 1px 5px rgba(0,0,0,0.20)",
    4: "0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.20)",
    8: "0 8px 10px rgba(0,0,0,0.14), 0 3px 14px rgba(0,0,0,0.12), 0 5px 5px rgba(0,0,0,0.20)",
    16: "0 16px 24px rgba(0,0,0,0.14), 0 6px 30px rgba(0,0,0,0.12), 0 8px 10px rgba(0,0,0,0.20)",
  },
} as const;

// ─── Sub-components ──────────────────────────────────────────────────────────

function GitHubIcon({ className = "w-6 h-6" }: { className?: string }) {
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

// ─── Feature icons ───────────────────────────────────────────────────────────

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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 7.5h.008v.008H9.5V7.5zm0 3h.008v.008H9.5v-.008zm3-3h.008v.008H12.5V7.5zm3 0h.008v.008H15.5V7.5zm0 3h.008v.008H15.5v-.008zm3-3h.008v.008H18.5V7.5z"
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

// ─── Data ────────────────────────────────────────────────────────────────────

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

// ─── Ripple hook ─────────────────────────────────────────────────────────────

function useRipple() {
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);

  const createRipple = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 500);
  };

  const rippleElements = ripples.map((ripple) => (
    <span
      key={ripple.id}
      className="absolute rounded-full pointer-events-none animate-[material-ripple_0.5s_ease-out_forwards]"
      style={{
        left: ripple.x,
        top: ripple.y,
        width: 0,
        height: 0,
        background: "rgba(255,255,255,0.3)",
        transform: "translate(-50%, -50%)",
      }}
    />
  ));

  return { createRipple, rippleElements };
}

// ─── Section components ──────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 font-[family:var(--font-roboto)]"
      style={{
        backgroundColor: MD.primary,
        boxShadow: MD.elevation[4],
        height: 64,
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a
            href="#"
            className="font-[family:var(--font-roboto)] font-medium text-[20px] tracking-[0.15px]"
            style={{ color: MD.onPrimary }}
          >
            UI Skills
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium tracking-[0.1px] uppercase opacity-90 hover:opacity-100 transition-opacity duration-300"
                style={{
                  color: MD.onPrimary,
                  letterSpacing: "0.1px",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              style={{ color: MD.onPrimary }}
            >
              <GitHubIcon />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden opacity-90 hover:opacity-100 transition-opacity duration-300"
            style={{ color: MD.onPrimary }}
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
          className="md:hidden"
          style={{
            backgroundColor: MD.primary,
            boxShadow: MD.elevation[8],
          }}
        >
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-4 text-[14px] font-medium uppercase tracking-[0.1px] rounded opacity-90 hover:opacity-100 hover:bg-white/10 transition-all duration-300"
                style={{ color: MD.onPrimary }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 px-4 text-[14px] font-medium uppercase tracking-[0.1px] rounded opacity-90 hover:opacity-100 hover:bg-white/10 transition-all duration-300"
              style={{ color: MD.onPrimary }}
              aria-label="View on GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const primaryRipple = useRipple();
  const outlinedRipple = useRipple();

  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: MD.surface }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="font-[family:var(--font-roboto)] text-[36px] sm:text-[45px] lg:text-[57px] font-normal leading-tight"
          style={{
            color: MD.onSurface,
            letterSpacing: "-0.25px",
          }}
        >
          Design direction for
          <br className="hidden sm:block" /> AI-generated UI
        </h1>
        <p
          className="mt-6 max-w-[640px] mx-auto text-[16px] leading-[1.5] font-[family:var(--font-roboto)]"
          style={{
            color: MD.outline,
            letterSpacing: "0.5px",
          }}
        >
          20 style guardrail files that give LLMs the context to build tasteful,
          consistent interfaces.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Contained / Filled button */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center justify-center h-10 px-6 text-[14px] font-medium uppercase tracking-[1.25px] rounded transition-shadow duration-300 w-full sm:w-auto hover:shadow-[0_8px_10px_rgba(0,0,0,0.14),0_3px_14px_rgba(0,0,0,0.12),0_5px_5px_rgba(0,0,0,0.20)]"
            style={{
              backgroundColor: MD.primary,
              color: MD.onPrimary,
              borderRadius: 4,
              boxShadow: MD.elevation[2],
              letterSpacing: "1.25px",
            }}
            onClick={primaryRipple.createRipple}
          >
            {primaryRipple.rippleElements}
            VIEW ON GITHUB
          </a>
          {/* Outlined button */}
          <a
            href="#styles"
            className="relative overflow-hidden inline-flex items-center justify-center h-10 px-6 text-[14px] font-medium uppercase tracking-[1.25px] transition-colors duration-300 w-full sm:w-auto"
            style={{
              color: MD.primary,
              border: `1px solid ${MD.primary}`,
              borderRadius: 4,
              letterSpacing: "1.25px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = `${MD.primary}0A`)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
            onClick={outlinedRipple.createRipple}
          >
            {outlinedRipple.rippleElements}
            BROWSE STYLES
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
      className="rounded p-4 transition-shadow duration-300 cursor-default hover:shadow-[0_8px_10px_rgba(0,0,0,0.14),0_3px_14px_rgba(0,0,0,0.12),0_5px_5px_rgba(0,0,0,0.20)]"
      style={{
        backgroundColor: MD.surface,
        borderRadius: 4,
        boxShadow: MD.elevation[1],
      }}
    >
      <div
        className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4"
        style={{ backgroundColor: `${MD.primary}14`, color: MD.primary }}
      >
        {icon}
      </div>
      <h3
        className="font-[family:var(--font-roboto)] text-[16px] font-medium mb-2"
        style={{
          color: MD.onSurface,
          letterSpacing: "0.15px",
        }}
      >
        {title}
      </h3>
      <p
        className="text-[14px] leading-[1.43]"
        style={{
          color: MD.outline,
          letterSpacing: "0.25px",
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
      className="py-24 lg:py-32"
      style={{ backgroundColor: MD.background }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-[family:var(--font-roboto)] text-[28px] sm:text-[32px] font-normal"
            style={{ color: MD.onSurface }}
          >
            Everything you need
          </h2>
          <p
            className="mt-4 text-[16px] max-w-[640px] mx-auto"
            style={{
              color: MD.outline,
              letterSpacing: "0.5px",
            }}
          >
            Guardrails, not specs. Style direction that lets AI make great design
            choices.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
      className="rounded p-4 transition-shadow duration-300 cursor-default hover:shadow-[0_8px_10px_rgba(0,0,0,0.14),0_3px_14px_rgba(0,0,0,0.12),0_5px_5px_rgba(0,0,0,0.20)]"
      style={{
        backgroundColor: MD.surface,
        borderRadius: 4,
        boxShadow: MD.elevation[1],
      }}
    >
      <h3
        className="font-[family:var(--font-roboto)] text-[14px] font-medium mb-3"
        style={{
          color: MD.onSurface,
          letterSpacing: "0.1px",
        }}
      >
        {name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block text-[12px] font-medium px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${MD.primary}14`,
              color: MD.primary,
              letterSpacing: "0.5px",
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
      className="py-24 lg:py-32"
      style={{ backgroundColor: MD.surface }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-[family:var(--font-roboto)] text-[28px] sm:text-[32px] font-normal"
            style={{ color: MD.onSurface }}
          >
            All 20 Styles
          </h2>
          <p
            className="mt-4 text-[16px] max-w-[640px] mx-auto"
            style={{
              color: MD.outline,
              letterSpacing: "0.5px",
            }}
          >
            Each style is a complete design direction file with typography,
            color, spacing, components, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {STYLES.map((style) => (
            <StyleCard key={style.name} name={style.name} tags={style.tags} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Installation() {
  const [copied, setCopied] = useState(false);
  const copyRipple = useRipple();
  const command =
    "git clone https://github.com/Heiberg-Industries/ui-skills.git .claude/skills/ui-skills";

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    copyRipple.createRipple(e);
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="install"
      className="py-24 lg:py-32"
      style={{ backgroundColor: MD.background }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[640px] mx-auto text-center">
          <h2
            className="font-[family:var(--font-roboto)] text-[28px] sm:text-[32px] font-normal"
            style={{ color: MD.onSurface }}
          >
            Get Started
          </h2>
          <p
            className="mt-4 text-[16px]"
            style={{
              color: MD.outline,
              letterSpacing: "0.5px",
            }}
          >
            Clone the repository into your project&apos;s skills directory and
            start building with style.
          </p>
          <div className="mt-10 relative">
            <div
              className="rounded p-5 text-left overflow-x-auto"
              style={{
                backgroundColor: "#1C1B1F",
                borderRadius: 4,
                boxShadow: MD.elevation[2],
              }}
            >
              <code className="text-[14px] text-gray-100 font-mono whitespace-pre leading-[1.5]">
                {command}
              </code>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="relative overflow-hidden absolute top-3 right-3 text-[12px] font-medium uppercase tracking-[1.25px] px-3 py-1.5 rounded transition-colors duration-300"
              style={{
                color: MD.secondary,
                backgroundColor: "rgba(3,218,198,0.12)",
                borderRadius: 4,
              }}
              aria-label="Copy install command to clipboard"
            >
              {copyRipple.rippleElements}
              {copied ? "COPIED!" : "COPY"}
            </button>
          </div>
          <p
            className="mt-6 text-[14px]"
            style={{
              color: MD.outline,
              letterSpacing: "0.25px",
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
        backgroundColor: MD.surface,
        borderTop: `1px solid ${MD.outline}33`,
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span
              className="font-[family:var(--font-roboto)] font-medium text-[14px]"
              style={{
                color: MD.onSurface,
                letterSpacing: "0.1px",
              }}
            >
              UI Skills
            </span>
            <span
              className="text-[14px]"
              style={{
                color: MD.outline,
                letterSpacing: "0.25px",
              }}
            >
              MIT License
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span
              className="text-[14px]"
              style={{
                color: MD.outline,
                letterSpacing: "0.25px",
              }}
            >
              Made by Heiberg Industries
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="UI Skills on GitHub"
              className="transition-colors duration-300"
              style={{ color: MD.outline }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = MD.primary)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = MD.outline)
              }
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Ripple keyframe injection ───────────────────────────────────────────────

function MaterialRippleStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          @keyframes material-ripple {
            0% {
              width: 0;
              height: 0;
              opacity: 0.3;
            }
            100% {
              width: 500px;
              height: 500px;
              opacity: 0;
            }
          }
        `,
      }}
    />
  );
}

// ─── Main page component ─────────────────────────────────────────────────────

export default function MaterialDesignPage() {
  return (
    <div
      className="min-h-screen font-[family:var(--font-roboto)] antialiased"
      style={{
        backgroundColor: MD.background,
        color: MD.onSurface,
      }}
    >
      <MaterialRippleStyles />
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
