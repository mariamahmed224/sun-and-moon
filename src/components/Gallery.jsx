import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { NavLink } from "react-router-dom";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <main>
      <section
        id="gallery"
        className="w-full flex flex-col md:px-20 px-10 h-fit pb-[300px] py-20 justify-center items-center justify-items-center gap-16 bg-blue-200 -mb-[200px]"
      >
        <h1 className="text-3xl font-bold text-center uppercase">
          Click here to view our beautiful gallery
        </h1>
        <NavLink to="/gallery">
          <button className="font-poppins font-bold p-7 bg-yellow-500 text-2xl rounded-2xl ">
            Gallery
          </button>
        </NavLink>
      </section>
    </main>
  );
};

export default Gallery;
