import '../App.css'
import loginAuth from '../store/LoginAuth';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const { logout } = loginAuth();

  const [user, setUser] = useState({
    username: "",
    email: ""
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    logout();
  };

  return (
    <div className="min-h-screen bg-purple-100 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-[500px] text-center">

        <h1 className="text-4xl font-bold text-purple-700 mb-6">
          Dashboard
        </h1>

        <div className="text-left mb-8">
          <p className="text-2xl font-semibold">Username:</p>
          <p className="text-xl text-gray-700 mb-4">
            {user.username}
          </p>

          <p className="text-2xl font-semibold">Email:</p>
          <p className="text-xl text-gray-700">
            {user.email}
          </p>
        </div>

        <Link to="/">
          <button
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition w-full text-xl"
            onClick={handleLogout}
          >
            Logout
          </button>
        </Link>

      </div>
    </div>
  );
}
