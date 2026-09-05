import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faEllipsisVertical,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

import type { Video } from "@/types/video";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const watchHref = `/watch/${video.id}`;

  return (
    <article className="group min-w-0">
      <Link
        href={watchHref}
        prefetch={false}
        aria-label={`Watch ${video.title}`}
        className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
      >
        <div
          role="img"
          aria-label={video.thumbnail.alt}
          className="relative aspect-video overflow-hidden rounded-xl bg-zinc-200 shadow-sm dark:bg-zinc-800"
        >
          <div
            className="absolute inset-0 transition-transform duration-200 ease-out group-hover:scale-[1.025]"
            style={{ background: video.thumbnail.gradient }}
          >
            <div className="absolute -left-8 -top-12 h-36 w-36 rounded-full border border-white/20 bg-white/10" />
            <div className="absolute -bottom-16 right-4 h-40 w-40 rounded-full border-[24px] border-white/10" />
            <div className="absolute right-[18%] top-[14%] h-16 w-16 rotate-12 rounded-2xl border border-white/15 bg-black/10 shadow-2xl" />

            <div className="relative flex h-full flex-col justify-between p-4 text-white sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm">
                  {video.category}
                </span>
                <span
                  className="h-2.5 w-2.5 rounded-full shadow-[0_0_18px_currentColor]"
                  style={{ color: video.thumbnail.accent, backgroundColor: "currentColor" }}
                />
              </div>

              <div className="flex items-end justify-between gap-4 pb-1">
                <p className="max-w-[75%] whitespace-pre-line text-lg font-black leading-[0.96] tracking-[-0.04em] drop-shadow-md sm:text-2xl">
                  {video.thumbnail.label}
                </p>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/25 text-xs text-white shadow-lg backdrop-blur-sm transition-transform duration-200 group-hover:scale-105">
                  <FontAwesomeIcon icon={faPlay} className="ml-0.5" />
                </span>
              </div>
            </div>
          </div>

          <span className="absolute bottom-2 right-2 z-10 rounded bg-black/80 px-1.5 py-0.5 text-xs font-semibold leading-4 text-white shadow-sm">
            {video.duration}
          </span>
        </div>
      </Link>

      <div className="mt-3 grid grid-cols-[36px_minmax(0,1fr)_32px] gap-3">
        <div
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm"
          style={{ background: video.channelGradient }}
        >
          {video.channelInitials}
        </div>

        <div className="min-w-0">
          <h2 className="line-clamp-2 text-sm font-semibold leading-5 text-zinc-900 dark:text-zinc-100 sm:text-[15px]">
            <Link
              href={watchHref}
              prefetch={false}
              className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {video.title}
            </Link>
          </h2>

          <div className="mt-1 text-xs leading-5 text-zinc-600 dark:text-zinc-400 sm:text-sm">
            <p className="flex min-w-0 items-center gap-1">
              <span className="truncate">{video.channelName}</span>
              {video.verified ? (
                <span
                  className="inline-flex shrink-0 items-center"
                  title="Verified channel"
                >
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    aria-hidden="true"
                    className="text-[11px]"
                  />
                  <span className="sr-only">Verified channel</span>
                </span>
              ) : null}
            </p>
            <p className="truncate">
              {video.views} <span aria-hidden="true">&bull;</span>{" "}
              {video.uploadedAt}
            </p>
          </div>
        </div>

        <button
          type="button"
          aria-label={`More options for ${video.title}`}
          className="flex h-8 w-8 items-center justify-center self-start rounded-full text-zinc-700 opacity-70 transition-colors hover:bg-zinc-200 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group-hover:opacity-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
      </div>
    </article>
  );
}
