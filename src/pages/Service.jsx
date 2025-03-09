// Service.jsx
import React from "react";
import Hero from "../components/Hero"; // 确保路径正确
import SectionHeading from "./SectionHeading";
import ServiceList from "./ServiceList";

const Service = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Explore Our Solutions"
        subTitle="Check out how we can help you stay ahead in the market!"
      />
      <div className="grid lg:grid-cols-2 gap-20 mt-20">
        <ServiceList />
        <div>
          <img
            src="/Images/ServiceImage1.jpg"
            alt="Service Visual Representation"
            className="w-2/3 h-2/3"
          />
        </div>
      </div>

      <Hero />
    </div>
  );
};

export default Service;
