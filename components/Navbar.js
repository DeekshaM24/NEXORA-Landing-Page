"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/data/content";
import { scrollToSection } from "./scroll";
import { useDemo } from "./DemoProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openDemo } = useDemo();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);

  const go = (id) => { setOpen(false); scrollToSection(id); };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label="Nexora home" onClick={(e) => { e.preventDefault(); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <Logo />
        </a>
        <nav aria-label="Primary" id="primary-nav" className={`nav-links ${open ? "open" : ""}`}>
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); go(l.id); }}>{l.label}</a>
          ))}
          <div className="nav-actions-mobile">
            <button className="btn btn-ghost" onClick={() => { setOpen(false); openDemo("Sign in to Nexora"); }}>Sign In</button>
            <button className="btn btn-primary" onClick={() => { setOpen(false); openDemo("Get started with Nexora"); }}>Get Started</button>
          </div>
        </nav>
        <div className="nav-actions">
          <button className="btn btn-ghost" onClick={() => openDemo("Sign in to Nexora")}>Sign In</button>
          <button className="btn btn-primary" onClick={() => openDemo("Get started with Nexora")}>Get Started</button>
        </div>
        <button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
