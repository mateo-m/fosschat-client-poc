<script lang="ts">
  import { page } from "$app/state";
</script>

<div>
  <ol>
    <li>guild ID: {page.params.guildId}</li>
    <li>channel ID: {page.params.channelId}</li>
  </ol>
</div>
