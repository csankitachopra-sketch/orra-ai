"use client";
import { useState } from "react";

const dimensions = [
  { name: "Decision Clarity", score: 68, status: "Clear pattern", note: "You can name the choice — the friction is usually elsewhere." },
  { name: "Self-Awareness", score: 62, status: "Taking shape", note: "You're starting to catch the story underneath the reaction." },
  { name: "Emotional Steadiness", score: 55, status: "Early signal", note: "Feelings arrive fully. Naming them still takes a beat." },
  { name: "Cognitive Bandwidth", score: 58, status: "Taking shape", note: "Mind runs full. Quiet is scarce but when it comes, it lands." },
  { name: "Relational Coherence", score: 71, status: "Clear pattern", note: "You sense the weather between people. Sometimes too early." },
  { name: "Life Direction", score: 49, status: "Early signal", note: "The next chapter is felt more than named. That's honest." },
];

const nodes = [
  { label: "Stability", cat: "Values", x: 18, y: 28 },
  { label: "Family duty", cat: "Beliefs", x: 72, y: 22 },
  { label: "Meaningful work", cat: "Goals", x: 50, y: 48 },
  { label: "Fear of risk", cat: "Beliefs", x: 22, y: 68 },
  { label: "Belonging", cat: "Identity", x: 78, y: 62 },
  { label: "Parents' path", cat: "Life", x: 48, y: 78 },
];

const threeDay = [
  { day: 1, title: "Name the loop", task: "Write one sentence: \"I stay because without it I am afraid I will…\" No editing." },
  { day: 2, title: "Separate their safety from yours", task: "Think of one person who left a stable path. Write what you actually think of them now." },
  { day: 3, title: "Tiny permission", task: "List three things you would try in a week if failure was impossible. Keep the list." },
];

export default function PatternsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <div className="space-y-7 pb-4">
      <header>
        <p className="text-xs font-medium uppercase tracking-wider text-orra-muted">Your reading</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-orra-text">Patterns</h1>
        <p className="mt-1.5 text-sm leading-relaxed text-orra-muted">Six dimensions of how you're living — honest about uncertainty.</p>
      </header>

      <section className="orra-card overflow-hidden">
        <div className="bg-gradient-to-br from-orra-accent-soft/80 to-orra-warm-soft/60 px-5 py-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-orra-soft">ORRA Quotient</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight text-orra-text">64</span>
                <span className="text-sm text-orra-muted">/ 100</span>
              </div>
            </div>
            <span className="rounded-full bg-orra-elevated/90 px-3 py-1 text-xs font-medium text-orra-accent">Taking shape</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-orra-soft">Range narrows as conversations accumulate. Not a label — a mirror.</p>
        </div>
      </section>

      <section className="space-y-2.5">
        <h2 className="text-xs font-medium uppercase tracking-wider text-orra-muted">Six dimensions</h2>
        {dimensions.map((d) => {
          const open = expanded === d.name;
          return (
            <button key={d.name} type="button" onClick={() => setExpanded(open ? null : d.name)} className="orra-card w-full p-4 text-left transition hover:shadow-orra-soft">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-orra-text">{d.name}</span>
                <span className="shrink-0 text-xs text-orra-muted">{d.status}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-orra-surface">
                <div className="h-full rounded-full bg-orra-accent transition-all" style={{ width: `${d.score}%` }} />
              </div>
              <div className="mt-1.5 flex justify-between text-xs text-orra-muted">
                <span>{d.score}</span>
                <span className="text-orra-accent">{open ? "Hide" : "Insight"}</span>
              </div>
              {open && <p className="mt-3 border-t border-orra-border pt-3 text-sm leading-relaxed text-orra-soft">{d.note}</p>}
            </button>
          );
        })}
      </section>

      <section className="space-y-3">
        <div>
          <h2 className="text-xs font-medium uppercase tracking-wider text-orra-muted">Mind Map</h2>
          <p className="mt-1 text-sm text-orra-soft">What keeps showing up together — beliefs, values, goals.</p>
        </div>
        <div className="orra-card relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orra-surface/40 to-orra-elevated" />
          <div className="absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orra-accent text-xs font-semibold text-white shadow-orra">You</div>
          <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
            {nodes.map((n, i) => <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke="var(--orra-border)" strokeWidth="0.4" />)}
          </svg>
          {nodes.map((n) => (
            <div key={n.label} className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orra-border bg-orra-elevated px-2.5 py-1 text-center shadow-orra-soft" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
              <span className="block text-[10px] font-medium text-orra-text">{n.label}</span>
              <span className="block text-[9px] text-orra-muted">{n.cat}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xs font-medium uppercase tracking-wider text-orra-muted">Something to try</h2>
        <div className="orra-card p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-orra-accent">3-day try</p>
          <div className="mt-4 space-y-4">
            {threeDay.map((d) => (
              <div key={d.day} className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orra-accent-soft text-xs font-semibold text-orra-accent">{d.day}</div>
                <div>
                  <p className="text-sm font-medium text-orra-text">{d.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-orra-soft">{d.task}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="orra-card p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-orra-warm">7-day shift</p>
          <p className="mt-2 text-sm font-medium text-orra-text">Separating inherited safety from your own direction</p>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-orra-soft">
            <li className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orra-warm" />Each morning: one line on what felt heavy vs light yesterday.</li>
            <li className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orra-warm" />Once this week: a 20-minute walk with no podcast — only notice.</li>
            <li className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orra-warm" />Before any big decision: ask “Whose voice is this — mine or theirs?”</li>
          </ul>
        </div>
      </section>
      <p className="text-center text-xs text-orra-muted">Guidance only · You decide · Not therapy</p>
    </div>
  );
}
