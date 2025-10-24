import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import Container from "../components/Container";
import ThemeToggle from "../components/ThemeToggle";

export default function Header({ theme, setTheme, route }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg bg-white/55 dark:bg-neutral-900/55 border-b border-[var(--border)]">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="font-black tracking-tight">
          <span className="font-logo text-xl md:text-2xl bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent tracking-wide">GENPERİA</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-800 dark:text-neutral-200">
          {[
            { href: "#home", key: "home", label: "Anasayfa" },
            { href: "#menu", key: "menu", label: "Menü" },
            { href: "#about", key: "about", label: "Hakkımızda" },
            { href: "#contact", key: "contact", label: "İletişim" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={route === l.key ? "page" : undefined}
              className={`relative hover:opacity-90 transition ${
                route === l.key ? "text-amber-700 dark:text-amber-400" : ""
              }`}
            >
              {l.label}
              {route === l.key && (
                <span className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-6 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 shadow-[0_0_10px_rgba(245,158,11,.5)]" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-300 hover:bg-neutral-100 active:scale-[.98] dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
          <Container className="flex flex-col py-3 text-sm font-medium">
            {[
              { href: "#home", label: "Anasayfa" },
              { href: "#menu", label: "Menü" },
              { href: "#about", label: "Hakkımızda" },
              { href: "#contact", label: "İletişim" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
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
