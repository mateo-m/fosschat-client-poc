import type { TUser } from './user';

export type TGuild = {
  id: string;
  name: string;
  image: {
    src: string;
    alt: string;
  };
};

export type TGetGuildMembersParams = {
  guildId: string;
  cursor: string | null;
};

export type TGetGuildMembersResponse200 = {
  data: {
    members: TUser[];
  };
  pagination: {
    next_cursor: string | null;
    previous_cursor: string | null;
  };
};

export type TGetGuildParams = {
  guildId: string;
};

export type TGetGuildResponse200 = {
  data: {
    guild: TGuild | null;
  };
};

export type TGetGuildChannelsParams = {
  guildId: string;
  cursor: string | null;
};
