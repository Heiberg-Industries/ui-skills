"use client";

import { useState, useEffect } from "react";
import { styleComponents, styles } from "@/data/styles";
import StylePicker from "@/components/style-picker";

const DEFAULT_STYLE = "corporate-modern";

export default function Home() {
  const [currentStyle, setCurrentStyle] = useState(DEFAULT_STYLE);

  // Read style from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const style = params.get("style");
    if (style && styles.some((s) => s.slug === style)) {
      setCurrentStyle(style);
    }
  }, []);

  // Update URL when style changes
  function handleStyleChange(slug: string) {
    setCurrentStyle(slug);
    const url = new URL(window.location.href);
    url.searchParams.set("style", slug);
    window.history.replaceState({}, "", url.toString());
  }

  const StyleComponent = styleComponents[currentStyle];

  return (
    <>
      {StyleComponent && <StyleComponent />}
      <StylePicker current={currentStyle} onSelect={handleStyleChange} />
    </>
  );
}
