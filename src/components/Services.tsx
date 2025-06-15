
import { Play, Target, TrendingUp, Users, MessageCircle, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Play,
      title: "YouTube Video Promotion",
      description: "Get your videos in front of the right audience with our targeted promotion strategies.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Reach viewers who are genuinely interested in your content and likely to subscribe.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description: "Track your channel's growth with detailed analytics and performance insights.",
      gradient: "from-purple-500 to-red-500"
    },
    {
      icon: Users,
      title: "Subscriber Growth",
      description: "Build a loyal subscriber base with our organic growth techniques.",
      gradient: "from-blue-500 to-red-500"
    },
    {
      icon: MessageCircle,
      title: "Engagement Boost",
      description: "Increase likes, comments, and overall engagement on your videos.",
      gradient: "from-green-500 to-red-500"
    },
    {
      icon: Award,
      title: "Premium Support",
      description: "Get dedicated support from our team of YouTube growth experts.",
      gradient: "from-indigo-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive YouTube promotion services designed to help your channel grow organically and reach its full potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105 transform">
              <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              
              {/* Hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
