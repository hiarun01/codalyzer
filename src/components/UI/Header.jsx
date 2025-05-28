import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white dark:bg-black border-b border-gray-800 shadow-2xs">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <span className="text-white font-bold text-lg">Codalyzer</span>
          </div>

          <div className="">
            <Link
              to="/dashboard
                  "
              className="rounded-md bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
