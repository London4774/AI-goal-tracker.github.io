import { CalendarDaysIcon, MoonIcon } from "@heroicons/react/16/solid";
import { ChartBarSquareIcon } from "@heroicons/react/24/solid";


function Features() {
  return (
    <>
        <section className="bg-green-600 py-20 px-10 text-center">
            <h1 className="text-white text-4xl font-bold mb-12">Что делает наш ИИ</h1>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

                <div className="rounded-2xl border border-white/30 p-8 flex flex-col items-center text-white shadow-lg hover:shadow-xl transition">
                        <MoonIcon className="h-16 w-16 text-white mb-4"/>
                    <h2 className="text-xl font-semibold mb-2">Умное планирование</h2>
                    <p>ИИ помогает составлять гибкие планы под твой стиль жизни.</p>
                </div>
                    
                <div className="rounded-2xl border border-white/30 p-8 flex flex-col items-center text-white shadow-lg hover:shadow-xl transition">
                        <CalendarDaysIcon className="h-16 w-16 text-white mb-4"/>
                    <h2 className="text-xl font-semibold mb-2">Календарь и задачи</h2>
                    <p>Все цели удобно отображаются в календаре.</p>
                </div>

                <div className="rounded-2xl border border-white/30 p-8 flex flex-col items-center text-white shadow-lg hover:shadow-xl transition">
                        <ChartBarSquareIcon className="h-16 w-16 text-white mb-4"/>
                    <h2 className="text-xl font-semibold mb-2">Аналитика и статистика</h2>
                    <p>Следи за прогрессом, мотивацией и шансами достижения цели.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features;