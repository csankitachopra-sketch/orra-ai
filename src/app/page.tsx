import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-orra-warm-soft/40 via-orra-bg to-orra-bg pointer-events-none" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orra-accent/10">
          <span className="text-3xl font-semibold tracking-tight text-orra-accent">O</span>
        </div>

        <h1 className="mb-3 text-4xl font-semibold tracking-tight text-orra-text">
          ORRA
        </h1>
        <p className="mb-2 text-lg text-orra-soft">A clearer view of you.</p>
        <p className="mx-auto mb-12 max-w-sm text-sm leading-relaxed text-orra-muted">
          Self-understanding and personalized astrology in one calm space.
          Talk freely. See patterns. Decide with more clarity.
        </p>

        <div className="flex w-full max-w-xs flex-col gap-3">
          <Link
            href="/today"
            className="rounded-full bg-orra-accent px-8 py-3.5 text-center text-sm font-medium text-white shadow-orra transition hover:opacity-90"
          >
            Begin
          </Link>
          <p className="text-xs text-orra-muted">
            Private by design · No judgment
          </p>
        </div>
      </div>

      <div className="relative z-10 pb-10 text-center">
        <p className="text-xs text-orra-muted">
          Reflect · Astro · Patterns — all in one
        </p>
      </div>
    </div>
  );
}
