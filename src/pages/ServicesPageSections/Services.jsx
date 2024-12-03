import { ourServices } from "../../constant";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(ourServices[0]);
  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <div className="py-10 sm:py-20 ">
      <div className="adjustedwidth mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {ourServices.map((obj) => (
            <div
              data-aos="fade-up"
              key={obj.id}
              className="relative bg-white hover:bg-gradient-to-b from-[#967BB3] to-[#B9A7CC] aspect-square p-4 rounded overflow-hidden shadow flex justify-center items-center"
            >
              {/* Add content for each service item here */}
              <div className="flex flex-col justify-between h-full text-center items-center">
                <div className="flex justify-center items-center rounded-lg w-[60px] min-h-[60px] bg-white">
                  <img src={obj.img} alt="" width={40} height={40} />
                </div>
                <h2 className="text-head font-bold text-center ">
                  {obj.title}
                </h2>
                <p className="text-desc">{obj.paragraph}</p>
                <Link
                  // to={"/services"}
                  onClick={() => handleSelectServiceToShowDetail(obj)}
                  className="flex items-center border-b text-black w-[6.13rem] "
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
            // <div
            //   data-aos="fade-up"
            //   key={obj.id}
            //   className={`
            //     flex flex-col justify-between   text-center pt-5 px-5  bg-white h-full shadow-md

            //   `}
            // >
            //   <div className=" max-w-[365px] overflow-hidden mx-auto h-[239px] object-cover">
            //     <img
            //       src={obj.img}
            //       alt={obj.title}
            //       className="object-cover h-full"
            //     />
            //   </div>
            //   <h2 className="text-3xl sm:text-6xl text-headerandfooterbg text-start mt-6">
            //     {obj.title}
            //   </h2>
            //   <p className="text-decsriptioncolor text-start">
            //     {obj.paragraph}
            //   </p>
            //   <div className="w-fit mx-auto ">
            //     <button
            //       className="flex items-center justify-center  border-b-2 pl-1 border-black    place-items-end mt-6 text-center mx-auto mb-2 font-bold text-headerandfooterbg  hover:text-primary"
            //       onClick={() => handleSelectServiceToShowDetail(obj)}
            //     >
            //       READ DETAILS{" "}
            //       <MdKeyboardArrowRight className="w-[22px] h-[25px]" />
            //     </button>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4 z-10 w-screen"
        lockBackgroundScroll
      >
        <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-6 items-center text-white pb-[2rem]">
          {/* Title */}
          <h1 className="heading-2 text-2xl md:text-4xl">
            {selectedService.title}
          </h1>
          <img
            src={selectedService.img}
            alt={selectedService.title}
            className="w-[50%]  max-h-[65vh] rounded-3xl hover:scale-105 transition-all duration-700"
          />
          {/* Description */}
          <p className="desc whitespace-pre-line text-sm md:text-base text-center max-w-[80%]">
            {selectedService.description}
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default Services;
