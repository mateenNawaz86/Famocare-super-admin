import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ensure base path
  build: {
    outDir: "dist", // default is fine, just confirm it's not misconfigured
  },
});
