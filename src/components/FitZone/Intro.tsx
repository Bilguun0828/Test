import HeroImage from "../../assets/FitZoneAssets/introImage.avif";
import { useState } from "react";
import ProgramModal from "./ProgrammModal";
import type { ActiveProgram } from "../../components/FitZone/Home"; // adjust path if needed

interface IntroProps {
  myPrograms: ActiveProgram[];
  setMyPrograms: React.Dispatch<React.SetStateAction<ActiveProgram[]>>;
  onViewPrograms: () => void;
}

const Intro = ({ myPrograms, setMyPrograms }: IntroProps) => {
  const [modal, setModal] = useState(false);

  return (
    <section className="bg-black flex items-center min-h-[calc(100vh-65px)] py-12 md:py-0 relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <span className="text-xs md:text-sm text-lime-400 font-bold uppercase">
            Train smarter
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Transform your body with daily fitness programs
          </h1>

          <p className="text-gray-400 text-sm">
            Join expert-led workout programs designed for all levels.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setModal(true)}
              className="bg-lime-400 text-black px-6 py-3 rounded-lg font-bold"
            >
              Start Today
            </button>

            <button className="border border-gray-700 text-white px-6 py-3 rounded-lg">
              View Plans
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={HeroImage}
            className="rounded-3xl w-full max-w-xl"
          />
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