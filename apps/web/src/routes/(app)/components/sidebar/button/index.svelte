<script lang="ts">
  type Props = {
    id: string;
    name: string;
    imageUrl: string;
    href: string;
    isSelected: boolean;
    newMessagesCount: number;
  };

  import { Button } from "$lib/components/ui/button";
  import { page } from "$app/state";
  import { cn } from "$lib/utils";

  let { id, imageUrl, name, href, newMessagesCount, isSelected }: Props =
    $props();
</script>

<div class="relative pointer-events-none">
  {#if newMessagesCount > 0}
    <div
      class={cn(
        "z-10 absolute top-0 right-0 -translate-y-2/5 inline-flex min-w-3",
        newMessagesCount > 99 ? "translate-x-[27.5%]" : "translate-x-2/5",
      )}
    >
      <div
        class="absolute -inset-0.5 rounded-full bg-sidebar p-0.5 mask-[linear-gradient(#000_0_0),linear-gradient(#000_0_0)] [mask-origin:content-box,border-box] [mask-clip:content-box,border-box] mask-exclude [-webkit-mask-image:linear-gradient(#000_0_0),linear-gradient(#000_0_0)] [-webkit-mask-origin:content-box,border-box] [-webkit-mask-clip:content-box,border-box] [-webkit-mask-composite:xor]"
      ></div>

      <span
        class="relative inline-flex items-center justify-center bg-red-500 rounded-full text-center text-xs leading-none min-w-4 px-1 py-0.5 text-white"
        >{newMessagesCount > 99 ? "99+" : newMessagesCount}</span
      >
    </div>
  {/if}

  <Button
    role="radio"
    aria-checked={isSelected}
    {id}
    {href}
    class="aspect-square pointer-events-auto flex flex-row dark:aria-checked:bg-sidebar-accent dark:hover:bg-sidebar-accent aria-checked:cursor-pointer grow-0 shrink-0 items-center justify-center overflow-hidden bg-sidebar-primary w-full h-auto rounded-lg"
  >
    <img src={imageUrl} alt={name} class="size-full object-cover" />
  </Button>

  <div
    class={cn(
      "z-10 absolute left-1/2 transform duration-200 -translate-x-1/2 transition-all ease-out bottom-0 translate-y-2/5 w-[70%] h-2",
      isSelected ? "opacity-100 scale-100" : "opacity-0 scale-95",
    )}
  >
    <div
      class="absolute -inset-0.5 rounded-full bg-sidebar p-0.5 mask-[linear-gradient(#000_0_0),linear-gradient(#000_0_0)] [mask-origin:content-box,border-box] [mask-clip:content-box,border-box] mask-exclude [-webkit-mask-image:linear-gradient(#000_0_0),linear-gradient(#000_0_0)] [-webkit-mask-origin:content-box,border-box] [-webkit-mask-clip:content-box,border-box] [-webkit-mask-composite:xor]"
    ></div>

    <div class="absolute inset-0 dark:bg-white rounded-full"></div>
  </div>
</div>
