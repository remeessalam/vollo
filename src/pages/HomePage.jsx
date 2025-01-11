import CompanyAchievements from "../components/CompanyAchievements";
import FounderSection from "../components/MeetCeo";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "./HomePageSections/About";
import Banner from "./HomePageSections/Banner";
import CompanyApproach from "./HomePageSections/CompanyApproach";
import MeetCompany from "./HomePageSections/MeetCompany";
import Services from "./HomePageSections/Services";

const HomePage = () => {
  return (
    <>
      <Banner />
      <About />
      <CompanyAchievements />
      <Services />
      <MeetCompany />
      <WhyChooseUs />
      <CompanyApproach />
      <FounderSection />
    </>
  );
};

export default HomePage;
