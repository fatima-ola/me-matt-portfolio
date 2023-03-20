import React from "react";
import Rectangle from "../assets/images/Rectangle.png";
import { Button } from "../components";

const Introduction = () => {
  return (
    <div className='introduction container'>
      <h1>Introduction</h1>
      <p>
        <img src={Rectangle} alt='rectangle' />
      </p>
      <p className='text-center bio-info mt-5'>
        Mathew is a{" "}
        <span>Senior Lead Software Engineer, Fullstack Developer</span> based in
        Lagos Nigeria with 7 years of work experience leading development,
        systems and management of software technologies to build fully
        functional software products with optimal productivity. He is a avid
        programmer, fast learner and team player, fixated with details and
        quality, always trying to improve development process and code quality.
        He loves simple and elegant solutions for every problem
      </p>
      <div className='text-center mt-5'>
        <Button label={"View CV"} className={"viewtheCV"} />
      </div>
    </div>
  );
};

export default Introduction;
