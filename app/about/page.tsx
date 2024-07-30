import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import DynamicContent from '@/components/DynamicContent';
import dynamic from 'next/dynamic';
import VerticalScroll from '@/components/VerticalScroll';

const ClientMDXComponent = dynamic(() => import('@/components/cmdx'), { ssr: false });
async function getMdxContent() {
  const filePath = path.join(process.cwd(), 'test.mdx');
  const content = fs.readFileSync(filePath, 'utf-8');
  const mdxSource = await serialize(content);
  return mdxSource;
}

export default async function Page() {
  const mdxSource = await getMdxContent();

  const initialSections = [
    {
      title: "More About This Page",
      content: "This page provides information about the purpose and content of this website.",
      className: "leftText"
    },
    {
      title: "Additional Information",
      content: "This section contains additional details that complement the main content.",
      className: "rightText"
    },
    {
      title: "More About This Page",
      content: "This page provides information about the purpose and content of this website.",
      className: "leftText"
    },
    {
      title: "Additional Information",
      content: "This section contains additional details that complement the main content.",
      className: "rightText"
    },
    {
      title: "Additional Information",
      content: "This section contains additional details that complement the main content.",
      className: "rightText"
    },
    {
      title: "MDX Content",
      content: <ClientMDXComponent mdxSource={mdxSource} />,
      className: "rightText"
    }
  ];

  return (
  <div className="max-w-7xl mx-auto">
    {/* New horizontally scrollable section */}
    <div className="mb-8">
      <VerticalScroll />
    </div>
    <div className="contentWrapper">
      <DynamicContent initialSections={initialSections} /> 
    </div>
  </div>
  );
}
