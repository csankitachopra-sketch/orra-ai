"use client";
import { useState } from "react";
const dims = [
  { n: "Decision Clarity", s: 68, st: "Clear pattern", note: "You can name the choice — friction is usually elsewhere." },
  { n: "Self-Awareness", s: 62, st: "Taking shape", note: "Catching the story underneath the reaction." },
  { n: "Emotional Steadiness", s: 55, st: "Early signal", note: "Feelings arrive fully. Naming them takes a beat." },
  { n: "Cognitive Bandwidth", s: 58, st: "Taking shape", note: "Mind runs full. Quiet lands when it comes." },
  { n: "Relational Coherence", s: 71, st: "Clear pattern", note: "You sense the weather between people early." },
  { n: "Life Direction", s: 49, st: "Early signal", note: "Next chapter is felt more than named." },
];
const nodes = [
  { l: "Stability", c: "Values", x: 18, y: 28 }, { l: "Family duty", c: "Beliefs", x: 72, y: 22 },
  { l: "Meaningful work", c: "Goals", x: 50, y: 48 }, { l: "Fear of risk", c: "Beliefs", x: 22, y: 68 },
  { l: "Belonging", c: "Identity", x: 78, y: 62 }, { l: "Parents' path", c: "Life", x: 48, y: 78 },
];
const days = [
  { d: 1, t: "Name the loop", task: "Write: \"I stay because without it I am afraid I will…\" No editing." },
  { d: 2, t: "Separate their safety", task: "Name one person who left a stable path. What do you actually think of them now?" },
  { d: 3, t: "Tiny permission", task: "List three things you'd try in a week if failure was impossible." },
];
export default function PatternsPage() {
  const [ex, setEx] = useState<string | null>(null);
  return (
    <div className="space-y-7 pb-4">
      <header>
        <p className="text-xs font-medium uppercase tracking-wider text-orra-muted">Your reading</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-orra-text">Patterns</h1>
        <p className="mt-1.5 text-sm text-orra-muted">Six dimensions of how you&apos;re living. Not a diagnosis — a mirror.</p>
      </header>
      <section className="orra-card overflow-hidden">
        <div className="bg-gradient-to-br from-orra-accent-soft/80 to-orra-warm-soft/60 px-5 py-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-orra-soft">ORRA Quotient</p>
              <div className="mt-1 flex items-baseline gap-2"><span className="text-5xl font-semibold text-orra-text">64</span><span className="text-sm text-orra-muted">/ 100</span></div>
            </div>
            <span className="rounded-full bg-orra-elevated/90 px-3 py-1 text-xs font-medium text-orra-accent">Taking shape</span>
          </div>
          <p className="mt-3 text-sm text-orra-soft">Range narrows as conversations accumulate. Computed once per session.</p>
        </div>
      </section>
      <section className="space-y-2.5">
        <h2 className="text-xs font-medium uppercase tracking-wider text-orra-muted">Six dimensions</h2>
        {dims.map((d) => {
          const open = ex === d.n;
          return (
            <button key={d.n} type="button" onClick={() => setEx(open ? null : d.n)} className="orra-card w-full p-4 text-left">
              <div className="mb-2 flex justify-between gap-3"><span className="text-sm font-medium text-orra-text">{d.n}</span><span className="text-xs text-orra-muted">{d.st}</span></div>
              <div className="h-1.5 overflow-hidden rounded-full bg-orra-surface"><div className="h-full rounded-full bg-orra-accent" style={{ width: `${d.s}%` }} /></div>
              <div className="mt-1.5 flex justify-between text-xs text-orra-muted"><span>{d.s}</span><span className="text-orra-accent">{open ? "Hide" : "Insight"}</span></div>
              {open && <p className="mt-3 border-t border-orra-border pt-3 text-sm text-orra-soft">{d.note}</p>}
            </button>
          );
        })}
      </section>
      <section className="space-y-3">
        <h2 className="text-xs font-medium uppercase tracking-wider text-orra-muted">Mind Map</h2>
        <p className="text-sm text-orra-soft">What keeps showing up together.</p>
        <div className="orra-card relative h-52 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orra-surface/40 to-orra-elevated" />
          <div className="absolute left-1/2 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orra-accent text-xs font-semibold text-white">You</div>
          <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
            {nodes.map((n, i) => <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke="var(--orra-border)" strokeWidth="0.4" />)}
          </svg>
          {nodes.map((n) => (
            <div key={n.l} className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orra-border bg-orra-elevated px-2 py-1 text-center" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
              <span className="block text-[10px] font-medium text-orra-text">{n.l}</span>
              <span className="block text-[9px] text-orra-muted">{n.c}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="text-xs font-medium uppercase tracking-wider text-orra-muted">Something to try</h2>
        <div className="orra-card p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-orra-accent">3-day try</p>
          <div className="mt-4 space-y-4">
            {days.map((d) => (
              <div key={d.d} className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orra-accent-soft text-xs font-semibold text-orra-accent">{d.d}</div>
                <div><p className="text-sm font-medium text-orra-text">{d.t}</p><p className="mt-0.5 text-sm text-orra-soft">{d.task}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="orra-card p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-orra-warm">7-day shift</p>
          <p className="mt-2 text-sm font-medium text-orra-text">Separating inherited safety from your own direction</p>
          <ul className="mt-4 space-y-2 text-sm text-orra-soft">
            <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orra-warm" />Morning: one line on heavy vs light yesterday.</li>
            <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orra-warm" />Once: 20-min walk, no podcast — only notice.</li>
            <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orra-warm" />Before big decisions: “Whose voice is this?”</li>
          </ul>
        </div>
      </section>
      <p className="text-center text-xs text-orra-muted">Guidance only · You decide · Not therapy</p>
    </div>
  );
}
