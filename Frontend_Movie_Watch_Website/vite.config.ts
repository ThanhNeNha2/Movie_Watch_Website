import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Quan trọng để tránh lỗi 404
  build: {
    outDir: "dist",
  },
});
