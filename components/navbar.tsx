// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
//import { useRouter } from 'next/router';
import styles from './Navbar.module.css'; // Assuming you use CSS modules

const Navbar: React.FC = () => {
  //const { pathname } = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={`${styles.navItem} ${'/' ? styles.active : ''}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${styles.navItem} ${'/about' ? styles.active : ''}`}>
          <Link href="/about">About</Link>
        </li>
        <li className={`${styles.navItem} ${'/login' ? styles.active : ''}`}>
          <Link href="/login">Login</Link>
        </li>
        <li className={`${styles.navItem} ${'/mdx' ? styles.active : ''}`}>
          <Link href="/mdx">MDX</Link>
        </li>
        <li className={`${styles.navItem} ${'/article' ? styles.active : ''}`}>
          <Link href="/article">Article</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;


