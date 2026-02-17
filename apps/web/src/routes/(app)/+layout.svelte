<script lang="ts">
  import Sidebar from "./components/sidebar/index.svelte";

  let { children } = $props();

  const guilds = new Array(40).fill(null).map((_, i) => ({
    id: `${i + 1}`,
    name: `Guild ${i + 1}`,
    imageUrl: `/path/to/image${i + 1}.jpg`,
    newMessagesCount: Math.floor(Math.random() * 120), // Random count for demo
  }));
</script>

<div class="flex size-full flex-row flex-nowrap overflow-hidden">
  <Sidebar {guilds} />

  {@render children()}
</div>
