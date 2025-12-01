import { useState } from "react";
import '../page_styling/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import loginAuth from "../store/LoginAuth.jsx"
import { apiPost } from "../api/client.js";

import image1 from '../assets/login/login_icon.svg'
import image2 from '../assets/login/email.svg'
import image3 from '../assets/login/password.svg'
import image4 from '../assets/login/wanita.png'
import image5 from '../assets/login/logo.svg'

export default function Login() {
  const { login } = loginAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const data = await apiPost("/login", { email, password });

      setLoading(false);

      if (!data.success) {
        alert(data.message);
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      login();
      alert("Login sukses!");
      navigate("/"); 

    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Terjadi kesalahan saat login");
    }
  };

  return (
    <div className="login-container">
      <div className="login-title">
        <img src={image1} />
        <p className="heading-title">Login</p>
      </div>

      <div className="login-form-container">
        <p className="description-heading">Masuk ke Akun Eventku</p>

        <div className="input-container">
          <img src={image2} />
          <input
            type="text"
            placeholder="user@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-container">
          <img src={image3}/>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={handleLogin} disabled={loading}>
          {loading ? "Loading..." : "Masuk"}
        </button>

        <p>
          Belum punya akun?{" "}
          <Link to="/Register">
            <span className="sign-btn" id="sign">Daftar Disini</span>
          </Link>
        </p>

        <img className="description-logo" src={image4} />
      </div>

      <img className="main-logo" src={image5} />
    </div>
  );
}
