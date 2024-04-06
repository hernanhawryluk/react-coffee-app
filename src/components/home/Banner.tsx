import bannerImg from "../../assets/coffee-white.png";
import backgroundImg from "../../assets/coffee-texture.jpg";

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
        <div className="flex gap-6">
          <div>
            <img src={bannerImg} alt="Banner Image" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
