import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import Container from "../components/Container";
import ThemeToggle from "../components/ThemeToggle";

export default function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "home", label: "Anasayfa" },
    { id: "menu", label: "Menü" },
    { id: "about", label: "Hakkımızda" },
    { id: "contact", label: "İletişim" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 nav-glass border-b border-[var(--border)]">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="font-black tracking-tight">
          <span className="font-display text-xl bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
            GENPERİA
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-800 dark:text-neutral-200">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="hover:text-amber-600 dark:hover:text-amber-400 transition">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border dark:border-neutral-700"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
          <Container className="flex flex-col py-3 text-sm font-medium">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                {l.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
