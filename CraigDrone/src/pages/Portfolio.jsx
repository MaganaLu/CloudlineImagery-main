import PortfolioCardComponent from "../components/PortfolioCardComponent";
import PageHeader from "../components/PageHeader";
import "./Portfolio.css";

import React, { useState, useEffect } from "react";

import portfolioEntries from "../portfolioEntries.json";

var sorted = {};



const Portfolio = () => {

  useEffect(() => {
    parseLists();
    const urlHash = window.location.hash;
    if (urlHash.length) {
      const element = document.getElementById(urlHash);
      if (element) {
        setTimeout(function () {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 250);
      }
    }
    return () => {
    };
  }, [])

  function checkUndefinedSection(arrayString) {
    if (sorted[arrayString] != undefined) {
      return (sorted[arrayString].map(portfolioEntry =>
        <ul key={portfolioEntry.title} className="ulPortfolio">
          <PortfolioCardComponent description={portfolioEntry.description} thumbnail={portfolioEntry.thumbnail} title={portfolioEntry.title} date={portfolioEntry.date} type={portfolioEntry.type} />
          
        </ul>)
      )
    }
  }

  function parseLists() {

    for (var i = 0, max = portfolioEntries.length; i < max; i++) {
      
      if (sorted[portfolioEntries[i].type] == undefined) {
        sorted[portfolioEntries[i].type] = [];
      }
      sorted[portfolioEntries[i].type].push(portfolioEntries[i]);
    }
  }

  

  return (
    
    <>

      <PageHeader hText="Portfolio" />

      <hr id='#Golf-Courses' className="hr-text" data-content="Golf Courses" />
      <div className="portfolioCardContainer">
        {checkUndefinedSection("Golf Courses")}
        
      </div>


      <hr id='#Real-Estate' className="hr-text" data-content="Real Estate" />
      <div className="portfolioCardContainer">
        {checkUndefinedSection("Real Estate")}
        {console.log("in real estate")}
      </div>

      <hr id='#Construction' className="hr-text" data-content="Construction" />
      <div className="portfolioCardContainer">
        {checkUndefinedSection("Construction")}
      </div>

      <hr id='#Event-Coverage' className="hr-text" data-content="Event Coverage" />
      <div className="portfolioCardContainer">
        {checkUndefinedSection("Events")}
      </div>

      <hr id='#Other-Services' className="hr-text" data-content="Other Services" />
      <div className="portfolioCardContainer">
        {checkUndefinedSection("Other")}
      </div>

    </>
  )
};

export default Portfolio