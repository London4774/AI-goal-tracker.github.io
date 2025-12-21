import { useState } from "react";
import MainHeader from "../components/MainHeader";
import CalendarSection from "../components/CalendarSection";
import DayModal from "../components/DayModal";
import Particles from "./../components/Particles";
import Footer from "./../components/Footer";
import { FaPlus, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Progressbar from "../components/Progressbar";




export default function Home() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date()); 
  const [selectedGoals, setSelectedGoals] = useState<string[]>([
    "Проснуться в 7:00",
    "Тренировка 30 минут",
    "Учеба 2 часа по React",
  ]);


  const [showAI, setShowAI] = useState(false);
  const motivation = "Ты становишься сильнее каждый раз, когда не сдаешься.";


  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: 'auto', position: 'absolute'}}>
        <Particles
            particleColors={['#00FF00', '#FFFF00']}
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
      <MainHeader />

      <div className="max-w-6xl mx-auto mt-32 px-6 flex flex-col gap-6">

        {/* Навигация */}
        <nav className="flex gap-8 mb-10 overflow-x-auto pb-2 z-1">
          {["📅 Календарь", "🧠 AI помощь", "📈 Статистика", "🔥 Streak"].map((item) => (
            <button
              key={item}
              onClick={() => item === "🧠 AI помощь" && setShowAI(true)}
              className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full hover:bg-green-500/20 hover:border-green-500/50 border border-white/20 transition whitespace-nowrap text-white"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="grid lg:grid-cols-3 gap-8 text-white">

          {/* Левая колонка: Календарь + Цели */}
          <div className="lg:col-span-2 space-y-8">

            {/* Календарь */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 text-white">
            <div className="flex justify-center">
                <div className="scale-[1.45] origin-bottom px-4 py-3">
                    <CalendarSection onSelectDay={setSelectedDay} />
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
                {selectedGoals.map((goal, i) => (
                  <label key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition cursor-pointer">
                    <input type="checkbox" className="w-6 h-6 accent-green-500 rounded" />
                    <span className="text-lg">{goal}</span>
                  </label>
                ))}
              </div>
              <button className="mt-6 w-full py-4 bg-green-500/20 border-2 border-dashed border-green-500/50 rounded-2xl text-green-400 font-medium hover:bg-green-500/30 transition flex items-center justify-center gap-3">
                <FaPlus className="w-6 h-6" /> Добавить цель
              </button>
            </div>
          </div>

          {/* Правая колонка: AI + Мотивация */}
          <div className="space-y-8">

            {/* AI-помощник */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/30 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaStar className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold">AI-помощник</h3>
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                «Хочешь улучшить план? Я могу оптимизировать расписание и предложить идеальные цели под твои привычки!»
              </p>
              <button className="w-full py-4 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl font-bold hover:shadow-2xl hover:shadow-green-500/50 transition transform hover:-translate-y-1">
                Предложить улучшения
              </button>
            </div>

            {/* Мотивация дня */}
            <div className="bg-gradient-to-br from-green-900/30 to-cyan-900/30 backdrop-blur-2xl border border-green-500/30 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                ⚡ Мотивация дня
              </h3>
              <p className="text-lg italic leading-relaxed">
                "{motivation}"
              </p>
            </div>

            
            {/* прогресс-бар */}
            <Progressbar/> 
            {/* прогресс-бар end */}

          </div>
        </div>



        {/* Модалки */}
        {selectedDay && (
          <DayModal date={selectedDay} onClose={() => setSelectedDay(undefined)} />
        )}
        {showAI && (
          <DayModal date={selectedDay || new Date()} onClose={() => setShowAI(false)} />
        )}
      </div>

      <Footer />
    </div>
  );
}
