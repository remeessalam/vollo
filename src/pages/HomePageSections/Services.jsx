import { Link } from "react-router-dom";
import RoundedHeading from "../../components/RoundedHeading";
import { images, ourServices } from "../../constant";

const Services = () => {
  const { homepageaboutus } = images;
  const firstNineServices = ourServices.slice(0, 9);

  return (
    <div className="mt-20">
      <RoundedHeading text="our services" />
      <div className=" flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 adjustedwidth mt-14">
          {firstNineServices.map((obj) => (
            <div
              key={obj.id}
              className="relative bg-gradient-to-b from-[#967BB3] to-[#B9A7CC] h-[332px] p-4 rounded overflow-hidden shadow flex justify-center items-center"
            >
              {/* Add content for each service item here */}
              <h2 className="text-4xl font-bold text-center ">{obj.title}</h2>
              {/* <p>{obj.description}</p> */}
              <img
                src={obj.img || homepageaboutus}
                alt={obj.img || homepageaboutus}
                className="absolute w-full h-full object-cover  opacity-0 hover:opacity-100 transition-opacity duration-1000"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <Link to={"/services"}>
          <h3 className="secondary-btn w-[10rem]">View More</h3>
        </Link>
      </div>
    </div>
  );
};

export default Services;
