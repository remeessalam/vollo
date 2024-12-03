import { Link } from "react-router-dom";
import homepagebanner from "../../assets/images/homepagebanner.png";
import { appDevelopmentServices } from "../../constant";
import AdvancedAISolutions from "../../assets/images/png/AdvancedAISolutions.png";
import ScalableCloudInfrastructure from "../../assets/images/png/ScalableCloudInfrastructure.png";
import DataDrivenInsights from "../../assets/images/png/DataDrivenInsights.png";
const Banner = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div
        // h-bannerheightsm  lg:h-bannerheight
        className=" flex flex-col justify-center items-center h-screen lg:h-[120vh]  text-black w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homepagebanner})` }}
      >
        <div className=" flex flex-col items-center  text-center sm:mt-0 mt-4">
          <h1
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            className="text-4xl sm:text-1xl  leading-tight"
          >
            innovating Today, Empowering
            <br /> Tomorrow!
          </h1>
          {/* <h1 className="text-4xl sm:text-10xl leading-tight bg-gradient-to-r from-[#7186FF] to-[#B9A7CC] text-transparent bg-clip-text">
            Business Decisions Today
          </h1> */}
          <p
            data-aos="fade-up"
            className="text-[#0D0D0D] text-desc  max-w-[70%] font-semibold my-4 whitetextshadow"
          >
            Transform your data into actionable intelligence with our AI-driven
            SaaS, designed to optimize efficiency, automate workflows, and
            provide predictive insights for informed decision-making.
          </p>
          <div className="sm:max-w-[60%] max-w-full flex md:flex-row flex-col items-center justify-center">
            {/* <Link to={"/contact-us"}>
            <p className="primary-btn">Book a Demo</p>
          </Link> */}
            <Link data-aos="fade-up" to={"/services"}>
              <p className="primary-btn sm:my-0 my-3  sm:ml-4">
                Take Product Tour ▶
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative bottom-0 max-w-[90rem]  lg:translate-y-1/2 lg:mt-0 mt-10 border lg:border-none border-gray-300 lg:absolute shadow-lg rounded-lg w-[90%] sm:w-[80%] h-full  lg:h-[330px]  2xl:h-[270px] bg-white grid grid-cols-1 lg:grid-cols-3">
        <div className="w-full h-full border-dashed  border-b lg:border-b-0 flex flex-col p-5 justify-center gap-4 hover:bg-buttonBackground  items-center">
          <div className="w-[60px] h-[60px]  bg-white flex justify-center items-center rounded-lg">
            <img
              data-aos="fade-up"
              src={AdvancedAISolutions}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <h4 data-aos="fade-up" className="text-head text-center">
            Advanced AI Solutions
          </h4>
          <p data-aos="fade-up" className="text-center text-desc">
            Harnessing the power of AI, we craft innovative tools to automate
            processes, enhance decision-making, and unlock growth opportunities
            tailored to your business needs.
          </p>
        </div>
        <div className="border-dashed  lg:border-x w-ful h-[270px]l flex flex-col md:p-2 lg:p-5  p-5 items-center justify-center gap-4 hover:bg-buttonBackground">
          <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-lg">
            <img
              data-aos="fade-up"
              src={ScalableCloudInfrastructure}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <h4 data-aos="fade-up" className="text-head text-center">
            Scalable Cloud Infrastructure
          </h4>
          <p data-aos="fade-up" className="text-center text-desc">
            Our cutting-edge cloud solutions ensure seamless operations,
            offering flexibility, security, and scalability for businesses of
            all sizes to thrive in a dynamic digital landscape.
          </p>
        </div>
        <div className="w-full h-full border-dashed  border-t lg:border-t-0 flex flex-col p-5 items-center justify-center gap-4 hover:bg-buttonBackground">
          <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-lg">
            <img
              data-aos="fade-up"
              src={DataDrivenInsights}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <h4 data-aos="fade-up" className="text-head">
            Data-Driven Insights
          </h4>
          <p data-aos="fade-up" className="text-center text-desc">
            Transform raw data into actionable strategies with our advanced
            analytics solutions, empowering businesses to make informed
            decisions and stay ahead in the competitive market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
