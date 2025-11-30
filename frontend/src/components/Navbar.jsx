import '../App.css'
import { Link } from "react-router-dom"
import loginAuth from "../store/LoginAuth.jsx"


export default function Navbar() {
  const {condition} = loginAuth()


  return (
    <header className="bg-[#6A3EAE] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">

        <Link to = "/">
           <div className="text-[24px] font-bold text-[#FFF] flex items-center">
              Eventku
            </div>
        </Link>
       
        <nav>
          <ul className="flex list-none  rounded-full  gap-5">
            
            <li>
              <Link
                to="/"
                className="text-[#E0D0F5] no-underline text-[20px] hover:p-1.5 hover:bg-[#C199E0] hover:text-[#2F0C52]
                hover:rounded-[10px] transition-[0.15s]"
              >
                Beranda
              </Link>
            </li>

            <li>
              <Link
                to="/Tentang"
                className="text-[#E0D0F5] no-underline text-[20px] hover:p-1.5 hover:bg-[#C199E0] hover:text-[#2F0C52]
                hover:rounded-[10px] transition-[0.15s]"
              >
                Tentang
              </Link>
            </li>

            <li>
              <Link
                to="/Event"
                className="text-[#E0D0F5] no-underline text-[20px] hover:p-1.5 hover:bg-[#C199E0] hover:text-[#2F0C52]
                hover:rounded-[10px] transition-[0.15s]"
              >
                Event
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                className="text-[#E0D0F5] no-underline text-[20px] hover:p-1.5 hover:bg-[#C199E0] hover:text-[#2F0C52]
                hover:rounded-[10px] transition-[0.15s]"
              >
                Hubungi kami
              </Link>
            </li>

          </ul>
        </nav>


        {condition ? (<Link to = "/Dashboard"><h1 className='text-[#E0D0F5] no-underline text-[20px] hover:p-1.5 hover:bg-[#C199E0] hover:text-[#2F0C52]
                hover:rounded-[10px] transition-[0.15s'>Dashboard</h1></Link>) : (

             <Link
                to="/Login"
                className="text-[#E0D0F5] no-underline text-[20px] hover:p-1.5 hover:bg-[#C199E0] hover:text-[#2F0C52]
                      hover:rounded-[10px] transition-[0.15s]"
            >
              Masuk
            </Link>

        )}
        
    
       
      </div>
    </header>
  );
}