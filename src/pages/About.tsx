
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />
      
      {/* About Us Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Professional Expert Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&crop=faces" 
                alt="Professional Team" 
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Professional And Certified YouTube Ads Expert
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Welcome to VidFlyy, your business can count for video marketing & promotion. We're dedicated to delivering top-notch expert service, with an emphasis on technical engagement, subscribers, views and quality.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Established in 2016 by Vids Man, VidFlyy Promotion has made a long term to a beginning in YouTube. When we first started, our passion for YouTube drove us to start our own YouTube Marketing company.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Responsible Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">24x7 Dedicated Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">100% Guaranteed Channel Growth</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are a team of experts who provides first class service to customers, satisfaction & promotions to your YouTube channel. We are looking forward to serving to others and promote more content creators to make their goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real & Engaging Audience</h3>
              <p className="text-gray-600">
                We Real ads ads we can search, collect 50% of the clients from from that are viewed and engaging audience of your YouTube Channel promotion.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reasonable Price Guaranteed</h3>
              <p className="text-gray-600">
                We provide you the most end affordable service for your YouTube Channel. Our best business plan is really reasonable.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24 x 7 Dedicated Support</h3>
              <p className="text-gray-600">
                We're happy to answer any questions that may have regarding Video Promotion. We are available 24 x 7 for any assistance & support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our mission is to provided you the best YouTube services at affordable price so that your channel can reach to millions of users worldwide.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
