import RoundedHeading from "../../components/RoundedHeading";
import { meetCompanyDetails } from "../../constant";

const MeetCompany = () => {
  return (
    <div className="mt-20">
      <RoundedHeading text="meet vollo inc" />
      <div className="flex justify-center">
        <div className="adjustedwidth sm:gap-5 gap-3 md:gap-8 lg:gap-14 flex flex-col mt-16">
          {meetCompanyDetails.map((obj) => (
            <div
              data-aos="fade-up"
              key={obj.id}
              className={`flex justify-between items-center  ${
                obj.id === 2
                  ? `md:flex-row flex-col`
                  : `flex-col md:flex-row-reverse`
              }`}
            >
              <div className="md:w-[45%]">
                <img src={obj.img} alt={obj.img} />
              </div>
              <div className="md:w-[45%]">
                <p>{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetCompany;
