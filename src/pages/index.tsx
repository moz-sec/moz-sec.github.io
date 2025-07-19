import Head from "next/head";

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
        <title>moz-sec</title>
        <meta
          name="description"
          content="mozのホームページへようこそ。ネットワークとセキュリティの沼に浸かっています。"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        {/* Open Graph  */}
        <meta property="og:url" content="https://moz-sec.com/index.html" />
        <meta
          property="og:image"
          content="https://moz-sec.com/image/hello_world.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="moz-sec" />
        <meta
          property="og:description"
          content="mozのホームページへようこそ。ネットワークとセキュリティの沼に浸かっています。"
        />
        <meta property="og:locale" content="ja_JP" />

        {/* Twitter Card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@moz_sec_" />

        {/* Facebook  */}
        <meta property="fb:app_id" content="907921083813066" />
      </Head>

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
