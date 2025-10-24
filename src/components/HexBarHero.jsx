import { Coffee } from "lucide-react";

export default function HexBarHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-120px)] items-center justify-center px-4">
      <div
        className="mx-auto max-w-3xl rounded-2xl p-6 md:p-10 backdrop-blur
                   bg-[rgba(255,255,255,.8)] dark:bg-[rgba(17,17,17,.6)]
                   border border-white/40 dark:border-white/10
                   shadow-xl flex flex-col items-center gap-5 animate-float-soft"
        style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
      >
        <h1 className="font-display text-center text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent
                       bg-gradient-to-br from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-200">
          Genperia Café
        </h1>

        <p className="max-w-xl text-center text-neutral-800/90 dark:text-neutral-200">
          Altıgen bar masamızın etrafında kaliteli kahve ve sohbet. Sade, modern ve sıcak bir deneyim.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium
                       border-amber-300/70 bg-amber-50/80 text-neutral-900 hover:bg-amber-100 active:scale-[.99]
                       dark:border-amber-700/50 dark:bg-amber-900/30 dark:text-amber-100 dark:hover:bg-amber-900/50"
          >
            <Coffee className="h-4 w-4" /> Menüyü Gör
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white
                       hover:opacity-90 active:scale-[.99]
                       bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
          >
            Rezervasyon
          </a>
        </div>
      </div>
    </section>
  );
}
