
import './Services.css';
import { collection, DocumentSnapshot, getDocs } from "firebase/firestore";
import db from '../Firebase/Configuration.jsx';
import React, { useState, useEffect } from "react";

import PageHeader from '../components/PageHeader';
import ServicesCardComponent from '../components/ServicesCardComponent';

import { useNavigate } from "react-router-dom";

import servicesEntries from '../servicesEntries.json';


const Services = () => {
  const navigate = useNavigate();
  const handleGoToContact = () => navigate("/Contact");

  const navigateToPortfolioSection = (title) => {
    title= (title).replaceAll(" ", "-")
    navigate("/Portfolio/#" + title);
  }


  return (
    <>
      <PageHeader hText="Services" />
      <div className='ServicesContainer'>
        <h1>The Drone Services you Need, Whatever the Project!</h1>
        <button onClick={handleGoToContact}>Book Us Now!</button>
        <p>You can get exactly the aerial media you need regardless of your project requirements. That’s because at Cloudline Imagery we offer a variety of high-quality drone services.</p>
        <p>We are experts in the taking and editing of both photography and videography. Here’s a list of our most popular services.</p>
        <p> Contact us if you need something not listed here!</p>
      </div>

      <div className='ServicesCardContainer'>
      
        {servicesEntries.map(service =>
          <ul style={{paddingInlineStart:'0px'}} onClick={() => navigateToPortfolioSection(service.title)} key={service.title}>
            <ServicesCardComponent title={service.title} subtext={service.subtext} image={service.thumbnail} />

          </ul>
        )}
      </div>

    </>
  )
};

export default Services