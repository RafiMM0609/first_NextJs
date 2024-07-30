import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import DynamicContent from '@/components/DynamicContent';
import dynamic from 'next/dynamic';
import VerticalScrollClient from '@/components/VerticalScrollClient';
import VerticalScrollServer from '@/components/VerticalScrollServer';

const ClientMDXComponent = dynamic(() => import('@/components/cmdx'), { ssr: false });
async function getMdxContent() {
  const filePath = path.join(process.cwd(), 'test.mdx');
  const content = fs.readFileSync(filePath, 'utf-8');
  const mdxSource = await serialize(content);
  return mdxSource;
}

export default async function Page() {
  const mdxSource = await getMdxContent();
  const initialVerScrol = ["TextFree (formerly called Pinger and sometimes stylized as textfree) is a mobile application and web service that allows users to send and receive text messages, as well as make and receive VoIP phone calls, for free over the internet. The service costs nothing because it is supported by ads, but users have the option of paying for an ad-free version with enhanced features. TextFree was developed by American telecommunications provider Pinger, Inc. It was released in 2006.","TextFree (formerly called Pinger and sometimes stylized as textfree) is a mobile application and web service that allows users to send and receive text messages, as well as make and receive VoIP phone calls, for free over the internet. The service costs nothing because it is supported by ads, but users have the option of paying for an ad-free version with enhanced features. TextFree was developed by American telecommunications provider Pinger, Inc. It was released in 2006.","TextFree (formerly called Pinger and sometimes stylized as textfree) is a mobile application and web service that allows users to send and receive text messages, as well as make and receive VoIP phone calls, for free over the internet. The service costs nothing because it is supported by ads, but users have the option of paying for an ad-free version with enhanced features. TextFree was developed by American telecommunications provider Pinger, Inc. It was released in 2006.","TextFree (formerly called Pinger and sometimes stylized as textfree) is a mobile application and web service that allows users to send and receive text messages, as well as make and receive VoIP phone calls, for free over the internet. The service costs nothing because it is supported by ads, but users have the option of paying for an ad-free version with enhanced features. TextFree was developed by American telecommunications provider Pinger, Inc. It was released in 2006."]
  const initialSections = [
    {
      title: "More About This Page",
      content: "This page provides information about the purpose and content of this website.",
      className: "bg-custom-gradient leftText"
    },
    {
      title: "Additional Information",
      content: "This section contains additional details that complement the main content.",
      className: "bg-custom-gradient rightText"
    },
    {
      title: "More About This Page",
      content: "This page provides information about the purpose and content of this website.",
      className: "bg-custom-gradient leftText"
    },
    {
      title: "Additional Information",
      content: "This section contains additional details that complement the main content.",
      className: "bg-custom-gradient rightText"
    },
    {
      title: "Additional Information",
      content: "This section contains additional details that complement the main content.",
      className: "bg-custom-gradient rightText"
    },
    {
      title: "MDX Content",
      content: <ClientMDXComponent mdxSource={mdxSource} />,
      className: "bg-custom-gradient rightText"
    }
  ];

  return (
  <div className="max-w-7xl mx-auto">
    {/* New horizontally scrollable section */}
    <>
      <VerticalScrollClient initialValue={initialVerScrol} />
    </>
    <>
      <VerticalScrollServer initialValue={initialVerScrol} />
    </>
    <div className="contentWrapper">
      <DynamicContent initialSections={initialSections} /> 
    </div>
  </div>
  );
}
