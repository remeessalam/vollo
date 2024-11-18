import CommonBanner from "../components/CommonBanner";
import aboutVideo from "../assets/video/aboutpagebanner.mp4";
import Aboutus from "./AboutPageSections/Aboutus";
import CompanyAchievements from "../components/CompanyAchievements";
import CompanyExperience from "./AboutPageSections/companyExperience";
import CompanyTeam from "./AboutPageSections/CompanyTeam";
import Testimonials from "./AboutPageSections/Testimonials";
const AboutusPage = () => {
  return (
    <>
      <CommonBanner video={aboutVideo} title={"About Company"} />
      <Aboutus />
      <CompanyAchievements />
      <CompanyExperience />
      <CompanyTeam />
      <Testimonials />
    </>
  );
};

export default AboutusPage;
