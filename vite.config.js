import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import path from "path";

import legacy from "@vitejs/plugin-legacy";

export default defineConfig((e1, e2) => {
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      legacy(),
      svelte({ compilerOptions: { generate: "dom", hydratable: true } }),
    ],
    build: {
      target: "es2015",
    },
  };
});
