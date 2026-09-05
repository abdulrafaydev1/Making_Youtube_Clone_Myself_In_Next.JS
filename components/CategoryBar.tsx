"use client";

import { useState } from "react";

export const categories = [
  "All",
  "Music",
  "Gaming",
  "Live",
  "News",
  "Programming",
  "React",
  "JavaScript",
  "Next.js",
  "AI",
  "Podcasts",
  "Movies",
  "Sports",
  "Recently uploaded",
  "Watched",
  "New to you",
] as const;

export type Category = (typeof categories)[number];

export default function CategoryBar() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  return (
    <nav
      aria-label="Video categories"
      className="sticky top-14 z-30 border-b border-zinc-200/70 bg-white/95 px-3 py-3 backdrop-blur-sm dark:border-zinc-800 dark:bg-[#0f0f0f]/95 sm:px-4 lg:px-6"
    >
      <div className="scrollbar-none flex gap-3 overflow-x-auto overscroll-x-contain whitespace-nowrap">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-[#0f0f0f] ${
                isSelected
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                  : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
