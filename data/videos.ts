import type { Video } from "@/types/video";

export const videos: readonly Video[] = [
  {
    id: "massive-chocolate-factory",
    title: "Inside a Massive Chocolate Factory: From Cocoa Bean to Bar",
    thumbnail: {
      gradient:
        "linear-gradient(135deg, #2b0b08 0%, #78350f 50%, #f59e0b 100%)",
      accent: "#fbbf24",
      label: "CHOCOLATE\nFACTORY",
      alt: "Warm-toned illustration representing an industrial chocolate factory",
    },
    channelName: "Factory Lens",
    channelInitials: "FL",
    channelGradient: "linear-gradient(135deg, #f97316, #7c2d12)",
    views: "8.4M views",
    uploadedAt: "3 weeks ago",
    duration: "18:42",
    category: "Manufacturing",
    verified: true,
  },
  {
    id: "millions-of-cars-manufactured",
    title: "How Millions of Cars Are Manufactured on a Modern Assembly Line",
    thumbnail: {
      gradient:
        "linear-gradient(135deg, #111827 0%, #334155 48%, #0ea5e9 100%)",
      accent: "#38bdf8",
      label: "BUILT AT\nSCALE",
      alt: "Steel-blue illustration representing a modern car assembly line",
    },
    channelName: "Engineering Daily",
    channelInitials: "ED",
    channelGradient: "linear-gradient(135deg, #38bdf8, #1d4ed8)",
    views: "3.1M views",
    uploadedAt: "8 days ago",
    duration: "14:08",
    category: "Engineering",
    verified: true,
  },

];
