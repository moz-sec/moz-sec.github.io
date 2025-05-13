import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

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
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,700,400"
          rel="stylesheet"
        />
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
      <header>
        <h1 id="logo">
          <a href="https://moz-sec.com/index.html">
            <Image src="/image/top.png" alt="Moz" width={200} height={60} />
          </a>
        </h1>
      </header>
      <div id="main">
        {/* mainVisual */}
        <div id="mainVisual">
          <div className="pc">
            <Image
              src="/image/hello_world.png"
              alt=" "
              width={600}
              height={300}
            />
          </div>
          <div className="sp">
            <Image
              src="/image/hello_world.png"
              alt=" "
              width={600}
              height={300}
            />
          </div>
        </div>
        {/* about */}
        <section id="about" className="cf">
          <h2 className="ttl">About</h2>
          <ul className="text">
            <li>
              <i className="fa-solid fa-signature"></i> 小林 舜 Kobayashi Shun
            </li>
            <li>
              <i className="fa-solid fa-house"></i> 京都市
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              <a href="mailto:shun123k@gmail.com"> shun123k@gmail.com</a>
            </li>
            <li>
              <a
                href="https://twitter.com/moz_sec_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i> @moz_sec_
              </a>
            </li>
          </ul>
        </section>
        {/* profile */}
        <section id="interest" className="cf">
          <h2 className="ttl">Profile</h2>
          <div>
            <p>
              京都産業大学大学院で先端情報学を専攻しており、コンピュータサイエンスを学んでいます。
            </p>
            <p>
              研究内容はネットワークやセキュリティですが、個人でWebアプリケーションを開発しています。1つの分野に絞るわけではなく、OSからWebアプリケーションまで、おもしろいと思った技術にはとことん手を出していくスタイルです。
            </p>
            <p>趣味で、Hack The Boxや自作PC、お家k8sをやっています。</p>
            <p>
              情報系の資格としては、基本情報技術者（FE）、応用情報技術者（AP）、情報処理安全確保支援士（SC）を持っています。
            </p>
          </div>
        </section>
        {/* interest */}
        <section id="interest" className="cf">
          <h2 className="ttl">Interest</h2>
          <section>
            <h3 className="ttl">プログラミング</h3>
            <p className="ttl">PROGRAMMING</p>
            <p className="icon">
              <Image
                src="/logo/keyboard.svg"
                alt="programming icon"
                width={60}
                height={60}
              />
            </p>
            <div className="text01">
              <p>
                プログラミング言語は、C, Java, Python, PHP, JavaScript,
                Goが書けます。
              </p>
              <p>
                フレームワークは、CakePHP, FastAPI, React の経験があります。
              </p>
              <p>最近は、Pythonを書くことが多いです。</p>
            </div>
          </section>
          <section>
            <h3 className="ttl">ネットワーク</h3>
            <p className="ttl">NETWORK</p>
            <p className="icon">
              <Image
                src="/logo/internet.svg"
                alt="network icon"
                width={60}
                height={60}
              />
            </p>
            <div className="text01">
              <p>
                OSPF, ISIS, BGP でのルーティングや SRv6 を使用した SFC
                の技術について研究しています。
              </p>
              <p>eBPF や DPDK といった高速通信技術にも興味があります。</p>
              <p>
                セキュリティ関連でいうと、DDoS攻撃の検知および緩和手法に興味があります。
              </p>
            </div>
          </section>
          <section className="last">
            <h3 className="ttl">ウェブ</h3>
            <p className="ttl">WEB</p>
            <p className="icon">
              <Image
                src="/logo/web.svg"
                alt="web icon"
                width={60}
                height={60}
              />
            </p>
            <div className="text01">
              <p>
                Webアプリケーションの脆弱性を狙った攻撃は今も増加しているため、日々勉強しています。
              </p>
              <p>また最近は、Web配信基盤 や CI&CD などにも興味があります。</p>
            </div>
          </section>
        </section>
        {/* link */}
        <section id="link" className="cf">
          <h2 className="ttl">Link</h2>
          <section>
            <a href="https://github.com/moz-sec">
              <h3 className="ttl">Github</h3>
              <p className="ttl">GITHUB</p>
              <p className="icon">
                <Image
                  src="/logo/github.svg"
                  alt="github"
                  width={60}
                  height={60}
                />
              </p>
            </a>
          </section>
          <section>
            <a href="https://moz-security.hatenablog.com/">
              <h3 className="ttl">ブログ</h3>
              <p className="ttl">BLOG</p>
              <p className="icon">
                <Image
                  src="/logo/note-sticky-solid.svg"
                  alt="blog"
                  width={60}
                  height={60}
                />
              </p>
            </a>
          </section>
          <section className="last">
            <a href="https://moz-sec.com/note/">
              <h3 className="ttl">勉強ノート</h3>
              <p className="ttl">STUDY NOTE</p>
              <p className="icon">
                <Image
                  src="/logo/book-solid.svg"
                  alt="study_note"
                  width={60}
                  height={60}
                />
              </p>
            </a>
          </section>
          <section className="last">
            <a href="https://app.hackthebox.com/users/975147">
              <h3 className="ttl">Hack The Box</h3>
              <p className="ttl">PENTEST</p>
              <p className="icon">
                <Image
                  src="/logo/hacker.svg"
                  alt="pentest"
                  width={60}
                  height={60}
                />
              </p>
            </a>
          </section>
        </section>
        {/* background */}
        <section id="background" className="cf">
          <h2 className="ttl">Background</h2>
          <div className="text">
            <p>2021.11.30</p>
            <p>基本情報技術者試験（FE） 合格</p>
          </div>
          <div className="text">
            <p>2022.03.19</p>
            <p>
              <a href="http://info.cse.kyoto-su.ac.jp/?page_id=10073">
                京都産業大学 第30回 デジタルコンテンツコンテスト
              </a>
              最優秀賞
            </p>
          </div>
          <div className="text">
            <p>2022.08.08 - 2022.08.09</p>
            <p>
              <a href="https://developers.prtimes.jp/2022/08/30/prtimes-hackathon-2022summer/">
                PR TIMES HACKATHON 2022 Summer
              </a>
            </p>
          </div>
          <div className="text">
            <p>2022.08.29 - 2021.09.09</p>
            <p>
              NEC ネッツエスアイ サイバーセキュリティインターンシップ 2 Weeks
            </p>
          </div>
          <div className="text">
            <p>2022.12.22</p>
            <p>応用情報技術者試験（AP） 合格</p>
          </div>
          <div className="text">
            <p>2023.03.01 - 2023.09.30</p>
            <p>株式会社 DONUTS 開発グループ インターンシップ</p>
          </div>
          <div className="text">
            <p>2023.04.29 - 2023.04.30</p>
            <p>
              <a href="https://developers.gmo.jp/33522/">
                DevSecOpsThon 2023 at GMO kitaQ
              </a>
            </p>
          </div>
          <div className="text">
            <p>2023.06.29</p>
            <p>情報処理安全確保支援士試験（SC） 合格</p>
          </div>
          <div className="text">
            <p>2023.08.07 - 2023.08.11</p>
            <p>セキュリティ・キャンプ 全国大会 2023 Bクラス(Web)</p>
          </div>
          <div className="text">
            <p>2024.03.18 - 2024.03.29</p>
            <p>株式会社 スリーシェイク 短期インターンシップ</p>
          </div>
          <div className="text">
            <p>2024.06.01 - 現在</p>
            <p>株式会社 スリーシェイク 長期インターンシップ</p>
          </div>
          <div className="text">
            <p>2024.08.12 - 2023.08.16</p>
            <p>セキュリティ・キャンプ 全国大会 2024 Bクラス(Web) チューター</p>
          </div>
          <div className="text">
            <p>2024.11.02</p>
            <p>Google Cloud Certified Cloud Digital Leader 取得</p>
          </div>
          <div className="text">
            <p>2024.11.18 - 2024.11.19</p>
            <p>C0DE BLUE 学生スタッフ</p>
          </div>
          <div className="text">
            <p>2025.03.17 - 2025.04.11</p>
            <p>ファーストリテイリング インターンシップ</p>
          </div>
        </section>
        {/* toTop */}
        <p className="toTop">
          <a href="#top">
            <Image
              src="/image/icon_totop.gif"
              alt="toTopImg"
              width={22}
              height={14}
            />
          </a>
        </p>
      </div>
      <footer className="cf">
        <p id="copyright">
          <small>© 2025 moz</small>
        </p>
      </footer>
    </>
  );
}
