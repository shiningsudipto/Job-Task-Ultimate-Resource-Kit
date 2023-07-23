import logo from '../assets/b-logo.png'
import { FaSearch, FaHome, FaListAlt, FaNewspaper, FaUserAlt, FaRegBell, FaRegShareSquare } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className='lg:fixed hidden lg:block'>
            <div className="menu p-4 w-20 h-screen text-base-content">
                {/* Sidebar content here */}
                <div className='text-center flex flex-col justify-center relative h-full'>
                    <div className='absolute top-0'>
                        <div className='flex flex-col items-center space-y-5'>
                            <img className='h-10' src={logo} alt="" />
                            <FaSearch className='p-2 text-4xl hover:text-white hover:bg-mainColor rounded-md' />
                        </div>
                        <div className='text-2xl flex flex-col items-center mt-14 space-y-6'>
                            <FaHome className='p-2 text-4xl text-white bg-mainColor rounded-md' />
                            <FaListAlt className='p-2 text-4xl hover:text-white hover:bg-mainColor rounded-md' />
                            <FaNewspaper className='p-2 text-4xl hover:text-white hover:bg-mainColor rounded-md' />
                            <FaUserAlt className='p-2 text-4xl hover:text-white hover:bg-mainColor rounded-md' />
                        </div>
                    </div>
                    <div className='text-2xl flex flex-col items-center space-y-6 bottom-0 absolute'>
                        <FaRegBell className='p-2 text-4xl hover:text-white hover:bg-mainColor rounded-md' />
                        <FaRegShareSquare className='p-2 text-4xl hover:text-white hover:bg-mainColor rounded-md' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;