import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React from 'react';

import Footer from 'components/Footertemp';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import WaveCta from 'components/WaveCta';
import { NavItems } from 'types';

const navItems: NavItems = [
  { title: 'Clusters', href: '#clusters' },
  { title: 'Events', href: '#events' },
  { title: 'FAQ', href: '#faq-section' },
  { title: 'Contact', href: '#footer', outlined: true },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      <ColorModeScript />
      <GlobalStyle />

      <Navbar items={navItems} />

      <Component {...pageProps} />
      <WaveCta />
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
