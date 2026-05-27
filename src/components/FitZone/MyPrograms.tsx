import { useState } from "react";
import { programs } from "../../data/data3";
import ProgramModal from "./ProgrammModal";

// 1. Interfaces
export interface ActiveProgram {
  title: string;
  coach: string;
  schedule: string;
  completed: number;
  total: number;
}

interface MyProgramsProps {
  onBack: () => void;
  myPrograms: ActiveProgram[];
  setMyPrograms: React.Dispatch<React.SetStateAction<ActiveProgram[]>>;
  onRequireLogin?: () => void; // ✅ Changing to optional with '?' satisfies the compiler!
}

// 2. Component Implementation
const MyPrograms = ({
  onBack,
  myPrograms,
  setMyPrograms,
  onRequireLogin, 
}: MyProgramsProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  // Extract currently active dashboard track titles for the lazy initialization map
  const existingProgramTitles = myPrograms.map((p) => p.title);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 relative">

      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
        <div>
          <p className="text-lime-500 text-sm font-bold uppercase mb-1 tracking-wider">
            My Programs
          </p>
          <h1 className="text-4xl font-bold mb-3">
            Your active fitness programs
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Track the training plans you joined and stay consistent.
          </p>
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 md:flex-none bg-[#111827] border border-lime-500/30 hover:border-lime-500 text-lime-500 font-bold px-6 py-2.5 rounded-xl transition-all"
          >
            + Add Program
          </button>
          <button
            onClick={onBack}
            className="flex-1 md:flex-none bg-lime-500 hover:bg-lime-600 text-black font-bold px-6 py-2.5 rounded-xl transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* ACTIVE PROGRAMS GRID */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {myPrograms.length === 0 ? (
          <div className="col-span-full border-2 border-dashed border-gray-800 rounded-3xl p-12 text-center text-gray-500">
            No active fitness programs. Click "+ Add Program" to start tracking your targets!
          </div>
        ) : (
          myPrograms.map((active) => (
            <div
              key={active.title}
              className="bg-[#0B1120] border border-gray-800 p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <span className="text-lime-500 text-xs font-bold uppercase tracking-wide">
                  Active Program
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  {active.title}
                </h3>
                <div className="space-y-1">
                  <p className="text-gray-400">
                    <span className="text-gray-300 font-medium">Coach:</span>{" "}
                    {active.coach}
                  </p>
                  <p className="text-gray-400">
                    <span className="text-gray-300 font-medium">Schedule:</span>{" "}
                    {active.schedule}
                  </p>
                </div>

                <div className="bg-[#161F30] rounded-xl p-4 mt-6 mb-5">
                  <p className="text-sm text-gray-300">
                    Progress:{" "}
                    <span className="text-white font-bold">
                      {active.completed} / {active.total}
                    </span>
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  setMyPrograms((prev) =>
                    prev.filter((p) => p.title !== active.title)
                  )
                }
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-colors mt-auto"
              >
                Cancel Program
              </button>
            </div>
          ))
        )}
      </div>

      <hr className="border-gray-800 mb-12" />

      {/* AVAILABLE CATALOG SECTION */}
      <h2 className="text-2xl font-bold mb-8 text-gray-100">
        Available Programs
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-[#0B1120] p-6 rounded-2xl border border-gray-800 hover:border-lime-500/30 transition-all group cursor-default"
          >
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {program.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-lime-400 transition-colors">
              {program.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {program.description}
            </p>
          </div>
        ))}
      </div>

      {/* POPUP MODAL CONTROL */}
      {showModal && (
        <ProgramModal
          onClose={() => setShowModal(false)}
          onRequireLogin={onRequireLogin} 
          existingProgramTitles={existingProgramTitles} 
          onAddProgram={(course) => {
            const alreadyAdded = myPrograms.some(
              (item) => item.title === course.title
            );

            if (alreadyAdded) return;

            setMyPrograms((prev) => [
              ...prev,
              {
                title: course.title,
                coach: "Programming Mentor", // ✅ FIX: Hardcoded fallback safely without checking course.coach
                schedule: "Mon, Wed, Fri",
                completed: 0,
                total: Number(course.lessons) || 12, 
              },
            ]);
            
            // Kept open so you can keep adding more programs!
          }}
        />
      )}
    </div>
  );
};

export default MyPrograms;