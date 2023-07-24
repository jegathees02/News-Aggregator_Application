import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ".././assets/css/homepage.css";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart, faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";

function HomePage() {
  const [articleStates, setArticleStates] = useState([]);
  const [articles, setArticles] = useState([]);

  const head = {
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/auth/getNews',head)
      .then(response => {
        setArticles(response.data);
        console.log("success");
        console.log(response.data);
        // Initialize article states based on the fetched articles
        const initialStates = response.data.map(() => ({
          bookmarked: false,
          liked: false,
        }));
        setArticleStates(initialStates);
      })
      .catch(error => console.log("Error fetching articles:", error));
  }, []);

  const handleBookmarkClick = (index) => {
    const updatedStates = [...articleStates];
    updatedStates[index].bookmarked = !updatedStates[index].bookmarked;
    setArticleStates(updatedStates);
  };

  const handleLikeClick = (index) => {
    const updatedStates = [...articleStates];
    updatedStates[index].liked = !updatedStates[index].liked;
    setArticleStates(updatedStates);
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
              {articles.map((article, index) => (
                <div key={index} className="homepage-news-grid">
                  <div className="homepage-news-grid">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      <img className="home-page-news-grid-img" src={article.img_url} alt="img"
                      onError={(e) => {
                        e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzn24h_6dPbzM0ztC5m6NasKxH3pWtSMUCA&usqp=CAU";
                      }} />
                    </a>

                    <div className="home-page-news-desc text-center">
                      <h3 className="t">{article.title}</h3>
                    </div>
                    <div className="reaction-icon-main">
                      <div className="reaction-icons">
                        <FontAwesomeIcon
                          icon={articleStates[index]?.liked ? faHeart : farHeart}
                          className="heart-icon float-left home-page-like-icon"
                          onClick={() => handleLikeClick(index)}
                        />
                        <FontAwesomeIcon
                          icon={articleStates[index]?.bookmarked ? faBookmark : farBookmark}
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

export default HomePage;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import ".././assets/css/homepage.css";
// import Footer from "../components/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as farHeart, faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
// import { useSelector } from "react-redux";

// function HomePage() {
//   const [articleStates, setArticleStates] = useState([]);
//   const [articles, setArticles] = useState([]);

//   // useEffect(() => {
//   //   axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-07-20&sortBy=publishedAt&apiKey=b97401fa288b40d4aaa54e0dfa8c637c')
//   //     .then(response => setArticles(response.data.articles.slice(0, 10)))
//   //     .catch(error => console.log(error));
//   // }, []);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/v1/news/getNews',{
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`, // Use backticks (`) here
//       }})
//       .then(response => setArticles(response.data.slice(0, 10)))
//       // .then((response) => {
//       //   console.log(response.data);
//       // })
//       .catch(error => console.log(error));
//   }, []);

//   const handleBookmarkClick = (index) => {
//     const updatedStates = [...articleStates];
//     if (!updatedStates[index]) {
//       updatedStates[index] = { bookmarked: false, liked: false };
//     }
//     updatedStates[index].bookmarked = !updatedStates[index].bookmarked;
//     setArticleStates(updatedStates);
//   };
  
  
//   const handleLikeClick = (index) => {
//     const updatedStates = [...articleStates];
//     if (!updatedStates[index]) {
//       updatedStates[index] = { bookmarked: false, liked: false };
//     }
//     updatedStates[index].liked = !updatedStates[index].liked;
//     setArticleStates(updatedStates);
//   };
//   console.log(articles);
  

//   // useEffect(() => {
//   //   // Function to fetch articles from the backend
//   //   const fetchArticles = async () => {
//   //     try {
//   //       const response = await axios.get("http://localhost:8080/api/v1/news/getNews", {
//   //         headers: {
//   //           Authorization: `Bearer ${localStorage.getItem("token")}`, // Use backticks (`) here
//   //         },
//   //       });
  
//   //       setArticles(response.data);
//   //       // Initialize article states based on the fetched articles
//   //       const initialStates = response.data.map(() => ({
//   //         bookmarked: false,
//   //         liked: false,
//   //       }));
//   //       setArticleStates(initialStates);
//   //     } catch (error) {
//   //       console.log("Error fetching articles:", error);
//   //     }
//   //   };
  
//   //   fetchArticles();
//   // }, []);
// console.log(localStorage.getItem("token"));
  
  
  
  

//   const username = useSelector((state) => state.username);

//   return (
//     <div className="homepage-main">
//       <div>
//         <div className="homepage-component">
//           <div className="home-page-navbar">
//             <Navbar />
//           </div>
//           <div className="home-page-sidebar m-t-4">
//             <Sidebar />
//           </div>
//         </div>
//         <div className="home-page-main-content w-4/5 float-right">
//           <div className="home-page-heading">
//             <h2 className="text-xl text-red-500">Hello {username}</h2>
//           </div>
//           <div className="home-page-api-content-area text-slate-100 text-
//           xl">
//             {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {articles.map((article, index) => (
//                 <div key={index}>
//                   <div className="homepage-news-grid">
//                     <a href={article.url} target="_blank" rel="noopener noreferrer">
//                       <img className="home-page-news-grid-img" src={article.img_url} alt="img" />
//                     </a>
                    
//                     <div className="home-page-news-desc text-center">
//                       <h3 className="t">{article.title}</h3>
//                     </div>
//                     <div className="reaction-icons ">
//                       <FontAwesomeIcon
//                         icon={articleStates[index]?.liked ? faHeart : farHeart}
//                         className="heart-icon float-left  home-page-like-icon"
//                         onClick={() => handleLikeClick(index)}
//                       />
//                       <FontAwesomeIcon
//                         icon={articleStates[index]?.bookmarked ? faBookmark : farBookmark}
//                         className="bookmark-icon float-right  home-page-bookmark-icon"
//                         onClick={() => handleBookmarkClick(index)}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div> */}
//           </div>
//         </div>
//       </div>

//       <div className="home-page-footer">
//         <div className="home-footer w-4/5 float-right">
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;
