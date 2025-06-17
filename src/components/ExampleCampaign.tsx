
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Users, Heart } from "lucide-react";

const ExampleCampaign = () => {
  const [selectedBudget, setSelectedBudget] = useState("");
  const [customBudget, setCustomBudget] = useState("");

  const budgetOptions = [
    { value: "500", label: "₹500" },
    { value: "1000", label: "₹1000" },
    { value: "2000", label: "₹2000" },
    { value: "5000", label: "₹5000" },
    { value: "10000", label: "₹10000" },
    { value: "15000", label: "₹15000" },
    { value: "25000", label: "₹25000" },
    { value: "50000", label: "₹50000" }
  ];

  const getEstimates = (budget: number) => {
    if (budget >= 50000) {
      return {
        views: "500K - 900K",
        subscribers: "40,000 - 65,000",
        likes: "30,000 - 45,000"
      };
    } else if (budget >= 25000) {
      return {
        views: "250K - 450K",
        subscribers: "20,000 - 32,000",
        likes: "15,000 - 22,000"
      };
    } else if (budget >= 10000) {
      return {
        views: "100K - 180K",
        subscribers: "8,000 - 13,000",
        likes: "6,000 - 9,000"
      };
    } else if (budget >= 5000) {
      return {
        views: "50K - 90K",
        subscribers: "4,000 - 6,500",
        likes: "3,000 - 4,500"
      };
    } else {
      return {
        views: "25K - 45K",
        subscribers: "2,000 - 3,200",
        likes: "1,500 - 2,250"
      };
    }
  };

  const currentBudget = parseInt(customBudget || selectedBudget || "500");
  const estimates = getEstimates(currentBudget);

  const handleEstimate = () => {
    console.log("Budget:", currentBudget, "Estimates:", estimates);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEstimate();
    }
  };

  return (
    <section className="py-20 bg-gray-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Campaign Performance */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-card-float">
            <div className="flex items-center gap-2 mb-6 p-3 bg-blue-50 rounded-lg">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-medium text-sm">You're protected by VIDFLYY's satisfaction guarantee!</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Example Campaign Performance</h3>
            <p className="text-gray-600 mb-6">
              Curious about what VIDFLYY can do for your YouTube channel? Below are examples of potential reach from past campaigns at different budget levels.
            </p>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Enter budget (min. ₹500)</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">₹</span>
                  <input
                    type="number"
                    value={customBudget}
                    onChange={(e) => setCustomBudget(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="500"
                    min="500"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <Button 
                  onClick={handleEstimate}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 transition-all duration-300 hover:scale-105"
                >
                  Estimate
                </Button>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-3">Or select your budget</p>
              <div className="grid grid-cols-4 gap-2">
                {budgetOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedBudget(option.value);
                      setCustomBudget("");
                    }}
                    className={`p-3 rounded-lg border text-center font-medium transition-all duration-200 hover:scale-105 ${
                      selectedBudget === option.value && !customBudget
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs text-gray-500 italic">
              *Important: The figures above are estimates based on historical averages and are NOT a guarantee of future performance. Your actual results will vary based on your video's content, audience targeting, and other factors.
            </div>
          </div>

          {/* Right Side - Estimated Reach */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white animate-card-rotate">
            <h3 className="text-2xl font-bold mb-8">Estimated Potential Reach:</h3>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-float">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="h-6 w-6 text-blue-200" />
                  <span className="text-lg font-medium">Potential Views*</span>
                </div>
                <div className="text-3xl font-bold">{estimates.views}</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-float-delayed">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-6 w-6 text-red-300" />
                  <span className="text-lg font-medium">Potential Subscribers*</span>
                </div>
                <div className="text-3xl font-bold">{estimates.subscribers}</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-bounce-gentle">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="h-6 w-6 text-pink-300" />
                  <span className="text-lg font-medium">Potential Likes*</span>
                </div>
                <div className="text-3xl font-bold">{estimates.likes}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleCampaign;
