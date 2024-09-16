import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Layout from "./Layout";
import HeroSection from "./HeroSection";
import project1 from "./project_Images/hamd.png";
import project2 from "./project_Images/weather-app.png";
import project3 from "./project_Images/Netflix.png";

import Loader from "./Loader";
import ProjectDisplayFrame from "./ProjectDisplayFrame";
import LocomotiveScroll from "locomotive-scroll";
import "./HomePage.css";

const HomePage = () => {
  const locomotiveScroll = new LocomotiveScroll();
  let [loader, setLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when location (route) changes

    window.scrollTo(0, 0);

    // Set loader to true when route changes
    setLoader(true);

    // Simulate delay for loader (e.g., fetching data or loading content)
    const timer = setTimeout(() => {
      console.log("here");

      setLoader(false);
    }, 400);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, [location]); // Trigger effect whenever location (route) changes

  return (
    <Layout>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <HeroSection />
          <ProjectDisplayFrame
            heading={"HAMD"}
            subLine={"E-commerce web app"}
            img={project1}
            link={"/work/hamd-e-commerce"}
            cls={"project_hamd"}
          />
          <ProjectDisplayFrame
            heading={"Weather-App"}
            subLine={
              "Provides Current Weather, 3-Hourly Forecast, Daily Forecast..."
            }
            img={project2}
            link={"/work/weather-App"}
            cls={"project_weatherApp"}
          />
          <ProjectDisplayFrame
            heading={"Netflix-clone"}
            subLine={
              "cloned the UI of Netflix && provided trailer preview feature"
            }
            img={project3}
            link={"/work/netlix-clone"}
            cls={"project_Netflix"}
          />
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
