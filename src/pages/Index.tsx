
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewServices from "@/components/NewServices";
import VideoShowcase from "@/components/VideoShowcase";
import Stats from "@/components/Stats";
import SuccessStories from "@/components/SuccessStories";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />
      <Hero />
      <NewServices />
      <VideoShowcase />
      <Stats />
      <SuccessStories />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
