import { useState } from "react";
import MainHeader from "../components/MainHeader";
import CalendarSection from "../components/CalendarSection";
import DayModal from "../components/DayModal";
import Particles from "./../components/Particles";
import Footer from "./../components/Footer";
import { FaPlus, FaStar } from "react-icons/fa";
import Progressbar from "../components/Progressbar";
import { NavLink } from "react-router-dom";

type Goal = {
  id: string;
  text: string;
  done: boolean;
};

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [isDayModalOpen, setIsDayModalOpen] = useState(false);

  const dayKey = (d: Date) => d.toISOString().slice(0, 10);

  const [goalsByDate, setGoalsByDate] = useState<Record<string, Goal[]>>(() => {
    const today = dayKey(new Date());
    return {
      [today]: [
        { id: "1", text: "Проснуться в 7:00", done: false },
        { id: "2", text: "Тренировка 30 минут", done: false },
        { id: "3", text: "Учеба 2 часа по React", done: false },
      ],
    };
  });

  const key = dayKey(selectedDay);
  const selectedGoals = goalsByDate[key] ?? [];

  const total = selectedGoals.length;
  const doneCount = selectedGoals.filter((g) => g.done).length;
  const progress = total === 0 ? 0 : Math.round((doneCount / total) * 100);

  const navItems = [
    { to: "/", label: "📅 Календарь" },
    { to: "/ai", label: "🧠 AI" },
    { to: "/stats", label: "📈 Статистика" },
    { to: "/streak", label: "🔥 Streak" },
  ];

  const motivation = "Ты становишься сильнее каждый раз, когда не сдаешься.";

  const [streak, setStreak] = useState(7);

  const addGoal = () => {
    const text = window.prompt("Введите цель:");
    if (!text || !text.trim()) return;

    setGoalsByDate((prev) => {
      const dayGoals = prev[key] ?? [];
      return {
        ...prev,
        [key]: [
          ...dayGoals,
          { id: crypto.randomUUID(), text: text.trim(), done: false },
        ],
      };
    });
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100%", height: "auto", position: "absolute" }}
      >
        <Particles
          particleColors={["#00FF00", "#FFFF00"]}
          particleCount={300}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={300}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Header */}
      <MainHeader page={"Главная"} />

      <div className="max-w-6xl mx-auto mt-28 px-6 flex flex-col gap-4">
        {/* Навигация */}
        <nav className="flex gap-8 mb-1 overflow-x-auto pb-2 z-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "px-6 py-3 backdrop-blur-xl rounded-full border transition whitespace-nowrap",
                  isActive
                    ? "bg-green-500/20 border-green-500/50 text-white"
                    : "bg-white/10 border-white/20 text-white hover:bg-green-500/10 hover:border-green-500/30",
                ].join(" ")
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="grid lg:grid-cols-3 gap-8 text-white">
          {/* Левая колонка: Календарь + Цели */}
          <div className="lg:col-span-2 space-y-8">
            {/* Календарь */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 text-white">
              <div className="flex justify-center">
                <div className="scale-[1.45] origin-bottom px-4 py-3">
                  <CalendarSection
                    onSelectDay={(day) => {
                      setSelectedDay(day);
                      setIsDayModalOpen(true);
                    }}
                  />
                </div>
              </div>
              {selectedDay && (
                <div className="mt-6 text-center text-xl text-green-400 font-bold">
                  🔘 Выбрано: {selectedDay.toLocaleDateString()}
                </div>
              )}
            </div>

            {/* Цели на день */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 my-10">
              <h3 className="text-2xl font-bold mb-6">Твои цели на день</h3>
              <div className="space-y-4">
                {selectedGoals.map((goal) => (
                  <label key={goal.id} className="flex items-center gap-4 p-4">
                    <input
                      type="checkbox"
                      className="w-6 h-6 accent-green-500 rounded"
                      checked={goal.done}
                      onChange={() => {
                        setGoalsByDate((prev) => {
                          const dayGoals = prev[key] ?? [];
                          return {
                            ...prev,
                            [key]: dayGoals.map((g) =>
                              g.id === goal.id ? { ...g, done: !g.done } : g,
                            ),
                          };
                        });
                      }}
                    />

                    <span className="text-lg">{goal.text}</span>
                  </label>
                ))}
              </div>
              <button
                onClick={addGoal}
                className="mt-6 w-full py-4 bg-green-500/20 border-2 border-dashed border-green-500/50 rounded-2xl text-green-400 font-medium hover:bg-green-500/30 transition flex items-center justify-center gap-3"
              >
                <FaPlus className="w-6 h-6" /> Добавить цель
              </button>
            </div>
          </div>

          {/* Правая колонка: AI + Мотивация */}
          <div className="space-y-8">
            {/* streak mode */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 text-center">
              <h3 className="text-white text-2xl font-bold">
                Счетчик дней подряд
              </h3>
              <p className="text-green-400 text-3xl py-1 font-semibold">
                {" "}
                {streak}🔥{" "}
              </p>
              <p className="text-sm font-semibold">Не прерывай цепочку!</p>
            </div>
            {/* streak mode end */}

            {/* AI-помощник */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/30 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <FaStar className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold">AI-помощник</h3>
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                «Хочешь улучшить план? Я могу оптимизировать расписание и
                предложить идеальные цели под твои привычки!»
              </p>
              <button className="w-full py-4 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl font-bold hover:shadow-2xl hover:shadow-green-500/50 transition transform hover:-translate-y-1">
                Предложить улучшения
              </button>
            </div>

            {/* Мотивация дня */}
            <div className="bg-gradient-to-br from-green-900/30 to-cyan-900/30 backdrop-blur-2xl border border-green-500/30 rounded-3xl p-4">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                ⚡ Мотивация дня
              </h3>
              <p className="text-lg italic leading-relaxed">"{motivation}"</p>
            </div>

            {/* прогресс-бар */}
            <Progressbar value={progress} title="Прогресс за день" />
            {/* прогресс-бар end */}
          </div>
        </div>

        {/* Модалки */}

        {isDayModalOpen && (
          <DayModal
            date={selectedDay}
            onClose={() => setIsDayModalOpen(false)}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}
