import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { hair, hero2, nails, scissors } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
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
        id="home"
        className="w-full md:px-[120px] px-10 flex flex-col md:flex-row justify-center items-center gap-20 form-control"
      >
        <div
          id="content-box"
          className="flex flex-col justify-center items-start gap-10 relative"
        >
          <div className="absolute  w-[30px] h-[30px] bg-yellow-500 rounded-2xl top-0 -left-[70px] filter blur opacity-50 animate-blob"></div>
          <div className="absolute  w-[30px] h-[30px] bg-yellow-300 rounded-2xl  -bottom-[70px] filter blur opacity-50 animate-blob"></div>
          <div className="absolute  w-[30px] h-[30px] bg-blue-500 rounded-2xl top-0 -right-[70px] filter blur opacity-50 animate-blob"></div>
          <div className="absolute  w-[30px] h-[30px] bg-blue-500 rounded-2xl top-36 right-36 -left-50 filter blur opacity-50 animate-blob"></div>
          <div className="absolute  w-[30px] h-[30px] bg-yellow-500 rounded-2xl top-50 right-50 -left-50 filter blur opacity-50 animate-blob"></div>
          <h1 data-aos="zoom-in" className="text-2xl text-black font-semibold">
            welcome to
          </h1>
          <h1 data-aos="zoom-in" className="text-7xl text-black font-bold ">
            <span className="italic text-yellow-500">SUN $ MOON</span>
            <br />
            UNISEX
            <br />
            SALON AND NAILS
          </h1>
          <div
            data-aos="slide-up"
            id="icon-list"
            className="flex flex-col justify-center items-start gap-6"
          >
            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <FaLocationDot className="text-black size-6" />
              <h1 className="text-xl text-gray-800 font-semibold uppercase">
                135 State St. Springfield Ma
              </h1>
            </div>
            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <MdOutlinePhoneAndroid className="text-black size-6" />
              <h1 className="text-xl text-gray-800 font-semibold">
                413-640-1794
              </h1>
            </div>

            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <MdEmail className="text-black size-6" />
              <h1 className="text-xl text-gray-800 font-semibold">
                Sun2528moon@gmail.com
              </h1>
            </div>

            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <FaHeadphones className="text-black size-6" />
              <h1 className="text-xl text-gray-800 font-semibold">
                413-640-1794
              </h1>
            </div>
          </div>
          <a href="https://book.heygoldie.com/Sun-Moon">
            <button
              data-aos="zoom-in"
              className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white"
            >
              BOOK ONLINE
            </button>
          </a>
        </div>
        <div data-aos="zoom-in" id="image-box" className="md:w-[50%] w-full">
          <img
            src={hero2}
            alt="hero"
            className="rounded-xl w-full md:h-[700px] h-[500px]"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full md:px-[120px] px-10 py-10 gap-10">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={scissors}
            alt="scissors"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="txt-2xl text-black font-semibold font-poppins">
            Regular Haircut
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={hair}
            alt="hair"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="txt-2xl text-black font-semibold font-poppins">
            Women Salon
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={nails}
            alt="nail"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="txt-2xl text-black font-semibold font-poppins">
            Nails
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={scissors}
            alt="scissors"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="txt-2xl text-black font-semibold font-poppins">
            Regular Haircut
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Hero;
