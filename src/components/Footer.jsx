import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";
import { footerLink } from "../constants";

const Footer = () => {
  return (
    <main>
      <section className="bg-white w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-6 border-[20px] border-yellow-500">
        <h1 className="text-black font-bold text-5xl italic">Sun And Moon</h1>
        <p className="text-lg text-center font-semibold text-grey">
          SUN AND MOON is your one stop shop for all your hair care. Book a
          session with us TODAY and watch us turn your hair ideas to reality. We
          assure you that you won't regret it{" "}
        </p>
        <div id="icons" className="flex justify-center items-center gap-4">
          <div id="icon-box" className="flex flex-row gap-3">
            {footerLink.map((Footer, index) => {
              return (
                <div
                  key={index}
                  className="bg-blue-200 p-4 rounded-full cursor-pointer hover:text-white transform hover:scale-110 transition-transform duration-300 hover:bg-white"
                >
                  <a href={footerLink[index].href} target="_blank">
                    <img src={Footer.img} alt="img" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div
        data-aos="slide-right"
        data-aos-delay="200"
        id="icon-box"
        className="bg-blue-200 p-4 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-14 bottom-6 right-6 lg:right-6"
      >
        <Link to="home" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-5" />
        </Link>
      </div>
    </main>
  );
};

export default Footer;
