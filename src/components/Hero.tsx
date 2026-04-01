import { useState } from "react";
import { HiStar } from "react-icons/hi";
import HeroImage from "../assets/hero-image.png";


const Hero = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-white flex items-center min-h-[calc(100vh-65px)]">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">

        {/* LEFT */}
        <div className="pl-12 pr-8 py-16 space-y-5" style={{ flex: "0 0 45%" }}>

          {/* Tag */}
          <div className="flex items-center gap-2">
            <HiStar className="text-blue-600 text-sm shrink-0" />
            <span className="text-sm text-gray-500 font-medium">Jump start your growth</span>
          </div>

          {/* Headline */}
          <h1
            className="font-extrabold leading-tight text-gray-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "2.6rem" }}
          >
            We boost the growth for{" "}
            <span className="text-blue-600">Startup to Fortune 500</span>
            <br />
            Companies <span>⏰</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Get the most accurate leads, sales people training conversions,
            tools and more - all within the same one billing.
          </p>

          {/* Spacer */}
          <div className="pt-2" />

          {/* Email CTA */}
          <div className="flex items-center" style={{ maxWidth: "320px" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 px-4 py-2.5 text-sm border border-gray-200 border-r-0 rounded-l-lg bg-white text-gray-700 outline-none focus:border-blue-400 transition"
              style={{ fontSize: "13px" }}
            />
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2.5 rounded-r-lg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

        </div>

        {/* RIGHT: hero image */}
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
};

export default Hero;