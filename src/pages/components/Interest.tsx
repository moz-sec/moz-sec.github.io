// src/pages/components/Interest.tsx
import { FaCode, FaNetworkWired, FaShieldAlt } from "react-icons/fa";

const interests = [
  {
    title: "Webアプリケーション開発",
    icon: <FaCode className="text-3xl text-blue-400 mb-2" />,
    details: [
      "C, Java, Python, PHP, JavaScript, Goが書けます。",
      "CakePHP, FastAPI, React の経験があります。",
      "最近はPythonを書くことが多いです。",
    ],
  },
  {
    title: "ネットワーク",
    icon: <FaNetworkWired className="text-3xl text-green-400 mb-2" />,
    details: [
      "OSPF, ISIS, BGPやSRv6を使ったSFC技術を研究していました。",
      "eBPFやDPDKなど高速通信技術にも興味があります。",
      "また、DDoS攻撃の検知・緩和手法にも関心があります。",
    ],
  },
  {
    title: "セキュリティ",
    icon: <FaShieldAlt className="text-3xl text-yellow-400 mb-2" />,
    details: ["Webアプリの脆弱性対策を勉強しています。"],
  },
];

export default function Interest() {
  return (
    <section id="interest" className="max-w-4xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-8 text-center tracking-wide relative">
        <span className="relative z-10">興味・関心</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {interests.map((item, i) => (
          <div
            key={i}
            className={`rounded-xl shadow-lg p-6 flex flex-col items-center text-[var(--card-foreground)] bg-[var(--card-background)]`}
          >
            {item.icon}
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <ul className="text-sm space-y-1 text-[var(--card-foreground)]">
              {item.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
