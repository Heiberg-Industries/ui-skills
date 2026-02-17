"use client";

import { useState, useRef, useEffect } from "react";
import { styles, type StyleMeta } from "@/data/styles";

type StylePickerProps = {
  current: string;
  onSelect: (slug: string) => void;
};

export default function StylePicker({ current, onSelect }: StylePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const currentStyle = styles.find((s) => s.slug === current);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-5 py-2.5 bg-black/90 text-white rounded-full shadow-lg backdrop-blur-sm border border-white/10 hover:bg-black transition-colors cursor-pointer text-sm font-medium"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r="2.5" />
          <circle cx="17.5" cy="10.5" r="2.5" />
          <circle cx="8.5" cy="7.5" r="2.5" />
          <circle cx="6.5" cy="12.5" r="2.5" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
        {currentStyle?.name || "Select Style"}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[340px] max-h-[70vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-2 md:w-[380px]">
          <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Choose a style
          </div>
          {styles.map((style: StyleMeta) => (
            <button
              key={style.slug}
              onClick={() => {
                onSelect(style.slug);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors cursor-pointer ${
                style.slug === current
                  ? "bg-gray-100 text-black"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{style.name}</span>
                {style.slug === current && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-black">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <div className="flex gap-1.5 mt-1">
                {style.mood.map((tag) => (
                  <span key={tag} className="text-[10px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
