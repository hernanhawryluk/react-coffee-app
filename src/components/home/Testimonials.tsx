import Slider from "react-slick";
import testimonial1 from "../../assets/testimonials-1.webp";
import testimonial2 from "../../assets/testimonials-2.png";
import testimonial3 from "../../assets/testimonials-3.png";
import testimonial4 from "../../assets/testimonials-4.png";

const testimonalData = [
  {
    id: 1,
    name: "Rize Kamishiro",
    rate: 3,
    review:
      "The atmosphere was quite pleasant, and the coffee was decent. However, it lacked the exotic charm I usually seek in cafés. Overall, a satisfactory experience.",
    img: testimonial1,
  },
  {
    id: 1,
    name: "Hinami Fueguchi",
    rate: 5,
    review:
      "As a frequent visitor, I find the café Anteiku to be a comforting refuge. The warm ambiance and friendly staff make it a delightful place to unwind. The coffee is excellent too!",
    img: testimonial2,
  },
  {
    id: 2,
    name: "Nishiki Nishio",
    rate: 2,
    review:
      "The café Anteiku has its charms, but it's not my preferred haunt. The coffee is passable, but nothing remarkable. It's an okay spot for a quick caffeine fix, but I wouldn't linger.",
    img: testimonial3,
  },
  {
    id: 3,
    name: "Shu Tuskiyama",
    rate: 4,
    review:
      "Ah, the café Anteiku, a quaint establishment with an intriguing blend of scents. The coffee, while not extraordinary, complements the serene ambiance perfectly. A place worth savoring.",
    img: testimonial4,
  },
];

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-14 mb-10">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="text-7xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>
        <div>
          <Slider {...sliderSettings}>
            {testimonalData.map((data) => {
              return (
                <div key={data.id} className="my-6">
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 roudned-xl bg-primary/10 relative min-h-[300px]">
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt={data.name + " image"}
                        className="rounded-full w-20 h-20"
                      />
                    </div>

                    <div className="flex flex-col gap-4 my-auto">
                      <p className="text-xs text-gray-500">{data.review}</p>
                      <h2 className="text-3xl font-bold text-black/60 font-cursive">
                        {data.name}
                      </h2>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-3">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
