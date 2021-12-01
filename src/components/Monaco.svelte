<script>
  // import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
  // 加载控件
  import * as monaco from "monaco-editor/esm/vs/editor/editor.main.js";
  // 加载js
  import "monaco-editor/esm/vs/basic-languages/shell/shell.contribution";
  import "monaco-editor/esm/vs/editor/contrib/find/findController.js";

  import { onMount } from "svelte";

  export let value = ``;

  // 挂载后
  onMount(() => {
    monaco.editor.create(document.getElementById("monaco"), {
      theme: "vs-dark",
      value,
      language: "shell",
      codeLens: true,
      tabSize: 2,
      fontSize: 12,
      overviewRulerBorder: true,
      roundedSelection: true,
    });
  });
</script>

<div id="monaco" />

<style>
  #monaco {
    width: 100%;
    height: 100%;
  }
</style>
