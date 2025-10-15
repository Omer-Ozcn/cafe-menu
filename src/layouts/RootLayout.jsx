import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="max-w-5xl mx-auto w-full px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
