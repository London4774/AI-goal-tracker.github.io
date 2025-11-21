import Hero from "../components/Hero";
import Header from "../components/Header";
import Features from "../components/Features";
import About from "../components/About";
import Footer from "../components/Footer";

function Landing() {
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

                <section id="about">
                    <About />
                </section>

              </main>

              <Footer />


            </div>
      </div>
    </>
  )
}

export default Landing;