import { useThema } from "./ThemaProvider.jsx";
import { Sun, Moon } from "lucide-react";

export default function ThemaToggle({ className = "" }) {
  const { isDark, toggle } = useThema();

  return (
    <button
      onClick={toggle}
      aria-label="Thema değiştir"
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 ${className}`}
    >
      {isDark ? <Moon size={16} /> : <Sun size={16} />}
      {isDark ? "Koyu" : "Açık"}
    </button>
  );
}
