const certifications = [
  { name: "基本情報技術者試験（FE）", date: "2021/11/30" },
  { name: "応用情報技術者試験（AP）", date: "2022/12/22" },
  { name: "情報処理安全確保支援士試験（SC）", date: "2023/06/29" },
  {
    name: "Google Cloud Certified Cloud Digital Leader",
    date: "2024/11/02",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-2xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-8 text-center tracking-wide relative">
        <span className="relative z-10">保有資格</span>
      </h2>
      <ul className="overflow-hidden rounded-xl shadow-lg text-(--card-foreground) bg-(--card-background) divide-y divide-gray-200 dark:divide-gray-700">
        {certifications.map((certification) => (
          <li
            key={certification.name}
            className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:gap-6"
          >
            <time className="text-sm font-semibold text-blue-600 dark:text-blue-400 sm:w-28 sm:shrink-0">
              {certification.date}
            </time>
            <span className="font-medium leading-relaxed">
              {certification.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
