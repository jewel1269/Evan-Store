import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Navber = () => {
  const wishlist = useSelector((state) => state.product.wishlist);
  const products = useSelector((state) => state.product.products);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [product, setProduct]= useState([])

  //here all product 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Use the correct API endpoint
        const response = await axios.get(
          `https://evan-store-server.vercel.app/product/Api/byGetProduct`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const email = localStorage.getItem("userEmail");
      
      if (email) {
        try {
          const response = await axios.get(
            "https://evan-store-server.vercel.app/customers/user",
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

  const handleLogOut = () => {
    localStorage.removeItem("userEmail");
    toast.success("Logout Successful");
    navigate("/loginPage");
  
  };

  return (
    <div className="  bg-base-100 rounded-xl shadow-sm px-4 lg:px-16">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className=" flex-none">
          <NavLink
            to={"/"}
            className="btn btn-ghost normal-case text-lg lg:text-2xl"
          >
            <span className="text-red-600 -mr-2">𝔼</span>𝕧𝕒𝕟
            <span className="text-yellow-800 lg:block md:block hidden -mr-2">𝕊</span>𝕥𝕠𝕣𝕖
          </NavLink>
        </div>

        {/* Search Bar and Navbar Links */}
        <div className="flex-1 flex justify-center items-center lg:space-x-4">
          <div className="hidden lg:flex space-x-4">
            <ul className="gap-10 text-xl menu-horizontal px-1">
              <li className="hover:underline translate-x-2 transform">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? " font-semibold underline underline-offset-4 transition-transform transform scale-105 duration-300"
                      : "hover:text-red-600 hover:scale-105 transition-all duration-300"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 font-semibold underline underline-offset-4 transition-transform transform scale-105 duration-300"
                      : "hover:text-red-600 hover:scale-105 transition-all duration-300"
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/offer"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 font-semibold underline underline-offset-4 transition-transform transform scale-105 duration-300"
                      : "hover:text-red-600 hover:scale-105 transition-all duration-300"
                  }
                >
                  Offer
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 font-semibold underline underline-offset-4 transition-transform transform scale-105 duration-300"
                      : "hover:text-red-600 hover:scale-105 transition-all duration-300"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 font-semibold underline underline-offset-4 transition-transform transform scale-105 duration-300"
                      : "hover:text-red-600 hover:scale-105 transition-all duration-300"
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Search Bar */}
          <div className="form-control h-8  lg:w-80 w-auto  md:w-auto mx-4 lg:mx-0">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Profile, Wishlist, and Cart Icons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-3">
            <NavLink to={"/wishlist"} className="hover:text-red-600 flex">
              {" "}
              <FaRegHeart style={{ height: "20px", width: "20px" }} />
              <span className="relative -mt-3 text-red-600 font-bold">
                {wishlist.length}
              </span>
            </NavLink>
            <NavLink to={"/cart"} className="hover:text-red-600 flex">
              {" "}
              <BsFillCartPlusFill
                style={{ height: "20px", width: "20px" }}
              />{" "}
              <span className="relative -mt-3 text-red-600 font-bold">
                {products.length}
              </span>
            </NavLink>
          </div>

          {/* Profile Dropdown (for larger screens) */}
          <div className="dropdown dropdown-end z-[100] hidden w-full md:block lg:block">
            <label tabIndex={0} className="btn  btn-ghost btn-circle avatar">
              {user ? (
                <h1>{user.name}</h1>
              ) : (
                <div className="w-10 rounded-full">
                  <img
                    alt="User avatar"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRC9tTOtPQRdZW14iXPjRFZQPYMc53k89zzA9er08YAnGNYZch3POHhLqp4bHR9H7XWR0&usqp=CAU"
                  />
                </div>
              )}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm z-[100] dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user && (
                <>
                  <li>
                    <NavLink
                      to={"/sidebar/profile"}
                      className="justify-between"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/sidebar"}>Settings</NavLink>
                  </li>
                </>
              )}
              <li>
                {user ? (
                  <a onClick={() => handleLogOut()}>Logout</a>
                ) : (
                  <NavLink to={"/loginPage"} className="font-bold">
                    LogIn
                  </NavLink>
                )}
              </li>
            </ul>
          </div>

          {/* Mobile Drawer Toggle */}
          <div className="lg:hidden">
            <label htmlFor="mobile-drawer" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile Navigation */}
      <div className="drawer  lg:hidden">
        <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content "></div>
        <div className="drawer-side mt-16 z-[100]">
          <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
          <ul className="menu h-screen p-4 w-64 bg-base-100 text-base-content">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
            <NavLink  to={"/sidebar/profile"}>Profile</NavLink>
            </li>
            <li>
            <NavLink  to={"/sidebar"}>Settings</NavLink>
            </li>
            <li>
              <a onClick={handleLogOut}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
