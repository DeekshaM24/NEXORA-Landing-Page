"use client";
// Interactive dashboard built from React state + CSS (no screenshot).
// Ticking a task updates the counts and the progress bar live.
import { useState } from "react";
import { Check, Clock, Flame, CheckCircle2, LayoutGrid, FolderKanban, BarChart3, Settings } from "lucide-react";
import { initialTasks, projects, weekly } from "@/data/content";

const sideItems = [[LayoutGrid, "Overview"], [FolderKanban, "Projects"], [BarChart3, "Insights"], [Settings, "Settings"]];

export default function DashboardPreview({ compact = false }) {
  const [tasks, setTasks] = useState(initialTasks);
  const done = tasks.filter((t) => t.done).length;
  const pct = Math.round((done / tasks.length) * 100);
  const toggle = (id) => setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const stats = [
    { icon: CheckCircle2, label: "Tasks done", value: done + 38 },
    { icon: Clock, label: "Focus hours", value: "26.5" },
    { icon: Flame, label: "Day streak", value: 12 },
  ];

  return (
    <div className={`dash ${compact ? "dash-compact" : ""}`} role="group" aria-label="Nexora dashboard preview (sample data)">
      <aside className="dash-side" aria-hidden="true">
        <span className="dash-dot" />
        {sideItems.map(([Icon, label], i) => (
          <span key={label} className={`dash-nav ${i === 0 ? "active" : ""}`}><Icon size={16} /><em>{label}</em></span>
        ))}
      </aside>
      <div className="dash-main">
        <div className="dash-head">
          <div><h3>Good morning, Alex</h3><p className="muted">Here is your week at a glance.</p></div>
          <span className="pill">Sample data</span>
        </div>

        <div className="dash-stats">
          {stats.map(({ icon: Icon, label, value }) => (
            <div className="stat" key={label}>
              <Icon size={18} aria-hidden="true" />
              <strong>{value}</strong><span>{label}</span>
            </div>
          ))}
        </div>

        <div className="dash-projects">
          {projects.map((p) => (
            <div className="proj" key={p.name}>
              <span className="proj-tag" style={{ background: p.color }}>{p.team}</span>
              <h4>{p.name}</h4>
              <div className="bar" role="progressbar" aria-valuenow={p.progress} aria-valuemin={0} aria-valuemax={100} aria-label={`${p.name} progress`}>
                <i style={{ width: `${p.progress}%`, background: p.color }} />
              </div>
              <div className="proj-foot"><span>{p.tasks}</span><b>{p.progress}%</b></div>
            </div>
          ))}
        </div>

        {!compact && (
          <div className="dash-lower">
            <div className="panel">
              <div className="panel-head">
                <h4>This week&rsquo;s tasks</h4>
                <span className="muted">{done} of {tasks.length} done ({pct}%)</span>
              </div>
              <div className="bar bar-lg" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Weekly task progress"><i style={{ width: `${pct}%` }} /></div>
              <ul className="tasks">
                {tasks.map((t) => (
                  <li key={t.id}>
                    <button className={`check ${t.done ? "on" : ""}`} role="checkbox" aria-checked={t.done} aria-label={t.title} onClick={() => toggle(t.id)}>
                      {t.done && <Check size={14} strokeWidth={3} />}
                    </button>
                    <span className={t.done ? "done" : ""}>{t.title}<small>{t.project}</small></span>
                    <em>{t.due}</em>
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel">
              <div className="panel-head"><h4>Focus score</h4><span className="muted">By day</span></div>
              <div className="chart" role="img" aria-label="Focus score by weekday: Mon 55, Tue 80, Wed 65, Thu 92, Fri 70">
                {weekly.map((w) => (
                  <div key={w.d} className="col"><i style={{ height: `${w.v}%` }} /><span>{w.d}</span></div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
