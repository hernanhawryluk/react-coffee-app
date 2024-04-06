import appStoreImg from "../../assets/app_store.png";
import playStoreImg from "../../assets/play_store.png";
import bgImg from "../../assets/coffee-beans-bg.png";

const backgronudStyle = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  return (
    <section style={backgronudStyle} className="py-14">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
              Anteiku Coffe Shop is availabre for Android and iOS
            </h1>
            <div className="flex flex-wrap justify-center sm:justify-start items-center">
              <a href="#">
                <img
                  src={appStoreImg}
                  alt="App Store Image"
                  className="max-2-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <img
                  src={playStoreImg}
                  alt="Play Store Image"
                  className="max-2-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStore;
