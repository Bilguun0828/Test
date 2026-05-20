import HeroImage from "../../assets/FitZoneAssets/introImage.avif";
import { useState } from "react";
import ProgramModal from "./ProgrammModal";
import type { ActiveProgram } from "./types";

interface IntroProps {
  myPrograms: ActiveProgram[];
  setMyPrograms: React.Dispatch<React.SetStateAction<ActiveProgram[]>>;
  onViewPlans: () => void;
}

const Intro = ({
  myPrograms,
  setMyPrograms,
  onViewPlans,
}: IntroProps) => {
  const [modal, setModal] = useState(false);

  return (
    <section className="bg-[#060B13] flex items-center min-h-[calc(100vh-76px)] py-16 md:py-24 relative font-sans">
      <div className="max-w-6xl mx-auto px-8 w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* LEFT COLUMN */}
        <div className="w-full md:w-[52%] flex flex-col items-start text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-[#5AA638]">
            Train smarter
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.1] mt-3 mb-5 max-w-lg">
            Transform your body with daily fitness programs
          </h1>

          <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed max-w-md mb-8 font-medium">
            Join powerful workout sessions, expert trainers, and flexible plans
            designed for beginners and advanced members.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setModal(true)}
              className="h-12 px-6 flex items-center justify-center bg-[#A3E635] hover:bg-[#bbf746] text-black font-extrabold rounded-xl text-sm transition-all shadow-md whitespace-nowrap"
            >
              Start Today
            </button>

            <button
              onClick={onViewPlans}
              className="h-12 px-6 flex items-center justify-center bg-transparent border border-gray-800 hover:border-gray-600 text-white font-bold rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              View Plans
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-[48%] flex justify-center md:justify-end">
          <div className="w-full max-w-lg aspect-[4/3] sm:aspect-square md:aspect-[1.1/1] overflow-hidden rounded-[28px] shadow-2xl">
            <img
              src={HeroImage}
              alt="Fitness intro"
              className="w-full h-full object-cover rounded-[28px]"
            />
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modal && (
        <ProgramModal
          onClose={() => setModal(false)}
          onAddProgram={(course) => {
            const exists = myPrograms.some(
              (p) => p.title === course.title
            );

            if (exists) return;

            setMyPrograms((prev) => [
              ...prev,
              {
                title: course.title,
                coach: "Programming Mentor",
                schedule: course.schedule || "Custom Schedule",
                completed: 0,
                total: Number(course.lessons) || 12,
              },
            ]);
          }}
        />
      )}
    </section>
  );
};

export default Intro;