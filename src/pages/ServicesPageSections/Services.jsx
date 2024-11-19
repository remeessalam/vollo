import { ourServices } from "../../constant";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(ourServices[0]);
  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <div className="py-20 ">
      <div className="adjustedwidth mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {ourServices.map((obj, index) => (
            <div
              data-aos="fade-up"
              key={obj.id}
              className={`
                flex flex-col justify-between   text-center pt-5 px-5  bg-white h-full shadow-md
                ${
                  index === ourServices.length - 1 &&
                  ourServices.length % 3 === 1
                    ? "lg:col-span-1 self-center"
                    : ""
                }
              `}
            >
              <div className=" max-w-[365px] overflow-hidden mx-auto h-[239px] object-cover">
                <img
                  src={obj.img}
                  alt={obj.title}
                  className="object-cover h-full"
                />
              </div>
              <h2 className="text-6xl text-headerandfooterbg text-start mt-6">
                {obj.title}
              </h2>
              <p className="text-decsriptioncolor text-start">
                {obj.paragraph}
              </p>
              <button
                className="w-full flex justify-between place-items-end mt-6 border-x border-t py-3 px-3 font-bold text-headerandfooterbg hover:bg-sky-400 hover:text-white"
                onClick={() => handleSelectServiceToShowDetail(obj)}
              >
                READ DETAILS <p className="text-6xl font-medium">›</p>
              </button>
            </div>
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
