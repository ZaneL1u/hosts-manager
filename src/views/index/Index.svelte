<script>
  import "codemirror/mode/javascript/javascript";
  import CodeMirror from "@/components/Component.svelte";

  let editor;
</script>

<CodeMirror
  bind:editor
  options={{ lineNumbers: true, mode: "javascript" }}
  value="const x = 42"
/>
