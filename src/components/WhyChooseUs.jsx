import { landingpageimages, whyChooseUs } from "../constant";
import RoundedHeading from "./RoundedHeading";

const WhyChooseUs = () => {
  const { whychooseusimg, mechanical, expert, target, cogwheel } =
    landingpageimages;
  return (
    <div className="mt-16">
      <div className="adjustedwidth mx-auto">
        <RoundedHeading text={" Why Choose Us"} />

        <div className="flex flex-col gap-5">
          <h2 data-aos="fade-up" className="text-4xl text-center">
            The Power Behind Our IT Solutions
          </h2>
          <p
            data-aos="fade-up"
            className="desc max-w-[40rem] mx-auto text-center"
          >
            We begin by evaluating your needs to gain a clear understanding of
            your goals, challenges, and requirements.
          </p>
          <div className="w-full ">
            <img
              src={whychooseusimg}
              className="object-contain max-h-[20rem] mx-auto"
              alt="why choose ussss"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 items-center gap-5 mt-9">
            <div className="flex flex-col gap-5 h-full">
              <div
                data-aos="fade-right"
                className="p-5 border  border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-7xl">{whyChooseUs[0].heading}</h5>
                  <img
                    src={mechanical}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-black text-start mt-3">
                  {whyChooseUs[0].description}
                </p>
              </div>
              <div
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
              </div>
            </div>
            {/* <div data-aos="fade-up" className="w-full lg:block hidden">
              <img
                src={whychooseusimg}
                className="object-contain max-h-[25rem] mx-auto"
                alt="why choose us"
              />
            </div> */}
            <div className="flex flex-col gap-5 h-full">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
