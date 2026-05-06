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
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      {/* Modal Container */}
      <div className="bg-[#111827] w-full max-w-[440px] p-8 rounded-[32px] border border-gray-800/50 relative shadow-2xl">
        
        {/* Close Button - Pill style */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 bg-gray-800/50 hover:bg-gray-700 text-white text-sm py-2 px-5 rounded-full transition-colors"
        >
          Close
        </button>

        {/* Header - Left Aligned */}
        <div className="mb-8 pr-12">
          <p className="text-[#A3E635] text-xs font-bold uppercase tracking-widest">
            {content.eyebrow}
          </p>
          <h2 className="text-white text-3xl font-bold mt-2 leading-tight">
            {content.title}
          </h2>
          <p className="text-gray-400 text-[15px] mt-3 leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
          {content.fields.map((field, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <label className="text-white text-sm font-semibold ml-1">
                {field.label || field.placeholder} {/* Fallback to placeholder if label isn't in data */}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full p-4 rounded-2xl bg-[#030712] border border-gray-800 text-white placeholder:text-gray-600 outline-none focus:border-[#A3E635] transition-all"
              />
            </div>
          ))}

          {/* Primary Action Button */}
          <button
            type="submit"
            className="bg-[#A3E635] text-black font-extrabold py-4 rounded-2xl hover:bg-[#bef264] transition-colors mt-2 text-lg"
          >
            {content.primaryLabel}
          </button>
        </form>

        {/* Footer Toggle */}
        <div className="text-center mt-6 text-[15px] text-gray-400">
          {content.secondaryText}{" "}
          <button
            onClick={toggleMode}
            className="text-[#A3E635] font-bold hover:underline ml-1"
          >
            {content.secondaryAction}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;