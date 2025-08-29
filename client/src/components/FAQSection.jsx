const faqs = [
  {
    question: "How does Codalyzer review my code?",
    answer:
      "Codalyzer uses advanced Generative AI models to analyze your codebase. It checks for syntax issues, code smells, design flaws, and best practices based on language-specific and industry-standard guidelines.",
  },
  {
    question: "Do I need to upload my entire project?",
    answer:
      " No. You can review individual files, selected code snippets, or entire repositories. Codalyzer is flexible and can adapt to the level of detail you need.",
  },
  {
    question: "Which programming languages does Codalyzer support?",
    answer:
      "Codalyzer currently supports major languages including JavaScript, TypeScript, Python, Java, and more. We're continuously adding support for additional languages.",
  },
];

const FAQSection = () => {
  return (
    <section className="mb-10 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to the most common questions about using Codalyzer.
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="group bg-white/80 dark:bg-[#18181b] border border-gray-200 dark:border-[#232323] rounded-xl p-6 shadow-lg transition hover:shadow-xl flex items-start gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.75v.75m0 13.5v.75m7.25-7.25h-.75m-13.5 0h-.75m12.02-5.02l-.53.53m-9.19 9.19l-.53.53m12.02 0l-.53-.53m-9.19-9.19l-.53-.53"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
