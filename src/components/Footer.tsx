
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white font-montserrat">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Have Any Queries?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Contact Us
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Call Us Now
            </Button>
          </div>
        </div>
        {/* YouTube Icons */}
        <div className="absolute top-8 right-8 opacity-20">
          <Youtube className="h-16 w-16 text-red-600" />
        </div>
        <div className="absolute bottom-8 left-8 opacity-20">
          <Youtube className="h-12 w-12 text-red-600" />
        </div>
        <div className="absolute bottom-16 right-16 opacity-20">
          <Youtube className="h-8 w-8 text-red-600" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img src="/lovable-uploads/0b27d722-c6a7-47e3-ae7d-aeb8461db170.png" alt="Vidflyy" className="h-8 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-300 mb-6 max-w-md">
              Simplest way to put your YouTube Video in front of right Audience
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <p>1st Floor, Ramansind Trade Center, 3A, A, Karpoorshala Road, Chandnigk Colony, Aljarah</p>
                <p>Lucknow, Uttar Pradesh 226024</p>
                <p>+91 7355018708</p>
                <p>info@videopromotion.digital</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/" className="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-red-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-red-400 transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-red-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Service</h3>
            <ul className="space-y-3 text-gray-300">
              <li>YouTube Views</li>
              <li>YouTube Subscribers</li>
              <li>YouTube WatchTime</li>
              <li>YouTube Revenue</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Vidflyy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
