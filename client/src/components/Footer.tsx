import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa6"


function Footer() {
  return (
    <>
        <footer className="bg-black max-w-full border-t-2 border-green-500/80">
            <div className="max-w-xl flex flex-col justify-around items-center m-auto px-5 py-4">

                <div className="flex justify-around gap-5 items-center">

                <div className="flex gap-10 justify-center items-center max-w-xl">

                    <span className='text-white font-bold text-2xl text-center'>
                        <a href="#">
                            <span className="text-green-500">Goal</span>Tracker with <span className="text-green-500">AI</span>
                        </a>
                    </span>
                    {['Контакты', 'FAQ', 'Политика конфиденциальности' , 'Terms'].map((item) => (
                        <span className="text-white" key={item}>
                            <a href="#">{item}</a>
                        </span>
                    ))}
                </div>
                </div>
                

                    <h3 className="text-white left-5">Follow us:</h3>

                <div className="flex gap-3 justify-around">

                    <span className="text-green-500">
                        <a href="#">
                            <FaGithub className="w-8 h-15"/>
                        </a>
                    </span>

                    <span className="text-green-500">
                        <a href="#">
                            <FaTelegram className="w-8 h-15"/>
                        </a>
                    </span>

                    <span className="text-green-500">
                        <a href="#">
                            <FaTwitter className="w-8 h-15"/>
                        </a>
                    </span>

                    

                </div>

                <span className="text-center text-white"> © 2025 GoalTracker. All rights reserved. </span>

            </div>


        </footer>
    </>
    
  )
}

export default Footer;