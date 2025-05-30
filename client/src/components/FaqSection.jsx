import React from "react";

const FaqSection = () => {
  return (
    <div className=" bg-[#000000] w-[100vw] flex flex-col justify-between items-center pb-20 h-full px-5">
      <h1 className="text-white text-3xl py-20 font-mono font-extrabold">
        How it Wokrs -
      </h1>
      <div className="w-[85vw] space-y-10">
        <details className="group [&_summary::-webkit-details-marker]:hidden w-full">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-red-700 p-4 text-gray-900 dark:border-gray-700 dark:bg-red-800 dark:text-white">
            <h2 className="text-lg font-medium">
           How does Codalyzer review my code?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900 dark:text-white">
            Codalyzer uses advanced Generative AI models to analyze your codebase. It checks for syntax issues, code smells, design flaws, and best practices based on language-specific and industry-standard guidelines.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden w-full">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-red-800 p-4 text-gray-900 dark:border-gray-700 dark:bg-red-800 dark:text-white">
            <h2 className="text-lg font-medium">
              Do I need to upload my entire project?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900 dark:text-white">
           No. You can review individual files, selected code snippets, or entire repositories. Codalyzer is flexible and can adapt to the level of detail you need.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden w-full">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-red-800 p-4 text-gray-900 dark:border-gray-700 dark:bg-red-800 dark:text-white">
            <h2 className="text-lg font-medium">
               Which programming languages does Codalyzer support?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900 dark:text-white">
           Codalyzer currently supports major languages including JavaScript, TypeScript, Python, Java, and more. We're continuously adding support for additional languages.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FaqSection;
