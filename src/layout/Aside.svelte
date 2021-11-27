<script lang="ts">
  import { push, location } from "svelte-spa-router";
  import { routes } from "../router/router";
  import Drawer, { Content, Header, Title, Subtitle } from "@smui/drawer";
  import List, { Item, Text } from "@smui/list";

  console.log($location.toString());
</script>

<Drawer>
  <Header>
    <Title>HOSTS MANAGER</Title>
    <Subtitle>便捷的管理你的hosts文件</Subtitle>
  </Header>
  <Content>
    {#each routes.toArray() as { path, name }}
      <List>
        <Item
          on:click={async () => {
            push(path);
          }}
          selected={path === $location}
        >
          <Text>{name}</Text>
        </Item>
      </List>
    {/each}
  </Content>
</Drawer>

<style>
  :global(aside) {
    background-color: rgb(19, 95, 70);
  }
</style>
