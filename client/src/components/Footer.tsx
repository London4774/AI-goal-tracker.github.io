import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa6";
import {Link} from "react-router-dom";

const navigation = ["Контакты", "FAQ", "Политика конфиденциальности", "Terms"];

const socialLinks = [
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/London4774" },
  { Icon: FaTelegram, label: "Telegram", href: "#" },
  { Icon: FaTwitter, label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t-2 border-green-500/80 py-12 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        

        <div className="flex flex-col items-center md:items-start gap-6">
          <Link className="text-2xl font-bold" to={"/"}>
           <span className="text-green-500">Track
              <span className="text-yellow-500">UR</span>
              <span className="text-white">Future</span>
            </span>
          </Link>
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
