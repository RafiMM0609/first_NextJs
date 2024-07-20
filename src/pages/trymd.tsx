// pages/RemoteMdxPage.tsx

import { GetServerSideProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';
import fs from 'fs';
import path from 'path';

interface RemoteMdxPageProps {
  mdxSource: MDXRemoteSerializeResult;
}

const components = {
  // Define your custom components here
};

const RemoteMdxPage: React.FC<RemoteMdxPageProps> = ({ mdxSource }) => {
  return <MDXRemote {...mdxSource} components={components} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const filePath = path.join(process.cwd(), 'README.md');
  const markdown = fs.readFileSync(filePath, 'utf-8');
  const mdxSource = await serialize(markdown);

  return {
    props: {
      mdxSource,
    },
  };
};

export default RemoteMdxPage;

