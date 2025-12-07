import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const inputClass =
  "w-full px-3 py-2 bg-white/10 border border-white/30 rounded-xl text-white " +
  "placeholder-green-200/50 focus:outline-none focus:border-green-400 " +
  "focus:ring-4 focus:ring-green-400/20 transition-all";

const socialButtons = [
  { icon: FaGoogle },
  { icon: FaGithub },
  { icon: FaFacebook },
];

export default function Login() {
  return (
    <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
      <div className="bg-space absolute inset-0 pointer-events-none" />

      <div className="flex flex-col justify-center mx-auto z-10 border border-white/50 px-10 py-6 backdrop-blur-xl bg-white/5 rounded-xl">

        {/* Header */}
        <div className="text-white text-center font-bold text-3xl py-5">
          <span className="text-green-500">Track
              <span className="text-yellow-500">UR</span>
              <span className="text-white">Future</span>
            </span>
        </div>

        <h2 className="text-2xl text-center font-semibold text-white py-4">
          Логин
        </h2>

        {/* Form */}
        <div className="w-full flex flex-col justify-center text-white px-10">

          <label htmlFor="email" className="font-medium py-1 px-4">
            Эмейл
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            placeholder="username@gmail.com"
          />

          <label htmlFor="password" className="py-1 font-medium px-4">
            Пароль
          </label>
          <input
            id="password"
            type="password"
            className={inputClass}
            placeholder="••••••••"
          />

          <a className="text-green-300 text-left py-3 hover:text-green-500" href="#">
            Забыли пароль?
          </a>

          <button
            className="w-full py-4 bg-slate-900/90 hover:bg-slate-700/90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20"
            type="submit"
          >
            Войти
          </button>

          <span className="py-3 text-center">или продолжить с</span>

          <div className="flex justify-center gap-4">
            {socialButtons.map(({ icon: Icon }, index) => (
              <button
                key={index}
                className="p-3.5 bg-green-500 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              >
                <Icon className="w-6 h-6" />
              </button>
            ))}
          </div>

          <div className="text-center mt-5 text-white/80">
            <span className="text-white">
              Нет аккаунта?
              <Link
                className="text-green-300 hover:text-green-500"
                to="/register"
              >
                {" "}
                Зарегистрироваться
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
