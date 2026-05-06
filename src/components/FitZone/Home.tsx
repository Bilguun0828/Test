import Topbar from "../FitZone/TopBar";
import Intro from "../FitZone/Intro";
import ProgramList from "../FitZone/ProgramList";
import Trainer from "../FitZone/TrainerSection";
import Bottom from "../FitZone/BottomFooter";

interface HomeProps {
  onViewPrograms: () => void;
  onGoHome: () => void;
}

const Home = ({ onViewPrograms, onGoHome }: HomeProps) => {
  return (
    <>
      <Topbar onGoHome={onGoHome} onViewPrograms={onViewPrograms} />
      <Intro /> 
      <ProgramList />
      <Trainer />
      <Bottom />
    </>
  );
};

export default Home;