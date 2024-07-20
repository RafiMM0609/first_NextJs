// src/pages/_app.tsx
//import '../styles/globals.css';
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

