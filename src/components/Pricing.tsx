
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917355518761', '_blank');
  };

  const plans = [
    {
      name: "Trial",
      subtitle: "YouTube Advertising",
      price: "₹799",
      originalPrice: "₹999",
      views: "5,000 VIEWS",
      features: ["Likes", "Comments", "Subscribers", "Engagement"],
      popular: false,
      gradient: "from-red-500 to-red-600"
    },
    {
      name: "Trust", 
      subtitle: "YouTube Advertising",
      price: "₹1499",
      originalPrice: "₹1999",
      views: "10,000 VIEWS",
      features: ["Likes", "Comments", "Subscribers", "Engagement"],
      popular: true,
      gradient: "from-red-600 to-red-700"
    },
    {
      name: "Expert",
      subtitle: "YouTube Advertising", 
      price: "₹5999",
      originalPrice: "₹7999",
      views: "50,000 VIEWS",
      features: ["Likes", "Comments", "Subscribers", "Engagement"],
      popular: false,
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 font-montserrat relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-red-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-red-50 rounded-full opacity-25 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Animation */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-5 left-10 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-12 right-20 w-6 h-6 bg-red-600 rounded-full animate-bounce"></div>
            <div className="absolute bottom-5 left-32 w-10 h-10 bg-red-400 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 relative z-10">
            Choose Your <span className="text-red-600">Growth Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto relative z-10">
            We Advertise Your YouTube Video Through YouTube Advertising & Help You Achieve Real & Engaging Subscribers For Your Channel
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative group">
              {plan.popular && (
                <div className="absolute -top-4 right-4 z-20">
                  <div className="bg-black text-white px-4 py-1 rounded-full text-sm font-bold transform rotate-12">
                    POPULAR
                  </div>
                </div>
              )}
              
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform overflow-hidden">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${plan.gradient} p-6 text-white text-center`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-red-100">{plan.subtitle}</p>
                </div>
                
                {/* Price section */}
                <div className="p-8 text-center">
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-600 mb-8">{plan.views}</div>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="h-5 w-5 text-gray-400">
                          {feature === "Likes" && "👍"}
                          {feature === "Comments" && "💬"}
                          {feature === "Subscribers" && "👥"}
                          {feature === "Engagement" && "😊"}
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    BUY NOW
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
