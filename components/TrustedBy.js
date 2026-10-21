import { brands } from "@/data/content";

export default function TrustedBy() {
  return (
    <section className="trusted" aria-labelledby="trusted-title">
      <div className="container">
        <p id="trusted-title" className="trusted-title">Trusted by teams at sample companies</p>
        <ul className="brands">{brands.map((b) => <li key={b}>{b}</li>)}</ul>
      </div>
    </section>
  );
}
