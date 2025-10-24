export default function BackgroundCanvas({ src = "/images/bar.jpg" }) {
  return (
    <>
      {/* Görsel katmanı — hafif pan/zoom, hafif blur ve sıcak filtre */}
      <div
        aria-hidden
        className="fixed inset-0 z-0 bg-center bg-cover animate-slow-pan blur-[1.5px]"
        style={{
          backgroundImage: `url(${src})`,
          filter: "brightness(0.78) contrast(1.06) saturate(0.95)",
        }}
      />
      {/* Sıcak amber/rose degrade örtü */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 30%, rgba(245, 158, 11, .20), transparent 70%), radial-gradient(40% 40% at 80% 20%, rgba(244, 63, 94, .12), transparent 70%)",
        }}
      />
      {/* Hafif hex dokusu */}
      <svg
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 h-full w-full text-white/30 dark:text-black/30 mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hexpattern" width="72" height="62" patternUnits="userSpaceOnUse">
            <path d="M18,1 l18,-1 l18,1 l18,31 l-18,31 l-18,1 l-18,-1 l-18,-31 z"
              fill="none" stroke="currentColor" strokeOpacity="0.08"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexpattern)" />
      </svg>
      {/* Footer'a doğru yumuşak açılan alt degrade */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-40
                   bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.88))]
                   dark:bg-[linear-gradient(to_bottom,rgba(10,10,10,0),rgba(10,10,10,0.88))]"
      />
    </>
  );
}
