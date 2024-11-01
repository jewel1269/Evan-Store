import React, { useState } from "react";
import axios from "axios"; // Assuming you'll use axios to send the registration request

const Register = () => {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation check
    if (!name || !emailOrPhone || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      // Send the registration data to the server
      const response = await axios.post("/api/register", {
        name,
        emailOrPhone,
        password,
      });

      // If registration is successful, store email in localStorage
      if (response.status === 200) {
        localStorage.setItem("userEmail", emailOrPhone);
        console.log("Registration successful", response.data);
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      // Handle error if registration fails
      setError("Registration failed. Please check your details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen max-w-7xl w-full mx-auto w-full items-center justify-center bg-gray-50">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
        {/* Left side with the image */}
        <div className="hidden md:flex flex-1 items-center justify-center p-10">
          <div className="relative">
            <img
              src="/path/to/your/shopping-cart-image.png"
              alt="Shopping cart with mobile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right side with the form */}
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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
              type="button"
              className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <img
                src="/path/to/google-icon.png"
                alt="Google"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>
          </form>

          <p className="text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-red-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
