<script lang="ts">
  import ChannelList from "./components/channel-list/list.svelte";

  import ChannelItemRoot from "./components/channel-list/channel/index.svelte";
  import ChannelItemName from "./components/channel-list/channel/name.svelte";
  import ChannelItemIcon from "./components/channel-list/channel/icon.svelte";

  let { children } = $props();

  const channels = new Array(20_000).fill(null).map((_, i) => ({
    id: `${i + 1}`,
    name: `channel-${i + 1}`,
    type: "text" as const,
  }));
</script>

<div class="grid w-full h-full min-h-0 grid-cols-[auto_1fr]">
  <ChannelList items={channels}>
    {#snippet children(channel)}
      <ChannelItemRoot id={channel.id}>
        <ChannelItemIcon type={channel.type} />
        <ChannelItemName>{channel.name}</ChannelItemName>
      </ChannelItemRoot>
    {/snippet}
  </ChannelList>

  {@render children()}
</div>
