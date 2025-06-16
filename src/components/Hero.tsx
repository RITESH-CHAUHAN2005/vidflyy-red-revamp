
import { Play, TrendingUp, Users, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917355518761', '_blank');
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-red-50 to-white py-20 lg:py-32 font-montserrat overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Enhanced Floating Elements with Better Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 bg-white rounded-lg shadow-xl p-4 animate-float opacity-80 hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 mb-2">
            <Youtube className="h-4 w-4 text-red-600" />
            <span className="text-xs font-medium">Live Streaming</span>
          </div>
          <div className="w-24 h-16 bg-gradient-to-r from-red-100 to-red-200 rounded flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Play className="h-6 w-6 text-red-600 animate-pulse" />
          </div>
        </div>
        
        <div className="absolute top-32 right-20 bg-white rounded-lg shadow-xl p-4 animate-bounce-slow opacity-70 hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-xs font-medium">Views Growing</span>
          </div>
          <div className="w-28 h-18 bg-gradient-to-r from-green-100 to-green-200 rounded flex items-center justify-center">
            <span className="text-lg font-bold text-green-600 animate-pulse">+247%</span>
          </div>
        </div>
        
        <div className="absolute bottom-32 left-1/4 bg-white rounded-lg shadow-xl p-4 animate-float-delayed opacity-60 hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-medium">Subscribers</span>
          </div>
          <div className="w-20 h-14 bg-gradient-to-r from-blue-100 to-blue-200 rounded flex items-center justify-center">
            <span className="text-sm font-bold text-blue-600">12.5K</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Grow Your Channel with
              <span className="text-red-600 block animate-text-gradient">Targeted Video Promotion</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-delay">
              Get real, organic views and subscribers for your YouTube videos. 
              Our proven promotion strategies help content creators reach their target audience and grow faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleWhatsAppClick} 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg animate-button-bounce"
              >
                Start Promotion
              </Button>
              <Button 
                onClick={handleWhatsAppClick} 
                size="lg" 
                variant="outline" 
                className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
              >
                View Packages
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 animate-fade-in-delay-2">
              <div className="text-center group">
                <div className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">50K+</div>
                <div className="text-sm text-gray-600">Videos Promoted</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">10M+</div>
                <div className="text-sm text-gray-600">Views Generated</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">5K+</div>
                <div className="text-sm text-gray-600">Happy Creators</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-delay">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:rotate-0 transition-transform duration-500 hover:scale-105 group">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white mb-6 group-hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Play className="h-8 w-8 animate-pulse" />
                  <span className="text-lg font-semibold">Video Analytics</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group-hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl font-bold">127K</div>
                    <div className="text-red-100">Views</div>
                  </div>
                  <div className="group-hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl font-bold">2.4K</div>
                    <div className="text-red-100">Subscribers</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors duration-300">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 font-medium">+185% Growth Rate</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">Target Audience Reached</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes text-gradient {
          0%, 100% { color: #dc2626; }
          50% { color: #b91c1c; }
        }
        @keyframes button-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-text-gradient { animation: text-gradient 2s ease-in-out infinite; }
        .animate-button-bounce { animation: button-bounce 2s ease-in-out infinite; }
        .animate-fade-in { opacity: 0; animation: fadeIn 1s ease-out forwards; }
        .animate-fade-in-delay { opacity: 0; animation: fadeIn 1s ease-out 0.3s forwards; }
        .animate-fade-in-delay-2 { opacity: 0; animation: fadeIn 1s ease-out 0.6s forwards; }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
