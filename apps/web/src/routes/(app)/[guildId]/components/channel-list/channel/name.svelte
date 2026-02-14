<script lang="ts">
  let { children } = $props();
</script>

<span class="text-sm text-primary truncate">
  {@render children()}
</span>
