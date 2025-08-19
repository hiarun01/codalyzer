const FeaturesGrid = () => {
  return (
    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:py-12">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/20">
          <svg
            className="h-6 w-6 text-red-600 dark:text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M9.75 3.104L19.8 14.5m0 0l-5.25 5.25a2.25 2.25 0 01-1.591.659H11.25M19.8 14.5l-1.35 1.35"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
          Smart Analysis
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
          AI-powered code analysis that understands context and patterns
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/20">
          <svg
            className="h-6 w-6 text-red-600 dark:text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
          Instant Feedback
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
          Get real-time suggestions and improvements as you code
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/20">
          <svg
            className="h-6 w-6 text-red-600 dark:text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
          Quality Metrics
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
          Track code quality improvements with detailed analytics
        </p>
      </div>
    </div>
  );
};

export default FeaturesGrid;
