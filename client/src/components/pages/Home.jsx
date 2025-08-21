import {Link} from "react-router-dom";
import FeaturesGrid from "../FeaturesGrid";
import Header from "../Header";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Header />
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-900 dark:via-black dark:to-red-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Badge */}
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-300 dark:ring-gray-100/10 dark:hover:ring-gray-100/20">
                Powered by AI{" "}
                <span className="font-semibold text-red-600 dark:text-red-400">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Learn more <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              <span className="block">Intelligent Code Review</span>
              <span className="block text-red-600 dark:text-red-400">
                Powered by AI
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Transform your development workflow with Codalyzer's AI-driven
              code analysis. Get instant feedback, catch bugs early, and improve
              code quality with intelligent suggestions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/dashboard"
                className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors duration-200"
              >
                Get Started
                <svg
                  className="ml-2 w-4 h-4"
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
              </Link>
              <Link
                to="https://github.com/hiarun01/codalyzer"
                target="_blank"
                className="inline-flex items-center rounded-md bg-transparent px-4 py-2 text-sm font-semibold text-white shadow-sm hover:border-1 border-gray-700"
              >
                Start on GitHub
                <svg
                  className="ml-2 w-4 h-4"
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
              </Link>
            </div>
            {/* Features Grid */}
            <FeaturesGrid />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Home;
