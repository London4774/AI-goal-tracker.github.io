

function About() {
  return (
    <>
        <section className="relative bg-black/80 text-white py-24 px-6 flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Почему именно наш Проект
          </h2>

            <p className="max-w-2xl leading-relaxed text-center text-white mb-16">
              Этот проект создан, чтобы помочь тебе лучше понимать себя и свои цели.
              Мы объединили мощь искусственного интеллекта и простоту интерфейса,
              чтобы ты мог сфокусироваться на самом главном — <span className="text-green-400">своём прогрессе</span>.
            </p>

            <div className="grid md:grid-cols-2 gap-14 max-w-4xl">
              <div className="p-6 border border-green-800 rounded-2xl bg-black/40 backdrop-blur-sm hover:bg-green-900/20 transition">
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  Умная поддержка
                </h3>

                <p className="text-gray-400">
                  ИИ помогает тебе держать фокус и напоминает о задачах, когда это действительно нужно.
                </p>
              </div>

              <div className="p-6 border border-green-800 rounded-2xl bg-black/40 backdrop-blur-sm hover:bg-green-900/20 transition">
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  Адаптация под тебя
                </h3>

                <p className="text-gray-400">
                  Чем больше ты используешь систему — тем точнее она подстраивается под твой ритм и стиль.
                </p>
              </div>
            </div>
        </section>
    </>
  )
}

export default About