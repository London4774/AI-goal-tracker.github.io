import { CalendarDaysIcon, MoonIcon } from "@heroicons/react/16/solid";
import { ChartBarSquareIcon } from "@heroicons/react/24/solid";


function Features() {
  return (
    <>
        <div id="features" className="bg-black/50 py-35 px-10 text-center">
            <h1 className="text-white text-4xl font-bold mb-18">Что делает наш ИИ</h1>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

                <div className="bg-black/80 rounded-2xl border border-white/40 p-8 flex flex-col items-center text-white shadow-lg hover:shadow-xl transition">
                    <MoonIcon className="h-16 w-16 text-white mb-4"/>
                        <h2 className="text-green-500 text-xl font-semibold mb-2">Умное планирование</h2>
                    <p>ИИ помогает составлять гибкие планы под твой стиль жизни.</p>
                </div>
                    
                <div className="bg-black/80 rounded-2xl border border-white/30 p-8 flex flex-col items-center text-white shadow-lg hover:shadow-xl transition">
                    <CalendarDaysIcon className="h-16 w-16 text-white mb-4"/>
                        <h2 className="text-green-500 text-xl font-semibold mb-2">Календарь и задачи</h2>
                    <p>Все цели удобно отображаются в календаре.</p>
                </div>

                <div className="bg-black/80 rounded-2xl border border-white/30 p-8 flex flex-col items-center text-white shadow-lg hover:shadow-xl transition">
                    <ChartBarSquareIcon className="h-16 w-16 text-white mb-4"/>
                        <h2 className="text-green-500 text-xl font-semibold mb-2">Аналитика и статистика</h2>
                    <p>Следи за прогрессом, мотивацией и шансами достижения цели.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Features;