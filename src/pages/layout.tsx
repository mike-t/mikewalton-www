import Head from "next/head";
import { Bangers, Source_Sans_3, Hepta_Slab, Source_Code_Pro } from 'next/font/google';
//import Navbar from './navbar';
//import Footer from './footer';
 
// fonts
// special
const bangers = Bangers({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-bangers',
    display: 'swap',
});
  
// sans
const source_sans_3 = Source_Sans_3({ 
  subsets: ['latin'],  
  variable: '--font-source-sans-3',
});

// serif
const hepta_slab = Hepta_Slab({ 
  subsets: ['latin'],  
  variable: '--font-hepta-slab',
});

// mono
const source_code_pro = Source_Code_Pro({ 
  subsets: ['latin'],  
  variable: '--font-source_code_pro',
});
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`font-sans`}>
      <Head>
        <title>Mike Walton - Dev Manager</title>
        <meta name="description" content="Just the porftolio of a guy living in Brisbane who loves devops and all things tech." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>  
      <main>{children}</main>
    </html>
  );
}