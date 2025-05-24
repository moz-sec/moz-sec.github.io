const events = [
  { date: "2021.11.30", desc: "基本情報技術者試験（FE） 合格" },
  {
    date: "2022.03.19",
    desc: "京都産業大学 第30回 デジタルコンテンツコンテスト最優秀賞",
  },
  { date: "2022.08.08 - 2022.08.09", desc: "PR TIMES HACKATHON 2022 Summer" },
  {
    date: "2022.08.29 - 2021.09.09",
    desc: "NEC ネッツエスアイ サイバーセキュリティインターンシップ 2 Weeks",
  },
  { date: "2022.12.22", desc: "応用情報技術者試験（AP） 合格" },
  {
    date: "2023.03.01 - 2023.09.30",
    desc: "株式会社 DONUTS 開発グループ インターンシップ",
  },
  { date: "2023.04.29 - 2023.04.30", desc: "DevSecOpsThon 2023 at GMO kitaQ" },
  { date: "2023.06.29", desc: "情報処理安全確保支援士試験（SC） 合格" },
  {
    date: "2023.08.07 - 2023.08.11",
    desc: "セキュリティ・キャンプ 全国大会 2023 Bクラス(Web)",
  },
  {
    date: "2024.03.18 - 2024.03.29",
    desc: "株式会社 スリーシェイク 短期インターンシップ",
  },
  {
    date: "2024.06.01 - 現在",
    desc: "株式会社 スリーシェイク 長期インターンシップ",
  },
  {
    date: "2024.08.12 - 2023.08.16",
    desc: "セキュリティ・キャンプ 全国大会 2024 Bクラス(Web) チューター",
  },
  {
    date: "2024.11.02",
    desc: "Google Cloud Certified Cloud Digital Leader 取得",
  },
  { date: "2024.11.18 - 2024.11.19", desc: "C0DE BLUE 学生スタッフ" },
  {
    date: "2025.03.17 - 2025.04.11",
    desc: "ファーストリテイリング インターンシップ",
  },
];

export default function Background() {
  return (
    <section id="background" className="max-w-2xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-8 text-center tracking-wide relative">
        <span className="relative z-10">Background</span>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-blue-500 rounded-full z-0"></span>
      </h2>
      <ol className="relative border-l border-gray-700">
        {events.map((e, i) => (
          <li key={i} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full -left-3 ring-8 ring-black">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <circle cx="10" cy="10" r="10" />
              </svg>
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <time className="text-sm font-medium text-gray-400 min-w-[120px]">
                {e.date}
              </time>
              <span className="text-base font-normal">{e.desc}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
