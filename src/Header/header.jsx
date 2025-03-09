import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import logo from "../assets/signin.jpg";
import dummy from "../assets/logo.png";
import Contact from "../Contact/contact";
import Service from "../services/service";
import Choose from "../choose/whychoose";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const [scrollY, setScrollY] = useState(0); // State for scroll position
  const headerRef = useRef(null); // Ref for the header

  const toggle = () => {
    setIsHover(!isHover);
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const scrollToChoose = () => {
    const chooseSection = document.querySelector(".why-section");
    if (chooseSection) {
      chooseSection.scrollIntoView({ behavior: "smooth" });
      setIsActive(false);
    }
  };

  const scrollToService = () => {
    const serviceSection = document.querySelector(".services-section");
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: "smooth" });
      setIsActive(false);
    }
  };
  const scrollToMembers = () => {
    const serviceSection = document.querySelector(".members-section");
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: "smooth" });
      setIsActive(false);
    }
  };

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="navbar"
        ref={headerRef}
        style={{
          transform: `translateY(${scrollY * 0.1}px)`, // Adjust speed as needed
        }}
      >
        <img className="logo" src={dummy} alt="logo"></img>
        <h3 className="logoname">
          <b>CLOUD CREW TECHNOLOGIES</b>
        </h3>
        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={isActive ? "active" : ""}>
          <li onClick={scrollToChoose}>About Us</li>
          <li onClick={scrollToService}>Services</li>
          <li>Projects</li>
          <li onClick={scrollToMembers}>Core Members</li>
          <li onClick={() => toggle()}>Contact Us</li>
          <li className="but">
            <button className="log">Login</button>
          </li>
          <li className="but">
            <button className="sign">Sign Up</button>
          </li>
        </ul>
      </div>
      {isHover && (
        <div className="modal-overlay" onClick={toggle}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggle}>
              ×
            </button>
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
