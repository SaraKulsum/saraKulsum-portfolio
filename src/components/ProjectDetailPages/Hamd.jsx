import React from "react";
import Layout from "../Layout";
import project1 from "../project_Images/hamd.png";
import hamdVid1 from "../ProjectDetailPages/HamdVideos/HAMD_home_page.mp4";
import hamdVid2 from "../ProjectDetailPages/HamdVideos/HAMD_Filters_section.mp4";
import hamdVid3 from "../ProjectDetailPages/HamdVideos/HAMD_UserDbb.mp4";
import hamdVid4 from "../ProjectDetailPages/HamdVideos/HAMD_admin_dbb.mp4";

import { MdErrorOutline } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { easeInOut, motion } from "framer-motion";
import ProjectDisplayFrame from "../ProjectDisplayFrame";
import project2 from "../project_Images/weather-app.png";
const Hamd = () => {
  return (
    <Layout>
      <div className="Hamd_Container mx-[5vw] xl:mx-[19vw] pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ easeInOut, duration: 1.2 }}
          className="project_intro capitalize flex flex-col gap-4 items-center py-10 w-full"
        >
          <h2 className="project_intro_heading text-4xl text-[#dfdbdb]">
            HAMD (E-commerce web app)
          </h2>

          <span className="technologies_used text-gray-400">May-2024</span>
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            href="https://hamd-ecom.web.app"
            target="_blank"
            className="live_project_btn z-[100] border-[0.5px] rounded-full border-gray-400 p-2  text-gray-400"
          >
            <span className="flex gap-2 items-center">
              Live Project <FiExternalLink />
            </span>
          </motion.a>

          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ ease: easeInOut, duration: 0.8 }}
            className="project_intro_img w-full"
          >
            <img src={project1} alt="img1" className="w-full" />
          </motion.div>
        </motion.div>
        <div className="overview_container flex justify-between ">
          <div className="w-[50%] flex flex-col gap-4">
            <div className="my_role_container flex flex-col gap-2">
              <span>My Role:</span>
              <p className="text-gray-400">Design And Development</p>
            </div>

            <div className="tech_used_container flex flex-col gap-2">
              <span className="flex gap-2 items-center">
                <span className="rounded-full bg-white block h-2 w-2"></span>{" "}
                Technology Used:
              </span>
              <ul className="text-gray-400">
                <li>HTML5, CSS3, JavaScript</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>React Router</li>
                <li>Firebase(for backend)</li>
                <li>redux tool kit (to avoid prop drilling)</li>
              </ul>
            </div>
          </div>

          <div className="w-[50%] flex flex-col gap-2">
            <span>Overview:</span>
            <p className="text-gray-400">
              Hamd is an innovative and sleek e-commerce web application
              designed to provide a seamless shopping experience.
            </p>
            <p className="text-gray-400">
              Built with modern web technologies, Hamd offers a range of
              features that cater to both users and administrators, ensuring a
              smooth and efficient interaction with the platform.
            </p>
          </div>
        </div>

        <div className="highlights_container my-32">
          <div
            id="highlights"
            className="section  bg-[#202020]  rounded-3xl flex flex-col gap-8 px-8 items-center py-4 pb-8 h-auto"
          >
            <div className="chip-special-overline flex flex-col items-center gap-2">
              <img
                src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643c53af931a3ba99ceedfbf_icon-highlights.svg"
                height={35}
                width={35}
                loading="lazy"
                alt=""
                className="aspect-auto icon-highlightreel"
              />
              <div className="text-xs text-gray-400 font-medium tracking-wide">
                HIGHLIGHTS
              </div>
            </div>
            <div className="showcase_1  rounded-[20px] flex flex-col gap-2">
              <video
                src={hamdVid1}
                controls
                autoPlay={true}
                muted
                loop
                className="rounded-md shadow-md shadow-[black] "
              ></video>
              <span className="flex justify-end font-medium text-[#747474] text-xs">
                0.1 HOME PAGE
              </span>
            </div>

            <div className="showcase_2  rounded-[20px] flex flex-col gap-2">
              <video
                src={hamdVid2}
                controls
                autoPlay={true}
                muted
                loop
                className="rounded-md shadow-md shadow-[black]"
              ></video>
              <span className="flex justify-end font-medium text-[#747474] text-xs uppercase">
                0.2 Filters for product selection
              </span>
            </div>

            <div className="showcase_3  rounded-[20px] flex flex-col gap-2">
              <video
                src={hamdVid3}
                controls
                autoPlay={true}
                muted
                loop
                className="rounded-md shadow-md shadow-[black]"
              ></video>
              <span className="flex justify-end font-medium text-[#747474] text-xs uppercase">
                0.3 user dash board && order demo
              </span>
            </div>

            <div className="showcase_4  rounded-[20px] flex flex-col gap-2">
              <video
                src={hamdVid4}
                controls
                autoPlay={true}
                muted
                loop
                className="rounded-md shadow-md shadow-[black]"
              ></video>
              <span className="flex justify-end font-medium text-[#747474] text-xs uppercase">
                0.4 admin dash board && edit product demo
              </span>
            </div>
          </div>
        </div>
        <div className="project_information_content flex flex-col gap-16">
          <div id="problem" className="section flex flex-col gap-4">
            <span className="flex gap-2 items-center text-gray-400 tracking-wide text-sm">
              <span className="bullet_light rounded-full bg-white block h-2 w-2"></span>
              THE CHALLENGES
            </span>
            <span className="bg-[#222121] rounded-tr-3xl rounded-tl-3xl rounded-br-md rounded-bl-md  p-4 flex gap-2 items-center">
              <span>
                <MdErrorOutline size={22} color="yellow" />
              </span>{" "}
              Implementing a strong filtering system that contains multiple
              filters which works dynamically
            </span>

            <span className="bg-[#222121] rounded-md p-4 flex gap-2 items-center">
              <span>
                <MdErrorOutline size={22} color="yellow" />
              </span>
              Creating an engaging and interactive UI with animations.
            </span>
            <span className="bg-[#222121] rounded-br-3xl rounded-bl-3xl rounded-tr-md rounded-tl-md p-4 flex gap-2 items-center">
              <span>
                <MdErrorOutline size={22} color="yellow" />
              </span>
              Developing a user-friendly admin dashboard integrated with
              Firebase, incorporating functionalities for uploading, deleting,
              and editing data.
            </span>
          </div>
          <div id="solution" className="section  flex flex-col gap-4">
            <span className="flex gap-2 items-center text-gray-400 tracking-wide text-sm">
              <span className="bullet_light rounded-full bg-white block h-2 w-2"></span>
              THE SOLUTIONS:
            </span>
            <span className="bg-[#222121] rounded-tr-3xl rounded-tl-3xl rounded-br-md rounded-bl-md p-4 flex gap-2 items-center">
              <span className="rounded-full border-[0.5px] border-[#2e9e9e]">
                <MdOutlineDoneAll size={22} color="aqua" />
              </span>
              Built filters logic and Utilized React’s state management, dynamic
              rendering and integrated with firebase to create an efficient
              filtering system that updates in real-time.
            </span>
            <span className="bg-[#222121] rounded-md p-4 flex gap-2 items-center">
              <span className="rounded-full border-[0.5px] border-[#2e9e9e] ">
                <MdOutlineDoneAll size={22} color="aqua" />
              </span>
              Optimized code and utilized lazy loading techniques. Minimized
              JavaScript and CSS files for faster performance.
            </span>

            <span className="bg-[#222121] rounded-br-3xl rounded-bl-3xl rounded-tr-md rounded-tl-md p-4 flex gap-2 items-center">
              <span className="rounded-full border-[0.5px] border-[#2e9e9e]">
                <MdOutlineDoneAll size={22} color="aqua" />
              </span>
              used redux tool kit to avoid prop drilling and to built the
              functions like add to cart, delete from cart for user and
              functions like upload, delete and edit products for admin.
            </span>
          </div>
          <div className="achievements flex flex-col gap-1">
            <span className="flex gap-2 items-center text-gray-400 tracking-wide text-sm mb-2">
              <span className="">
                <BsStars fill="white" size={20} />
              </span>
              ACHIEVEMENTS:
            </span>
            <span>
              Successfully created an e-commerce web-app, that contains all
              modern features and intutive UI
            </span>
            <span>
              Created amazing filtering features helps user to find the desire
              products in less time
            </span>
            <span>
              Developed easy to use user-dashboard to check ordered product
              details
            </span>
            <span>
              Built user friendly admin-dashboard, with the functionalities to
              edit and delete the product in 2 steps
            </span>
          </div>
        </div>
      </div>
      <div className="next_project my-10">
        <h2 className="text-gray-400 text-3xl mx-[5vw] xl:mx-[19vw] translate-y-[50px]">
          Next Project:
        </h2>
        <ProjectDisplayFrame
          heading={"Weather-App"}
          subLine={
            "Provides Current Weather, 3-Hourly Forecast, Daily Forecast..."
          }
          img={project2}
          link={"/work/weather-app"}
          cls={"project_weatherApp"}
        />
      </div>
    </Layout>
  );
};

export default Hamd;
