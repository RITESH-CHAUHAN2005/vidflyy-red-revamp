
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917355518761', '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />
      
      {/* Contact Header */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            CONTACT US!
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in">
            Let's grow your YouTube channel together
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Request A Call</h2>
              <p className="text-gray-600 mb-8">
                Stop wasting your valuable time and start getting real results.
              </p>
              <p className="text-gray-600 mb-8">
                We're happy to answer any questions you may have about Video Promotion. For the fastest support, we recommend completing the form or sending us an email.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-600 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      1st Floor, Ramansind Trade Center, 3A, A, Karpoorshala Road,<br />
                      Lucknow, Uttar Pradesh 226024
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-600 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+91 7355518761</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-600 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@videopromotion.digital</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-red-50 p-8 rounded-2xl shadow-lg animate-fade-in">
              <form className="space-y-6">
                <div className="animate-fade-in">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <Input type="text" className="w-full border-2 border-gray-200 focus:border-red-500 rounded-xl transition-all duration-300 hover:scale-105" />
                </div>

                <div className="animate-fade-in">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <Input type="tel" className="w-full border-2 border-gray-200 focus:border-red-500 rounded-xl transition-all duration-300 hover:scale-105" />
                </div>

                <div className="animate-fade-in">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Video URL <span className="text-red-600">*</span>
                  </label>
                  <Input type="url" className="w-full border-2 border-gray-200 focus:border-red-500 rounded-xl transition-all duration-300 hover:scale-105" />
                </div>

                <div className="animate-fade-in">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <Input type="email" className="w-full border-2 border-gray-200 focus:border-red-500 rounded-xl transition-all duration-300 hover:scale-105" />
                </div>

                <div className="animate-fade-in">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea rows={4} className="w-full border-2 border-gray-200 focus:border-red-500 rounded-xl transition-all duration-300 hover:scale-105" />
                </div>

                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-red-600 hover:bg-red-700 text-white w-full py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  <span className="text-red-600">*</span> Required Fields
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
