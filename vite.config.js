import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { resolve, join } from "path";

import legacy from "@vitejs/plugin-legacy";

export default defineConfig((e1, e2) => {
  return {
    base: "./",
    root: join(__dirname, "src/render"), // 指向渲染进程目录
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src/render"),
      },
    },
    plugins: [
      legacy(),
      svelte({ compilerOptions: { generate: "dom", hydratable: true } }),
    ],
    build: {
      outDir: join(__dirname, "dist/render"),
      assetsDir: "",
      rollupOptions: {
        output: {
          format: "cjs", // 配置 Rollup 打包输出 CommonJs 格式
        },
        external: ["electron"], // 告诉 Rollup 不要去打包 electron
      },
    },
    optimizeDeps: {
      exclude: ["electron"], // 告诉 Vite 不要转换 electron 模块
    },
  };
});
