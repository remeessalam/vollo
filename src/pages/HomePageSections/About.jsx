import { Link } from "react-router-dom";
import RoundedHeading from "../../components/RoundedHeading";
import { images } from "../../constant";
const About = () => {
  const { homepageaboutus } = images;
  return (
    <div className="flex flex-col items-center mt-20 gap-16">
      <RoundedHeading text={"about us"} />
      <div className="flex flex-wrap flex-col items-center lg:flex-row gap-8 adjustedwidth">
        <div className="lg:w-[45%] w-full overflow-hidden rounded-xl">
          <img src={homepageaboutus} alt={homepageaboutus} />
        </div>
        <div className="lg:w-[45%] w-full">
          <p>
            At <strong>Vollo Inc.</strong>, we take immense pride in being
            pioneers at the forefront of technological innovation. Our mission
            is clear and unwavering: to provide world-class, tailor-made
            technology solutions that empower businesses to excel in today’s
            rapidly evolving digital landscape. Whether you are an ambitious
            startup, an established enterprise, or an organization seeking to
            transform its operations, Vollo Inc. stands as your ultimate
            technology partner. Our team comprises seasoned experts with
            extensive experience and deep insights into industry trends. We
            specialize in delivering customized solutions across a wide array of
            sectors by harnessing the potential of Artificial Intelligence. we
            tackle every unique challenge with creativity, precision, and a
            commitment to excellence. Our comprehensive approach not only
            ensures that our clients remain ahead of the competition but also
            enables them to achieve heightened operational efficiency and
            sustainable growth. At Vollo Inc., we firmly believe that true
            success is born from collaboration and innovation. That’s why we
            don’t merely deliver services—we become an integral part of your
            team. We work alongside you, driving your business goals forward
            with bespoke, scalable solutions that adapt and evolve as your
            organization grows. We envision a future where technology acts as a
            catalyst for growth and innovation, enabling businesses to unlock
            their full potential. Our vision drives us to create solutions that
            are not only effective but also sustainable, ensuring long-term
            success for our clients.
          </p>
          <div className="w-[150px] mt-2 sm:mt-5">
            <Link to={"/about-us"}>
              <h4 className="secondary-btn-small">Lern more</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
