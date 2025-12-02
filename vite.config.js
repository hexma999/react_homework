import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react_homework/", // GitHub Pages용 경로
  plugins: [react()],
});
