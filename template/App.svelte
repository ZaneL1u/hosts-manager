<script lang="ts">
  // 引入logo
  import logo from "@/assets/logo.jpeg";
  // 引入 tailwind UI库
  import "@/components/Tailwind.svelte";
  // 引入 svelte-materialify UI库
  import {
    MaterialApp,
    Button,
    Card,
    CardText,
    CardActions,
    Dialog,
  } from "svelte-materialify";

  let count = 0;
  let isDialogShow = false;

  function addCount() {
    count += 1;
  }
</script>

<svelte:head>
  <title>Fast Build Page 快速构建模板</title>
</svelte:head>

<MaterialApp>
  <div class="flex items-center justify-center">
    <img class="w-40 h-40" src={logo} alt="Svelte Logo" />
    <h1 class="text-3xl text-gray-500">Fast Build Page 快速构建</h1>
  </div>

  <Card outlined class="w-6/12 mx-auto mb-6">
    <div class="pl-4 pr-4 pt-3">
      <span class="text-overline"> 真正的反应能力 </span>
      <br />
      <span class="text-h5 mb-2">编写简单</span>
      <br />
    </div>
    <CardText class="flex flex-col space-y-2">
      <span>count是：{count}</span>
      <span>count * 2是：{count * 2}</span>
    </CardText>
    <CardActions class="space-x-4">
      <Button class="primary-color" on:click={addCount}>给count加1</Button>
    </CardActions>
  </Card>
  <Card outlined class="w-6/12  mx-auto mb-6">
    <div class="pl-4 pr-4 pt-3">
      <span class="text-overline"> 简洁、优雅、高效 </span>
      <br />
      <span class="text-h5 mb-2">方便地进行编码</span>
      <br />
    </div>
    <CardText class="flex flex-col space-y-2">也可以直接写表达式</CardText>
    <CardActions class="space-x-4">
      <Button
        class="red white-text"
        on:click={() => (isDialogShow = !isDialogShow)}
        >{isDialogShow ? "关闭" : "打开"}</Button
      >
    </CardActions>
  </Card>

  <Dialog class="pa-4 text-center" bind:active={isDialogShow}>
    <Button class="black white-text" on:click={() => (isDialogShow = false)}
      >close me</Button
    >
    <br /><br />
    <p>我见青山多妩媚，料青山见我应如是。</p>
  </Dialog>
</MaterialApp>

<style>
</style>
