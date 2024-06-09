import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { nail2 } from "../assets";
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
      className="w-full flex flex-col md:px-20 px-10 md:py-20 py-10 justify-center items-center gap-15 bg-blue-200 border-b-3 border-blue-800"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        
        <p data-aos="zoom-in" className="text-2xl font-bold  text-center font-poppins">
          ACRYLICS NAILS
        </p>
      </div>
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 mt-4">
        
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-8">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Overlay</h1>
            <h1 className="font-poppins text-1xl font-bold">$35</h1>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Rubber base</h1>
            <h1 className="font-poppins text-1xl font-bold">$40</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Change color</h1>
            <h1 className="font-poppins text-1xl font-bold">$15</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Paraffin coat</h1>
            <h1 className="font-poppins text-1xl font-bold">$14</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Masajefeet</h1>
            <h1 className="font-poppins text-1xl font-bold">$5</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Hot towels</h1>
            <h1 className="font-poppins text-1xl font-bold">$5</h1>
          </div>
          <h1>SHAPES</h1>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Oval</h1>
            <h1 className="font-poppins text-1xl font-bold">$5</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Stilleto</h1>
            <h1 className="font-poppins text-1xl font-bold">$5</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Almond</h1>
            <h1 className="font-poppins text-1xl font-bold">$5</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Reshape/cut down</h1>
            <h1 className="font-poppins text-1xl font-bold">$5</h1>
          </div>
          <h1>MAINTENANCE</h1>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Fill xs - ms</h1>
            <h1 className="font-poppins text-1xl font-bold">$30</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Fill L-XXXL</h1>
            <h1 className="font-poppins text-1xl font-bold">$40</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Soak off</h1>
            <h1 className="font-poppins text-1xl font-bold">$15</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Nail repair</h1>
            <h1 className="font-poppins text-1xl font-bold">$5</h1>
          </div>
          <div id="image-box">
          <img data-aos="zoom-in" data-aos-delay="200" src={nail2} alt="nail" />
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
