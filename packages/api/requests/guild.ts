import type { TChannel } from "../types/channel";
import type { TGetGuildChannelsParams, TGetGuildMembersParams, TGetGuildMembersResponse200, TGetGuildParams, TGetGuildResponse200, TGuild as TGuild } from "../types/guild";
import type { TUser } from "../types/user";

const mockedGuilds: TGuild[] = Array.from({ length: 5 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Guild ${i + 1}`,
  image: {
    src: `/path/to/guild-icon${i + 1}.jpg`,
    alt: `Guild ${i + 1} icon`
  }
}));

const get = ({guildId}: TGetGuildParams): Promise<TGetGuildResponse200> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const guild = mockedGuilds.find(g => g.id === guildId) || null;
      resolve({data: { guild }});
    }, 1000);
  });
}

export const mockedGuildMembers: TUser[] = new Array(1_000).fill(null).map((_, i) => {
  const id = `${i + 1}`;

  return {
    id,
    handle: `member-${id}`,
    avatar: {
      src: `/path/to/image${i + 1}.jpg`,
      alt: `Member ${id}'s avatar`
    },
    displayName: `Member ${id}`
  }
});

const getMembers = (params: TGetGuildMembersParams): Promise<TGetGuildMembersResponse200> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pageSize = 20;
      const startIndex = params.cursor
        ? Math.max(0, mockedGuildMembers.findIndex((member) => member.id === params.cursor) + 1)
        : 0;
      const paginatedMembers = mockedGuildMembers.slice(startIndex, startIndex + pageSize);
      const hasMore = startIndex + pageSize < mockedGuildMembers.length;
      const nextCursor = hasMore && paginatedMembers.length
        ? paginatedMembers[paginatedMembers.length - 1]?.id ?? null
        : null;
      const previousCursor = startIndex > 0 ? mockedGuildMembers[startIndex - 1]?.id ?? null : null;

      resolve({
        data: {
          members: paginatedMembers
        },
        pagination: {
          next_cursor: nextCursor,
          previous_cursor: previousCursor
        }
      });
    }, 1000);
  });
}

const mockedChannels: TChannel[] = Array.from({ length: 100 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Channel ${i + 1}`,
  guildId: `${Math.floor(i / 20) + 1}`,
  description: `Description for Channel ${i + 1}`,
  type: "text"
}));

const getChannels = (params: TGetGuildChannelsParams) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pageSize = 20;
      const guildChannels = mockedChannels.filter(channel => channel.guildId === params.guildId);
      const startIndex = params.cursor
        ? Math.max(0, guildChannels.findIndex((channel) => channel.id === params.cursor) + 1)
        : 0;
      const paginatedChannels = guildChannels.slice(startIndex, startIndex + pageSize);
      const hasMore = startIndex + pageSize < guildChannels.length;
      const nextCursor = hasMore && paginatedChannels.length
        ? paginatedChannels[paginatedChannels.length - 1]?.id ?? null
        : null;
      const previousCursor = startIndex > 0 ? guildChannels[startIndex - 1]?.id ?? null : null;

      resolve({
        data: {
          channels: paginatedChannels
        },
        pagination: {
          next_cursor: nextCursor,
          previous_cursor: previousCursor
        }
      });
    }, 1000);
  });
}

export const Guild = {
  get,
  getMembers,
  getChannels
};