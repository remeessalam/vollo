import CommonBanner from "../components/CommonBanner";
import FAQSection from "../components/Faq";
import { images } from "../constant";
import CompanyAddress from "./ContactPageSections/CompanyAddress";
import ContactForm from "./ContactPageSections/ContactForm";

const ContactPage = () => {
  const { contactuspagebanner } = images;
  return (
    <>
      <CommonBanner
        image={contactuspagebanner}
        isImage={true}
        title={"Contact us"}
        page="Contact us"
        heading="Get in Touch with Us"
        description="We’re here to help you take your business to the next level. Whether you have a question, need support, or want to discuss your next big project, our team is ready to assist. Reach out today and let’s start building your success story together."
      />
      <div className="adjustedwidth mx-auto mt-10 sm:mt-20 ">
        {/* <CompanyAddress /> */}
        <FAQSection />
        <div data-aos="fade-up" className="bg-[#DCD3E6]">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
