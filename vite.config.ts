import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Local development config — the hosted-preview server settings were
// stripped from this export; Vite picks a free port by itself.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
