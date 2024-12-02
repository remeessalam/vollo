// import ReactPlayer from "react-player";
// import RoundedHeading from "../../components/RoundedHeading";
import { companyProcess } from "../../constant";
// bg-gradient-to-r from-[#7186FF] to-[#B9A7CC]
const CompanyApproach = () => {
  // const { homepagebackgroundvideo } = video;
  // const {
  //   // homepageoverimageone,
  //   // homepageoverimagetwo,
  //   verticaldivider,
  // } = images;
  return (
    <div className="flex flex-col items-center mt-10 sm:mt-20">
      {/* <RoundedHeading text="our approach" /> */}
      <div className="adjustedwidth mt-6 sm:mt-16">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 "
        >
          <div className="w-full">
            <h2 className="text-4xl text-decsriptioncolor sm:text-start text-center leading-tight">
              Our Approach
            </h2>
            <h4 className="text-5xl leading-tight sm:text-start text-center text-black">
              Meet our process
            </h4>
          </div>
          <p className="max-w-full text-start">
            At Vollo Inc., we believe that the key to success lies in
            collaboration and understanding. We don’t just offer services; we
            build partnerships. Our holistic approach ensures that we become an
            integral part of your team, working hand-in-hand to align our
            strategies with your business goals
          </p>
        </div>
        {/* <div data-aos="fade-right" className="relative mt-16">
          <div className="w-[32%] md:h-[322px] absolute -bottom-[42px] md:bottom-[-56px] rounded-lg overflow-hidden left-0 lg:left-[-64px] opacity-80">
            <img src={homepageoverimagetwo} alt={homepageoverimagetwo} />
          </div>
          <div className="w-[32%] h-[33%] absolute top-7 right-0">
            <img src={homepageoverimageone} alt={homepageoverimageone} />
          </div>
          <div className="w-[70%] mx-auto rounded-lg overflow-hidden">
            <ReactPlayer
              url={homepagebackgroundvideo}
              loop={true}
              playsinline
              playing={true}
              width="100%"
              height="100%"
              muted
              className="react-player"
            />
           // <video src={homepagebackgroundvideo}></video>
          </div>
        </div> */}
      </div>
      <div className="adjustedwidth mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-4">
        {companyProcess.map((obj) => (
          <div key={obj.id} className="flex  flex-col text-start sm:text-start">
            <img
              src={obj.img}
              alt="verticaldivider"
              className="h-full object-cover rounded-xl max-h-[370px]"
            />
            <div className=" min-h-[250px] sm:min-h-[225px] -mt-[100px]  shadow-2xl bg-white/90 mx-5 p-4 rounded-xl text-center  flex flex-col justify-start items-center">
              <h3 className="text-2xl h-fit">{obj.title}</h3>
              <p className="h-fit desc">{obj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyApproach;
