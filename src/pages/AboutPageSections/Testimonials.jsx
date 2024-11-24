import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { images, testimonials } from "../../constant";

const animation = { duration: 30000, easing: (t) => t };

const Testimonials = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 2,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
    },
    created(s) {
      s.moveToIdx(2, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation);
    },
  });
  const [sliderRefTwo] = useKeenSlider({
    loop: true,
    rtl: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 2,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
    },
    created(s) {
      s.moveToIdx(2, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation);
    },
  });
  let { testimonialbackground } = images;
  return (
    <div
      className="mt-10 sm:mt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${testimonialbackground})` }}
    >
      <div className="">
        <div
          data-aos="fade-up"
          className="w-full flex flex-col items-center text-center"
        >
          <h3
            data-aos="fade-up"
            className="leading-tight text-4xl text-decsriptioncolor"
          >
            Important! I stopped work here and will fix this.
            <br /> Testimonials
          </h3>
          <h3 className="text-3xl sm:text-8xl leading-tight">
            Clients Feedback Examples You
          </h3>
          <p className="text-decsriptioncolor max-w-[95%] sm:max-w-[50%] text-center mt-7">
            At <strong>Vollo Inc</strong> , we take pride in the success of our
            clients. Here&apos;s what some of them have to say about their
            experience working with us
          </p>
        </div>
        <div className="flex flex-col ">
          <div
            id="srd"
            // data-aos="fade-up"
            ref={sliderRef}
            className="keen-slider flex sm:items-center mt-16 min-h-[400px]"
          >
            {testimonials.map((obj) => (
              <div
                key={obj.id}
                className="keen-slider__slide sm:h-[330px] shadow-lg w-full rounded-2xl round p-7 border sm:border-none"
              >
                <div className="w-full sm:flex-row flex-col gap-3 sm:gap-0 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={obj.img}
                      alt={obj.name}
                      className="rounded-full w-[69px] h-[69px] object-cover"
                    />
                    <h4 className="font-semibold">- {obj.name}</h4>
                  </div>
                  <img src={obj.starimg} alt={obj.name} className="h-[31px]" />
                </div>
                <div className="my-5">
                  <p className="text-center sm:text-start">{obj.says}</p>
                  <h3 className="text-decsriptioncolor text-center sm:text-start">
                    {obj.position}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div
            key="dfsf"
            // data-aos="fade-up"
            ref={sliderRefTwo}
            className="keen-slider flex sm:items-center mt-4 min-h-[400px]"
          >
            {testimonials.map((obj) => (
              <div
                key={obj.id}
                className="keen-slider__slide min-h-[330px] shadow-lg w-full rounded-2xl round p-7 border sm:border-none"
              >
                <div className="w-full sm:flex-row flex-col gap-3 sm:gap-0 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={obj.img}
                      alt={obj.name}
                      className="rounded-full w-[69px] h-[69px] object-cover"
                    />
                    <h4 className="font-semibold">- {obj.name}</h4>
                  </div>
                  <img src={obj.starimg} alt={obj.name} className="h-[31px]" />
                </div>
                <div className="my-5">
                  <p className="text-center sm:text-start">{obj.says}</p>
                  <h3 className="text-decsriptioncolor text-center sm:text-start">
                    {obj.position}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
