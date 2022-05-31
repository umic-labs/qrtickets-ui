export interface Image {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  createdAt: string;
  updatedAt: string;
}

interface Formats {
  thumbnail: ThumbnailOrMediumOrSmall;
  medium: ThumbnailOrMediumOrSmall;
  small: ThumbnailOrMediumOrSmall;
}

interface ThumbnailOrMediumOrSmall {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: null;
  width: number;
  height: number;
  size: number;
  url: string;
}
