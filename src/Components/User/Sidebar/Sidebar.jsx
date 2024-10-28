import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className="flex-shrink-0 w-full lg:w-[20%] p-6 bg-white shadow-md">
        <nav>
          <h2 className="mb-4 text-lg font-semibold text-gray-700">Manage My Account</h2>
          <ul>
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
                to='/sidebar/orderList'
                className={`block p-2 rounded-lg ${
                  location.pathname === '/sidebar/orderList' ? 'text-red-500 font-semibold' : 'text-gray-600'
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
          <ul>
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
        <Link to={"/wishlist"}>
          <h2 className="mb-4 text-lg font-semibold text-gray-700">My Wishlist</h2>
        </Link>
      </div>
      <div className='flex-grow w-full lg:w-[80%] p-4'>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
