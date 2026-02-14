<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import { page } from "$app/state";
  import type { Snippet } from "svelte";

  type Props = {
    id: string;
    children: Snippet;
  };

  let { id, children }: Props = $props();

  const isActive = $derived(
    page.url.pathname === `/${page.params.guildId}/${id}`,
  );
</script>

<li
  class="w-full h-fit grow-0 shrink-0 items-center flex flex-row flex-nowrap gap-2"
>
  <Button
    role="radio"
    aria-checked={isActive}
    variant="link"
    href={`/${page.params.guildId}/${id}`}
    class="max-w-full"
  >
    {@render children()}
  </Button>
</li>
