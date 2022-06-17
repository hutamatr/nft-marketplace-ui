import React from "react";

import Explore from "./Explore/Explore";
import ExploreCard from "./Explore/ExploreCard";
import TopArtist from "./TopArtist/TopArtist";
import RecentActivity from "./RecentActivity/RecentActivity";

const Main = () => {
  return (
    <main>
      <section className="mx-4 flex flex-col gap-y-5">
        <Explore />
        <ExploreCard />
        <TopArtist />
        <RecentActivity />
      </section>
    </main>
  );
};

export default Main;
