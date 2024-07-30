import React from 'react';
import Link from 'next/link';

interface SectionProps {
  content: {
    title: string;
    content: string | React.ReactNode;
    className?: string;
    link?: {
      text: string;
      href: string;
    };
  };
  className?: string;
}

const Section: React.FC<SectionProps> = ({ content, className }) => {
  return (
    <section className={className}>
      <h2>{content.title}</h2>
        {typeof content.content === 'string' ? <p>{content.content}</p> : content.content}
        {content.link && (
          <Link href={content.link.href}>
            {content.link.text}
            </Link>
        )}
      </section>
  );
};

export default Section;
