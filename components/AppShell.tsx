"use client";

import { useEffect, useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [isDesktopSidebarExpanded, setIsDesktopSidebarExpanded] =
    useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");
    const closeDrawerOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMobileSidebarOpen(false);
    };

    desktopMediaQuery.addEventListener("change", closeDrawerOnDesktop);
    return () =>
      desktopMediaQuery.removeEventListener("change", closeDrawerOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMobileSidebarOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileSidebarOpen]);

  useEffect(() => {
    if (!isMobileSidebarOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileSidebarOpen]);

  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-[#0f0f0f] dark:text-white">
      <Navbar
        isDesktopSidebarExpanded={isDesktopSidebarExpanded}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onDesktopMenuToggle={() =>
          setIsDesktopSidebarExpanded((isExpanded) => !isExpanded)
        }
        onMobileMenuToggle={() =>
          setIsMobileSidebarOpen((isOpen) => !isOpen)
        }
      />

      <Sidebar
        desktopExpanded={isDesktopSidebarExpanded}
        mobileOpen={isMobileSidebarOpen}
        onMobileClose={() => setIsMobileSidebarOpen(false)}
      />

      <div
        className={`min-w-0 pt-14 transition-[margin] duration-300 ease-in-out motion-reduce:transition-none ${
          isDesktopSidebarExpanded ? "lg:ml-60" : "lg:ml-[72px]"
        }`}
      >
        <main>{children}</main>
      </div>
    </div>
  );
}
