import React, { useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { CustomNavLink } from "./CustomNavLink";
//Images
import Banner from '../assets/Banner.png'


function Navbar() {
   const [isOpen, setIsOpen] = React.useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isOpen && 
                menuRef.current && 
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="fixed top-0 z-50 shadow-md w-full backdrop-blur-md">

        {/* Mobile Menu */}
    
       <div className="flex items-center justify-between p-2 md:hidden bg-green-900">
            <a href="/" className="flex items-center">
                <img 
                    src={Banner} 
                    alt="Garden Banner" 
                    className="h-12 object-contain rounded-lg shadow-lg"
                />
                </a>
                <h1 className="text-white items-center text-2xl ">LESPC NYC</h1>
                <button
                    ref={buttonRef}
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-green-700"
                    aria-expanded={isOpen}
                    aria-label="Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white w-full divide-y divide-gray-200"
                    >
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
                { to: "/events", label: "Events" },
                { to: "/getinvolved", label: "Get Involved" },
                { to: "/gallery", label: "Gallery" },
                { to: "/donate", label: "Donate" },
                { to: "/contact", label: "Contact" }
            ].map((link) => (
              <motion.div
                key={link.to}
                whileHover={{ backgroundColor: "rgba(240, 253, 244, 1)" }}
                className="w-full bg-green-900"
              >
                <CustomNavLink
                  to={link.to}
                  className="block py-4 px-6 text-white hover:bg-green-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </CustomNavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
        {/* Desktop Menu */}
        <div className="container mx-auto hidden md:flex items-center h-16  w-full">
            
            <img 
            src={Banner} 
            alt="Garden Banner" 
            className="h-16 object-contain rounded-l-lg shadow-lg " 
            />
            <div className="container mx-auto flex justify-end items-center h-full px-4 bg-green-900 rounded-r-lg text-white">

            {/* <h1 className="text-xl font-bold text-green-700">Garden</h1> */}
            <div className="flex-grow ">
                <h1 className=" flex items-center justify-center xl:text-3xl md:text-2xl lg:text-lg">Lower East Side People Care (LESPC)</h1>
            </div>
            
            <ul className="flex space-x-4 space-x-8">
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
