import Topbar from "./components/FitZone/TopBar"
import Intro from "./components/FitZone/Intro"
import ProgramList from "./components/FitZone/ProgramList"
import Trainer from "./components/FitZone/TrainerSection"
import Bottom from "./components/FitZone/BottomFooter"

function App() {
  return (
    <>
      <Topbar/>
      <Intro/>
      <ProgramList/>
      <Trainer/>
      <Bottom/>
    </>
  );
}

export default App;