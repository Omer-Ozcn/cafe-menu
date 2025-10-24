import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("genperia_theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("genperia_theme", theme);
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("theme-dark", theme === "dark");
    root.classList.toggle("theme-light", theme !== "dark");
  }, [theme]);

  return { theme, setTheme };
}
