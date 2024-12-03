import { useState } from "react";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.contactNumber)
      newErrors.contactNumber = "Contact number is required.";
    if (!/^\d+$/.test(formData.contactNumber))
      newErrors.contactNumber = "Contact number must be numeric.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("Form submitted successfully!");
    // Reset form
    setFormData({
      fullName: "",
      contactNumber: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };
  const { pathname } = useLocation();
  console.log(pathname, "aslkdfjaslkdf");
  return (
    <div
      className={`mt-10 sm:mt-20 sm:px-5 ${
        pathname === `/web-development` || pathname === `/app-development `
          ? `pb-20`
          : `py-20`
      } `}
    >
      <h2 className="text-sechead sm:text-sechead px-1 text-center sm:leading-none leading-tight">
        Fill the form and contact with us
      </h2>
      <div className="w-full mx-auto sm:max-w-[40%] sm:px-4 mt-5">
        <h4 className="text-desc px-3 text-center">
          We&apos;d love to hear from you! Tell us about your project or
          schedule an appointment to discuss in detail.
        </h4>
      </div>
      <div className="flex justify-around md:gap-0 gap-5 md:flex-row flex-col items-center mt-4 sm:mt-16">
        <div className="w-full sm:px-0 px-3 ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your Full Name"
                  className="rounded-lg pl-5 sm:py-4 py-3 focus:outline-none"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  id="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter number"
                  className=" rounded-lg pl-5 sm:py-4 py-3 focus:outline-none"
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-sm">{errors.contactNumber}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your mail"
                className="rounded-lg pl-5 m:py-4 py-3 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                className=" rounded-lg pl-5 m:py-4 py-3 focus:outline-none"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Enter your massage"
                className=" rounded-lg p-2 focus:outline-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="primary-btn shadow-xl border w-full  font-semibold  px-8 rounded-full text-white  py-4  transition duration-300"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
