import CommonBanner from "../components/CommonBanner";
// import aboutVideo from "../assets/video/aboutusbanner.mp4";
import Aboutus from "./AboutPageSections/Aboutus";
import CompanyAchievements from "../components/CompanyAchievements";
import CompanyExperience from "./AboutPageSections/CompanyExperience";
import CompanyTeam from "./AboutPageSections/CompanyTeam";
import Testimonials from "./AboutPageSections/Testimonials";
import { images } from "../constant";
const AboutusPage = () => {
  const { aboutusbanner } = images;
  return (
    <>
      <CommonBanner
        image={aboutusbanner}
        isImage={true}
        title={"About Company"}
        page="About us"
        heading="Empowering Businesses Through Innovation"
        description="At Vollo Inc., we are dedicated to providing bespoke technology solutions that empower businesses to thrive in the dynamic digital landscape. Leveraging expertise in Artificial Intelligence, we craft innovative, scalable systems that drive efficiency, growth, and lasting success through collaboration and tailored strategies."
      />
      <Aboutus />
      <CompanyAchievements />
      <CompanyExperience />
      <CompanyTeam />
      <Testimonials />
    </>
  );
};

export default AboutusPage;
