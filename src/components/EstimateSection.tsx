
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EstimateSection = () => {
  const [budget, setBudget] = useState("");
  const [estimates, setEstimates] = useState({
    views: "",
    subscribers: "",
    likes: ""
  });

  const calculateEstimates = () => {
    const budgetNum = parseFloat(budget);
    if (budgetNum && budgetNum > 0) {
      // Sample calculation based on budget
      const viewsMin = Math.floor(budgetNum * 25);
      const viewsMax = Math.floor(budgetNum * 35);
      const subsMin = Math.floor(budgetNum * 1.1);
      const subsMax = Math.floor(budgetNum * 4);
      const likesMin = Math.floor(budgetNum * 0.45);
      const likesMax = Math.floor(budgetNum * 0.8);

      setEstimates({
        views: `${viewsMin.toLocaleString()} - ${viewsMax.toLocaleString()}`,
        subscribers: `${subsMin} - ${subsMax}`,
        likes: `${likesMin} - ${likesMax}`
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Estimate Your Promotion's <span className="text-red-600">Potential</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gain insights into the expected performance of your promotion with our estimation tool, 
            based on historical data from Vidflyy's past successes.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Budget Input Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enter Your Budget</h3>
              <div className="mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span className="bg-gray-100 px-4 py-3 text-gray-700 font-medium">₹</span>
                  <Input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="79"
                    className="border-0 focus:ring-0 text-lg"
                  />
                </div>
              </div>
              <Button 
                onClick={calculateEstimates}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
              >
                Get Estimate
              </Button>
              <p className="text-red-600 text-sm mt-4">
                You're protected by Vidflyy's <span className="underline">money-back guarantee!</span>
              </p>
            </div>

            {/* Estimates Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Estimates</h3>
              <p className="text-gray-600 mb-6">(Based on targeting "All Countries")</p>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="border-l-4 border-blue-500 pl-4 py-3">
                  <h4 className="font-semibold text-gray-900">Views</h4>
                  <p className="text-lg font-bold text-gray-800">
                    {estimates.views || "Enter budget to see estimate"}
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-3">
                  <h4 className="font-semibold text-gray-900">Subscribers</h4>
                  <p className="text-lg font-bold text-gray-800">
                    {estimates.subscribers || "Enter budget to see estimate"}
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 py-3">
                  <h4 className="font-semibold text-gray-900">Likes</h4>
                  <p className="text-lg font-bold text-gray-800">
                    {estimates.likes || "Enter budget to see estimate"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="text-xl font-bold text-gray-900">
                Make your channel's <span className="text-blue-600">growth</span> a reality.
              </h4>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Start My Promotion Now
            </Button>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Estimates are based on historical data and are meant to provide a general idea of potential promotion performance. 
            Actual results may vary due to factors like video content quality and targeting accuracy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EstimateSection;
