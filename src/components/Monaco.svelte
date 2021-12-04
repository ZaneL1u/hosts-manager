<script>
  import * as monaco from "monaco-editor/esm/vs/editor/editor.main.js";
  import "monaco-editor/esm/vs/basic-languages/shell/shell.contribution";

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
    height: 100vh;
  }
</style>
