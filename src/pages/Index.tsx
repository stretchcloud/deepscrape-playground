import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ScrapingDemo } from "@/components/ScrapingDemo";
import { SEOSection } from "@/components/SEOSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <ScrapingDemo />
      <SEOSection />
      <Footer />
    </div>
  );
};

export default Index;
