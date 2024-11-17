import RoundedHeading from "../../components/RoundedHeading";
import { ourServices } from "../../constant";

const Services = () => {
  return (
    <div className="mt-20">
      <RoundedHeading text="our services" />
      <div className=" flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 adjustedwidth mt-14">
          {ourServices.map((obj) => (
            <div
              key={obj.id}
              className="bg-gradient-to-b from-[#967BB3] to-[#B9A7CC] h-[332px] p-4 rounded shadow flex justify-center items-center"
            >
              {/* Add content for each service item here */}
              <h2 className="text-4xl font-bold text-center">{obj.title}</h2>
              <p>{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <h3 className="secondary-btn w-[10rem]">View More</h3>
      </div>
    </div>
  );
};

export default Services;
