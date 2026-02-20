# designbrief — Style Index

A catalog of all available design directions. Use this file to recommend styles based on project context.

## How to Use This Index

Each entry includes:
- **Mood**: The emotional tone the style conveys
- **Best for**: Industries and product types where it works well
- **Contrast with**: Styles that are its opposite (helps narrow down choices)
- **Complexity**: How much design skill is needed to execute well (low/medium/high)
- **Dark mode**: How well the style supports dark mode (excellent/good/possible/not recommended)
- **Accessibility**: Inherent strengths or risks to watch for
- **Responsive**: How complex the responsive adaptation is (simple/moderate/complex)
- **Content density**: How much content the style naturally accommodates (minimal/moderate/dense)

## Available Styles

### Art Deco
- **Mood**: Luxurious, geometric, glamorous, bold, opulent, dramatic
- **Best for**: Luxury e-commerce, hospitality, fashion, jewelry, events, high-end real estate
- **Contrast with**: Flat Design, Corporate Modern, Minimalism
- **Complexity**: High
- **Dark mode**: Excellent — dark-first style; deep blacks let gold metallic accents shine
- **Accessibility**: Gold on dark has good contrast (~7.5:1); watch ALL CAPS + wide tracking for screen readers
- **Responsive**: Simple — centered single-column layout adapts naturally
- **Content density**: Minimal-moderate — generous spacing, ceremonial pacing
- **File**: `art-deco.md`

### Aurora / Gradient
- **Mood**: Dreamy, vibrant, dynamic, contemporary, creative, fresh
- **Best for**: Creative tools, music apps, social platforms, Gen-Z products, portfolio sites
- **Contrast with**: Swiss, Flat Design, Japandi
- **Complexity**: Medium
- **Dark mode**: Excellent — vivid gradients pop on dark; soft gradients work on light
- **Accessibility**: Variable contrast on gradient backgrounds is the #1 risk; use overlays for text
- **Responsive**: Complex — blur effects need simplification on mobile for performance
- **Content density**: Minimal-moderate — gradients need space to breathe
- **File**: `aurora.md`

### Bauhaus
- **Mood**: Rational, structured, confident, modern, intellectual
- **Best for**: Architecture, product companies, portfolios, agencies, editorial
- **Contrast with**: Glassmorphism, Art Deco, Organic
- **Complexity**: Medium
- **Dark mode**: Good — primary colors work on both dark and light; invert base tones
- **Accessibility**: Good — high contrast, strong hierarchy, clear structure
- **Responsive**: Moderate — grid-dependent layouts need careful breakpoint planning
- **Content density**: Moderate — structured but not cramped
- **File**: `bauhaus.md`

### Bento Grid
- **Mood**: Organized, modular, Apple-inspired, informational, polished
- **Best for**: Feature showcases, marketing pages, product launches, dashboards
- **Contrast with**: Minimalism, Swiss, Editorial
- **Complexity**: Medium
- **Dark mode**: Good — cells work in both modes; dark variant feels Apple-like
- **Accessibility**: Good — structured grid is navigable; ensure cell content has proper heading hierarchy
- **Responsive**: Complex — multi-column grid requires careful stacking/reflow strategy per breakpoint
- **Content density**: Moderate-dense — each cell is its own content unit
- **File**: `bento-grid.md`

### Corporate Modern
- **Mood**: Professional, trustworthy, clean, systematic, contemporary
- **Best for**: Enterprise SaaS, B2B products, consulting, financial services, legal tech
- **Contrast with**: Neubrutalism, Art Deco, Retro Futurism
- **Complexity**: Low-Medium
- **Dark mode**: Good — clean palette adapts easily; most SaaS products need both modes
- **Accessibility**: Excellent — built for compliance; high contrast, clear hierarchy, standard patterns
- **Responsive**: Simple — standard grid patterns with well-known breakpoint strategies
- **Content density**: Dense — designed for information-rich enterprise interfaces
- **File**: `corporate-modern.md`

### Dark Mode Premium
- **Mood**: Sophisticated, immersive, high-contrast, cinematic, technical
- **Best for**: Developer tools, fintech, media/entertainment, analytics, trading interfaces
- **Contrast with**: Flat Design, Japandi, Corporate Modern
- **Complexity**: Medium
- **Dark mode**: Excellent — dark-only by design; this IS the dark mode style
- **Accessibility**: Good — high contrast on dark backgrounds; watch for light-on-dark readability for astigmatic users
- **Responsive**: Moderate — elevation/layer system needs thought at mobile breakpoints
- **Content density**: Moderate-dense — supports data-heavy dashboards and sparse landing pages
- **File**: `dark-mode-premium.md`

