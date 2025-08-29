import {Link} from "react-router-dom";
import {Button} from "./ui/button";
import {GithubIcon} from "lucide-react";

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-2xl text-center pt-12 pb-16 lg:pt-24 lg:pb-24">
      {/* Badge */}
      <div className="mb-6 flex justify-center">
        <div className="relative rounded-full px-4 py-1.5 text-sm font-medium leading-6 text-gray-700 bg-gray-100 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-200 dark:bg-[#232323] dark:ring-gray-100/10 dark:hover:ring-gray-100/20 transition">
          Powered by{" "}
          <span className="font-semibold text-red-600 dark:text-red-400">
            Gen AI
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
        <span className="block">Intelligent Code Review</span>
        <span className="block text-red-600 dark:text-red-400">
          Powered by Gen AI
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        Codalyzer – A smart code reviewer powered by GenAI that helps you
        analyze, review, and improve your code with AI-driven insights.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex  items-center justify-center gap-4">
        <Link to="/dashboard">
          <Button className="inline-flex items-center rounded-md bg-red-600 px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-red-700 transition-colors duration-200">
            Get Started
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Button>
        </Link>
        <a
          href="https://github.com/your-repo" // <-- Replace with your repo link
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="flex items-center text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition"
          >
            Give Star on <GithubIcon className="mr-2" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
