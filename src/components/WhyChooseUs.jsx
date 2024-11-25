import { images, landingpageimages, whyChooseUs } from "../constant";
// import RoundedHeading from "./RoundedHeading";

const WhyChooseUs = () => {
  const { whychooseusimg } = landingpageimages;
  const { whychooseusbackground } = images;
  return (
    <div
      className="mt-1 sm:mt-16 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${whychooseusbackground})` }}
    >
      <div className="flex flex-col lg:flex-row adjustedwidth mx-auto items-center">
        <div className="w-[45%]">
          <div className="w-full ">
            <img
              src={whychooseusimg}
              className="object-contain min-w-full max-h-[20rem] mx-auto"
              alt="why choose ussss"
            />
          </div>
        </div>
        <div className="w-[50%]">
          {/* <RoundedHeading text={" Why Choose Us"} /> */}
          <h2 className="text-4xl text-decsriptioncolor leading-tight">
            Why Choose Us
          </h2>
          <div className="flex flex-col gap-5">
            <h2
              data-aos="fade-up"
              className="text-4xl sm:text-start text-center"
            >
              The Power Behind Our IT Solutions
            </h2>
            <p
              data-aos="fade-up"
              className="desc max-w-[40rem]  sm:text-start text-center"
            >
              We begin by evaluating your needs to gain a clear understanding of
              your goals, challenges, and requirements.
            </p>

            <div className="grid items-center gap-5 mt-9">
              <div className="flex flex-col gap-5 h-full">
                {whyChooseUs.map((obj) => (
                  <div
                    key={obj.id}
                    data-aos="fade-right"
                    className=" w-full h-full"
                  >
                    <div className="flex w-full text-start items-center  gap-3">
                      <div className="min-w-[60px] h-[60px] bg-primary flex justify-center items-center rounded-lg">
                        <img
                          src={obj.icon}
                          className="h-[3rem] object-contain "
                          alt=""
                        />
                      </div>
                      <h5 className="text-7xl">{obj.heading}</h5>
                    </div>
                    <p className="desc text-black text-start mt-3">
                      {obj.description}
                    </p>
                  </div>
                ))}
                {/* <div
                  data-aos="fade-right"
                  className="p-5 border border-primary rounded-xl w-full h-full"
                >
                  <div className="flex w-full text-start items-center justify-between gap-3">
                    <h5 className="text-7xl">{whyChooseUs[1].heading}</h5>
                    <img
                      src={target}
                      className="h-[3rem] object-contain mb-3"
                      alt=""
                    />
                  </div>
                  <p className="desc text-black text-start mt-3">
                    {whyChooseUs[1].description}
                  </p>
                </div> */}
              </div>
              {/* <div data-aos="fade-up" className="w-full lg:block hidden">
              <img
                src={whychooseusimg}
                className="object-contain max-h-[25rem] mx-auto"
                alt="why choose us"
              />
            </div> */}
              {/* <div className="flex flex-col gap-5 h-full">
                <div
                  data-aos="fade-left"
                  className="p-5 border  border-primary rounded-xl w-full h-full"
                >
                  <div className="flex w-full text-start items-center justify-between gap-3">
                    <h5 className="text-7xl">{whyChooseUs[2].heading}</h5>
                    <img
                      src={expert}
                      className="h-[3rem] object-contain mb-3"
                      alt=""
                    />
                  </div>
                  <p className="desc text-black text-start mt-3">
                    {whyChooseUs[2].description}
                  </p>
                </div>
                <div
                  data-aos="fade-left"
                  className="p-5 border  border-primary  rounded-xl w-full h-full"
                >
                  <div className="flex w-full text-start items-center justify-between gap-3">
                    <h5 className="text-7xl">{whyChooseUs[3].heading}</h5>
                    <img
                      src={cogwheel}
                      className="h-[3rem] object-contain mb-3"
                      alt=""
                    />
                  </div>
                  <p className="desc text-black text-start mt-3">
                    {whyChooseUs[3].description}
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
