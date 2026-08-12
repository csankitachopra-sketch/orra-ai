"use client";
import { useEffect, useMemo, useState } from "react";
const R = ["Mesha (Aries)","Vrishabha (Taurus)","Mithuna (Gemini)","Karka (Cancer)","Simha (Leo)","Kanya (Virgo)","Tula (Libra)","Vrischika (Scorpio)","Dhanu (Sagittarius)","Makara (Capricorn)","Kumbha (Aquarius)","Meena (Pisces)"];
const T = [
  { id: "career", label: "Career", hint: "Growth, switches, timing", s: "10th-house themes suggest capacity for sustained effort. Current dasha weather favors refining what you already do over a hard pivot. Job-change windows often open after the next lunar cycle settles. Strengthen one portable skill. Guidance, not orders." },
  { id: "love", label: "Relationships", hint: "Bond, timing, patterns", s: "Venus and Moon themes point to needing emotional safety before commitment deepens. Compatibility is less perfect match, more ability to name needs without collapse. Quiet honesty beats dramatic clarity." },
  { id: "health", label: "Health & energy", hint: "Rhythm, stress, recovery", s: "6th-house patterns often show as stress held in the body first. Favor consistent small recovery — sleep, one walk, less stacked caffeine — over intense new regimens." },
  { id: "timing", label: "Timing", hint: "Windows to act or wait", s: "Next 2–3 weeks favor consolidation over launch. Prefer reversible steps. Clearer windows for bigger commitments open once the denser Moon phase completes." },
];
function rashi(d: string) { return d ? R[new Date(d+"T12:00:00").getMonth()%12] : R[0]; }
function dasha(d: string) { const L=["Ketu","Venus","Sun","Moon","Mars","Rahu","Jupiter","Saturn","Mercury"]; return `${L[(d?new Date(d).getFullYear():0)%9]} Mahadasha (illustrative)`; }
export default function AstroPage() {
  const [det, setDet] = useState<{date:string;time:string;place:string}|null>(null);
  const [form, setForm] = useState({ date:"", time:"", place:"" });
  const [q, setQ] = useState(""); const [ans, setAns] = useState<string|null>(null);
  const [load, setLoad] = useState(false); const [topic, setTopic] = useState<string|null>(null);
  useEffect(() => { try { const r=localStorage.getItem("orra_birth"); if(r) setDet(JSON.parse(r)); } catch{} }, []);
  const chart = useMemo(() => det ? { moon: rashi(det.date), sun: rashi(det.date), dasha: dasha(det.date) } : null, [det]);
  const save = (e: React.FormEvent) => { e.preventDefault(); if(!form.date||!form.place) return; setDet({...form}); try{localStorage.setItem("orra_birth",JSON.stringify(form));}catch{} };
  const ask = async (preset?: string) => {
    const text = (preset||q).trim(); if(!text) return;
    setLoad(true); setAns(null); setQ(text); await new Promise(r=>setTimeout(r,1000));
    const top = T.find(t=>t.id===topic); const low = text.toLowerCase();
    let out = top?.s;
    if(!out){ if(/job|career|work/.test(low)) out=T[0].s; else if(/love|relationship|marriage/.test(low)) out=T[1].s; else if(/health|energy|stress/.test(low)) out=T[2].s; else if(/when|timing|should i/.test(low)) out=T[3].s; else out=`Looking at your ${chart?.moon||"chart"} themes: this period rewards honest noticing over forced action. Prefer reversible steps. You decide — the chart offers weather, not orders.`; }
    setAns(out); setLoad(false);
  };
  if(!det) return (
    <div className="space-y-6 pb-4">
      <header><p className="text-xs font-medium uppercase tracking-wider text-orra-muted">Vedic astrology</p><h1 className="mt-1 text-2xl font-semibold text-orra-text">Astro</h1><p className="mt-1.5 text-sm text-orra-muted">Birth chart guidance — soft, not fatalistic.</p></header>
      <div className="orra-card p-5">
        <h2 className="text-sm font-medium text-orra-text">Your birth details</h2>
        <p className="mt-1 mb-5 text-xs text-orra-muted">Needed once. Stored on this device.</p>
        <form onSubmit={save} className="space-y-4">
          <div><label className="mb-1.5 block text-xs font-medium text-orra-soft">Date of birth</label><input type="date" required value={form.date} onChange={e=>setForm({...form,date:e.target.value})} className="w-full rounded-orra-sm border border-orra-border bg-orra-bg px-3 py-2.5 text-sm focus:border-orra-accent focus:outline-none" /></div>
          <div><label className="mb-1.5 block text-xs font-medium text-orra-soft">Time (if known)</label><input type="time" value={form.time} onChange={e=>setForm({...form,time:e.target.value})} className="w-full rounded-orra-sm border border-orra-border bg-orra-bg px-3 py-2.5 text-sm focus:border-orra-accent focus:outline-none" /></div>
          <div><label className="mb-1.5 block text-xs font-medium text-orra-soft">Place of birth</label><input type="text" required placeholder="City, Country" value={form.place} onChange={e=>setForm({...form,place:e.target.value})} className="w-full rounded-orra-sm border border-orra-border bg-orra-bg px-3 py-2.5 text-sm placeholder:text-orra-muted focus:border-orra-accent focus:outline-none" /></div>
          <button type="submit" className="w-full rounded-full bg-orra-accent py-3 text-sm font-medium text-white hover:opacity-90">Open my chart</button>
        </form>
      </div>
      <p className="text-center text-xs text-orra-muted">Illustrative · Not a substitute for a trained Jyotishi</p>
    </div>
  );
  return (
    <div className="space-y-6 pb-4">
      <header className="flex justify-between gap-3">
        <div><p className="text-xs font-medium uppercase tracking-wider text-orra-muted">Vedic astrology</p><h1 className="mt-1 text-2xl font-semibold text-orra-text">Astro</h1>
          <p className="mt-1 text-sm text-orra-muted">{det.place} · {new Date(det.date+"T12:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}</p></div>
        <button type="button" onClick={()=>{setDet(null);try{localStorage.removeItem("orra_birth");}catch{}}} className="text-xs text-orra-muted">Edit</button>
      </header>
      <section className="orra-card overflow-hidden">
        <div className="bg-gradient-to-br from-orra-warm-soft/70 to-orra-accent-soft/50 px-5 py-5">
          <p className="text-xs font-medium uppercase tracking-wider text-orra-soft">Chart snapshot</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-orra-sm bg-orra-elevated/80 p-3"><p className="text-[11px] text-orra-muted">Moon sign</p><p className="mt-0.5 text-sm font-medium text-orra-text">{chart?.moon}</p></div>
            <div className="rounded-orra-sm bg-orra-elevated/80 p-3"><p className="text-[11px] text-orra-muted">Sun theme</p><p className="mt-0.5 text-sm font-medium text-orra-text">{chart?.sun}</p></div>
            <div className="col-span-2 rounded-orra-sm bg-orra-elevated/80 p-3"><p className="text-[11px] text-orra-muted">Current dasha (illustrative)</p><p className="mt-0.5 text-sm font-medium text-orra-text">{chart?.dasha}</p></div>
          </div>
        </div>
      </section>
      <section className="orra-card p-5">
        <div className="mb-2 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-orra-warm" /><h2 className="text-sm font-medium text-orra-soft">Today's sky</h2></div>
        <p className="text-sm text-orra-text">A day that rewards patience. Emotional waters sit higher — good for noticing, less ideal for forcing outcomes.</p>
      </section>
      <section>
        <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-orra-muted">Explore your chart</h2>
        <div className="grid grid-cols-2 gap-3">
          {T.map(t=>(
            <button key={t.id} type="button" onClick={()=>{setTopic(t.id);ask(t.label);}} className={`orra-card p-4 text-left ${topic===t.id?"ring-1 ring-orra-accent/40":""}`}>
              <span className="text-sm font-medium text-orra-text">{t.label}</span><p className="mt-1 text-xs text-orra-muted">{t.hint}</p>
            </button>
          ))}
        </div>
      </section>
      <section className="orra-card p-5">
        <h2 className="text-sm font-medium text-orra-text">Ask your chart</h2>
        <p className="mt-1 mb-4 text-xs text-orra-muted">Specific questions work best.</p>
        <textarea value={q} onChange={e=>setQ(e.target.value)} placeholder="What's on your mind about the future?" rows={3} className="mb-3 w-full resize-none rounded-orra-sm border border-orra-border bg-orra-bg px-3 py-2.5 text-sm placeholder:text-orra-muted focus:border-orra-accent focus:outline-none" />
        <button type="button" onClick={()=>ask()} disabled={!q.trim()||load} className="w-full rounded-full bg-orra-accent py-2.5 text-sm font-medium text-white disabled:opacity-40">{load?"Listening to the sky…":"Receive guidance"}</button>
        {ans && <div className="mt-4 rounded-orra-sm bg-orra-accent-soft/60 p-4"><p className="text-sm text-orra-text">{ans}</p><p className="mt-3 text-xs text-orra-muted">Guidance only · You decide</p></div>}
      </section>
      <p className="text-center text-xs text-orra-muted">Vedic principles · Illustrative for MVP</p>
    </div>
  );
}
