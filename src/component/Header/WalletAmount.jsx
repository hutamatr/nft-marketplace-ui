import React from "react";

import Card from "../UI/Card";

import ethereumIcons from "../../assets/icons/ethereum-icons.svg";

const WalletAmount = ({ className }) => {
  return (
    <section className={`${className}`}>
      <Card
        className={
          "flex min-w-max flex-row items-center gap-x-4 rounded-lg bg-sub-background-1 p-4 text-sm md:rounded-xl"
        }
      >
        <img src={ethereumIcons} alt="" className="h-6 w-6" />
        <span className="whitespace-nowrap text-sm text-white">
          543,694,489 ETH
        </span>
      </Card>
    </section>
  );
};

export default WalletAmount;
