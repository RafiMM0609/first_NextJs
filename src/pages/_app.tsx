// src/pages/_app.tsx
//import '../styles/globals.css';
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component className={inter.className} {...pageProps} />
    </>
  );
};

export default MyApp;

