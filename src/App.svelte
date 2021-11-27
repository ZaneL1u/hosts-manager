<script>
  import Router from "svelte-spa-router";
  import { routes } from "./router/router";
  // 引入 tailwind UI库
  import Layout from "@/layout/Layout.svelte";
  import Aside from "@/layout/Aside.svelte";
  import Main from "@/layout/Main.svelte";
</script>

<svelte:head>
  <title>hosts-manager 管理你的hosts</title>
</svelte:head>

<Layout>
  <Aside />
  <Main>
    <Router {routes} />
  </Main>
</Layout>
