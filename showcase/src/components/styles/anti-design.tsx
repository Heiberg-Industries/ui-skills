"use client";

import React, { useState, useEffect } from "react";

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

/* ── Marquee banner ── */
function MarqueeBanner({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="inline-block animate-[marquee_12s_linear_infinite]">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="mx-8">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Navbar ── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:fixed md:top-0 md:bottom-auto md:left-auto md:right-0 md:w-auto">
      {/* Desktop — pushed to the right, vertical-ish strip */}
      <div className="hidden md:flex items-center gap-0 bg-[#FF00FF] border-b-4 border-l-4 border-black px-6 py-3">
        <a
          href="#"
          className="font-[family:var(--font-space-mono)] text-sm font-bold text-black uppercase tracking-[0.3em] mr-8"
        >
          UI Skills
        </a>
        <a
          href="#features"
          className="font-serif text-lg italic text-black hover:text-[#00FF00] transition-none px-3"
        >
          Features
        </a>
        <a
          href="#styles"
          className="font-[family:var(--font-inter)] text-xs uppercase tracking-[0.5em] text-black hover:text-[#00FF00] transition-none px-3"
        >
          Styles
        </a>
        <a
          href="#install"
          className="font-[family:var(--font-space-mono)] text-base text-black hover:text-[#00FF00] transition-none px-3 line-through"
        >
          Install
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 p-1 border-l-4 border-black pl-4"
          aria-label="GitHub"
        >
          <GitHubIcon className="w-5 h-5 text-black hover:text-[#00FF00]" />
        </a>
      </div>

      {/* Mobile — bottom bar, punk style */}
      <div className="md:hidden bg-black border-t-4 border-[#00FF00]">
        <div className="flex items-center justify-between px-4 py-3">
          <a
            href="#"
            className="font-[family:var(--font-space-mono)] text-[#00FF00] text-xs uppercase tracking-[0.3em] font-bold"
          >
            UI Skills
          </a>
          <button
            className="text-[#FF00FF] font-[family:var(--font-space-mono)] text-sm uppercase tracking-wider cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "[CLOSE]" : "[MENU]"}
          </button>
        </div>
        {mobileOpen && (
          <div className="flex flex-col border-t border-[#FF00FF] px-4 py-4 gap-4">
            <a
              href="#features"
              className="font-serif text-lg italic text-[#00FF00]"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </a>
            <a
              href="#styles"
              className="font-[family:var(--font-inter)] text-xs uppercase tracking-[0.5em] text-[#FF00FF]"
              onClick={() => setMobileOpen(false)}
            >
              Styles
            </a>
            <a
              href="#install"
              className="font-[family:var(--font-space-mono)] text-base text-white line-through"
              onClick={() => setMobileOpen(false)}
            >
              Install
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-[family:var(--font-space-mono)] text-sm text-[#FFFF00]"
              onClick={() => setMobileOpen(false)}
            >
              <GitHubIcon className="w-4 h-4" /> GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  const [glitchOffset, setGlitchOffset] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchOffset(true);
      setTimeout(() => setGlitchOffset(false), 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black min-h-screen flex flex-col justify-end overflow-hidden border-b-4 border-[#00FF00] pb-24 md:pb-12">
      {/* Visible grid lines — raw construction */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{
        backgroundImage: "linear-gradient(#00FF00 1px, transparent 1px), linear-gradient(90deg, #00FF00 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Giant rotated background text */}
      <div className="absolute top-[10%] -left-[5%] select-none pointer-events-none">
        <span
          className="font-serif text-[20vw] md:text-[15vw] font-bold text-[#FF00FF] opacity-[0.12] uppercase leading-none block -rotate-12"
        >
          ANTI
        </span>
      </div>
      <div className="absolute top-[35%] right-[-5%] select-none pointer-events-none">
        <span
          className="font-[family:var(--font-space-mono)] text-[18vw] md:text-[12vw] font-bold text-[#00FF00] opacity-[0.1] uppercase leading-none block rotate-6"
        >
          DESIGN
        </span>
      </div>

      {/* Marquee strip */}
      <div className="absolute top-0 left-0 right-0 bg-[#FFFF00] text-black font-[family:var(--font-space-mono)] text-[10px] uppercase tracking-[0.4em] py-1 overflow-hidden">
        <MarqueeBanner text="RULES EXIST TO BE BROKEN * CHAOTIC * CONFRONTATIONAL * RAW * PUNK *" />
      </div>

      {/* Main content — pushed to bottom-left (unconventional) */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-6xl">
        {/* Monospace raw label */}
        <span className="font-[family:var(--font-space-mono)] text-[10px] md:text-xs text-[#808080] uppercase tracking-[0.5em] block mb-4">
          {"<h1>"}
        </span>

        <h1 className="relative">
          <span
            className={`font-serif text-[clamp(60px,14vw,180px)] font-bold leading-[0.85] uppercase text-[#FF00FF] block ${glitchOffset ? "translate-x-1" : ""}`}
          >
            Design
          </span>
          <span
            className={`font-[family:var(--font-inter)] text-[clamp(40px,8vw,100px)] font-light leading-[1] lowercase text-[#00FF00] block -mt-2 md:-mt-4 ml-4 md:ml-12 ${glitchOffset ? "-translate-x-1" : ""}`}
          >
            direction
          </span>
          <span className="font-[family:var(--font-space-mono)] text-[clamp(20px,4vw,48px)] text-white block mt-2 md:mt-4 tracking-tight">
            for AI-generated UI
          </span>
        </h1>

        <span className="font-[family:var(--font-space-mono)] text-[10px] md:text-xs text-[#808080] uppercase tracking-[0.5em] block mt-2 mb-8">
          {"</h1>"}
        </span>

        {/* Subhead — different font, clashing placement */}
        <p className="font-serif italic text-base md:text-xl lg:text-2xl text-[#808080] max-w-xl leading-relaxed mb-10 ml-2 md:ml-8 border-l-4 border-[#FF00FF] pl-4">
          20 style guardrail files that give LLMs the context to build tasteful,
          consistent interfaces.
        </p>

        {/* CTAs — intentionally different styles */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00FF00] text-black font-[family:var(--font-space-mono)] font-bold text-lg md:text-xl uppercase tracking-wider px-8 py-4 border-0 shadow-[8px_8px_0px_#FF00FF] hover:shadow-none hover:bg-[#FF00FF] hover:text-[#00FF00] cursor-pointer select-none"
          >
            View on GitHub
          </a>
          <a
            href="#styles"
            className="inline-block font-serif italic text-[#00FF00] text-lg md:text-xl underline decoration-[#FF00FF] decoration-4 underline-offset-4 hover:text-[#FF00FF] hover:decoration-[#00FF00] py-4 cursor-pointer"
          >
            Browse styles
          </a>
        </div>
      </div>

      {/* Rotated side label */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
        <span className="font-[family:var(--font-space-mono)] text-[10px] text-[#808080] tracking-[0.6em] uppercase block rotate-90 origin-center whitespace-nowrap">
          UI Skills / 20 Styles / MIT License
        </span>
      </div>
    </section>
  );
}

/* ── Features ── */
function Features() {
  const features = [
    {
      title: "20 Curated Styles",
      description:
        "From Bauhaus to Y2K Revival \u2014 each style is a rich design direction file covering typography, color, spacing, and components.",
      borderColor: "border-l-[#00FF00]",
      bg: "bg-transparent",
      rotate: "md:-rotate-1",
      shadow: "shadow-[6px_6px_0px_#FF00FF]",
    },
    {
      title: "LLM-Native Guardrails",
      description:
        "Not pixel specs, but design direction. Define what kind of font, color, and spacing \u2014 the AI makes specific choices within the style\u2019s constraints.",
      borderColor: "border-l-[#FF00FF]",
      bg: "bg-[#FF00FF]",
      rotate: "md:rotate-1",
      shadow: "shadow-[6px_6px_0px_#00FF00]",
      textColor: "text-black",
    },
    {
      title: "Drop-in Skill",
      description:
        "Works with Claude Code, Cursor, Codex, Copilot, and more. One command to install, then just ask for UI.",
      borderColor: "border-l-[#FFFF00]",
      bg: "bg-transparent",
      rotate: "md:-rotate-2",
      shadow: "shadow-[-6px_6px_0px_#FFFF00]",
    },
    {
      title: "Open Source",
      description:
        "MIT licensed and community-driven. Add your own styles, improve existing ones, or use them as-is.",
      borderColor: "border-l-[#00FF00]",
      bg: "bg-[#00FF00]",
      rotate: "md:rotate-1",
      shadow: "shadow-[6px_-6px_0px_#FF00FF]",
      textColor: "text-black",
    },
  ];

  return (
    <section id="features" className="bg-[#0a0a0a] border-b-4 border-[#FF00FF] relative overflow-hidden">
      {/* Diagonal stripe accent */}
      <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-[#FF00FF] opacity-[0.05] skew-x-[-12deg] translate-x-16 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
        {/* Section header — asymmetric, raw */}
        <div className="mb-16 md:mb-24">
          <span className="font-[family:var(--font-space-mono)] text-[10px] text-[#808080] uppercase tracking-[0.5em] block mb-2">
            {"// section:features"}
          </span>
          <h2 className="font-serif text-[clamp(48px,10vw,120px)] font-bold text-white leading-[0.9] uppercase">
            Feat<span className="text-[#00FF00]">ures</span>
          </h2>
        </div>

        {/* Feature blocks — broken grid, overlapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.bg} ${f.rotate} border-l-4 ${f.borderColor} border-b border-b-[#333] p-6 md:p-8 ${f.shadow} hover:shadow-none transition-none relative`}
            >
              <h3
                className={`font-[family:var(--font-inter)] text-2xl md:text-3xl font-black ${f.textColor || "text-white"} mb-3 uppercase tracking-tight`}
              >
                {f.title}
              </h3>
              <p
                className={`font-[family:var(--font-space-mono)] text-sm md:text-base ${f.textColor || "text-[#808080]"} leading-relaxed`}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Style Gallery ── */
function StyleGallery() {
  const clashColors = [
    { bg: "bg-transparent", border: "border-[#00FF00]", text: "text-[#00FF00]", tagBg: "bg-[#00FF00]", tagText: "text-black" },
    { bg: "bg-transparent", border: "border-[#FF00FF]", text: "text-[#FF00FF]", tagBg: "bg-transparent", tagText: "text-[#FF00FF]" },
    { bg: "bg-transparent", border: "border-[#FFFF00]", text: "text-[#FFFF00]", tagBg: "bg-transparent", tagText: "text-[#FFFF00]" },
    { bg: "bg-[#FF00FF]", border: "border-black", text: "text-black", tagBg: "bg-black", tagText: "text-[#FF00FF]" },
    { bg: "bg-transparent", border: "border-[#808080]", text: "text-white", tagBg: "bg-transparent", tagText: "text-[#808080]" },
    { bg: "bg-[#00FF00]", border: "border-black", text: "text-black", tagBg: "bg-black", tagText: "text-[#00FF00]" },
  ];

  const rotations = [
    "",
    "md:-rotate-1",
    "md:rotate-1",
    "",
    "md:rotate-2",
    "md:-rotate-1",
    "",
    "md:rotate-1",
    "md:-rotate-2",
    "",
  ];

  const borderStyles = [
    "border-l-4 border-b",
    "border-r-4 border-t",
    "border-l-4",
    "border-4",
    "border-b-4",
    "border-l-4 border-b",
    "border-r-4",
    "border-4",
    "border-b-4 border-l",
    "border-l-4 border-b",
  ];

  return (
    <section id="styles" className="bg-black border-b-4 border-[#FFFF00] relative overflow-hidden">
      {/* Marquee divider */}
      <div className="bg-[#00FF00] text-black font-[family:var(--font-space-mono)] text-[10px] uppercase tracking-[0.4em] py-1 overflow-hidden">
        <MarqueeBanner text="ALL 20 STYLES * GUARDRAILS NOT SPECS * CHAOS WITH INTENTION * ANTI-DESIGN *" />
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-32 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:gap-8">
          <h2 className="font-[family:var(--font-inter)] text-[clamp(48px,10vw,120px)] font-black text-white leading-[0.85] uppercase">
            All <span className="font-serif italic text-[#FFFF00]">20</span> Styles
          </h2>
          <span className="font-[family:var(--font-space-mono)] text-[10px] text-[#808080] uppercase tracking-[0.3em] mb-2 md:mb-6 mt-2 md:mt-0">
            {"// the collection"}
          </span>
        </div>

        {/* Gallery — deliberately uneven grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {ALL_STYLES.map((style, i) => {
            const color = clashColors[i % clashColors.length];
            const rot = rotations[i % rotations.length];
            const bdr = borderStyles[i % borderStyles.length];
            return (
              <div
                key={style.name}
                className={`${color.bg} ${bdr} ${color.border} p-4 md:p-5 ${rot} hover:bg-[#FF00FF] hover:text-black group relative`}
              >
                <h3
                  className={`font-[family:var(--font-inter)] text-sm md:text-base font-bold ${color.text} uppercase tracking-wide group-hover:text-black mb-2 leading-snug`}
                >
                  {style.name}
                </h3>
                <span
                  className={`inline-block font-[family:var(--font-space-mono)] text-[10px] ${color.tagText} ${color.tagBg} px-2 py-0.5 uppercase tracking-wider group-hover:bg-black group-hover:text-[#00FF00]`}
                >
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

/* ── Installation ── */
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
    <section id="install" className="bg-[#FF00FF] border-b-4 border-black relative overflow-hidden">
      {/* Harsh diagonal overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(45deg, black 0px, black 2px, transparent 2px, transparent 20px)",
      }} />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="font-[family:var(--font-space-mono)] text-[10px] text-black uppercase tracking-[0.5em] block mb-2">
            {"$ install"}
          </span>
          <h2 className="font-serif text-[clamp(48px,10vw,120px)] font-bold text-black leading-[0.85] uppercase">
            Get <span className="font-[family:var(--font-inter)] font-light lowercase text-white">Started</span>
          </h2>
        </div>

        {/* Terminal block — raw, no border-radius */}
        <div className="bg-black border-l-4 border-[#00FF00] p-5 md:p-8 relative shadow-[10px_10px_0px_#00FF00]">
          {/* Fake title bar */}
          <div className="flex items-center gap-3 mb-6 border-b border-[#333] pb-4">
            <span className="w-2.5 h-2.5 bg-[#FF0000]" />
            <span className="w-2.5 h-2.5 bg-[#FFFF00]" />
            <span className="w-2.5 h-2.5 bg-[#00FF00]" />
            <span className="font-[family:var(--font-space-mono)] text-[10px] text-[#808080] uppercase tracking-wider ml-2">
              terminal
            </span>
          </div>

          <div className="flex items-start gap-3">
            <span className="font-[family:var(--font-space-mono)] text-[#00FF00] text-sm md:text-base select-none shrink-0">
              $
            </span>
            <code className="font-[family:var(--font-space-mono)] text-[#00FF00] text-xs sm:text-sm md:text-base break-all leading-relaxed">
              {command}
            </code>
          </div>

          <button
            onClick={handleCopy}
            className="absolute top-5 right-5 md:top-8 md:right-8 px-4 py-2 bg-[#FF00FF] text-black font-[family:var(--font-space-mono)] font-bold text-xs uppercase tracking-wider border-0 hover:bg-[#FFFF00] cursor-pointer select-none"
          >
            {copied ? "COPIED!" : "COPY"}
          </button>
        </div>

        <p className="font-serif italic text-base md:text-lg text-black mt-8 max-w-lg leading-relaxed">
          Then just ask your AI to build UI. It reads the style files and applies
          the guardrails automatically.
        </p>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="bg-black border-t-4 border-[#00FF00] pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <span className="font-[family:var(--font-space-mono)] text-[#00FF00] text-sm uppercase tracking-[0.3em] font-bold">
              UI Skills
            </span>
            <span className="font-serif italic text-xs text-[#808080]">
              MIT License
            </span>
            <span className="font-[family:var(--font-inter)] text-xs text-[#808080]">
              Made by{" "}
              <span className="text-[#FF00FF] font-semibold">
                Heiberg Industries
              </span>
            </span>
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-l-4 border-[#FF00FF] pl-4 hover:border-[#00FF00] transition-none"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-5 h-5 text-white hover:text-[#00FF00]" />
          </a>
        </div>

        {/* Raw visible markup — Anti-Design signature */}
        <div className="mt-8 pt-6 border-t border-[#333]">
          <span className="font-[family:var(--font-space-mono)] text-[10px] text-[#333] block">
            {"</body></html> <!-- rules exist to be broken -->"}
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ── Page ── */
export default function AntiDesignPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Inject keyframes for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <Navbar />
      <Hero />
      <Features />
      <StyleGallery />
      <Installation />
      <Footer />
    </div>
  );
}
