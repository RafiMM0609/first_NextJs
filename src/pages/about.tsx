import React from 'react';
import styles from './about.module.css'; // Assuming you use CSS modules

const AboutPage: React.FC = () => {
  return (
    <main>
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
      </div>
    </main>
  );
};

export default AboutPage;

