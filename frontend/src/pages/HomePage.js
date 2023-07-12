import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import '.././assets/css/homepage.css';


function HomePage(props) {
  const newsInfo = [
    {
      imgsrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsw3fppDvuKwbsoK75KlOKZ0koiS7dJpYtQ&usqp=CAU',
      desc : 'Helloo hai'
    },
    {
      imgsrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsw3fppDvuKwbsoK75KlOKZ0koiS7dJpYtQ&usqp=CAU',
      desc : 'Helloo hai'
    },
    {
      imgsrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsw3fppDvuKwbsoK75KlOKZ0koiS7dJpYtQ&usqp=CAU',
      desc : 'Helloo hai'
    },
    {
      imgsrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsw3fppDvuKwbsoK75KlOKZ0koiS7dJpYtQ&usqp=CAU',
      desc : 'Helloo hai'
    },
  ]
  const home = newsInfo.map((newsIn) => 
  <li>{newsIn}</li>)


        return (
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
              <div className="home-page-heading">
                <h2 className="text-3xl text-red-500">Hello User</h2>
              </div> 
              <div className="flex flex-row">
                {newsInfo.map((news) => {
                  const list = (
                    
                    <div className="home-news1-grid">
                    <div className="homepage-news-grid m-3" >
                <div className="md:2 home-page-actual-grid text-xl text-slate-100">
                  {/* <h2>news grid</h2> */}
                  <ul className=" flex flex-col">
                  <div className="home-page-news-grid">
                    <img src={news.imgsrc} alt="img" />
                  </div>
                  <div className="home-page-news-desc">
                    <h3 className="text-3xl">{news.desc}</h3>
                  </div>
                  </ul>
                </div>
              </div>
                    </div>
                    
                  );
                  return list;
                })}
              </div>
              {/* <div className="homepage-news-grid w-1/5">
                <div className="md:2 home-page-actual-grid text-xl text-slate-100">
                
                  <ul>
                  <div className="home-page-news-grid">
                    <img src={props.imgsrc} alt="img" />
                  </div>
                  <div className="home-page-news-desc">
                    <h3>{props.desc}</h3>
                  </div>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        );
      }
    
export default HomePage;