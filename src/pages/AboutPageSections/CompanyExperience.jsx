import { images } from "../../constant";

const CompanyExperience = () => {
  const { aboutpageimagethree, aboutpageimagefour, aboutpageimagetwo } = images;
  return (
    <div className="w-full mt-20">
      <div className="adjustedwidth mx-auto flex md:flex-row flex-col-reverse justify-between">
        <div className="w-full md:w-[48%] mt-5 md:mt-0">
          <div className="rounded-lg overflow-hidden h-[450px]">
            <img
              src={aboutpageimagethree}
              alt="aboutpageimagethree"
              className="h-full object-cover"
            />
          </div>
          <p className="my-6">
            At Vollo Inc., our team blends creativity with technical expertise,
            bringing together seasoned professionals who possess extensive
            industry knowledge. We celebrate our diverse backgrounds, with each
            member contributing unique insights that drive our innovative
            spirit.We specialize in a broad range of technology services
            tailored to meet the ever-changing needs of our clients. From
            groundbreaking Artificial Intelligence solutions that transform
            decision-making to user-friendly Mobile Applications that elevate
            engagement, our services are designed to adapt to the dynamic
            digital landscape.
          </p>
          <div className="rounded-lg overflow-hidden h-[450px]">
            <img
              src={aboutpageimagefour}
              alt="aboutpageimagefour"
              className="h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-[48%]">
          <h5 className="text-[#FCAF3D] flex items-center gap-1">
            <p className="w-[15px] h-[15px] rounded-full bg-[#FCAF3D]"></p>
            Meet Vollo Inc.
          </h5>
          <h2 className="text-8xl">
            Year of experience in this business field
          </h2>
          <p>
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
          <div className="my-6 rounded-lg overflow-hidden h-[450px]">
            <img
              src={aboutpageimagetwo}
              alt="aboutpageimagetwo"
              className="w-full h-full object-cover"
            />
          </div>
          <p>
            At Vollo Inc., our team blends creativity with technical expertise,
            bringing together seasoned professionals who possess extensive
            industry knowledge. We celebrate our diverse backgrounds, with each
            member contributing unique insights that drive our innovative
            spirit.
          </p>
          <p className="mt-6">
            We specialize in a broad range of technology services tailored to
            meet the ever-changing needs of our clients. From groundbreaking
            Artificial Intelligence solutions that transform decision-making to
            user-friendly Mobile Applications that elevate engagement, our
            services are designed to adapt to the dynamic digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyExperience;
