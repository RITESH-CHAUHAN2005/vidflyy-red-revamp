
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const basicPlans = [
    {
      name: "Basic",
      price: "₹799",
      period: "per video",
      description: "Perfect for new creators",
      features: [
        "1,000-5,000 targeted views",
        "Real audience engagement",
        "Basic analytics",
        "Email support",
        "Money-back guarantee"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "₹1,999",
      period: "per video",
      description: "Most popular choice",
      features: [
        "5,000-15,000 targeted views",
        "Advanced targeting",
        "Priority support",
        "Detailed analytics",
        "Custom strategy",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "₹4,999",
      period: "per video",
      description: "For serious creators",
      features: [
        "15,000-50,000 targeted views",
        "Premium targeting",
        "24/7 support",
        "Advanced analytics",
        "Custom campaigns",
        "Channel optimization"
      ],
      popular: false
    }
  ];

  const subscriptionPlans = [
    {
      name: "Creator",
      price: "₹2,999",
      period: "per month",
      description: "For growing channels",
      features: [
        "5 video promotions/month",
        "10,000+ views per video",
        "Priority support",
        "Advanced analytics",
        "Custom thumbnails"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "₹9,999",
      period: "per month",
      description: "For established creators",
      features: [
        "15 video promotions/month",
        "25,000+ views per video",
        "24/7 dedicated support",
        "Advanced targeting",
        "Brand partnerships"
      ],
      popular: true
    }
  ];

  const monetizationPlans = [
    {
      name: "Revenue Boost",
      price: "₹5,999",
      period: "per month",
      description: "Maximize ad revenue",
      features: [
        "Revenue optimization",
        "Ad placement strategy",
        "CPM improvement",
        "Analytics tracking",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Channel Growth",
      price: "₹12,999",
      period: "per month",
      description: "Complete monetization",
      features: [
        "Full channel management",
        "Sponsorship opportunities",
        "Brand collaborations",
        "Revenue streams setup",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917355518761', '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-red-600">Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing plans designed to fit every creator's needs and budget.
          </p>
        </div>
        
        {/* Basic Plans */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Basic Plans</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {basicPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg relative hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer ${plan.popular ? 'ring-2 ring-red-600 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium animate-pulse">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={handleWhatsAppClick}
                  className={`w-full py-3 transition-all duration-300 hover:scale-105 active:scale-95 ${plan.popular ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}`}
                >
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Subscription Plans</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {subscriptionPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg relative hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer ${plan.popular ? 'ring-2 ring-red-600' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium animate-pulse">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Monetization Plans */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Monetization Plans</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {monetizationPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
