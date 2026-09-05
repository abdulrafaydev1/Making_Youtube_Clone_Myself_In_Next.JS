import CategoryBar from "@/components/CategoryBar";
import VideoGrid from "@/components/VideoGrid";

export default function Home() {
  return (
    <>
      <CategoryBar />
      <div className="mx-auto w-full max-w-[2200px] px-3 pb-12 pt-5 sm:px-4 lg:px-5 xl:px-6">
        <h1 className="sr-only">Recommended videos</h1>
        <VideoGrid />
      </div>
    </>
  );
}
