import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#4a306d] pt-10 pb-6 text-[#f0eef6]">
    
      <div className="container mx-auto px-5 flex flex-wrap justify-between gap-8">

      
        <div className="flex flex-col gap-2 basis-[30%]">
          <strong className="text-xl font-bold text-white">Eventku</strong>
          <span className="text-sm text-[#f0eef6]">
            Ticket Smarter, Event Better
          </span>
        </div>

      
        <div className="flex flex-col gap-2">
          <strong className="text-lg">Tentang Kami</strong>
          <Link to = "/Tentang"> <a className="text-[#dcd0e8] hover:text-white" href="#">Tentang Kami</a></Link>
          <Link to = "/Contact"> <a className="text-[#dcd0e8] hover:text-white" href="#">Hubungi Kami</a></Link>
         
        </div>

    
        <div className="flex flex-col gap-2">
          <strong className="text-lg">Informasi</strong>
          <a className="text-[#dcd0e8] hover:text-white" href="#">Syarat & Ketentuan</a>
          <a className="text-[#dcd0e8] hover:text-white" href="#">FAQ</a>
        </div>

    
        <div className="flex flex-col gap-2">
          <strong className="text-lg">Kategori Event</strong>
          <a className="text-[#dcd0e8] hover:text-white" href="#">Concert</a>
          <a className="text-[#dcd0e8] hover:text-white" href="#">Workshop</a>
          <a className="text-[#dcd0e8] hover:text-white" href="#">Webinar</a>
        </div>
      </div>

   
      <div className="container mx-auto px-5">
        <hr className="border-t border-[#6a4f8d] my-8" />
      </div>

   
      <div className="container mx-auto px-5 flex justify-between items-center text-[#dcd0e8] text-sm">
        <span>© 2025 Eventku. Hak Cipta Dilindungi.</span>

        <div className="flex gap-5 text-white text-xl">
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
        </div>
      </div>
    </footer>
  );
}
