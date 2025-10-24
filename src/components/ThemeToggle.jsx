import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      aria-label="Tema değiştir"
      title={theme === "dark" ? "Açık moda geç" : "Koyu moda geç"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-300 hover:bg-neutral-100 active:scale-[.98] ring-0 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:border-neutral-700 dark:hover:bg-neutral-800"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
