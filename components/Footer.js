"use client";
import Logo from "./Logo";
import { footerColumns } from "@/data/content";
import { scrollToSection } from "./scroll";
import { useDemo } from "./DemoProvider";

export default function Footer() {
  const { notify } = useDemo();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-about">Calm, focused project management for modern teams.</p>
        </div>
        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <button onClick={() => (l.id ? scrollToSection(l.id) : notify(`"${l.label}" is not part of this demo.`))}>{l.label}</button>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nexora. Demo project for portfolio use. Not a real product.</p>
      </div>
    </footer>
  );
}
