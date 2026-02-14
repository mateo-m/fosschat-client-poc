export type TEmote = {
  name: string;
} & (
  | {
      id: null;
    }
  | {
      guildId: string;
      id: string;
      url: string;
    }
);
