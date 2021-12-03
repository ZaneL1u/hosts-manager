import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { resolve, join } from "path";

import legacy from "@vitejs/plugin-legacy";

export default defineConfig(() => {
  return {
    base: "./",
    root: join(__dirname, "src"), // 指向渲染进程目录
    port: 4000,
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    plugins: [
      legacy(),
      svelte({ compilerOptions: { generate: "dom", hydratable: true } }),
    ],
  };
});
