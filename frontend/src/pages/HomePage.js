import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import '.././assets/css/homepage.css';


function HomePage() {
        return (
          <div className="homepage-main">
            <div className="home-page-navbar">
              <Navbar />
            </div>
            <div className="home-page-sidebar">
              <Sidebar />
            </div>
            <div className="home-page-main-content">
              <div className="home-page-heading">
                <h2>Hello User</h2>
              </div>
            </div>
          </div>
        );
      }
    
export default HomePage;