import React, { useRef, useEffect } from "react";
import "./service.css";
import TeamImage from "../assets/ourservices.png";
import {
  FaLaptopCode,
  FaMobile,
  FaPaintBrush,
  FaRobot,
  FaRocket,
  FaBullhorn,
} from "react-icons/fa";

function Service() {
  const sectionRef = useRef(null); // Ref for the whole section

  useEffect(() => {
    // Set background image on the section ref for the parallax
    if (sectionRef.current) {
      sectionRef.current.style.backgroundImage = `url(${TeamImage})`;
      sectionRef.current.style.backgroundAttachment = "fixed";
      sectionRef.current.style.backgroundSize = "cover";
      sectionRef.current.style.backgroundPosition = "center";
      sectionRef.current.style.backgroundColor = "#f0f5e9"; // Fallback color
    }
  }, []); // Run this effect only once after initial render

  const services = [
    {
      title: "Website Development",
      icon: <FaLaptopCode size={24} />,
      color: "#f0f5e9",
    },
    {
      title: "Mobile App Development",
      icon: <FaMobile size={24} />,
      color: "#f0f5e9",
    },
    {
      title: "UI/UX Design",
      icon: <FaPaintBrush size={24} />,
      color: "#f0f5e9",
    },
    {
      title: "AI & Automation",
      icon: <FaRobot size={24} />,
      color: "#f0f5e9",
    },
    {
      title: "Tech Modernization",
      icon: <FaRocket size={24} />,
      color: "#f0f5e9",
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn size={24} />,
      color: "#f0f5e9",
    },
  ];

  return (
    <div className="services-section" ref={sectionRef}>
      <h1 className="services-title">Our Services</h1>

      <div className="services-grid">
        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item ${
                service.highlight ? "highlighted" : ""
              } ${service.isGreen ? "green-text" : ""}`}
            >
              <div style={{ marginRight: "12px" }}>{service.icon}</div>
              {service.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
