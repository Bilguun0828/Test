import { useState } from "react";
import Home from "./components/FitZone/Home";
import MyPrograms from "./components/FitZone/MyPrograms";

function App() {
  const [showPrograms, setShowPrograms] = useState<boolean>(false);

  return (
    <div className="relative">
      {/* Home is the base. We pass the toggle function down. */}
      <Home 
        onViewPrograms={() => setShowPrograms(true)} 
        onGoHome={() => setShowPrograms(false)} 
      />

      {/* The Overlay */}
      {showPrograms && (
        <div className="fixed inset-0 z-[100] bg-black overflow-y-auto">
          <MyPrograms onBack={() => setShowPrograms(false)} />
        </div>
      )}
    </div>
  );
}

export default App;