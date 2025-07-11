     
     function Footer() 
     {
    return (
        <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
            {/* Main Footer Content */}
            <div className="flex md:grid-cols-4 gap-40 text-center items-center justify-center">
            {/* Column 1: Logo/About */}
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4">Lower East Side <br /> People Care</h3>
                <p className="text-gray-400">
                Building innovative solutions for modern businesses.
                </p>
            </div>

            {/* Column 2: Quick Links */}
  {/*           <div>
                <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
                </ul>
            </div> */}

            {/* Column 3: Contact */}
            <div>
                <h4 className="font-semibold text-lg mb-4">Contact</h4>
                <address className="not-italic text-gray-400">
                <p>25 Rudgers Street, New York, NY 10002 <br />  (Between Madison Street and Henry Street)</p>
                <p>Email: LESPCNYC@gmail.com</p>
                <p>Phone: (123) 456-7890</p>
                </address>
            </div>

            {/* Column 4: Newsletter */}
  {/*           <div>
                <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
                <form className="flex flex-col gap-2">
                <input 
                    type="email" 
                    placeholder="Your email" 
                    className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
                >
                    Subscribe
                </button>
                </form>
            </div> */}
            </div>

            {/* Copyright/Bottom Bar */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} People Care. All rights reserved.</p>
            </div>
            </div>
        </footer>
)}
  export default Footer;