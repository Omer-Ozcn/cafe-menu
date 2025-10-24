import { useEffect, useState } from "react";

export const getRouteFromHash = (hash, fallback = "home") => {
  const h = (hash || "").replace(/^#/, "").trim();
  return ["home", "menu", "about", "contact"].includes(h) ? (h || fallback) : fallback;
};

export const useHashRoute = (initial = "home") => {
  const [route, setRoute] = useState(initial);
  useEffect(() => {
    const sync = () => setRoute(getRouteFromHash(window.location.hash, initial));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [initial]);
  return route;
};
