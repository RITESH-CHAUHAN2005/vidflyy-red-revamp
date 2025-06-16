
import { Play, Users, TrendingUp, Youtube } from "lucide-react";

const VideoShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-white font-montserrat relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-50 rounded-full opacity-30 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How Vidflyy <span className="text-red-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our platform helps creators like you achieve their YouTube growth goals
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Video Container 1 - Choose Your Video */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
            
            {/* Video Placeholder */}
            <div className="relative z-10 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 h-40 flex items-center justify-center border border-white/30">
                <div className="text-center">
                  <Play className="h-12 w-12 mx-auto mb-2 text-white" />
                  <div className="text-sm opacity-90">Sample Video</div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3">Choose Your Video</h3>
              <p className="text-blue-100 text-sm mb-4">
                Select the content you want to promote from your channel
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Youtube className="h-4 w-4" />
                <span>All Channel Videos</span>
              </div>
            </div>
          </div>

          {/* Video Container 2 - Define Your Audience */}
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
            
            {/* Audience Placeholder */}
            <div className="relative z-10 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 h-40 flex items-center justify-center border border-white/30">
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-2 text-white" />
                  <div className="text-sm opacity-90">Target Audience</div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3">Define Your Audience</h3>
              <p className="text-yellow-100 text-sm mb-4">
                Set up your audience profile to reach viewers interested in your content
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>Audience Targeting</span>
              </div>
            </div>
          </div>

          {/* Video Container 3 - Launch and Grow */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
            
            {/* Growth Placeholder */}
            <div className="relative z-10 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 h-40 flex items-center justify-center border border-white/30">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-2 text-white" />
                  <div className="text-sm opacity-90">Growth Analytics</div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3">Launch and Grow</h3>
              <p className="text-green-100 text-sm mb-4">
                See your channel thrive as Vidflyy connects your video with engaged viewers
              </p>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>Real-time Growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Video Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">See Vidflyy in Action</h3>
            <p className="text-red-100 mb-6">Watch how creators are growing their channels with our platform</p>
            
            {/* Video Container */}
            <div className="bg-black/30 rounded-xl p-8 h-64 flex items-center justify-center border border-white/20">
              <div className="text-center">
                <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-all duration-300 cursor-pointer">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
                <p className="text-white/80">Demo Video Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
