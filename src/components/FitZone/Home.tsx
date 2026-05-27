import { useState } from "react";
import TopBar from "../FitZone/TopBar";
import Intro from "../FitZone/Intro";
import ProgramList from "../FitZone/ProgramList";
import TrainerSection from "../FitZone/TrainerSection";
import Bottom from "../FitZone/BottomFooter";
import TrainerProfile from "../FitZone/TrainerProfile";
import PlansSection from "../FitZone/PlanDetails";
import AuthModal from "../FitZone/AuthModal"; 
import type { ActiveProgram } from "./types";
import type { AuthMode } from "../../data/data3";

interface Trainer {
  id: number;
  name: string;
  specialty: string;
  image: string;
  adviceTitle: string;
  advice: string;
  tips: string[];
}

interface HomeProps {
  onViewPrograms: () => void;
  onGoHome: () => void;
  myPrograms: ActiveProgram[];
  setMyPrograms: React.Dispatch<React.SetStateAction<ActiveProgram[]>>;
}

const Home = ({
  onViewPrograms,
  onGoHome,
  myPrograms,
  setMyPrograms,
}: HomeProps) => {
  const [showPlans, setShowPlans] = useState<boolean>(false);
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  // Global Auth UI States
  const [openAuth, setOpenAuth] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");

  // ✅ FIX: Initialize state directly from localStorage (Lazy State Initialization)
  // This executes synchronously on the very first render, completely avoiding cascading renders!
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem("loggedIn") === "true";
  });
  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem("userName") || "User"; 
  });
  // Sync state transitions upon successful validation loops
  const handleLoginSuccess = (name: string) => {
    setIsLoggedIn(true);
    setUserName(name); // ✅ FIX: This forces TopBar to instantly swap "User" with your real registered name!
  };
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUserName("User"); // ✅ Fallback matches on reset
  };

  const toggleAuthMode = () => {
    setAuthMode((prev) => (prev === "login" ? "signup" : "login"));
    // Optional line to clean old status warnings if switching tabs manually
  };

  // ✅ Trainer page (isolated layout view)
  if (selectedTrainer) {
    return (
      <TrainerProfile
        trainer={selectedTrainer}
        onBack={() => setSelectedTrainer(null)}
      />
    );
  }

  // ✅ Plans page (isolated layout view)
  if (showPlans) {
    return (
      <PlansSection onBack={() => setShowPlans(false)} />
    );
  }

  return (
    <>
      {/* Topbar integration parsing reactive authentication states */}
      <TopBar 
        onGoHome={onGoHome} 
        onViewPrograms={onViewPrograms} 
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogout={handleLogout}
        onLoginClick={() => {
          setAuthMode("login"); 
          setOpenAuth(true);    
        }} 
        // ✅ ADD THIS MISSING PROP
        onSignUpClick={() => {
          setAuthMode("signup"); // Forces the modal to open in the Signup view instantly
          setOpenAuth(true);     // Opens the modal overlay
        }}
      />

      <Intro
        myPrograms={myPrograms}
        setMyPrograms={setMyPrograms}
        onViewPlans={() => setShowPlans(true)}
        onRequireLogin={() => { 
          setAuthMode("login"); 
          setOpenAuth(true); 
        }} // ✅ Pass down the triggers from Home
      />

      <ProgramList />

      <TrainerSection onSelectTrainer={setSelectedTrainer} />

      <Bottom />

      {/* Global Context Auth Interceptor Interface */}
      <AuthModal
        isOpen={openAuth}
        mode={authMode}
        onClose={() => setOpenAuth(false)}
        toggleMode={toggleAuthMode}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default Home;