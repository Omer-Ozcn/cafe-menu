import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <RootLayout theme={theme} toggleTheme={toggleTheme}>
      <Home />
      <Menu />
      <About />
      <Contact />
    </RootLayout>
  );
}
