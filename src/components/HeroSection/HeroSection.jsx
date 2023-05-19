import React from "react";
import "./HeroSection.css";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import profilePicture from "../../assets/ProfilePicture.png";

const HeroSection = () => {
  return (
    <div className="hero-main-container">
      <div className="text-and-picture-container">
        <div className="hero-text-container">
          <h1 className="hero-title">Front-End Developer</h1>
          <p>
            My name is Ricardo Correia, and I am a front-end developer based in
            Lisbon, Portugal{" "}
          </p>
        </div>
        <img
          className="hero-picture"
          src="
        https://media.licdn.com/dms/image/D4D03AQHUPVUw3ilx3Q/profile-displayphoto-shrink_400_400/0/1671643409499?e=1689811200&v=beta&t=CUWuzkubTz5AxrvYBSnEtey82TjwYG4TQ1lzdG1c4MQ"
          alt="profile-pic"
        />
      </div>
      <div className="tech-stack-container">
        <h3 className="tech-stack-title">Tech Stack</h3>
        <div className="icon-container">
          <IoLogoHtml5 color="orange" size={"40px"} />
          <IoLogoCss3 color="blue" size={"40px"} />
          <IoLogoJavascript size={"40px"} />
          <FaReact color="lightblue" size={"40px"} />
          <SiMysql size={"40px"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
