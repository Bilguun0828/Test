import React from "react";

interface Trainer {
  id: number;
  name: string;
  specialty: string;
  image: string;
  adviceTitle: string;
  advice: string;
  tips: string[];
}

interface TrainerProfileProps {
  trainer: Trainer;
  onBack: () => void;
}

const TrainerProfile: React.FC<TrainerProfileProps> = ({
  trainer,
  onBack,
}) => {
  return (
    <section className="bg-[#060B13] min-h-screen py-16 px-8 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#5AA638]">
              Trainer Advice
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight mt-1 mb-2 text-white">
              {trainer.name}
            </h1>
            <p className="text-sm font-semibold text-[#65B73B]">
              {trainer.specialty}
            </p>
          </div>
          
          <button
            onClick={onBack}
            className="self-start md:self-auto px-5 py-2.5 bg-[#A3E635] hover:bg-[#bbf746] text-black rounded-xl font-bold text-sm transition-colors shadow-sm"
          >
            Back to Home
          </button>
        </div>

        {/* Two Column Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Trainer Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-full min-h-[400px]">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right Column: Insight Card */}
          <div className="bg-[#111823] rounded-2xl p-8 flex flex-col justify-between border border-gray-800/20">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#5AA638]">
                Coach Insight
              </span>
              
              <h2 className="text-2xl font-extrabold mt-2 mb-4 leading-snug tracking-tight text-white max-w-md">
                {trainer.adviceTitle}
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                {trainer.advice}
              </p>
            </div>

            {/* Tips Stack / Pills */}
            <div className="mt-8 space-y-3">
              {trainer.tips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-[#1A2332] rounded-xl px-5 py-4 text-xs font-medium text-gray-300 border border-gray-800/40"
                >
                  {tip}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrainerProfile;