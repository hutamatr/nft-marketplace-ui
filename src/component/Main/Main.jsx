import React from "react";

import Explore from "./Explore/Explore";
import ExploreCard from "./Explore/ExploreCard";

const Main = () => {
  return (
    <main>
      <section className="mx-4 flex flex-col gap-y-4">
        <Explore />
        <ExploreCard />
      </section>
    </main>
  );
};

export default Main;
