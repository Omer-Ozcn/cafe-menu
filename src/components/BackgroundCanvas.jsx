export default function BackgroundCanvas({ src = "/images/bar.jpg" }) {
  return (
    <>
      {/* BG görseli – light/dark filtreleri CSS’ten geliyor */}
      <div
        aria-hidden
        className="fixed inset-0 z-0 bg-center bg-cover animate-slow-pan blur-[1.5px] bg-canvas"
        style={{ backgroundImage: `url(${src})` }}
      />
      {/* Sıcak overlay – yoğunluk mod’a göre değişir */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 warm-overlay" />
      {/* Hex dokusu */}
      <svg
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 h-full w-full text-white/30 dark:text-black/30 mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hexpattern" width="72" height="62" patternUnits="userSpaceOnUse">
            <path
              d="M18,1 l18,-1 l18,1 l18,31 l-18,31 l-18,1 l-18,-1 l-18,-31 z"
              fill="none" stroke="currentColor" strokeOpacity="0.08"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexpattern)" />
      </svg>
      {/* Footer’a yakın yumuşak geçiş */}
      <div aria-hidden className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-40 bottom-fade" />
    </>
  );
}
