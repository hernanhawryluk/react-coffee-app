import Banner from "../../components/home/Banner";
import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import AppStore from "../../components/home/AppStore";
import Testimonials from "../../components/home/Testimonials";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
    </main>
  );
};
export default Home;
