"use client";
import { useDemo } from "./DemoProvider";
import { scrollToSection } from "./scroll";

export default function FinalCTA() {
  const { openDemo } = useDemo();
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta">
          <h2 id="cta-title">Ready to organize your work?</h2>
          <p>Set up your workspace in minutes and give every project a clear path to done.</p>
          <div className="hero-cta">
            <button className="btn btn-white btn-lg" onClick={() => openDemo("Create your workspace")}>Create your workspace</button>
            <button className="btn btn-ghost-light btn-lg" onClick={() => scrollToSection("pricing")}>View pricing</button>
          </div>
        </div>
      </div>
    </section>
  );
}
