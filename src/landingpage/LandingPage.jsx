import ContactForm from "../pages/ContactPageSections/ContactForm";
import Header from "./components/Header";
import LandingBanner from "./components/LandingBanner";
import LandingServices from "./components/LandingServices";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Testimonials from "../pages/AboutPageSections/Testimonials";
import Footer from "../Layout/Footer";
import PartnerUs from "../components/PartnerUs";
import LandingAbout from "./components/LandingAbout";
const LandingPage = ({ page }) => {
  return (
    <div>
      <Header />
      <div className="mt-20 lg:mt-[124px]">
        <LandingBanner page={page} />
        <div className="adjustedwidth mx-auto bg-[#DCD3E6] mt-5 sm:mt-20 pt-1 rounded-xl">
          <ContactForm />
        </div>
        <div>
          <LandingAbout page={page} />
        </div>
        <div className="adjustedwidth mx-auto mt-16">
          <LandingServices page={page} />
        </div>
        <div>
          <WhyChooseUs />
        </div>
        <div>
          <Portfolio page={page} />
        </div>
        <div>
          <PartnerUs />
        </div>
        <div>
          <Testimonials />
        </div>
        <div
          id="contact"
          className="adjustedwidth mx-auto bg-[#DCD3E6] mt-5 sm:mt-20 pt-1 rounded-xl"
        >
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
