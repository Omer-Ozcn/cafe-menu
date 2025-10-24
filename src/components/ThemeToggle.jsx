import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white/50 dark:bg-neutral-900/50 hover:scale-105 transition"
      aria-label="Tema değiştir"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-amber-400" />
      ) : (
        <Moon className="h-5 w-5 text-neutral-700" />
      )}
    </button>
  );
}
