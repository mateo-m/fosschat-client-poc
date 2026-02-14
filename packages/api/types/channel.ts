import type { TMessage } from './message';
import type { TUser } from './user';

type TChannelType = 'text';

export type TChannel = {
  guildId: string;
  id: string;
  type: TChannelType;
  name: string;
  description: string | null;
};

export type TGetChannelParams = {
  guildId: string;
  channelId: string;
};

export type TGetChannelResponse200 = {
  data: {
    channel: TChannel | null;
  };
};

export type TGetChannelMessagesParams = {
  guildId: string;
  channelId: string;
  cursor: string | null;
};

export type TGetChannelMessagesResponse200 = {
  data: {
    messages: TMessage[];
  };
  pagination: {
    next_cursor: string | null;
    previous_cursor: string | null;
  };
};

export type TGetChannelMembersParams = {
  guildId: string;
  channelId: string;
  cursor: string | null;
};

export type TGetChannelMembersResponse200 = {
  data: {
    members: TUser[];
  };
  pagination: {
    next_cursor: string | null;
    previous_cursor: string | null;
  };
};
