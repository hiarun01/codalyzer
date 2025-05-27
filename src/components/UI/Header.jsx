import React from "react";

const Header = () => {
  return (
    <header className="bg-black h-16 r border-b border-gray-800 shadow-2xs flex items-center ">
      <div className="flex justify-between w-6xl mx-auto items-center ">
        <div>
          <span className="text-white text-lg font-bold">Codalyze</span>
        </div>

        <div>
          <button className="text-white bg-red-700 py-2 px-5 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
