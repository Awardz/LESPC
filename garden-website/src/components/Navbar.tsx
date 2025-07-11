import { CustomNavLink } from "./CustomNavLink";
//Images
import Banner from '../assets/Banner.png'

function Navbar() {
    return (
        <nav className="fixed top-0 z-50 shadow-md w-screen backdrop-blur-md">
        <div className="flex items-center h-16 w-full">
            <img 
            src={Banner} 
            alt="Garden Banner" 
            className="h-16 object-contain absolute left-0" 
            />
            <div className="container mx-auto flex justify-end items-center h-full px-4 bg-white/90 rounded-r-lg">

            {/* <h1 className="text-xl font-bold text-green-700">Garden</h1> */}
            <div className="flex-grow text-center">
                <h1 className=" flex items-center justify-center text-green-700 text-5xl">Lower East Side People Care (LESPC)</h1>
            </div>
            
            <ul className="flex space-x-4 text-green-700 space-x-8">
            <CustomNavLink to="/" className="hover:underline">Home</CustomNavLink>
            <CustomNavLink to="/about" className="hover:underline">About</CustomNavLink>
            <CustomNavLink to="/events" className="hover:underline">Events</CustomNavLink>
            <CustomNavLink to="/getinvolved" className="hover:underline">Get Involved</CustomNavLink>
            <CustomNavLink to="/gallery" className="hover:underline">Gallery</CustomNavLink>
            <CustomNavLink to="/donate" className="hover:underline">Donate</CustomNavLink>
            <CustomNavLink to="/contact" className="hover:underline">Contact</CustomNavLink>
            </ul>
            </div>
        </div>
        </nav>
    );
    }
export default Navbar;