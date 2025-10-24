import Container from "../components/Container";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] backdrop-blur-lg bg-white/55 dark:bg-neutral-900/55">
      <Container className="flex h-14 items-center justify-between text-xs text-neutral-700 dark:text-neutral-300">
        <p>© {new Date().getFullYear()} <span className="font-display">genperia</span> — Altıgen bar konsepti</p>
        <div className="flex items-center gap-3">
          <a href="#about" className="hover:opacity-80">Hakkımızda</a>
          <a href="#contact" className="hover:opacity-80">İletişim</a>
        </div>
      </Container>
    </footer>
  );
}
