import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/assets/bg-hero1.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        color: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          zIndex: 1,
        }}
      >
        <h1 style={{ fontSize: "4.5rem" }}>
          Hey, I'm <span style={{ color: "#a44eff" }}>Nandini</span>
        </h1>
        <p style={{ fontSize: "1.5rem" }}>
          Crafting user-focused web apps and software that solve real problems.


        </p>
      </div>
    </div>
  );
};


export default Hero;
