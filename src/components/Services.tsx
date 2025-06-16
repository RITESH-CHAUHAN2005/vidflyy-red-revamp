
import { Play, Target, TrendingUp, Users, MessageCircle, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Play,
      title: "YouTube Video Promotion",
      description: "Strategic promotion campaigns that place your content in front of audiences actively searching for your niche, driving organic growth and meaningful engagement.",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Target,
      title: "Precision Audience Targeting",
      description: "Advanced demographic and interest-based targeting ensures your content reaches viewers most likely to subscribe and engage with your channel.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics & Insights",
      description: "Comprehensive analytics dashboard providing real-time data on campaign performance, audience behavior, and growth metrics.",
      gradient: "from-purple-500 to-red-500"
    },
    {
      icon: Users,
      title: "Organic Subscriber Growth",
      description: "Build a loyal, engaged subscriber base through authentic promotion strategies that attract genuinely interested viewers to your content.",
      gradient: "from-blue-500 to-red-500"
    },
    {
      icon: MessageCircle,
      title: "Engagement Optimization",
      description: "Increase meaningful interactions including likes, comments, and shares through targeted promotion to highly engaged audiences.",
      gradient: "from-green-500 to-red-500"
    },
    {
      icon: Award,
      title: "Dedicated Success Manager",
      description: "Get personalized support from our team of YouTube growth experts who understand your niche and optimization goals.",
      gradient: "from-indigo-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white font-montserrat relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-50 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-red-100 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-red-50 rounded-full opacity-20 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Professional <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive YouTube promotion services designed to accelerate your channel growth through strategic, data-driven campaigns.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group hover:scale-105 transform border border-gray-100 hover:border-red-100 relative overflow-hidden">
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-100/0 group-hover:from-red-50/30 group-hover:to-red-100/20 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
