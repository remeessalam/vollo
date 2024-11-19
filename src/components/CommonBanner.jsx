import ReactPlayer from "react-player";
import { Link, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

const CommonBanner = ({ video, title, isImage, image }) => {
  const { pathname } = useLocation();
  return (
    <div className="flex relative justify-center items-center  w-screen ">
      <div className=" w-screen md:h-[472px] h-[200px] object-cover overflow-hidden">
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
      <h1 className="absolute text-4xl md:text-10xl text-white text-center ">
        {title}
      </h1>
      {pathname !== "/contact-us" && (
        <Link
          className="absolute right-8 bottom-4 lg:inset-y-auto shadow-xl "
          to={"/contact-us"}
        >
          <button className="bg-white lg:px-8 px-4 py-2 lg:py-4 text-sky-400 rounded-full ">
            CONTACT US TODAY →
          </button>
        </Link>
      )}
    </div>
  );
};

export default CommonBanner;
