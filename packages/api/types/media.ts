type TMediaBase = {
  id: string;
  url: string;
  name: string;
  mimeType: string;
  size: number;
};

type TVideoMedia = TMediaBase & {
  type: 'video';
  width: number;
  height: number;
  duration: number;
};

type TImageMedia = TMediaBase & {
  type: 'image';
  width: number;
  height: number;
};

export type TAudioMedia = TMediaBase & {
  type: 'audio';
  duration: number;
};

export type TMedia = TVideoMedia | TImageMedia | TAudioMedia;
