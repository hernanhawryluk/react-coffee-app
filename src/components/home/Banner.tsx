import bannerImg from "../../assets/coffee-white.png";
import backgroundImg from "../../assets/coffee-texture.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const bgImage = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <section style={bgImage}>
      <div className="container">
        <div className="flex flex-col sm:flex-row gap-6">
          <div
            className="hidden sm:block"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <img
              src={bannerImg}
              alt="Banner Image"
              className="max-w-[450px] spin drop-shadow-xl"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl font-bold font-cursive mt-10 sm:mt-0 text-center sm:text-start"
            >
              Premium Blend Coffee
            </h1>
            <p
              data-aos="fade-up"
              data-aos-once="true"
              className="text-sm text-gray-500 tracking-wide leding-5"
            >
              We serve the richest coffee beans in the 20th ward, Anteiku Coffee
              shop is the best coffee shop in town for you to enjoy the best
              coffee in town.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10 sm:mb-0">
              <div className="space-y-5">
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-once="true"
                  className="flex items-center gap-3"
                >
                  <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                  <span>Premium Coffee</span>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-once="true"
                  className="flex items-center gap-3"
                >
                  <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100" />
                  <span>Hot Coffee</span>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-once="true"
                  className="flex items-center gap-3"
                >
                  <GiFoodTruck className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                  <span>Cold Coffee</span>
                </div>
              </div>
              <div
                data-aos="slide-left"
                data-aos-delay="300"
                data-aos-once="true"
                className="border-l-4 border-primary/50 pl-6 space-y-3"
              >
                <h1 className="text-4xl font-bold font-cursive">Tea Lover</h1>
                <p className="text-gray-500 text-sm">
                  Much like writing code, brewing the perfect cup of tea
                  requires patience, precision, and a dash of passioni to create
                  a comforting blend of flavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
