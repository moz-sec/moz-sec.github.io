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
      <ul className="rounded-xl shadow-lg p-6 space-y-4 text-[var(--card-foreground)] bg-[var(--card-background)]">
        {certifications.map((certification) => (
          <li
            key={certification.name}
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4"
          >
            <time className="text-sm font-medium text-gray-400 sm:min-w-[100px]">
              {certification.date}
            </time>
            <span>{certification.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
