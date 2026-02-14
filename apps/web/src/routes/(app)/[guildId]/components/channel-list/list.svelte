<script lang="ts">
  import { createVirtualizer } from "@tanstack/svelte-virtual";
  import type { Snippet } from "svelte";

  type ChannelItem = {
    id: string;
    name: string;
    type: "text";
  };

  type Props = {
    items: ChannelItem[];
    children: Snippet<[ChannelItem]>;
  };

  let { items, children }: Props = $props();

  let scrollElement: HTMLDivElement | null = null;

  const channelVirtualizer = createVirtualizer({
    count: 0,
    getScrollElement: () => scrollElement,
    estimateSize: () => 40,
    overscan: 8,
  });

  $effect(() => {
    $channelVirtualizer.setOptions({
      count: items.length,
      getScrollElement: () => scrollElement,
    });
  });
</script>

<div
  class="relative size-full w-[20dvw] lg:w-[15dvw] min-h-0 overflow-y-auto no-scrollbar min-w-[20dvw] lg:min-w-[15dvw]"
  bind:this={scrollElement}
>
  <ol
    role="radiogroup"
    class="relative w-full"
    style={`height: ${$channelVirtualizer.getTotalSize()}px;`}
  >
    {#each $channelVirtualizer.getVirtualItems() as virtualItem (virtualItem.key)}
      {@const channel = items[virtualItem.index]}

      <li
        class="absolute left-0 top-0 w-full"
        style={`transform: translateY(${virtualItem.start}px);`}
      >
        {@render children(channel)}
      </li>
    {/each}
  </ol>
</div>
