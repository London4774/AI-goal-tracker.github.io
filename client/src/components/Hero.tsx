

function Hero() {
  return (
    <>
    <section className="hero-section flex flex-col relative min-h-screen justify-center items-center">
    <h1 className="text-6xl font-bold text-white mb-2">
        Достигай целей с помощью ИИ
    </h1>

        <p className="text-gray-300 mt-4 max-w-2xl text-lg mx-auto">
            Планируй, отслеживай и улучшай свой прогресс с системой, которая анализирует твои привычки и подсказывает лучшие шаги к успеху.
            Всё, чтобы ты не просто ставил цели — а действительно их достигал.
        </p>

        <div className='text-white flex justify-center gap-7 my-4'>

            <button className='px-4 py-2 rounded-2xl bg-white text-black font-bold hover:bg-green-500 transition'>
              Начать бесплатно
            </button>

            <button className='px-4 py-2 rounded-2xl border border-green-400 text-white hover:bg-green-800 transition bg-black/80'>
              Узнать больше
            </button>

        </div>
    </section>
    </>
  )
}

export default Hero;