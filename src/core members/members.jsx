import React, { useState, useRef, useEffect } from "react";
import "./members.css";
import pic from "../assets/core/prassana.jpg";
import pic1 from "../assets/core/suppriya.jpg";
import pic2 from "../assets/core/tarakesh.jpg";
import { FaLinkedin, FaGithub, FaInstagram, FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Members = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.backgroundAttachment = "fixed";
      sectionRef.current.style.backgroundSize = "cover";
      sectionRef.current.style.backgroundPosition = "center";
      // Replace 'your_image_url.jpg' with the correct URL or path to your image
      sectionRef.current.style.backgroundImage =
        "url(your_background_image.jpg)";

      // Optional: Background Color
      sectionRef.current.style.backgroundColor = "#ffffff";
    }
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    hiddenPicture: {
      opacity: 1,
    },
    visiblePicture: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const teamMembers = [
    {
      name: "Prasanna",
      role: "Full Stack Developer",
      image: pic,
      quote: "Turning coffee into code and dreams into reality.",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Supriya",
      role: "UI/UX Designer",
      image: pic1,
      quote: "Design is not just what it looks like, it's how it works.",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Tarakesh",
      role: "Full Stack Developer",
      image: pic2,
      quote: "Building the future one line of code at a time.",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <div className="members-section" ref={sectionRef}>
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Core Team Members
      </motion.h1>

      <motion.div
        className="cards-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref} // Move ref here for correct animation triggering
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="member-card"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-image-container">
              <motion.img
                src={member.image}
                alt={member.name}
                className="card-image"
                layoutId={`image-${index}`}
                style={{
                  opacity: hoveredCard === index ? 1 : 0.7,
                  transition: "opacity 0.3s ease",
                }}
              />
              <div className="default-content">
                <h2 className="member-name">{member.name}</h2>
                <p className="member-role">{member.role}</p>
              </div>

              <motion.div
                className="card-overlay"
                variants={overlayVariants}
                initial="hidden"
                animate={hoveredCard === index ? "visible" : "hidden"}
                style={{ pointerEvents: "none" }} // Disable interaction with the overlay
              >
                <div className="overlay-content">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="member-quote">{member.quote}</p>
                  <div className="social-links">
                    <motion.a
                      href={member.social.linkedin}
                      className="social-icon linkedin"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a
                      href={member.social.github}
                      className="social-icon github"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={member.social.instagram}
                      className="social-icon instagram"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaInstagram />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Members;
