
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
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm">
        {Math.round(scrollProgress)}%
      </div>
      <div className="absolute inset-0 bg-red-200 rounded-full">
        <div 
          className="bg-red-600 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollProgress;
