import FeaturesGrid from "../FeaturesGrid";
import Header from "../Header";
import Footer from "../Footer";
import FAQSection from "../FAQSection";
import HeroSection from "../HeroSection";

const Home = () => {
  return (
    <>
      <Header />
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-900 dark:via-black dark:to-red-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="pt-8 pb-12">
            <HeroSection />
          </div>
          <div className="py-8">
            <FeaturesGrid />
          </div>
          <div className="py-8">
            <FAQSection />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Home;
