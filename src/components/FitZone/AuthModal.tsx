import React from "react";
import { authContent } from "../../data/data3";
import type { AuthMode } from "../../data/data3";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: AuthMode;
  toggleMode: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  mode,
  toggleMode,
}) => {
  const content = authContent[mode];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4 backdrop-blur-xs">
      
      {/* Modal Card Outer Container */}
      <div className="bg-[#0E1524] w-full max-w-[460px] rounded-[28px] border border-gray-800/60 relative shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Sticky Close Button Layer inside the container */}
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={onClose}
            className="bg-[#1A2332]/80 hover:bg-gray-800 text-white text-xs font-semibold py-1.5 px-4 rounded-full border border-gray-800/50 transition-colors"
          >
            Close
          </button>
        </div>

        {/* Scrollable Body Content Wrapper */}
        <div className="overflow-y-auto p-8 custom-scrollbar">
          
          {/* Header Block */}
          <div className="mb-6 pr-16">
            <span className="text-[#A3E635] text-[10px] font-bold uppercase tracking-widest block">
              {content.eyebrow || "Join FitZone"}
            </span>
            <h2 className="text-white text-3xl font-extrabold mt-1.5 tracking-tight leading-tight">
              {content.title}
            </h2>
            <p className="text-gray-400 text-sm mt-3.5 leading-relaxed font-medium">
              {content.description}
            </p>
          </div>

          {/* Form Stack */}
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            {content.fields.map((field, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <label className="text-white text-xs font-bold tracking-wide ml-0.5">
                  {field.label || field.placeholder}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full h-13 px-4 rounded-xl bg-[#040914] border border-gray-800 text-white text-sm placeholder:text-gray-600 focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635]/30 outline-none transition-all font-medium"
                />
              </div>
            ))}

            {/* Submit CTA Button */}
            <button
              type="submit"
              className="w-full h-13 bg-[#A3E635] hover:bg-[#bbf746] text-black font-extrabold rounded-2xl transition-all mt-4 text-sm tracking-wide shadow-md"
            >
              {content.primaryLabel}
            </button>
          </form>

          {/* Bottom Footer Switcher */}
          <div className="text-center mt-6 text-sm text-gray-400 font-medium">
            {content.secondaryText}{" "}
            <button
              onClick={toggleMode}
              className="text-[#A3E635] font-bold hover:underline transition-all"
            >
              {content.secondaryAction}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthModal;