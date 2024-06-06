import React from "react";
import {
  barbr1,
  barbr2,
  barbr3,
  barbr4,
  barbr5,
  barbr6,
  barbr7,
  barbr8,
  barbr9,
  beauty1,
  beauty2,
  beauty3,
  beauty4,
  hair1,
  hair2,
  hair3,
  hair4,
  hair5,
  hair6,
  nail1,
  nail10,
  nail2,
  nail3,
  nail4,
  nail5,
  nail6,
  nail7,
  nail8,
  nail9,
  pedi1,
  pedi2,
  pedi3,
  pedi4,
  pedi5,
} from "../assets";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <main className="flex sm:flex-row flex-col ">
      <div className="p-10 bg-yellow-500 flex items-center justify-center">
        <h1 data-aos="zoom-in" className="font-poppins text-black font-bold ">
          VIEW OUR BEAUTIFUL GALLERY
        </h1>
      </div>
      <div className="p-3 flex flex-col items-center">
        <p
          data-aos="slide-up"
          data-aos-delay="200"
          className="font-poppins font-bold text-2xl"
        >
          BARBER SHOP
        </p>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="grid grid-cols-2 m-3 "
        >
          <img
            src={barbr1}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={barbr2}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={barbr3}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={barbr4}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={barbr5}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={barbr6}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={barbr7}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={barbr8}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={barbr9}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
        </div>
      </div>

      <div className="p-3">
        <p className="font-poppins font-bold text-2xl">ACRYLIC NAILS</p>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="grid grid-cols-2 m-3"
        >
          <img
            src={nail1}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={nail2}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={nail3}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={nail4}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={nail5}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={nail6}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={nail7}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={nail8}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={nail9}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={nail10}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
        </div>
      </div>
      <div className="p-3">
        <p className="font-poppins font-bold text-2xl">BEAUTY SALON</p>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="grid grid-cols-2 m-3"
        >
          <img
            src={beauty1}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={beauty2}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={beauty3}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={beauty4}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={hair1}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={hair2}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={hair3}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={hair4}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={hair5}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={hair6}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
        </div>
      </div>
      <div className="p-3">
        <p
          data-aos="slide-up"
          data-aos-delay="200"
          className="font-poppins font-bold text-2xl"
        >
          MANICURE AND PEDICURE
        </p>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="grid grid-cols-2 m-3"
        >
          <img
            src={pedi1}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={pedi2}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={pedi3}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={pedi4}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
          <img
            src={pedi5}
            alt="barb1"
            className="h-[150px] w-[150px] rounded-2xl mb-3"
          />
        </div>
      </div>
    </main>
  );
};

export default Gallery;
