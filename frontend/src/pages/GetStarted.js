import React, { useEffect, useState } from "react";
import Logo from "../components/logo";
import ".././assets/css/getstarted.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Typewriter } from 'react-simple-typewriter'

function GetStarted() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-07-21&sortBy=publishedAt&apiKey=b97401fa288b40d4aaa54e0dfa8c637c')
      .then(response => setArticles(response.data.articles.slice(0, 12)))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className="get-start-main container">
        <div className="get-start-logo row">
          <Logo />
        </div>
        <div className="get-start-content-main row mt-4">
          <div className="get-start-left-side text-slate-100 text-xl">
            <div className="get-start-left-side-scroll">
              {articles.map(article => (
                <div className="get-start-api-fetch-main" key={article.title}>
                  <img className="get-start-api-fetch-img" src={article.urlToImage} alt="img" 
                  onError={(e) => {
                    e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzn24h_6dPbzM0ztC5m6NasKxH3pWtSMUCA&usqp=CAU";
                  }} />
                  <h2 className="get-start-api-fetch-title">{article.title}</h2>
                  {/* <p>{article.description}</p> */}
                  <button className="get-start-api-fetch-button-two ml-6">
                    <span className="get-start-api-fetch-button-two-span text-xl">
                      <a href={article.url}>Read more..</a>
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="get-start-right-side">
            <div className="get-start-right-img-area fixed">
              <div className="get-start-right-img">
                <img className="rounded-xl" src="https://images.pexels.com/photos/1809342/pexels-photo-1809342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
              </div>
              {/* <h3 className="text-slate-100 text-2xl gs-tr">Get to know the news early<br /> as possible</h3> */}
              <div className="type-writer">
            <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("INewsApplication")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("News For U....")
                        .start();
                }}
            />
        </div>
              <div className="get-start-button mt-40 mb-3">
                <div><button className="get-start-nineteen">
                  <span className="get-start-nineteen-span">
                    <Link to="/login">Get Started!</Link>
                  </span>
                </button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetStarted;
