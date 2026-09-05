"use client";

import Link from "next/link";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faYoutube,
  faYoutubeShorts,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChildReaching,
  faCirclePlay,
  faCircleQuestion,
  faClock,
  faClockRotateLeft,
  faCommentDots,
  faFilm,
  faFire,
  faFlag,
  faGamepad,
  faGear,
  faGraduationCap,
  faHouse,
  faListUl,
  faMusic,
  faNewspaper,
  faRectangleList,
  faShirt,
  faThumbsUp,
  faTowerBroadcast,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SidebarProps {
  desktopExpanded: boolean;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

interface SidebarItem {
  label: string;
  href: string;
  icon: IconDefinition;
  active?: boolean;
}

interface SidebarSection {
  id: string;
  title?: string;
  items: SidebarItem[];
}

const primaryItems: SidebarItem[] = [
  { label: "Home", href: "/", icon: faHouse, active: true },
  { label: "Shorts", href: "/shorts", icon: faYoutubeShorts },
  {
    label: "Subscriptions",
    href: "/subscriptions",
    icon: faRectangleList,
  },
];

const sidebarSections: SidebarSection[] = [
  {
    id: "you",
    title: "You",
    items: [
      { label: "Your channel", href: "/channel/you", icon: faUser },
      { label: "History", href: "/feed/history", icon: faClockRotateLeft },
      { label: "Playlists", href: "/playlists", icon: faListUl },
      { label: "Your videos", href: "/your-videos", icon: faCirclePlay },
      { label: "Watch later", href: "/watch-later", icon: faClock },
      { label: "Liked videos", href: "/liked-videos", icon: faThumbsUp },
    ],
  },
  {
    id: "explore",
    title: "Explore",
    items: [
      { label: "Trending", href: "/trending", icon: faFire },
      { label: "Music", href: "/music", icon: faMusic },
      { label: "Movies", href: "/movies", icon: faFilm },
      { label: "Live", href: "/live", icon: faTowerBroadcast },
      { label: "Gaming", href: "/gaming", icon: faGamepad },
      { label: "News", href: "/news", icon: faNewspaper },
      { label: "Sports", href: "/sports", icon: faTrophy },
      { label: "Learning", href: "/learning", icon: faGraduationCap },
      { label: "Fashion & Beauty", href: "/fashion", icon: faShirt },
    ],
  },
  {
    id: "more-from-youtube",
    title: "More from YouTube",
    items: [
      { label: "YouTube Premium", href: "/premium", icon: faYoutube },
      { label: "YouTube Music", href: "/music", icon: faCirclePlay },
      { label: "YouTube Kids", href: "/kids", icon: faChildReaching },
    ],
  },
  {
    id: "settings",
    items: [
      { label: "Settings", href: "/settings", icon: faGear },
      { label: "Report history", href: "/report-history", icon: faFlag },
      { label: "Help", href: "/help", icon: faCircleQuestion },
      { label: "Send feedback", href: "/feedback", icon: faCommentDots },
    ],
  },
];

function NavigationItem({
  item,
  compact = false,
  onNavigate,
}: {
  item: SidebarItem;
  compact?: boolean;
  onNavigate?: () => void;
}) {
  const sharedClasses =
    "group flex rounded-lg outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950";
  const activeClasses = item.active
    ? "bg-neutral-100 font-medium text-neutral-950 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
    : "text-neutral-800 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800";

  return (
    <Link
      href={item.href}
      prefetch={false}
      aria-current={item.active ? "page" : undefined}
      aria-label={compact ? item.label : undefined}
      title={compact ? item.label : undefined}
      onClick={onNavigate}
      className={`${sharedClasses} ${activeClasses} ${
        compact
          ? "min-h-16 w-full flex-col items-center justify-center gap-1 px-1 py-2"
          : "h-10 items-center gap-6 px-3"
      }`}
    >
      <span
        className={`flex shrink-0 items-center justify-center ${
          compact ? "h-6 w-6" : "h-6 w-6"
        }`}
        aria-hidden="true"
      >
        <FontAwesomeIcon icon={item.icon} className="h-[18px] w-[18px]" />
      </span>
      <span
        className={
          compact
            ? "w-full truncate text-center text-[10px] leading-3"
            : "truncate text-sm"
        }
      >
        {item.label}
      </span>
    </Link>
  );
}

function ExpandedNavigation({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Main navigation" className="px-3 py-3">
      <div className="space-y-0.5">
        {primaryItems.map((item) => (
          <NavigationItem key={item.href} item={item} onNavigate={onNavigate} />
        ))}
      </div>

      {sidebarSections.map((section) => (
        <section
          key={section.id}
          aria-labelledby={
            section.title ? `sidebar-${section.id}` : undefined
          }
          className="mt-3 border-t border-neutral-200 pt-3 dark:border-neutral-800"
        >
          {section.title ? (
            <h2
              id={`sidebar-${section.id}`}
              className="mb-1 px-3 py-1 text-base font-semibold text-neutral-900 dark:text-neutral-100"
            >
              {section.title}
            </h2>
          ) : null}
          <div className="space-y-0.5">
            {section.items.map((item) => (
              <NavigationItem
                key={item.href}
                item={item}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </section>
      ))}
    </nav>
  );
}

function CompactNavigation() {
  return (
    <nav aria-label="Main navigation" className="space-y-1 px-1 py-2">
      {primaryItems.map((item) => (
        <NavigationItem key={item.href} item={item} compact />
      ))}
    </nav>
  );
}

export default function Sidebar({
  desktopExpanded,
  mobileOpen,
  onMobileClose,
}: SidebarProps) {
  return (
    <>
      <button
        type="button"
        aria-label="Close navigation menu"
        aria-hidden={!mobileOpen}
        onClick={onMobileClose}
        tabIndex={mobileOpen ? 0 : -1}
        className={`fixed inset-x-0 bottom-0 top-14 z-40 bg-black/50 transition-opacity duration-300 motion-reduce:transition-none lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        id="mobile-sidebar"
        aria-label="Mobile sidebar"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        className={`sidebar-scrollbar fixed bottom-0 left-0 top-14 z-50 w-60 overflow-y-auto border-r border-neutral-200 bg-white shadow-xl transition-transform duration-300 ease-out motion-reduce:transition-none dark:border-neutral-800 dark:bg-neutral-950 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ExpandedNavigation onNavigate={onMobileClose} />
      </aside>

      <aside
        id="desktop-sidebar"
        aria-label="Desktop sidebar"
        className={`sidebar-scrollbar fixed bottom-0 left-0 top-14 z-30 hidden overflow-y-auto overflow-x-hidden border-r border-neutral-200 bg-white transition-[width] duration-300 ease-out motion-reduce:transition-none dark:border-neutral-800 dark:bg-neutral-950 lg:block ${
          desktopExpanded ? "w-60" : "w-[72px]"
        }`}
      >
        {desktopExpanded ? <ExpandedNavigation /> : <CompactNavigation />}
      </aside>
    </>
  );
}
