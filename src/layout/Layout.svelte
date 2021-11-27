<script land="ts">
  export let type = "flex";
  export let direction = "row";
</script>

<section style="--section-style:{type};--section-flex-direction:{direction}">
  <slot />
</section>

<style>
  :global(html, body) {
    height: 100%;
  }

  section {
    display: var(--section-style);
    flex-direction: var(--section-flex-direction);
    height: 100%;
  }
</style>
