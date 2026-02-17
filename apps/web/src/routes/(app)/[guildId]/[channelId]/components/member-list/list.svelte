<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  let { children }: Props = $props();
</script>

<ol
  class="h-full grow-0 shrink-0 flex flex-col gap-2 overflow-y-auto overscroll-none w-[20dvw] max-w-[20dvw] lg:w-[15dvw] lg:max-w-[15dvw] border-l border-border"
>
  {@render children()}
</ol>
