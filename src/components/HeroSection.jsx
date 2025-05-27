import {Link} from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white lg:grid lg:place-content-center dark:bg-black">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-32 sm:px-6 sm:py-16 md:grid md:grid-cols-2 md:items-center sm:items-center md:gap-4 lg:px-8 lg:py-8 h-[70vh]">
        <div className="max-w-prose text-left ">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            <span className="font-mono">Codalyze -</span>
            <strong className="text-red-700 "> AI Code Reviewer</strong>
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            nisi. Natus, provident accusamus impedit minima harum corporis
            iusto.
          </p>
          <div className="mt-4 flex gap-4 sm:mt-6">
            <Link
              className="inline-block rounded border border-red-600 bg-red-700 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-800"
              to="/dashboard"
            >
              Get Started
            </Link>
          </div>
        </div>

        <img
          className="mx-auto hidden max-w-md text-gray-900 md:block dark:text-white"
          src="/src/assets/heroImg.svg"
          alt=""
          srcset=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
