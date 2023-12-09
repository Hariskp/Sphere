import React from "react";
import Discover from "./discover/Discover";
import Hero from "./hero/Hero";
import Homes from "./mainContent/homes/Home";
import Header from "../Header";
import Footer from "../Footer";


const Homepages = () => {
  return (
    <>
      <Header />
      <Hero />
      <Homes />
      <Discover />
      <Footer />
    </>
  );
};

export default Homepages;
