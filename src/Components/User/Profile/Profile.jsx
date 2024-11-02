import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchUserData = async () => {
      const email = localStorage.getItem("userEmail");

      if (email) {
        try {
          const response = await axios.get(
            "http://localhost:5000/customers/user",
            {
              params: { userEmail: email },
            }
          );
          setUser(response.data);
          
        } catch (err) {
          setError(err.response?.data?.error || "Error fetching user data");
        }
      } else {
        setError("No email found in local storage.");
      }
    };
  
    fetchUserData();
  }, []);

  return (
    <div className="flex justify-center py-10 max-w-8xl ">
      <div className="w-full max-w-7xl px-6 py-8 bg-white shadow-md rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-700">Edit Your Profile</h2>
          <p className="text-sm text-gray-500">Welcome! <span className="text-red-500">{user?.name}</span></p>
        </div>

        <form className="mt-8">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                defaultValue={user?.name}
                className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                defaultValue={user?.email}
                className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Address</label>
              <input
                type="text"
                defaultValue={user?.address}
                className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          <h3 className="mt-8 text-lg font-semibold text-gray-700">Password Changes</h3>
          <div className="grid grid-cols-1 gap-6 mt-4">
            <div>
              <label className="text-sm text-gray-600">Current Password</label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">New Password</label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Confirm New Password</label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none">
              Cancel
            </button>
            <button className="ml-3 px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
