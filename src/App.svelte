<script>
  import Router from "svelte-spa-router";
  import { routes } from "./router/router";
  import Aside from "@/layout/Aside.svelte";
  import Main from "@/layout/Main.svelte";

  import { Header, SkipToContent } from "carbon-components-svelte";

  let isSideNavOpen = false;
</script>

<svelte:head>
  <title>hosts-manager 管理你的hosts</title>
</svelte:head>

<Header
  company="HOSTS-MANAGER"
  platformName="—— 管理你的HOSTS文件"
  bind:isSideNavOpen
>
  <div slot="skip-to-content">
    <SkipToContent />
  </div>
  <Aside bind:isOpen={isSideNavOpen} />
</Header>

<Main>
  <Router {routes} />
</Main>
