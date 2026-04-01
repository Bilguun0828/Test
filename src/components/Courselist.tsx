// import React from 'react'
import { features } from "../data/data2";
const Courselist = () => {
  return (
      <section className="bg-white py-20 px-7">
  
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Popular courses
          </h2>
          <p className="text-sm text-gray-400">
            Choose a course and start building your skill
          </p>
        </div>
  
        {/* Cards grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {features.map((feature, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-5">
        
                    {/* Icon circle */}
                    <div
                      className="sm:w-full w-1/3 h-50 rounded-full flex items-center justify-center text-4xl shrink-0 "
                      style={{ backgroundColor: feature.bg }}
                    >
                      <img src="../assets/1.png" alt=""className="object-contain w-full" style={{ height: "100px", width:"300px" }} />
                    </div>
        
                    {/* Text */}
                    <div className="flex flex-col flex-start justify-start">
                        <p className=" text-violet-600">{feature.level}</p>
                      <h3 className="text-base font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <button className="bg-violet-700 rounded-lg px-5 py-2 text-base font-medium text-white shadow-md shadow-violet-300 hover:bg-violet-800 transition">
                    Join now
                    </button>
        
                  </div>
                ))}
        </div>
  
      </section>
    );
}

export default Courselist