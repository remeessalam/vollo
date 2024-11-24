import { images } from "../constant";
import projectdone from "../assets/images/svg/projectsdone.svg";
import proteam from "../assets/images/svg/proteam.svg";
import customers from "../assets/images/svg/customers.svg";
import successrate from "../assets/images/svg/successrate.svg";
import Counter from "./Counter";
const CompanyAchievements = () => {
  const { companyachievementsimage } = images;
  return (
    <div
      data-aos="fade-up"
      className="relative w-full h-full  py-10 sm:overflow-hidden mt-10 sm:mt-20 bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute top-0 w-screen -z-10 h-full ">
        <img
          src={companyachievementsimage}
          alt="companyachievementsimage"
          className="w-full opacity-20 h-full object-cover"
        />
      </div>
      <div className="adjustedwidth mx-auto flex justify-center sm:gap-0 gap-7 sm:justify-between  flex-wrap">
        <div
          data-aos="fade-right"
          className="flex flex-col items-center sm:items-start"
        >
          <div className="flex h-[64px] w-[64px] bg-white rounded-full shadow-2xl  justify-center items-center">
            <img src={projectdone} alt="proteam" />
          </div>
          <h1 className="text-10xl w-[200px]">
            <Counter targetNumber={2600} suffix="k" />
          </h1>
          <h5 className="text-headerandfooterbg">Projects Done</h5>
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col items-center sm:items-start"
        >
          <div className="flex h-[64px] w-[64px] bg-white rounded-full shadow-2xl  justify-center items-center">
            <img src={proteam} alt="proteam" />
          </div>
          <h1 className="text-10xl w-[200px]">
            <Counter targetNumber={48} suffix="+" />
          </h1>
          <h5 className="text-headerandfooterbg">Professional Team</h5>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col items-center sm:items-start"
        >
          <div className="flex h-[64px] w-[64px] bg-white rounded-full shadow-2xl  justify-center items-center">
            <img src={projectdone} alt={customers} />
          </div>
          <h1 className="text-10xl w-[200px]">
            <Counter targetNumber={3000} suffix="k" />
          </h1>
          <h5 className="text-headerandfooterbg">Satisfied customers</h5>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col items-center sm:items-start"
        >
          <div className="flex h-[64px] w-[64px] bg-white rounded-full shadow-2xl  justify-center items-center">
            <img src={projectdone} alt={successrate} />
          </div>
          <h1 className="text-10xl w-[200px]">
            <Counter targetNumber={100} suffix="%" />
          </h1>
          <h5 className="text-headerandfooterbg">Our success rate</h5>
        </div>
      </div>
    </div>
  );
};

export default CompanyAchievements;
