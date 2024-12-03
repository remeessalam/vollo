import { images } from "../../constant";

const Aboutus = () => {
  const { aboutpageimageone } = images;
  return (
    <div className="w-full mt-8 sm:mt-20">
      <div className="adjustedwidth mx-auto">
        <div className="flex flex-col gap-5 md:gap-4 md:flex-row justify-between">
          <div
            data-aos="fade-right"
            className="w-full md:w-[50%] object-cover min-h-full rounded-lg overflow-hidden"
          >
            <img
              src={aboutpageimageone}
              alt={aboutpageimageone}
              className="object-cover w-full min-h-full"
            />
          </div>
          <div data-aos="fade-left" className="w-full md:w-[45%]">
            <h3 className="text-smhead font-medium uppercase leading-tight ">
              About Us
            </h3>

            <h2 className="text-sechead leading-tight">
              Innovating Technology, Empowering Businesses
            </h2>
            <p className="text-desc mt-4">
              At Vollo Inc., we pride ourselves on being pioneers at the
              forefront of technological innovation. Our mission is to deliver
              world-class, tailor-made technology solutions that empower
              businesses to excel in the ever-evolving digital landscape.
              Whether you are an ambitious startup or an established enterprise,
              Vollo Inc. is your ultimate technology partner. With a team of
              seasoned experts possessing deep insights into industry trends, we
              specialize in crafting customized solutions by harnessing the
              power of Artificial Intelligence. Every challenge is approached
              with creativity, precision, and a commitment to excellence,
              ensuring that our clients stay ahead of the competition while
              achieving operational efficiency and sustainable growth.
              Collaboration and innovation are at the heart of what we do. We
              don't just deliver services—we become an integral part of your
              team, driving your business goals forward with scalable solutions
              that adapt and evolve as your organization grows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
