import React from "react";
import { FaFileDownload } from "react-icons/fa";
import Card from "../profile/Card";

function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden h-screen">
      <img
        alt=""
        src="image/background-img.jpg"
        className="absolute inset-0 -z-10 size-full object-cover object-right bg-fixed md:object-center"
      />

      <div className="relative top-12 flex  px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-[#6a3310]  sm:text-7xl">
            Portfolio
          </h2>
          {/* <p className="mt-8 text-lg font-medium text-pretty text-[#6a3310] ">
            Passionate and detail-oriented software developer with expertise in
            designing, developing, and optimizing scalable applications.
            Proficient in multiple programming languages, frameworks, and cloud
            technologies. Adept at problem-solving, writing clean and efficient
            code, and collaborating with cross-functional teams to deliver
            high-quality software solutions. Constantly learning and staying
            up-to-date with the latest industry trends.
          </p> */}
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-full">
        <Card />
      </div>      

      <div className="resume-container">
        <a href="document/resume.pdf" download="Rounak-Resume">
          <FaFileDownload size={25} color="#6a3310"/>
        </a>
        <div>Resume</div>
      </div>
      
    </div>
  );
}

export default HeroSection;
