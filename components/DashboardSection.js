import DashboardPreview from "./DashboardPreview";

export default function DashboardSection() {
  return (
    <section className="section section-tint" id="dashboard">
      <div className="container">
        <div className="section-head">
          <h2>See your whole week in one view</h2>
          <p className="muted">This preview is interactive. Tick a task to watch the progress update.</p>
        </div>
        <DashboardPreview />
      </div>
    </section>
  );
}
