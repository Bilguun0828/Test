import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
// Import the data from your data file
import { menuLinks } from "../../data/data3"; 

const Topbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-lime-900/30 relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="text-2xl font-bold text-white">
          Fitzone<span className="text-lime-500">.</span>
        </div>

        {/* CENTER: Nav Links (Desktop) */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {menuLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-lime-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* RIGHT: Buttons & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <button className="bg-lime-500 hover:bg-lime-600 transition-all rounded-full px-6 py-2 text-sm font-bold text-black">
              Join Now
            </button>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-lime-500 text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute top-0 left-0 w-full bg-[#0B1120] p-6 flex flex-col gap-4 md:hidden border-b border-gray-800 animate-in fade-in zoom-in duration-300">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-white">Fitzone</div>
            <button onClick={() => setOpen(false)} className="text-3xl text-lime-500">
              <HiX />
            </button>
          </div>
          
          {menuLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 text-lg font-medium py-3 border-b border-gray-800 last:border-0 hover:text-lime-500"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <button className="mt-4 bg-lime-500 w-full py-3 rounded-xl font-bold text-black">
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Topbar;