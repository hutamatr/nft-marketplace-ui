import React, { useState } from "react";

import MenuIcon from "../../assets/menu.svg";
import CloseIcon from "../../assets/Vector.svg";

import SearchInput from "./SearchInput";
import MessageAndNotification from "./MessageAndNotification";
import ProfilePicture from "./ProfilePicture";
import MenuOverlay from "../MobileMenu/MenuOverlay";

const Navigation = (props) => {
  const [menuShow, setMenuShow] = useState(false);

  const menuShowhandler = () => {
    !menuShow ? setMenuShow(true) : setMenuShow(false);
  };

  const clickMenuHandler = () => {
    setMenuShow(false);
  };

  const menuButton = !menuShow ? (
    <div onClick={menuShowhandler}>
      <img src={MenuIcon} alt="" className="cursor-pointer text-white" />
    </div>
  ) : (
    <div onClick={menuShowhandler} className="z-10">
      <img src={CloseIcon} alt="" className="cursor-pointer text-white" />
    </div>
  );

  return (
    <nav className="bg-main-background p-4">
      <div className="flex flex-row items-center justify-between">
        {menuButton}
        <MenuOverlay onMenuShow={menuShow} />
        <SearchInput />
        <MessageAndNotification />
        <ProfilePicture />
      </div>
    </nav>
  );
};

export default Navigation;
