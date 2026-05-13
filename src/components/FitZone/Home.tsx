import Topbar from "../FitZone/TopBar";
import Intro from "../FitZone/Intro";
import ProgramList from "../FitZone/ProgramList";
import Trainer from "../FitZone/TrainerSection";
import Bottom from "../FitZone/BottomFooter";

interface HomeProps {
  onViewPrograms: () => void;
  onGoHome: () => void;
  myPrograms: ActiveProgram[];
  setMyPrograms: React.Dispatch<React.SetStateAction<ActiveProgram[]>>;
}

export interface ActiveProgram {
  title: string;
  coach: string;
  schedule: string;
  completed: number;
  total: number;
}

const Home = ({ onViewPrograms, onGoHome, myPrograms, setMyPrograms }: HomeProps) => {
  // const [myPrograms, setMyPrograms] = useState<ActiveProgram[]>([]);

  return (
    <>
      <Topbar onGoHome={onGoHome} onViewPrograms={onViewPrograms} />

      <Intro
        myPrograms={myPrograms}
        setMyPrograms={setMyPrograms}
        onViewPrograms={onViewPrograms}
      />

      <ProgramList />

      <Trainer />
      <Bottom />

      {/* If you render MyPrograms on same page, keep it here */}
      {/* OR render via routing */}
    </>
  );
};

export default Home;