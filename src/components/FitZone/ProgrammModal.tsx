import React from "react";
// Import the data directly here
import { programmingCourses } from "../../data/data3";

// 1. Define the shape of a single course
interface Course {
  id: number;
  title: string;
  duration: string;
  lessons: string;
  level: string;
  description: string;
  highlights: string[];
}

// 2. Define the props the Modal expects
interface ProgramModalProps {
  onClose: () => void;
}

const ProgramModal: React.FC<ProgramModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80"
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
          {programmingCourses.map((course: Course) => (
            <div key={course.id} className="bg-[#020617] rounded-2xl p-6 border border-gray-800 flex flex-col">
              <span className="text-lime-400 text-xs font-bold mb-2">{course.level}</span>
              <h3 className="text-white text-xl font-bold mb-3">{course.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{course.description}</p>
              
              <div className="text-gray-500 text-xs mb-8">
                <p>Duration: <span className="text-gray-300">{course.duration}</span></p>
                <p>Lessons: <span className="text-gray-300">{course.lessons}</span></p>
              </div>

              <div className="space-y-2 mt-auto">
                {course.highlights.map((item, i) => (
                  <div key={i} className="bg-lime-900 text-white text-[11px] py-2.5 px-4 rounded-xl border border-gray-800 text-center">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramModal;