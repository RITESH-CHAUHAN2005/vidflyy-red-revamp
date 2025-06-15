
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-red-500 mb-4">Vidflyy</div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for YouTube growth. We help content creators reach their full potential 
              with organic, targeted video promotion services.
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
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-red-400 transition-colors">Video Promotion</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Channel Growth</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span>hello@vidflyy.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-500" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Vidflyy. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
