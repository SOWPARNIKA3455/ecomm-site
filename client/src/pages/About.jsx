import React from "react";
import './About.css';

const About = () => {
  return (
    <div className="about">
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your trusted destination for smart and stylish shopping.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At EcommSite, our mission is to provide high-quality, affordable products that make your everyday life better.
            We aim to deliver a seamless shopping experience with a focus on customer satisfaction and innovative design.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <p>
            From the latest tech gadgets and fashion accessories to home essentials and lifestyle products, 
            our carefully curated collection ensures you always find what you need, at the best value.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Customer First:</strong> We listen and adapt to your needs.</li>
            <li><strong>Quality Assurance:</strong> Products are handpicked for reliability and performance.</li>
            <li><strong>Innovation:</strong> We stay ahead by embracing trends and technology.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Meet the Team</h2>
          <p>
            We're a group of passionate developers, designers, and product experts working behind the scenes to bring you
            a smooth, enjoyable e-commerce experience. Together, we strive to build a platform you can trust and love.
          </p>
        </section>
      </div>
    </div>
    </div>
  );
};

export default About;
