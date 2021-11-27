<script lang="ts">
  // 引入logo
  import logo from "@/assets/logo.jpeg";
  // 引入 tailwind UI库
  import "@/components/Tailwind.svelte";
  // 引入 svelte-materialify UI库
  import { Button } from "svelte-materialify";

  let count = 0;
  let isDialogShow = false;

  function addCount() {
    count += 1;
  }
</script>

<svelte:head>
  <title>Fast Build Page 快速构建模板</title>
</svelte:head>

<Button class="black white-text" on:click={() => (isDialogShow = false)} />

<style>
</style>
