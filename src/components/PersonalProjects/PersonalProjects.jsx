import React from "react";
import "./PersonalProjects.css";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import RideWise from "../../assets/RideWise.png";
import Roamify from "../../assets/Roamify.png";
const PersonalProjects = () => {
  const openGithubRide = () => {
    window.open("https://github.com/RicardoMCorreia/RideWise", "_blank");
  };

  const openGithubRoam = () => {
    window.open("https://github.com/RicardoMCorreia/Roamify", "_blank");
  };

  return (
    <div className="projects-main-container">
      <div className="title-container">
        <h3>Portfolio</h3>
        <h2>All projects are unique pieces of development</h2>
      </div>
      <div className="card-container">
        <div className="projects-card-right">
          <img
            className="project-image"
            width={"500px"}
            src={RideWise}
            alt="car"
          />
          <div className="projects-text">
            <h2>RideWise - Car Rental</h2>
            <p>
              The website offers a user-friendly interface that allows visitors
              to easily search, compare, and make car rental bookings. With
              intuitive features, users can efficiently find and select their
              desired vehicles for a seamless rental experience.
            </p>
            <div className="project-button-container">
              <h3>React</h3>
              <h3>CSS</h3>
            </div>
            <div className="project-button-container">
              <button onClick={openGithubRide}>
                Github <AiFillGithub />
              </button>
              <button>
                Demo <BsBoxArrowUpRight />
              </button>
            </div>
          </div>
        </div>

        <div className="projects-card-left">
          <img
            className="project-image"
            width={"500px"}
            src={Roamify}
            alt="car"
          />
          <div className="projects-text">
            <h2>Roamify - Traveling Agency</h2>
            <p>
              An interactive platform that offers a wide range of traveling
              services. It allows users to search for their ideal destination
              and book the travel and accomodation for the trip.
            </p>
            <div className="project-button-container">
              <h3>React</h3>
              <h3>CSS</h3>
            </div>
            <div className="project-button-container">
              <button onClick={openGithubRoam}>
                Github <AiFillGithub />
              </button>
              <button>
                Demo <BsBoxArrowUpRight />
              </button>
            </div>
          </div>
        </div>

        <div className="projects-card-right">
          <img
            className="project-image"
            width={"500px"}
            src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
            alt="car"
          />
          <div className="projects-text">
            <h2>RideWise - Car Rental</h2>
            <p>
              The website offers a user-friendly interface that allows visitors
              to easily search, compare, and make car rental bookings. With
              intuitive features, users can efficiently find and select their
              desired vehicles for a seamless rental experience.
            </p>
            <div className="project-button-container">
              <h3>React</h3>
              <h3>CSS</h3>
            </div>
            <div className="project-button-container">
              <button className="">
                Github <AiFillGithub />
              </button>
              <button>
                Demo <BsBoxArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
