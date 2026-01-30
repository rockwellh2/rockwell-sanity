import HeroSection from '../sections/HeroSection';
import ProblemSolutionSection from '../sections/ProblemSolutionSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import ProductsPreviewSection from '../sections/ProductsPreviewSection';
import TrustSection from '../sections/TrustSection';
import CTASection from '../sections/CTASection';

const Home = () => {
  return (
    <main className="relative">
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <ProductsPreviewSection />
      <TrustSection />
      <CTASection />
    </main>
  );
};

export default Home;
