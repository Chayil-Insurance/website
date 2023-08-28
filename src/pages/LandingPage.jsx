import Features from "../components/Features";
import FeaturesBlocks from "../components/FeaturesBlocks";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import Testimonials from "../components/Testmonials";

const LandingPage = () => {
  return (
    <Layout>
      <HeroSection />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
    </Layout>
  );
};

export default LandingPage;
