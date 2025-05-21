// src/pages/components/Interest.tsx
import { FaCode, FaNetworkWired, FaGlobe } from "react-icons/fa";

const interests = [
  {
    title: "プログラミング",
    icon: <FaCode className="text-3xl text-blue-400 mb-2" />,
    details: [
      "C, Java, Python, PHP, JavaScript, Goが書けます。",
      "CakePHP, FastAPI, React の経験あり。",
      "最近はPythonを書くことが多いです。",
    ],
    bg: "bg-blue-900/60",
  },
  {
    title: "ネットワーク",
    icon: <FaNetworkWired className="text-3xl text-green-400 mb-2" />,
    details: [
      "OSPF, ISIS, BGPやSRv6を使ったSFC技術を研究。",
      "eBPFやDPDKなど高速通信技術にも興味。",
      "DDoS攻撃の検知・緩和手法にも関心。",
    ],
    bg: "bg-green-900/60",
  },
  {
    title: "ウェブ",
    icon: <FaGlobe className="text-3xl text-yellow-400 mb-2" />,
    details: [
      "Webアプリの脆弱性対策を日々勉強中。",
      "Web配信基盤やCI&CDにも興味あり。",
    ],
    bg: "bg-yellow-900/60",
  },
];

export default function Interest() {
  return (
    <section id="interest" className="max-w-4xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-8 text-center text-white tracking-wide relative">
        <span className="relative z-10">Interest</span>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-blue-500 rounded-full z-0"></span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {interests.map((item, i) => (
          <div
            key={i}
            className={`rounded-xl shadow-lg p-6 flex flex-col items-center ${item.bg}`}
          >
            {item.icon}
            <h3 className="font-semibold text-lg mb-2 text-white">
              {item.title}
            </h3>
            <ul className="text-sm text-gray-100 space-y-1">
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
