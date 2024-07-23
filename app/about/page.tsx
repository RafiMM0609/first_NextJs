import dynamic from 'next/dynamic';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

// Dynamically import the client component
const ClientMDXComponent = dynamic(() => import('../cmdx'), { ssr: false });

async function fetchMdxContent(): Promise<MDXRemoteSerializeResult> {
  const filePath = path.join(process.cwd(), 'test.mdx');
  const content = fs.readFileSync(filePath, 'utf-8');
  const mdxSource = await serialize(content);
  return mdxSource;
}


export default async function AboutPage() {
  const mdxSource = await fetchMdxContent();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="centerText">
        <h1>About Page</h1>
        <p>This is my first attempt at front-end development. Bismillah!</p>
      </section>
      <div className="contentWrapper">
        <section className="leftText">
          <h2>More About This Page</h2>
          <p>
            This page provides information about the purpose and content of this
            website. It serves as an introduction to what users can expect to
            find and how they can navigate through the different sections.
          </p>
        </section>
        <section className="rightText">
          <h2>Additional Information</h2>
          <p>
            This section contains additional details that complement the main
            content. Here, you can provide further insights or supplementary
            information relevant to the page topic.
          </p>
        </section>
        <section className="rightText">
          <h2>Preview content</h2>
          <ClientMDXComponent mdxSource={mdxSource} />
          <Link href="/mdx">
            Read More...
          </Link>
        </section>
      </div>
    </main>
  );
}

