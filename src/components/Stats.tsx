
import { useState, useEffect, useRef } from "react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { number: 50000, suffix: "K+", label: "Videos Promoted", color: "text-red-600" },
    { number: 10000000, suffix: "M+", label: "Views Generated", color: "text-blue-600" },
    { number: 5000, suffix: "K+", label: "Happy Creators", color: "text-green-600" },
    { number: 95, suffix: "%", label: "Success Rate", color: "text-purple-600" }
  ];

  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let startTime: number;
        const duration = 2000; // 2 seconds
        const startValue = 0;
        const endValue = stat.number;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

          setAnimatedNumbers(prev => {
            const newNumbers = [...prev];
            newNumbers[index] = currentValue;
            return newNumbers;
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        // Delay each animation slightly
        setTimeout(() => {
          requestAnimationFrame(animate);
        }, index * 200);
      });
    }
  }, [isVisible]);

  const formatNumber = (num: number, originalStat: any) => {
    if (originalStat.suffix === "M+") {
      return (num / 1000000).toFixed(num >= 1000000 ? 0 : 1);
    } else if (originalStat.suffix === "K+") {
      return (num / 1000).toFixed(num >= 1000 ? 0 : 1);
    }
    return num.toString();
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white font-montserrat relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-50 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-blue-50 rounded-full opacity-30 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-50 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-purple-50 rounded-full opacity-25 animate-morph"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Proven <span className="text-red-600 animate-gradient bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in-delay">
            Our track record speaks for itself
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform border border-gray-100 hover:border-red-200 relative overflow-hidden">
                {/* Background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/0 to-red-50/0 group-hover:from-gray-50/30 group-hover:to-red-50/20 transition-all duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2 animate-scale-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                    {formatNumber(animatedNumbers[index], stat)}{stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium animate-slide-up" style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
