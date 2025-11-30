import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../App.css'
export default function Checkout() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8383/events/${id}`)
      .then(res => res.json())
      .then(data => setEvent(data.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!event) return <p className="text-center text-5xl font-bold">Loading...</p>;

  return (
    <div className="p-10 min-h[100vh]">
        <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold text-center">{event.title}</h1>
            <img src={event.banner} className=" w-[1200px] object-cover my-4 rounded-2xl" />
            <p className="text-2xl">Tanggal: {event.date}</p>
            <p className="text-2xl">Harga: Rp.{event.price}</p>
            <p className="text-2xl">Lokasi: {event.location}</p>
            <div className="bg-purple-300 p-4 rounded-2xl mt-5">
                <p className="text-3xl font-bold text-center">Deskripsi</p>
                <p className="w-[700px] text-2xl text-justify pt-3">{event.description}</p>
            </div>
        </div>
      
    </div>
  );
}
