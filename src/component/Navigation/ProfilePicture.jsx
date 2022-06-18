import React from "react";

import Ellipse74 from "../../assets/profile-picture.png";
import arrowIcons from "../../assets/icons/arrow-icons.svg";

const ProfilePicture = () => {
  return (
    <div className="md:flex md:flex-row md:items-center md:justify-center md:gap-x-4">
      <img src={Ellipse74} alt="" />
      <span className="hidden whitespace-nowrap font-medium text-white sm:block">
        Marvin McKinney
      </span>
      <div className="hidden cursor-pointer sm:block">
        <img src={arrowIcons} alt="" />
      </div>
    </div>
  );
};

export default ProfilePicture;
