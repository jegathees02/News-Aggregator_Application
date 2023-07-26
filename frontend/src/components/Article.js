import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart, faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { Dna } from "react-loader-spinner";


function Article() {
  const [articleStates, setArticleStates] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Function to fetch articles from the backend
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/article");
        setArticles(response.data);
        // Initialize article states based on the fetched articles
        const initialStates = response.data.map(() => ({
          bookmarked: false,
          liked: false,
        }));
        setArticleStates(initialStates);
      } catch (error) {
        console.log("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);


  const handleLikeClick = (index) => {
    const updatedStates = [...articleStates];
    updatedStates[index].liked = !updatedStates[index].liked;
    setArticleStates(updatedStates);
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
    img_url: articles[index].img_url,
    p_date: articles[index].p_date,
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
    }  else {
        // Remove the bookmark from the database
        await axios.delete(`http://localhost:8080/api/v1/auth/news/saved/save?email=${localStorage.getItem("email")}`, {
          articleId: articleToSave.id, // Assuming your article object has an 'id' field as a unique identifier
          // Replace with the actual email of the user from your authentication system
        });
        console.log("Bookmark removed successfully!");
      }
    } catch (error) {
      console.log("Error handling bookmark:", error);
    }
  };


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);

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
    <>
      {/* <div className="home-page-news-main">
      <div className="home-page-main-content w-4/5 float-right">
          <div className="home-page-heading">
            <h2 className="text-xl text-red-500">Hello {username}</h2>
          </div> */}
          <div className="home-page-api-content-area text-slate-100 text-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
              {articles.map((article, index) => (
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
        {/* </div>
      </div> */}

      // <div className="home-page-footer">
      //   <div className="home-footer w-4/5 float-right">
      //     {/* Your Footer component here */}
      //   </div>
      // </div>
      {/* </div> */}
    </>
  );
}

export default Article;
