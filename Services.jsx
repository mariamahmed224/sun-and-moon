import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { padi1 } from "../assets";
import { NavLink } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section
      id="services"
      className="w-full flex flex-col md:px-20 px-10 md:py-20 py-10 justify-center items-center gap-15 bg-blue-200"
    >
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 mt-4">
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-8">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Pedicure regular</h1>
            <h1 className="font-poppins text-1xl font-bold">$35</h1>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Pedicure gel</h1>
            <h1 className="font-poppins text-1xl font-bold">$40</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Pedicure gelly</h1>
            <h1 className="font-poppins text-1xl font-bold">$45</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">volcano spa pedicure</h1>
            <h1 className="font-poppins text-1xl font-bold">$55</h1>
          </div>
          <div id="image-box">
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              src={padi1}
              alt="boys"
            />
          </div>
          <a href="https://book.heygoldie.com/Sun-Moon ">
            <button
              data-aos="zoom-in"
              className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white"
            >
              BOOK ONLINE
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
