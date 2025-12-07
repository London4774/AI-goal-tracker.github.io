import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function MainHeader() {
  return (
    <header className='fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50 p-3'>
        <nav className='max-w-6xl mx-auto flex justify-between items-center px-5 py-3'>
            <span className='text-white font-bold text-2xl'>
                <Link to={"/"}>
                    <span className="text-green-500">Track
                        <span className="text-yellow-500">UR</span>
                        <span className="text-white">Future</span>
                    </span>
                </Link>
            </span>

            <div className="flex justify-between items-center gap-8 text-white">

                <Link to={"/notif"}>
                    <FaBell className="w-8 h-8 text-yellow-300 hover:text-yellow-500 hover:rounded-full transition-all"/>
                </Link>

                <Link to={"/profile"}>
                    <FaUserCircle className="w-8 h-8 hover:text-green-500 transition-all"/>
                </Link>

            </div>
        </nav>
    </header>
  )
}
