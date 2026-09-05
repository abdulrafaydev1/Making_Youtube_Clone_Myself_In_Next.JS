import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus, faBell, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <>
            <div className="flex items-center  bg-black-800 text-white  w-full h-10">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faBars} />
                    <img src="/images/youtubelogo.png" alt="YouTube Logo" />
                </div>
                <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
                    <input className="border-1 p-4 " type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
                <div className="absolute right-4 flex items-center gap-2">
                    <button> <FontAwesomeIcon icon={faPlus} /> Create </button>
                    <a href="" > <FontAwesomeIcon icon={faBell} /> </a>
                    <a href="" > <FontAwesomeIcon icon={faCircleUser} /> </a>
                </div>
            </div>
        </ >
    )
}

export default Navbar
