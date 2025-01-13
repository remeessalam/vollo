import { useState, useEffect } from "react";
import volloceo from "../assets/images/vollo-ceo.png";
import volloceoaward from "../assets/images/vollo-ceo-award.png";
import googlenews from "../assets/images/news/googlenews.gif";
import yahoonews from "../assets/images/news/yahoonews.webp";
import businerssstandard from "../assets/images/news/businessstandard.png";
import aninews from "../assets/images/news/aninews.jpg";
import lokmatnews from "../assets/images/news/lokmatnews.png";
import latestlynews from "../assets/images/news/latestlynews.jpg";
import hindustannews from "../assets/images/news/hindustannews.png";
const logos = [
  { name: "Google News", size: "large", img: googlenews },
  { name: "Yahoo News", size: "large", img: yahoonews },
  { name: "Business Standard", size: "large", img: businerssstandard },
  { name: "ANI News", size: "large", img: aninews },
  { name: "Lokmat Times", size: "large", img: lokmatnews },
  { name: "Latestly", size: "large", img: latestlynews },
  { name: "Hindustan Express", size: "large", img: hindustannews },
];
const logostwo = [
  { name: "123 Men Life", size: "small" },
  { name: "Daily Gossip Online", size: "small" },
  { name: "Popular Reads", size: "small" },
  { name: "News Eagle India", size: "small" },
  { name: "Rabale News", size: "small" },
  { name: "India Times News", size: "small" },
  { name: "Punjab News Update", size: "small" },
  { name: "India State News", size: "small" },
  { name: "Indian Press Wire", size: "small" },
  { name: "Manipur News World", size: "small" },
  { name: "Indian Pulse Media", size: "small" },
  { name: "News Wave India", size: "small" },
  { name: "India Story Line", size: "small" },
  { name: "Latest News Karnataka", size: "small" },
  { name: "Nagaland News 24x7", size: "small" },
  { name: "News Pulse India", size: "small" },
  { name: "Mizoram News Buzz", size: "small" },
  { name: "Odisha News Voice", size: "small" },
];

const FounderSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-24  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-sechead mb-10 sm:mb-8 text-center text-black leading-tight"
        >
          Meet Our Founder & CEO
        </h2>
        <div className="grid md:grid-cols-2 items-center mb-12">
          <div className=" mb-6 md:mb-0">
            <img
              data-aos="fade-right"
              src={volloceo}
              alt="Krishna Chaitanya Divvela"
              className="max-h-[500px]  mx-auto object-cover rounded-xl"
            />
          </div>
          <div className=" md:pl-8">
            <h3 className="text-head mb-2" data-aos="fade-left">
              Krishna Chaitanya Divvela
            </h3>
            <p className="text-xl mb-4" data-aos="fade-left">
              Founder & CEO, Vollo Inc.
            </p>
            <p className="mb-4" data-aos="fade-left">
              At the core of Vollo Inc.&apos;s success is Krishna Chaitanya
              Divvela, a visionary leader with an unwavering commitment to
              innovation and excellence. Recognized as the &ldquo;Youngest
              Entrepreneur in AI Tech Industry&ldquo; at the Growth Stories
              Summit & Awards 2024, Krishna&apos;s transformative leadership is
              redefining the way businesses leverage technology.
            </p>
            <p className="mb-4" data-aos="fade-left">
              Under his guidance, Vollo Inc. has established itself as a global
              leader in AI-driven solutions, offering expertise in artificial
              intelligence, game development, IoT, and cybersecurity. With a
              keen focus on delivering intelligent, scalable, and future-ready
              solutions, Krishna ensures that Vollo Inc. stays ahead of the
              curve in a rapidly evolving digital landscape.
            </p>
          </div>
        </div>

        <div className="mb-12 grid md:grid-cols-2">
          <div>
            <h3 data-aos="fade-right" className="text-head mb-4">
              Building a Legacy of Trust and Innovation
            </h3>
            <p className="mb-4" data-aos="fade-right">
              Krishna Chaitanya&apos;s vision and achievements have garnered
              widespread recognition, with Vollo Inc. featured in over 213
              esteemed media outlets. This extensive coverage reflects the
              impact of his work and the trust Vollo Inc. inspires among its
              clients and partners worldwide.
            </p>
          </div>

          <div className=" mb-6 md:mb-0">
            <img
              data-aos="fade-left"
              src={volloceoaward}
              alt="Krishna Chaitanya Divvela"
              className="max-h-[500px]  mx-auto object-cover"
            />
          </div>
        </div>

        <div className="mb-12" data-aos="fade-up">
          <h3 className="text-head mb-4">As Seen On:</h3>
          <p className="mb-4">
            Below, let your audience explore the media platforms and
            publications that have celebrated Krishna Chaitanya&apos;s journey
            and Vollo Inc.&apos;s groundbreaking contributions:
          </p>
        </div>

        <div className="w-full overflow-hidden" data-aos="fade-up">
          <div className="mb-8">
            <div className="flex animate-scroll py-0">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6 w-48 h-32 bg-white rounded-lg shadow-md flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <img
                    src={logo.img}
                    alt={`${logo.name} logo`}
                    className="max-w-full max-h-full p-2"
                  />
                  <span className="sr-only">{logo.name}</span>
                  {/* <h1 className="text-lg font-medium text-gray-800">
                    {logo.name}
                  </h1> */}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex animate-scroll2 py-4">
              {[...logostwo, ...logostwo].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 w-40 h-24 bg-white rounded-lg shadow-md flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <h1 className="text-sm font-medium text-gray-800 text-center px-2">
                    {logo.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p
          className="text-center text-lg font-semibold my-8"
          data-aos="fade-up"
        >
          +188 more esteemed media outlets!
        </p>
        <p className="text-center text-xl font-bold mb-12" data-aos="fade-up">
          Over 213+ companies trust us worldwide!
        </p>

        <div className="mb-12">
          <h3 className="text-head mb-4" data-aos="fade-up">
            Empowering a Smarter Future
          </h3>
          <p className="mb-4" data-aos="fade-up">
            Krishna&apos;s leadership extends beyond solving today&apos;s
            challenges—he envisions a smarter, more efficient tomorrow. At Vollo
            Inc., his philosophy combines innovation, precision, and a
            relentless focus on client success. Through cutting-edge solutions
            and a commitment to excellence, Vollo Inc. continues to build a
            legacy of trust, empowering businesses worldwide to thrive in the
            digital age.
          </p>
          <p data-aos="fade-up">
            With every solution, Vollo Inc. delivers more than technology—it
            delivers impact, integrity, and the promise of a brighter future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
