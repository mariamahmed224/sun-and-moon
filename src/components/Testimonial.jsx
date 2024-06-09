import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { testimony } from "../constants";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Testimonial = () => {
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
      id="testimonial"
      className="w-full md:h-[165vh] h-fit px-10 py-10  flex flex-col justify-center items-center gap-6 bg-blue-200"
    >
      <h1
        data-aos="zoom-in"
        className="sm:text-6xl text-5xl font-bold text-center font-poppins"
      >
        Testimonials
      </h1>
      <p
        data-aos="zoom-in"
        className="font-poppins text-xl font-semibold text-center"
      >
        have a look at what our satisfied customers are saying about SUN AND
        MOON and our Services.
      </p>
      <div
        id="clients"
        className="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-6"
      >
        {testimony.map((testimony, index) => (
          <div
            data-aos="slide-up"
            data-aos-delay="100"
            id="main-box"
            key={index}
            className="w-full bg-white p-14 flex flex-col justify-between items-center gap-6 rounded-3xl"
          >
            <div
              id="top"
              className="flex justify-between items-center gap-8 w-full"
            >
              <div className="flex justify-center items-center gap-4 relative">
                <BiSolidQuoteAltLeft className="size-20 text-black absolute left-0 opacity-20" />
                <h1 className="text-2xl text-black font-bold font-poppins">
                  {testimony.title}
                </h1>
              </div>
              <img
                src={testimony.image}
                alt="image"
                className="w-[100px] h-[100px] transform hover:scale-110 transition duration-300 cursor-pointer rounded-full"
              />
            </div>
            <div id="bottom" className="w-full">
              <p className="text-poppins text-end text-lg text-blue-800 font-medium">
                {testimony.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
