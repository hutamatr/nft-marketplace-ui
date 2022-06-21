import React from "react";

import Ellipse74 from "../../assets/profile-picture.png";
import arrowIcons from "../../assets/icons/arrow-icons.svg";

const ProfilePicture = () => {
  return (
    <div className="min-w-max lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-x-4">
      <img src={Ellipse74} alt="" className="w-11" />
      <span className="hidden whitespace-nowrap font-medium text-white lg:block">
        Hutama Trirahmanto
      </span>
      <div className="hidden cursor-pointer lg:block">
        <img src={arrowIcons} alt="" />
      </div>
    </div>
  );
};

export default ProfilePicture;
