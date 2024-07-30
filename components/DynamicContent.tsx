'use client';

import React, { useState, useEffect } from 'react';
import Section from './Section';

interface DynamicContentProps {
  initialSections: SectionContent[];
}

const DynamicContent: React.FC<DynamicContentProps> = ({ initialSections }) => {
  const [sections, setSections] = useState(initialSections);

  useEffect(() => {
    // Fetch dynamic content here if needed
    // For example:
    // const fetchDynamicContent = async () => {
    //   const response = await fetch('/api/dynamic-content');
    //   const dynamicSection = await response.json();
    //   setSections(prev => [...prev, dynamicSection]);
    // };
    // fetchDynamicContent();
  }, []);

  return (
  <div className="max-w-7xl mx-auto">
    {/* New horizontally scrollable section */}
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Horizontally Scrollable Section</h2>
      <div className="h-[400px] overflow-x-auto overflow-y-hidden scrollbar-thin">
        <div className="flex gap-4 p-4 h-full">
          {/* Add your horizontally scrollable content here */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex-none w-[300px] h-full p-4 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 overflow-y-auto">
              <h3 className="text-xl font-semibold mb-2">Item {item}</h3>
              <p>This is the content for item {item}. It can scroll vertically if it overflows.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="contentWrapper">
      {sections.map((section, index) => (
        <Section key={index} content={section} className={section.className} />
      ))}
    </div>
  </div>
  );
};

export default DynamicContent;
