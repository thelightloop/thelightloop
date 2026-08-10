"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav aria-label="Main">
      <div className="nav-inner">
        <a className="nav-logo" href="#top" onClick={() => setMenuOpen(false)}>
          ~/<b>prakash</b>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
        </button>

        <ul id="nav-menu" className={`nav-links${menuOpen ? " open" : ""}`}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
