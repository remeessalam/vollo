import { ourServices } from "../../constant";

const Services = () => {
  return (
    <div className="py-20 ">
      <div className="adjustedwidth mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {ourServices.map((obj, index) => (
            <div
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
                Unlock the power of predictive analytics, intelligent
                automation, and data-driven insights to accelerate your business
                and outpace the competition
              </p>
              <button className="w-full flex justify-between place-items-end mt-6 border-x border-t py-3 px-3 font-bold text-headerandfooterbg hover:bg-sky-400 hover:text-white">
                READ DETAILS <p className="text-6xl font-medium">›</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
