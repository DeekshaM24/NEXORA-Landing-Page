import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="section section-tint" id="testimonials">
      <div className="container">
        <div className="section-head">
          <h2>What teams say about working in Nexora</h2>
          <p className="muted">Illustrative demo content. These quotes and people are fictional.</p>
        </div>
        <div className="grid-3">
          {testimonials.map((t) => (
            <figure className="card quote" key={t.name}>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">{t.name.split(" ").map((n) => n[0]).join("")}</span>
                <span><strong>{t.name}</strong><small>{t.role}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
