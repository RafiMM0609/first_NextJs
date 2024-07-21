// pages/RemoteMdxPage.tsx

import { GetServerSideProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';
import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next'
//import ExampleComponent from './example'

const components = {
  // Define your custom components here
};

interface Props {
  mdxSource: MDXRemoteSerializeResult
}

export default function ExamplePage({ mdxSource }: Props) {
  return (
    <div>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult
}> = async () => {
  const filePath = path.join(process.cwd(), 'README.md');
  const markdown = fs.readFileSync(filePath, 'utf-8');
  const mdxSource = await serialize(markdown)
  return { props: { mdxSource } }
}
