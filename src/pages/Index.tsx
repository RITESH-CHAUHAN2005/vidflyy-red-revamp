
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import EstimateSection from "@/components/EstimateSection";
import Pricing from "@/components/Pricing";
import PricingInfo from "@/components/PricingInfo";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <EstimateSection />
      <Pricing />
      <PricingInfo />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
