import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import AuthModal from "./AuthModal";
import type { AuthMode } from "../../data/data3";
import { menuLinks } from "../../data/data3";

interface TopbarProps {
  onGoHome: () => void;
  onViewPrograms: () => void;
}

const Topbar = ({ onGoHome, onViewPrograms }: TopbarProps) => {
  const [open, setOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [openAuth, setOpenAuth] = useState(false);

  const toggleMode = () => {
    setAuthMode((prev) => (prev === "login" ? "signup" : "login"));
  };

  return (
    <>
      <nav className="bg-black border-b border-lime-900/30 relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* LOGO */}
          <div
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={onGoHome}
          >
            Fitzone<span className="text-lime-500">.</span>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {menuLinks.map((link) => (
              <button
                key={link.name}
                onClick={onGoHome}
                className="text-gray-300 hover:text-lime-500 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-4">
            
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onViewPrograms}
                className="h-11 px-6 flex items-center justify-center bg-transparent border border-gray-800 rounded-xl hover:border-gray-600 transition-colors text-sm font-bold text-white whitespace-nowrap"
              >
                My Programs
              </button>

              <button
                onClick={() => {
                  setAuthMode("signup");
                  setOpenAuth(true);
                }}
                className="h-11 px-6 flex items-center justify-center bg-[#A3E635] hover:bg-[#bbf746] transition-all rounded-full text-sm font-bold text-black whitespace-nowrap"
              >
                Join Now
              </button>

              <button
                onClick={() => {
                  setAuthMode("login");
                  setOpenAuth(true);
                }}
                className="h-11 px-6 flex items-center justify-center bg-[#1F2937] hover:bg-gray-700 transition-colors rounded-full text-sm font-bold text-white whitespace-nowrap"
              >
                Login
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-lime-500 text-3xl flex items-center"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-[#0B1120] p-6 flex flex-col gap-2 md:hidden border-b border-gray-800 shadow-2xl">
            {menuLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  onGoHome();
                  setOpen(false);
                }}
                className="text-gray-300 text-lg font-medium py-4 border-b border-gray-800/50 hover:text-lime-500 transition-colors text-left"
              >
                {link.name}
              </button>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => {
                   onViewPrograms();
                   setOpen(false);
                }}
                className="h-12 w-full flex items-center justify-center bg-transparent border border-gray-700 rounded-xl text-sm font-bold text-white"
              >
                My Programs
              </button>
              
              <button
                onClick={() => {
                  setOpen(false);
                  setAuthMode("signup");
                  setOpenAuth(true);
                }}
                className="h-12 w-full flex items-center justify-center bg-[#A3E635] rounded-xl font-bold text-black shadow-lg shadow-lime-500/10 text-sm"
              >
                Join Now
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  setAuthMode("login");
                  setOpenAuth(true);
                }}
                className="h-12 w-full flex items-center justify-center bg-gray-800 rounded-xl font-bold text-white hover:bg-gray-700 transition-colors text-sm"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={openAuth}
        mode={authMode}
        onClose={() => setOpenAuth(false)}
        toggleMode={toggleMode}
      />
    </>
  );
};

export default Topbar;