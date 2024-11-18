import { images } from "../../constant";

const Banner = () => {
  const { homepagebanner } = images;

  return (
    <div
      className="flex justify-center items-center  lg:h-bannerheight text-black w-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${homepagebanner})` }}
    >
      <div className="flex flex-col items-center  text-center">
        <h1 className="text-8xl sm:text-10xl  leading-tight">
          Innovating Today, Empowering Tomorrow!
        </h1>
        <h1 className="text-8xl sm:text-10xl leading-tight bg-gradient-to-r from-[#7186FF] to-[#B9A7CC] text-transparent bg-clip-text">
          Business Decisions Today
        </h1>
        <p className="text-[#0D0D0D] font-normal max-w-[70%] my-4 ">
          Transform your data into actionable intelligence with our AI-driven
          SaaS, designed to optimize efficiency, automate workflows, and provide
          predictive insights for informed decision-making.
        </p>
        <div className="sm:max-w-[50%] max-w-full flex md:flex-row flex-col items-center justify-center">
          <p className="primary-btn">Book a Demo</p>
          <p className="secondary-btn sm:my-0 my-3">Take Product Tour ▶</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
