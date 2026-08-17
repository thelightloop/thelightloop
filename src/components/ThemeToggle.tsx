"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ChandraIcon, SuryaIcon } from "./ThemeIcons";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="theme-toggle"
        aria-label="Toggle theme"
        disabled
      >
        <span className="theme-toggle-icon" aria-hidden="true" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode (Surya)" : "Switch to dark mode (Chandra)"}
      title={isDark ? "Surya — light mode" : "Chandra — dark mode"}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {isDark ? <SuryaIcon /> : <ChandraIcon />}
      </span>
    </button>
  );
}
