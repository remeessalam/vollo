import { Link } from "react-scroll";
import { images, landingpageimages } from "../../constant";

const LandingBanner = ({ page }) => {
  const { landingpagebannerapp, landingpagebannerweb, landingaboutpc } =
    landingpageimages;
  const { suiuximage } = images;
  return (
    <div
      id="banner"
      className="relative pt-6 lg:pt-0 sm:pb-6 lg-pb-0 pb-0 flex justify-center items-center h-screen text-black w-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${page === "web" ? landingaboutpc : suiuximage})`,
      }}
    >
      <div className="absolute top-0 h-full w-full bg-black/50"></div>
      <div className="flex flex-col items-center  mt-10 sm:mt-0 text-center">
        <h1
          data-aos="fade-up"
          className="text-landsmallxl sm:text-smallxl sm:1xl leading-tight text-white"
        >
          {page === "web"
            ? "Build Scalable, High-Performance Websites"
            : "Mobile Apps that Drive Engagement"}
        </h1>
        {/* bg-gradient-to-r drop-shadow-2xl from-[#59066e] to-[#9a80b6] text-transparent bg-clip-text */}
        <h1
          data-aos="fade-up"
          className="text-landsmallxl sm:text-smallxl  leading-tight text-white "
        >
          {page === "web"
            ? "Building Your Web Presence with Precision"
            : "Creating Mobile Apps that Empower Your Business"}
        </h1>

        <p
          data-aos="fade-up"
          className="text-[#e3e2e2] text-desc font-normal max-w-[70%] my-4"
        >
          {page === "web"
            ? "Our expert team creates innovative and responsive websites tailored to your business needs, optimizing user experience and performance across all devices."
            : "We specialize in building intuitive and user-friendly mobile applications for iOS and Android that engage users and enhance your brand's presence."}
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
