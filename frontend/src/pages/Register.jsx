import '../page_styling/Login.css'
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { apiPost } from "../api/client.js";

import image1 from '../assets/login/logo.svg'
import image2 from '../assets/login/email.svg'
import image3 from '../assets/login/password.svg'
import image4 from '../assets/login/wanita.png'
import image5 from '../assets/login/user.svg'

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleRegister() {
    setLoading(true);
    try {
      const data = await apiPost("/register", form);
      setLoading(false);

      if (data.success) {
        alert("Akun berhasil dibuat!");
        navigate("/login");
      } else {
        alert("Gagal: " + (data.error || data.message));
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Terjadi kesalahan saat mendaftar");
    }
  }

  return (
    <div className="login-container">
      <div className="create-form-container">
        <p className="description-heading">Buat Akun Eventku</p>

        <div className="input-container">
          <img src={image5} />
          <input name="username" onChange={handleChange} type="text" placeholder="Username" value={form.username} />
        </div>

        <div className="input-container">
          <img src={image2} />
          <input name="email" onChange={handleChange} type="email" placeholder="user@gmail.com" value={form.email} />
        </div>

        <div className="input-container">
          <img src={image3} />
          <input name="password" onChange={handleChange} type="password" placeholder="Password" value={form.password} />
        </div>

        <button onClick={handleRegister} className="login-btn" disabled={loading}>
          {loading ? "Loading..." : "Daftar"}
        </button>

        <p>
          Sudah punya akun?{" "}
          <Link to="/login"><span className="sign-btn" id="login">Login</span></Link>
        </p>

        <img className="description-logo" src={image4} />
      </div>

      <img className="main-logo" src={image1} />
    </div>
  );
}
