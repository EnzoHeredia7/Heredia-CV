import React from "react";
import Hero from "./Hero";
import About from "./About";
import Technology from "./Technology";
import Education from "./Education";
import Projects from "./Projects";
import Footer from "./Footer";
import { Element } from "react-scroll";
import Banner from "./Banner";
import Contact from "./Contact";



const Home = () => {
  return (
    <>
      <div className="w-full h-auto overflow-hidden">
        {/* Usamos el componente Element para envolver cada sección con un identificador */}
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="technology">
          <Technology/>
        </Element>
        <Element name="education">
          <Education/>
        </Element>
        <Element name="projects">
          <Projects />
          <Element name="banner">
            <Banner/>
          </Element>
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </div>
    </>
  );
};

export default Home;
