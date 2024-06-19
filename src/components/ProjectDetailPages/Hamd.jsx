import React from "react";
import Layout from "../Layout";
import project1 from "../project_Images/hamd.png";
import weather from "./HamdVideos/weatheApp1.mp4";
import { IoSunnyOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
import { BsStars } from "react-icons/bs";
const Hamd = () => {
  return (
    <Layout>
      <div className="Hamd_Container mx-[19vw] pt-32">
        <div className="project_intro capitalize flex flex-col gap-4 items-center py-10">
          <h2 className="project_intro_heading text-4xl text-[#dfdbdb]">
            HAMD (E-commerce web app)
          </h2>
          <span className="technologies_used text-gray-400">
            🔧 React.js, Tailwind CSS, Vanilla CSS, JavaScript, Firebase{" "}
          </span>
          <div className="project_intro_img">
            <img src={project1} alt="img1" width={1050} />
          </div>
        </div>
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
            className="section border-[0.5px] border-gray-500  rounded-3xl flex flex-col gap-8 px-4 items-center py-4 pb-8 h-auto"
          >
            <span className="flex flex-col gap-4 items-center">
              <span className="rounded-full border-[0.5px] border-[#359c9c]">
                <IoSunnyOutline color="aqua" size={28} />
              </span>
              HIGHLIGHTS
            </span>
            <div className="border-[0.5px] border-gray-500 rounded-[20px] p-8">
              <video
                src={weather}
                controls
                autoPlay={true}
                muted
                loop
                className="rounded-md shadow-md shadow-[black]"
              ></video>
            </div>

            <div className="border-[0.5px] border-gray-500 rounded-[20px] p-8">
              <video
                src={weather}
                controls
                autoPlay={true}
                muted
                loop
                className="rounded-md shadow-md shadow-[black]"
              ></video>
            </div>

            <div className="border-[0.5px] border-gray-500 rounded-[20px] p-8">
              <video
                src={weather}
                controls
                autoPlay={true}
                muted
                loop
                className="rounded-md shadow-md shadow-[black]"
              ></video>
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
              Creating easy to use admin dashborad with functionalities like
              upload, delete & edit{" "}
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
          <div className="achievements">
          <span className="flex gap-2 items-center text-gray-400 tracking-wide text-sm">
              <span className=""><BsStars fill="white" size={20} /></span>
               ACHIEVEMENTS:
          </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hamd;
