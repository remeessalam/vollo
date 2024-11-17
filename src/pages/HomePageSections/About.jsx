import RoundedHeading from "../../components/RoundedHeading";
import { images } from "../../constant";
const About = () => {
  const { homepageaboutus } = images;
  return (
    <div className="flex flex-col items-center mt-20 gap-16">
      <RoundedHeading text={"about us"} />
      <div className="flex flex-wrap flex-col items-center md:flex-row gap-8 adjustedwidth">
        <div className="md:w-[45%] w-full overflow-hidden rounded-xl">
          <img src={homepageaboutus} alt={homepageaboutus} />
        </div>
        <div className="md:w-[45%] w-full">
          <p>
            At <strong>Vollo Inc</strong>, we take immense pride in being
            pioneers at the forefront of technological innovation. Our mission
            is clear and unwavering: to provide world-class, tailor-made
            technology solutions that empower businesses to excel in today’s
            rapidly evolving digital landscape. Whether you are an ambitious
            startup, an established enterprise, or an organization seeking to
            transform its operations, Vollo Inc. stands as your ultimate
            technology partner.
          </p>
          <div className="w-[200px]">
            <h4 className="secondary-btn">Lern more</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
