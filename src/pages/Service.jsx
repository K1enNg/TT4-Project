// Service.jsx
import React from "react";
import SectionHeading from "../components/Service/NewsItem";
import ServiceList from "../components/Service/NewsList";
import News from "../api/NewsContext";
import NewsItem from "../components/Service/NewsItem";

const Service = () => {
  return (
    <>
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-20 mt-20">
        <ServiceList />
        <div>
        </div>
      </div>
    </div>
    <div>
        <NewsItem
        title="Lastest News"
        subTitle="Stay updated with the latest news and trends in the crypto world."/>
        <News />
    </div>
    </>
    
  );
};

export default Service;
