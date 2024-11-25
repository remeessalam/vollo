import { Link } from "react-router-dom";
import homepagebanner from "../../assets/images/homepagebanner.jpeg";
import { appDevelopmentServices } from "../../constant";
const Banner = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div
        // h-bannerheightsm  lg:h-bannerheight
        className=" flex flex-col justify-center items-center h-screen  text-black w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homepagebanner})` }}
      >
        <div
          data-aos="fade-up"
          className=" flex flex-col items-center  text-center sm:mt-0 mt-4"
        >
          <h1 className="text-4xl sm:text-10xl  leading-tight">
            Innovating Today, Empowering Tomorrow!
          </h1>
          <h1 className="text-4xl sm:text-10xl leading-tight bg-gradient-to-r from-[#7186FF] to-[#B9A7CC] text-transparent bg-clip-text">
            Business Decisions Today
          </h1>
          <p className="text-[#0D0D0D] font-normal max-w-[70%] my-4 ">
            Transform your data into actionable intelligence with our AI-driven
            SaaS, designed to optimize efficiency, automate workflows, and
            provide predictive insights for informed decision-making.
          </p>
          <div className="sm:max-w-[60%] max-w-full flex md:flex-row flex-col items-center justify-center">
            {/* <Link to={"/contact-us"}>
            <p className="primary-btn">Book a Demo</p>
          </Link> */}
            <Link to={"/services"}>
              <p className="primary-btn sm:my-0 my-3  sm:ml-4">
                Take Product Tour ▶
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative bottom-0 lg:mt-0 mt-10 border lg:border-none border-gray-300 lg:absolute shadow-lg rounded-lg w-[90%] sm:w-[80%] h-full lg:h-[270px] lg:-bottom-1/4 bg-white grid grid-cols-1 lg:grid-cols-3">
        <div className="w-full h-[270px] border-dashed  border-b lg:border-b-0 flex flex-col p-5 justify-center gap-4 hover:bg-buttonBackground  items-center">
          <div className="w-[60px] h-[60px]  bg-primary flex justify-center items-center rounded-lg">
            <img
              src={appDevelopmentServices[0].img}
              alt=""
              width={30}
              height={30}
            />
          </div>
          <h4 className="text-2xl">New Technology</h4>
          <p className="text-center">
            Bibendum odio natoque ullamcorper nullam pulvinar efficitur. Elit
            ipsum et natoque vitae feugiat at condimentum neque lacus.
          </p>
        </div>
        <div className="border-dashed  lg:border-x w-ful h-[270px]l flex flex-col p-5 items-center justify-center gap-4 hover:bg-buttonBackground">
          <div className="w-[60px] h-[60px] bg-primary flex justify-center items-center rounded-lg">
            <img
              src={appDevelopmentServices[0].img}
              alt=""
              width={30}
              height={30}
            />
          </div>
          <h4 className="text-2xl">New Technology</h4>
          <p className="text-center">
            Bibendum odio natoque ullamcorper nullam pulvinar efficitur. Elit
            ipsum et natoque vitae feugiat at condimentum neque lacus.
          </p>
        </div>
        <div className="w-full h-[270px] border-dashed  border-t lg:border-t-0 flex flex-col p-5 items-center justify-center gap-4 hover:bg-buttonBackground">
          <div className="w-[60px] h-[60px] bg-primary flex justify-center items-center rounded-lg">
            <img
              src={appDevelopmentServices[0].img}
              alt=""
              width={30}
              height={30}
            />
          </div>
          <h4 className="text-2xl">New Technology</h4>
          <p className="text-center">
            Bibendum odio natoque ullamcorper nullam pulvinar efficitur. Elit
            ipsum et natoque vitae feugiat at condimentum neque lacus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
