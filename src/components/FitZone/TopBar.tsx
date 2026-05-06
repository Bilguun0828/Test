import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import AuthModal from "./AuthModal";
import type { AuthMode } from "../../data/data3";
import { menuLinks } from "../../data/data3";

// Define the Props for the Topbar
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
          
          {/* LOGO - Uses onGoHome */}
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
                onClick={onGoHome} // Since it's a one-page style now, these lead home
                className="text-gray-300 hover:text-lime-500 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-4">
            
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex gap-4">
              <button
                onClick={onViewPrograms} // Uses the prop to show MyPrograms overlay
                className="bg-transparent border border-gray-700 rounded-xl hover:border-gray-500 transition-colors px-8 py-3 text-sm font-bold text-white"
              >
                My Programs
              </button>

              <button
                onClick={() => {
                  setAuthMode("signup");
                  setOpenAuth(true);
                }}
                className="bg-lime-500 hover:bg-lime-600 transition-all rounded-full px-6 py-2 text-sm font-bold text-black"
              >
                Join Now
              </button>

              <button
                onClick={() => {
                  setAuthMode("login");
                  setOpenAuth(true);
                }}
                className="bg-gray-800 px-6 py-2 rounded-full text-sm font-bold text-white hover:bg-gray-700"
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
                className="bg-transparent border border-gray-700 rounded-xl hover:border-gray-500 transition-colors px-8 py-3 text-sm font-bold text-white"
              >
                My Programs
              </button>
              
              <button
                onClick={() => {
                  setOpen(false);
                  setAuthMode("signup");
                  setOpenAuth(true);
                }}
                className="bg-lime-500 w-full py-4 rounded-xl font-bold text-black shadow-lg shadow-lime-500/10"
              >
                Join Now
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  setAuthMode("login");
                  setOpenAuth(true);
                }}
                className="bg-gray-800 w-full py-4 rounded-xl font-bold text-white hover:bg-gray-700 transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* AUTH MODAL - Kept your original logic */}
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