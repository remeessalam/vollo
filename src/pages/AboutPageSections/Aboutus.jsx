import { images } from "../../constant";

const Aboutus = () => {
  const { aboutpageimageone } = images;
  return (
    <div className="w-full mt-20">
      <div className="adjustedwidth mx-auto">
        <div className="flex flex-col gap-5 md:gap-4 md:flex-row justify-between">
          <div className="w-full md:w-[45%]">
            <h3 className="text-10xl">About Us</h3>
            <p className="text-decsriptioncolor mt-4">
              At Vollo Inc., we take immense pride in being pioneers at the
              forefront of technological innovation. Our mission is clear and
              unwavering: to provide world-class, tailor-made technology
              solutions that empower businesses to excel in today’s rapidly
              evolving digital landscape. Whether you are an ambitious startup,
              an established enterprise, or an organization seeking to transform
              its operations, Vollo Inc. stands as your ultimate technology
              partner.
            </p>
            <p className="text-decsriptioncolor mt-4">
              Our team comprises seasoned experts with extensive experience and
              deep insights into industry trends. We specialize in delivering
              customized solutions across a wide array of sectors by harnessing
              the potential of Artificial Intelligence. we tackle every unique
              challenge with creativity, precision, and a commitment to
              excellence. Our comprehensive approach not only ensures that our
              clients remain ahead of the competition but also enables them to
              achieve heightened operational efficiency and sustainable growth.
            </p>
          </div>
          <div className="w-full md:w-[50%] object-cover min-h-full rounded-lg overflow-hidden">
            <img
              src={aboutpageimageone}
              alt={aboutpageimageone}
              className="object-cover w-full min-h-full"
            />
          </div>
        </div>
        <p className="text-decsriptioncolor mt-4">
          At Vollo Inc., we firmly believe that true success is born from
          collaboration and innovation. That’s why we don’t merely deliver
          services—we become an integral part of your team. We work alongside
          you, driving your business goals forward with bespoke, scalable
          solutions that adapt and evolve as your organization grows.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
