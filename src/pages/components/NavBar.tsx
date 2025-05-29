import Link from "next/link";
import { FaFeatherAlt, FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "@/theme/useIsDarkMode";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Profile", href: "#profile" },
  { label: "Interest", href: "#interest" },
  { label: "Links", href: "#links" },
  { label: "Background", href: "#background" },
];

export default function Navbar() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <nav className="w-full bg-[var(--nav-background)] text-[var(--nav-foreground)] backdrop-blur sticky top-0 z-50 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <FaFeatherAlt className="text-blue-400 text-2xl" />
          Moz
        </Link>
        <ul className="flex gap-6 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-blue-400 transition font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}

          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border-2 transition"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <FaSun className="text-yellow-400 text-xl" />
              ) : (
                <FaMoon className="text-gray-700 text-xl" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
