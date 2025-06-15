
const Stats = () => {
  const stats = [
    { number: "50K+", label: "Videos Promoted", color: "text-red-600" },
    { number: "10M+", label: "Views Generated", color: "text-blue-600" },
    { number: "5K+", label: "Happy Creators", color: "text-green-600" },
    { number: "95%", label: "Success Rate", color: "text-purple-600" }
  ];

  return (
    <section className="py-20 bg-white font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Proven <span className="text-red-600">Results</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our track record speaks for itself
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
