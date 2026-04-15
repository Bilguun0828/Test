import HeroImage from "../../assets/FitZoneAssets/introImage.avif";

const Intro = () => {
  return (
    <section className="bg-black flex items-center min-h-[calc(100vh-65px)] py-12 md:py-0">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          {/* Tag */}
          <span className="text-xs md:text-sm text-lime-400 font-bold uppercase tracking-wider">
            Train smarter
          </span>

          {/* Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Transform your body with daily fitness programs
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
            Join powerful workout sessions, expert trainers, and flexible plans 
            designed for beginners and advanced members.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-lime-400 hover:bg-lime-500 transition-colors rounded-lg px-8 py-3 text-sm font-bold text-black">
              Start Today
            </button>
            <button className="bg-transparent border border-gray-700 hover:border-gray-500 transition-colors rounded-lg px-8 py-3 text-sm font-bold text-white">
              View Plans
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-xl">
            <img
              src={HeroImage}
              alt="Fitness Training"
              className="rounded-3xl object-cover w-full h-[300px] md:h-[450px] shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;