import '../page_styling/Tentang.css'
import image1 from '../assets/about_us/mpo.jpg'
import image2 from '../assets/about_us/so7.jpg'
import image3 from '../assets/about_us/artjog.avif'
import image4 from '../assets/about_us/tangan_love.jpg'
import image5 from '../assets/about_us/beauty2.avif'

export default function Tentang() {
  return (
    <main>
      <div className="container">
        <section className="hero-card">
          <h1>Ticket Smarter, Event Better</h1>

          <div className="hero-image">
            <img src={image1} alt="MPO Benefit Concert" />
          </div>

          <div className="hero-description">
            <p>
              Eventku adalah platform Ticket Management Service (TMS) yang
              dirancang untuk mendukung pengelolaan tiket berbagai acara dan
              destinasi wisata. Melalui teknologi yang inovatif, Eventku
              memudahkan penyelenggara untuk membuat, memasarkan, menjual,
              mendistribusikan, serta mengelola laporan tiket acara secara
              mandiri dan efisien.
            </p>

            <p>
              Sejak berdiri pada tahun 2021, Eventku memiliki tujuan untuk
              menghadirkan solusi digital yang mempermudah, memperkuat, dan
              memberikan kepuasan bagi penyelenggara maupun pengelola tempat,
              mulai dari tahap distribusi tiket hingga pelaporan setelah acara
              selesai.
            </p>

            <p>
              Kini Eventku telah menjadi mitra bagi ratusan acara dengan ribuan
              hingga jutaan pembeli tiket di seluruh Indonesia bahkan lintas
              negara. Saatnya Anda merasakan sendiri kemudahan dan keunggulan
              dalam menjual tiket acara Anda bersama Eventku!
            </p>
          </div>

          <div className="event-gallery">
            <div className="gallery-item item-1">
              <img src={image2} alt="Konser Sheila On 7" />
            </div>

            <div className="gallery-item item-2">
              <img src={image3} alt="ARTJOG" />
            </div>

            <div className="gallery-item item-3">
              <img src={image4} alt="Penonton konser" />
            </div>

            <div className="gallery-item item-4">
              <img src={image5} alt="Workshop makeup" />
            </div>

            <div className="gallery-item item-5">
              <img src = {image4} alt="Event booth" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
