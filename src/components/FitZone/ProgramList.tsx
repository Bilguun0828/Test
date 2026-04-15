import { programs } from "../../data/data3";

const ProgramList = () => {
  return (
    <section id="programs" className="py-16 bg-[#030712] px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl text-white font-bold mb-2">Our Programs</h2>
        <p className="text-gray-400 text-sm">
          Choose the workout style that matches your goals
        </p>
      </div>

      {/* Grid Container */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {programs.map((program, index) => (
          <div 
            key={index} 
            className="bg-[#111827] rounded-2xl p-8 border border-gray-800 flex flex-col items-start text-left"
          >
            {/* Icon Container */}
            <div className="text-4xl mb-6">
              {program.icon}
            </div>

            {/* Content */}
            <h3 className="font-bold text-xl text-white mb-3">
              {program.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {program.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramList;