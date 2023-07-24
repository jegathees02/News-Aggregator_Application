import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart, faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

import '../assets/css/homepage.css';

function BreakingNews() {
  const [loading, setLoading] = useState(true);
  const [articleStates, setArticleStates] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://newsdata.io/api/1/news?apikey=pub_2618259e450c3cb95e3e6be38341405b240da&q=pegasus&language=en')
      .then(response => {
        setArticles(response.data.results);
        // Initialize article states based on the fetched articles
        const initialStates = response.data.results.map(() => ({
          bookmarked: false,
          liked: false,
        }));
        setArticleStates(initialStates);
        setLoading(false); // Set loading to false once data is fetched
        // Hide the loader after 10 seconds
        setTimeout(() => {
          setLoading(false);
        }, 10000);
      })
      .catch(error => {
        console.log(error);
        setLoading(false); // Set loading to false in case of an error
      });
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

  return (
    <div className="homepage-main">
      {loading ? ( // Conditional rendering based on loading state
        <div className="loader">Loading...</div>
      ) : (
        <div>
          <div className="home-page-main-content  float-right">
            <div className="home-page-api-content-area text-slate-100 text-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                  <div key={index}>
                    <div className="homepage-news-grid">
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        <img
                          className="home-page-news-grid-img"
                          src={article.image_url}
                          alt="img"
                          onError={(e) => {
                            e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzn24h_6dPbzM0ztC5m6NasKxH3pWtSMUCA&usqp=CAU";
                          }}
                        />
                      </a>

                      <div className="home-page-news-desc text-center">
                        <h3 className="t">{article.title}</h3>
                      </div>
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
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BreakingNews;










// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as farHeart, faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

// import '../assets/css/homepage.css';

// function BreakingNews() {
//   const [articleStates, setArticleStates] = useState([]);
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     axios.get('https://newsdata.io/api/1/news?apikey=pub_2618259e450c3cb95e3e6be38341405b240da&q=pegasus&language=en')
//       .then(response => {
//         setArticles(response.data.results);
//         // Initialize article states based on the fetched articles
//         const initialStates = response.data.results.map(() => ({
//           bookmarked: false,
//           liked: false,
//         }));
//         setArticleStates(initialStates);
//       })
//       .catch(error => console.log(error));
//   }, []);

//   const handleBookmarkClick = (index) => {
//     const updatedStates = [...articleStates];
//     updatedStates[index].bookmarked = !updatedStates[index].bookmarked;
//     setArticleStates(updatedStates);
//   };

//   const handleLikeClick = (index) => {
//     const updatedStates = [...articleStates];
//     updatedStates[index].liked = !updatedStates[index].liked;
//     setArticleStates(updatedStates);
//   };

//   return (
//     <div className="homepage-main">
//       <div>
//         <div className="home-page-main-content  float-right">
//           <div className="home-page-api-content-area text-slate-100 text-xl">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {articles.map((article, index) => (
//                 <div key={index}>
//                   <div className="homepage-news-grid">
//                     <a href={article.url} target="_blank" rel="noopener noreferrer">
//                       <img className="home-page-news-grid-img" src={article.img_url} alt="img"
//                       onError={(e) => {
//                         e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzn24h_6dPbzM0ztC5m6NasKxH3pWtSMUCA&usqp=CAU";
//                       }} />
//                     </a>

//                     <div className="home-page-news-desc text-center">
//                       <h3 className="t">{article.title}</h3>
//                     </div>
//                     <div className="reaction-icons">
//                       <FontAwesomeIcon
//                         icon={articleStates[index]?.liked ? faHeart : farHeart}
//                         className="heart-icon float-left home-page-like-icon"
//                         onClick={() => handleLikeClick(index)}
//                       />
//                       <FontAwesomeIcon
//                         icon={articleStates[index]?.bookmarked ? faBookmark : farBookmark}
//                         className="bookmark-icon float-right home-page-bookmark-icon"
//                         onClick={() => handleBookmarkClick(index)}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BreakingNews;


















// import React from "react";
// import { useEffect,useState } from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as farHeart, faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

// function BreakingNews() {
//     const [articleStates, setArticleStates] = useState([]);

//     const [articles, setArticles] = useState([]);

//     // useEffect(() => {
//     //   const fetchData = async () => {
//     //     try {
//     //       const response = await axios.get('https://api.newscatcherapi.com/v2/search', {
//     //         params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
//     //         headers: {
//     //           'x-api-key': 'gmHkQEb9oqi4SUfh2iSLZ7yVd_KC51-aVEe4WcHZkAk'
//     //         }
//     //       });
//     //       setArticleStates(response.data.articles.map(() => ({ bookmarked: false })));

//     //     } catch (error) {
//     //       console.error(error);
//     //     }
//     //   };
    
//     //   fetchData();
//     // }, []);
//     useEffect(() => {
//         // axios.get('www.google.com')
//         //worldnews api
//         // axios.get('https://api.worldnewsapi.com/search-news?api-key=35ec723270d040bfb6e059733a3eaf40&text=entertainment')
//         axios.get('https://newsdata.io/api/1/news?apikey=pub_2618259e450c3cb95e3e6be38341405b240da&q=pegasus&language=en')
//           .then(response => setArticles(response.data.results.slice(0, 4)))
//           .catch(error => console.log(error));
//       }, []);

//     const handleBookmarkClick = (index) => {
//         const updatedStates = [...articleStates];
//         updatedStates[index].bookmarked = !updatedStates[index].bookmarked;
//         setArticleStates(updatedStates);
//       };
//     return(
//         <>
//         <div className="trending-news-main">
//         <div className="flex flex-row">
//               {articles.map((article, index) => (
//                 <div className="home-news1-grid" key={index}>
//                   <div className="homepage-news-grid m-3">
//                     <div className="md:2 home-page-actual-grid text-xl text-slate-100">
//                       <ul className="flex flex-col">
//                         <div className="home-page-news-grid">
//                           <img className="home-page-news-grid-img" src={article.image_url} alt="img" />
//                           <div className="reaction-icons">
//                             {/* <FontAwesomeIcon
//                               icon={articleStates[index]?.liked ? faHeart : farHeart}
//                               className="heart-icon"
//                               onClick={() => handleLikeClick(index)}
//                             /> */}
//                             <FontAwesomeIcon
//                                 icon={articleStates[index]?.bookmarked ? faBookmark : farBookmark}
//                                 className="bookmark-icon"
//                                 onClick={() => handleBookmarkClick(index)}
//                                 />
//                           </div>
//                         </div>
//                         <div className="home-page-news-desc text-base text-center">
//                           <h3 className="t">{article.title}</h3>
//                         </div>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//         </div>
//         </>
//     )
// }

// export default BreakingNews;