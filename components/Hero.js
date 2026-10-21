"use client";
import { Sparkles, ArrowRight } from "lucide-react";
import DashboardPreview from "./DashboardPreview";
import { useDemo } from "./DemoProvider";
import { scrollToSection } from "./scroll";

export default function Hero() {
  const { openDemo } = useDemo();
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <button className="badge" onClick={() => scrollToSection("features")}>
          <Sparkles size={14} aria-hidden="true" /> New: workflow automation is here <ArrowRight size={14} aria-hidden="true" />
        </button>
        <h1>Make Space for Your Best Work</h1>
        <p className="lead">Nexora brings your tasks, projects, and team into one calm workspace, so you always know what to do next and how far along you are.</p>
        <div className="hero-cta">
          <button className="btn btn-primary btn-lg" onClick={() => openDemo("Get started free")}>Get Started Free</button>
          <button className="btn btn-outline btn-lg" onClick={() => scrollToSection("features")}>Explore Features</button>
        </div>
        <div className="hero-preview"><DashboardPreview compact /></div>
      </div>
    </section>
  );
}
