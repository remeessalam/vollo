import { Link } from "react-router-dom";
// import RoundedHeading from "../../components/RoundedHeading";
import { appDevelopmentServices, images } from "../../constant";
const About = () => {
  const { homepageaboutus } = images;
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center mt-10 lg:mt-72 gap-10"
    >
      {/* <RoundedHeading text={"about us"} /> */}
      <div className="flex flex-wrap flex-col items-start justify-between lg:flex-row  adjustedwidth">
        <div className="flex flex-col gap-4 lg:w-[45%] w-full">
          <div className="w-full">
            <h3
              data-aos="fade-left"
              className="leading-tight text-4xl text-decsriptioncolor"
            >
              About us
            </h3>
          </div>
          <div data-aos="fade-up" className="">
            <h1 className="text-4xl leading-tight">
              Empowering Growth Through Innovative Technology
            </h1>
            <p>
              At Vollo Inc., we craft innovative, AI-driven technology solutions
              to help businesses overcome challenges, achieve excellence, and
              unlock sustainable growth in the digital age.
            </p>
          </div>
          <div data-aos="fade-up" className="flex gap-4">
            <div className="min-w-[60px] h-[60px] bg-primary flex justify-center items-center rounded-lg">
              <img
                src={appDevelopmentServices[0].img}
                alt="icon"
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-col pt-3">
              <h3 className="text-6xl"> Mission</h3>
              <p>
                To deliver tailored AI-driven solutions that empower businesses
                to achieve efficiency, sustainable growth, and success in the
                digital age.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex gap-4">
            <div className="min-w-[60px] h-[60px] bg-primary flex justify-center items-center rounded-lg">
              <img
                src={appDevelopmentServices[0].img}
                alt="icon"
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-col pt-3">
              <h3 className="text-6xl"> Vission</h3>
              <p>
                We strive to drive innovation, empowering businesses with
                scalable technology solutions for growth, collaboration, and
                lasting success.
              </p>
            </div>
          </div>
          <div className="w-[150px] mt-2 sm:mt-5">
            <Link to={"/about-us"}>
              <h4 className="primary-btn">Lern more</h4>
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
