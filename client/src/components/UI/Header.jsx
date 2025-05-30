import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white dark:bg-[#111010] border-b border-[#5c5c5c] shadow-2xs">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link to="/">
              <span className="text-white font-bold text-lg">Codalyzer</span>
            </Link>
          </div>

          <div className="">
            <Link
              to="/dashboard"
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
