import React from "react";

const Premium = () => {
  return (
    <div className="min-h-screen w-screen flex justify-center items-start bg-base-200 pt-6 overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {/* Silver Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-gray-400 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Silver Plan</h2>
          <p className="text-4xl font-extrabold text-gray-800 mb-4">
            Rs 199<span className="text-lg font-normal">/month</span>
          </p>
          <ul className="mb-2 space-y-2 text-gray-600">
            <li>✔ Chat with other people</li>
            <li>✔ 100 Connection Requests per day</li>
            <li>✔ Blue Tick</li>
            <li>✔ Hide Ads</li>
          </ul>
          <button className="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 rounded-xl mt-2 cursor-pointer">
            Choose Plan
          </button>
        </div>

        {/* Gold Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-yellow-400 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Gold Plan</h2>
          <p className="text-4xl font-extrabold text-gray-800 mb-4">
            Rs 399<span className="text-lg font-normal">/month</span>
          </p>
          <ul className="mb-2 space-y-2 text-gray-600">
            <li>✔ All Silver Features</li>
            <li>✔ Infinite Connection Requests per day</li>
            <li>✔ Control who sees you</li>
            <li>✔ Priority likes</li>
          </ul>
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-xl mt-2 cursor-pointer">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
