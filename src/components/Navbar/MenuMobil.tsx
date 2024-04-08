import { useState } from "react";
import { FaCoffee } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

type MenuMobilProps = {
  navigation: {
    name: string;
    path: string;
  }[];
};

const MenuMobil: React.FC<MenuMobilProps> = ({ navigation }) => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex items-center sm:hidden text-white font-bold text-2xl">
      <button onClick={() => setMenu(!menu)}>
        <IoMenuSharp className="text-4xl" />
      </button>
      {menu && (
        <div className="z-10 absolute left-0 right-0 top-[10vh] h-[90vh] flex flex-col justify-center items-center gap-20 bg-secondary/95">
          <ul className="flex flex-col gap-20 items-center">
            {navigation.map((data) => (
              <li key={data.name}>
                <a href={data.path}>{data.name}</a>
              </li>
            ))}
          </ul>
          <button className="flex items-center gap-3 bg-primary/70 px-4 py-2 rounded-full">
            Order
            <FaCoffee className="text-xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuMobil;
