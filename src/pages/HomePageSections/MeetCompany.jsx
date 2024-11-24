// import RoundedHeading from "../../components/RoundedHeading";
import { meetCompanyDetails } from "../../constant";

const MeetCompany = () => {
  return (
    <div className="mt-10 sm:mt-20">
      <h2 className="text-4xl text-center text-decsriptioncolor leading-tight">
        meet vollo inc
      </h2>
      {/* <RoundedHeading text="meet vollo inc" /> */}
      <div className="flex justify-center">
        <div className="adjustedwidth  flex flex-col mt-2 sm:mt-10">
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
