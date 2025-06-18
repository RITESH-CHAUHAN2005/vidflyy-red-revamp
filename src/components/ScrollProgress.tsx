
import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-1">
        <div 
          className="bg-red-600 h-full transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      {/* Percentage Indicator */}
      <div className="absolute bottom-2 right-4">
        <div className="bg-red-600 text-white px-3 py-1 rounded-full shadow-lg font-semibold text-sm">
          {Math.round(scrollProgress)}%
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress;
