import { trainers } from "../../data/data3";

interface Trainer {
  id: number;
  name: string;
  specialty: string;
  image: string;
  adviceTitle: string;
  advice: string;
  tips: string[];
}

interface TrainerSectionProps {
  onSelectTrainer: (trainer: Trainer) => void;
}

const TrainerSection = ({ onSelectTrainer }: TrainerSectionProps) => {
  return (
    <section id="trainers" className="bg-[#0B1121] py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            onClick={() => onSelectTrainer(trainer)}
            className="cursor-pointer rounded-2xl overflow-hidden bg-[#030712]"
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-white text-xl">{trainer.name}</h3>
              <p className="text-[#A3E635]">{trainer.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainerSection;