import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import coffeeFooter from "../../assets/coffee-footer.jpg";
import { navigation } from "../Navbar/Navbar";

const backgroundStyle = {
  backgroundImage: `url(${coffeeFooter})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "400px",
  width: "100%",
};

export default function Footer() {
  return (
    <footer style={backgroundStyle} className="text-white">
      <span className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-4xl font-cursive"
            >
              Ateiku Coffee Shop
            </a>
            <p className="pt-4">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments - Your Perfect
              Expresso Escape
            </p>
            <a
              href="#"
              target="_blank"
              className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full"
            >
              Visit our YouTube Channel
            </a>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Footer Links
              </h1>
              <ul>
                {navigation.map((data) => {
                  return (
                    <li key={data.name} className="text-sm py-1">
                      <a
                        href={data.path}
                        className="inline-block hover:scale-105 transition"
                      >
                        {data.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul>
                {navigation.map((data) => {
                  return (
                    <li key={data.name} className="text-sm py-1">
                      <a
                        href={data.path}
                        className="inline-block hover:scale-105 transition"
                      >
                        {data.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">20th Ward, Tokyou</p>
                <p>+91 01 2345 6789</p>
                <div className="space-x-3 mt-6">
                  <a href="#">
                    <FaFacebook className="text-3xl inline-block hover:scale-105 transition" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl inline-block hover:scale-105 transition" />
                  </a>
                  <a href="#">
                    <FaInstagram className="text-3xl inline-block hover:scale-105 transition" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    </footer>
  );
}
