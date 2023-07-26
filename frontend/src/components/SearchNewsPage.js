// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faBookmark, faSearch } from "@fortawesome/free-solid-svg-icons"; // Import faSearch icon
// import { faHeart as farHeart, faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
// import { Dna } from "react-loader-spinner";
// import '../assets/css/homepage.css';

// function Search({ onSearch }) {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     // Call the onSearch prop with the search query
//     onSearch(query);
//   };

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   return (
//     <div className="search-container">
//       <div className="search-bar">
//         <input
//           type="text"
//           value={query}
//           onChange={handleChange}
//           placeholder="Search for news..."
//         />
//         <button onClick={handleSearch}>
//           Sea
//         </button>
//       </div>
//     </div>
//   );
// }

// function SearchNewsPage() {
//   const [loading, setLoading] = useState(true);
//   const [articles, setArticles] = useState([]);
//   const [articleStates, setArticleStates] = useState([]);

//   const handleSearch = async (query) => {
//     try {
//       // Make the API call to fetch relevant news articles based on the search query
//       const response = await axios.get(
//         `https://api.newscatcherapi.com/v2/search?q=${query}`,
//         {
//           headers: {
//             "x-api-key": "your_key_1", // Replace 'your_key_1' with your actual API key
//           },
//         }
//       );
//       // Extract the articles from the API response
//       const fetchedArticles = response.data.articles;
//       setArticles(fetchedArticles);

//       // Initialize article states based on the fetched articles
//       const initialStates = fetchedArticles.map(() => ({
//         bookmarked: false,
//         liked: false,
//       }));
//       setArticleStates(initialStates);

//       setLoading(false); // Set loading to false once data is fetched
//     } catch (error) {
//       console.log("Error fetching articles:", error);
//       setLoading(false); // Set loading to false in case of an error
//     }
//   };

//   const handleBookmarkClick = async (index) => {
//     const updatedStates = [...articleStates];
//     updatedStates[index].bookmarked = !updatedStates[index].bookmarked;
//     setArticleStates(updatedStates);

//     const updatedArticles = [...articles];
//     updatedArticles[index].isSaved = !updatedArticles[index].isSaved; // Toggle the isSaved value
//     setArticles(updatedArticles);

//     const articleToSave = {
//       author: articles[index].author,
//       title: articles[index].title,
//       description: articles[index].description,
//       url: articles[index].url,
//       img_url: articles[index].img_url,
//       p_date: articles[index].publishedAt,
//       content: articles[index].content,
//       isSaved: updatedArticles[index].isSaved, // Use the updated value of isSaved
//     };

//     try {
//       if (updatedStates[index].bookmarked) {
//         // Add the bookmark to the database
//         await axios.post(
//           `http://localhost:8080/api/v1/auth/news/saved/save?email=${localStorage.getItem("email")}`,
//           articleToSave,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         console.log("Article bookmarked successfully!");
//       } else {
//         // Remove the bookmark from the database
//         await axios.delete(`http://localhost:8080/api/v1/auth/news/saved/remove?email=${localStorage.getItem("email")}&id=${articles[index].id}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//             "Content-Type": "application/json",
//           },
//         });
//         console.log("Bookmark removed successfully!");
//       }
//     } catch (error) {
//       console.log("Error handling bookmark:", error);
//     }
//   };

//   const handleLikeClick = (index) => {
//     const updatedStates = [...articleStates];
//     updatedStates[index].liked = !updatedStates[index].liked;
//     setArticleStates(updatedStates);
//   };

//   useEffect(() => {
//     axios.get('https://api.worldnewsapi.com/search-news?api-key=35ec723270d040bfb6e059733a3eaf40&text=breaking_news&country=in')
//       .then(response => {
//         setArticles(response.data.news);
//         // Initialize article states based on the fetched articles
//         const initialStates = response.data.news.map(() => ({
//           bookmarked: false,
//           liked: false,
//         }));
//         setArticleStates(initialStates);
//         setLoading(false); // Set loading to false once data is fetched
//         // Hide the loader after 10 seconds
//         setTimeout(() => {
//           setLoading(false);
//         }, 8000);
//       })
//       .catch(error => {
//         console.log(error);
//         setLoading(false); // Set loading to false in case of an error
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "80vh",
//         }}
//       >
//         <Dna
//           visible={true}
//           height={80}
//           width={80}
//           ariaLabel="dna-loading"
//           wrapperStyle={{}}
//           wrapperClass="dna-wrapper"
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="homepage-main">
//       <Search onSearch={handleSearch} />
//       <div className="home-page-main-content float-right bg-gradient-to-r from-slate-600 to-slate-900">
//         <div className="home-page-heading">
//           <h2 className="text-xl text-red-500">Hello {localStorage.getItem("email")}</h2>
//         </div>
//         <div className="home-page-api-content-area text-slate-100 text-xl">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {articles.map((article, index) => (
//               <div key={index} className="homepage-news-grid-main">
//                 <div className="homepage-news-grid">
//                   <a href={article.url} target="_blank" rel="noopener noreferrer">
//                     <img
//                       className="home-page-news-grid-img"
//                       src={article.image}
//                       alt="img"
//                       onError={(e) => {
//                         e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzn24h_6dPbzM0ztC5m6NasKxH3pWtSMUCA&usqp=CAU";
//                       }}
//                     />
//                   </a>

//                   <div className="home-page-news-desc text-center">
//                     <h3 className="t">{article.title}</h3>
//                   </div>
//                   <div className="reaction-icon-main">
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
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SearchNewsPage;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart, faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { Dna } from "react-loader-spinner";
import "../assets/css/homepage.css";
import "../assets/css/search.css";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // Call the onSearch prop with the search query
    onSearch(query);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for news..."
        />
        <button onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

function SearchNewsPage() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [articleStates, setArticleStates] = useState([]);

  const handleSearch = async (query) => {
    try {
      // Make the API call to fetch relevant news articles based on the search query
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=b97401fa288b40d4aaa54e0dfa8c637c`,
      );

      // Extract the articles from the API response
      const fetchedArticles = response.data.articles;
      setArticles(fetchedArticles);

      // Initialize article states based on the fetched articles
      const initialStates = fetchedArticles.map(() => ({
        bookmarked: false,
        liked: false,
      }));
      setArticleStates(initialStates);

      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.log("Error fetching articles:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  const handleBookmarkClick = async (index) => {
    const updatedStates = [...articleStates];
    updatedStates[index].bookmarked = !updatedStates[index].bookmarked;
    setArticleStates(updatedStates);

    const updatedArticles = [...articles];
    updatedArticles[index].isSaved = !updatedArticles[index].isSaved; // Toggle the isSaved value
    setArticles(updatedArticles);

    const articleToSave = {
      author: articles[index].author,
      title: articles[index].title,
      description: articles[index].description,
      url: articles[index].url,
      img_url: articles[index].urlToImage,
      p_date: articles[index].publishedAt,
      content: articles[index].content,
      isSaved: updatedArticles[index].isSaved, // Use the updated value of isSaved
    };

    try {
      if (updatedStates[index].bookmarked) {
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
        await axios.delete(`http://localhost:8080/api/v1/auth/news/saved/remove?email=${localStorage.getItem("email")}&id=${articles[index].id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        console.log("Bookmark removed successfully!");
      }
    } catch (error) {
      console.log("Error handling bookmark:", error);
    }
  };

  const handleLikeClick = (index) => {
    const updatedStates = [...articleStates];
    updatedStates[index].liked = !updatedStates[index].liked;
    setArticleStates(updatedStates);
  };

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b97401fa288b40d4aaa54e0dfa8c637c')
      .then(response => {
        setArticles(response.data.articles);
        // Initialize article states based on the fetched articles
        const initialStates = response.data.articles.map(() => ({
          bookmarked: false,
          liked: false,
        }));
        setArticleStates(initialStates);
        setLoading(false); // Set loading to false once data is fetched
        // Hide the loader after 10 seconds
        setTimeout(() => {
          setLoading(false);
        }, 8000);
      })
      .catch(error => {
        console.log(error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Dna
          visible={true}
          height={80}
          width={80}
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  return (
    <div className="homepage-main">
      <Search onSearch={handleSearch} />
      <div className="home-page-main-content float-right bg-gradient-to-r from-slate-600 to-slate-900">
        <div className="home-page-heading">
          <h2 className="text-xl text-red-500">Hello {localStorage.getItem("email")}</h2>
        </div>
        <div className="home-page-api-content-area text-slate-100 text-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="homepage-news-grid-main">
                <div className="homepage-news-grid">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <img
                      className="home-page-news-grid-img"
                      src={article.urlToImage}
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
  );
}

export default SearchNewsPage;
