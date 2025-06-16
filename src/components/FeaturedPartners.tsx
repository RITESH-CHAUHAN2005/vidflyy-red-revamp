
const FeaturedPartners = () => {
  return (
    <section className="py-16 bg-white font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            YOUR ACCOUNT AND PAYMENTS ARE <span className="text-red-600">SECURED BY</span>
          </h2>
        </div>
        
        <div className="flex items-center justify-center flex-wrap gap-8 lg:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {/* Norton Secured */}
          <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-yellow-800 font-bold text-sm">✓</span>
            </div>
            <span className="text-gray-700 font-medium">Norton Secured</span>
          </div>
          
          {/* Verified by VISA */}
          <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">VISA</span>
            </div>
            <span className="text-gray-700 font-medium">Verified by VISA</span>
          </div>
          
          {/* MasterCard SecureCode */}
          <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">MC</span>
            </div>
            <span className="text-gray-700 font-medium">MasterCard SecureCode</span>
          </div>
          
          {/* SafeKey */}
          <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">SK</span>
            </div>
            <span className="text-gray-700 font-medium">SafeKey</span>
          </div>
          
          {/* SSL Secured */}
          <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
            <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">SSL</span>
            </div>
            <span className="text-gray-700 font-medium">SSL Secured</span>
          </div>
          
          {/* UPI */}
          <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
            <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">UPI</span>
            </div>
            <span className="text-gray-700 font-medium">UPI Payments</span>
          </div>
          
          {/* PayU */}
          <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">PayU</span>
            </div>
            <span className="text-gray-700 font-medium">Secured by PayU</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPartners;
