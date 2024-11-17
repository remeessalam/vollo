import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { teamMembers } from "../../constant";
import shareIcon from "../../assets/images/svg/share.svg";
import msg from "../../assets/images/svg/msg.svg";
import msgwhite from "../../assets/images/svg/msgwhite.svg";
import sharewhite from "../../assets/images/svg/sharewhite.svg";
const CompanyTeam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hover, setHover] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  console.log(currentSlide, "thialkdfjmaslkdfd");

  return (
    <div className="py-20 mt-4  bg-[#F9F9F9]">
      <div className="adjustedwidth mx-auto">
        <div className="flex  flex-col items-center text-center">
          <h5 className="text-[#FCAF3D] flex items-center gap-1">
            <p className="w-[15px] h-[15px] rounded-full bg-[#FCAF3D]"></p>
            Our Experts
          </h5>
          <h3 className="text-8xl">Meet our team</h3>
        </div>
        <div className="mt-4">
          <div className="navigation-wrapper flex  items-center w-full ">
            <div
              className={`sm:w-[65px] w-[30px] h-[30px] sm:h-[65px] select-none  text-[17px] bg-white flex justify-center items-center text-black rounded-full  cursor-pointer ${
                currentSlide === 0
                  ? "opacity-40 pointer-events-none"
                  : "shadow-xl"
              }`}
              onClick={() => instanceRef.current?.prev()}
            >
              ←
            </div>
            <div ref={sliderRef} className="keen-slider  max-w-[80%] mx-auto">
              {teamMembers.map((obj) => (
                <div
                  key={obj.id}
                  onMouseEnter={() => setHover(obj.id)}
                  onMouseLeave={() => setHover("")}
                  className="keen-slider__slide hover:bg-secondary group bg-white  pt-4 flex flex-col justify-between shadow-md"
                >
                  <div className=" w-full   px-4">
                    <div className="aspect-square bg-gray-200 rounded-lg"></div>
                  </div>
                  <div className="text-center py-4 px-4">
                    <h3 className="text-7xl">{obj.name}</h3>
                    <p>{obj.position}</p>
                  </div>
                  <div className=" flex justify-center items-end border-t border-gray-200">
                    <div className="flex py-2 justify-center items-center group-hover:bg-[#9470bc]  w-1/2 border-r">
                      {/* <img src="" alt="" /> */}
                      {hover === obj.id ? (
                        <img
                          src={msgwhite}
                          alt="shareIcon"
                          className="w-[18px] h-[18px]"
                        />
                      ) : (
                        <img
                          src={msg}
                          alt="shareIcon"
                          className="w-[18px] h-[18px]"
                        />
                      )}
                    </div>
                    <div className=" w-1/2  h-full flex justify-center group-hover:text-white group-hover:bg-primary items-center">
                      {hover === obj.id ? (
                        <img
                          src={sharewhite}
                          alt="shareIcon"
                          className="w-[18px] h-[18px] text-white"
                        />
                      ) : (
                        <img
                          src={shareIcon}
                          alt="shareIcon"
                          className="w-[18px] h-[18px] text-white"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`sm:w-[65px] w-[30px] h-[30px] sm:h-[65px] select-none  text-[17px] bg-white flex justify-center items-center text-black rounded-full  cursor-pointer ${
                currentSlide ===
                instanceRef.current?.track.details.slides.length - 1
                  ? "opacity-40 pointer-events-none"
                  : "shadow-xl"
              }`}
              onClick={() => instanceRef.current?.next()}
            >
              →
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-decsriptioncolor">
            Contact Our Expert Team Memeber To Take Our
            <span className="text-sky-400 font-semibold"> Best Policies →</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyTeam;
