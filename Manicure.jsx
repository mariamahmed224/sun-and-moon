import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { mani1 } from "../assets";


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
        
        <p data-aos="zoom-in" className="font-bold text-3xl font-poppins ">Nails Salon</p>
        <p data-aos="zoom-in" className="text-2xl font-bold  text-center font-poppins">
          MANICURE AND PEDICURE
        </p>
      </div>
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 mt-4">
        
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-8">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Manicure regular</h1>
            <h1 className="font-poppins text-1xl font-bold">$25</h1>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Manicure gel</h1>
            <h1 className="font-poppins text-1xl font-bold">$30</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Manicure Gel Color</h1>
            <h1 className="font-poppins text-1xl font-bold">$35</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6 border-b-2 border-blue-800 pb-10"
          >
            <h1 className="text-1xl font-bold">Manicure Rusa</h1>
            <h1 className="font-poppins text-1xl font-bold">$40</h1>
          </div>
          <div id="image-box">
          <img data-aos="zoom-in" data-aos-delay="200" src={mani1} alt="boys" />
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
