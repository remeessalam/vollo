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
        <h2 className="text-4xl text-decsriptioncolor leading-tight">
          What We Offer
        </h2>
        <h3 className="text-3xl max-w-[60%] text-center leading-tight">
          Empowering Your Business with Innovative, Tailored Technology
          Solutions
        </h3>
        <p className="max-w-[70%] text-center">
          We provide customized, cutting-edge technology solutions designed to
          empower your business, streamline operations, and drive sustainable
          growth in the digital era.
        </p>
      </div>
      <div className=" flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 adjustedwidth mt-14">
          {firstNineServices.map((obj) => (
            <div
              data-aos="fade-up"
              key={obj.id}
              className="relative bg-gradient-to-b from-[#967BB3] to-[#B9A7CC] h-[332px] p-4 rounded overflow-hidden shadow flex justify-center items-center"
            >
              {/* Add content for each service item here */}
              <div className="flex flex-col justify-between h-full text-center items-center">
                <h2 className="text-4xl font-bold text-center ">{obj.title}</h2>
                <p>{obj.paragraph}</p>
                <Link
                  to={"/services"}
                  className="flex items-center border-b text-white w-[6.13rem] "
                >
                  Learn More <MdKeyboardArrowRight />
                </Link>
              </div>
              {/* <p>{obj.description}</p> */}
              {/* <img
                src={obj.img || homepageaboutus}
                alt={obj.img || homepageaboutus}
                className="absolute w-full h-full object-cover  opacity-0 hover:opacity-100 transition-opacity duration-1000"
              /> */}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10 sm:mt-14">
        <Link to={"/services"}>
          <h3 className="secondary-btn underline underline-offset-8">
            View More
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Services;
