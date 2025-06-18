
import { Youtube, Play } from "lucide-react";

const YouTubeAdPlacements = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <Youtube className="absolute top-10 left-10 h-20 w-20 text-red-100 opacity-30 animate-pulse" />
        <Play className="absolute top-32 right-20 h-16 w-16 text-red-200 opacity-40 animate-bounce" />
        <Youtube className="absolute bottom-20 left-32 h-24 w-24 text-red-100 opacity-30" />
        <Play className="absolute bottom-10 right-10 h-32 w-32 text-red-100 opacity-20" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Get your video promoted across YouTube's <span className="text-red-600">top ad placements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach your target audience through strategic ad placements across YouTube's platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Before Similar Videos */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="bg-red-600 rounded-xl p-4 mb-4">
              <h3 className="text-white text-xl font-bold text-center">Your Video is Shown Here Before Similar Videos</h3>
            </div>
            
            {/* YouTube Interface Mockup */}
            <div className="bg-gray-100 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3 mb-4">
                <Youtube className="h-6 w-6 text-red-600" />
                <div className="bg-gray-300 h-4 rounded flex-1"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
              
              <div className="bg-red-500 rounded-lg p-6 text-white relative">
                <span className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">Ad</span>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-semibold">Your promoted video shown as recommended</p>
                </div>
              </div>
              
              <div className="bg-red-400 rounded-lg p-4 text-white">
                <p className="font-semibold">And Here</p>
                <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">Ad</span>
              </div>
              
              <div className="space-y-2">
                <div className="bg-gray-300 h-3 rounded w-3/4"></div>
                <div className="bg-gray-300 h-3 rounded w-1/2"></div>
              </div>
            </div>
          </div>

          {/* Right Side - In-feed Ads */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="bg-red-600 rounded-xl p-4 mb-4">
              <h3 className="text-white text-xl font-bold text-center">In-feed ads will be shown here</h3>
            </div>
            
            {/* YouTube Search Results Mockup */}
            <div className="bg-gray-100 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3 mb-4">
                <Youtube className="h-6 w-6 text-red-600" />
                <div className="bg-gray-300 h-4 rounded flex-1"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
              
              <div className="bg-red-500 rounded-lg p-6 text-white relative">
                <div className="text-sm mb-2">Your promoted video shown at the top of the search results for relevant keywords</div>
                <div className="flex items-center gap-2">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">Ad</span>
                  <span className="text-sm">Your channel • 140k views</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-300 h-16 rounded"></div>
                <div className="bg-gray-300 h-16 rounded"></div>
                <div className="bg-gray-300 h-16 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeAdPlacements;
