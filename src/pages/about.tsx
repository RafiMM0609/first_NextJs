import React from 'react';
import styles from './about.module.css'; // Assuming you use CSS modules
import { GetServerSideProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface AboutPageProps {
  mdxSource: MDXRemoteSerializeResult;
}

const components = {
  // Define your custom components here
};

const AboutPage: React.FC<AboutPageProps> = ({ mdxSource }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className={styles.centerText}>
        <h1>About Page</h1>
        <p>This is my first attempt at front-end development. Bismillah!</p>
      </section>

      <div className={styles.contentWrapper}>
        <section className={styles.leftText}>
          <h2>More About This Page</h2>
          <p>
            This page provides information about the purpose and content of this
            website. It serves as an introduction to what users can expect to
            find and how they can navigate through the different sections.
          </p>
        </section>

        <section className={styles.rightText}>
          <h2>Additional Information</h2>
          <p>
            This section contains additional details that complement the main
            content. Here, you can provide further insights or supplementary
            information relevant to the page topic.
          </p>
        </section>
        <section className={styles.previewSection}>
          <h2>Preview from MDX Content</h2>
          <MDXRemote {...mdxSource} components={components} />
          <Link href="/trymd">
            Read more...
          </Link>
        </section>
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const filePath = path.join(process.cwd(), 'README.md');
  const markdown = fs.readFileSync(filePath, 'utf-8');
  const previewLength = 200; 
  const truncatedMarkdown = markdown.substring(0, previewLength);
  const mdxSource = await serialize(truncatedMarkdown);
  return {
    props: {
      mdxSource,
    },
  };
};


export default AboutPage;

