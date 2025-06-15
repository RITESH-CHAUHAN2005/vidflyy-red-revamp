
import { Play, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-red-50 to-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Grow Your Channel with
              <span className="text-red-600 block">Targeted Video Promotion</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get real, organic views and subscribers for your YouTube videos. 
              Our proven promotion strategies help content creators reach their target audience and grow faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                Start Promotion
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 text-lg">
                View Packages
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Videos Promoted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10M+</div>
                <div className="text-sm text-gray-600">Views Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5K+</div>
                <div className="text-sm text-gray-600">Happy Creators</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Play className="h-8 w-8" />
                  <span className="text-lg font-semibold">Video Analytics</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">127K</div>
                    <div className="text-red-100">Views</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">2.4K</div>
                    <div className="text-red-100">Subscribers</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 font-medium">+185% Growth Rate</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">Target Audience Reached</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
