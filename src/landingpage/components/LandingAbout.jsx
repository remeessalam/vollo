import { Link as ScrollLink } from "react-scroll";
import { landingpageimages } from "../../constant";
import RoundedHeading from "../../components/RoundedHeading";

const LandingAbout = ({ page }) => {
  const isWebDevelopment = page === "web";
  const { webLandingAbout, appLandingAbout } = landingpageimages;
  return (
    <div className="mt-16">
      <section
        id="about"
        className="adjustedwidth mx-auto bg-white text-black "
      >
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          <RoundedHeading
            text={isWebDevelopment ? "Web Development" : "App Development"}
          />
          {/* {isWebDevelopment ? "Web Development" : "App Development"} */}
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="text-5xl">
                {isWebDevelopment
                  ? "Innovative Web Development Solutions for Modern Brands"
                  : "Building Apps that Elevate Your Business with Our App Development Services."}
              </h2>
              <p className="text-decsriptioncolor">
                {isWebDevelopment
                  ? "At VOLLO INC , we specialize in delivering high-performance websites and digital platforms that help businesses thrive online. From custom web development to responsive design, we build solutions that are both user-friendly and visually stunning. Let's turn your vision into a reality."
                  : "At VOLLO INC , we specialize in creating intuitive, high-performing mobile applications tailored to meet the unique needs of businesses across industries. Our expert team combines technical expertise with creative design to develop apps that drive engagement and growth."}
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-120}
                className="primary-btn"
              >
                Contact Us
              </ScrollLink>

              <ScrollLink
                to="services"
                smooth
                offset={-120}
                className="secondary-btn"
              >
                Our Services
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="flex justify-center h-full">
            <img
              src={isWebDevelopment ? webLandingAbout : appLandingAbout}
              className="object-contain max-h-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingAbout;
