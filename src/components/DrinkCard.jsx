export default function DrinkCard({ item }) {
  return (
    <div
      className="relative group transition-transform hover:translate-y-[-2px]"
      style={{ clipPath: "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)" }}
    >
      <div className="rounded-2xl border border-[var(--border)] bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-base font-semibold text-neutral-900 dark:text-white">{item.name}</h4>
          <span className="rounded-full px-2 py-0.5 text-sm font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
            ₺{item.price}
          </span>
        </div>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">{item.desc}</p>
      </div>
      {/* amber glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition
                      bg-[radial-gradient(40%_60%_at_50%_50%,rgba(245,158,11,.22),transparent)]" />
    </div>
  );
}
