import { useState } from "react";
import { FaUserCircle, FaCog } from "react-icons/fa";
import { FaBell, FaDoorOpen, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const dropdownItems = [
    { name: "Профиль", logo: <FaUser/>, link: "/profile"}, {name: "Настройки", logo: <FaCog/>, link: "/settings"}, {name:"Выход", logo:<FaDoorOpen/>, link: "/"}
];

export default function MainHeader() {

    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = () => {
        setIsOpen(!isOpen);
    }

  return (
    <header className='fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50 p-3'>
        <nav className='max-w-6xl mx-auto flex justify-between items-center px-5 py-3'>
            <span className='text-white font-bold text-2xl'>
                <Link to={"/"}>
                    <span className="text-green-500">Track
                        <span className="text-yellow-500">UR</span>
                        <span className="text-white">Future |</span>
                    </span>
                </Link>

                <span className="text-xl font-semibold text-gray-300"> Главная</span>

            </span>

            <div className="flex justify-between items-center gap-8 text-white">

                <Link to={"/notif"}>
                    <FaBell className="w-8 h-8 text-yellow-300 hover:text-yellow-500 hover:rounded-full transition-all"/>
                </Link>

                <div className="relative">

                    <button onClick={clickHandler} type="button">
                        <FaUserCircle className="w-8 h-8 hover:text-green-500 transition-all"/>
                    </button>

                    <div className="absolute">
                        { isOpen && 
                        <ul className="bg-black border border-white w-30 rounded-sm px-2">
                            <li className="text-blue-400 my-2">UserName</li>
                            {dropdownItems.map((item) => (
                                <li className="hover:text-green-500 my-2">
                                    <Link className="flex items-center gap-1" to={item.link}>
                                        {item.logo} {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>}
                    </div>
                </div>
                
            </div>
        </nav>
    </header>
  )
}
