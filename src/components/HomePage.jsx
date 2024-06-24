import React, { useEffect } from 'react'
import Layout from './Layout'
import HeroSection from './HeroSection'
import project1 from "./project_Images/hamd.png";
import project2 from "./project_Images/weather-app.png";
import project3 from "./project_Images/Netflix.png"

import ProjectDisplayFrame from './ProjectDisplayFrame'
import LocomotiveScroll from 'locomotive-scroll';

const HomePage = () => {
  const locomotiveScroll = new LocomotiveScroll();
  
  useEffect(()=>{
    //scroll top on page load
    window.scrollTo(0,0);
  },[])
  return (
    <Layout>
        <div>
          <HeroSection />
          <ProjectDisplayFrame heading = {"HAMD"} subLine = {"E-commerce web app"} img = {project1} link = {"https://hamd-ecom.web.app"} cls = {"project_hamd"}/>
          <ProjectDisplayFrame heading = {"Weather-App"} subLine = {"Provides Current Weather, 3-Hourly Forecast, Daily Forecast..."} img = {project2} link = {"https://weather-app-7860.web.app"}  cls = {"project_weatherApp"}/>
          <ProjectDisplayFrame heading = {"Netflix-clone"} subLine = {"Provides Current Weather, 3-Hourly Forecast, Daily Forecast..."} img = {project3} link = {"https://hamd-ecom.web.app"}  cls = {"project_Netflix"}/>


        </div>
    </Layout>
  )
}

export default HomePage