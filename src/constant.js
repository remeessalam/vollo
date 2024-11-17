import Logo from "./assets/images/Logo/Logo.png";
import phonenumbersvg from "./assets/images/svg/phonenumber.svg";
import homepagebanner from "./assets/images/homepagebanner.jpeg";
import homepageaboutus from "./assets/images/homepageaboutus.png";
import homepageoverimageone from "./assets/images/homepageoverimageone.png";
import homepageoverimagetwo from "./assets/images/homepageoverimagetwo.jpeg";
import homepagebackgroundvideo from "./assets/video/homepagebannervideo.mp4";
import verticaldivider from "./assets/images/verticaldivider.png";
import meetcompanyimageone from "./assets/images/meetcompanyimageone.png";
import meetcompanyimagetwo from "./assets/images/meetcompanyimagetwo.png";
import meetcompanyimagethree from "./assets/images/meetcompanyimagethree.png";
export const images = {
  Logo,
  phonenumbersvg,
  homepagebanner,
  homepageaboutus,
  homepageoverimageone,
  homepageoverimagetwo,
  verticaldivider,
};
export const video = { homepagebackgroundvideo };

export const ourServices = [
  { id: 1, title: "Artificial Intelligence (AI)" },
  { id: 2, title: "Mobile App Development" },
  { id: 3, title: "Website Development" },
  { id: 4, title: "UI/UX Design" },
  { id: 5, title: "Custom Software Development" },
  { id: 6, title: "Data Analytics" },
  { id: 7, title: "Internet of Things (IoT)" },
  { id: 8, title: "Robotic Process Automation (RPA)" },
  { id: 9, title: "Augmented Reality (AR) & Virtual Reality (VR)" },
];
export const routes = [
  { path: "/", name: "home" },
  { path: "/about-us", name: "about us" },
  { path: "/services", name: "services" },
  { path: "/blog", name: "blog" },
  { path: "/contact-us", name: "contact us" },
];

export const meetCompanyDetails = [
  {
    id: 1,
    img: meetcompanyimageone,
    description:
      "At Vollo Inc., our team blends creativity with technical expertise, bringing together seasoned professionals who possess extensive industry knowledge. We celebrate our diverse backgrounds, with each member contributing unique insights that drive our innovative spirit.",
  },
  {
    id: 2,
    img: meetcompanyimagetwo,
    description:
      "We specialize in a broad range of technology services tailored to meet the ever-changing needs of our clients. From groundbreaking Artificial Intelligence solutions that transform decision-making to user-friendly Mobile Applications that elevate engagement, our services are designed to adapt to the dynamic digital landscape.",
  },
  {
    id: 3,
    img: meetcompanyimagethree,
    description:
      "Our approach goes beyond more problem-solving; we turn challenges into opportunities for growth. By fostering open communication and collaboration, we ensure that every project benefits from our collective creativity and expertise. This synergy allows us to develop customized solutions that not only address current needs but also anticipate future demands.",
  },
];

export const companyProcess = [
  {
    id: 1,
    title: "Fine-tuned solution",
    description:
      "At Vollo Inc., we know that every business is unique. That’s why we take the time to understand your specific needs and challenges. Whether you need a custom software application or an AI-driven analytics platform, we craft solutions that fit seamlessly into your operations",
  },
  {
    id: 2,
    title: "Innovation-focused",
    description:
      "The digital landscape is always changing, and so are we. Our focus on continuous learning and innovation keeps us ahead of the curve. We leverage the latest technologies and methods to provide you with cutting-edge solutions.",
  },
  {
    id: 3,
    title: "Scalable frameworks",
    description:
      "As your business evolves, your technology should too. Our solutions are designed to be scalable, allowing you to grow and adapt without the limitations of outdated systems.",
  },
];
