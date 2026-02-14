<script lang="ts">
  import MemberList from "./components/member-list/list.svelte";
  import * as MemberListGroup from "./components/member-list/group";
  import * as MemberListItem from "./components/member-list/member";
  import { page } from "$app/state";

  let { children } = $props();
</script>

<div class="grid grid-cols-[1fr_auto]">
  {@render children()}

  <MemberList>
    <MemberListGroup.Root>
      <MemberListGroup.Label
        >Member list for G{page.params.guildId} - C{page.params
          .channelId}</MemberListGroup.Label
      >
      <MemberListGroup.Label>Admin - 1</MemberListGroup.Label>

      <MemberListItem.Root>
        <MemberListItem.Avatar
          src="https://static.vecteezy.com/system/resources/previews/023/506/852/non_2x/cute-kawaii-mushroom-chibi-mascot-cartoon-style-vector.jpg"
          alt="John Doe's avatar"
        />
        <MemberListItem.Name>John Doe</MemberListItem.Name>
      </MemberListItem.Root>
    </MemberListGroup.Root>
  </MemberList>
</div>
