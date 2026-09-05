"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faMagnifyingGlass,
    faMicrophone,
    faVideo,
    faBell,
    faEllipsisVertical,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <>
            {/* NAVBAR */}
            <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-3">

                {/* LEFT SECTION */}
                <div className="flex items-center gap-3">

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
                    >
                        <FontAwesomeIcon
                            icon={menuOpen ? faXmark : faBars}
                            className="text-xl text-gray-800"
                        />
                    </button>

                    {/* YouTube Logo */}
                     <div className="flex cursor-pointer items-center gap-1">
                        <FontAwesomeIcon
                            icon={faYoutube}
                            className="text-[31px] text-red-600"
                        />

                        <span className="hidden text-xl font-semibold tracking-tight text-black sm:block">
                            YouTube
                        </span>
                    </div>
                </div>

                {/* CENTER SEARCH */}
                <div className="mx-4 hidden flex-1 items-center justify-center md:flex">
                    <div className="flex w-full max-w-[650px] items-center">

                        {/* Search Input */}
                        <div className="flex h-10 flex-1 items-center overflow-hidden rounded-l-full border border-gray-300 focus-within:border-blue-500">

                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search"
                                className="h-full w-full bg-transparent px-5 text-base text-gray-800 outline-none placeholder:text-gray-500"
                            />

                            {search && (
                                <button
                                    onClick={() => setSearch("")}
                                    className="mr-3 text-gray-600 hover:text-black"
                                >
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            )}
                        </div>

                        {/* Search Button */}
                        <button
                            className="flex h-10 w-16 items-center justify-center rounded-r-full border border-l-0 border-gray-300 bg-gray-50 hover:bg-gray-100"
                        >
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="text-lg text-gray-700"
                            />
                        </button>

                        {/* Microphone */}
                        <button className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                            <FontAwesomeIcon
                                icon={faMicrophone}
                                className="text-[17px] text-gray-800"
                            />
                        </button>
                    </div>
                </div>

                {/* MOBILE SEARCH */}
                <div className="ml-auto flex items-center gap-1 md:hidden">

                    <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="text-lg text-gray-800"
                        />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100">
                        <FontAwesomeIcon
                            icon={faMicrophone}
                            className="text-lg text-gray-800"
                        />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100">
                        <FontAwesomeIcon
                            icon={faVideo}
                            className="text-lg text-gray-800"
                        />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100">
                        <FontAwesomeIcon
                            icon={faBell}
                            className="text-lg text-gray-800"
                        />
                    </button>

                    {/* Avatar */}
                    <div className="ml-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white">
                        A
                    </div>
                </div>

                {/* RIGHT SECTION DESKTOP */}
                <div className="hidden items-center gap-2 md:flex">

                    {/* Create */}
                    <button className="flex h-10 items-center gap-2 rounded-full bg-gray-100 px-4 font-medium text-gray-800 hover:bg-gray-200">
                        <FontAwesomeIcon icon={faVideo} />
                        <span>Create</span>
                    </button>

                    {/* Notification */}
                    <button className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100">
                        <FontAwesomeIcon
                            icon={faBell}
                            className="text-lg text-gray-800"
                        />

                        {/* Notification badge */}
                        <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
                            9+
                        </span>
                    </button>

                    {/* More */}
                    <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100">
                        <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            className="text-lg text-gray-800"
                        />
                    </button>

                    {/* Avatar */}
                    <button className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white hover:opacity-90">
                        A
                    </button>
                </div>
            </header>

            {/* MOBILE SEARCH BAR */}
            <div className="fixed left-0 right-0 top-16 z-40 flex border-b border-gray-200 bg-white p-2 md:hidden">
                <div className="flex h-10 w-full items-center overflow-hidden rounded-full border border-gray-300">
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-4 text-sm outline-none"
                    />

                    <button className="flex h-full w-12 items-center justify-center bg-gray-100">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>

            {/* MOBILE SIDEBAR */}
            {menuOpen && (
                <div className="fixed left-0 top-16 z-50 h-[calc(100vh-64px)] w-64 border-r border-gray-200 bg-white p-3 shadow-lg">

                    <nav className="space-y-1">

                        <button className="flex w-full items-center gap-5 rounded-xl bg-gray-100 px-4 py-3 text-sm font-medium">
                            🏠
                            <span>Home</span>
                        </button>

                        <button className="flex w-full items-center gap-5 rounded-xl px-4 py-3 text-sm hover:bg-gray-100">
                            🎬
                            <span>Shorts</span>
                        </button>

                        <button className="flex w-full items-center gap-5 rounded-xl px-4 py-3 text-sm hover:bg-gray-100">
                            📺
                            <span>Subscriptions</span>
                        </button>

                        <hr className="my-3 border-gray-200" />

                        <button className="flex w-full items-center gap-5 rounded-xl px-4 py-3 text-sm hover:bg-gray-100">
                            📚
                            <span>You</span>
                        </button>

                        <button className="flex w-full items-center gap-5 rounded-xl px-4 py-3 text-sm hover:bg-gray-100">
                            🕘
                            <span>History</span>
                        </button>

                        <button className="flex w-full items-center gap-5 rounded-xl px-4 py-3 text-sm hover:bg-gray-100">
                            👍
                            <span>Liked videos</span>
                        </button>
                    </nav>
                </div>
            )}
        </>
    );
}