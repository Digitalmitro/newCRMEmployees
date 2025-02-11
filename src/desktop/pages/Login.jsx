import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth } from "../../context/authContext";
import logo from "../../assets/desktop/logo.svg"
function Login() {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    
    const dummyToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2E1ZDZkNDBhZDk0YjY3Y2VhNjAzYmYiLCJpYXQiOjE3Mzg5MjM3NjgsImV4cCI6MTc0MTUxNTc2OH0.uWv8xC8bmH2yYTh6tbmhY2dMKBj67aKT7JThySEzbzo";
    setToken(dummyToken);
    localStorage.setItem("token", dummyToken);


    navigate("/"); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">
       
        <div className="flex justify-center ">
          <img src={logo} alt="Logo" className="h-50" />
        </div>

       
        <form onSubmit={handleLogin}>
          <div className="relative mb-4">
            <div className="absolute left-4 top-4 text-gray-500"><FaEnvelope  /></div>
            <input
              type="email"
              placeholder="twinkleshaw68216@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full bg-gray-100 focus:outline-none"
            />
          </div>

          <div className="relative mb-6">
            <FaLock className="absolute left-4 top-4 text-gray-500" />
            <input
              type="password"
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full bg-gray-100 focus:outline-none"
            />
          </div>

       
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
