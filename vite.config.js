import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { resolve } from "path";

import legacy from "@vitejs/plugin-legacy";

export default defineConfig((e1, e2) => {
  return {
    base: "./",
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    plugins: [
      legacy(),
      svelte({ compilerOptions: { generate: "dom", hydratable: true } }),
    ],
    build: {
      target: "es2015",
      assetsDir: "",
      rollupOptions: {
        external: ["electron"], // 告诉 Rollup 不要去打包 electron
      },
    },
    optimizeDeps: {
      exclude: ["electron"], // 告诉 Vite 不要转换 electron 模块
    },
  };
});
