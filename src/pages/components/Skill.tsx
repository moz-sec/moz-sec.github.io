import {
  SiGooglecloud,
  SiKubernetes,
  SiPython,
  SiGo,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { FaCloud } from "react-icons/fa";

const skillGroups = [
  {
    title: "クラウド・インフラ",
    summary: "パブリッククラウド・コンテナ基盤",
    featured: true,
    skills: [
      {
        name: "AWS",
        icon: <FaCloud className="text-[#FF9900]" />,
      },
      {
        name: "Google Cloud",
        icon: <SiGooglecloud className="text-[#4285F4]" />,
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes className="text-[#326CE5]" />,
      },
    ],
  },
  {
    title: "バックエンド",
    summary: "Python・Goで実装できます",
    skills: [
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "Go", icon: <SiGo className="text-[#00ADD8]" /> },
    ],
  },
  {
    title: "フロントエンド",
    summary: "既存コードを読んで理解できます",
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <SiCss className="text-[#1572B6]" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-[#D4A900]" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-[#3178C6]" />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-3 text-center tracking-wide text-(--foreground)">
        スキル
      </h2>
      <p className="mb-8 text-center text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        クラウド・インフラを中心に、バックエンド開発にも取り組んでいます。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            className={`rounded-xl border p-6 text-(--card-foreground) bg---card-background) ${
              group.featured
                ? "md:col-span-2 border-blue-300 shadow-lg dark:border-blue-800"
                : "border-gray-200 shadow-md dark:border-gray-700"
            }`}
          >
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <p className="w-full text-sm text-gray-600 dark:text-gray-300">
                {group.summary}
              </p>
            </div>
            <ul
              className={`grid gap-3 ${
                group.featured ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2"
              }`}
            >
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className={`flex gap-3 rounded-lg bg-gray-100/80 px-4 py-3 dark:bg-gray-800/70 ${
                    group.featured
                      ? "flex-col items-center text-center sm:gap-2 sm:py-5"
                      : "items-center"
                  }`}
                >
                  <span className="shrink-0 text-2xl">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
