interface TopBarProps {
  onGoHome: () => void;
  onViewPrograms: () => void;
  isLoggedIn: boolean;
  userName: string;
  onLogout: () => void;
  onLoginClick: () => void;
  onSignUpClick: () => void; // ✅ Mandated explicit SignUp callback
}

const TopBar = ({
  onGoHome,
  onViewPrograms,
  isLoggedIn,
  userName,
  onLogout,
  onLoginClick,
  onSignUpClick,
}: TopBarProps) => {
  return (
    // ✅ Main Nav Bar: Uses a darker background/border for separation
    <nav className="bg-[#040914] border-b border-gray-800/80 h-[76px] sticky top-0 z-40 px-6 lg:px-10 flex items-center justify-between font-sans">
      
      {/* BRAND LOGO: Explicit 'FitZone' text with the reference green/lime color */}
      <div 
        onClick={onGoHome} 
        className="text-[#A3E635] text-2xl font-extrabold tracking-tight cursor-pointer"
      >
        FitZone
      </div>

      {/* CENTER LINKS: Explicit text from reference, subtle styling */}
      <div className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-gray-400">
        <button onClick={onGoHome} className="hover:text-white transition-colors">Home</button>
        <button onClick={onViewPrograms} className="hover:text-white transition-colors">Programs</button>
        <span className="hover:text-white transition-colors cursor-pointer">Trainers</span>
        <span className="hover:text-white transition-colors cursor-pointer">Pricing</span>
        <span className="hover:text-white transition-colors cursor-pointer">Contact</span>
      </div>

      {/* RIGHT AUTH CONTROLS: Conditionally renders buttons based on login status */}
      <div className="flex items-center gap-3.5">
        {isLoggedIn ? (
          // USER IS LOGGED IN STATE (Dashboard style)
          <>
            <button
              onClick={onViewPrograms}
              className="border border-gray-800 hover:border-gray-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
            >
              My Programs
            </button>

            {/* Profile Badge (Dynamically binds stored name) */}
            <div className="bg-gray-900/80 border border-gray-800 text-gray-300 text-xs font-bold px-4 py-2.5 rounded-xl min-w-[50px] text-center shadow-inner">
              {userName}
            </div>

            <button
              onClick={onLogout}
              className="bg-[#A3E635] hover:bg-[#bbf746] text-black font-extrabold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md"
            >
              Logout
            </button>
          </>
        ) : (
          // USER IS LOGGED OUT STATE: Exact match to reference image
          <>
            {/* "Join Now" (SignUp) Button: Green background, black text, bold */}
            <button 
              onClick={onSignUpClick} 
              className="h-10 px-5 flex items-center justify-center bg-[#A3E635] hover:bg-[#bbf746] text-black font-extrabold rounded-full text-sm transition-all shadow-lg shadow-lime-950/20 active:scale-95"
            >
              Join Now
            </button>
            
            {/* "Login" Button: Minimal text link, bold */}
            <button 
              onClick={onLoginClick} 
              className="h-10 px-4.5 flex items-center justify-center text-white font-bold hover:text-gray-300 rounded-full text-sm transition-colors active:scale-95"
            >
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default TopBar;