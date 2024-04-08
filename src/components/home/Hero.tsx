import coffee from "../../assets/coffee-white.png";

const Hero = () => {
  return (
    <section className="min-h-[500px] bg-brandDark flex items-center">
      <div className="container flex flex-col-reverse sm:flex-row items-center justify-between max-w-[1080px]">
        <div className="max-w-[500px] px-3 sm:px-0">
          <h1
            data-aos="fade-up"
            data-aos-once="true"
            className="leading-[4rem] sm:leading-[5rem] text-5xl sm:text-6xl text-white font-semibold"
          >
            We serve the richest{" "}
            <span
              data-aos="zoom-out"
              data-aos-once="true"
              data-aos-delay="300"
              className="font-cursive text-[6.8rem] sm:text-[8.4rem] leading-[3rem] font-bold text-primary"
            >
              coffee
            </span>{" "}
            in the 20th ward
          </h1>
          <div className="flex justify-end sm:justify-start mb-8 sm:mb-0">
            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-4 bg-gradient-to-r from-primary to-secondary broder-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200"
            >
              Anteiku Coffee
            </button>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-once="true"
          className="sm:-mr-[60px] h-[90%] sm:w-[500px] sm:h-[500px]"
        >
          <img src={coffee} alt="Logo" className="sm:scale-110 spin" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
