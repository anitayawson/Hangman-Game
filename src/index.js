import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CategoriesProvider } from "./contexts/CategoriesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </React.StrictMode>
);
