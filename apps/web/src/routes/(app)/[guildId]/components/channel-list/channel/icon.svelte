<script lang="ts">
  import { type TChannel } from "@repo/api/types/channel";

  let { type }: { type: TChannel["type"] } = $props();
</script>

{#if type === "text"}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="size-4 shrink-0"
  >
    <path
      fill-rule="evenodd"
      d="M2.625 3c-.621 0-1.125.504-1.125 1.125v12a1.125 1.125 0 001.125 1.125h5.25V21l4.688-4.688H21a1.125 1.125 0 001.125-1.125v-12A1.125 1.125 0 0021 3H2.625zM3.75 5.625a.375.375 0 000 .75h16.5a.375.375 0 000-.75H3.75zm0 4a.375.375 0 000 .75h16.5a.375.375 0 000-.75H3.75z"
      clip-rule="evenodd"
    />
  </svg>
{/if}
