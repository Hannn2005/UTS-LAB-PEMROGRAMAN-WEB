import '../page_styling/Contact.css'
import '../App.css'
import { useState } from 'react'
import { apiPost } from '../api/client.js';

export default function Contact (){
    const [form, setForm] = useState({
    nama: "",
    email: "",
    subject: "",
    pesan: ""
  });

  const [loading, setLoading] = useState(false);

  // handle input 
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // handle submit
  async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        try {
            const data = await apiPost("/contact", form);

            setLoading(false);

            if (data.success) {
                alert("Pesan berhasil dikirim!");
                setForm({
                    nama: "",
                    email: "",
                    subject: "",
                    pesan: ""
                });
            } else {
                alert("Gagal mengirim pesan: " + data.error);
            }
        } catch (error) {
            setLoading(false);
            alert("Terjadi kesalahan: " + error.message);
        }
    }

     return(
   
        <main className="contact-page">
        <div className ="container mx-auto flex justify-center items-center min-h-screen">
            <div className="contact-form-wrapper max-w-lg mx-auto text-center py-10">
            <i className="fa-solid fa-envelope text-5xl text-purple-700 mb-4"></i>

            <h1 className="text-3xl font-bold mb-3">Hubungi Kami</h1>

            <p className="text-gray-700 mb-6">
                Kami senang mendengar dari kamu! <br />
                Kirim pesan atau pertanyaanmu, tim Eventku siap membantu kapan pun.
            </p>

            <form id="contact-form" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nama"
                    placeholder="Masukkan Nama Kamu"
                    className="border p-3 rounded-lg w-full"
                    onChange={handleChange}
                    value={form.nama} 
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border p-3 rounded-lg w-full"
                    onChange={handleChange}
                    value={form.email} 
                    required
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="border p-3 rounded-lg w-full"
                    onChange={handleChange}
                    value={form.subject} 
                    required
                />

                <textarea
                    name="pesan"
                    placeholder="Pesan"
                    rows="6"
                    className="border p-3 rounded-lg w-full"
                    onChange={handleChange}
                    value={form.pesan} 
                    required
                />

                <button
                    type="submit"
                    className="btn-kirim bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition"
                >
                Kirim
                </button>
            </form>

          <p className="reply-notice text-gray-600 mt-6">
            Kami akan membalas pesanmu melalui email dalam waktu 1x24 jam.
          </p>
        </div>
      </div>
    </main> 
        
   
    )
}