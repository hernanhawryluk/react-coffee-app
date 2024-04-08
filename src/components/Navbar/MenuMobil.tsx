import { useState } from "react";
import { FaCoffee } from "react-icons/fa";

type MenuMobilProps = {
  navigation: {
    name: string;
    path: string;
  }[];
};

const MenuMobil: React.FC<MenuMobilProps> = ({ navigation }) => {
  const [menu, setMenu] = useState(false);

  return (
    <div
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-delay="300"
      className="block sm:hidden items-center gap-7 text-white/80"
    >
      <button
        onClick={() => setMenu(!menu)}
        className="flex items-center gap-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 hover:text-white/90 active:scale-95 transition cursor-pointer"
      >
        <FaCoffee className="text-xl" />
      </button>
      {menu && (
        <div className="absolute left-0 top-0 flex flex-col gap-6">
          <ul className="flex flex-col gap-6">
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
      )}
    </div>
  );
};

export default MenuMobil;
