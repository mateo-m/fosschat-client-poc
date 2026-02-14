<script lang="ts">
  type Props = {
    guilds: {
      id: string;
      name: string;
      imageUrl: string;
    }[];
  };

  import Button from "./button/index.svelte";
  import { Separator } from "$lib/components/ui/separator";
  import { createVirtualizer } from "@tanstack/svelte-virtual";

  let { guilds }: Props = $props();

  let scrollElement: HTMLDivElement | null = null;

  const guildVirtualizer = createVirtualizer({
    count: 0,
    getScrollElement: () => scrollElement,
    estimateSize: () => 64,
    overscan: 6,
  });

  $effect(() => {
    $guildVirtualizer.setOptions({
      count: guilds.length,
      getScrollElement: () => scrollElement,
    });
  });
</script>

<aside class="h-full grow-0 shrink-0 p-2">
  <div class="flex h-full flex-col w-18 flex-nowrap rounded-xl bg-sidebar">
    <div class="p-3">
      <Button id="" name="Home" imageUrl="/path/to/home.jpg" />
    </div>

    <div class="px-3">
      {#if !!guilds.length}
        <Separator />
      {/if}
    </div>

    <div
      class="relative px-3 flex-1 overflow-y-auto no-scrollbar"
      bind:this={scrollElement}
    >
      <div
        role="radiogroup"
        class="relative w-full"
        style={`height: ${$guildVirtualizer.getTotalSize()}px;`}
      >
        {#each $guildVirtualizer.getVirtualItems() as virtualItem (virtualItem.key)}
          {@const guild = guilds[virtualItem.index]}

          <div
            class="absolute left-0 top-0 w-full"
            style={`transform: translateY(${virtualItem.start}px);`}
          >
            <div class="flex justify-center first:pt-3 pb-3">
              <Button
                id={guild.id}
                name={guild.name}
                imageUrl={guild.imageUrl}
              />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</aside>
