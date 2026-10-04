import { FaGithub, FaBlog, FaBook, FaHackerrank } from "react-icons/fa";
import { SiZenn, SiWantedly } from "react-icons/si";

const links = [
  {
    title: "GitHub",
    url: "https://github.com/moz-sec",
    icon: <FaGithub className="text-4xl" />,
    color: "hover:bg-gray-300 dark:hover:bg-gray-700",
  },
  {
    title: "はてなブログ",
    url: "https://moz-security.hatenablog.com/",
    icon: <FaBlog className="text-4xl" />,
    color: "hover:bg-blue-300 dark:hover:bg-blue-700",
  },
  {
    title: "Hack The Box",
    url: "https://app.hackthebox.com/users/975147",
    icon: <FaHackerrank className="text-4xl" />,
    color: "hover:bg-yellow-300 dark:hover:bg-yellow-700",
  },
  {
    title: "Zenn",
    url: "https://zenn.dev/moz_sec",
    icon: <SiZenn className="text-4xl" />,
    color: "hover:bg-cyan-300 dark:hover:bg-cyan-700",
  },
];

export default function Links() {
  return (
    <section id="links" className="max-w-4xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-8 text-center tracking-wide relative">
        <span className="relative z-10">リンク</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center p-6 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:scale-105 ${link.color} text-[var(--card-foreground)] bg-[var(--card-background)]`}
          >
            {link.icon}
            <h3 className="mt-4 text-lg font-semibold">{link.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
