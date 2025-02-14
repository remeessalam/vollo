import { Link } from "react-scroll";
import { images, landingpageimages } from "../../constant";

const bannerDetails = {
  web: {
    backgroundImage: landingpageimages.landingaboutpc,
    title1: "Build Scalable, High-Performance Websites",
    title2: "Building Your Web Presence with Precision",
    description:
      "Our expert team creates innovative and responsive websites tailored to your business needs, optimizing user experience and performance across all devices.",
  },
  app: {
    backgroundImage: images.suiuximage,
    title1: "Mobile Apps that Drive Engagement",
    title2: "Creating Mobile Apps that Empower Your Business",
    description:
      "We specialize in building intuitive and user-friendly mobile applications for iOS and Android that engage users and enhance your brand's presence.",
  },
  aiCalling: {
    backgroundImage: images.saiimage,
    title1: "Revolutionizing Communication with AI Calling",
    title2: "Seamless AI-Powered Call Management",
    description:
      "Enhance customer interactions with our AI-driven calling solutions, providing automated, intelligent, and responsive communication for businesses of all sizes.",
  },
  gameDev: {
    backgroundImage: images.sgamedevelopmentimage,
    title1: "Immersive Game Development Solutions",
    title2: "Creating Engaging and Interactive Gaming Experiences",
    description:
      "Our team crafts visually stunning and highly interactive games across multiple platforms, blending creativity and technology for an unforgettable user experience.",
  },
};
//eslint-disable-next-line
const LandingBanner = ({ page }) => {
  const banner = bannerDetails[page] || bannerDetails.web;

  return (
    <div
      id="banner"
      className="relative pt-6 lg:pt-0 sm:pb-6 lg-pb-0 pb-0 flex justify-center items-center h-screen text-black w-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banner.backgroundImage})` }}
    >
      <div className="absolute top-0 h-full w-full bg-black/50"></div>
      <div className="flex flex-col items-center  mt-10 sm:mt-0 text-center">
        <h1
          data-aos="fade-up"
          className="text-landsmallxl sm:text-smallxl sm:1xl leading-tight text-white"
        >
          {banner.title1}
        </h1>
        <h1
          data-aos="fade-up"
          className="text-landsmallxl sm:text-smallxl  leading-tight text-white"
        >
          {banner.title2}
        </h1>
        <p
          data-aos="fade-up"
          className="text-[#e3e2e2] text-desc font-normal max-w-[70%] my-4"
        >
          {banner.description}
        </p>
        <div className="sm:max-w-[60%] max-w-full flex md:flex-row flex-col items-center justify-center">
          <Link
            key={"contact"}
            to={"contact"}
            spy={true}
            smooth={true}
            offset={-140}
            duration={1000}
          >
            <p data-aos="fade-up" className="primary-btn sm:mb-0 mb-4">
              Book a Demo
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
