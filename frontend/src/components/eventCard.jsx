import '../App.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

export default function EventCard(){
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8383/events")
      .then(res => res.json())
      .then(data => setEvents(data.data))
      .catch(err => console.log("Error fetching events:", err));
  }, []);

  return (
    <div className='p-[100px] bg-purple-200'>
      <div className='text-center'>
        <h1 className="text-5xl mb-[100px] inline-block bg-purple-300 p-4 rounded-2xl text-[#6A3EAE]">
          Popular Event
        </h1>
      </div>
     
      <div className="grid grid-cols-3 gap-10">
        {events.map(ev => (
          <Link key={ev.id} to={`/checkout/${ev.id}`}>
            <div className='bg-white h-[500px] rounded-[20px] flex flex-col cursor-pointer'>
              <img
                src={ev.banner}
                alt={ev.title}
                className='h-[250px] w-full object-cover rounded-t-[20px]'
              />
              <p className=' text-black px-4 py-3 font-bold text-4xl'>{ev.title}</p>
              <p className=' text-black px-4 py-3 text-3xl'>{ev.date}</p>
              <p className=' text-black px-4 py-3 font-semibold text-3xl'>Rp.{ev.price}</p>
              <p className=' text-black px-4 py-3 font-semibold text-3xl text-center'>{ev.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
