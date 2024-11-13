import React, { useState } from "react";
import axios from "axios"; // assuming you'll use axios to send the login request
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LoginPage() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Simple validation checks
    if (!emailOrPhone || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("https://evan-store-server.vercel.app/customers/login", {
        userEmail:emailOrPhone,
        password,
      });

      // Save email or phone to localStorage on successful login
      localStorage.setItem("userEmail", emailOrPhone);
     toast.success("Login successful")
     setTimeout(() => {
      window.location.reload();
    }, 100); 
     navigate("/")
    } catch (error) {
      // Handle error, such as incorrect password
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-7xl w-full">
        {/* Left side with the image */}
        <div className="hidden md:flex flex-1 items-center justify-center p-10 ">
          <img
            src="https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7866.jpg?t=st=1730484610~exp=1730488210~hmac=0ba3c472a2e6473bd4ae6f67c392ce69a5cb1dbeb7ee23523543a3e36dbe940b&w=1380" // replace with actual image path
            alt="Shopping cart with mobile"
            className="object-cover max-h-full"
          />
        </div>

        {/* Right side with the form */}
        <div className="flex-1 p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-800">
            Log in to Exclusive
          </h2>
          <p className="text-gray-600 mt-2">Enter your details below</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full px-4 py-3  border-b border-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-b border-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              className={`w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="flex justify-between items-center mt-4">
            <a href="#" className="text-red-500 hover:underline">
              Forgot Password?
            </a>
            <NavLink to={"/resiPage"}>
                <span className="underline hover:text-red-500">Sign Up</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
