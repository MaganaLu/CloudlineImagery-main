import PortfolioCardComponent from "../components/PortfolioCardComponent";
import PageHeader from "../components/PageHeader";
import "./Portfolio.css";

import { collection, DocumentSnapshot, getDocs, query, where } from "firebase/firestore";
import db from '../Firebase/Configuration.jsx';
import React, { useState, useEffect } from "react";

import portfolioEntries from "../portfolioEntries.json";

const Portfolio = () => {
  const [golfCourseEntries, setGolfCourseEntries] = useState([]);
  const [realEstateEntries, setRealEstateEntries] = useState([]);

  //constrcution , event coverage, other
  const [constructionEntries, setConstructionEntries] = useState([]);
  const [eventEntries, setEventEntries] = useState([]);
  const [otherEntries, setOtherEntries] = useState([]);

  useEffect(() => {


    const urlHash = window.location.hash;
    
    if (urlHash.length) {
      const element = document.getElementById(urlHash);
      if (element) {
        setTimeout(function () {
        element.scrollIntoView({
          behavior:"smooth",
          block: "start",
        });
      },250);
      }

      
    }

    return () => {
      
    };
  }, [])


  return (
    <>

      <PageHeader image='../assets/NatureImage.jpg' hText="Portfolio" />

      <hr id='#Golf-Courses' className="hr-text" data-content="Golf Courses"/>
      <div className="portfolioCardContainer">
        {portfolioEntries.map(portfolioEntry =>
          <ul key={portfolioEntry.title} className="ulPortfolio">
            <PortfolioCardComponent description={portfolioEntry.description} video={portfolioEntry.videoURL} title={portfolioEntry.title} date={portfolioEntry.date} image={portfolioEntry.image} type={portfolioEntry.type} />
          </ul>
        )}
      </div>

{/*
      <hr id='#Real-Estate' className="hr-text" data-content="Real Estate"/>
      <div className="portfolioCardContainer">
        {realEstateEntries.map(portfolioEntry =>
          <ul key={portfolioEntry.title} className="ulPortfolio">
            <PortfolioCardComponent description={portfolioEntry.description} video={portfolioEntry.video_url} title={portfolioEntry.title} date={portfolioEntry.date} image={portfolioEntry.image} type={portfolioEntry.type} />
          </ul>
        )}
      </div>

      <hr id='#Construction' className="hr-text" data-content="Construction"/>
      <div className="portfolioCardContainer">
        {constructionEntries.map(portfolioEntry =>
          <ul key={portfolioEntry.title} className="ulPortfolio">
            <PortfolioCardComponent description={portfolioEntry.description} video={portfolioEntry.video_url} title={portfolioEntry.title} date={portfolioEntry.date} image={portfolioEntry.image} type={portfolioEntry.type} />
          </ul>
        )}
      </div>

      <hr id='#Event-Coverage' className="hr-text" data-content="Event Coverage"/>
      <div className="portfolioCardContainer">
        {eventEntries.map(portfolioEntry =>
          <ul key={portfolioEntry.title} className="ulPortfolio">
            <PortfolioCardComponent description={portfolioEntry.description} video={portfolioEntry.video_url} title={portfolioEntry.title} date={portfolioEntry.date} image={portfolioEntry.image} type={portfolioEntry.type} />
          </ul>
        )}
      </div>

      <hr id='#Other-Services' className="hr-text" data-content="Other Services"/>
      <div className="portfolioCardContainer">
        {otherEntries.map(portfolioEntry =>
          <ul key={portfolioEntry.title} className="ulPortfolio">
            <PortfolioCardComponent description={portfolioEntry.description} video={portfolioEntry.video_url} title={portfolioEntry.title} date={portfolioEntry.date} image={portfolioEntry.image} type={portfolioEntry.type} />
          </ul>
        )}
      </div>
*/}


    </>
  )
};

export default Portfolio