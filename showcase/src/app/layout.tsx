import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
  Plus_Jakarta_Sans,
  Space_Mono,
  DM_Sans,
  Roboto,
  Orbitron,
  Playfair_Display,
  Cormorant_Garamond,
  Nunito,
  Quicksand,
  Lora,
  Bungee,
  Fredoka,
  Sora,
  Poppins,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["400", "500", "700"] });
const plusJakartaSans = Plus_Jakarta_Sans({ variable: "--font-plus-jakarta-sans", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const spaceMono = Space_Mono({ variable: "--font-space-mono", subsets: ["latin"], weight: ["400", "700"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });
const orbitron = Orbitron({ variable: "--font-orbitron", subsets: ["latin"], weight: ["400", "500", "700", "800", "900"] });
const playfairDisplay = Playfair_Display({ variable: "--font-playfair-display", subsets: ["latin"] });
const cormorantGaramond = Cormorant_Garamond({ variable: "--font-cormorant-garamond", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const quicksand = Quicksand({ variable: "--font-quicksand", subsets: ["latin"] });
const lora = Lora({ variable: "--font-lora", subsets: ["latin"] });
const bungee = Bungee({ variable: "--font-bungee", subsets: ["latin"], weight: ["400"] });
const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });

const fontVariables = [
  inter, spaceGrotesk, plusJakartaSans, spaceMono, dmSans, roboto,
  orbitron, playfairDisplay, cormorantGaramond, nunito, quicksand,
  lora, bungee, fredoka, sora, poppins, jetbrainsMono,
].map((f) => f.variable).join(" ");

export const metadata: Metadata = {
  title: "UI Skills — Design Direction for AI-Generated UI",
  description: "20 style guardrail files that give LLMs the context to build tasteful, consistent interfaces. From Bauhaus to Y2K Revival.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariables} antialiased`}>
        {children}
      </body>
    </html>
  );
}
