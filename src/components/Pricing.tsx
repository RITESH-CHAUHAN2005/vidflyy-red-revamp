
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917355518761', '_blank');
  };

  const plans = [
    {
      name: "Starter",
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
      popular: false
    },
    {
      name: "Professional",
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
      popular: true
    },
    {
      name: "Enterprise",
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
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-red-600">Growth Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan to accelerate your YouTube channel growth with our proven promotion strategies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform relative overflow-hidden group ${plan.popular ? 'ring-2 ring-red-500' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Most Popular
                </div>
              )}
              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={handleWhatsAppClick}
                  className={`w-full py-3 text-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
                    plan.popular 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
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
