import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-indigo-50 border-b border-indigo-100 relative z-50">
      <div className="w-full px-8 py-3.5 flex justify-between items-center">

        {/* LEFT: hamburger + logo */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-gray-600"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-200" />
        </div>

        {/* CENTER: nav links */}
        <div className="hidden md:flex gap-8 text-base font-medium text-gray-600" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {["Home", "Products", "Solution", "Pricing", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
            >
              {link}
            </a>
          ))}
        </div>

        {/* RIGHT: buttons */}
        <div className="flex items-center gap-2.5">
          <button className="bg-white border border-gray-200 rounded-lg px-5 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition">
            Sign Up
          </button>
          <button className="bg-violet-700 rounded-lg px-5 py-2 text-base font-medium text-white shadow-md shadow-violet-300 hover:bg-violet-800 transition">
            Login
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="w-full md:hidden">
          {["Home", "Products", "Solution", "Pricing", "Contact"].map((link) => (
            <a key={link} href="#" className="text-sm font-medium text-gray-700">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;