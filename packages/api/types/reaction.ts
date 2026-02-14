import type { TEmote } from './emote';

export type TReaction = {
  emote: TEmote;
  count: number;
  me: boolean;
  userIds: string[];
};
