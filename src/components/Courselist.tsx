import { features } from "../data/data2";

const Courselist = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Popular Courses
        </h2>
        <p className="text-gray-500 text-sm">
          Choose a course and start <span className="text-gray-400">building your skills</span>
        </p>
      </div>

      {/* Cards grid: 1 col on mobile, 3 cols on desktop */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div 
            key={i} 
            className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-start text-left"
          >
            {/* Image Container */}
            <div className="w-full h-48 rounded-2xl overflow-hidden mb-5">
              <img 
                src={feature.src} // Assuming feature.image exists in your data
                alt={feature.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-[10px] font-bold text-violet-600 uppercase tracking-wider">
                {feature.level}
              </span>
              <h3 className="text-lg font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Button */}
            <button className="mt-auto bg-[#5840ff] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-violet-700 transition-colors shadow-md shadow-violet-200">
              Join Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courselist;