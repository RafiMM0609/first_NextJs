'use client'; 
import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface ClientMDXComponentProps {
  mdxSource: MDXRemoteSerializeResult;
}

const ClientMDXComponent: React.FC<ClientMDXComponentProps> = ({ mdxSource }) => {
  return (
    <div>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export default ClientMDXComponent;

