import React from "react";

import Bidder1 from "../../../assets/Ellipse75.png";
import Bidder2 from "../../../assets/Ellipse76.png";
import Bidder3 from "../../../assets/Ellipse77.png";
import Bidder4 from "../../../assets/Ellipse78.png";

const Bidder = () => {
  return (
    <section className="relative flex flex-row items-center justify-start pt-4">
      <img
        src={Bidder1}
        alt=""
        className="z-10 h-11 w-11 rounded-full ring-2 ring-main-background lg:h-8 lg:w-8"
      />
      <img
        src={Bidder2}
        alt=""
        className="absolute left-7 z-20 h-11 w-11 rounded-full ring-2 ring-main-background lg:h-8 lg:w-8"
      />
      <img
        src={Bidder3}
        alt=""
        className="absolute left-14 z-30 h-11 w-11 rounded-full ring-2 ring-main-background lg:h-8 lg:w-8"
      />
      <img
        src={Bidder4}
        alt=""
        className="absolute left-20 z-40 h-11 w-11 rounded-full ring-2 ring-main-background lg:h-8 lg:w-8"
      />
      <span className="absolute left-24 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#6763FD] ring-2 ring-main-background lg:h-8 lg:w-8">
        <p className="text-xs text-white">100+</p>
      </span>
    </section>
  );
};

export default Bidder;
