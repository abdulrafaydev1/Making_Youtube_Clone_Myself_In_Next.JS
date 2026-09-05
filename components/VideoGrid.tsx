import VideoCard from "@/components/VideoCard";
import { videos as demoVideos } from "@/data/videos";
import type { Video } from "@/types/video";

interface VideoGridProps {
  videos?: readonly Video[];
}

export default function VideoGrid({ videos = demoVideos }: VideoGridProps) {
  return (
    <section aria-label="Recommended videos">
      <div className="grid grid-cols-1 items-start gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3 wide:grid-cols-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
