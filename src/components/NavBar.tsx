import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = ["Home", "Courses", "Teachers", "Pricing", "Contact"];

  return (
    <nav className="bg-white md:bg-indigo-50 border-b border-gray-100 relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="text-2xl font-bold text-indigo-600">
          EduSmart
        </div>

        {/* CENTER: Nav Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:text-indigo-600 transition">
              {link}
            </a>
          ))}
        </div>

        {/* RIGHT: Desktop Buttons / Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Buttons hidden on mobile per image */}
          <div className="hidden md:flex items-center gap-3">
            <button className="bg-white border border-gray-100 rounded-lg px-5 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition">
              Sign Up
            </button>
            <button className="bg-[#5840ff] rounded-lg px-6 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-200 hover:bg-indigo-700 transition">
              Login
            </button>
          </div>

          {/* Hamburger Icon (Only Mobile) */}
          <button
            className="md:hidden text-gray-800 text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute top-0 left-0 w-full bg-indigo-50 p-6 flex flex-col gap-4 shadow-xl md:hidden border-b border-indigo-100 animate-in slide-in-from-top">
          <div className="flex justify-between items-center mb-2">
            <div className="text-xl font-bold text-indigo-600">EduSmart</div>
            <button onClick={() => setOpen(false)} className="text-3xl text-gray-800">
              <HiX />
            </button>
          </div>
          {navLinks.map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-gray-600 font-medium py-2 border-b border-indigo-100/50 last:border-0"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;