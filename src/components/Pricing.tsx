
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹799",
      period: "per video",
      description: "Perfect for new creators",
      features: [
        "1,000 - 5,000 views",
        "Basic targeting",
        "7-day promotion",
        "Analytics report",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "₹1,499",
      period: "per video",
      description: "Most popular choice",
      features: [
        "5,000 - 15,000 views",
        "Advanced targeting",
        "14-day promotion",
        "Detailed analytics",
        "Priority support",
        "Subscriber boost"
      ],
      popular: true
    },
    {
      name: "Pro",
      price: "₹2,999",
      period: "per video",
      description: "For serious creators",
      features: [
        "15,000 - 50,000 views",
        "Premium targeting",
        "30-day promotion",
        "Advanced analytics",
        "24/7 support",
        "Engagement boost",
        "Custom strategy"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-red-600">Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Affordable pricing plans designed to fit every creator's needs and budget.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg relative ${plan.popular ? 'ring-2 ring-red-600 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
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
                className={`w-full py-3 ${plan.popular ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
