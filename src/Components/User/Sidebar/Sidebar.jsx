import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
  <div className='flex justify-between divide-x-2'>
      <div className=" justify-center w-[20%] p-6 bg-white shadow-md">
      <nav>
        <h2 className="mb-4 text-lg font-semibold text-gray-700">Manage My Account</h2>
        <ul className="">
          <li>
            <Link
              to="/sidebar/profile"
              className={`block p-2 rounded-lg ${
                location.pathname === '/sidebar/profile' ? 'text-red-500 font-semibold' : 'text-gray-600'
              }`}
            >
              My Profile
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className={`block p-2 rounded-lg ${
                location.pathname === '/Orders' ? 'text-red-500 font-semibold' : 'text-gray-600'
              }`}
            >
              My Orders
            </Link>
          </li>
          <li>
            <Link
              to="/payment-options"
              className={`block p-2 rounded-lg ${
                location.pathname === '/payment-options' ? 'text-red-500 font-semibold' : 'text-gray-600'
              }`}
            >
              My Payment Options
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <h2 className="mb-4 text-lg font-semibold text-gray-700">Manage Orders</h2>
        <ul className="">
          <li>
            <Link
              to="/sidebar/profile"
              className={`block p-2 rounded-lg ${
                location.pathname === '/' ? 'text-red-500 font-semibold' : 'text-gray-600'
              }`}
            >
              My Returns
            </Link>
          </li>
          <li>
            <Link
              to="/address-book"
              className={`block p-2 rounded-lg ${
                location.pathname === '/address-book' ? 'text-red-500 font-semibold' : 'text-gray-600'
              }`}
            >
              My Collections
            </Link>
          </li>
        </ul>
      </nav>
      <Link to={"/wishlist"}><h2 className="mb-4 text-lg font-semibold text-gray-700">My Wishlist</h2></Link>
    </div>
   <div className='w-[80%]'>
   <Outlet/>
   </div>
  </div>
  );
};

export default Sidebar;
