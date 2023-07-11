import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import '.././assets/css/homepage.css';


function HomePage() {
        return (
          <div className="homepage-main">
            <div className="homepage-component">
            <div className="home-page-navbar">
              <Navbar />
            </div>
            <div className="home-page-sidebar">
              <Sidebar />
            </div>
            </div>
            <div className="home-page-main-content w-4/5 float-right bg-gradient-to-r from-slate-600 to-slate-900">
              <div className="home-page-heading">
                <h2 className="text-3xl text-red-500">Hello User</h2>
              </div> 
              <div className="homepage-news-grid w-1/5">
                <div className="md:2 home-page-actual-grid text-xl text-slate-100">
                  {/* <h2>news grid</h2> */}
                  <div className="home-page-news-grid">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsw3fppDvuKwbsoK75KlOKZ0koiS7dJpYtQ&usqp=CAU" alt="img" />
                  </div>
                  <div className="home-page-news-desc">
                    <h3>This news is about launching a new application</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    
export default HomePage;