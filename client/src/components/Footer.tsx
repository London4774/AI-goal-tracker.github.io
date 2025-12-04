import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa6";

const navigation = ["Контакты", "FAQ", "Политика конфиденциальности", "Terms"];

const socialLinks = [
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/London4774" },
  { Icon: FaTelegram, label: "Telegram", href: "#" },
  { Icon: FaTwitter, label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-green-500/80 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        

        <div className="flex flex-col items-center md:items-start gap-6">
          <a href="/" className="text-2xl font-bold">
            <span className="text-green-500">Goal</span>
            <span className="text-white">Tracker with</span>
            <span className="text-green-500">AI</span>
          </a>
          <nav className="hidden md:flex flex-wrap gap-6 text-sm text-gray-400">
            {navigation.map((item) => (
              <a key={item} href="#" className="hover:text-white transition">
                {item}
              </a>
            ))}
          </nav>
        </div>


        <div className="flex flex-col items-center gap-4">
          <p className="text-white">Follow us:</p>
          <div className="flex gap-6">
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition"
                aria-label={label}
              >
                <Icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>


        <div className="text-center md:text-right text-gray-400 text-sm">
          © 2025 GoalTracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
