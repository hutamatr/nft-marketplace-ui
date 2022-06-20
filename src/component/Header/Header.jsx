import React from "react";

import MenuIcon from "../../assets/icons/menu-icons.svg";

import SearchInput from "./SearchInput";
import MessageAndNotification from "./MessageAndNotification";
import ProfilePicture from "./ProfilePicture";
import WalletAmount from "./WalletAmount";

const Navigation = ({ onShowMenuHandler }) => {
  const menuButton = (
    <div
      onClick={onShowMenuHandler}
      className="min-w-max cursor-pointer lg:hidden"
    >
      <img src={MenuIcon} alt="" />
    </div>
  );

  return (
    <header className="sticky top-0 z-[60] bg-main-background p-4 sm:p-5">
      <div className="flex flex-row items-center gap-x-3 md:gap-x-4">
        {menuButton}
        <SearchInput />
        <WalletAmount className="hidden md:block" />
        <MessageAndNotification />
        <ProfilePicture />
      </div>
    </header>
  );
};

export default Navigation;
