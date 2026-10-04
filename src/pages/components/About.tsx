import Image from "next/image";
import { PiSignatureFill } from "react-icons/pi";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { useDarkMode } from "@/theme/useIsDarkMode";

const About = () => {
  const { isDark } = useDarkMode();

  return (
    <section id="about" className="max-w-4xl mx-auto py-12 text-(--foreground)">
      <h2 className="text-2xl font-bold mb-8 text-center tracking-wide relative">
        <span className="relative z-10">自己紹介</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-1 text-lg">
          <p className="mb-2">
            <PiSignatureFill className="inline-block mr-2" />
            Kobayashi Shun
          </p>
          <p className="mb-2">
            <FaLocationDot className="inline-block mr-2" />
            東京
          </p>
          <p className="mb-2">
            <FaEnvelope className="inline-block mr-2" />
            <a
              href="mailto:m0253c@gmail.com"
              className="hover:text-(--link-hover-color) transition-colors"
            >
              m0253c@gmail.com
            </a>
          </p>
          <p>
            <FaSquareXTwitter className="inline-block mr-2" />
            <a
              href="https://x.com/moz_sec_"
              className="hover:text-(--link-hover-color) transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              @moz_sec_
            </a>
          </p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src={
              isDark ? "/image/profile_dark.png" : "/image/profile_light.png"
            }
            alt="Moz"
            width={220}
            height={220}
            className="rounded-full shadow-lg object-cover border-4 border-gray-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
