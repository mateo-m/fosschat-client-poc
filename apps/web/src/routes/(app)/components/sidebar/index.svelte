<script lang="ts">
  type Props = {
    guilds: {
      id: string;
      name: string;
      imageUrl: string;
      newMessagesCount: number;
    }[];
  };

  import Button from "./button/index.svelte";
  import { Separator } from "$lib/components/ui/separator";
  import { createVirtualizer } from "@tanstack/svelte-virtual";
  import { page } from "$app/state";

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

<aside
  class="h-full grow-0 shrink-0 flex flex-col w-18 flex-nowrap bg-sidebar border-r border-sidebar-border"
>
  <div class="p-2.5">
    <Button
      id="home"
      name="Home"
      imageUrl="/path/to/home.jpg"
      href="/"
      isSelected={page.url.pathname === "/"}
      newMessagesCount={0}
    />
  </div>

  <div class="px-2.5">
    {#if !!guilds.length}
      <Separator class="bg-sidebar-border" />
    {/if}
  </div>

  <div
    class="relative px-2.5 flex-1 overflow-y-auto no-scrollbar overscroll-none"
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
              href={`/${guild.id}`}
              isSelected={page.url.pathname === `/${guild.id}`}
              newMessagesCount={guild.newMessagesCount}
            />
          </div>
        </div>
      {/each}
    </div>
  </div>
</aside>
