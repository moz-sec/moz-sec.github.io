import { FaGithub, FaBlog, FaBook, FaHackerrank } from "react-icons/fa";
import { SiZenn, SiWantedly } from "react-icons/si";

const links = [
  {
    title: "GitHub",
    url: "https://github.com/moz-sec",
    icon: <FaGithub className="text-4xl text-white" />,
    color: "bg-gray-800 hover:bg-gray-700",
  },
  {
    title: "はてなブログ",
    url: "https://moz-security.hatenablog.com/",
    icon: <FaBlog className="text-4xl text-white" />,
    color: "bg-gray-800 hover:bg-blue-700",
  },
  {
    title: "勉強ノート",
    url: "https://moz-sec.com/note/",
    icon: <FaBook className="text-4xl text-white" />,
    color: "bg-gray-800 hover:bg-green-700",
  },
  {
    title: "Hack The Box",
    url: "https://app.hackthebox.com/users/975147",
    icon: <FaHackerrank className="text-4xl text-white" />,
    color: "bg-gray-800 hover:bg-yellow-600",
  },
  {
    title: "Zenn",
    url: "https://zenn.dev/moz_sec",
    icon: <SiZenn className="text-4xl text-white" />,
    color: "bg-gray-800 hover:bg-cyan-600",
  },
  {
    title: "Wantedly",
    url: "https://www.wantedly.com/id/moz_sec_",
    icon: <SiWantedly className="text-4xl text-white" />,
    color: "bg-gray-800 hover:bg-indigo-600",
  },
];

export default function Links() {
  return (
    <section id="links" className="max-w-4xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-8 text-center text-white tracking-wide relative">
        <span className="relative z-10">Links</span>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-blue-500 rounded-full z-0"></span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center p-6 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:scale-105 ${link.color}`}
          >
            {link.icon}
            <h3 className="mt-4 text-lg font-semibold text-white">
              {link.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
