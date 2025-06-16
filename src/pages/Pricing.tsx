import Navbar from "@/components/Navbar";
import EstimateSection from "@/components/EstimateSection";
import PricingInfo from "@/components/PricingInfo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
  const subscriptionPlans = [
    {
      name: "Basic Subscription",
      price: "₹1,999",
      period: "per month",
      description: "Perfect for new creators",
      features: [
        "2 video promotions per month",
        "Basic targeting",
        "Email support",
        "Analytics dashboard",
        "Money-back guarantee"
      ],
      popular: false
    },
    {
      name: "Pro Subscription",
      price: "₹3,999",
      period: "per month",
      description: "Most popular choice",
      features: [
        "5 video promotions per month",
        "Advanced targeting",
        "Priority support",
        "Detailed analytics",
        "Custom strategy",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      name: "Enterprise Subscription",
      price: "₹7,999",
      period: "per month",
      description: "For serious creators",
      features: [
        "Unlimited video promotions",
        "Premium targeting",
        "24/7 support",
        "Advanced analytics",
        "Custom campaigns",
        "Channel optimization",
        "Monthly strategy calls"
      ],
      popular: false
    }
  ];

  const monetizationPlans = [
    {
      name: "Revenue Boost",
      price: "₹2,499",
      period: "per video",
      description: "Increase your earning potential",
      features: [
        "Monetization optimization",
        "Ad revenue boost",
        "Audience retention focus",
        "Revenue analytics",
        "Performance tracking"
      ],
      popular: false
    },
    {
      name: "Brand Partnership",
      price: "₹4,999",
      period: "per campaign",
      description: "Connect with brands",
      features: [
        "Brand collaboration setup",
        "Sponsored content promotion",
        "Partnership negotiations",
        "Campaign management",
        "Revenue optimization",
        "Brand matching"
      ],
      popular: true
    },
    {
      name: "Channel Monetization",
      price: "₹9,999",
      period: "per month",
      description: "Complete monetization solution",
      features: [
        "Full monetization strategy",
        "Multiple revenue streams",
        "Brand partnerships",
        "Merchandise promotion",
        "Affiliate marketing setup",
        "Revenue optimization",
        "Monthly consultations"
      ],
      popular: false
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917355518761', '_blank');
  };

  const PlanGrid = ({ plans, title }: { plans: any[], title: string }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{title}</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg relative animate-card-float ${plan.popular ? 'ring-2 ring-red-500 scale-105' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-medium animate-bounce-gentle">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-2 animate-text-slide-up">{plan.name}</h4>
              <p className="text-gray-600 mb-4 animate-text-fade-in">{plan.description}</p>
              <div className="mb-4 animate-price-scale">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3 animate-feature-slide-in" style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.1)}s` }}>
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 animate-check-bounce" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={handleWhatsAppClick}
              className={`w-full py-3 transition-all duration-300 hover:scale-105 active:scale-95 animate-button-pulse ${plan.popular ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
            >
              Choose Plan
            </Button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />
      
      {/* Hero Section for Pricing Page */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pricing <span className="text-red-600">Plans</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to grow your YouTube channel and maximize your reach.
          </p>
        </div>
      </section>

      <EstimateSection />
      
      {/* Subscription and Monetization Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-red-600">Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing plans designed to fit every creator's needs and budget.
            </p>
          </div>
          
          <PlanGrid plans={subscriptionPlans} title="Subscription Plans" />
          <PlanGrid plans={monetizationPlans} title="Monetization Plans" />
        </div>
      </section>

      <PricingInfo />
      <FAQ />
      <Footer />
    </div>
  );
};

export default PricingPage;
