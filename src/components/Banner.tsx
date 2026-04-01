// import React from 'react'
import HeroImage from "../assets/hero-image.png";

const Banner = () => {

  return (
    <section className="bg-white flex items-center min-h-[calc(100vh-65px)]">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">

        {/* LEFT */}
        <div className="pl-12 pr-8 py-16 space-y-5" style={{ flex: "0 0 45%" }}>

          {/* Tag */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-violet-600 font-medium">Start learning today</span>
          </div>

          {/* Headline */}
          <h1
            className="font-extrabold leading-tight text-gray-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "2.6rem" }}
          >
            Improve your skill with
            <br />
            online courses
          </h1>

          {/* Subtext */}
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Learn programming, design, and teamwork with simple projects and clear lessons for beginners
          </p>
        <div className="flex">
            <button className="bg-white border border-gray-200 rounded-lg px-5 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition">Get Started</button>
            <button className="bg-violet-700 rounded-lg px-5 py-2 text-base font-medium text-white shadow-md shadow-violet-300 hover:bg-violet-800 transition">View Courses</button>
        </div>
          {/* Spacer */}
          <div className="pt-2" />
        </div>
        <div className="flex justify-end items-center" style={{ flex: "0 0 55%" }}>
          <img
            src={HeroImage}
            alt="Hero"
            className="object-contain w-full"
            style={{ maxHeight: "520px" }}
          />
        </div>

      </div>
    </section>
  );
}

export default Banner