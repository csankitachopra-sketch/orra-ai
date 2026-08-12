import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-orra-warm-soft/50 via-orra-bg to-orra-bg pointer-events-none" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-orra-accent-soft">
          <span className="text-3xl font-semibold tracking-tight text-orra-accent">
            O
          </span>
        </div>

        <h1 className="mb-3 text-4xl font-semibold tracking-tight text-orra-text">
          ORRA
        </h1>
        <p className="mb-3 text-lg text-orra-soft">A clearer view of you.</p>
        <p className="mx-auto mb-12 max-w-xs text-sm leading-relaxed text-orra-muted">
          A quiet space to understand yourself and the sky above you.
          No pressure. Just clarity, when you need it.
        </p>

        <div className="flex w-full max-w-xs flex-col gap-3">
          <Link
            href="/today"
            className="rounded-full bg-orra-accent px-8 py-3.5 text-center text-sm font-medium text-white shadow-orra transition hover:opacity-90"
          >
            Start gently
          </Link>
          <p className="text-xs text-orra-muted">
            Private · Soft · Yours
          </p>
        </div>
      </div>

      <div className="relative z-10 pb-12 text-center">
        <p className="text-xs tracking-wide text-orra-muted">
          Reflect · Astro · Patterns
        </p>
      </div>
    </div>
  );
}