### Flat Design
- **Mood**: Clean, efficient, approachable, modern, confident
- **Best for**: Mobile apps, utility tools, enterprise SaaS, documentation, dashboards
- **Contrast with**: Glassmorphism, Neumorphism, Art Deco
- **Complexity**: Low
- **Dark mode**: Excellent — simple palette inverts cleanly; both modes work perfectly
- **Accessibility**: Excellent — clean, high contrast, no visual effects that reduce readability
- **Responsive**: Simple — flat elements scale trivially; no complex effects to manage
- **Content density**: Dense — the most content-efficient style; flat surfaces maximize usable space
- **File**: `flat-design.md`

### Freeform
- **Mood**: Personal, eclectic, expressive, unbound, authored, distinctive
- **Best for**: Personal sites, creative portfolios, passion projects, artist pages, blogs, indie products
- **Contrast with**: Corporate Modern, Material Design, Swiss
- **Complexity**: High (requires strong personal taste — no rulebook to follow)
- **Dark mode**: Depends — let your palette decide; some Freeform palettes are inherently one mode
- **Accessibility**: Risky — unusual color combinations and unconventional layouts need careful contrast checking
- **Responsive**: Moderate — overlapping/absolute elements need mobile simplification
- **Content density**: Variable — let the content dictate; no prescribed density
- **File**: `freeform.md`

### Glassmorphism
- **Mood**: Futuristic, elegant, premium, sleek, layered
- **Best for**: SaaS dashboards, fintech, music apps, OS interfaces, landing pages
- **Contrast with**: Flat Design, Neubrutalism, Bauhaus
- **Complexity**: Medium-High
- **Dark mode**: Excellent — works beautifully in both; dark is the most impactful variant
- **Accessibility**: Risky — variable blur backgrounds create unpredictable text contrast; needs overlays
- **Responsive**: Complex — backdrop-filter is expensive on mobile; needs progressive enhancement
- **Content density**: Moderate — glass panels need breathing room to show their depth
- **File**: `glassmorphism.md`

### Japandi
- **Mood**: Serene, balanced, warm minimalism, crafted, natural, contemplative
- **Best for**: Wellness, interior design, premium e-commerce, ceramics, editorial, boutique brands
- **Contrast with**: Neubrutalism, Retro Futurism, Dark Mode Premium
- **Complexity**: Medium
- **Dark mode**: Good — warm dark tones (charcoal, warm black) preserve the cozy feel
- **Accessibility**: Risky — warm low-contrast palette is the defining challenge; secondary text often borderline
- **Responsive**: Simple — single-column, generous spacing adapts naturally
- **Content density**: Minimal — extreme whitespace (ma) is a defining characteristic
- **File**: `japandi.md`

### Material Design
- **Mood**: Systematic, reliable, structured, accessible, approachable
- **Best for**: Enterprise apps, productivity tools, Android-first products, admin panels
- **Contrast with**: Neubrutalism, Art Deco, Glassmorphism
- **Complexity**: Medium
- **Dark mode**: Excellent — Google provides full dark theme spec with elevation-based surfaces
- **Accessibility**: Excellent — accessibility is built into the spec; strong focus states, contrast, touch targets
- **Responsive**: Moderate — elevation system and dense layouts need attention at mobile breakpoints
- **Content density**: Dense — designed for productive, information-rich applications
- **File**: `material-design.md`

### Minimalism
- **Mood**: Calm, focused, refined, spacious, sophisticated, intentional
- **Best for**: Luxury brands, editorial, portfolios, wellness, fashion, architecture
- **Contrast with**: Neubrutalism, Bento Grid, Aurora
- **Complexity**: Medium-High
- **Dark mode**: Excellent — both modes work; the simplicity makes mode switching effortless
- **Accessibility**: Good — clean layouts with high contrast; extreme whitespace benefits readability
- **Responsive**: Simple — sparse layouts adapt naturally to any screen size
- **Content density**: Minimal — whitespace is a defining element; every word earns its place
- **File**: `minimalism.md`

