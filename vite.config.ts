import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// Single-page app (Vite + React + TanStack Router).
// Router plugin must be registered before the React plugin.
export default defineConfig({
  plugins: [tanstackRouter({ target: "react" }), react(), tailwindcss(), tsconfigPaths()],
  server: {
    port: 8080,
  },
  build: {
    outDir: "dist",
  },
});
