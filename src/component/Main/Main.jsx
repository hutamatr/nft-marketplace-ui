import React from "react";

import Banner from "./Banner/Banner";
import Explore from "./Explore/Explore";
import ExploreCard from "./Explore/ExploreCard";
import TopArtist from "./TopArtist/TopArtist";
import RecentActivity from "./RecentActivity/RecentActivity";

const Main = () => {
  return (
    <main>
      <section className="flex flex-col gap-y-5 px-4 lg:grid lg:grid-flow-row-dense lg:grid-cols-3 lg:grid-rows-3 lg:gap-4">
        <div className="flex flex-col gap-y-4 lg:col-span-2">
          <Banner />
          <Explore />
          <ExploreCard />
        </div>
        <div className="flex flex-col gap-y-4">
          <TopArtist />
          <RecentActivity />
        </div>
      </section>
    </main>
  );
};

export default Main;
