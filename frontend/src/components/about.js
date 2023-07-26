import React from "react";
import { useState,useEffect } from "react";
// import "./About.css"; // Import the CSS file for styling
import ".././assets/css/about.css";
import { Dna } from "react-loader-spinner";


function About() {

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
    <div className="about-main">
      <div className="about-content">
        <h2 className="about-heading">About iNews.</h2>
        <p className="about-description">
          iNews. is a news aggregator application that provides news from various sources. It gathers news articles from different publications and presents them in a unified platform. Users can stay updated with the latest news across different categories such as politics, entertainment, sports, and more.
        </p>
        <p className="about-description">
          Our mission is to provide users with a convenient and efficient way to access news from multiple sources in one place. We aim to deliver accurate and reliable news content to keep our users informed and engaged.
        </p>
        <p className="about-description">
          Stay connected with iNews. for the latest updates and news from around the world.
        </p>
      </div>
      <br />
      <div className="about-content">
        <h2 className="about-heading">About Developer</h2>
        <p className="about-description">
          Jegatheeswaran T , Full stack Developer contributed to the iNews, a news-aggreagator application.
        </p>
        <p className="about-description">
          Our mission is to provide users with a convenient and efficient way to access news from multiple sources in one place. We aim to deliver accurate and reliable news content to keep our users informed and engaged.
        </p>
        <p className="about-description">
          Stay connected with iNews. for the latest updates and news from around the world.
        </p>
      </div>
    </div>
  );
}

export default About;