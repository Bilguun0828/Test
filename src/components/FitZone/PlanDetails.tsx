import { planDetails } from "../../data/data3";

interface PlansSectionProps {
  onBack: () => void;
}

type Plan = {
  id: number;
  title: string;
  duration: string;
  schedule: string;
  goal: string;
  milestones: string[];
};

const PlansSection = ({ onBack }: PlansSectionProps) => {
  return (
    <section className="bg-[#060B13] min-h-screen py-16 px-8 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-12">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#5AA638]">
              View Plans
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight mt-1 mb-3">
              Detailed training plans
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl">
              Explore the structure, timeline, and weekly goals behind each FitZone program.
            </p>
          </div>
          
          <button
            onClick={onBack}
            className="self-start md:self-auto px-5 py-2.5 bg-[#A3E635] hover:bg-[#bbf746] text-black rounded-xl font-bold text-sm transition-colors"
          >
            Back to Home
          </button>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(planDetails as Plan[]).map((plan) => (
            <div
              key={plan.id}
              className="bg-[#111823] rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                {/* Duration Badge */}
                <span className="text-xs font-semibold text-[#5AA638]">
                  {plan.duration}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold mt-2 mb-4 text-white">
                  {plan.title}
                </h3>

                {/* Schedule */}
                <p className="text-sm font-semibold text-gray-300">
                  <span className="text-gray-400 font-medium">Schedule:</span> {plan.schedule}
                </p>

                {/* Goal description */}
                <p className="mt-4 text-sm text-gray-400 leading-relaxed min-h-[48px]">
                  {plan.goal}
                </p>
              </div>

              {/* Milestones / Weekly blocks */}
              <div className="mt-6 space-y-3">
                {plan.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="bg-[#1A2332] rounded-xl px-4 py-3 text-xs text-gray-300 font-medium border border-gray-800/40"
                  >
                    {milestone}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlansSection;