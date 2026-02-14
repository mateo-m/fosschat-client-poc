<script lang="ts">
  import type { PageProps } from "./$types";
  let { params }: PageProps = $props();
</script>

<div>guild ID: {params.guildId}</div>
