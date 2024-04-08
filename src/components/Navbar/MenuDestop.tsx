import { FaCoffee } from "react-icons/fa";

type MenuDesktopProps = {
  navigation: {
    name: string;
    path: string;
  }[];
};

const MenuDesktop: React.FC<MenuDesktopProps> = ({ navigation }) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-delay="300"
      className="hidden sm:flex items-center gap-7 text-white/80"
    >
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
  );
};

export default MenuDesktop;
