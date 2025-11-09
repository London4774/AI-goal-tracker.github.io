import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="bg-space absolute inset-0"></div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />

          <main className='flex grow flex-col'>

            <section id='hero'>
              <Hero />
            </section>

            <section id='features'>
              <Features />
            </section>

          </main>


        </div>
      </div>
    </>
  )
}

export default App;
