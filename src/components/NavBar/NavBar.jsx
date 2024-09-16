import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    //focus on current-displayed-menu-item in navigation manu
    document
      .querySelector(".selector_bg")
      .setAttribute("data-active", location.pathname.slice(1));
    document
      .querySelector(".test")
      .setAttribute("data-active", location.pathname.slice(1));
  }, [location]);

  return (
    <>
      <div className="navContainer fixed z-50  w-[100vw] bg-transparent top-0   font-[500] text-white">
        <div className="flex justify-between items-center mx-2 py-4">
          <div className="credit-top">
            <a href="/">
              <span className="capitalize pl-3">©sara kulsum</span>
            </a>
          </div>
          <div className="links p-3">
            <ul className="linksContainer flex bg-transparent backdrop:blur-lg relative gap-2 border border-gray-600 rounded-full p-[8px] ">
              <a
                href="/"
                className="work capitalize z-10  p-3 transition-all font-normal rounded-full hover:cursor-pointer   flex justify-center"
              >
                <li>work</li>
              </a>
              <a
                href="/about"
                className="about z-10   capitalize p-3  hover:cursor-pointer  flex justify-center  rounded-full"
              >
                <li>about</li>
              </a>
              <a
                href="/contact"
                className="contact z-10   capitalize p-3  hover:cursor-pointer   flex justify-center rounded-full"
              >
                <li>contact</li>
              </a>
              <div
                data-active="work"
                className="test dark:bg-white bg-white absolute top-0  rounded-full h-[4px] w-[10%]"
              ></div>
              <div
                data-active="work"
                className="selector_bg  absolute mx-[8px] rounded-full h-[75%] w-[60px] top-2 left-0 bg-gradient-to-b from-[#6b6b6b] to-transparent"
              ></div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
