import React from "react";

import Card from "../UI/Card";
import HeaderDesign from "../../assets/icons/header-design.svg";

const Header = () => {
  return (
    <header>
      <Card
        className={
          "relative mx-4 mb-4 flex flex-col gap-y-3 bg-gradient-to-r from-gradient-1 to-gradient-2 p-4 md:h-60 md:gap-y-5 md:p-6"
        }
      >
        <h1 className="text-lg font-semibold text-white md:text-3xl">
          One Stop NFT Marketplace
        </h1>
        <p className="text-xs font-normal leading-5 text-white md:text-lg">
          Discover limited-edition digital artwork
          <br />
          Create, Sell, and Collect yours now!
        </p>
        <div className="flex flex-row gap-x-4">
          <button
            className="cursor-pointer rounded bg-white px-3 py-1 text-xs md:py-2 md:px-4 md:text-base"
            type="button"
          >
            <span className="bg-gradient-to-r from-[#6763FD] to-[#B84EF1] bg-clip-text text-transparent">
              Start Create
            </span>
          </button>
          <button className="cursor-pointer rounded bg-white px-3 py-1 text-xs md:py-2 md:px-4 md:text-base">
            <span className="bg-gradient-to-r from-[#6763FD] to-[#B84EF1] bg-clip-text text-transparent">
              How It Works
            </span>
          </button>
          <div className="absolute bottom-0 right-0">
            <img src={HeaderDesign} alt="" className="md:h-56" />
          </div>
        </div>
      </Card>
    </header>
  );
};

export default Header;
