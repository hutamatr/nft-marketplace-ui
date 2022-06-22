import React, { useState } from "react";

// import DesktopNavigation from "./component/Navigation/DesktopNavigation/DesktopNavigation";
import Navigation from "./component/Navigation/Navigation";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  return (
    <div className="flex">
      <Navigation onShowMenu={showMenu} onSetShowMenu={setShowMenu} />
      <div className="w-full md:min-w-[85vw] lg:min-w-[90vw]">
        <Header onShowMenuHandler={showMenuHandler} />
        <Main />
      </div>
    </div>
  );
}

export default App;
