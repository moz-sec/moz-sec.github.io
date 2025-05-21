import Link from "next/link";
import { FaFeatherAlt } from "react-icons/fa";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Profile", href: "#profile" },
  { label: "Interest", href: "#interest" },
  { label: "Links", href: "#links" },
  { label: "Background", href: "#background" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900/80 backdrop-blur sticky top-0 z-50 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-xl"
        >
          <FaFeatherAlt className="text-blue-400 text-2xl" />
          Moz
        </Link>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-gray-200 hover:text-blue-400 transition font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
