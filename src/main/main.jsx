import React, { useState, useRef, useEffect } from "react";
import Intro from "../intro/intro";
import Header from "../Header/header";
import Choose from "../choose/whychoose";
import Service from "../services/service";
import Client from "../clientsays/clientsays";
import Members from "../core members/members";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Drawer, FloatButton } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import "./main.css";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);

  // Ref for parallax effect
  const introRef = useRef(null);
  const chooseRef = useRef(null);
  const serviceRef = useRef(null);
  const membersRef = useRef(null);
  const footerRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Parallax Effect Logic
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Function to apply parallax effect
    const parallax = (ref, speed) => {
      if (ref.current) {
        ref.current.style.transform = `translateY(${scrollY * speed}px)`;
      }
    };

    // Apply parallax to each section
    parallax(introRef, 0.2); // Adjust speed as needed
    parallax(chooseRef, 0.1);
    parallax(serviceRef, 0.3);
    parallax(membersRef, 0.2);
    parallax(footerRef, 0.1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div ref={introRef}>
        <Intro />
      </div>
      <div ref={chooseRef}>
        <Choose />
      </div>
      <div ref={serviceRef}>
        <Service />
      </div>
      <div ref={membersRef}>
        <Members />
      </div>
      {/* <Client /> */}
      <button className="sticky-contact-btn" onClick={toggleModal}>
        AI
      </button>
      <FloatButton
        type="default"
        icon={<LikeOutlined style={{ color: "white" }} />}
        description="Survey"
        onClick={() => setOpen(true)}
        style={{
          width: 80,
          height: 80,
          bottom: 94,
          right: 24,
          color: "white",
        }}
      />
      <Drawer
        title="Survey"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        size="large"
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe32wAApxn2elqDZONgxelxlsK97ebcxrk-LQGQ_k3FDJ_kaw/viewform?embedded=true"
          width="640"
          height="2779"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </Drawer>
      {/* {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}>
              ×
            </button>
            <Contact />
          </div>
        </div>
      )} */}
      <div className="footer" ref={footerRef}>
        @ 2025 Cloud Crew Technologies. All rights are Reserved
      </div>
    </>
  );
}

export default Main;
