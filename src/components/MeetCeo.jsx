import { useState, useEffect } from "react";
import volloceo from "../assets/images/vollo-ceo.png";
const logos = [
  { name: "Google News", size: "large" },
  { name: "Yahoo News", size: "large" },
  { name: "Business Standard", size: "large" },
  { name: "ANI News", size: "large" },
  { name: "Lokmat Times", size: "large" },
  { name: "Latestly", size: "large" },
  { name: "Hindustan Express", size: "large" },
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="pt-24  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Meet Our Founder & CEO
        </h2>
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src={volloceo}
              alt="Krishna Chaitanya Divvela"
              className="rounded-full w-48 h-48 mx-auto"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-2xl font-semibold mb-2">
              Krishna Chaitanya Divvela
            </h3>
            <p className="text-xl mb-4">Founder & CEO, Vollo Inc.</p>
            <p className="mb-4">
              At the core of Vollo Inc.&apos;s success is Krishna Chaitanya
              Divvela, a visionary leader with an unwavering commitment to
              innovation and excellence. Recognized as the &ldquo;Youngest
              Entrepreneur in AI Tech Industry&ldquo; at the Growth Stories
              Summit & Awards 2024, Krishna&apos;s transformative leadership is
              redefining the way businesses leverage technology.
            </p>
            <p className="mb-4">
              Under his guidance, Vollo Inc. has established itself as a global
              leader in AI-driven solutions, offering expertise in artificial
              intelligence, game development, IoT, and cybersecurity. With a
              keen focus on delivering intelligent, scalable, and future-ready
              solutions, Krishna ensures that Vollo Inc. stays ahead of the
              curve in a rapidly evolving digital landscape.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Building a Legacy of Trust and Innovation
          </h3>
          <p className="mb-4">
            Krishna Chaitanya&apos;s vision and achievements have garnered
            widespread recognition, with Vollo Inc. featured in over 213
            esteemed media outlets. This extensive coverage reflects the impact
            of his work and the trust Vollo Inc. inspires among its clients and
            partners worldwide.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">As Seen On:</h3>
          <p className="mb-4">
            Below, let your audience explore the media platforms and
            publications that have celebrated Krishna Chaitanya&apos;s journey
            and Vollo Inc.&apos;s groundbreaking contributions:
          </p>
        </div>

        <div className="mb-12 overflow-hidden">
          <div className="flex animate-scroll py-4 items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`flex-shrink-0 mx-4 ${
                  logo.size === "large" ? "w-32 h-32" : "w-24 h-24"
                } bg-white rounded-lg shadow-md flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110`}
              >
                {/* <img
                  src={`/path-to-${logo.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}-logo.png`}
                  alt={`${logo.name} logo`}
                  className="max-w-full max-h-full p-2"
                /> */}
                {/* <span className="sr-only">{logo.name}</span> */}
                <h1 className="text-center">{logo.name}</h1>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-lg font-semibold mb-8">
          +188 more esteemed media outlets!
        </p>
        <p className="text-center text-xl font-bold mb-12">
          Over 213+ companies trust us worldwide!
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Empowering a Smarter Future
          </h3>
          <p className="mb-4">
            Krishna&apos;s leadership extends beyond solving today&apos;s
            challenges—he envisions a smarter, more efficient tomorrow. At Vollo
            Inc., his philosophy combines innovation, precision, and a
            relentless focus on client success. Through cutting-edge solutions
            and a commitment to excellence, Vollo Inc. continues to build a
            legacy of trust, empowering businesses worldwide to thrive in the
            digital age.
          </p>
          <p>
            With every solution, Vollo Inc. delivers more than technology—it
            delivers impact, integrity, and the promise of a brighter future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
