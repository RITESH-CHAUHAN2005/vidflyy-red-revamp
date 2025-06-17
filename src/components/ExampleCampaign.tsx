
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Users, Heart } from "lucide-react";

const ExampleCampaign = () => {
  const [selectedBudget, setSelectedBudget] = useState("");
  const [customBudget, setCustomBudget] = useState("");

  const budgetOptions = [
    { value: "50", label: "$50" },
    { value: "100", label: "$100" },
    { value: "150", label: "$150" },
    { value: "300", label: "$300" },
    { value: "500", label: "$500" },
    { value: "750", label: "$750" },
    { value: "1000", label: "$1000" },
    { value: "1500", label: "$1500" }
  ];

  const getEstimates = (budget: number) => {
    if (budget >= 1500) {
      return {
        views: "1500K - 2700K",
        subscribers: "120,000 - 195,000",
        likes: "90,000 - 135,000"
      };
    } else if (budget >= 1000) {
      return {
        views: "1000K - 1800K",
        subscribers: "80,000 - 130,000",
        likes: "60,000 - 90,000"
      };
    } else if (budget >= 500) {
      return {
        views: "500K - 900K",
        subscribers: "40,000 - 65,000",
        likes: "30,000 - 45,000"
      };
    } else if (budget >= 100) {
      return {
        views: "100K - 180K",
        subscribers: "8,000 - 13,000",
        likes: "6,000 - 9,000"
      };
    } else {
      return {
        views: "50K - 90K",
        subscribers: "4,000 - 6,500",
        likes: "3,000 - 4,500"
      };
    }
  };

  const currentBudget = parseInt(customBudget || selectedBudget || "50");
  const estimates = getEstimates(currentBudget);

  const handleEstimate = () => {
    // For demo purposes, just show current estimates
    console.log("Budget:", currentBudget, "Estimates:", estimates);
  };

  return (
    <section className="py-20 bg-gray-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Campaign Performance */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-2 mb-6 p-3 bg-blue-50 rounded-lg">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-medium text-sm">You're protected by VIDFLYY's satisfaction guarantee!</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Example Campaign Performance</h3>
            <p className="text-gray-600 mb-6">
              Curious about what VIDFLYY can do for your YouTube channel? Below are examples of potential reach from past campaigns at different budget levels.
            </p>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Enter budget (min. $50)</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={customBudget}
                  onChange={(e) => setCustomBudget(e.target.value)}
                  placeholder="50"
                  min="50"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button 
                  onClick={handleEstimate}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6"
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
                    className={`p-3 rounded-lg border text-center font-medium transition-all duration-200 ${
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
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8">Estimated Potential Reach:</h3>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="h-6 w-6 text-blue-200" />
                  <span className="text-lg font-medium">Potential Views*</span>
                </div>
                <div className="text-3xl font-bold">{estimates.views}</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-6 w-6 text-red-300" />
                  <span className="text-lg font-medium">Potential Subscribers*</span>
                </div>
                <div className="text-3xl font-bold">{estimates.subscribers}</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
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
