import { landingpageimages } from "../../constant";

const LandingBanner = ({ page }) => {
  const { landingpagebannerapp, landingpagebannerweb } = landingpageimages;

  return (
    <div
      id="banner"
      className="pt-6 lg:pt-0 sm:pb-6 lg-pb-0 pb-0 flex justify-center items-center  lg:h-bannerheight text-black w-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${
          page === "web" ? landingpagebannerweb : landingpagebannerapp
        })`,
      }}
    >
      <div className="flex flex-col items-center  text-center">
        <h1 data-aos="fade-up" className="text-4xl sm:text-10xl leading-tight">
          {page === "web"
            ? "Build Scalable, High-Performance Websites"
            : "Mobile Apps that Drive Engagement"}
        </h1>
        <h1
          data-aos="fade-up"
          className="text-4xl sm:text-10xl  leading-tight bg-gradient-to-r from-[#7186FF] to-[#59066e] text-transparent bg-clip-text"
        >
          {page === "web"
            ? "Building Your Web Presence with Precision"
            : "Creating Mobile Apps that Empower Your Business"}
        </h1>

        <p
          data-aos="fade-up"
          className="text-[#0D0D0D] font-normal max-w-[70%] my-4"
        >
          {page === "web"
            ? "Our expert team creates innovative and responsive websites tailored to your business needs, optimizing user experience and performance across all devices."
            : "We specialize in building intuitive and user-friendly mobile applications for iOS and Android that engage users and enhance your brand's presence."}
        </p>
        <div className="sm:max-w-[60%] max-w-full flex md:flex-row flex-col items-center justify-center">
          <p data-aos="fade-up" className="primary-btn sm:mb-0 mb-4">
            Book a Demo
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
