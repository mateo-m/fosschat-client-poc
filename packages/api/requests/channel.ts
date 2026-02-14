import type {
  TGetChannelMembersParams,
  TGetChannelMembersResponse200,
  TGetChannelMessagesParams,
  TGetChannelMessagesResponse200,
  TGetChannelParams,
  TGetChannelResponse200,
} from '../types/channel';
import type { TMessage } from '../types/message';

export const get = (params: TGetChannelParams): Promise<TGetChannelResponse200> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          channel: {
            id: params.channelId,
            name: `Channel ${params.channelId}`,
            guildId: params.guildId,
            description: `Description for Channel ${params.channelId}`,
            type: 'text',
          },
        },
      });
    }, 1000);
  });
};

export const getMessages = (
  params: TGetChannelMessagesParams,
): Promise<TGetChannelMessagesResponse200> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pageSize = 20;
      const totalMessages = 100; // Simulate a total of 100 messages in the channel
      const startIndex = params.cursor ? Math.max(0, parseInt(params.cursor, 10) + 1) : 0;
      const paginatedMessages: TMessage[] = Array.from({ length: pageSize }, (_, i) => ({
        id: `${startIndex + i + 1}`,
        content: `Message ${startIndex + i + 1} in Channel ${params.channelId}`,
        channelId: params.channelId,
        guildId: params.guildId,
        attachments:
          i % 5 === 0
            ? [
                {
                  id: `${startIndex + i + 1}-attachment`,
                  url: `https://example.com/attachment${startIndex + i + 1}.jpg`,
                  filename: `attachment${startIndex + i + 1}.jpg`,
                  size: 1024 * (i + 1),
                  mimeType: 'image/jpeg',
                  type: 'image',
                  height: 600,
                  width: 800,
                  name: `Attachment ${startIndex + i + 1}`,
                },
              ]
            : [],
        author: {
          id: `${((startIndex + i) % 50) + 1}`,
          handle: `user${((startIndex + i) % 50) + 1}`,
          displayName: `User ${((startIndex + i) % 50) + 1}`,
        },
        metadata: {
          created_at: new Date().toISOString(),
          last_edited_at: i % 10 === 0 ? new Date(Date.now() - 1000 * 60 * 5).toISOString() : null,
          deleted_at: i % 15 === 0 ? new Date(Date.now() - 1000 * 60 * 10).toISOString() : null,
        },
        reactions:
          i % 3 === 0
            ? [
                {
                  userIds: Array.from(
                    { length: Math.floor(Math.random() * 10) + 1 },
                    (_, j) => `${((startIndex + i + j) % 50) + 1}`,
                  ),
                  emote: {
                    guildId: params.guildId,
                    id: `emote${((startIndex + i) % 20) + 1}`,
                    name: `Emote ${((startIndex + i) % 20) + 1}`,
                    url: `https://example.com/emote${((startIndex + i) % 20) + 1}.png`,
                  },
                  count: Math.floor(Math.random() * 10) + 1,
                  me: Math.random() < 0.5,
                },
              ]
            : [],
      }));
      resolve({
        data: {
          messages: paginatedMessages,
        },
        pagination: {
          next_cursor: startIndex + pageSize < totalMessages ? `${startIndex + pageSize}` : null,
          previous_cursor: startIndex > 0 ? `${Math.max(0, startIndex - pageSize)}` : null,
        },
      });
    }, 1000);
  });
};

export const getMembers = (
  params: TGetChannelMembersParams,
): Promise<TGetChannelMembersResponse200> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pageSize = 20;
      const totalMembers = 100; // Simulate a total of 100 members in the channel
      const startIndex = params.cursor ? Math.max(0, parseInt(params.cursor, 10) + 1) : 0;
      const paginatedMembers = Array.from({ length: pageSize }, (_, i) => ({
        id: `${startIndex + i + 1}`,
        handle: `member-${startIndex + i + 1}`,
        avatar: {
          src: `/path/to/image${startIndex + i + 1}.jpg`,
          alt: `Member ${startIndex + i + 1}'s avatar`,
        },
        displayName: `Member ${startIndex + i + 1}`,
      }));
      resolve({
        data: {
          members: paginatedMembers,
        },
        pagination: {
          next_cursor: startIndex + pageSize < totalMembers ? `${startIndex + pageSize}` : null,
          previous_cursor: startIndex > 0 ? `${Math.max(0, startIndex - pageSize)}` : null,
        },
      });
    }, 1000);
  });
};

export const Channel = {
  get,
  getMessages,
  getMembers,
};
