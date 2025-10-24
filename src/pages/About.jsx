import Section from "../components/Section";

export default function About() {
  return (
    <Section id="about" title="Hakkımızda" subtitle="Altıgen bar etrafında kaliteli zaman">
      <div className="max-w-3xl rounded-2xl bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-6 shadow-md text-neutral-800 dark:text-neutral-200">
        <p className="mb-3">
          <strong className="font-display text-lg">Genperia</strong>, merkezinde özel tasarlanmış altıgen bar masası olan çağdaş bir kafe.
        </p>
        <p>
          Yerel kavrum partnerleriyle çalışıyor, iklim dostu satın alma ve sezonsal menü yaklaşımını benimsiyoruz.
          Mekânın sıcak dokusunu kahveyle birleştiriyoruz.
        </p>
      </div>
    </Section>
  );
}
