import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export type StyleMeta = {
  slug: string;
  name: string;
  mood: string[];
  description: string;
};

export const styles: StyleMeta[] = [
  { slug: "anti-design", name: "Anti-Design", mood: ["chaotic", "punk", "raw"], description: "Rules exist to be broken — chaotic, confrontational, and unapologetically raw." },
  { slug: "art-deco", name: "Art Deco", mood: ["luxurious", "geometric", "ornamental"], description: "Geometric luxury meets gilded elegance — symmetry, gold, and grandeur." },
  { slug: "aurora", name: "Aurora", mood: ["vibrant", "ethereal", "dynamic"], description: "Living color in motion — gradient meshes that breathe and shift." },
  { slug: "bauhaus", name: "Bauhaus", mood: ["geometric", "bold", "functional"], description: "Form follows function — primary colors, sharp geometry, no decoration." },
  { slug: "bento-grid", name: "Bento Grid", mood: ["modular", "dense", "organized"], description: "Everything in its place — mixed-size tiles in a tight, satisfying grid." },
  { slug: "claymorphism", name: "Claymorphism", mood: ["friendly", "3D", "playful"], description: "Soft, squishy, and delightfully tactile — UI sculpted from digital clay." },
  { slug: "corporate-modern", name: "Corporate Modern", mood: ["professional", "trustworthy", "clean"], description: "The universal language of business — polished, reliable, and conversion-ready." },
  { slug: "dark-mode-premium", name: "Dark Mode Premium", mood: ["sophisticated", "cinematic", "exclusive"], description: "Darkness as luxury — layered surfaces, restrained glow, premium feel." },
  { slug: "flat-design", name: "Flat Design", mood: ["clean", "bold", "iconic"], description: "Zero pretense — pure color, sharp iconography, no shadows or gradients." },
  { slug: "glassmorphism", name: "Glassmorphism", mood: ["futuristic", "elegant", "premium"], description: "Frosted glass over vibrant color — translucent layers and soft light." },
  { slug: "japandi", name: "Japandi", mood: ["calm", "minimal", "warm"], description: "Where Japanese zen meets Scandinavian warmth — quiet, natural, intentional." },
  { slug: "material-design", name: "Material Design", mood: ["systematic", "accessible", "reliable"], description: "Digital paper and ink — layered surfaces with consistent elevation." },
  { slug: "minimalism", name: "Minimalism", mood: ["reduced", "silent", "essential"], description: "Less, then less again — only what matters, nothing else." },
  { slug: "neubrutalism", name: "Neubrutalism", mood: ["bold", "playful", "rebellious"], description: "Thick borders, hard shadows, loud colors — design that refuses to be quiet." },
  { slug: "neumorphism", name: "Neumorphism", mood: ["subtle", "embedded", "soft"], description: "Extruded from the surface — soft dual shadows on a monochrome plane." },
  { slug: "organic", name: "Organic", mood: ["natural", "flowing", "warm"], description: "Nature's curves in digital form — fluid, living, and impossibly smooth." },
  { slug: "retro-futurism", name: "Retro-Futurism", mood: ["nostalgic", "neon", "sci-fi"], description: "The future as the past imagined it — neon grids, chrome, and starlight." },
  { slug: "skeuomorphism", name: "Skeuomorphism", mood: ["familiar", "tangible", "crafted"], description: "Digital objects that look and feel real — leather, metal, wood, paper." },
  { slug: "swiss", name: "Swiss Design", mood: ["precise", "mathematical", "objective"], description: "The grid is God — Helvetica, mathematical spacing, one accent color." },
  { slug: "y2k-revival", name: "Y2K Revival", mood: ["metallic", "bubbly", "glossy"], description: "Chrome, bubbles, and digital optimism — the future as imagined in 1999." },
];

export const styleComponents: Record<string, ComponentType> = {
  "anti-design": dynamic(() => import("@/components/styles/anti-design")),
  "art-deco": dynamic(() => import("@/components/styles/art-deco")),
  "aurora": dynamic(() => import("@/components/styles/aurora")),
  "bauhaus": dynamic(() => import("@/components/styles/bauhaus")),
  "bento-grid": dynamic(() => import("@/components/styles/bento-grid")),
  "claymorphism": dynamic(() => import("@/components/styles/claymorphism")),
  "corporate-modern": dynamic(() => import("@/components/styles/corporate-modern")),
  "dark-mode-premium": dynamic(() => import("@/components/styles/dark-mode-premium")),
  "flat-design": dynamic(() => import("@/components/styles/flat-design")),
  "glassmorphism": dynamic(() => import("@/components/styles/glassmorphism")),
  "japandi": dynamic(() => import("@/components/styles/japandi")),
  "material-design": dynamic(() => import("@/components/styles/material-design")),
  "minimalism": dynamic(() => import("@/components/styles/minimalism")),
  "neubrutalism": dynamic(() => import("@/components/styles/neubrutalism")),
  "neumorphism": dynamic(() => import("@/components/styles/neumorphism")),
  "organic": dynamic(() => import("@/components/styles/organic")),
  "retro-futurism": dynamic(() => import("@/components/styles/retro-futurism")),
  "skeuomorphism": dynamic(() => import("@/components/styles/skeuomorphism")),
  "swiss": dynamic(() => import("@/components/styles/swiss")),
  "y2k-revival": dynamic(() => import("@/components/styles/y2k-revival")),
};
