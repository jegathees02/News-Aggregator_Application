// import React from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Saved from "../components/Saved";
// import Footer from "../components/Footer";


// function SavedPage() {


//     return(
//         <>
        
//         <div className="homepage-main">
//             <div className="homepage-component">
//             <div className="home-page-navbar">
//               <Navbar />
//             </div>
//             <div className="home-page-sidebar m-t-4">
//               <Sidebar />
//             </div>
//             </div>
//             <div className="home-page-main-content w-4/5 float-right bg-gradient-to-r from-slate-600 to-slate-900">
//               <Saved />
//             </div>
//             <div className="home-page-footer">
//         <div className="home-footer w-4/5 float-right">
//           <Footer />
//         </div>
//       </div>
//           </div>
//         </>
//     )
// }

// export default SavedPage;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../assets/css/homepage.css";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SavedNews() {
  const [savedArticles, setSavedArticles] = useState([]);
  const navigate = useNavigate();

  const head = {
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/auth/news/saved/get?email=${localStorage.getItem("email")}`, head)
      .then(response => {
        setSavedArticles(response.data);
        console.log("Saved news fetched successfully!");
        
      })
      .catch(error => {
        navigate("/login");
        console.log("Error fetching saved news:", error);
      });
  }, []);

  const handleBookmarkClick = async (index) => {
    const updatedArticles = [...savedArticles];
    updatedArticles[index].isSaved = !updatedArticles[index].isSaved;
    setSavedArticles(updatedArticles);

    const articleToSave = {
      author: savedArticles[index].author,
      title: savedArticles[index].title,
      description: savedArticles[index].description,
      url: savedArticles[index].url,
      img_url: savedArticles[index].img_url,
      p_date: savedArticles[index].publishedAt,
      content: savedArticles[index].content,
      isSaved: updatedArticles[index].isSaved,
    };

    try {
      if (updatedArticles[index].isSaved) {
        // Add the bookmark to the database
        await axios.post(
          `http://localhost:8080/api/v1/auth/news/saved/save?email=${localStorage.getItem("email")}`,
          articleToSave,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Article bookmarked successfully!");
      } else {
        // Remove the bookmark from the database
        await axios.delete(
          `http://localhost:8080/api/v1/auth/news/saved/remove?email=${localStorage.getItem("email")}`,
          articleToSave,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Bookmark removed successfully!");
      }
    } catch (error) {
      console.log("Error handling bookmark:", error);
    }
  };

  const username = useSelector((state) => state.username);

  return (
    <div className="homepage-main">
      <div>
        <div className="homepage-component">
          <div className="home-page-navbar">
            <Navbar />
          </div>
          <div className="home-page-sidebar m-t-4">
            <Sidebar />
          </div>
        </div>
        <div className="home-page-main-content w-4/5 float-right">
          <div className="home-page-heading">
            <h2 className="text-xl text-red-500">Hello {username}</h2>
          </div>
          <div className="home-page-api-content-area text-slate-100 text-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedArticles.map((article, index) => (
                <div key={index} className="homepage-news-grid-main">
                  <div className="homepage-news-grid">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      <img
                        className="home-page-news-grid-img"
                        src={article.img_url}
                        alt="img"
                        onError={(e) => {
                          e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzn24h_6dPbzM0ztC5m6NasKxH3pWtSMUCA&usqp=CAU";
                        }}
                      />
                    </a>

                    <div className="home-page-news-desc text-center">
                      <h3 className="t">{article.title}</h3>
                    </div>
                    <div className="reaction-icon-main">
                      <div className="reaction-icons">
                        <FontAwesomeIcon
                          icon={farBookmark}
                          className="bookmark-icon float-right home-page-bookmark-icon"
                          onClick={() => handleBookmarkClick(index)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="home-page-footer">
        <div className="home-footer w-4/5 float-right">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SavedNews;
