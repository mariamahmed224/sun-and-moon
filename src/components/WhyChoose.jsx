import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { dresser } from "../assets";
import { NavLink } from "react-router-dom";

const WhyChoose = () => {
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
      id="about"
      className="w-full md:px-20 px-10 md:py-20 py-10 flex flex-col md:flex-row justify-center gap-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${dresser})` }}
    >
      <div
        data-aos="zoom-in"
        className="flex flex-col justify-center items-center gap-10 bg-white p-10 rounded-xl md:w-[40%] w-full"
      >
        <h1 className="text-blue-500 text-4xl font-bold">WORKING HOURS</h1>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-xl text-black font-lg font-poppins">
            SUNDAY CLOSED
          </p>
          <p className="text-xl text-black font-lg font-poppins">
            MONDAY 9AM - 6PM
          </p>
          <p className="text-xl text-black font-lg font-poppins">
            TUESDAY 9AM - 6PM
          </p>
          <p className="text-xl text-black font-lg font-poppins">
            WEDNESDAY 9AM - 6PM
          </p>
          <p className="text-xl text-black font-lg font-poppins">
            THURSDAY 9AM - 6PM
          </p>
          <p className="text-xl text-black font-lg font-poppins">
            FRIDAY 9AM - 6PM
          </p>
          <p className="text-xl text-black font-lg font-poppins">
            SATURDAY 9AM - 6PM
          </p>
        </div>
        <a href="https://book.heygoldie.com/Sun-Moon ">
          <button className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white mt-6">
            BOOK ONLINE
          </button>
        </a>
      </div>
      <div
        data-aos="slide-up"
        data-aos-delay="200"
        className="md:w-[40%] w-full flex flex-col justify-center items-start gap-6 h-fit"
      >
        <h1 className="text-6xl text-white font-bold text-center">
          Why Choose Us
        </h1>
        <p className="text-2xl font-semibold text-white text-center">
          At Sun And Moon, Your stisfaction is our priority
        </p>
        <div
          id="icon-list"
          className="flex flex-col justify-center items-start gap-4"
        >
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Always welcoming enviroment
            </h1>
          </div>
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Top Notch customer care
            </h1>
          </div>
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Proffesional stylist
            </h1>
          </div>
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Top Notch Equipments
            </h1>
          </div>
          <NavLink to="/book">
            <button className="text-black px-10 py-4 bg-white hover:bg-yellow-500 hover:text-white rounded-xl font-semibold">
              BOOK NOW
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
