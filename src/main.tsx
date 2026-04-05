import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const rootMarkup = root.innerHTML.trim();
const hasPrerenderedMarkup = rootMarkup.length > 0 && rootMarkup !== "<!--app-html-->";

if (hasPrerenderedMarkup) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
