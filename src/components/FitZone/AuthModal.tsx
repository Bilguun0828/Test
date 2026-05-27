import React, { useState } from "react";
import { authContent } from "../../data/data3";
import type { AuthMode } from "../../data/data3";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: AuthMode;
  toggleMode: () => void;
  onLoginSuccess?: (userName: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  mode,
  toggleMode,
  onLoginSuccess,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const content = authContent[mode];

  const getValueByNormalizedKey = (dataObj: Record<string, string>, targetKey: string): string => {
    const foundPair = Object.entries(dataObj).find(
      ([key]) => key.toLowerCase() === targetKey.toLowerCase()
    );
    return foundPair ? foundPair[1] : "";
  };

  const handleClose = () => {
    setFormData({});
    setStatusMessage(null);
    onClose();
  };

  const handleToggle = () => {
    setFormData({});
    setStatusMessage(null);
    toggleMode(); // Flips parent view mode safely between 'login' and 'signup'
  };

  const handleSubmit = () => {
    const inputEmail = getValueByNormalizedKey(formData, "email");
    const inputPassword = getValueByNormalizedKey(formData, "password");

    // --- SIGNUP FLOW ---
    if (mode === "signup") {
      // ✅ FIX: Explicitly search for "Full Name" matching your data3 configuration
      const inputName = getValueByNormalizedKey(formData, "Full Name") || 
                        getValueByNormalizedKey(formData, "name") || 
                        getValueByNormalizedKey(formData, "username") || 
                        "User";

      localStorage.setItem("user", JSON.stringify(formData));
      localStorage.setItem("userName", inputName); // This saves the real name to storage!
      
      setFormData({});
      setStatusMessage("Account created successfully. Please log in.");
      toggleMode(); 
      return;
    }

    // --- LOGIN FLOW ---
    const savedUserRaw = localStorage.getItem("user");
    const savedUser = savedUserRaw ? JSON.parse(savedUserRaw) : null;

    if (!savedUser) {
      setStatusMessage("No account found. Please sign up first.");
      return;
    }

    // Pull credentials using the same exact lookup logic
    const savedEmail = getValueByNormalizedKey(savedUser, "email");
    const savedPassword = getValueByNormalizedKey(savedUser, "password");
    
    // ✅ FIX: Ensure the login screen checks the saved "Full Name" key too
    const savedName = getValueByNormalizedKey(savedUser, "Full Name") || 
                      getValueByNormalizedKey(savedUser, "name") || 
                      getValueByNormalizedKey(savedUser, "username") || 
                      localStorage.getItem("userName") || 
                      "User";

    const emailMatch = savedEmail.toLowerCase().trim() === inputEmail.toLowerCase().trim() && inputEmail !== "";
    const passwordMatch = savedPassword === inputPassword && inputPassword !== "";

    if (emailMatch && passwordMatch) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userName", savedName); // Updates root storage

      if (onLoginSuccess) {
        onLoginSuccess(savedName); // Instantly updates the TopBar state!
      }
      handleClose();
    } else {
      setStatusMessage("Invalid email or password.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4 backdrop-blur-xs">
      <div className="bg-[#0E1524] w-full max-w-[460px] rounded-[28px] border border-gray-800/60 relative shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* CLOSE BUTTON */}
        <div className="absolute top-6 right-6 z-10">
          <button
            type="button"
            onClick={handleClose}
            className="bg-[#1A2332]/80 hover:bg-gray-800 text-white text-xs font-semibold py-1.5 px-4 rounded-full border border-gray-800/50 transition-colors"
          >
            Close
          </button>
        </div>

        <div className="overflow-y-auto p-8 custom-scrollbar">
          
          {/* HEADER METADATA */}
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

          {/* DYNAMIC FORM */}
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {content.fields.map((field, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <label className="text-white text-xs font-bold tracking-wide ml-0.5">
                  {field.label}
                </label>

                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.label] || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      [field.label]: e.target.value,
                    }))
                  }
                  className="w-full h-13 px-4 rounded-xl bg-[#040914] border border-gray-800 text-white text-sm placeholder:text-gray-600 focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635]/30 outline-none transition-all font-medium"
                  required
                />
              </div>
            ))}

            {statusMessage && (
              <p className="text-red-500 text-sm font-medium mt-2 transition-all">
                {statusMessage}
              </p>
            )}

            <button
              type="submit"
              className="w-full h-13 bg-[#A3E635] hover:bg-[#bbf746] text-black font-extrabold rounded-2xl transition-all mt-4 text-sm tracking-wide shadow-md"
            >
              {content.primaryLabel}
            </button>
          </form>

          {/* TOGGLE AUTH MODE ALTERNATIVE */}
          <div className="text-center mt-6 text-sm text-gray-400 font-medium">
            {content.secondaryText}{" "}
            <button
              type="button"
              onClick={handleToggle}
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