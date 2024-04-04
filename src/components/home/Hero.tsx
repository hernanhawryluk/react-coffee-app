import coffee from "../../assets/coffee-white.png";

const Hero = () => {
  return (
    <section className="min-h-[500px] bg-brandDark flex items-center">
      <div className="container flex items-center justify-between">
        <div className="max-w-[450px]">
          <h1 className="leading-[5rem] text-6xl text-white">
            We serve
            <br />
            the richest{" "}
            <span className="font-cursive text-[8.5rem] leading-[5rem] font-bold text-primary">
              coffee
            </span>{" "}
            in
            <br />
            the 20th ward
          </h1>
        </div>
        <div className="w-[30%]"></div>
        <img
          src={coffee}
          alt="Logo"
          className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] sm:scale-110 mx-auto spin"
        />
      </div>
    </section>
  );
};

export default Hero;
