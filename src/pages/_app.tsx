// src/pages/_app.tsx
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { Inter } from "next/font/google";
import "./globals.css";
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

