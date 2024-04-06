import coffee from "../../assets/coffee-white.png";

const Hero = () => {
  return (
    <section className="min-h-[500px] bg-brandDark flex items-center">
      <div className="container flex items-center justify-between max-w-[1080px]">
        <div className="max-w-[500px]">
          <h1 className="leading-[5rem] text-6xl text-white font-semibold">
            We serve the richest{" "}
            <span className="font-cursive text-[8.4rem] leading-[3rem] font-bold text-primary">
              coffee
            </span>{" "}
            in the 20th ward
          </h1>
          <button className="mt-4 bg-gradient-to-r from-primary to-secondary broder-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200">
            Anteiku Coffee
          </button>
        </div>
        <img
          src={coffee}
          alt="Logo"
          className="-mr-[60px] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] sm:scale-110 spin"
        />
      </div>
    </section>
  );
};

export default Hero;
