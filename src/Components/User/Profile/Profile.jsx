import React from 'react';

const Profile = () => {
  return (
    <div className="p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700">Edit Your Profile</h2>

      <form className="mt-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600">First Name</label>
            <input
              type="text"
              defaultValue="Md"
              className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Last Name</label>
            <input
              type="text"
              defaultValue="Rimel"
              className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              defaultValue="rimel1111@gmail.com"
              className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Address</label>
            <input
              type="text"
              defaultValue="Kingston, 5236, United State"
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
  );
};

export default Profile;
