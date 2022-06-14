import React from "react";

import Logo from "../../assets/ethereum.svg";

const MenuOverlay = (props) => {
  return (
    <section
      className={`absolute top-0 h-screen w-full bg-main-background duration-500 ${
        props.onMenuShow ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex flex-row items-center justify-center gap-x-3 py-4">
        <img src={Logo} alt="ethereum" />
        <h1 className="bg-gradient-to-r from-[#6763FD] to-[#B84EF1] bg-clip-text text-xl font-bold text-transparent">
          CuanMakers
        </h1>
      </div>
    </section>
  );
};

export default MenuOverlay;
