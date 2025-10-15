import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemaProvider } from "./components/Thema/ThemaProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemaProvider>
      <App />
    </ThemaProvider>
  </React.StrictMode>
);
