import { useState } from "react";
import Topbar from "../FitZone/TopBar";
import Intro from "../FitZone/Intro";
import ProgramList from "../FitZone/ProgramList";
import TrainerSection from "../FitZone/TrainerSection";
import Bottom from "../FitZone/BottomFooter";
import TrainerProfile from "../FitZone/TrainerProfile";
import PlansSection from "../FitZone/PlanDetails"; // ✅ FIX: missing import
import type { ActiveProgram } from "./types";

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
  const [showPlans, setShowPlans] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  // ✅ Trainer page (isolated)
  if (selectedTrainer) {
    return (
      <TrainerProfile
        trainer={selectedTrainer}
        onBack={() => setSelectedTrainer(null)}
      />
    );
  }

  // ✅ Plans page (isolated)
  if (showPlans) {
    return (
      <PlansSection onBack={() => setShowPlans(false)} />
    );
  }

  return (
    <>
      <Topbar onGoHome={onGoHome} onViewPrograms={onViewPrograms} />

      <Intro
        myPrograms={myPrograms}
        setMyPrograms={setMyPrograms}
        onViewPlans={() => setShowPlans(true)}
      />

      <ProgramList />

      <TrainerSection onSelectTrainer={setSelectedTrainer} />

      <Bottom />
    </>
  );
};

export default Home;