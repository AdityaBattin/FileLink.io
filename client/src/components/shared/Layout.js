import React from "react";
import { Outlet } from "react-router-dom";

// shared components 
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
        <div className="flex flex-col justify-between w-screen h-screen">
          <Header />
          <div className="flex-1 flex flex-col justify-center items-center">{<Outlet />}</div>
          <Footer />
        </div>
    </>
  )
}

export default Layout
