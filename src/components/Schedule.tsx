import StatsImg from "../assets/stats.webp";

const Schedule = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between gap-10 px-7 py-20">
      
      {/* Image */}
      <img src={StatsImg} alt="stats" className="w-3/4 md:w-1/2 mx-auto" />

      {/* Text Content */}
      <div className="flex flex-col gap-4 md:w-1/2">
        <p className="text-yellow-600">SCHEDULE</p>

        <h2
          className="font-extrabold leading-tight text-gray-900"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "2.6rem",
          }}
        >
          Streamline your business with smart scheduling solutions
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed">
          Take control of your time boost productivity with our intelligent system. Automate appointments, manage team availability, and deliver exceptional customer experience through calendar management.
        </p>
        <p className="text-sm text-blue-500 leading-relaxed">
            Explore scheduling features →
        </p>
      </div>

    </div>
  );
};

export default Schedule;