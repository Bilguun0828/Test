import React, { useState } from "react";
import { programmingCourses } from "../../data/data3";

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
}


const ProgramModal: React.FC<ProgramModalProps> = ({
  onClose,
  onAddProgram,
}) => {
  const [added, setAdded] = useState<number[]>([]);
  const handleAdd = (course: Course) => {
    const isAdded = added.includes(course.id);
    if (isAdded) return;

    onAddProgram(course);
    setAdded((prev) => [...prev, course.id]);
  };


  return (
    <div 
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose} 
    >
      <div 
        className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 md:p-10 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 bg-gray-800 hover:bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium transition-all"
        >
          Close
        </button>

        <div className="mb-10">
          <span className="text-lime-400 font-bold uppercase tracking-widest text-xs">
            Programming Tracks
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mt-2 tracking-tight">
            Start coding with structured beginner-friendly lessons
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Note: programmingCourses is imported at the top */}
          {programmingCourses.map((course: Course) => {
            const isAdded = added.includes(course.id);
            return (
              <div key={course.id} className="bg-[#020617] rounded-2xl p-6 border border-gray-800 flex flex-col">
                <span className="text-lime-400 text-xs font-bold mb-2">{course.duration}</span>
                <h3 className="text-white text-xl font-bold mb-3">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{course.description}</p>
                
                <div className="text-gray-500 text-xs mb-8">
                  <p>Lessons: <span className="text-gray-300">{course.lessons}</span></p>
                  <p>Schedule: <span className="text-gray-300">{course.schedule}</span></p>
                </div>

                <div className="space-y-2 mt-auto mb-6">
      {course.highlights.map((item, i) => (
        <div
          key={i}
          className="bg-lime-900 text-white text-[11px] py-2.5 px-4 rounded-xl border border-gray-800 text-center"
        >
          {item}
        </div>
      ))}
    </div>

    <button
      onClick={() => handleAdd(course)}
      disabled={isAdded}
      className={`w-full font-bold py-3 rounded-xl transition-all ${
        isAdded
          ? "bg-gray-600 text-white cursor-not-allowed"
          : "bg-lime-500 hover:bg-lime-600 text-black"
      }`}
    >
      {isAdded ? "Added" : "Add to My Programs"}
    </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgramModal;