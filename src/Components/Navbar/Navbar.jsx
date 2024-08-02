import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [navStyle, setNavStyle] = useState({
    height: "60px",
    overflow: "hidden",
  });

  function openNav() {
    setNavStyle({
      height: navStyle.height === "60px" ? "auto" : "60px",
      overflow: navStyle.overflow === "hidden" ? "auto" : "hidden",
    });
  }

  return (
    <>
      <div
        className="relative md:fixed z-50 top-0 inset-x-0 bg-[#2c3e50] text-white py-9 text-center"
        style={{ height: navStyle.height, overflow: navStyle.overflow }}
      >
        <div className="container flex flex-col md:flex-row justify-around">
          <ul>
            <li className="text-3xl mb-4 md:mb-0 font-bold mt-[-10px] md:mt-0">
              <Link to="">START FRAMEWORK</Link>
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row space-x-5 font-bold space-y-3 md:space-y-0 text-center">
            <li>
              <NavLink to="about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="portfolio">PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to="contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
        <i
          className="fa-solid fa-bars text-3xl absolute top-8 cursor-pointer right-5 md:invisible"
          onClick={openNav}
        ></i>
      </div>
    </>
  );
}
