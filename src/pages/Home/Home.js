import React from "react";
import { NavBar,HeroSection,Introduction,Skills,Experience,Reviews,Footer } from "../../components";

const Home = () => {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Introduction/>
      <Skills/>
      <Experience/>
      <Reviews/>
      <Footer/>
    </>
  );
};

export default Home;
