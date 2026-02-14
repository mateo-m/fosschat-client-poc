<script lang="ts">
  let { children } = $props();
</script>

<ol class="w-full h-full grow-0 shrink-0 flex flex-col gap-4">
  {@render children()}
</ol>
