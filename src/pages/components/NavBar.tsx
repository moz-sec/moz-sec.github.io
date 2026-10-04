import { useState } from "react";
import Link from "next/link";
import { FaBars, FaFeatherAlt, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useDarkMode } from "@/theme/useIsDarkMode";

const navItems = [
  { label: "自己紹介", href: "#about" },
  { label: "興味", href: "#interest" },
  { label: "リンク", href: "#links" },
  { label: "資格", href: "#certifications" },
  { label: "経歴", href: "#background" },
  { label: "活動", href: "#activities" },
];

export default function Navbar() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg---nav-background) text-(--nav-foreground) backdrop-blur sticky top-0 z-50 shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <FaFeatherAlt className="text-blue-400 text-2xl" />
            Moz
          </Link>
          <div className="flex items-center gap-2">
            <ul className="hidden md:flex gap-6 items-center">
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
            </ul>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border-2 transition"
              aria-label="ダークモードを切り替え"
            >
              {isDark ? (
                <FaSun className="text-yellow-400 text-xl" />
              ) : (
                <FaMoon className="text-gray-700 text-xl" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-lg p-2 transition hover:bg-gray-200 dark:hover:bg-gray-700 md:hidden"
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <ul
            id="mobile-navigation"
            className="flex flex-col gap-1 border-t border-gray-200 py-2 dark:border-gray-700 md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 font-medium transition hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
