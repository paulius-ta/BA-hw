import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryProvider } from "providers/QueryProvider.tsx";
import { GifProvider } from "providers/GifProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <GifProvider>
        <App />
      </GifProvider>
    </QueryProvider>
  </StrictMode>,
);
