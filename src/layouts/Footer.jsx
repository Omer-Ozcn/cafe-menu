export default function Footer() {
  return (
    <footer className="mt-12 border-t border-black/5 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-neutral-600 dark:text-neutral-300 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} İSİM</p>
        <p className="opacity-80">Açılış: 08:00 — Kapanış: 23:00</p>
      </div>
    </footer>
  );
}
