"use client";
import { Check } from "lucide-react";
import { plans } from "@/data/content";
import { useDemo } from "./DemoProvider";

export default function Pricing() {
  const { openDemo } = useDemo();
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head">
          <h2>Simple pricing that scales with you</h2>
          <p className="muted">Demo pricing only. Payments are not implemented on this site.</p>
        </div>
        <div className="grid-3 pricing">
          {plans.map((p) => (
            <article key={p.name} className={`card plan ${p.featured ? "featured" : ""}`}>
              {p.featured && <span className="plan-flag">Most popular</span>}
              <h3>{p.name}</h3>
              <p className="muted">{p.blurb}</p>
              <p className="price"><strong>{p.price}</strong><span>{p.period}</span></p>
              <ul>{p.features.map((f) => <li key={f}><Check size={16} aria-hidden="true" />{f}</li>)}</ul>
              <button className={`btn ${p.featured ? "btn-primary" : "btn-outline"}`} onClick={() => openDemo(`${p.name} plan (demo)`, "Payments are not implemented. This is a demo of how the sign-up step would look.")}>{p.cta}</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
