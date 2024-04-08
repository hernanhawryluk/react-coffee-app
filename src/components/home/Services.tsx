import imageExpresso from "../../assets/coffee-white.png";
import Slider from "react-slick";

const services = [
  {
    id: 1,
    img: imageExpresso,
    name: "Espresso",
    description:
      "Espresso is a type of coffee drink prepared by forcing pressurized carbonated water through finely ground coffee beans.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: imageExpresso,
    name: "Americano",
    description:
      "Americano is a type of coffee drink prepared by forcing pressurized carbonated water through finely ground coffee beans.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: imageExpresso,
    name: "Cappuccino",
    description:
      "Cappuccino is a type of coffee drink prepared by forcing pressurized carbonated water through finely ground coffee beans.",
    aosDelay: "300",
  },
];

const Services = () => {
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
    <section className="py-10">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="text-5xl sm:text-6xl font-bold font-cursive text-gray-800">
            Best Coffee For You
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="300"
          className="mb-8"
        >
          <Slider {...sliderSettings}>
            {services.map((data) => {
              return (
                <a key={data.name} href="#" className="my-3 mb-10">
                  <div className="group rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl transition duration-300 max-w-[300px] mx-auto">
                    <div className="h-[122px] mt-5">
                      <img
                        src={data.img}
                        alt={data.name + " image"}
                        className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 transition"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-gray-500 group-hover:text-white transition text-sm line-clamp-2">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;
