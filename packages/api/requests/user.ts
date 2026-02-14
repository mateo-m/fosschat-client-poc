import type { TUser } from "../types/user";

const mockedGuildMembers: TUser[] = new Array(1_000).fill(null).map((_, i) => {
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

const getMe = (): Promise<TUser | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedGuildMembers[0] || null);
    }, 1000);
  });
}

export const User = {
  getMe
};