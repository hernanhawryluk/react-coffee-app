import logo from "../../assets/logo.png";
import MenuDesktop from "./MenuDestop";
import MenuMobil from "./MenuMobil";

export const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-secondary to-secondary/90">
      <nav className="container flex justify-between items-center">
        <div data-aos="fade-down" data-aos-once="true">
          <a
            href="#"
            className="flex items-center gap-2 text-4xl font-bold text-white font-cursive tracking-wide"
          >
            <img src={logo} alt="Anteiku Logo" className="h-14 my-3" />
            Anteiku Coffee Shop
          </a>
        </div>
        <MenuDesktop navigation={navigation} />
        <MenuMobil navigation={navigation} />
      </nav>
    </header>
  );
}
