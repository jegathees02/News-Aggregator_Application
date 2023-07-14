import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart, faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import '../assets/css/homepage.css';
import { UseSelector, useSelector } from "react-redux";

function HomePage(props) {
  const [articleStates, setArticleStates] = useState([]);

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

  const articles = [
    {
      source: {
        id: "financial-times",
        name: "Financial Times",
      },
      author: "Gary Jones, Greg McMillan, William Langley",
      title: "Live news: Chinese trade lags in June as global demand falters - Financial Times",
      description: "",
      url: "https://www.ft.com/content/eec1d271-b479-4928-870d-3a6a895cffde",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fd0daf7b8-c568-411b-84cb-366a3aa8ff9f.jpg?source=next-opengraph&fit=scale-down&width=900",
      publishedAt: "2023-07-13T04:12:18Z",
      content:
        "South Korea: Economists expect the Bank of Korea to hold rates at 3.5 per cent for the fourth straight meeting.\r\nMeetings: The EU-Japan summit begins in Brussels, attended by European Council preside… [+903 chars]",
    },
    {
        source: {
          id: "financial-times",
          name: "Financial Times",
        },
        author: "Gary Jones, Greg McMillan, William Langley",
        title: "Live news: Chinese trade lags in June as global demand falters - Financial Times",
        description: "",
        url: "https://www.ft.com/content/eec1d271-b479-4928-870d-3a6a895cffde",
        urlToImage:
          "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fd0daf7b8-c568-411b-84cb-366a3aa8ff9f.jpg?source=next-opengraph&fit=scale-down&width=900",
        publishedAt: "2023-07-13T04:12:18Z",
        content:
          "South Korea: Economists expect the Bank of Korea to hold rates at 3.5 per cent for the fourth straight meeting.\r\nMeetings: The EU-Japan summit begins in Brussels, attended by European Council preside… [+903 chars]",
      },
      {
        source: {
          id: "financial-times",
          name: "Financial Times",
        },
        author: "Gary Jones, Greg McMillan, William Langley",
        title: "Live news: Chinese trade lags in June as global demand falters - Financial Times",
        description: "",
        url: "https://www.ft.com/content/eec1d271-b479-4928-870d-3a6a895cffde",
        urlToImage:
          "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fd0daf7b8-c568-411b-84cb-366a3aa8ff9f.jpg?source=next-opengraph&fit=scale-down&width=900",
        publishedAt: "2023-07-13T04:12:18Z",
        content:
          "South Korea: Economists expect the Bank of Korea to hold rates at 3.5 per cent for the fourth straight meeting.\r\nMeetings: The EU-Japan summit begins in Brussels, attended by European Council preside… [+903 chars]",
      },
    // Add more articles as needed
  ];

  useState(() => {
    const initialStates = articles.map(() => ({
      bookmarked: false,
      liked: false,
    }));
    setArticleStates(initialStates);
  }, [articles]);


  const username = useSelector((state) => state.username);
  return (
    <div className="homepage-main">
      <div>
        <div className="homepage-component">
          {/* Add Navbar and Sidebar components */}
        </div>
        <div className="home-page-main-content w-4/5 float-right">
          <div className="home-page-heading">
            <h2 className="text-3xl text-red-500">Hello {username}</h2>
          </div>
          <div className="home-page-api-content-area text-slate-100 text-2xl">
            {/* Render the news information using articles and articleStates */}
            {articles.map((article, index) => (
              <div className="home-news1-grid" key={index}>
                <div className="homepage-news-grid m-3">
                  <div className="md:2 home-page-actual-grid text-xl text-slate-100">
                    <ul className="flex flex-col">
                      <div className="home-page-news-grid">
                        <img
                          className="home-page-news-grid-img"
                          src={article.urlToImage}
                          alt="img"
                        />
                        <div className="reaction-icons">
                          <FontAwesomeIcon
                            icon={articleStates[index]?.liked ? faHeart : farHeart}
                            className="heart-icon"
                            onClick={() => handleLikeClick(index)}
                          />
                          <FontAwesomeIcon
                            icon={articleStates[index]?.bookmarked ? faBookmark : farBookmark}
                            className="bookmark-icon"
                            onClick={() => handleBookmarkClick(index)}
                          />
                        </div>
                      </div>
                      <div className="home-page-news-desc text-base text-center">
                        <h3>{article.title}</h3>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Add Footer component */}
    </div>
  );
}

export default HomePage;


const articles = [
  {
  "source": {
  "id": "financial-times",
  "name": "Financial Times"
  },
  "author": "Gary Jones, Greg McMillan, William Langley",
  "title": "Live news: Chinese trade lags in June as global demand falters - Financial Times",
  "description": "",
  "url": "https://www.ft.com/content/eec1d271-b479-4928-870d-3a6a895cffde",
  "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fd0daf7b8-c568-411b-84cb-366a3aa8ff9f.jpg?source=next-opengraph&fit=scale-down&width=900",
  "publishedAt": "2023-07-13T04:12:18Z",
  "content": "South Korea: Economists expect the Bank of Korea to hold rates at 3.5 per cent for the fourth straight meeting.\r\nMeetings: The EU-Japan summit begins in Brussels, attended by European Council preside… [+903 chars]"
  },
  // {
  // "source": {
  // "id": null,
  // "name": "YouTube"
  // },
  // "author": null,
  // "title": "Inflation: Rent prices remain elevated as housing market cools - Yahoo Finance",
  // "description": null,
  // "url": "https://www.youtube.com/watch?v=ZPyA599Dllk",
  // "urlToImage": null,
  // "publishedAt": "2023-07-13T02:14:51Z",
  // "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
  // },
  // {
  // "source": {
  // "id": null,
  // "name": "KGO-TV"
  // },
  // "author": null,
  // "title": "San Francisco's historic Anchor Brewing Company, country's 1st craft brewery, shutting down after 127 years - KGO-TV",
  // "description": "\"It was great that Fitz Maytag saved it back in 1966. I just wish somebody would save it now.\" This latest development comes one month after Anchor announced it was stopping national distribution and discontinuing its Christmas Ale, which it has produced sinc…",
  // "url": "https://abc7news.com/anchor-steam-brewery-brewing-shutting-down-san-francisco-closing/13493162/",
  // "urlToImage": "https://cdn.abcotvs.com/dip/images/13495802_071223-kgo-anchor-brewing-building-img.jpg?w=1600",
  // "publishedAt": "2023-07-13T01:30:00Z",
  // "content": "SAN FRANCISCO (KGO) -- After 127 years in business, San Francisco's Anchor Brewing Company is shutting down.\r\nAccording to a press release, the brewery has been facing challenging economic factors an… [+4942 chars]"
  // },
  {
  "source": {
  "id": "reuters",
  "name": "Reuters"
  },
  "author": "Reuters",
  "title": "Elon Musk launches AI firm xAI as he looks to take on OpenAI - Reuters",
  "description": "Elon Musk, the billionaire entrepreneur, launched his long-teased artificial intelligence startup xAI on Wednesday, unveiling a team comprised of engineers from the same big U.S. technology firms that he hopes to challenge in his bid to build an alternative t…",
  "url": "https://www.reuters.com/technology/elon-musks-ai-firm-xai-launches-website-2023-07-12/",
  "urlToImage": "https://www.reuters.com/resizer/lEn0-qHGTSU-i4qE6S4qKCu9Mvc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F2L5QKLKVRPQ3FFRDBRNR27HXY.jpg",
  "publishedAt": "2023-07-13T01:18:00Z",
  "content": "July 12 (Reuters) - Elon Musk, the billionaire entrepreneur, launched his long-teased artificial intelligence startup xAI on Wednesday, unveiling a team comprised of engineers from the same big U.S. … [+2677 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "YouTube"
  },
  "author": null,
  "title": "US Inflation Cools Sharply, FBI Director Testifies - Bloomberg Television",
  "description": "Bloomberg's Julie Fine and Jack Fitzpatrick discusses the latest on US inflation and what the CPI report means for Biden. They also discuss FBI director Chri...",
  "url": "https://www.youtube.com/watch?v=uEnQDek8nZw",
  "urlToImage": "https://i.ytimg.com/vi/uEnQDek8nZw/maxresdefault.jpg",
  "publishedAt": "2023-07-13T00:15:54Z",
  "content": null
  },
  {
  "source": {
  "id": null,
  "name": "YouTube"
  },
  "author": null,
  "title": "Insurance companies change coverage in California - KTVU FOX 2 San Francisco",
  "description": "Homeowners insurance cancelations are becoming all too common, and the competition is dwindling as wellSubscribe to KTVU's YouTube channel:https://www.youtub...",
  "url": "https://www.youtube.com/watch?v=noSNVRxm-lU",
  "urlToImage": "https://i.ytimg.com/vi/noSNVRxm-lU/maxresdefault.jpg",
  "publishedAt": "2023-07-13T00:01:02Z",
  "content": null
  },
  // {
  // "source": {
  // "id": null,
  // "name": "CNBC"
  // },
  // "author": "Samantha Subin",
  // "title": "Stock futures tick up after S&P 500 notches highest close since April 2022: Live updates - CNBC",
  // "description": "The S&P 500 and Nasdaq Composite are coming off their highest closing levels since April 2022",
  // "url": "https://www.cnbc.com/2023/07/12/stock-futures-today-live-updates.html",
  // "urlToImage": "https://image.cnbcfm.com/api/v1/image/107270407-16891749352023-07-12t151110z_248228036_rc2p12a3uibf_rtrmadp_0_usa-stocks.jpeg?v=1689199318&w=1920&h=1080",
  // "publishedAt": "2023-07-12T23:55:00Z",
  // "content": "Stock futures inched higher in overnight trading after the S&amp;P 500 closed at its highest level in over a year. Markets also looked ahead to another key inflation reading.\r\nDisney shares added nea… [+1844 chars]"
  // },
  // {
  // "source": {
  // "id": "cbs-news",
  // "name": "CBS News"
  // },
  // "author": "Faris Tanyos",
  // "title": "Turbulence during Allegiant Air flight hospitalizes 4 in Florida - CBS News",
  // "description": "It was the latest in a string of dangerous turbulence-related incidents over the past year, a trend that experts say could be worsening because of climate change.",
  // "url": "https://www.cbsnews.com/news/turbulence-allegiant-air-flight-hospitalizes-4-clearwater-florida/",
  // "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/07/12/1e95bc6e-c9c9-4711-9b9f-df3b6146dcd2/thumbnail/1200x630/a4b501a0b6d277fbc566508b6f155a67/0712-en-bojo-2121779-640x360.jpg?v=867e41af7e860d9286e5bd7e91ee0db8",
  // "publishedAt": "2023-07-12T23:55:00Z",
  // "content": "Two passengers and two crewmembers aboard an Allegiant Air flight were hospitalized after the plane experienced \"severe turbulence\" while landing Wednesday afternoon in Clearwater, Florida, the airli… [+1663 chars]"
  // },
  // {
  // "source": {
  // "id": null,
  // "name": "San Francisco Chronicle"
  // },
  // "author": "Heather Knight",
  // "title": "La Cocina was a beloved Tenderloin business. Now, it's closing - San Francisco Chronicle",
  // "description": "La Cocina is the latest business slated to shutter in the Tenderloin as drugs devastate the neighborhood",
  // "url": "https://www.sfchronicle.com/sf/bayarea/heatherknight/article/sf-la-cocina-close-tenderloin-businesses-drugs-18197741.php",
  // "urlToImage": "https://s.hdnux.com/photos/01/16/74/60/20696080/6/rawImage.jpg",
  // "publishedAt": "2023-07-12T23:53:13Z",
  // "content": "Just over two years ago, La Cocina Marketplace opened at Golden Gate Avenue and Hyde Street with the hope that immigrant women and their delicious food could finally save one of San Franciscos most d… [+4778 chars]"
  // },
  // {
  // "source": {
  // "id": "reuters",
  // "name": "Reuters"
  // },
  // "author": "Lucia Mutikani",
  // "title": "US economy shifts into disinflation mode; consumer prices rise modestly - Reuters",
  // "description": "U.S. consumer prices rose modestly in June and registered their smallest annual increase in more than two years as inflation subsided further, but probably not fast enough to dissuade the Federal Reserve from resuming raising interest rates this month.",
  // "url": "https://www.reuters.com/markets/us/us-consumer-prices-rise-modestly-june-core-inflation-slowing-2023-07-12/",
  // "urlToImage": "https://www.reuters.com/resizer/FQp6aCEO8pemWsHYTb5B5WUYGPY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SGV2N5MGRBP33CZ56U2JGAY3RE.jpg",
  // "publishedAt": "2023-07-12T22:41:19Z",
  // "content": "WASHINGTON, July 12 (Reuters) - U.S. consumer prices rose modestly in June and registered their smallest annual increase in more than two years as inflation subsided further, but probably not fast en… [+6223 chars]"
  // },
  // {
  // "source": {
  // "id": "usa-today",
  // "name": "USA Today"
  // },
  // "author": "Anthony Robledo",
  // "title": "Domino's pizza delivery through Uber Eats, Postmates coming in 2024 - USA TODAY",
  // "description": "Domino's will allow customers to order pizza, pasta and other items on Uber Eats or Postmates by 2024, the pizza chain announced Wednesday.",
  // "url": "https://www.usatoday.com/story/money/food/2023/07/12/dominos-uber-eats-postmates-announcement/70407520007/",
  // "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/07/12/USAT/88e1c5c9-cc65-48f7-a5c2-4aa95b180510-Dominos_pizza.JPG?crop=2999,1687,x0,y152&width=2999&height=1687&format=pjpg&auto=webp",
  // "publishedAt": "2023-07-12T22:31:35Z",
  // "content": "Come next year, Domino's cars won't be the only vehicles delivering your pizza.\r\nDomino's announced Wednesday that customers can use Uber Eats and Postmates to order food by 2024. The pizza restauran… [+1389 chars]"
  // },
  // {
  // "source": {
  // "id": null,
  // "name": "YouTube"
  // },
  // "author": null,
  // "title": "'Bloomberg Technology' Full Show (07/12/2023) - Bloomberg Technology",
  // "description": "\"Bloomberg Technology\" is our daily news program focused exclusively on technology, innovation and the future of business hosted by Caroline Hyde in New York...",
  // "url": "https://www.youtube.com/watch?v=Omjckimc2lU",
  // "urlToImage": "https://i.ytimg.com/vi/Omjckimc2lU/maxresdefault.jpg",
  // "publishedAt": "2023-07-12T21:48:26Z",
  // "content": null
  // },
  // {
  // "source": {
  // "id": null,
  // "name": "Vox"
  // },
  // "author": "Sara Morrison",
  // "title": "Google and Meta got your data from H&R Block and other tax prep companies. Sen. Elizabeth Warren isn’t happy. - Vox.com",
  // "description": "A new congressional report about an internet privacy violation might actually lead to consequences.",
  // "url": "https://www.vox.com/technology/2023/7/12/23792903/meta-google-taxact-hrblock-taxslayer-privacy-pixels-warren",
  // "urlToImage": "https://cdn.vox-cdn.com/thumbor/mfRCtIKBytNqDV2DEawM52WzxGU=/0x837:5654x3797/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24785457/GettyImages_669810548.jpg",
  // "publishedAt": "2023-07-12T21:36:53Z",
  // "content": "Sen. Elizabeth Warren is coming for the tracking pixels.\r\nSpecifically, she, along with fellow Democratic Sens. Ron Wyden, Richard Blumenthal, Tammy Duckworth, Bernie Sanders, and Sheldon Whitehouse,… [+9237 chars]"
  // },
  // {
  // "source": {
  // "id": null,
  // "name": "WAVE 3"
  // },
  // "author": null,
  // "title": "Millions in rare gold coins unearthed in Kentucky cornfield - WAVE 3",
  // "description": "The coins are dated from 1840 to 1862 and are estimated at a value exceeding $2 million.",
  // "url": "https://www.wave3.com/2023/07/12/millions-rare-gold-coins-unearthed-kentucky-cornfield/",
  // "urlToImage": "https://gray-wave-prod.cdn.arcpublishing.com/resizer/X2hdknUqo7luPTvtn6ecR_yo2V8=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/OLRF5MPMPJATNA3KLOWOV3EC4E.png",
  // "publishedAt": "2023-07-12T21:19:00Z",
  // "content": "LOUISVILLE, Ky. (WAVE) - Unearthed recently in a Kentucky cornfield, more than 700 rare U.S. gold coins have become one of the greatest coin-collecting finds of the 21st century.\r\nThe coins are dated… [+1316 chars]"
  // },
  // {
  // "source": {
  // "id": "the-hill",
  // "name": "The Hill"
  // },
  // "author": "Brooke Migdon",
  // "title": "CNN apologizes for misgendering trans influencer Dylan Mulvaney - The Hill",
  // "description": "CNN apologized Wednesday for misgendering transgender influencer Dylan Mulvaney in a segment aired this week touching on Mulvaney’s role in a right-wing boycott against Bud Light and its parent company, Anheuser-Busch. Bud Light has faced months of conservati…",
  // "url": "https://thehill.com/homenews/media/4094207-cnn-apologizes-for-misgendering-trans-influencer-dylan-mulvaney/",
  // "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/04/Mulvaney.png?w=1280",
  // "publishedAt": "2023-07-12T21:14:00Z",
  // "content": "Skip to content\r\nCNN apologized Wednesday for misgendering transgender influencer Dylan Mulvaney in a segment aired this week touching on Mulvaney’s role in a right-wing boycott against Bud Light and… [+1357 chars]"
  // },
  // {
  // "source": {
  // "id": null,
  // "name": "BBC News"
  // },
  // "author": "https://www.facebook.com/bbcnews",
  // "title": "Elon Musk accused of owing $500m in Twitter severance - BBC",
  // "description": "The layoffs ultimately affected roughly 6,000 people, according to the lawsuit.",
  // "url": "https://www.bbc.com/news/business-66183954",
  // "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15BEA/production/_130366098_66183954.jpg",
  // "publishedAt": "2023-07-12T21:03:59Z",
  // "content": "A former human resources boss at Twitter has accused the company of failing to pay roughly $500m (£385m) in severance pay owed to former staff of the company.\r\nCourtney McMillian, who was the social … [+2079 chars]"
  // },
  // {
  // "source": {
  // "id": null,
  // "name": "The Philadelphia Inquirer"
  // },
  // "author": "Ariana Perez-Castells",
  // "title": "American Airlines launches new bus program at PHL that lets some travelers skip security lines - The Philadelphia Inquirer",
  // "description": "Philadelphia International Airport will be connected to Atlantic City and Lehigh Valley International Airports via bus.",
  // "url": "https://www.inquirer.com/business/american-airlines-philadelphia-international-airport-landline-buses-20230712.html",
  // "urlToImage": "https://www.inquirer.com/resizer/WV2LThXUJ4hBb283E9jrBi4cPm0=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/567C777DWZFOFJEIQEMYZGFVBI.jpg",
  // "publishedAt": "2023-07-12T20:34:50Z",
  // "content": "American Airlines travelers who used to drive to Philadelphia from Atlantic City orthe Lehigh Valley to catch aflight out of Philadelphia International Airport can now head to their local airport to … [+2694 chars]"
  // },
  // {
  // "source": {
  // "id": "fortune",
  // "name": "Fortune"
  // },
  // "author": "Mia Gindis, Matthew Boyle, Bloomberg",
  // "title": "Shopify’s anti-meeting crusade is failing and it’s taken to shaming employees instead: ‘Most of the modern work environment is broken’ - Fortune",
  // "description": "“Most of the modern work environment is broken,” says COO Kaz Nejatian. “It’s not just any one change that matters.”",
  // "url": "https://fortune.com/2023/07/12/remote-work-zoom-meeting-shopify-cost-calculator-modern-work-broken/",
  // "urlToImage": "https://content.fortune.com/wp-content/uploads/2023/07/GettyImages-1259791767-e1689193978936.jpg?resize=1200,600",
  // "publishedAt": "2023-07-12T20:34:00Z",
  // "content": "Time is money, and Shopify Inc. wants its workers to understand that maxim applies to pointless meetings, too. The Canadian e-commerce company has rolled out a calculator embedded in employees calend… [+3404 chars]"
  // },
  // {
  // "source": {
  // "id": "the-wall-street-journal",
  // "name": "The Wall Street Journal"
  // },
  // "author": "Paul Kiernan",
  // "title": "U.S. Takes Third Shot at Shoring Up Money-Market Funds - The Wall Street Journal",
  // "description": "SEC votes to change rules governing the funds, whose holdings have ballooned this year",
  // "url": "https://www.wsj.com/articles/u-s-overhauls-money-market-fund-rules-in-latest-attempt-to-prevent-bailouts-2f0f2925",
  // "urlToImage": "https://images.wsj.net/im-815383/social",
  // "publishedAt": "2023-07-12T20:26:00Z",
  // "content": null
  // }
];
