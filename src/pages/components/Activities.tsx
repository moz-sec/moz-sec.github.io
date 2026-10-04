const activities = [
  {
    date: "2022/03/19",
    desc: "京都産業大学 第30回 デジタルコンテンツコンテスト最優秀賞",
  },
  { date: "2022/08/08 - 2022/08/09", desc: "PR TIMES HACKATHON 2022 Summer" },
  {
    date: "2022/08/29 - 2022/09/09",
    desc: "NEC ネッツエスアイ サイバーセキュリティインターンシップ 2 Weeks",
  },
  {
    date: "2023/03/01 - 2023/09/30",
    desc: "株式会社 DONUTS 開発グループ インターンシップ",
  },
  { date: "2023/04/29 - 2023/04/30", desc: "DevSecOpsThon 2023 at GMO kitaQ" },
  {
    date: "2023/08/07 - 2023/08/11",
    desc: "セキュリティ・キャンプ 全国大会 2023 Bクラス(Web)",
  },
  {
    date: "2024/03/18 - 2024/03/29",
    desc: "スリーシェイク 短期インターンシップ",
  },
  {
    date: "2024/06/01 - 2026/03/31",
    desc: "スリーシェイク 長期インターンシップ",
  },
  {
    date: "2024/08/12 - 2024/08/16",
    desc: "セキュリティ・キャンプ 全国大会 2024 Bクラス(Web) チューター",
  },
  { date: "2024/11/18 - 2024/11/19", desc: "C0DE BLUE 2024 学生スタッフ" },
  {
    date: "2025/03/17 - 2025/04/11",
    desc: "ファーストリテイリング インターンシップ",
  },
  { date: "2025/11/17 - 2025/11/18", desc: "C0DE BLUE 2025 学生スタッフ" },
];

function getRecentAndOlderActivities() {
  const cutoffDate = new Date();
  cutoffDate.setUTCHours(0, 0, 0, 0);
  cutoffDate.setUTCFullYear(cutoffDate.getUTCFullYear() - 3);

  const recentActivities = activities.filter((activity) => {
    const [year, month, day] = activity.date
      .slice(0, 10)
      .split("/")
      .map(Number);
    return Date.UTC(year, month - 1, day) >= cutoffDate.getTime();
  });

  return {
    recentActivities,
    olderActivities: activities.filter(
      (activity) => !recentActivities.includes(activity),
    ),
  };
}

function ActivityTimeline({ items }: { items: typeof activities }) {
  return (
    <ol className="relative ml-3 border-l border-gray-300 pl-6 dark:border-gray-700">
      {items.map((activity) => (
        <li
          key={`${activity.date}-${activity.desc}`}
          className="relative pb-8 last:pb-0"
        >
          <span className="absolute -left-7.75 top-1 h-3 w-3 rounded-full border-2 border-blue-500 bg-(--background)"></span>
          <div className="flex flex-col gap-1">
            <time className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {activity.date}
            </time>
            <span className="text-base leading-relaxed text-(--foreground)">
              {activity.desc}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Activities() {
  const { recentActivities, olderActivities } = getRecentAndOlderActivities();

  return (
    <section id="activities" className="min-w-0 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center tracking-wide relative">
        <span className="relative z-10">イベント・活動</span>
      </h2>
      <ActivityTimeline items={recentActivities} />
      {olderActivities.length > 0 && (
        <details className="group mt-8">
          <summary className="w-fit cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-gray-100 dark:border-gray-700 dark:text-blue-400 dark:hover:bg-gray-800">
            過去のイベント・活動を表示（{olderActivities.length}件）
          </summary>
          <div className="mt-6">
            <ActivityTimeline items={olderActivities} />
          </div>
        </details>
      )}
    </section>
  );
}
