"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#about" className={styles.logo}>
          Alexey
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.list}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className={styles.link} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`${styles.toggle} ${isOpen ? styles.toggleOpen : ""}`}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-nav" className={styles.panel} aria-label="Mobile">
          <ul className={styles.panelList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={styles.panelLink}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
