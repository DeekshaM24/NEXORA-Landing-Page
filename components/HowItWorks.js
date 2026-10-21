import { steps } from "@/data/content";

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <h2>Up and running in three steps</h2>
          <p className="muted">No training needed. Start simple and add structure as you grow.</p>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li className="card step" key={s.title}>
              <span className="step-num" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p className="muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
