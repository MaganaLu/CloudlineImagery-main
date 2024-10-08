import PortfolioCardComponent from "../components/PortfolioCardComponent";
import PageHeader from "../components/PageHeader";
import "./Portfolio.css";

import { collection, DocumentSnapshot, getDocs, query, where } from "firebase/firestore";
import db from '../Firebase/Configuration.jsx';
import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [golfCourseEntries, setGolfCourseEntries] = useState([]);
  const [realEstateEntries, setRealEstateEntries] = useState([]);

  //constrcution , event coverage, other
  const [constructionEntries, setConstructionEntries] = useState([]);
  const [eventEntries, setEventEntries] = useState([]);
  const [otherEntries, setOtherEntries] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getGolfCourseEntries = async () => {
      setGolfCourseEntries([]);
      setRealEstateEntries([]);

      setConstructionEntries([]);
      setEventEntries([]);
      setOtherEntries([]);

      const collection_ref = collection(db, "portfolio_entries");
      const golfCoursesQuery = query(collection_ref, where("type", "==", "Golf Courses"));
      const realEstateQuery = query(collection_ref, where("type", "==", "Real Estate"));

      const constructionQuery = query(collection_ref, where("type", "==", "Construction"));
      const eventQuery = query(collection_ref, where("type", "==", "Events"));
      const otherQuery = query(collection_ref, where("type", "==", "Other"));

      const golfCoursesQuerySnapshot = await getDocs(golfCoursesQuery);
      const realEstateQuerySnapshot = await getDocs(realEstateQuery);

      const constructionQuerySnapshot = await getDocs(constructionQuery);
      const eventQuerySnapshot = await getDocs(eventQuery);
      const otherQuerySnapshot = await getDocs(otherQuery);

      golfCoursesQuerySnapshot.forEach((doc) => {
        if (!ignore) {
          setGolfCourseEntries(golfCourseEntries => [...golfCourseEntries, doc.data()]);
        }
      });


      realEstateQuerySnapshot.forEach((doc) => {
        if (!ignore) {
          setRealEstateEntries(realEstateEntries => [...realEstateEntries, doc.data()]);
        }
      });
      
      
      constructionQuerySnapshot.forEach((doc) => {
        if (!ignore) {
          setConstructionEntries(constructionEntries => [...constructionEntries, doc.data()]);
        }
      });
      
      eventQuerySnapshot.forEach((doc) => {
        if (!ignore) {
          setEventEntries(eventEntries => [...eventEntries, doc.data()]);
        }
      });
      
      otherQuerySnapshot.forEach((doc) => {
        if (!ignore) {
          setOtherEntries(otherEntries => [...otherEntries, doc.data()]);
        }
      });



    }

    getGolfCourseEntries();

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
      ignore = true;
    };
  }, [])


  return (
    <>

      <PageHeader image='../assets/NatureImage.jpg' hText="Portfolio" />

      <hr id='#Golf-Courses' className="hr-text" data-content="Golf Courses"/>
      <div className="portfolioCardContainer">
        {golfCourseEntries.map(portfolioEntry =>
          <ul key={portfolioEntry.title} className="ulPortfolio">
            <PortfolioCardComponent description={portfolioEntry.description} video={portfolioEntry.video_url} title={portfolioEntry.title} date={portfolioEntry.date} image={portfolioEntry.image} type={portfolioEntry.type} />
          </ul>
        )}
      </div>

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



    </>
  )
};

export default Portfolio