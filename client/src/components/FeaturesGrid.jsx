const features = [
  {
    icon: (
      <svg
        className="h-7 w-7 text-red-600 dark:text-red-400"
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
    ),
    title: "Smart Analysis",
    desc: "AI-powered code analysis that understands context and patterns",
  },
  {
    icon: (
      <svg
        className="h-7 w-7 text-red-600 dark:text-red-400"
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
    ),
    title: "Instant Feedback",
    desc: "Get real-time suggestions and improvements as you code",
  },
  {
    icon: (
      <svg
        className="h-7 w-7 text-red-600 dark:text-red-400"
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
    ),
    title: "Quality Metrics",
    desc: "Track code quality improvements with detailed analytics",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="mb-10 bg-transparent">
      {/* heading  */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
        Key Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:py-20 max-w-5xl mx-auto px-5">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center bg-white/80 dark:bg-[#18181b] border border-gray-200 dark:border-[#232323] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 p-7 group"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20 mb-3 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="mt-2 text-base font-bold text-gray-900 dark:text-white text-center">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
