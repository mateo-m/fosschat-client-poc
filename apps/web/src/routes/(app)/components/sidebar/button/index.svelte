<script lang="ts">
  type Props = {
    id: string;
    name: string;
    imageUrl: string;
  };

  import { Button } from "$lib/components/ui/button";
  import { page } from "$app/state";

  let { id, imageUrl, name }: Props = $props();

  const href = `/${id}`;
  const isActive = $derived(page.url.pathname === href);
</script>

<Button
  role="radio"
  aria-checked={isActive}
  {id}
  {href}
  class="aspect-square flex flex-row cursor-pointer grow-0 shrink-0 items-center justify-center overflow-hidden bg-accent w-full h-auto rounded-lg"
>
  <img src={imageUrl} alt={name} class="size-full object-cover" />
</Button>
