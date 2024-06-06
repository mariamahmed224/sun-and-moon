import React from "react";
import { Navbar, Hero, Manicure, Nails, Beauty, Barbr } from "../components";
import {
  Contact,
  Footer,
  Gallery,
  
  Services,
  Testimonial,
  WhyChoose,
} from "../components";


const Home = () => {
  return (
    <main className={` w-full flex flex-col overflow-hidden`}>
      <div>
        <Navbar />
        <Hero />
        <WhyChoose />
        <Beauty />
        <Manicure />
        <Services />
        <Nails />
        <Barbr />
        <Gallery />
        <Testimonial />
        <Contact />
        
        <Footer />
      </div>
    </main>
  );
};

export default Home;
