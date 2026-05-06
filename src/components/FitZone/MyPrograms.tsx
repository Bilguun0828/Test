import { programs, activePrograms } from "../../data/data3";

interface MyProgramsProps {
  onBack: () => void;
}

const MyPrograms = ({ onBack }: MyProgramsProps) => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <p className="text-lime-500 text-sm font-bold uppercase tracking-wider mb-1">
            My Programs
          </p>
          <h1 className="text-4xl font-bold mb-3">
            Your active fitness programs
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Track the training plans you joined and stay consistent with your weekly routine.
          </p>
        </div>

        <button
          onClick={onBack}
          className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-6 py-2 rounded-xl transition-colors"
        >
          Back to Home
        </button>
      </div>

      {/* ACTIVE PROGRAMS GRID */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {activePrograms?.map((active, index) => (
          <div key={index} className="bg-[#0B1120] border border-gray-800 p-8 rounded-3xl">
            <span className="text-lime-500 text-xs font-bold uppercase">Active Program</span>
            <h3 className="text-2xl font-bold mt-2 mb-4">{active.title}</h3>
            
            <div className="space-y-1 mb-8">
              <p className="text-gray-400">
                <span className="font-medium text-gray-300">Coach:</span> {active.coach}
              </p>
              <p className="text-gray-400">
                <span className="font-medium text-gray-300">Schedule:</span> {active.schedule}
              </p>
            </div>

            {/* Progress Capsule matching Screenshot 2026-05-06 090449.png */}
            <div className="bg-[#161F30] rounded-xl p-4">
              <p className="text-sm text-gray-300">
                Progress: <span className="text-white">{active.completed} of {active.total} sessions completed</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-gray-800 mb-12" />

      {/* AVAILABLE PROGRAMS GRID */}
      <h2 className="text-2xl font-bold mb-8 text-gray-100">Available Programs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-[#0B1120] p-6 rounded-2xl shadow-lg border border-transparent hover:border-lime-500/30 transition-all"
          >
            <div className="text-4xl mb-4">{program.icon}</div>
            <h3 className="text-xl font-bold mb-2">{program.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPrograms;