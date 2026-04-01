import { useState } from "react";

const Price = () => {
  const [months, setMonths] = useState(1);

  // prices per month
  const starterPrice = 80;
  const businessPrice = 150;

  return (
    <div className="w-full flex flex-col items-center mx-auto">
      <h1 className="font-bold text-3xl md:text-4xl text-center mb-8">
        Pricing
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-center gap-8 mb-8">
        
        {/* Starter */}
        <div className="w-full md:w-1/3 flex flex-col justify-center shadow-lg rounded-lg p-8">
          <h2 className="text-gray-600 text-xl mb-4">Starter</h2>
          <p className="text-3xl font-bold mb-2">
            Total: ${starterPrice * months}/mo
          </p>
        </div>

        {/* Business */}
        <div className="w-full md:w-1/3 flex flex-col justify-center shadow-lg rounded-lg p-8">
          <h2 className="text-gray-600 text-xl mb-4">Business</h2>
          <p className="text-3xl font-bold mb-2">
            Total: ${businessPrice * months}/mo
          </p>
        </div>

      </div>

      {/* Range Slider */}
      <div className="px-4 mb-8 flex items-center gap-3">
        <span className="text-xs text-gray-600">1</span>

        <input
          type="range"
          min={1}
          max={50}
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
          className="w-60"
        />

        <span className="text-xs text-gray-600">50</span>
      </div>
      <h3 className="text-gray-600 text-xl mb-4">Ready to get started</h3>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Price;