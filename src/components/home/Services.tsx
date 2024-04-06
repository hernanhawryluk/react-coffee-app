import imageExpresso from "../../assets/coffee-white.png";

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
  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold font-cursive text-gray-800">
            Best Coffee For You
          </h1>
        </div>
        <div className="flex gap-14 md:gap-5 justify-center">
          {services.map((data, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="group rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl transition duration-300 max-w-[300px] relative"
              >
                <div className="h-[122px]">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
