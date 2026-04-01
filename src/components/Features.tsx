import { features } from "../data/data";

const Features = () => {
  return (
    <section className="bg-white py-20 px-7">

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
          How can we help your business?
        </h2>
        <p className="text-sm text-gray-400">
          When you resell besnik, you build trus and increase
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-5">

            {/* Icon circle */}
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-4xl shrink-0"
              style={{ backgroundColor: feature.bg }}
            >
              {feature.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Features;