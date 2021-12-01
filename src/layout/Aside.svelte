<script lang="ts">
  import { push, location } from "svelte-spa-router";
  import { routes } from "../router/router";
  import {
    SideNav,
    SideNavItems,
    SideNavLink,
    HeaderNav,
    HeaderNavItem,
  } from "carbon-components-svelte";

  export let isOpen = false;
</script>

<HeaderNav>
  {#each routes.toArray() as { path, name }}
    <HeaderNavItem
      text={name}
      on:click={async () => {
        push(path);
      }}
      isSelected={path === $location}
    />
  {/each}
</HeaderNav>

<SideNav bind:isOpen>
  {#each routes.toArray() as { path, name }}
    <SideNavItems>
      <SideNavLink
        text={name}
        on:click={async () => {
          push(path);
        }}
        isSelected={path === $location}
      />
    </SideNavItems>
  {/each}
</SideNav>
