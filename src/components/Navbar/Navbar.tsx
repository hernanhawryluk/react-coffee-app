import { FaCoffee } from "react-icons/fa";
import logo from "../../assets/logo.png";

const navigation = [
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
        <div className="flex gap-2 items-center">
          <img src={logo} alt="Anteiku Logo" className="h-14 my-3" />
          <a
            href="#"
            className="text-4xl font-bold text-white font-cursive tracking-wide"
          >
            Anteiku Coffee Shop
          </a>
        </div>
        <div className="flex items-center gap-7 text-white/80">
          <ul className="flex gap-6">
            {navigation.map((data) => (
              <li
                key={data.name}
                className="hover:scale-105 hover:text-white/90 active:scale-95 transition"
              >
                <a href={data.path}>{data.name}</a>
              </li>
            ))}
          </ul>
          <button className="flex items-center gap-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 hover:text-white/90 active:scale-95 transition cursor-pointer">
            Order
            <FaCoffee className="text-xl" />
          </button>
        </div>
      </nav>
    </header>
  );
}
