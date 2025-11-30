import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer.jsx";

import Beranda from "./pages/Beranda.jsx";
import Tentang from "./pages/Tentang.jsx";
import Event from "./pages/Event.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx"
import Dashboard from './pages/Dashboard.jsx';
import Checkout  from './pages/Checkout.jsx';
function App() {
  return(
    <BrowserRouter>
      <Navbar />  
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/Tentang" element={<Tentang />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Checkout/:id" element={<Checkout />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
