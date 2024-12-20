import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Hetvi_Chudasama_Resume.pdf";

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          Dolor cupiditate rerum, dolore dolorum nesciunt nam.
        </spane>

        <a href={Resume} download>
          <button className="button s-button">Download CV</button>{" "}
        </a>

        <div
          className="blur s-blur1"
          style={{
            background: "#ABF1FF94",
          }}
        ></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div
          style={{
            // Actual-left: "14rem"
            left: "22rem",
          }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe Xd"}
          />
        </div>

        {/* Second Card*/}
        <div
          style={{
            top: "10rem",
            // Actual left : "-4rem"
            left: "4rem",
          }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html,CSS,Javascript,React"}
          />
        </div>

        {/* 3rd card */}
        <div
          style={{
            top: "19rem",
            left: "20rem",
          }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Best User Interface Design"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{
            background: "var(--purple)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
