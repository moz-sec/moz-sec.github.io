const services = [
  { title: "HTML", percent: 10 },
  { title: "JavaScript", percent: 10 },
  { title: "TypeScript", percent: 10 },
  { title: "CSS", percent: 10 },
  { title: "PHP", percent: 10 },
  { title: "React", percent: 10 },
  { title: "C", percent: 20 },
  { title: "Java", percent: 20 },
  { title: "Python", percent: 40 },
  { title: "Go", percent: 20 },
  { title: "Rust", percent: 20 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center text-white tracking-wide relative">
        <span className="relative z-10">Skills</span>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-blue-500 rounded-full z-0"></span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg
                viewBox="0 0 36 36"
                className="circular-chart text-green-500"
              >
                <path
                  className="circle-bg"
                  d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
                <path
                  className="circle"
                  strokeDasharray={`${s.percent}, 100`}
                  d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                {s.percent}%
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
