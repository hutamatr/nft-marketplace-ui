import React, { useState } from "react";

import MenuIcon from "../../assets/icons/menu-icons.svg";

import SearchInput from "./SearchInput";
import MessageAndNotification from "./MessageAndNotification";
import ProfilePicture from "./ProfilePicture";
import MenuOverlay from "../MobileMenu/MenuOverlay";

const Navigation = (props) => {
  const [menuShow, setMenuShow] = useState(false);

  const menuShowHandler = () => {
    setMenuShow(true);
  };

  const clickMenuHandler = () => {
    setMenuShow(false);
  };

  const menuButton = (
    <div onClick={menuShowHandler} className="cursor-pointer">
      <img src={MenuIcon} alt="" />
    </div>
  );

  return (
    <nav className="sticky top-0 z-[60] bg-main-background p-4">
      <div className="flex flex-row items-center justify-between">
        {menuButton}
        <MenuOverlay onMenuShow={menuShow} onSetMenuShow={setMenuShow} />
        <SearchInput />
        <MessageAndNotification />
        <ProfilePicture />
      </div>
    </nav>
  );
};

export default Navigation;
