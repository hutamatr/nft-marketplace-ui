import React from "react";

import MenuItems from "./MenuItems";

import Logo from "../../assets/icons/logo.svg";
import CloseIcon from "../../assets/icons/close-icons.svg";

const MenuOverlay = (props) => {
  const closeMenuHandler = () => {
    props.onSetMenuShow(false);
  };
  return (
    <section
      className={`absolute top-0 z-[70] h-screen w-full bg-main-background duration-500 ${
        props.onMenuShow ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex flex-row items-center p-4">
        <span onClick={closeMenuHandler} className="cursor-pointer">
          <img src={CloseIcon} alt="" />
        </span>
        <div className="mx-auto flex flex-row items-center justify-center gap-x-3">
          <img src={Logo} alt="ethereum" />
          <h1 className="bg-gradient-to-r from-[#6763FD] to-[#B84EF1] bg-clip-text text-xl font-bold text-transparent">
            CuanMakers
          </h1>
        </div>
      </div>

      <MenuItems />
    </section>
  );
};

export default MenuOverlay;
