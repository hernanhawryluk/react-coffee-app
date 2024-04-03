import coffee from "../../assets/coffee-white.png";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="min-h-[550px] sm:min-h-[550px] bg-brandDark flex items-center">
        <div className="container flex items-center justify-between">
          <div className="max-w-[450px]">
            <h1 className="leading-[5rem] text-7xl text-white">
              We serve
              <br />
              the richest{" "}
              <span className="font-cursive text-9xl leading-[6rem] font-bold text-primary">
                coffee
              </span>{" "}
              in
              <br />
              the 20th ward
            </h1>
            <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-2 py-2 text-white hover:scale-105 active:scale-95 transition mt-4">
              Coffee and code
            </button>
          </div>
          <img
            src={coffee}
            alt="Logo"
            className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-110 mx-auto spin"
          />
        </div>
      </section>
    </main>
  );
};
export default Home;
