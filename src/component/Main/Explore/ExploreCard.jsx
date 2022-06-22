import React, { useEffect, useState } from "react";

import Card from "../../UI/Card";
import Bidder from "./Bidder";
import HeartIcon from "../../../assets/icons/heart-icons.svg";
import useAxios from "../../../hooks/use-axios";

const ExploreCard = () => {
  const [featuredArt, setFeaturedArt] = useState([]);

  const { isError, requestHttp } = useAxios();

  useEffect(() => {
    const featuredArtConf = (dataFeaturedArt) => {
      setFeaturedArt(dataFeaturedArt);
    };

    requestHttp(
      {
        url: "https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/featured-artworks",
        method: "get",
      },
      featuredArtConf
    );
  }, [requestHttp]);

  const cardContent = featuredArt.map((item) => {
    return (
      <Card
        className={
          "flex min-w-max flex-col gap-y-4 rounded-xl bg-sub-background-1 p-3 lg:min-w-fit"
        }
        key={item.id}
      >
        <div className="relative">
          <img
            src={`${item.artworksUrl}`}
            alt={item.bar}
            loading="lazy"
            className="h-44 w-72 rounded-xl lg:w-full"
          />
          <span className="absolute top-0 left-0 m-1 rounded-xl bg-[rgba(0,0,0,.4)] px-4 py-2 text-base font-medium text-white lg:text-sm">
            Art
          </span>
          <span className="absolute top-0 right-0 m-1 cursor-pointer rounded-full bg-[rgba(0,0,0,.4)] p-3 hover:bg-[rgba(0,0,0,.7)]">
            <img src={HeartIcon} alt="" className="lg:w-4" />
          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h3 className="font-base text-lg text-white lg:text-base">
            Current Bid :
          </h3>
          <span className="text-lg font-medium text-violet-700 lg:text-base">
            {item.currentBid} ETH
          </span>
        </div>

        <div className="flex flex-col gap-y-4 divide-y-2 divide-slate-600">
          <h1 className="text-lg font-medium text-white lg:text-base">
            {item.bar}
          </h1>
          <Bidder />
        </div>
      </Card>
    );
  });

  return (
    <div className="flex flex-row gap-x-4 overflow-x-auto lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible">
      {isError.error ? (
        <p className="mx-auto text-center text-lg font-semibold text-white lg:col-span-3">
          {isError.errorMessage}!
        </p>
      ) : (
        cardContent
      )}
    </div>
  );
};

export default ExploreCard;
