import ReactPlayer from "react-player";
// import RoundedHeading from "../../components/RoundedHeading";
import { companyProcess, images, video } from "../../constant";
// bg-gradient-to-r from-[#7186FF] to-[#B9A7CC]
const CompanyApproach = () => {
  const { homepagebackgroundvideo } = video;
  const { homepageoverimageone, homepageoverimagetwo, verticaldivider } =
    images;
  return (
    <div className="flex flex-col items-center mt-10 sm:mt-20">
      {/* <RoundedHeading text="our approach" /> */}
      <div className="adjustedwidth mt-6 sm:mt-16">
        <div data-aos="fade-up" className="flex  items-center lg:items-start ">
          <div className="w-[50%]">
            <h2 className="text-4xl text-decsriptioncolor leading-tight">
              Our Approach
            </h2>
            <h4 className="text-5xl leading-tight text-black">
              Meet our process
            </h4>
          </div>
          <p className="max-w-[50%] text-start">
            At Vollo Inc., we believe that the key to success lies in
            collaboration and understanding. We don’t just offer services; we
            build partnerships. Our holistic approach ensures that we become an
            integral part of your team, working hand-in-hand to align our
            strategies with your business goals
          </p>
        </div>
        <div data-aos="fade-right" className="relative mt-16">
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
            {/* <video src={homepagebackgroundvideo}></video> */}
          </div>
        </div>
      </div>
      <div className="adjustedwidth mt-32 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companyProcess.map((obj) => (
          <div
            key={obj.id}
            className="relative flex flex-col px-7 text-center sm:text-start"
          >
            <img
              src={verticaldivider}
              alt="verticaldivider"
              className="w-[2px] h-full absolute left-0"
            />
            <h3 className="text-2xl">{obj.title}</h3>
            <p>{obj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyApproach;
