import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Contact from "../components/Contact";

function ContactPage() {
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
              <Contact />
            </div>
          </div>
        </>
    )
}

export default ContactPage;