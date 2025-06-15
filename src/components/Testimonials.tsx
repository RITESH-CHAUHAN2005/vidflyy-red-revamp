
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Tech Content Creator",
      content: "Vidflyy transformed my channel completely. From 1K to 50K subscribers in just 3 months with their targeted promotion strategy. The quality of engagement is incredible!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      metrics: "1K → 50K Subscribers"
    },
    {
      name: "Priya Patel",
      role: "Lifestyle & Beauty Influencer",
      content: "Best investment I made for my channel growth. Real views from genuine audience, consistent engagement, and professional support throughout the journey.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b282?w=100&h=100&fit=crop&crop=face",
      metrics: "300% Engagement Boost"
    },
    {
      name: "Amit Kumar",
      role: "Gaming Content Creator",
      content: "Finally found a service that actually delivers results. My gaming videos are now reaching the right audience and my subscriber count is growing daily.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      metrics: "5M+ Views Generated"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our <span className="text-red-600">Creators</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real creators who transformed their channels with Vidflyy
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-full -mr-10 -mt-10 group-hover:bg-red-100 transition-colors duration-500"></div>
              <Quote className="absolute top-6 right-6 h-8 w-8 text-red-200 group-hover:text-red-300 transition-colors duration-500" />
              
              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial content */}
              <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                "{testimonial.content}"
              </p>
              
              {/* Metrics badge */}
              <div className="bg-red-50 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold mb-6 inline-block">
                {testimonial.metrics}
              </div>
              
              {/* Creator info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-red-100"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-red-600 font-medium">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
