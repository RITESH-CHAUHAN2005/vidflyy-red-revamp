
import { useState } from "react";
import { Calculator, DollarSign, Eye, Users, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EstimateSection = () => {
  const [budget, setBudget] = useState(1000);

  const calculateEstimates = (budget: number) => {
    const viewsMultiplier = budget * 2.5;
    const subscribersMultiplier = budget * 0.05;
    const likesMultiplier = budget * 0.8;
    
    return {
      views: Math.round(viewsMultiplier),
      subscribers: Math.round(subscribersMultiplier),
      likes: Math.round(likesMultiplier)
    };
  };

  const estimates = calculateEstimates(budget);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917355518761', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-white font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Estimate Your Promotion's <span className="text-red-600">Potential</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what results you can expect with our YouTube promotion services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Budget Input */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="h-8 w-8 text-red-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Enter Your Budget</h3>
                </div>
                
                <div className="space-y-4">
                  <label className="block text-lg font-medium text-gray-700">
                    Monthly Promotion Budget
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-600" />
                    <Input
                      type="number"
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="pl-10 text-lg h-14 border-2 border-gray-200 focus:border-red-500 rounded-xl"
                      min="100"
                      max="50000"
                    />
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${(budget/10000)*100}%, #e5e7eb ${(budget/10000)*100}%, #e5e7eb 100%)`
                    }}
                  />
                </div>
                
                <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                  <p className="text-red-800 font-medium text-center">
                    🛡️ You're protected by Vidflyy's money-back guarantee!
                  </p>
                </div>
              </div>

              {/* Estimates */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Expected Results</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <Eye className="h-6 w-6 text-blue-600" />
                      <span className="font-medium text-gray-700">Views</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">
                      {estimates.views.toLocaleString()}+
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-green-600" />
                      <span className="font-medium text-gray-700">Subscribers</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">
                      {estimates.subscribers.toLocaleString()}+
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-pink-50 rounded-xl border border-pink-100 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <Heart className="h-6 w-6 text-pink-600" />
                      <span className="font-medium text-gray-700">Likes</span>
                    </div>
                    <span className="text-2xl font-bold text-pink-600">
                      {estimates.likes.toLocaleString()}+
                    </span>
                  </div>
                </div>
                
                <div className="pt-6 space-y-4">
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Start Your Campaign
                  </Button>
                  <Button 
                    onClick={handleWhatsAppClick}
                    variant="outline" 
                    className="w-full border-red-600 text-red-600 hover:bg-red-50 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimateSection;
