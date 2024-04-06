import Banner from "../../components/home/Banner";
import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <Banner />
    </main>
  );
};
export default Home;
