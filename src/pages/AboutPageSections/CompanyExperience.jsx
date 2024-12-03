import { images } from "../../constant";

const CompanyExperience = () => {
  const { aboutpageimagethree, aboutpageimagefour, aboutpageimagetwo } = images;
  return (
    <div className="w-full mt-10 sm:mt-20">
      <div className="adjustedwidth mx-auto flex md:flex-row flex-col-reverse justify-between">
        <div className="w-full md:w-[48%] mt-5 md:mt-0">
          <div
            data-aos="fade-right"
            className="rounded-lg overflow-hidden h-[450px]"
          >
            <img
              src={aboutpageimagethree}
              alt="aboutpageimagethree"
              className="h-full object-cover"
            />
          </div>
          <p data-aos="fade-right" className="my-6 text-desc">
            At Vollo Inc., our team combines creativity and technical expertise,
            bringing together a group of seasoned professionals with deep
            industry knowledge. We embrace our diverse backgrounds, with each
            member contributing unique insights that drive our innovative
            spirit. We specialize in a wide array of technology services,
            tailored to meet the ever-evolving needs of our clients. From
            pioneering Artificial Intelligence solutions that revolutionize
            decision-making to intuitive Mobile Applications that enhance user
            engagement, our offerings are designed to evolve with the fast-paced
            digital landscape. Whether automating business processes or
            developing scalable systems, we focus on delivering customized
            solutions that address both current challenges and future demands.
          </p>
          <div
            data-aos="fade-right"
            className="rounded-lg overflow-hidden h-[450px]"
          >
            <img
              src={aboutpageimagefour}
              alt="aboutpageimagefour"
              className="h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-[48%]">
          <h5
            data-aos="fade-left"
            className="text-black text-smhead flex items-center gap-1"
          >
            {/* <p className="w-[15px] h-[15px] rounded-full bg-[#FCAF3D]"></p> */}
            Meet Vollo Inc.
          </h5>
          <h2
            data-aos="fade-left"
            className="text-head sm:text-8xl  leading-tight"
          >
            Year of experience in this business field
          </h2>
          <p data-aos="fade-left" className="text-desc">
            At Vollo Inc., our team blends creativity with technical expertise,
            bringing together seasoned professionals who possess extensive
            industry knowledge. We celebrate our diverse backgrounds, with each
            member contributing unique insights that drive our innovative
            spirit. We specialize in a broad range of technology services
            tailored to meet the ever-changing needs of our clients. From
            groundbreaking Artificial Intelligence solutions that transform
            decision-making to user-friendly Mobile Applications that elevate
            engagement, our services are designed to adapt to the dynamic
            digital landscape.
          </p>
          <div
            data-aos="fade-left"
            className="my-6 rounded-lg overflow-hidden h-[450px]"
          >
            <img
              src={aboutpageimagetwo}
              alt="aboutpageimagetwo"
              className="w-full h-full object-cover"
            />
          </div>
          <p data-aos="fade-left" className="text-desc">
            At Vollo Inc., we combine creativity and technical expertise,
            bringing together a team of seasoned professionals with vast
            industry knowledge. We embrace the diversity of our backgrounds,
            where each member brings unique insights that fuel our innovative
            spirit.
          </p>
          <p data-aos="fade-left" className="mt-6 text-desc">
            We specialize in a wide range of technology services designed to
            meet the evolving needs of our clients. From cutting-edge Artificial
            Intelligence solutions that revolutionize decision-making to
            intuitive Mobile Applications that enhance user engagement, our
            services are built to adapt and thrive in today’s fast-paced digital
            environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyExperience;
