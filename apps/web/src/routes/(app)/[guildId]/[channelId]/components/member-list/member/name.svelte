<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  let { children }: Props = $props();
</script>

<span
  class="w-full h-fit grow-0 shrink-0 items-center flex flex-row flex-nowrap gap-2"
>
  {@render children()}
</span>
