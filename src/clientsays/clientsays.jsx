import React, { useEffect } from "react";
import "./clientsays.css";
import birdLogo from "../assets/dummy.jpg";

function Client() {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur alesuada et vesti",
      author: "xyz, California",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur alesuada et vesti",
      author: "xyz, California",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur alesuada et vesti",
      author: "xyz, California",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur alesuada et vesti",
      author: "xyz, California",
    }
  ];

  useEffect(() => {
    const slideCards = () => {
      const cards = document.querySelectorAll('.testimonial-card');
      cards.forEach((card, index) => {
        card.style.animation = `slideIn 20s linear infinite`;
        card.style.animationDelay = `${index * 5}s`;
      });
    };

    slideCards();
  }, []);

  return (
    <div className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="parent">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial-card div${index + 1}`}>
            <div className="logo-container">
              <img src={birdLogo} alt="Bird Logo" className="bird-logo" />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                "{testimonial.text}"
              </p>
              <p className="testimonial-author">
                {testimonial.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Client;
