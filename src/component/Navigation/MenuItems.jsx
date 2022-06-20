import React from "react";

import WalletAmount from "../Header/WalletAmount";
import menuIcons from "./MenuIcons";

const MenuItems = () => {
  return (
    <section className="flex flex-col gap-y-4 p-4">
      <WalletAmount className={"block md:hidden"} />

      <ul className="flex flex-col items-start gap-y-6 p-4 md:gap-y-9">
        {menuIcons.map((icon) => {
          return (
            <li
              className="flex flex-row items-center gap-x-6 hover:scale-105 hover:duration-300"
              key={icon.name}
            >
              <img src={icon.icon} alt="" className="md:w-11" />
              <a
                href="##"
                className="menu-link block text-lg font-medium text-white hover:text-violet-800 hover:duration-300"
              >
                {icon.name}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MenuItems;
