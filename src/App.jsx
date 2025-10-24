import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useHashRoute } from "./lib/router";
import useTheme from "./hooks/useTheme";

export default function App() {
  const route = useHashRoute("home");
  const { theme, setTheme } = useTheme();

  return (
    <RootLayout theme={theme} setTheme={setTheme} route={route}>
      {route === "home" && <Home />}
      {route === "menu" && <Menu />}
      {route === "about" && <About />}
      {route === "contact" && <Contact />}
    </RootLayout>
  );
}
