import React, { useEffect } from "react";
import { bookbg, sunandmoon2 } from "../assets";
import { Navbar } from "../components";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Book = () => {
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
      <Navbar />
      <section
        className="flex flex-col items-center w-full md:px-20 px-10  h-32  md:flex-row justify-center gap-20 bg-cover bg-center "
        style={{ backgroundImage: `url(${bookbg})` }}
      >
        <h1 data-aos="zoom-in" className="font-poppins font-bold text-4xl">
          SUN $ MOON BOOKING PAGE
        </h1>
      </section>
      <section className="flex sm:flex-row flex-col px-12 py-12 justify-between">
        <div
          data-aos="zoom-in"
          className="flex flex-row justify-between items-start sm:my-0 my-8 border-2xl rounded-xl md:w-[40%] w-full"
        >
          <div className="flex flex-col gap-2">
            <h1 className="font-poppins sm:text-2xl text-xl  text-yellow-500">
              MONDAY
            </h1>
            <h1 className="font-poppins sm:text-2xl text-xl text-yellow-500">
              TUESDAY
            </h1>
            <h1 className="font-poppins sm:text-2xl text-xl text-yellow-500">
              WEDNESDAY
            </h1>
            <h1 className="font-poppins sm:text-2xl text-xl text-yellow-500">
              THURSDAY
            </h1>
            <h1 className="font-poppins sm:text-2xl text-xl text-yellow-500">
              FRIDAY
            </h1>
            <h1 className="font-poppins sm:text-2xl text-xl text-yellow-500">
              SATURDAY
            </h1>
            <h1 className="font-poppins sm:text-2xl text-xl text-yellow-500">
              SUNDAY
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-poppins sm:text-2xl text-xl">
              9:00AM - 6:00PM
            </h1>
            <h1 className="font-poppins sm:text-2xl text-xl">
              9:00AM - 6:00PM
            </h1>
            <h1 className="font-poppins sm:text-2xl text-xl">
              9:00AM - 6:00PM
            </h1>
            <h1 className="font-poppins sm:text-2xl text-xl">
              9:00AM - 6:00PM
            </h1>
            <h1 className="font-poppins sm:text-2xl text-xl">
              9:00AM - 6:00PM
            </h1>
            <h1 className="font-poppins sm:text-2xl text-xl">
              9:00AM - 6:00PM
            </h1>
            <h1 className="font-poppins sm:text-2xl text-xl">CLOSED</h1>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="flex flex-col items-start justify-start gap-4"
        >
          <p className="font-poppins text-2xl font-bold">
            CLICK ON THE LINKS BELOW{" "}
          </p>
          <div className="flex flex-row gap-4 items-center">
            <FaInstagram className="h-[40px] w-[40px]" />
            <a href="https://www.instagram.com/sun2528moon/">
              <p className="hover:text-yellow-500 cursor-pointer">
                sun2528moon
              </p>
            </a>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <FaFacebook className="h-[40px] w-[40px]" />
            <a href="https://www.facebook.com/profile.php?id=100073011550116&mibextid=LQQJ4d">
              <p className="hover:text-yellow-500 cursor-pointer">
                sun2528moon
              </p>
            </a>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <FaLocationArrow className="h-[40px] w-[40px]" />

            <p className="hover:text-yellow-500 cursor-pointer">
              135 State St. Springfield Ma
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <FaWhatsapp className="h-[40px] w-[40px]" />
            <a href="https://wa.me/14136401794">
              <p className="hover:text-yellow-500 cursor-pointer">
                413-640-1794
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Book;
