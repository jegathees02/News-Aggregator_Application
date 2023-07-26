import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Account from "../components/Account";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


function AccountPage() {
  
    return(
        <>
        <div className="homepage-main">
            <div className="homepage-component">
            <div className="home-page-navbar">
              <Navbar />
            </div>
            <div className="home-page-sidebar m-t-4">
              <Sidebar />
            </div>
            </div>
            <div className="home-page-main-content w-4/5 float-right bg-gradient-to-r from-slate-600 to-slate-900">
              {/* <h2 className="text-2xl text-bold text-slate-100">Account Page</h2> */}
              <Account />
            </div>
            <div className="home-page-footer">
        <div className="home-footer w-4/5 float-right">
          <Footer />
        </div>
      </div>
          </div>
        </>
    )
}

export default AccountPage;