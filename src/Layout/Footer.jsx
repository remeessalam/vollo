import { Link } from "react-router-dom";
import { companyDetails, images, socialmediaIcons } from "../constant";

const Footer = () => {
  const { Logo } = images;
  return (
    <div className="bg-headerandfooterbg w-full mt-32 ">
      <div className="adjustedwidth mx-auto md:pt-10">
        <div className="flex md:gap-0 gap-5 md:flex-row flex-col border-b pb-5 border-[#253450] justify-between items-start md:pt-0 pt-10 md:items-center text-white">
          <Link to="/">
            <div className="flex justify-center items-center min-w-fit">
              <img
                src={Logo}
                className="h-[3rem] md:h-[5.75rem] scale-125"
                alt="logo"
              />
              <h1 className="text-[32px] font-bold min-w-[8rem]">Vollo Inc</h1>
            </div>
          </Link>
          <div className="flex gap-2">
            {socialmediaIcons.map((obj, _) => (
              <div
                key={_}
                className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#132038] hover:bg-primary"
              >
                <img src={obj} alt={obj} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-5 py-7 lg:flex-row justify-between items-center lg:items-start">
          <div className="text-white w-full  lg:w-[50%] flex justify-between sm:flex-row flex-col sm:gap-0 gap-5">
            <div>
              <h3 className="font-bold">📍OFFICE ADDRESS:</h3>
              <p className="max-w-[265px] font-normal text-footerparacolor">
                {" "}
                {companyDetails.address}
              </p>
            </div>
            <div>
              <h3 className="font-bold">📞 CONTACT NO:</h3>
              <p className="font-normal text-footerparacolor">
                {companyDetails.phone}
              </p>
            </div>
          </div>
          <div className="text-white w-full lg:w-[40%] text-center">
            <h3 className="font-bold"> NEWS LETTER</h3>
            <div className="flex justify-between bg-[#132038]  rounded-full">
              <input
                type="text"
                className="bg-transparent placeholder-[#475063] pl-5 w-3/4 outline-none focus:outline-none focus:ring-0"
                placeholder="Enter mail"
              />
              <p className="secondary-btn "> SUBSCRIBE</p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-footerparacolor border-b border-[#253450] pb-1">
            <p>{companyDetails.link}</p>
          </div>
          <div className="text-white flex justify-between py-5">
            <p className=" max-w-[70%]">
              © 2024 AI Website. All Rights Reserved.
            </p>
            {/* <h4>
              Scroll Top <span>↑</span>
            </h4> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