### Neubrutalism
- **Mood**: Bold, playful, rebellious, authentic, energetic
- **Best for**: Startups, creative tools, dev tools, portfolios, marketplaces
- **Contrast with**: Minimalism, Glassmorphism, Corporate Modern
- **Complexity**: Low-Medium
- **Dark mode**: Good — invert contrast (white borders on dark); use colored hard shadows instead of black
- **Accessibility**: Good — inherently high contrast (black borders, bold colors, thick strokes)
- **Responsive**: Simple — flat elements and bold borders scale trivially
- **Content density**: Moderate — bold elements take visual space but content can be packed
- **File**: `neubrutalism.md`

### Neumorphism
- **Mood**: Soft, tactile, subtle, modern, calm
- **Best for**: Smart home apps, music players, calculator apps, single-purpose tools, settings
- **Contrast with**: Flat Design, Neubrutalism, Swiss
- **Complexity**: Medium
- **Dark mode**: Possible — shadow inversion is tricky; needs darker base with carefully tuned light/dark shadows
- **Accessibility**: Risky — low contrast is a defining feature; buttons blend with backgrounds; the #1 accessibility challenge
- **Responsive**: Simple — soft elements scale well; shadow values stay proportional
- **Content density**: Minimal — single-purpose tools with sparse controls
- **File**: `neumorphism.md`

### Retro Futurism
- **Mood**: Nostalgic, optimistic, sci-fi, cinematic, dramatic, cool
- **Best for**: Gaming, entertainment, music apps, creative agencies, event sites
- **Contrast with**: Corporate Modern, Minimalism, Japandi
- **Complexity**: High
- **Dark mode**: Dark-only (synthwave) — neon glow requires darkness; space-age/Y2K variants support both
- **Accessibility**: Risky — neon glow reduces readability, motion-heavy backgrounds, high-saturation colors cause fatigue
- **Responsive**: Complex — perspective grids, star fields, and glow effects need mobile simplification
- **Content density**: Minimal — atmospheric style where backgrounds and effects ARE the content
- **File**: `retro-futurism.md`

### Anti-Design
- **Mood**: Chaotic, experimental, punk, provocative, raw, confrontational
- **Best for**: Art galleries, fashion brands, music, counterculture, creative agencies
- **Contrast with**: Corporate Modern, Material Design, Minimalism
- **Complexity**: High
- **Dark mode**: Both — deliberately inconsistent; sections can mix dark and light with no transition
- **Accessibility**: Risky — intentional discomfort conflicts with accessibility; maintain semantic HTML even when visuals are chaotic
- **Responsive**: Complex — broken grids, overlapping elements, and off-screen content need mobile adaptation
- **Content density**: Variable — can be aggressively sparse or aggressively dense; the inconsistency is intentional
- **File**: `anti-design.md`

### Claymorphism
- **Mood**: Friendly, 3D, soft, approachable, playful, warm
- **Best for**: Children's apps, onboarding, education, gamified interfaces, health/wellness
- **Contrast with**: Swiss, Anti-Design, Dark Mode Premium
- **Complexity**: Medium
- **Dark mode**: Possible — pastel-on-dark needs care; inner shadows become harder to perceive
- **Accessibility**: Good — friendly colors, readable text, large touch targets; watch pastel contrast ratios
- **Responsive**: Moderate — 3D shadow effects scale well but multi-shadow layers add mobile overhead
- **Content density**: Moderate — playful elements take space but content fits naturally
- **File**: `claymorphism.md`

### Organic / Biomorphic
- **Mood**: Natural, flowing, warm, human, calming, alive
- **Best for**: Wellness, food/beverage, sustainability, community platforms, beauty/skincare
- **Contrast with**: Swiss, Bauhaus, Anti-Design
- **Complexity**: Medium
- **Dark mode**: Good — warm dark tones (deep forest, dark earth) preserve the natural feel
- **Accessibility**: Good with care — warm palette similar to Japandi risks; secondary text needs darkening
- **Responsive**: Moderate — SVG wave dividers and blob shapes need responsive viewBox and mobile simplification
- **Content density**: Minimal-moderate — generous spacing mirrors nature's breathing room
- **File**: `organic.md`

