import { useState } from "react";
import { programs } from "../../data/data3";
import ProgramModal from "./ProgrammModal";

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
}

const MyPrograms = ({
  onBack,
  myPrograms,
  setMyPrograms,
}: MyProgramsProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 relative">

      {/* HEADER */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <p className="text-lime-500 text-sm font-bold uppercase mb-1">
            My Programs
          </p>

          <h1 className="text-4xl font-bold mb-3">
            Your active fitness programs
          </h1>

          <p className="text-gray-400 max-w-2xl">
            Track the training plans you joined and stay consistent.
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#111827] border border-lime-500/30 hover:border-lime-500 text-lime-500 font-bold px-6 py-2 rounded-xl"
          >
            + Add Program
          </button>

          <button
            onClick={onBack}
            className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-6 py-2 rounded-xl"
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* ACTIVE PROGRAMS */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {myPrograms.map((active) => (
          <div
            key={active.title}
            className="bg-[#0B1120] border border-gray-800 p-8 rounded-3xl"
          >
            <span className="text-lime-500 text-xs font-bold uppercase">
              Active Program
            </span>

            <h3 className="text-2xl font-bold mt-2 mb-4">
              {active.title}
            </h3>

            <p className="text-gray-400">
              <span className="text-gray-300 font-medium">Coach:</span>{" "}
              {active.coach}
            </p>

            <p className="text-gray-400">
              <span className="text-gray-300 font-medium">Schedule:</span>{" "}
              {active.schedule}
            </p>

            <div className="bg-[#161F30] rounded-xl p-4 mt-6 mb-5">
              <p className="text-sm text-gray-300">
                Progress:{" "}
                <span className="text-white">
                  {active.completed} / {active.total}
                </span>
              </p>
            </div>

            <button
              onClick={() =>
                setMyPrograms((prev) =>
                  prev.filter((p) => p.title !== active.title)
                )
              }
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl"
            >
              Cancel Program
            </button>
          </div>
        ))}
      </div>

      <hr className="border-gray-800 mb-12" />

      {/* AVAILABLE PROGRAMS */}
      <h2 className="text-2xl font-bold mb-8 text-gray-100">
        Available Programs
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-[#0B1120] p-6 rounded-2xl border border-gray-800 hover:border-lime-500/30"
          >
            <div className="text-4xl mb-4">{program.icon}</div>

            <h3 className="text-xl font-bold mb-2">
              {program.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {program.description}
            </p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <ProgramModal
          onClose={() => setShowModal(false)}
          onAddProgram={(course) => {
            const alreadyAdded = myPrograms.some(
              (item) => item.title === course.title
            );

            if (alreadyAdded) return;

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
    </div>
  );
};

export default MyPrograms;