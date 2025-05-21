import {
  FaUserGraduate,
  FaLaptopCode,
  FaAward,
  FaSearch,
} from "react-icons/fa";

const profileItems = [
  {
    icon: <FaUserGraduate className="text-blue-400 text-2xl mr-3" />,
    text: "京都産業大学大学院 先端情報学専攻",
  },
  {
    icon: <FaSearch className="text-green-400 text-2xl mr-3" />,
    text: "研究はネットワークやセキュリティ",
  },
  {
    icon: <FaLaptopCode className="text-yellow-400 text-2xl mr-3" />,
    text: "OSからWebアプリまで幅広く技術を探求",
  },
  {
    icon: <FaAward className="text-pink-400 text-2xl mr-3" />,
    text: "資格：基本情報技術者（FE）、応用情報技術者（AP）、情報処理安全確保支援士（SC）",
  },
];

const Profile = () => {
  return (
    <section id="profile" className="max-w-2xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-8 text-center text-white tracking-wide relative">
        <span className="relative z-10">Profile</span>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-blue-500 rounded-full z-0"></span>
      </h2>
      <div className="bg-gray-800/70 rounded-xl shadow-lg p-8 space-y-6">
        {profileItems.map((item, i) => (
          <div key={i} className="flex items-start">
            {item.icon}
            <span className="text-gray-100 text-base">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profile;
