"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBars,
  faBell,
  faMagnifyingGlass,
  faMicrophone,
  faPlay,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

type NavbarProps = {
  isDesktopSidebarExpanded: boolean;
  isMobileSidebarOpen: boolean;
  onDesktopMenuToggle: () => void;
  onMobileMenuToggle: () => void;
};

const iconButtonClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:bg-zinc-800";

export default function Navbar({
  isDesktopSidebarExpanded,
  isMobileSidebarOpen,
  onDesktopMenuToggle,
  onMobileMenuToggle,
}: NavbarProps) {
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

    useEffect(() => {
        if (!isMobileSearchOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsMobileSearchOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMobileSearchOpen]);

    const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    return (
        <header className="fixed inset-x-0 top-0 z-50 h-14 border-b border-transparent bg-white/95 text-zinc-950 backdrop-blur-md dark:bg-[#0f0f0f]/95 dark:text-white">
            <div className="relative flex h-full w-full items-center gap-2 px-2 sm:gap-3 sm:px-4">
                <div className="flex shrink-0 items-center gap-2">
                    <button
                        type="button"
                        aria-label={isMobileSidebarOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-controls="mobile-sidebar"
                        aria-expanded={isMobileSidebarOpen}
                        onClick={onMobileMenuToggle}
                        className={`${iconButtonClass} lg:hidden`}
                    >
                        <FontAwesomeIcon icon={faBars} className="text-lg" />
                    </button>

                    <button
                        type="button"
                        aria-label={isDesktopSidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
                        aria-controls="desktop-sidebar"
                        aria-expanded={isDesktopSidebarExpanded}
                        onClick={onDesktopMenuToggle}
                        className={`${iconButtonClass} hidden lg:flex`}
                    >
                        <FontAwesomeIcon icon={faBars} className="text-lg" />
                    </button>

                    <Link
                        href="/"
                        aria-label="VideoTube home"
                        className="flex items-center gap-1.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                        <span className="flex h-5 w-8 items-center justify-center rounded-md bg-red-600 shadow-sm">
                            <FontAwesomeIcon icon={faPlay} className="ml-0.5 text-[10px] text-white" />
                        </span>
                        <span className="hidden text-lg font-bold tracking-[-0.04em] min-[360px]:inline">
                            VideoTube
                        </span>
                    </Link>
                </div>

                <form
                    role="search"
                    onSubmit={handleSearchSubmit}
                    className="mx-auto hidden min-w-0 max-w-[720px] flex-1 items-center md:flex"
                >
                    <div className="flex min-w-0 flex-1 rounded-full focus-within:ring-1 focus-within:ring-blue-500">
                        <label htmlFor="desktop-search" className="sr-only">
                            Search videos
                        </label>
                        <input
                            id="desktop-search"
                            name="search"
                            type="search"
                            placeholder="Search"
                            className="h-10 min-w-0 flex-1 rounded-l-full border border-r-0 border-zinc-300 bg-white px-4 text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-700 dark:bg-[#121212] dark:placeholder:text-zinc-400"
                        />
                        <button
                            type="submit"
                            aria-label="Search"
                            className="flex h-10 w-16 shrink-0 items-center justify-center rounded-r-full border border-zinc-300 bg-zinc-50 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>

                    <button
                        type="button"
                        aria-label="Search with your voice"
                        className={`${iconButtonClass} ml-2 bg-zinc-100 dark:bg-zinc-800`}
                    >
                        <FontAwesomeIcon icon={faMicrophone} />
                    </button>
                </form>

                <div className="ml-auto flex shrink-0 items-center gap-0.5 sm:gap-1">
                    <button
                        type="button"
                        aria-label="Open search"
                        onClick={() => setIsMobileSearchOpen(true)}
                        className={`${iconButtonClass} md:hidden`}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>

                    <button
                        type="button"
                        aria-label="Create"
                        className="hidden h-9 items-center gap-2 rounded-full bg-zinc-100 px-3 text-sm font-medium transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:flex dark:bg-zinc-800 dark:hover:bg-zinc-700"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        <span className="hidden lg:inline">Create</span>
                    </button>

                    <button
                        type="button"
                        aria-label="Notifications"
                        className={iconButtonClass}
                    >
                        <FontAwesomeIcon icon={faBell} className="text-lg" />
                    </button>

                    <button
                        type="button"
                        aria-label="Open account menu"
                        className="ml-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-600 text-sm font-semibold text-white shadow-sm ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:ring-offset-[#0f0f0f] sm:ml-1"
                    >
                        A
                    </button>
                </div>

                {isMobileSearchOpen && (
                    <div className="absolute inset-0 z-10 flex items-center gap-2 bg-white px-2 dark:bg-[#0f0f0f] md:hidden">
                        <button
                            type="button"
                            aria-label="Close search"
                            onClick={() => setIsMobileSearchOpen(false)}
                            className={iconButtonClass}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>

                        <form
                            role="search"
                            onSubmit={handleSearchSubmit}
                            className="flex min-w-0 flex-1 rounded-full focus-within:ring-1 focus-within:ring-blue-500"
                        >
                            <label htmlFor="mobile-search" className="sr-only">
                                Search videos
                            </label>
                            <input
                                autoFocus
                                id="mobile-search"
                                name="mobile-search"
                                type="search"
                                placeholder="Search videos"
                                className="h-10 min-w-0 flex-1 rounded-l-full border border-r-0 border-zinc-300 bg-white px-4 text-sm outline-none dark:border-zinc-700 dark:bg-[#121212]"
                            />
                            <button
                                type="submit"
                                aria-label="Search"
                                className="flex h-10 w-12 items-center justify-center rounded-r-full border border-zinc-300 bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800"
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </form>

                        <button
                            type="button"
                            aria-label="Search with your voice"
                            className={`${iconButtonClass} bg-zinc-100 dark:bg-zinc-800`}
                        >
                            <FontAwesomeIcon icon={faMicrophone} />
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
