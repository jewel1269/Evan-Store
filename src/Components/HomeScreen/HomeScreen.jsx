import React from "react";
import Navber from "../Navber/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";


const HomeScreen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navber />

      {/* Main Content Area */}
      <section className="flex-grow w-full px-4 lg:px-20 py-4">
        <Outlet />
      </section>
       <Toaster/>
      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default HomeScreen;
