import CommonBanner from "../components/CommonBanner";
import aboutVideo from "../assets/video/aboutpagebanner.mp4";
import Aboutus from "./AboutPageSections/Aboutus";
import CompanyAchievements from "../components/CompanyAchievements";
import CompanyExperience from "./AboutPageSections/companyExperience";
const AboutusPage = () => {
  return (
    <div>
      <CommonBanner video={aboutVideo} title={"About Company"} />
      <Aboutus />
      <CompanyAchievements />
      <CompanyExperience />
    </div>
  );
};

export default AboutusPage;
