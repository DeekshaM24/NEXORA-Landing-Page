import { features } from "@/data/content";

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <h2>Everything you need to stay on track</h2>
          <p className="muted">Six tools that work together, so your plan and your progress never drift apart.</p>
        </div>
        <div className="grid-3">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="card feature" key={title}>
              <span className="icon-box"><Icon size={22} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p className="muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
