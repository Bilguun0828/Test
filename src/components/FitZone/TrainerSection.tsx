import { trainers } from "../../data/data3";

const TrainerSection = () => {
  return (
    <section id="trainers" className="bg-[#0B1121] py-16 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">
          Meet Our Trainers
        </h2>
        <p className="text-gray-400 text-sm">
          Learn from experienced and motivating coaches
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {trainers.map((trainer, i) => (
          <div 
            key={i} 
            className="group overflow-hidden rounded-2xl bg-[#030712] border border-gray-800"
          >
            {/* Image Container */}
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>

            {/* Content Area */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-1">
                {trainer.name}
              </h3>
              <p className="text-[#A3E635] text-xs font-medium">
                {trainer.specialty}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainerSection;