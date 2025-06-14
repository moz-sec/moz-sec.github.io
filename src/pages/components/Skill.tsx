import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiPhp,
  SiReact,
  SiC,
  SiPython,
  SiGo,
  SiRust,
} from "react-icons/si";
import { FaJava, FaStar } from "react-icons/fa";

const skillCategories = [
  {
    title: "プログラミング言語",
    skills: [
      {
        title: "Python",
        level: 4,
        icon: <SiPython className="text-4xl text-[#3776AB]" />,
      },
      {
        title: "Java",
        level: 2,
        icon: <FaJava className="text-4xl text-[#007396]" />,
      },
      {
        title: "Go",
        level: 2,
        icon: <SiGo className="text-4xl text-[#00ADD8]" />,
      },
      {
        title: "Rust",
        level: 2,
        icon: <SiRust className="text-4xl text-[#DEA584]" />,
      },
      {
        title: "C",
        level: 2,
        icon: <SiC className="text-4xl text-[#A8B9CC]" />,
      },
    ],
  },
  {
    title: "Web開発",
    skills: [
      {
        title: "HTML",
        level: 1,
        icon: <SiHtml5 className="text-4xl text-[#E34F26]" />,
      },
      {
        title: "CSS",
        level: 1,
        icon: <SiCss3 className="text-4xl text-[#1572B6]" />,
      },
      {
        title: "JavaScript",
        level: 1,
        icon: <SiJavascript className="text-4xl text-[#F7DF1E]" />,
      },
      {
        title: "TypeScript",
        level: 1,
        icon: <SiTypescript className="text-4xl text-[#3178C6]" />,
      },
      {
        title: "PHP",
        level: 1,
        icon: <SiPhp className="text-4xl text-[#777BB4]" />,
      },
    ],
  },
  {
    title: "フレームワーク",
    skills: [
      {
        title: "React",
        level: 1,
        icon: <SiReact className="text-4xl text-[#61DAFB]" />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-8 text-center tracking-wide relative text-[var(--foreground)]">
        <span className="relative z-10">Skills</span>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-blue-500 rounded-full z-0"></span>
      </h2>
      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className={`flex flex-col items-center p-6 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:scale-105 text-[var(--card-foreground)] bg-[var(--card-background)]`}
                >
                  {skill.icon}
                  <div className="flex justify-center items-center gap-1 my-4">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`text-xl ${
                          index < skill.level
                            ? "text-yellow-500"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
