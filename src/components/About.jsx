import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-intro">
        <h1>INTRODUCTION</h1>
        <p>
          Full-stack developer driven by a passion for building scalable web applications and intuitive user interfaces. Experienced in crafting seamless front-end experiences, designing robust backend architectures, and integrating dynamic APIs to bring innovative ideas to life.
        </p>
      </div>

      <div className="about-cards">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Frontend</h3>
            </div>
            <div className="card-back">
              <p>React, HTML, CSS, JavaScript</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Backend</h3>
            </div>
            <div className="card-back">
              <p>Node.js, Express, MySQL, REST APIs, PHP</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Tools</h3>
            </div>
            <div className="card-back">
              <p>Git, VS Code, phpMyAdmin, GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
