import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemaContext = createContext(null);

export function ThemaProvider({ children }) {
  const [thema, setThema] = useState(() => {
    const saved = localStorage.getItem("thema");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", thema === "dark");
    localStorage.setItem("thema", thema);
    root.style.colorScheme = thema === "dark" ? "dark" : "light";
  }, [thema]);

  const value = useMemo(
    () => ({
      thema,
      setThema,
      toggle: () => setThema((t) => (t === "dark" ? "light" : "dark")),
      isDark: thema === "dark",
      isLight: thema === "light",
    }),
    [thema]
  );

  return <ThemaContext.Provider value={value}>{children}</ThemaContext.Provider>;
}

export function useThema() {
  const ctx = useContext(ThemaContext);
  if (!ctx) throw new Error("useThema must be used inside <ThemaProvider />");
  return ctx;
}
