
import { Play, Target, TrendingUp, Users, MessageCircle, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Play,
      title: "YouTube Video Promotion",
      description: "Get your videos in front of the right audience with our targeted promotion strategies."
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Reach viewers who are genuinely interested in your content and likely to subscribe."
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description: "Track your channel's growth with detailed analytics and performance insights."
    },
    {
      icon: Users,
      title: "Subscriber Growth",
      description: "Build a loyal subscriber base with our organic growth techniques."
    },
    {
      icon: MessageCircle,
      title: "Engagement Boost",
      description: "Increase likes, comments, and overall engagement on your videos."
    },
    {
      icon: Award,
      title: "Premium Support",
      description: "Get dedicated support from our team of YouTube growth experts."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
