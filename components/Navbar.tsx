import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus, faBell, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <>
            <div className="flex items-center absolute p-4 bg-black-800 text-white m-0 p-0 w-full h-10">
                <FontAwesomeIcon icon={faBars} />
                <img src="/images/youtubelogo.png" alt="YouTube Logo" /> 
                <input type="text" placeholder="Search..." />
                <button>Search</button>
                <button> <FontAwesomeIcon icon={faPlus} /> Create </button>
                <a href="" > <FontAwesomeIcon icon={faBell} /> </a>
                <a href="" > <FontAwesomeIcon icon={faCircleUser} /> </a>
            </div>
        </ >
    )
}

export default Navbar
