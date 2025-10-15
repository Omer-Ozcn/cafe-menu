import { NavLink } from "react-router-dom";
import ThemaToggle from "../components/Thema/ThemaToggle.jsx";

function Logo(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" strokeWidth="2" />
    </svg>
  );
}

export default function Header() {
  const linkBase =
    "px-3 py-2 rounded-md text-sm transition hover:bg-black/5 dark:hover:bg-white/10";
  const linkActive = "bg-black/10 dark:bg-white/10 font-medium";

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur border-b border-black/5 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-2">
        <NavLink to="/" className="flex items-center gap-2 mr-2">
          <span className="inline-grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white shadow-sm">
            <Logo className="w-5 h-5" />
          </span>
          <span className="font-semibold">GeoHex Café</span>
        </NavLink>

        <nav className="hidden sm:flex items-center gap-1">
          <NavLink to="/" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}>Anasayfa</NavLink>
          <NavLink to="/menu" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}>Menü</NavLink>
          <NavLink to="/hakkimizda" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}>Hakkımızda</NavLink>
          <NavLink to="/iletisim" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}>İletişim</NavLink>
        </nav>

        <ThemaToggle className="ml-auto" />
      </div>
    </header>
  );
}
