import { services } from "../data/data"; // adjust path

const Service = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-10 px-6 py-16">

      {/* LEFT SIDE */}
      <div className="md:w-1/2 flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Future of support with new shape
        </h1>

        <p className="text-gray-500">
          Discuss your goals, determine succes metrics, identify problems
        </p>

        {/* Bullet points */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
            </div>
            <p>UX design content strategy</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
            </div>
            <p>Development bring</p>
          </div>
        </div>

        <button className="mt-4 w-48 py-3 rounded-full text-white bg-purple-600">
          Get Started
        </button>
      </div>

      {/* RIGHT SIDE (DYNAMIC) */}
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-3">
            
            {/* icon from data */}
            {service.icon}

            <h3 className="font-semibold text-lg">
              {service.title}
            </h3>

            <p className="text-gray-500 text-sm">
              {service.description}
            </p>

            <a
              href={service.link}
              className="text-indigo-600 text-sm font-medium cursor-pointer"
            >
              LEARN MORE
            </a>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Service;