import Head from "next/head";
import Script from "next/script";
import About from "./components/About";
import Skills from "./components/Skill";
import Navbar from "./components/NavBar";
import Background from "./components/Background";
import Interest from "./components/Interest";
import Links from "./components/Link";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <>
      <Head>
        <title>moz_sec_</title>
        <meta
          name="description"
          content="mozのホームページです。ネットワークやセキュリティを勉強しています。"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no,"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:url" content="https://moz-sec.com/index.html" />
        <meta
          property="og:image"
          content="https://moz-sec.com/image/hello_world.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="moz-sec HOME" />
        <meta
          property="og:description"
          content="mozのホームページです。ネットワークやセキュリティを勉強しています。"
        />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@moz_sec_" />
        <meta property="fb:app_id" content="907921083813066" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#bbc0e4" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtm.js?id=GTM-K2MF784"
        strategy="afterInteractive"
      />
      <Script
        src="https://kit.fontawesome.com/0f38bfd7d6.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0ZQV7CECY7"
        strategy="afterInteractive"
      />
      <Script id="ga-inline" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0ZQV7CECY7');
      `}
      </Script>

      <main>
        <Navbar />
        <About />
        <Profile />
        <Interest />
        <Links />
        <Skills />
        <Background />
      </main>
    </>
  );
}
