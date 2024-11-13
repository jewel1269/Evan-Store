import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  // Separate Google login handler
  const googleLogIn = () => {
    setError(
      "Google login is not available right now. Please try manually. Thank you."
    );
  };

  // Submit handler for form registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !emailOrPhone || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("https://evan-store-server.vercel.app/customers/create", {
        name,
        userEmail:emailOrPhone,
        password,
      });

      if (response.status === 200) {
        console.log("Registration successful", response.data);
        toast.success("Registration successful")
        navigate("/loginPage")
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      setError("Registration failed. Please check your details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col md:flex-row bg-white shadow-lg w-full max-w-7xl rounded-lg overflow-hidden">
        <div className="hidden md:flex flex-1 items-center justify-center p-10">
          <img
            src="https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7866.jpg"
            alt="Shopping cart with mobile"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex-1 p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-800">
            Create an account
          </h2>
          <p className="text-gray-600 mt-2">Enter your details below</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border-b border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full px-4 py-2 border-b border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border-b border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <button
              onClick={googleLogIn}
              type="button"
              className="w-full border border-gray-300 py-2 mt-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                alt="Google"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>
          </form>

          <p className="text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <a href="/loginPage" className="text-red-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
