import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus, faBell, faCircleUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <>
            <header className="flex h-14 items-center justify-between px-4">

                {/* LEFT */}
                <div className="flex items-center gap-4">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-900 ">
                        <FontAwesomeIcon icon={faBars} className="text-xl" />
                    </button>

                    <img
                        src="/images/youtubelogo.png"
                        alt="YouTube Logo"
                        className="h-6 w-auto"
                    />
                </div>

                {/* CENTER SEARCH */}
                <div className="hidden flex-1 justify-center px-8 md:flex">
                    <div className="relative w-full max-w-[600px]">

                        <input
                            type="text"
                            placeholder="Search"
                            className="h-10 w-[600px] rounded-full border border-gray-300 bg-black pl-5 pr-14 outline-none focus:border-blue-500"
                        />

                        <button className="absolute right-0 top-0 flex h-10 w-14 items-center justify-center rounded-r-full bg-gray-900 hover:bg-blue-600">
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="text-lg text-white"
                            />
                        </button>

                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-2">

                    <button className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200">
                        <FontAwesomeIcon icon={faPlus} />
                        <span className="hidden sm:inline">Create</span>
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-900">
                        <FontAwesomeIcon icon={faBell} className="text-lg" />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-900">
                        <FontAwesomeIcon icon={faCircleUser} className="text-xl" />
                    </button>

                </div>

            </header>
        </ >
    )
}

export default Navbar
