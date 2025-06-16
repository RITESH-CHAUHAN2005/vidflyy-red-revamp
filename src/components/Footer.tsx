import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917355518761', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <img src="/lovable-uploads/0b27d722-c6a7-47e3-ae7d-aeb8461db170.png" alt="Vidflyy" className="h-8 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering content creators to reach their full potential through strategic YouTube promotion and organic growth solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 hover:scale-110 transform">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 hover:scale-110 transform">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 hover:scale-110 transform">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Home</a></li>
              <li><a href="/features" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Features</a></li>
              <li><a href="/services" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Services</a></li>
              <li><a href="/pricing" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Pricing</a></li>
              <li><a href="/contact" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="/features" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Video Promotion</a></li>
              <li><a href="/features" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Audience Targeting</a></li>
              <li><a href="/features" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Analytics & Growth</a></li>
              <li><a href="/features" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Channel Optimization</a></li>
              <li><a href="/features" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Premium Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-center gap-2">
                <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@vidflyy.com
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 7355518761
              </p>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 mt-4"
              >
                Contact Us on WhatsApp
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Vidflyy. All rights reserved. | Empowering YouTube creators worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
