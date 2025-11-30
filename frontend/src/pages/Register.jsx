import '../page_styling/Login.css'
import { useState } from "react";
import { Link } from 'react-router-dom';

import image1 from '../assets/login/logo.svg'
import image2 from '../assets/login/email.svg'
import image3 from '../assets/login/password.svg'
import image4 from '../assets/login/wanita.png'
import image5 from '../assets/login/user.svg'

export default function Register() {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleRegister() {
    const res = await fetch("http://localhost:8383/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Akun berhasil dibuat!");
    } else {
      alert("Gagal: " + data.error);
    }
  }

  return (
    <>
      <div className="login-container">
        <div className="create-form-container">
          <p className="description-heading">Buat Akun Eventku</p>

          <div className="input-container">
            <img src={image5} />
            <input name="username" onChange={handleChange} type="text" placeholder="Username" />
          </div>

          <div className="input-container">
            <img src={image2} />
            <input name="email" onChange={handleChange} type="email" placeholder="user@gmail.com" />
          </div>

          <div className="input-container">
            <img src={image3} />
            <input name="password" onChange={handleChange} type="password" placeholder="Password" />
          </div>

          <button onClick={handleRegister} className="login-btn">Daftar</button>

          <p>
            Sudah punya akun?
            <Link to="/login"><span className="sign-btn" id="login">Login</span></Link>
          </p>

          <img className="description-logo" src={image4} />
        </div>

        <img className="main-logo" src={image1} />
      </div>
    </>
  );
}
