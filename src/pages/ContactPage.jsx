import CommonBanner from "../components/CommonBanner";
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
      />
      <div className="adjustedwidth mx-auto mt-10 sm:mt-20 bg-[#DCD3E6]">
        <CompanyAddress />
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
