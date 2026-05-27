import React, { useState } from "react";
import { programmingCourses } from "../../data/data3";

// Ensure our local module interfaces align perfectly with incoming app state shapes
interface Course {
  id: number;
  title: string;
  duration: string;
  lessons: string;
  schedule: string;
  description: string;
  highlights: string[];
}

interface ProgramModalProps {
  onClose: () => void;
  onAddProgram: (course: Course) => void;
  onRequireLogin: () => void;
  existingProgramTitles?: string[]; // Used to parse current user-added courses natively
}

const ProgramModal: React.FC<ProgramModalProps> = ({
  onClose,
  onAddProgram,
  onRequireLogin,
  existingProgramTitles = [],
}) => {
  // ✅ FIX: Compute initial state synchronously on mount using Lazy State Initialization
  // This calculates the pre-added IDs on frame one, completely avoiding cascading rendering errors.
  const [added, setAdded] = useState<number[]>(() => {
    return programmingCourses
      .filter((course) => existingProgramTitles.includes(course.title))
      .map((course) => course.id);
  });

  const handleAdd = (course: Course) => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    if (!isLoggedIn) {
      onClose();
      onRequireLogin();
      return;
    }

    const isAdded = added.includes(course.id);
    if (isAdded) return;

    onAddProgram(course);
    setAdded((prev) => [...prev, course.id]);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
      onClick={onClose} 
    >
      <div 
        className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 md:p-10 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl custom-scrollbar"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* TOP CLOSE TOGGLE */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 bg-gray-800 hover:bg-gray-700 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all border border-gray-700/40"
        >
          Close
        </button>

        {/* CONTAINER HEADERS */}
        <div className="mb-10 pr-16">
          <span className="text-lime-400 font-bold uppercase tracking-widest text-xs">
            Programming Tracks
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mt-2 tracking-tight leading-tight">
            Start coding with structured beginner-friendly lessons
          </h2>
        </div>

        {/* TRACKING COURSE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programmingCourses.map((course: Course) => {
            const isAdded = added.includes(course.id);
            return (
              <div 
                key={course.id} 
                className="bg-[#020617] rounded-2xl p-6 border border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-all"
              >
                <div>
                  <span className="text-lime-400 text-xs font-bold block mb-2">
                    {course.duration}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="text-gray-500 text-xs space-y-1 mb-6">
                    <p>Lessons: <span className="text-gray-300 font-medium">{course.lessons}</span></p>
                    <p>Schedule: <span className="text-gray-300 font-medium">{course.schedule}</span></p>
                  </div>
                </div>

                <div>
                  {/* TRACK HIGHLIGHT CHIPS */}
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {course.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="bg-lime-950/40 text-lime-400 text-[11px] font-medium py-2 px-3 rounded-xl border border-lime-900/30 text-center truncate"
                        title={item}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* ACTION TRIGGER BUTTON */}
                  <button
                    onClick={() => handleAdd(course)}
                    disabled={isAdded}
                    className={`w-full font-bold py-3 rounded-xl transition-all text-sm tracking-wide ${
                      isAdded
                        ? "bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700/50"
                        : "bg-lime-500 hover:bg-lime-600 text-black shadow-lg shadow-lime-500/5"
                    }`}
                  >
                    {isAdded ? "Added to Plans" : "Add to My Programs"}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgramModal;