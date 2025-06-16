
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917355518761', '_blank');
  };

  const plans = [
    {
      name: "Starter Plan",
      price: "$29",
      period: "/month",
      description: "Perfect for new YouTubers starting their journey",
      features: [
        "5,000 targeted views",
        "50 organic subscribers",
        "Basic analytics dashboard", 
        "Email support",
        "Campaign optimization"
      ],
      buttonText: "Start Growing",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Professional Plan", 
      price: "$79",
      period: "/month",
      description: "Ideal for content creators looking to scale",
      features: [
        "25,000 targeted views",
        "250 organic subscribers", 
        "Advanced analytics",
        "Priority support",
        "A/B testing campaigns",
        "Custom targeting options"
      ],
      buttonText: "Scale Up",
      gradient: "from-red-500 to-red-600"
    },
    {
      name: "Enterprise Plan",
      price: "$199", 
      period: "/month",
      description: "For established channels seeking rapid growth",
      features: [
        "100,000 targeted views",
        "1,000 organic subscribers",
        "Dedicated account manager", 
        "24/7 phone support",
        "Custom campaign strategies",
        "Multi-platform promotion",
        "Detailed ROI reports"
      ],
      buttonText: "Go Enterprise",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      name: "Subscription Plan",
      price: "$49",
      period: "/month", 
      description: "Recurring monthly growth for consistent results",
      features: [
        "15,000 targeted views monthly",
        "150 organic subscribers monthly",
        "Monthly strategy calls",
        "Performance tracking",
        "Content optimization tips",
        "Cancel anytime"
      ],
      buttonText: "Subscribe Now",
      gradient: "from-green-500 to-green-600"
    },
    {
      name: "Monetization Plan",
      price: "$0.02",
      period: "/view",
      description: "Pay only for the views you get - perfect for budget control",
      features: [
        "Pay per view model",
        "Minimum 1,000 views",
        "Quality guaranteed views", 
        "Real-time tracking",
        "No monthly commitments",
        "Flexible budget control"
      ],
      buttonText: "Pay Per View",
      gradient: "from-orange-500 to-orange-600"
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
            Select the perfect plan to accelerate your YouTube channel growth with our proven promotion strategies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform relative overflow-hidden group">
              <div className="p-6">
                {/* Plan header with gradient */}
                <div className={`bg-gradient-to-r ${plan.gradient} rounded-xl p-4 mb-6 text-white`}>
                  <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">{plan.price}</span>
                    <span className="text-sm opacity-90">{plan.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full py-2 text-sm transition-all duration-300 hover:scale-105 active:scale-95 bg-red-600 hover:bg-red-700 text-white animate-button"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
