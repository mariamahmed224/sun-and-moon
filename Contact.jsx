import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { owner } from "../assets";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const formRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Esther",
          from_email: form.email,
          to_email: "sun2528moonn@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };
  return (
    <section
      id="contact"
      className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 justify-center items-start"
    >
      <div
        data-aos="zoom-in"
        id="img-box"
        className="w-full bg-cover bg-center h-[700px] flex justify-center"
        style={{ backgroundImage: `url(${owner})` }}
      >
        <p className="uppercase font-poppins font-bold text-3xl text-white ">
          meet the owners
        </p>
      </div>
      <div
        id="form-box"
        className="bg-blue-200 p-16 flex flex-col justify-center items-center gap-12 w-full h-[700px]"
      >
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className=" text-6xl font-bold text-center"
        >
          Contact Us
        </h1>
        <div
          data-aos="zoom-out"
          data-aos-delay="400"
          id="form"
          className="w-full flex flex-col justify-center items-center gap-4"
        >
          <form className="gap-7 mt-14 flex flex-col" onSubmit={handleSubmit}>
            <label className="text-black-500 font-semibold">
              Name
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full p-3 text-black font-semibold input rounded-xl"
                required
                value={form.name}
                onChange={handleChange}
              />
            </label>

            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                placeholder="Enter your valid email address"
                className="w-full p-3 text-black font-semibold rounded-xl"
                required
                value={form.email}
                onChange={handleChange}
              />
            </label>

            <label className="text-black-500 font-semibold">
              Message
              <textarea
                name="message"
                type="text"
                cols="30"
                rows="5"
                placeholder="Enter your message here....."
                className="w-full p-3 text-black font-semibold rounded-xl"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button
              type="submit"
              className="bg-white hover:bg-yellow-500 cursor-pointer w-full font-semibold text-lg text-black hover:text-white p-3 rounded-xl"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
