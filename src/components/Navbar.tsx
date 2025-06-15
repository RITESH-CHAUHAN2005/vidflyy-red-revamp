
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/0b27d722-c6a7-47e3-ae7d-aeb8461db170.png" alt="Vidflyy" className="h-8 w-auto" />
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                HOME
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                ABOUT US
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                SERVICES
              </Link>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                PRICING
              </button>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                CONTACT US
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium">
                HOME
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium">
                ABOUT US
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium">
                SERVICES
              </Link>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                PRICING
              </button>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium">
                CONTACT US
              </Link>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
