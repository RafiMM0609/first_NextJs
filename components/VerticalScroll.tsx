'use client';

import React, {useRef} from 'react';

const VerticalScroll: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.scrollWidth / 3; // Adjust as needed
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Horizontally Scrollable Section</h2>
       <div className="relative scrollbar-hidden h-[400px] overflow-x-auto overflow-y-hidden">
          {/* Button left */}
          <button
            onClick={() => scrollByAmount('left')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300"
          >
            &lt;
          </button>
          {/* Content (with ref) */}
          <div
            ref={scrollRef}
            className="h-full overflow-x-auto overflow-y-hidden scrollbar-hidden flex gap-4 p-4"
          >
            <div className="flex gap-4 p-4 h-full">
              {/* Add your horizontally scrollable content here */}
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex-none w-[800px] h-full p-4 rounded-lg overflow-y-auto bg-custom-gradient">
                  <h3 className="text-xl font-semibold mb-2">Item {item}</h3>
                  <p>This is the content for item {item}. It can scroll vertically if it overflows.</p>
                </div>
              ))}
            </div>
          </div>
          {/* Button right */}
          <button
            onClick={() => scrollByAmount('right')}
         className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300" 
          >
            &gt;
          </button> 
        </div>
      </div>
  );
};

export default VerticalScroll;
