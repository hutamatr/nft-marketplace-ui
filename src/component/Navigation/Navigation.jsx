import React, { useState } from "react";

import MenuIcon from "../../assets/icons/menu-icons.svg";

import SearchInput from "./SearchInput";
import MessageAndNotification from "./MessageAndNotification";
import ProfilePicture from "./ProfilePicture";
import MenuOverlay from "../MobileMenu/MenuOverlay";
import WalletAmount from "./WalletAmount";
import { useEffect } from "react";

const Navigation = (props) => {
  const [menuShow, setMenuShow] = useState(false);
  const [screen, setScreen] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth >= 640) {
  //     setScreen(true);
  //   }
  // }, []);

  console.log(window.innerWidth);

  const menuShowHandler = () => {
    setMenuShow(true);
  };

  const clickMenuHandler = () => {
    setMenuShow(false);
  };

  const menuButton = (
    <div onClick={menuShowHandler} className="block cursor-pointer sm:hidden">
      <img src={MenuIcon} alt="" />
    </div>
  );

  return (
    <nav className="sticky top-0 z-[60] bg-main-background p-4 sm:p-5">
      <div className="flex flex-row items-center justify-between sm:justify-start sm:gap-x-4 lg:justify-between lg:gap-x-5">
        {menuButton}
        <MenuOverlay onMenuShow={menuShow} onSetMenuShow={setMenuShow} />
        <div className="flex flex-row items-center justify-center gap-x-5">
          <SearchInput />
          <WalletAmount className="hidden md:block" />
        </div>
        <MessageAndNotification />
        <ProfilePicture />
      </div>
    </nav>
  );
};

export default Navigation;
