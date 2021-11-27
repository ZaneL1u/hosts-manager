import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { join } from "path";
import path from "path";

import fg from "fast-glob";
import legacy from "@vitejs/plugin-legacy";
import mpa from "vite-plugin-mpa";

const isSSR = process.argv.includes("--ssr");

// https://vitejs.dev/config/
export default defineConfig((e1, e2) => {
  console.log("传入的参数:", e1, e2);

  const rollupOptions = {
    input: fg
      .sync(join(__dirname, "/src/**/App.svelte"))
      .reduce((inputs, dirPath, index) => {
        const pageName = /\/apps\/(.*)\/App\.svelte/.exec(dirPath);
        inputs[pageName[1]] = dirPath;
        return inputs;
      }, {}),
  };

  const buildOptions = isSSR
    ? {
        outDir: ".ssr",
        rollupOptions: rollupOptions,
      }
    : {};

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      legacy(),
      ...(isSSR
        ? []
        : [
            mpa({
              scanDir: "src/apps",
            }),
          ]),
      svelte({
        compilerOptions: { generate: isSSR ? "ssr" : "dom", hydratable: true },
      }),
    ],
    build: {
      target: "es2015",
      ...buildOptions,
    },
  };
});
