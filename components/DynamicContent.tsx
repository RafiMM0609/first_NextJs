'use client';

import React, { useState, useEffect} from 'react';
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
    <div className="contentWrapper">
      {sections.map((section, index) => (
        <Section key={index} content={section} className={section.className} />
      ))}
    </div>
  );
};

export default DynamicContent;
