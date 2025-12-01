import style from '../page_styling/Beranda.module.css'
import EventCard from '../components/eventCard'
import '../App.css'



export default function Beranda(){
    console.log("API_URL:", import.meta.env.VITE_API_URL);
    return(
        <main className = {style.main}>
            <section className={style.hero}>
                <div className = {style.banner}>
                    <h2>Event Season</h2>
                    <p>Grab Your Seat Fast!</p>
                </div>
            </section>

            <section >
                <EventCard/>
            </section>
       
           
        </main>
    )
}