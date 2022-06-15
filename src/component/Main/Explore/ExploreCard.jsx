import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../../UI/card";
import Bidder from "./Bidder";
import HeartIcon from "../../../assets/icons/heart-icons.svg";

const ExploreCard = () => {
  const [featuredArt, setFeaturedArt] = useState([]);
  const [isError, setIsError] = useState({
    error: false,
    errorMessage: "",
  });

  useEffect(() => {
    const getDataFeaturedArtwork = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/featured-artworks",
        });

        if (response.status !== 200) {
          throw new Error();
        }

        const data = await response.data;
        setFeaturedArt(data);
      } catch (error) {
        if (error instanceof Error) {
          setIsError({
            error: true,
            errorMessage: error.message,
          });
        }
      }
    };
    getDataFeaturedArtwork();
  }, []);

  return (
    <div className="flex flex-row gap-x-4 overflow-x-auto">
      {featuredArt.map((item) => {
        return (
          <Card
            className={
              "flex min-w-full flex-col gap-y-4 rounded-xl bg-sub-background-1 p-3"
            }
            key={item.id}
          >
            <div className="relative">
              <img
                src={`${item.artworksUrl}`}
                alt={item.bar}
                loading="lazy"
                className="h-44 w-full rounded-xl"
              />
              <span className="absolute top-0 left-0 m-4 rounded-xl bg-[rgba(0,0,0,.4)] px-4 py-2 text-base font-medium text-white">
                Art
              </span>
              <span className="absolute top-0 right-0 m-4 cursor-pointer rounded-full bg-[rgba(0,0,0,.4)] p-3 hover:bg-[rgba(0,0,0,.7)]">
                <img src={HeartIcon} alt="" />
              </span>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h3 className="font-base text-lg text-white">Current Bid :</h3>
              <span className="text-lg font-medium text-blue-600">
                {item.currentBid} ETH
              </span>
            </div>

            <div className="flex flex-col gap-y-4 divide-y-2 divide-slate-600">
              <h1 className="text-lg font-medium text-white">{item.bar}</h1>
              <Bidder />
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ExploreCard;
