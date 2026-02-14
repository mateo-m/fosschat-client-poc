<script lang="ts">
  let { children } = $props();
</script>

<li
  class="w-full h-fit grow-0 shrink-0 items-center flex flex-row flex-nowrap gap-2"
>
  {@render children()}
</li>
