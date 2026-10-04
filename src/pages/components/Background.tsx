const events = [
  { date: "2020/04/01 - 2024/03/31", desc: "京都産業大学 情報理工学部" },
  {
    date: "2024/04/01 - 2026/03/31",
    desc: "京都産業大学大学院 先端情報学研究科",
  },
  { date: "2026/04/01 - 現在", desc: "スリーシェイク ソフトウェアエンジニア" },
];

function EventTimeline({ items }: { items: typeof events }) {
  return (
    <ol className="relative ml-3 border-l border-gray-300 pl-6 dark:border-gray-700">
      {items.map((event) => (
        <li
          key={`${event.date}-${event.desc}`}
          className="relative pb-8 last:pb-0"
        >
          <span className="absolute -left-7.75 top-1 h-3 w-3 rounded-full border-2 border-blue-500 bg-(--background)"></span>
          <div className="flex flex-col gap-1">
            <time className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {event.date}
            </time>
            <span className="text-base leading-relaxed text-(--foreground)">
              {event.desc}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Background() {
  return (
    <section id="background" className="min-w-0 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center tracking-wide relative">
        <span className="relative z-10">経歴</span>
      </h2>
      <EventTimeline items={events} />
    </section>
  );
}
