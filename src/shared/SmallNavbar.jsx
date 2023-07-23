import { FaSearch, FaHome, FaListAlt, FaNewspaper, FaUserAlt } from "react-icons/fa";
const SmallNavbar = () => {
    return (
        <div className="flex justify-evenly bg-white w-full p-5 text-2xl">
            <FaHome className="text-4xl rounded-md text-white bg-mainColor p-1" />
            <FaListAlt className="text-4xl rounded-md hover:text-white hover:bg-mainColor p-1" />
            <FaNewspaper className="text-4xl rounded-md hover:text-white hover:bg-mainColor p-1" />
            <FaUserAlt className="text-4xl rounded-md hover:text-white hover:bg-mainColor p-1" />
            <FaSearch className="text-4xl rounded-md hover:text-white hover:bg-mainColor p-1" />
        </div>
    );
};

export default SmallNavbar;