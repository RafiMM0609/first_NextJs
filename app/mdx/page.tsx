import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';
import fs from 'fs';
import path from 'path';
import dynamic from 'next/dynamic';

const ClientMDXComponent = dynamic(() => import('../cmdx'), { ssr: false });

const components = {
  // Define your custom components here
};

async function fetchMdxContent(): Promise<MDXRemoteSerializeResult> {
  const filePath = path.join(process.cwd(), 'test.mdx');
  const content = fs.readFileSync(filePath, 'utf-8');
  const mdxSource = await serialize(content);
  return mdxSource;
}

export default async function AboutPage() {
  const mdxSource = await fetchMdxContent();
  return (
    <div>
      <ClientMDXComponent mdxSource={mdxSource} />
    </div>
  )
}
