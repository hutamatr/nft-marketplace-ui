import React, { Fragment } from "react";

import Navigation from "./component/Navigation/Navigation";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