### Skeuomorphism
- **Mood**: Familiar, warm, detailed, tangible, crafted, nostalgic
- **Best for**: Music production, creative tools, nostalgic products, game UIs, media players
- **Contrast with**: Flat Design, Minimalism, Swiss
- **Complexity**: High
- **Dark mode**: Good — depends on material (dark leather, dark wood, black brushed metal)
- **Accessibility**: Risky — busy textures reduce readability, compact layouts create small touch targets, subtle gradients hard for low vision
- **Responsive**: Complex — dense panel-based layouts need significant rethinking for mobile
- **Content density**: Moderate-dense — physical interfaces pack controls tightly
- **File**: `skeuomorphism.md`

### Swiss / International
- **Mood**: Precise, gridded, typographic, authoritative, rational, timeless
- **Best for**: News/media, government, institutional, academic, data journalism, editorial
- **Contrast with**: Neubrutalism, Aurora, Glassmorphism
- **Complexity**: Medium-High
- **Dark mode**: Good — high-contrast palette inverts cleanly; grid structure stays identical
- **Accessibility**: Excellent — clear hierarchy, high contrast, strong typography, minimal decorative noise
- **Responsive**: Moderate — strict grid system needs deliberate breakpoint strategy for column reflow
- **Content density**: Dense — designed for information delivery; the grid system maximizes text layout
- **File**: `swiss.md`

### Y2K Revival
- **Mood**: Nostalgic, metallic, bubbly, glossy, playful, optimistic
- **Best for**: Fashion, pop culture, social media, youth brands, beauty/cosmetics, events
- **Contrast with**: Minimalism, Japandi, Swiss
- **Complexity**: Medium-High
- **Dark mode**: Good — light mode is more authentic Y2K; dark mode works as "Matrix Y2K" variant
- **Accessibility**: Risky — chrome gradient text has variable contrast; candy colors (baby blue, pink) fail on white
- **Responsive**: Simple — CSS gradients are lightweight; glossy effects perform well on mobile
- **Content density**: Moderate — decorative chrome elements take visual space but leave room for content
- **File**: `y2k-revival.md`

---

## Recommendation Guide

When the user hasn't specified a style, ask about these dimensions:

1. **Tone**: Should it feel playful or serious? Warm or cool? Bold or subtle?
2. **Audience**: Technical users? General consumers? Luxury buyers? Young people?
3. **Industry**: What sector is the product in?
4. **Density**: Is there a lot of content/data, or is it sparse and focused?
5. **Differentiation**: Do they want to blend in (safe, familiar) or stand out (distinctive, opinionated)?

### Quick Recommendation Matrix

| If the user wants... | Suggest |
|---|---|
| "Professional and clean" | Corporate Modern, Swiss, Flat Design |
| "Bold and unique" | Neubrutalism, Retro Futurism, Art Deco |
| "Premium and sleek" | Glassmorphism, Dark Mode Premium, Minimalism |
| "Friendly and approachable" | Flat Design, Corporate Modern, Material Design |
| "Intellectual and structured" | Bauhaus, Swiss, Material Design |
| "Fun and trendy" | Aurora, Neubrutalism, Retro Futurism |
| "Calm and refined" | Japandi, Minimalism, Bauhaus |
| "Data-heavy dashboard" | Flat Design, Bento Grid, Material Design, Dark Mode Premium |
| "Luxury / high-end" | Art Deco, Minimalism, Japandi |
| "Developer tools" | Dark Mode Premium, Neubrutalism, Corporate Modern |
| "Creative / portfolio" | Aurora, Retro Futurism, Glassmorphism, Minimalism |
| "Feature showcase" | Bento Grid, Aurora, Corporate Modern |
| "Nostalgic / retro" | Y2K Revival, Retro Futurism, Skeuomorphism |
| "Nature / wellness" | Organic, Japandi, Minimalism |
| "Playful / kids" | Claymorphism, Neubrutalism, Y2K Revival |
| "Experimental / edgy" | Anti-Design, Retro Futurism, Neubrutalism |
| "Personal / distinctly mine" | Freeform, Anti-Design, Neubrutalism |
| "Tactile / physical" | Skeuomorphism, Neumorphism, Claymorphism |
| "Dark mode first" | Dark Mode Premium, Art Deco, Retro Futurism |
| "Accessibility priority" | Flat Design, Material Design, Corporate Modern, Swiss |
| "Mobile-first / lightweight" | Flat Design, Neubrutalism, Minimalism, Y2K Revival |
