import Container from "./Container";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-12 md:py-16">
      <Container>
        <div className="mb-6 flex flex-col gap-1 rounded-2xl bg-white/70 dark:bg-neutral-900/55 backdrop-blur p-4 shadow-sm">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white">{title}</h2>
          {subtitle && <p className="text-sm text-neutral-700 dark:text-neutral-300">{subtitle}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
