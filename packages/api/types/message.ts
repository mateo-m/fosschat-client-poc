import type { TEmote } from "./emote";
import type { TMedia } from "./media";
import type { TReaction } from "./reaction";
import type { TUser } from "./user";

export type TMessage = {
  guildId: string;
  channelId: string;
  author: Pick<TUser, "id" | "handle" | "displayName">;
  content: string;
  attachments: TMedia[];
  reactions: TReaction[];
  metadata: {
    created_at: string;
    last_edited_at: string | null;
    deleted_at: string | null;
  }
}