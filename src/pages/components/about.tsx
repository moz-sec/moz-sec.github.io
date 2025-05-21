import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-8 text-center text-white tracking-wide relative">
        <span className="relative z-10">About</span>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-blue-500 rounded-full z-0"></span>
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-1 text-lg text-white">
          <p className="mb-2">小林 舜 Kobayashi Shun</p>
          <p className="mb-2">京都</p>
          <p className="mb-2">
            <a
              href="mailto:m0253c@gmail.com"
              className="text-blue-300 underline"
            >
              m0253c@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://x.com/moz_sec_"
              className="text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @moz_sec_
            </a>
          </p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/image/profile_dark.png"
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
