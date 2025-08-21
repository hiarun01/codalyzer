import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black border-t border-gray-700/50 dark:border-gray-600/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col items-center text-center space-y-5">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Codalyzer
            </span>
          </div>
          {/* Description */}
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            AI-powered code review platform that helps developers write better,
            safer, and more maintainable code with intelligent suggestions.
          </p>
          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
            <p className="text-gray-400">
              © 2024 Codalyzer. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Built with</span>
              <svg
                className="w-4 h-4 text-red-500 animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-400">by</span>
              <a
                href="https://x.com/hiarun01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 font-medium transition-colors duration-200 hover:underline"
              >
                @hiarun01
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
