import Header from "./Header";
import Footer from "./Footer";
import BackgroundCanvas from "../components/BackgroundCanvas";

export default function RootLayout({ theme, setTheme, route, children }) {
  return (
    <div className={theme === "dark" ? "theme-dark dark" : "theme-light"}>
      <BackgroundCanvas src="/images/bar.jpg" />
      <div className="relative z-10 min-h-screen text-[var(--fg)]">
        <Header theme={theme} setTheme={setTheme} route={route} />
        <main id="home" className="pt-16 pb-14">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
