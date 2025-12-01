import '../App.css'
import { useEffect, useState } from "react";
import { apiGet } from '../api/client.js';
export default function EventList() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
      apiGet("/events").then(data => {
          if (data && data.data) {
            setEvents(data.data);
          }
        });
      
    }, []);

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl mb-[100px] inline-block bg-purple-300 mt-[100px] rounded-2xl text-[#6A3EAE] p-3'>
                    Event List
                </h1>
            </div>

            <div className='flex flex-row justify-center items-center mb-5'>
                <div className='flex flex-col gap-5'>

                    {events.map(ev => (
                        <div
                            key={ev.id}
                            className='bg-white w-[1000px] h-[350px] flex flex-row rounded-2xl'
                        >
                         
                            <img
                                src={ev.banner}
                                className=' w-[600px] h-[350px] rounded-l-2xl object-cover'
                            />

                         
                            <div className='flex flex-col gap-8 justify-center px-10'>
                                <p className='text-3xl'>{ev.title}</p>
                                <p className='text-3xl'>{ev.date}</p>
                                <p className='text-3xl'>Rp. {ev.price}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
