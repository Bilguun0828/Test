import { useState } from "react";
import Home from "./components/FitZone/Home";
import MyPrograms from "./components/FitZone/MyPrograms";

export interface ActiveProgram {
  title: string;
  coach: string;
  schedule: string;
  completed: number;
  total: number;
}

function App() {
  const [showPrograms, setShowPrograms] = useState(false);

  // 🔥 GLOBAL STATE (single source of truth)
  const [myPrograms, setMyPrograms] = useState<ActiveProgram[]>([]);

  return (
    <div className="relative">

      {/* HOME */}
      <Home
        onViewPrograms={() => setShowPrograms(true)}
        onGoHome={() => setShowPrograms(false)}
        myPrograms={myPrograms}
        setMyPrograms={setMyPrograms}
      />

      {/* OVERLAY PAGE */}
      {showPrograms && (
        <div className="fixed inset-0 z-100 bg-black overflow-y-auto">
          <MyPrograms
            onBack={() => setShowPrograms(false)}
            myPrograms={myPrograms}
            setMyPrograms={setMyPrograms}
          />
        </div>
      )}

    </div>
  );
}

export default App;