import { Link } from "react-router-dom";
// import RoundedHeading from "../../components/RoundedHeading";
import { ourServices } from "../../constant";
import { MdKeyboardArrowRight } from "react-icons/md";

const Services = () => {
  // const { homepageaboutus } = images;
  const firstNineServices = ourServices.slice(0, 9);

  return (
    <div data-aos="fade-up" className="mt-10 sm:mt-20">
      {/* <RoundedHeading text="our services" /> */}
      <div className="gap-4 flex flex-col items-center adjustedwidth mx-auto">
        <h2 className="text-smhead text-decsriptioncolor leading-tight">
          What We Offer
        </h2>
        <h3 className="text-sechead sm:max-w-[60%] text-center leading-tight">
          Empowering Your Business with Innovative, Tailored Technology
          Solutions
        </h3>
        <p className="max-w-[70%] text-center text-desc">
          We provide customized, cutting-edge technology solutions designed to
          empower your business, streamline operations, and drive sustainable
          growth in the digital era.
        </p>
      </div>
      <div className=" flex justify-center w-full adjustedwidth mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 adjustedwidth mt-14">
          {firstNineServices.map((obj, index) => {
            const isLargeScreen = window.innerWidth >= 1024;
            const animationType = isLargeScreen
              ? index % 3 === 0
                ? "fade-right"
                : index % 3 === 1
                ? "fade-up"
                : "fade-left"
              : index % 2 === 0
              ? "fade-right"
              : "fade-left";
            return (
              <div
                data-aos={animationType}
                key={obj.id}
                className="relative bg-white  hover:bg-gradient-to-b from-[#967BB3] to-[#B9A7CC] h-full   rounded overflow-hidden shadow-lg border border-slate-100 flex justify-center items-center"
              >
                {/* <div className="m-4 min-h-full"> */}
                <div className="flex flex-col p-4 aspect-auto justify-between min-h-full text-center items-center">
                  <div className="flex justify-center items-center rounded-lg w-[60px] min-h-[60px] bg-white">
                    <img src={obj.img} alt="" width={40} height={40} />
                  </div>
                  <h2 className="text-head font-bold text-center ">
                    {obj.title}
                  </h2>
                  <p className="text-desc">{obj.paragraph}</p>
                  <Link
                    to={"/services"}
                    // onClick={() => handleSelectServiceToShowDetail(obj)}
                    className="flex text-[17px] mt-2 items-center border-b border-black text-black w-[6.13rem] "
                  >
                    Learn More <MdKeyboardArrowRight />
                  </Link>
                  {/* </div> */}
                </div>
                {/* <p>{obj.description}</p> */}
                {/* <img
                src={obj.img || homepageaboutus}
                alt={obj.img || homepageaboutus}
                className="absolute w-full h-full object-cover  opacity-0 hover:opacity-100 transition-opacity duration-1000"
              /> */}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-10 sm:mt-14">
        <Link to={"/services"}>
          <h3 className="secondary-btn text-[18px] underline underline-offset-8">
            View More
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Services;
