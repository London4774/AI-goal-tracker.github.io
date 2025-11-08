import Header from './components/Header.tsx';

function App() {

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="bg-space"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <Header/>
          <h1 className="text-5xl font-bold text-white">Hello, World!</h1>
          <p className="text-gray-300 mt-4">Your Plan-Tracker and AI assistant with you!</p>
        </div>
      </div>
    </>
  )
}

export default App;
