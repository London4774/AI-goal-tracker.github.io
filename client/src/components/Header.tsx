import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
    <header className='fixed top-0 left-0 w-full bg-green/80 backdrop-blur-md border-b border-white/10 p-3 z-50'>
      <nav className='max-w-6xl mx-auto flex justify-between items-center px-6 py-4'>
        <span className='text-white font-bold text-2xl'>
          <a href="#">
            <span className="text-green-500">Goal</span>Tracker with <span className="text-green-500">AI</span>
          </a>
        </span>

        <div className="flex justify-center items-center gap-10 text-white">
          {["О Проекте", "Особенности", "Контакты"].map((item) => (
            <span key={item} className="hover:text-green-500 transition-colors duration-200 cursor-pointer">
              <a href="#">{item}</a>
            </span>
          ))}
        </div>

        <div className='flex gap-4'>
          <Link to="/login" className='text-white border border-white px-4 py-2 rounded-xl hover:bg-white/20 transition'>Логин</Link>
          <button className='bg-green-600 text-white font-semibold px-4 py-2 rounded-xl hover:bg-green-400 tranisition'>
            Попробовать продукт
          </button>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header;

