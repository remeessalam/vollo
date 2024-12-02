import ReactPlayer from "react-player";
import { Link, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

const CommonBanner = ({
  video,
  title,
  isImage,
  image,
  page,
  heading,
  description,
}) => {
  const { pathname } = useLocation();
  return (
    <div className="flex relative justify-center items-center  w-screen ">
      <div className=" w-screen h-screen object-cover overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
        {isImage ? (
          <img
            src={image}
            alt="banner-image"
            className="object-cover h-full w-full"
          />
        ) : (
          <ReactPlayer
            url={video}
            loop={true}
            playsinline
            playing={true}
            width="100%"
            height="100%"
            muted
            className="react-player"
          />
        )}
      </div>
      {/* <h1 className="absolute text-4xl md:text-10xl text-white text-center ">
        {title}
      </h1> */}
      <div className="absolute left-0 text-4xl md:text-10xl grid grid-col-1 sm:grid-cols-2 text-white">
        <div>
          <h1 className=" text-white underline underline-offset-4 text-[40px] pl-5 sm:pl-10 leading-tight uppercase">
            {page}
          </h1>
          <h1 className=" pl-5 sm:pl-10 leading-tight">{heading}</h1>
          <p className="text-white/90 text-[16px] pl-5 sm:pl-10 mt-5">
            {description}
          </p>
        </div>
      </div>
      {/* {pathname !== "/contact-us" && (
        <Link
          className="absolute right-8 bottom-4 lg:inset-y-auto shadow-xl "
          to={"/contact-us"}
        >
          <button className="bg-white lg:px-8 px-4 py-2 lg:py-4 text-sky-400 rounded-full ">
            CONTACT US TODAY →
          </button>
        </Link>
      )} */}
    </div>
  );
};

export default CommonBanner;
