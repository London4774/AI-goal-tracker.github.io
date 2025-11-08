

function Header() {
  return (
    <>
    <header className='fixed top-0 left-0 w-full bg-green/80 backdrop-blur-md border-b border-white/10 p-3'>
      {/* fixed top-0 w-full flex items-center justify-center p-8 border-2 */}
      <nav className='max-w-6xl mx-auto flex justify-between items-center px-6 py-4'>
        {/* container flex items-center justify-between */}
        <span className='text-white font-bold text-2xl'>
          <span className="text-green-500">Goal</span>Tracker with <span className="text-green-500">AI</span>
        </span>

        <div className="flex justify-center items-center gap-10 text-white">
          {["About", "Features", "Contacts"].map((item) => (
            <span key={item} className="hover:text-white transition-colors duration-200 cursor-pointer">
              <a href="#">{item}</a>
            </span>
          ))}
        </div>

        <div className='flex gap-4'>
          <button className='text-white border border-white px-4 py-2 rounded-xl hover:bg-white/10 transition'>
            Login
          </button>
          
          <button className='bg-yellow-400 text-black font-semibold px-4 py-2 rounded-xl hover:bg-yellow-300 tranisition'>
            Try the product
          </button>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header;

