import React from "react";
import {
  appDevelopmentServices,
  webDevelopmentServices,
  aiCallingServices,
  gameDevelopmentServices,
} from "../../constant";
import RoundedHeading from "../../components/RoundedHeading";

const servicesData = {
  web: {
    services: webDevelopmentServices,
    heading: "Exceptional Web Development to Strengthen Your Digital Presence",
    description:
      "Professional web development services tailored to create robust, responsive, and visually appealing websites that reflect your brand and drive growth.",
  },
  app: {
    services: appDevelopmentServices,
    heading: "Innovative App Development for Engaging Mobile Experiences",
    description:
      "Advanced app development solutions focused on building secure, scalable, and intuitive mobile applications that connect with your audience and elevate your brand.",
  },
  aiCalling: {
    services: aiCallingServices,
    heading: "Transform Communication with AI Calling Solutions",
    description:
      "Revolutionizing voice interactions with AI-powered automation, virtual assistants, and advanced speech recognition for seamless communication.",
  },
  gameDev: {
    services: gameDevelopmentServices,
    heading: "Next-Level Game Development for Immersive Experiences",
    description:
      "Creating high-performance games across multiple platforms with cutting-edge technology, AI-driven mechanics, and captivating storytelling.",
  },
};

const LandingServices = ({ page }) => {
  const { services, heading, description } =
    servicesData[page] || servicesData.web;

  return (
    <div id="services" className="flex justify-center relative">
      <div className="py-10 flex flex-col items-center gap-5 z-10 text-black">
        <div className="w-full">
          <RoundedHeading
            text={`Our ${
              servicesData[page]?.title || "Web"
            } Development Services`}
          />
        </div>
        <h1 data-aos="fade-up" className="text-sechead text-center max-w-2xl">
          {heading}
        </h1>
        <p data-aos="fade-up" className="text-center max-w-2xl text-desc">
          {description}
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 py-[2rem] mx-auto max-w-6xl"
        >
          {services.map((item) => (
            <div
              key={item.id}
              className="shadow-2xl transition-all border-2 border-primary/40 bg-white hover:-translate-y-1 hover:bg-primary/25 duration-300 rounded-lg"
            >
              <div className="flex h-full flex-col gap-2 items-center text-center text-black p-5 rounded-lg">
                <img
                  src={item.img}
                  alt="icon"
                  className="w-[6rem] grayscale-[65%]"
                />
                <h6 className="text-head">{item.title}</h6>
                <p className="text-md text-black/70 text-desc">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
