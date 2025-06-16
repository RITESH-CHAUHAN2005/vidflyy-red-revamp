
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917355518761', '_blank');
  };

  const handleViewPackages = () => {
    navigate('/pricing');
  };

  const plans = [
    {
      name: "Trial Package",
      subtitle: "Perfect for Beginners",
      price: "₹799",
      originalPrice: "₹999",
      views: "5,000 Targeted Views",
      features: [
        "Real audience engagement",
        "Organic likes & comments", 
        "Quality subscribers",
        "24/7 support",
        "Money-back guarantee"
      ],
      popular: false,
      gradient: "from-red-500 to-red-600",
      badge: "STARTER"
    },
    {
      name: "Trust Package", 
      subtitle: "Most Popular Choice",
      price: "₹1,499",
      originalPrice: "₹1,999",
      views: "10,000 Targeted Views",
      features: [
        "Premium targeting options",
        "Enhanced engagement",
        "Priority customer support",
        "Detailed analytics report",
        "Growth strategy consultation"
      ],
      popular: true,
      gradient: "from-red-600 to-red-700",
      badge: "BESTSELLER"
    },
    {
      name: "Expert Package",
      subtitle: "For Serious Creators", 
      price: "₹5,999",
      originalPrice: "₹7,999",
      views: "50,000 Targeted Views",
      features: [
        "Advanced demographic targeting",
        "Multi-platform promotion",
        "Dedicated account manager",
        "Custom campaign strategy",
        "Monthly performance reviews"
      ],
      popular: false,
      gradient: "from-red-500 to-red-600",
      badge: "PROFESSIONAL"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white font-montserrat relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-red-200 rounded-full opacity-30 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-red-50 rounded-full opacity-25 animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Enhanced Animation */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-5 left-10 w-8 h-8 bg-red-500 rounded-full animate-morph"></div>
            <div className="absolute top-12 right-20 w-6 h-6 bg-red-600 rounded-full animate-float-delayed"></div>
            <div className="absolute bottom-5 left-32 w-10 h-10 bg-red-400 rounded-full animate-scale-pulse"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 relative z-10 animate-fade-in">
            Choose Your <span className="text-red-600 animate-gradient bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Growth Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto relative z-10 animate-fade-in-delay">
            Professional YouTube advertising solutions designed to deliver real results and sustainable growth for your channel
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div key={index} className="relative group">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-gentle">
                    🔥 MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform overflow-hidden card-hover-effect ${plan.popular ? 'ring-2 ring-red-500' : ''}`}>
                {/* Enhanced Header with gradient */}
                <div className={`bg-gradient-to-br ${plan.gradient} p-8 text-white text-center relative overflow-hidden`}>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {plan.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-red-100 font-medium">{plan.subtitle}</p>
                  
                  {/* Enhanced Price Display */}
                  <div className="mt-6 mb-4">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <div className="text-right">
                        <span className="text-lg text-red-200 line-through block">{plan.originalPrice}</span>
                        <span className="text-green-300 text-sm font-semibold">Save 20%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 mt-4">
                    <span className="text-lg font-bold">{plan.views}</span>
                  </div>
                </div>
                
                {/* Enhanced Features Section */}
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-300">
                        <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={handleWhatsAppClick}
                    className={`w-full py-4 text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    🚀 GET STARTED NOW
                  </Button>
                  
                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-500">✅ 30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            onClick={handleViewPackages}
            variant="outline" 
            className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
          >
            📋 View All Packages & Details
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
