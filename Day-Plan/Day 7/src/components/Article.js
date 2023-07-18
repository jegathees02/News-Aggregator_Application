import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart, faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

function Article() {
    const [articleStates, setArticleStates] = useState([]);

    const [articles, setArticles] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('https://api.newscatcherapi.com/v2/search', {
    //         params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
    //         headers: {
    //           'x-api-key': 'gmHkQEb9oqi4SUfh2iSLZ7yVd_KC51-aVEe4WcHZkAk'
    //         }
    //       });
    //       setArticleStates(response.data.articles.map(() => ({ bookmarked: false })));

    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    
    //   fetchData();
    // }, []);
    useEffect(() => {
        // axios.get('www.google.com')
        //worldnews api
        axios.get('https://api.worldnewsapi.com/search-news?api-key=35ec723270d040bfb6e059733a3eaf40&text=articles')
          .then(response => setArticles(response.data.news.slice(0, 4)))
          .catch(error => console.log(error));
      }, []);

    const handleBookmarkClick = (index) => {
        const updatedStates = [...articleStates];
        updatedStates[index].bookmarked = !updatedStates[index].bookmarked;
        setArticleStates(updatedStates);
      };
    return(
        <>
        <div className="trending-news-main">
        <div className="flex flex-row">
              {articles.map((article, index) => (
                <div className="home-news1-grid" key={index}>
                  <div className="homepage-news-grid m-3">
                    <div className="md:2 home-page-actual-grid text-xl text-slate-100">
                      <ul className="flex flex-col">
                        <div className="home-page-news-grid">
                          <img className="home-page-news-grid-img" src={article.image} alt="img" />
                          <div className="reaction-icons">
                            {/* <FontAwesomeIcon
                              icon={articleStates[index]?.liked ? faHeart : farHeart}
                              className="heart-icon"
                              onClick={() => handleLikeClick(index)}
                            /> */}
                            <FontAwesomeIcon
                                icon={articleStates[index]?.bookmarked ? faBookmark : farBookmark}
                                className="bookmark-icon"
                                onClick={() => handleBookmarkClick(index)}
                                />
                          </div>
                        </div>
                        <div className="home-page-news-desc text-base text-center">
                          <h3 className="t">{article.title}</h3>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

        </div>
        </>
    )
}

export default Article;