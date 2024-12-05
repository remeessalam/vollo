import { Link } from "react-router-dom";
// import RoundedHeading from "../../components/RoundedHeading";
import { appDevelopmentServices, images } from "../../constant";
import mission from "../../assets/images/png/mission.png";
import vission from "../../assets/images/png/vission.png";

const About = () => {
  const { homepageaboutus } = images;
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center mt-10 lg:mt-72 gap-10"
    >
      {/* <RoundedHeading text={"about us"} /> */}
      <div className="flex flex-wrap flex-col-reverse  sm:flex-col items-start justify-between lg:flex-row  adjustedwidth">
        <div className="flex flex-col gap-4 lg:w-[45%] w-full">
          <div className="w-full">
            <h3
              data-aos="fade-left"
              className="leading-tight sm:mt-0 mt-4 text-smhead uppercase text-decsriptioncolor"
            >
              About us
            </h3>
          </div>
          <div data-aos="fade-up" className="">
            <h1 className="text-head leading-tight">
              Empowering Growth Through Innovative Technology
            </h1>
            <p className="text-desc">
              At Vollo Inc., we craft innovative, AI-driven technology solutions
              to help businesses overcome challenges, achieve excellence, and
              unlock sustainable growth in the digital age.
            </p>
          </div>
          <div data-aos="fade-up" className="flex gap-4">
            <div className="min-w-[60px] h-[60px] bg-white flex justify-center items-center rounded-lg">
              <img src={mission} alt="icon" width={40} height={40} />
            </div>
            <div className="flex flex-col pt-3">
              <h3 className="text-head"> Mission</h3>
              <p className="text-desc">
                To deliver tailored AI-driven solutions that empower businesses
                to achieve efficiency, sustainable growth, and success in the
                digital age.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex gap-4">
            <div className="min-w-[60px] h-[60px] bg-white flex justify-center items-center rounded-lg">
              <img src={vission} alt="icon" width={40} height={40} />
            </div>
            <div className="flex flex-col pt-3">
              <h3 className="text-head"> Vision</h3>
              <p className="text-desc">
                We strive to drive innovation, empowering businesses with
                scalable technology solutions for growth, collaboration, and
                lasting success.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="w-[150px] mt-2 sm:mt-5">
            <Link to={"/about-us"}>
              <h4 className="primary-btn">Learn more</h4>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[53%] flex justify-center lg:justify-start w-full overflow-hidden rounded-xl"
        >
          <img
            src={homepageaboutus}
            alt={homepageaboutus}
            className="max-h-[500px] w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
