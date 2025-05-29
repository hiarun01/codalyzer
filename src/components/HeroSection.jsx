import {Link} from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white lg:grid lg:place-content-center dark:bg-black lg:h-[80vh]">
      <div className="mx-auto w-screen max-w-screen-xl px-5 py-16 sm:px-6 sm:py-16 md:grid md:grid-cols-2 md:items-center sm:items-center md:gap-4 lg:px-8 lg:py-8 lg:h-[70vh]">
        <div className="max-w-prose text-left items-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            <span className="font-mono">Codalyze -</span>
            <strong className="text-red-700 "> AI Code Reviewer</strong>
          </h1>

          <p className="mt-7 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            nisi. Natus, provident accusamus impedit minima harum corporis
            iusto.
          </p>
          <div className="mt-10 flex gap-4 sm:mt-6 items-center">
            <Link
              to="/dashboard"
              className="rounded-md bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800"
            >
              Get Started
            </Link>
          </div>
        </div>

        <img
          className="mx-auto hidden w-full max-w-md text-gray-900 md:block dark:text-white "
          src="/hero-img.svg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
