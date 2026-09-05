export interface VideoThumbnail {
  /** A local CSS background value, avoiding a dependency on remote image hosts. */
  gradient: string;
  /** Accent color used by the decorative thumbnail artwork. */
  accent: string;
  /** Short, high-impact text rendered inside the thumbnail. */
  label: string;
  /** Accessible description for the generated thumbnail artwork. */
  alt: string;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: VideoThumbnail;
  channelName: string;
  channelInitials: string;
  channelGradient: string;
  views: string;
  uploadedAt: string;
  duration: string;
  category: string;
  verified?: boolean;
}
