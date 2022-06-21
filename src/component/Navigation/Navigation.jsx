import React from "react";

import MobileNavigation from "./MobileNavigation/MobileNavigation";
import DesktopNavigation from "./DesktopNavigation/DesktopNavigation";

const Navigation = ({ onShowMenu, onSetShowMenu }) => {
  return (
    <nav>
      <MobileNavigation
        onShowMenu={onShowMenu}
        onSetShowMenu={onSetShowMenu}
        className={"block md:hidden"}
      />
      <DesktopNavigation className={"hidden md:flex"} />
    </nav>
  );
};

export default Navigation;
